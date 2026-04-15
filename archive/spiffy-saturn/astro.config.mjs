// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://www.trilogysunstonehomes.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap({
      // March 2026 best practices: lastmod helps crawlers know when to re-fetch (build time for static).
      lastmod: new Date(),
      changefreq: 'weekly',
      priority: 0.7,
      filter: (page) => {
        // Exclude demo/utility pages from the sitemap (don't dilute SEO).
        if (page === `${SITE}/markdown-page/`) return false;
        return true;
      },
      serialize(item) {
        // Homepage and primary entry points get higher priority (crawlers may use as hint).
        const url = item.url;
        if (url === `${SITE}/` || url === `${SITE}`) item.priority = 1;
        else if (
          url.includes('/contact') ||
          url.includes('/neighborhoods/trilogy-sunstone') ||
          url.includes('/buyers-guide') ||
          url.includes('/faq')
        )
          item.priority = 0.8;
        else item.priority = 0.6;
        return item;
      },
    }),
  ],
});