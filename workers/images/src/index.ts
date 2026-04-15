type Env = {
  MY_BUCKET: R2Bucket;
  IMAGES: ImagesBinding;
  IMAGES_SIGNING_KEY: string;
  INTERNAL_ORIGIN_TOKEN: string;
};

const DEFAULT_SIGN_TTL_SECONDS = 60 * 60;
const MAX_SIGN_TTL_SECONDS = 60 * 60 * 24;
const MAX_DIMENSION = 4000;
const MAX_QUALITY = 95;
const MIN_QUALITY = 30;
const ALLOWED_FORMATS = new Set<"avif" | "webp" | "jpeg" | "png">([
  "avif",
  "webp",
  "jpeg",
  "png",
]);
const ALLOWED_FITS = new Set<"cover" | "contain" | "scale-down" | "crop">([
  "cover",
  "contain",
  "scale-down",
  "crop",
]);

function json(status: number, payload: Record<string, unknown>): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function parsePositiveInt(
  value: string | null,
  max: number,
): number | undefined {
  if (!value) return undefined;
  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed) || parsed <= 0 || parsed > max) {
    return undefined;
  }
  return parsed;
}

function toHex(buffer: ArrayBuffer): string {
  return [...new Uint8Array(buffer)]
    .map((x) => x.toString(16).padStart(2, "0"))
    .join("");
}

async function createHmacHex(message: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(message));
  return toHex(signature);
}

async function signPrivateImageUrl(
  baseUrl: URL,
  signingKey: string,
  ttlSeconds: number,
): Promise<URL> {
  const signedUrl = new URL(baseUrl.toString());
  const expiry = Math.floor(Date.now() / 1000) + ttlSeconds;
  signedUrl.searchParams.set("exp", String(expiry));
  const toSign = `${signedUrl.pathname}?${signedUrl.searchParams.toString()}`;
  const signature = await createHmacHex(toSign, signingKey);
  signedUrl.searchParams.set("sig", signature);
  return signedUrl;
}

function sanitizeImageKey(pathname: string, prefix: string): string {
  const key = pathname.slice(prefix.length).replace(/^\/+/, "");
  if (!key || key.includes("..")) {
    throw new Error("Invalid image key");
  }
  return key;
}

async function getFromR2(env: Env, key: string): Promise<Response> {
  const object = await env.MY_BUCKET.get(key, {
    onlyIf: new Headers(),
  });

  if (!object || !("body" in object)) {
    return new Response("Not Found", { status: 404 });
  }

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("etag", object.httpEtag);
  headers.set("cache-control", "public, max-age=3600");

  return new Response(object.body, {
    status: 200,
    headers,
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    try {
      const url = new URL(request.url);

      if (url.pathname === "/health") {
        return json(200, {
          ok: true,
          service: "workers-images",
        });
      }

      if (request.method !== "GET") {
        return json(405, { error: "Method not allowed" });
      }

      if (url.pathname === "/sign-private") {
        const imageUrlRaw = url.searchParams.get("url");
        if (!imageUrlRaw) {
          return json(400, {
            error: "Missing required query parameter: url",
          });
        }

        const imageUrl = new URL(imageUrlRaw);
        if (imageUrl.hostname !== "imagedelivery.net") {
          return json(400, {
            error: "Only imagedelivery.net URLs are supported",
          });
        }

        const ttl =
          parsePositiveInt(url.searchParams.get("ttl"), MAX_SIGN_TTL_SECONDS) ??
          DEFAULT_SIGN_TTL_SECONDS;

        const signed = await signPrivateImageUrl(imageUrl, env.IMAGES_SIGNING_KEY, ttl);
        return json(200, {
          signedUrl: signed.toString(),
          expiresInSeconds: ttl,
        });
      }

      if (url.pathname.startsWith("/origin/")) {
        if (
          request.headers.get("x-internal-origin-token") !== env.INTERNAL_ORIGIN_TOKEN
        ) {
          return new Response("Forbidden", { status: 403 });
        }
        const key = sanitizeImageKey(url.pathname, "/origin/");
        return getFromR2(env, key);
      }

      if (url.pathname.startsWith("/img/")) {
        const key = sanitizeImageKey(url.pathname, "/img/");

        const width = parsePositiveInt(url.searchParams.get("w"), MAX_DIMENSION);
        const height = parsePositiveInt(url.searchParams.get("h"), MAX_DIMENSION);
        const quality =
          parsePositiveInt(url.searchParams.get("q"), MAX_QUALITY) ?? 85;
        const fitParam = url.searchParams.get("fit");
        const fit =
          fitParam && ALLOWED_FITS.has(fitParam as "cover")
            ? (fitParam as "cover" | "contain" | "scale-down" | "crop")
            : "cover";
        const formatParam = url.searchParams.get("format");
        const format =
          formatParam && ALLOWED_FORMATS.has(formatParam as "avif")
            ? (formatParam as "avif" | "webp" | "jpeg" | "png")
            : "webp";

        const options: RequestInitCfPropertiesImage = {
          fit,
          format,
          quality: Math.max(MIN_QUALITY, quality),
          metadata: "none",
          anim: false,
        };

        if (width) options.width = width;
        if (height) options.height = height;

        const originUrl = new URL(request.url);
        originUrl.pathname = `/origin/${key}`;
        originUrl.search = "";

        const transformed = await fetch(originUrl.toString(), {
          headers: {
            "x-internal-origin-token": env.INTERNAL_ORIGIN_TOKEN,
          },
          cf: {
            image: options,
          },
        });

        const responseHeaders = new Headers(transformed.headers);
        responseHeaders.set("cache-control", "public, max-age=3600, s-maxage=86400");

        return new Response(transformed.body, {
          status: transformed.status,
          headers: responseHeaders,
        });
      }

      return json(404, {
        error: "Not found",
        routes: ["/health", "/sign-private?url=<imagedelivery-url>&ttl=3600", "/img/<key>?w=1200&h=800&fit=cover&format=webp&q=85"],
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      return json(500, { error: message });
    }
  },
} satisfies ExportedHandler<Env>;
