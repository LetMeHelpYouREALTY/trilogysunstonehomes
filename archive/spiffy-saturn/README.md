# Astro with Tailwind

```sh
npm create astro@latest -- --template with-tailwindcss
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/with-tailwindcss)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/with-tailwindcss)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/with-tailwindcss/devcontainer.json)

Astro comes with [Tailwind](https://tailwindcss.com) support out of the box. This example showcases how to style your Astro project with Tailwind.

For complete setup instructions, please see our [Tailwind Integration Guide](https://docs.astro.build/en/guides/integrations-guide/tailwind).

## Deployment (Vercel)

The site is built as a static Astro site and deploys to [Vercel](https://vercel.com) with zero config (no adapter). Connect the repo in the Vercel dashboard and set the **Root Directory** to `spiffy-saturn` if the repo root is the workspace root. Non-www redirects to www via `vercel.json` (trilogysunstonehomes.com → https://www.trilogysunstonehomes.com).

## Google Search Console

The site is ready for [Google Search Console](https://search.google.com/search-console):

1. **Add property** – In GSC, add a property with URL prefix `https://www.trilogysunstonehomes.com`.
2. **Verify ownership** – Use the HTML tag method: copy the `content` value from GSC (Settings → Ownership verification → HTML tag). Set the env var `PUBLIC_GSC_VERIFICATION` to that value (e.g. in Vercel: Project → Settings → Environment Variables, or in a local `.env` file). Redeploy so the meta tag is present, then click “Verify” in GSC. Do not commit the real verification code. See `.env.example`.
3. **Submit sitemap** – In GSC, go to Sitemaps and submit: `https://www.trilogysunstonehomes.com/sitemap-index.xml`. The site also declares this in `robots.txt` and in the layout `<link rel="sitemap">`.
4. **What’s in place** – Sitemap at `/sitemap-index.xml` (generated at build), `public/robots.txt` with Allow and Sitemap, unique titles and canonicals per page, WebSite JSON-LD in the layout, and optional GSC meta tag when `PUBLIC_GSC_VERIFICATION` is set.
