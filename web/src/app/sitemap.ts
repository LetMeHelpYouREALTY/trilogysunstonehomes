import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-contact";

const base = SITE_URL.replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const high = 0.8;
  const mid = 0.6;

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    {
      url: `${base}/contact`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: high,
    },
    {
      url: `${base}/neighborhoods/trilogy-sunstone`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: high,
    },
    {
      url: `${base}/buyers-guide`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: high,
    },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "weekly", priority: high },
    { url: `${base}/about`, lastModified: now, changeFrequency: "weekly", priority: mid },
    {
      url: `${base}/neighborhoods`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: mid,
    },
  ];
}
