# Vercel deployment audit (Trilogy Sunstone Homes)

## Current status

As of the latest `main` push, **production is live** at [https://www.trilogysunstonehomes.com](https://www.trilogysunstonehomes.com).

- **Vercel project (production domain):** `trilogysunstonehomes`
- **GitHub branch:** `main`
- **App root:** `web/` (Next.js App Router)

## Root cause of past failures

### 1. Incomplete commits (primary)

Commit `606185f` updated dozens of pages to import `@/lib/hyperlocal` and `@/lib/seo-metadata`, but those files were **not included in the commit**. Both Vercel projects failed with:

```text
Module not found: Can't resolve '@/lib/seo-metadata'
Module not found: Can't resolve '@/lib/hyperlocal'
```

Fixed in commit `50335f2`.

**Prevention:** run `npm run verify` before every push. Optionally install the git hook:

```bash
sh scripts/install-pre-push-hook.sh
```

### 2. Duplicate Vercel projects (confusing, not blocking)

This repo triggers **two** Vercel GitHub checks on every push:

| Check | Project |
|-------|---------|
| `Vercel – trilogysunstonehomes` | Production domain |
| `Vercel – web` | Secondary project |

Both must succeed for a green commit status, but only **`trilogysunstonehomes`** serves `www.trilogysunstonehomes.com`.

**Recommendation:** In [Vercel Dashboard](https://vercel.com/dashboard) → project **`web`** → **Settings → Git**, disconnect this repo (or delete the duplicate project) so pushes only deploy once.

### 3. Misleading red X on GitHub (not Vercel)

`CI — MDC Rules Drift` fails on every push because project-specific `.cursor/rules/*.mdc` files differ from the generic baseline in `scripts/sync-mdc-rules.ps1`. This workflow is **not** a deploy gate and does not affect Vercel.

### 4. Root Directory must be `web`

If Vercel **Root Directory** is the repo root (`.`) without proper overrides, builds fail with errors like:

```text
.next not found at /vercel/path0/.next
missing public output directory
```

**Fix:** Vercel → **Settings → General → Root Directory** → set **`web`**.

Or with a Vercel token:

```bash
VERCEL_TOKEN=... npm run vercel:set-root
```

## Required Vercel settings

| Setting | Value |
|---------|-------|
| Root Directory | `web` |
| Framework Preset | Next.js |
| Build Command | *(empty — use default)* |
| Output Directory | *(empty)* |
| Production Branch | `main` |

Config file: [`web/vercel.json`](../web/vercel.json) (headers + apex → www redirect).

## Before you push

```bash
npm run verify    # import check + build + typecheck + lint
git add -A
git commit -m "your message"
git push origin main
```

GitHub Actions [`web-ci.yml`](../.github/workflows/web-ci.yml) runs the same build on `main` pushes.

## One-command Vercel cleanup

Add a [Vercel token](https://vercel.com/account/tokens), then:

```bash
VERCEL_TOKEN=... npm run vercel:setup-production
```

Optional GSC verification at the same time:

```bash
VERCEL_TOKEN=... NEXT_PUBLIC_GSC_VERIFICATION=your-gsc-content-value npm run vercel:setup-production
```

Or add `VERCEL_TOKEN` to GitHub repo secrets and run the **Vercel — production setup** workflow from Actions.

This disconnects the duplicate **`web`** Vercel project from GitHub so only **`trilogysunstonehomes`** deploys on push.

## Google Search Console

After deploy, set `NEXT_PUBLIC_GSC_VERIFICATION` in Vercel → **Environment Variables**, redeploy, then verify in Search Console. See [`docs/google-search-console.md`](google-search-console.md).
