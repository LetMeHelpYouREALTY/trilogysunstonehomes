import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { getAllResourcePaths } from "@/lib/resource-pages";
import { SITE_URL } from "@/lib/site-contact";

const base = SITE_URL.replace(/\/$/, "");
const DEFAULT_LAST_MODIFIED_ISO = "2026-04-15T00:00:00.000Z";

export const revalidate = 86400;

function safeDate(input: string | undefined) {
  if (!input) return new Date(DEFAULT_LAST_MODIFIED_ISO);
  const parsed = new Date(input);
  return Number.isNaN(parsed.getTime()) ? new Date(DEFAULT_LAST_MODIFIED_ISO) : parsed;
}

function latestBlogLastModified() {
  if (BLOG_POSTS.length === 0) return new Date(DEFAULT_LAST_MODIFIED_ISO);
  return BLOG_POSTS.reduce((latest, post) => {
    const postDate = safeDate(post.publishedAt);
    return postDate > latest ? postDate : latest;
  }, new Date(DEFAULT_LAST_MODIFIED_ISO));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const libraryLastModified = latestBlogLastModified();
  const resources = getAllResourcePaths();
  const staticRoutes = [
    "/",
    "/resources",
    "/accessibility-statement",
    "/contact",
    "/neighborhoods/trilogy-sunstone",
    "/buyers-guide",
    "/faq",
    "/about",
    "/neighborhoods",
    "/guides",
    "/guides/northwest-las-vegas-55-plus-homes",
    "/guides/moving-from-california-to-las-vegas-55-plus",
    "/guides/best-55-plus-communities-las-vegas",
    "/compare/sun-city-summerlin-vs-trilogy-sunstone",
    "/compare/del-webb-north-ranch-vs-trilogy-sunstone",
    "/compare/regency-at-summerlin-vs-trilogy-sunstone",
    "/amenities/cabochon-club",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}`,
      lastModified: libraryLastModified,
    })),
    {
      url: `${base}/blog`,
      lastModified: libraryLastModified,
    },
    ...BLOG_POSTS.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: safeDate(post.publishedAt),
    })),
    ...resources.map((path) => ({
      url: `${base}${path}`,
      lastModified: libraryLastModified,
    })),
  ];
}
