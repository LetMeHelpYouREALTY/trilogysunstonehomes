type WorkerImageOptions = {
  width?: number;
  height?: number;
  fit?: "cover" | "contain" | "scale-down" | "crop";
  format?: "webp" | "avif" | "jpeg" | "png";
  quality?: number;
};

const IMAGE_WORKER_BASE_URL = process.env.NEXT_PUBLIC_IMAGES_WORKER_URL;
const HTTP_PROTOCOLS = new Set(["http:", "https:"]);

function normalizeWorkerBase(url: string): string {
  return url.replace(/\/+$/, "");
}

function clampInt(value: number | undefined, min: number, max: number): number | undefined {
  if (typeof value !== "number" || !Number.isFinite(value)) return undefined;
  return Math.max(min, Math.min(max, Math.round(value)));
}

function encodePathKey(key: string): string {
  return key
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

function isAbsoluteHttpUrl(src: string): boolean {
  try {
    const parsed = new URL(src);
    return HTTP_PROTOCOLS.has(parsed.protocol);
  } catch {
    return false;
  }
}

function normalizeSrc(src: string): string | undefined {
  const trimmed = src.trim();
  if (!trimmed) return undefined;

  if (trimmed.startsWith("//")) {
    return `https:${trimmed}`;
  }

  return trimmed;
}

export function getOptimizedImageUrl(src: string | undefined, options: WorkerImageOptions = {}) {
  const normalizedSrc = src ? normalizeSrc(src) : undefined;
  if (!normalizedSrc) return undefined;

  if (isAbsoluteHttpUrl(normalizedSrc)) return normalizedSrc;
  if (!IMAGE_WORKER_BASE_URL) return normalizedSrc;

  const normalizedKey = normalizedSrc.replace(/^\/+/, "");
  if (!normalizedKey || normalizedKey.includes("..")) return normalizedSrc;

  const width = clampInt(options.width, 1, 4000);
  const height = clampInt(options.height, 1, 4000);
  const quality = clampInt(options.quality, 30, 95);
  const fit = options.fit ?? "cover";
  const format = options.format ?? "webp";

  const transformed = new URL(
    `/img/${encodePathKey(normalizedKey)}`,
    `${normalizeWorkerBase(IMAGE_WORKER_BASE_URL)}/`,
  );
  if (width) transformed.searchParams.set("w", String(width));
  if (height) transformed.searchParams.set("h", String(height));
  if (quality) transformed.searchParams.set("q", String(quality));
  transformed.searchParams.set("fit", fit);
  transformed.searchParams.set("format", format);

  return transformed.toString();
}
