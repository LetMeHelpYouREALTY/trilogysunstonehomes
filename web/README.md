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

### v0 Platform API (optional)

- `V0_API_KEY` — for `npm run design:v0` or server route `POST /api/v0/design`.
- `V0_DESIGN_API_SECRET` — bearer secret for the API route only; generate a long random string.

See [AGENTS.md](../AGENTS.md) v0 section.

## Deploy

Vercel: set project **Root Directory** to **`web`** (required). Config lives in [`vercel.json`](vercel.json) in this folder only—no monorepo-root `vercel.json`.
