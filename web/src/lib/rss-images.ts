import { BLOG_POSTS } from "@/lib/blog-posts";

const RSS_FEED_URL = process.env.BLOG_RSS_FEED_URL;

function decodeXml(value: string) {
  return value
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");
}

function extractFirstImage(itemXml: string) {
  const mediaMatch = itemXml.match(/<media:content[^>]+url=["']([^"']+)["'][^>]*>/i);
  if (mediaMatch?.[1]) return mediaMatch[1].trim();

  const enclosureMatch = itemXml.match(
    /<enclosure[^>]+url=["']([^"']+)["'][^>]*type=["']image\//i,
  );
  if (enclosureMatch?.[1]) return enclosureMatch[1].trim();

  const contentMatch = itemXml.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/i);
  const descriptionMatch = itemXml.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/i);
  const html = decodeXml(contentMatch?.[1] ?? descriptionMatch?.[1] ?? "");
  const htmlImg = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (htmlImg?.[1]) return htmlImg[1].trim();

  return undefined;
}

export async function getRssImageMap() {
  if (!RSS_FEED_URL) return new Map<string, string>();

  try {
    const response = await fetch(RSS_FEED_URL, { next: { revalidate: 3600 } });
    if (!response.ok) return new Map<string, string>();

    const xml = await response.text();
    const itemMatches = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)];
    const bySlug = new Map<string, string>();

    for (let i = 0; i < BLOG_POSTS.length && i < itemMatches.length; i += 1) {
      const image = extractFirstImage(itemMatches[i]?.[1] ?? "");
      if (image) bySlug.set(BLOG_POSTS[i].slug, image);
    }

    return bySlug;
  } catch {
    return new Map<string, string>();
  }
}
