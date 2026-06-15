# Trilogy Sunstone Homes — Next.js

Short brand: Trilogy Sunstone Homes. Full formal line: Trilogy Sunstone | Homes by Dr Jan Duffy (see `src/lib/site-contact.ts`).

App Router site for [trilogysunstonehomes.com](https://www.trilogysunstonehomes.com).

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Env

Copy `.env.example` to `.env.local` if you use optional public vars (e.g. Search Console verification).

See [Google Search Console setup](../docs/google-search-console.md) for verification and sitemap submission steps.

### v0 Platform API (optional)

- `V0_API_KEY` — for `npm run design:v0` or server route `POST /api/v0/design`.
- `V0_DESIGN_API_SECRET` — bearer secret for the API route only; generate a long random string.

See [AGENTS.md](../AGENTS.md) v0 section.

## Deploy

Vercel: prefer **Root Directory** **`web`** so this folder’s [`vercel.json`](vercel.json) is the app config. If the project uses the **repository root** as Root Directory, the repo root must include a root `vercel.json` with `"framework": "nextjs"` (see repo [AGENTS.md](../AGENTS.md)).
