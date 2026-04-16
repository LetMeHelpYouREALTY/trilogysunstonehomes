---
name: trilogy-sunstone-web
description: Project skill for the Trilogy Sunstone Homes Next.js app covering site-contact constants, schema helpers, Vercel root behavior, RealScout/Calendly integration, and local SEO content patterns.
---

# Trilogy Sunstone Web

Use this skill when working on the `trilogysunstonehomes-3` repo, especially the `web/` Next.js app.

## Stack

- Next.js 16 App Router
- React 19
- TypeScript strict mode
- Tailwind CSS v4
- Vercel deploy target with `web/` as the intended project root

## Shared sources of truth

- `web/src/lib/site-contact.ts`
  - Business name, phone, address, license line, maps URL, RealScout URLs
- `web/src/lib/schema.ts`
  - Shared `WebSite`, `RealEstateAgent`, `LocalBusiness`, `FAQPage`, and breadcrumb helpers
- `web/src/app/layout.tsx`
  - Global metadata defaults and sitewide JSON-LD injection

## SEO and content rules

- Keep route metadata specific to page intent. Use either static `metadata` or `generateMetadata()`.
- Match visible H1/H2s to the route's target keyword cluster; do not stuff keyword lists into titles or intros.
- Keep NAP and brand authority aligned with `site-contact.ts`.
- Use `robots.ts` and `sitemap.ts` App Router metadata routes.
- Only add `RealEstateListing` schema when a page has real listing-specific data.

## Integration rules

- RealScout:
  - Keep related CSP domains aligned with app config.
  - Use existing shared search CTA patterns before adding new widget variants.
- Calendly:
  - Prefer deferred loading patterns already used in the app.
  - Avoid reintroducing render-blocking global widget loads.

## Deployment guidance

- Production target is Vercel.
- Prefer `vercel build` / Vercel-compatible workflows when validating deploy behavior.
- Keep the Vercel Root Directory aligned to `web/`.
