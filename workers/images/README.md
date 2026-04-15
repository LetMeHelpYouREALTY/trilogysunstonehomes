# Cloudflare Images Worker Setup

This Worker provides:

- R2-backed image origin route (`/origin/<key>`)
- Secure transform route (`/img/<key>?w=&h=&fit=&format=&q=`)
- Signed URL generation for Cloudflare Images private delivery (`/sign-private?url=...&ttl=...`)

## 1) Prerequisites

- Cloudflare account with Workers, R2, and Images enabled
- Wrangler available (`npx wrangler --version`)

## 2) Configure bindings

Edit `wrangler.jsonc` and set:

- `r2_buckets[0].bucket_name` to your real R2 bucket

The Images binding is already declared as:

- `"images": { "binding": "IMAGES" }`

## 3) Add secrets

From this folder:

```bash
npx wrangler secret put IMAGES_SIGNING_KEY
npx wrangler secret put INTERNAL_ORIGIN_TOKEN
```

- `IMAGES_SIGNING_KEY`: key from Images dashboard (Hosted Images > Keys)
- `INTERNAL_ORIGIN_TOKEN`: random long secret used to protect `/origin/*`

## 4) Local dev

```bash
npx wrangler dev
```

## 5) Test endpoints

```bash
# health
curl "http://127.0.0.1:8787/health"

# transform from R2 key
curl "http://127.0.0.1:8787/img/example/property.jpg?w=1200&h=800&fit=cover&format=webp&q=85" -o out.webp

# sign private Cloudflare Images delivery URL
curl "http://127.0.0.1:8787/sign-private?url=https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/<VARIANT>&ttl=3600"
```

## 6) Deploy

```bash
npx wrangler deploy
```

## 7) Wire Next.js app

Add the Worker URL to your `web/.env.local`:

```bash
NEXT_PUBLIC_IMAGES_WORKER_URL=https://<your-worker-subdomain>.workers.dev
```

In the app, internal image keys (for example `blog/cover.jpg`) are transformed through:

```text
https://<worker>/img/blog/cover.jpg?w=1200&h=675&fit=cover&format=webp&q=85
```

Absolute external URLs remain untouched unless you explicitly proxy/migrate them.

## Notes

- Keep `IMAGES_SIGNING_KEY` and `INTERNAL_ORIGIN_TOKEN` as secrets only.
- For best cache behavior, do not include resize options in custom cache keys.
- This Worker enforces safe bounds on dimensions and quality.
