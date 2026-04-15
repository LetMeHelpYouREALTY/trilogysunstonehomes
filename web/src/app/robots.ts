import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-contact";

const origin = SITE_URL.replace(/\/$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: `${origin}/sitemap.xml`,
    host: new URL(SITE_URL).host,
  };
}
