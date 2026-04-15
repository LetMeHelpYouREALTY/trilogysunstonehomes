import type { MetadataRoute } from "next";
import { getAllResourcePaths } from "@/lib/resource-pages";
import { SITE_URL } from "@/lib/site-contact";

const base = SITE_URL.replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const high = 0.8;
  const mid = 0.6;
  const resources = getAllResourcePaths();

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/resources`, lastModified: now, changeFrequency: "weekly", priority: high },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: mid },
    {
      url: `${base}/accessibility-statement`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: mid,
    },
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
    ...resources.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: mid,
    })),
  ];
}
