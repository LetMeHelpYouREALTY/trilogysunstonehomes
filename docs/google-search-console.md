# Google Search Console — Trilogy Sunstone Homes

Production site: **https://www.trilogysunstonehomes.com**

## Prerequisites (already in code)

- `app/robots.ts` → `/robots.txt` with sitemap URL
- `app/sitemap.ts` → `/sitemap.xml` (50 indexable URLs)
- Root layout supports `NEXT_PUBLIC_GSC_VERIFICATION` for HTML tag verification
- Apex domain redirects to `www` via `vercel.json`

## Setup steps

1. Open [Google Search Console](https://search.google.com/search-console).
2. Add property: **URL prefix** → `https://www.trilogysunstonehomes.com`
3. Choose **HTML tag** verification method.
4. Copy only the `content` value from the meta tag (not the full tag).
5. In **Vercel → Project → Environment Variables**, add:
   - Name: `NEXT_PUBLIC_GSC_VERIFICATION`
   - Value: `<content value from GSC>`
   - Environment: **Production** (and Preview if verifying preview URLs)
6. Redeploy the site.
7. Confirm the tag is live:
   ```bash
   curl -s https://www.trilogysunstonehomes.com/ | grep google-site-verification
   ```
8. Click **Verify** in Search Console.
9. Submit sitemap: `https://www.trilogysunstonehomes.com/sitemap.xml`
10. Use **URL Inspection** on priority pages:
    - `/`
    - `/neighborhoods/trilogy-sunstone`
    - `/faq`
    - `/contact`
    - `/guides/northwest-las-vegas-55-plus-homes`

## Optional: Domain property

Add a **Domain** property for `trilogysunstonehomes.com` and verify via DNS TXT record at your registrar. This covers apex and all subdomains.

## Do not commit

Never commit the verification code to git. Use Vercel environment variables only.

## Local development

Copy `web/.env.example` to `web/.env.local` and set `NEXT_PUBLIC_GSC_VERIFICATION` if testing verification locally.
