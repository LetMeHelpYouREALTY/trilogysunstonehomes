# Trilogy Sunstone Homes

Marketing site for Trilogy Sunstone Homes (Las Vegas 55+ community). Full formal branding: Trilogy Sunstone | Homes by Dr Jan Duffy — see `web/src/lib/site-contact.ts`. Built with **Next.js** (App Router) in `web/`, deployed on **Vercel**.

## Structure

- **web/** – Next.js app (`src/app`, components, metadata, sitemap). Production build: `web/.next`.
- **archive/spiffy-saturn/** – Previous Astro implementation (retired after Next migration).
- **tasks/** – Planning and lessons: [tasks/README.md](tasks/README.md).

## Build and deploy

From repo root:

```bash
cd web && npm install && npm run build
```

Or from monorepo root:

```bash
npm run build
```

**Hosting:** Production is **Vercel** (Next.js in `web/`). In the Vercel project **Settings → General → Root Directory**, set **`web`** so Git pushes trigger builds (leave `spiffy-saturn` behind—that folder is archived). Redirects and headers for the Next app live in [web/vercel.json](web/vercel.json); the root [vercel.json](vercel.json) still has install/build commands for root-based deploys. Repo-root [`.vercelignore`](.vercelignore) keeps `archive/`, `tasks/`, and the optional `heyberkshire-source/` clone out of the Vercel upload. Cloudflare Pages is not the primary target unless you add a Next-on-Pages pipeline—see [AGENTS.md](AGENTS.md).

**`vercel build`:** Run from `web/` after `vercel link` / `vercel pull` so project settings exist locally; otherwise `npm run build` in `web/` is the supported CI check (see GitHub Actions).

## Environment

See [web/.env.example](web/.env.example) for optional `NEXT_PUBLIC_*` variables.

## Tasks workflow

See [tasks/README.md](tasks/README.md) for how to use `tasks/to-do.md` and `tasks/lessons.md`.
