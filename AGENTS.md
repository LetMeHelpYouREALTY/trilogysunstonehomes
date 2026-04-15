# Agent / contributor notes

## Hosting (deploy target)

- **Primary production:** **Vercel** for this Next.js app (`web/`). Root [`vercel.json`](vercel.json) runs `cd web && npm install && npm run build` and keeps apex → `www` redirects.
- **Cloudflare Pages:** not wired for this Next app. Using Next on Cloudflare would require [`@cloudflare/next-on-pages`](https://developers.cloudflare.com/pages/framework-guides/nextjs/) or a static export—do not assume the old Astro → Cloudflare flow applies.

## Cursor rules

- Global rules live under `~/.cursor/rules/` (`*.mdc`). To share them with the repo, **symlink or copy** `.cursor/rules/` into this project root (see `best-practices-2026` fleet guidance).

## IDX / MLS

- Do not change `heyberkshire-source/components/idx/*` or add IDX without explicit approval.

## v0 (Vercel) — design API

- **Keys:** `V0_API_KEY` from [v0.dev/chat/settings/keys](https://v0.dev/chat/settings/keys). Never commit live keys; use `.env.local` (gitignored) or Vercel project env.
- **Local CLI:** from `web/`, run `npm run design:v0 -- "your prompt"` (set `V0_API_KEY` first). Optional: `node --env-file=.env.local ./scripts/v0-pull-design.mjs`.
- **HTTP (automation):** `POST /api/v0/design` with header `Authorization: Bearer <V0_DESIGN_API_SECRET>` and JSON body `{ "prompt": "optional" }`. Requires both `V0_API_KEY` and `V0_DESIGN_API_SECRET` in the deployment environment. Returns chat metadata and assistant text (not full file bodies) to limit payload size.
