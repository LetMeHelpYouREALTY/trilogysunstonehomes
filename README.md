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

**Hosting:** Production is **Vercel** (Next.js in `web/`). Prefer **Root Directory** = **`web`** (then [web/vercel.json](web/vercel.json) is the only app config). If Root Directory is the **repo root**, you must also have [vercel.json](vercel.json) at the root with **`"framework": "nextjs"`** or Vercel treats the build as static and errors on a missing `public` output folder. Do not add `installCommand` / `buildCommand` / `outputDirectory` to `vercel.json` unless required. Repo-root [`.vercelignore`](.vercelignore) trims upload size. See [AGENTS.md](AGENTS.md).

**`vercel build`:** Run from `web/` after `vercel link` / `vercel pull` so project settings exist locally; otherwise `npm run build` in `web/` is the supported CI check (see GitHub Actions).

## Environment

See [web/.env.example](web/.env.example) for optional `NEXT_PUBLIC_*` variables.

## Tasks workflow

See [tasks/README.md](tasks/README.md) for how to use `tasks/to-do.md` and `tasks/lessons.md`.
