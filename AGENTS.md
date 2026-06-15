# Agent / contributor notes

## Hosting (deploy target)

- **Primary production:** **Vercel** for this Next.js app (`web/`).
- **Git → Vercel:** Deployments run only if the Vercel project is **connected to this GitHub repo** and the **Root Directory** matches where the app lives.
  - In [Vercel Dashboard](https://vercel.com/dashboard) → your project → **Settings → General → Root Directory**, set **`web`** (not `spiffy-saturn`; that path was removed from the repo root when we moved to Next.js). If Root Directory still pointed at the old Astro folder, pushes can **skip production builds** or fail because nothing deployable changed under that path.
  - **Settings → Git:** confirm the correct repository and **Production Branch** (`main`). Use **Disconnect** / reconnect if the integration looks stale.
  - After changing Root Directory, trigger **Deployments → Redeploy** once, or push an empty commit, to verify.
- **Config files:** [`web/vercel.json`](web/vercel.json) applies when **Root Directory** is **`web`**. The repo-root [`vercel.json`](vercel.json) is **required** when Root Directory is the **repository root** (`.`): Vercel only reads `vercel.json` from the configured project root, so without `"framework": "nextjs"` there, a dashboard **Build Command** like `npm run vercel-build` is treated like a static **Other** build and fails with [missing `public` output](https://vercel.link/missing-public-directory). Root `vercel.json` must **not** set `installCommand` / `buildCommand` / `outputDirectory` unless you know you need them—keep **`framework": "nextjs"`** plus headers/redirects only.
- **Root Directory (recommended):** Prefer **`web`**. Then only [`web/vercel.json`](web/vercel.json) is used and Vercel runs default Next install/build. If you must use the repo root, keep root [`vercel.json`](vercel.json) with `"framework": "nextjs"` as above.
- **Error: `.next` not found at `/vercel/path0/.next`:** The Vercel **project root** is the repository root while `next build` writes to **`web/.next`**. Set **Root Directory** to **`web`** (Settings → General), leave **Output Directory** empty, and clear **Build Command** overrides unless you intentionally need [`web/package.json`](web/package.json) `vercel-build`. Alternatively, from the repo root with `VERCEL_TOKEN` set: `npm run vercel:set-root` ([`scripts/set-vercel-root-web.mjs`](scripts/set-vercel-root-web.mjs) PATCHes the project via the Vercel API).
- **Dashboard overrides:** Under **Build & Development**, set **Framework Preset** to **Next.js**, leave **Build Command** / **Install Command** empty (use defaults), and clear **Output Directory** (must not be `public`). If fields are locked, toggle **Override** off.
- **Root `package.json`:** Still includes `next` / `react` / `react-dom` for local `npm run build` from the repo root; Vercel installs from [`web/package.json`](web/package.json) when Root Directory is `web`.
- **Deploy context:** Repo-root [`.vercelignore`](.vercelignore) excludes `archive/`, `tasks/`, and `heyberkshire-source/` from the files Vercel uploads for a deployment (smaller upload, faster steps). Do **not** add a second `.vercelignore` inside `web/` unless you intend to replace that behavior—Vercel prefers the project-directory file and would stop reading the repo-root ignore ([docs](https://vercel.com/docs/deployments/vercel-ignore)).
- **Large media:** Prefer optimized WebP/AVIF under `web/public/images/`; avoid committing very large originals to Git (clone size affects CI and every Vercel git fetch). Use compression or a CDN for huge assets.
- **Cloudflare Pages:** not wired for this Next app. Using Next on Cloudflare would require [`@cloudflare/next-on-pages`](https://developers.cloudflare.com/pages/framework-guides/nextjs/) or a static export—do not assume the old Astro → Cloudflare flow applies.

## Before push (prevents Vercel failures)

- Run **`npm run verify`** from the repo root before `git push`. It checks that every `@/` import resolves **and is tracked by git**, then runs build/typecheck/lint in `web/`.
- Optional: **`sh scripts/install-pre-push-hook.sh`** installs a pre-push hook that runs verify automatically.
- See **[`docs/vercel-deployment.md`](docs/vercel-deployment.md)** for the deployment audit (incomplete commits, duplicate Vercel projects, Root Directory).

## Vercel production setup (one command)

After adding **`VERCEL_TOKEN`** ([create token](https://vercel.com/account/tokens)):

```bash
VERCEL_TOKEN=... npm run vercel:setup-production
```

This script:
- Confirms **`trilogysunstonehomes`** Root Directory = `web`
- Disconnects duplicate **`web`** project from GitHub (stops double deploys)
- Optionally sets `NEXT_PUBLIC_GSC_VERIFICATION` if provided
- Triggers a production redeploy

GitHub Actions alternative: add `VERCEL_TOKEN` to repo secrets, then run workflow **Vercel — production setup** from the Actions tab.

## CI (GitHub Actions)

- **[`.github/workflows/web-ci.yml`](.github/workflows/web-ci.yml)** — `main` pushes: install/build/typecheck/lint in **`web/`** (Next.js app). This is the deploy gate.
- **[`.github/workflows/nextjs.yml`](.github/workflows/nextjs.yml)** — GitHub Pages template; **`workflow_dispatch` only** so it does not run on every push (production is Vercel). Enable `push` there only after adapting it for `web/` + static export if you need Pages.
- **`.nvmrc`** — Node **20**, aligned with [`web/package.json`](web/package.json) `engines`.

## Cursor rules

- Global rules live under `~/.cursor/rules/` (`*.mdc`). To share them with the repo, **symlink or copy** `.cursor/rules/` into this project root (see `best-practices-2026` fleet guidance).

## IDX / MLS

- Do not change `heyberkshire-source/components/idx/*` or add IDX without explicit approval.

## v0 (Vercel) — design API

- **Keys:** `V0_API_KEY` from [v0.dev/chat/settings/keys](https://v0.dev/chat/settings/keys). Never commit live keys; use `.env.local` (gitignored) or Vercel project env.
- **Local CLI:** from `web/`, run `npm run design:v0 -- "your prompt"` (set `V0_API_KEY` first). Optional: `node --env-file=.env.local ./scripts/v0-pull-design.mjs`.
- **HTTP (automation):** `POST /api/v0/design` with header `Authorization: Bearer <V0_DESIGN_API_SECRET>` and JSON body `{ "prompt": "optional" }`. Requires both `V0_API_KEY` and `V0_DESIGN_API_SECRET` in the deployment environment. Returns chat metadata and assistant text (not full file bodies) to limit payload size.
