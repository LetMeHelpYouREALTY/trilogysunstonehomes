# Agent / contributor notes

## Hosting (deploy target)

- **Primary production:** **Vercel** for this Next.js app (`web/`).
- **Git → Vercel:** Deployments run only if the Vercel project is **connected to this GitHub repo** and the **Root Directory** matches where the app lives.
  - In [Vercel Dashboard](https://vercel.com/dashboard) → your project → **Settings → General → Root Directory**, set **`web`** (not `spiffy-saturn`; that path was removed from the repo root when we moved to Next.js). If Root Directory still pointed at the old Astro folder, pushes can **skip production builds** or fail because nothing deployable changed under that path.
  - **Settings → Git:** confirm the correct repository and **Production Branch** (`main`). Use **Disconnect** / reconnect if the integration looks stale.
  - After changing Root Directory, trigger **Deployments → Redeploy** once, or push an empty commit, to verify.
- **Config files:** With Root Directory **`web`**, Vercel reads [`web/vercel.json`](web/vercel.json) (redirects + headers). The repo-root [`vercel.json`](vercel.json) still documents `installCommand` / `buildCommand` for deploys that use the **repository root** as the project root (e.g. some CLI flows); prefer dashboard Root Directory = **`web`** for Git integration.
- **Framework preset:** Both [`web/vercel.json`](web/vercel.json) and the repo-root [`vercel.json`](vercel.json) set `"framework": "nextjs"` so Vercel uses the Next.js deployment path (`.next` / serverless) instead of the static **Other** preset that expects an output folder named `public` ([error: missing public directory](https://vercel.link/missing-public-directory)). If the dashboard still overrides this, open **Settings → Build & Development → Framework Preset → Next.js** and clear any **Output Directory** override.
- **Deploy context:** Repo-root [`.vercelignore`](.vercelignore) excludes `archive/`, `tasks/`, and `heyberkshire-source/` from the files Vercel uploads for a deployment (smaller upload, faster steps). Do **not** add a second `.vercelignore` inside `web/` unless you intend to replace that behavior—Vercel prefers the project-directory file and would stop reading the repo-root ignore ([docs](https://vercel.com/docs/deployments/vercel-ignore)).
- **Large media:** Prefer optimized WebP/AVIF under `web/public/images/`; avoid committing very large originals to Git (clone size affects CI and every Vercel git fetch). Use compression or a CDN for huge assets.
- **Cloudflare Pages:** not wired for this Next app. Using Next on Cloudflare would require [`@cloudflare/next-on-pages`](https://developers.cloudflare.com/pages/framework-guides/nextjs/) or a static export—do not assume the old Astro → Cloudflare flow applies.

## Cursor rules

- Global rules live under `~/.cursor/rules/` (`*.mdc`). To share them with the repo, **symlink or copy** `.cursor/rules/` into this project root (see `best-practices-2026` fleet guidance).

## IDX / MLS

- Do not change `heyberkshire-source/components/idx/*` or add IDX without explicit approval.

## v0 (Vercel) — design API

- **Keys:** `V0_API_KEY` from [v0.dev/chat/settings/keys](https://v0.dev/chat/settings/keys). Never commit live keys; use `.env.local` (gitignored) or Vercel project env.
- **Local CLI:** from `web/`, run `npm run design:v0 -- "your prompt"` (set `V0_API_KEY` first). Optional: `node --env-file=.env.local ./scripts/v0-pull-design.mjs`.
- **HTTP (automation):** `POST /api/v0/design` with header `Authorization: Bearer <V0_DESIGN_API_SECRET>` and JSON body `{ "prompt": "optional" }`. Requires both `V0_API_KEY` and `V0_DESIGN_API_SECRET` in the deployment environment. Returns chat metadata and assistant text (not full file bodies) to limit payload size.
