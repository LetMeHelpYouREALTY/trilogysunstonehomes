/**
 * Hero background images — northwest Las Vegas desert-resort aesthetic
 * consistent with Trilogy Sunstone / Sunstone master plan communities.
 * Sources: Unsplash (free for commercial use). Replace with R2/worker keys when available.
 */

export type HeroImageKey =
  | "home"
  | "community"
  | "neighborhoods"
  | "amenities"
  | "guides"
  | "desert-mountains"
  | "relocation"
  | "compare"
  | "contact"
  | "about"
  | "faq"
  | "buyers"
  | "resources"
  | "new-construction"
  | "blog"
  | "accessibility";

export type HeroImage = {
  src: string;
  alt: string;
};

/** Curated Unsplash photos — desert southwest homes, mountains, resort pools, 55+ lifestyle */
export const HERO_IMAGES: Record<HeroImageKey, HeroImage> = {
  home: {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&h=1080&q=85",
    alt: "Modern desert home with mountain views in northwest Las Vegas",
  },
  community: {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&h=1080&q=85",
    alt: "Contemporary single-story home with desert landscaping in Las Vegas",
  },
  neighborhoods: {
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cd7e?auto=format&fit=crop&w=1920&h=1080&q=85",
    alt: "Northwest Las Vegas residential community with desert mountain backdrop",
  },
  amenities: {
    src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1920&h=1080&q=85",
    alt: "Resort-style pool and lounge area at an active adult community",
  },
  guides: {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&h=1080&q=85",
    alt: "Desert mountain landscape near northwest Las Vegas",
  },
  "desert-mountains": {
    src: "https://images.unsplash.com/photo-1542314831-068cd1dbce03?auto=format&fit=crop&w=1920&h=1080&q=85",
    alt: "Red Rock Canyon desert scenery accessible from northwest Las Vegas",
  },
  relocation: {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1920&h=1080&q=85",
    alt: "Keys and welcome mat at a new Las Vegas home closing",
  },
  compare: {
    src: "https://images.unsplash.com/photo-1592917807960-903da666af07?auto=format&fit=crop&w=1920&h=1080&q=85",
    alt: "Desert golf and mountain views in the Las Vegas valley",
  },
  contact: {
    src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1920&h=1080&q=85",
    alt: "Welcoming desert home exterior in Las Vegas",
  },
  about: {
    src: "https://images.unsplash.com/photo-1605276374101-dee0a2ecd230?auto=format&fit=crop&w=1920&h=1080&q=85",
    alt: "Modern southwest architecture in a Las Vegas master-planned community",
  },
  faq: {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1920&h=1080&q=85",
    alt: "Bright open living space in a new Las Vegas home",
  },
  buyers: {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&h=1080&q=85",
    alt: "Single-story home interior suited for 55+ buyers in Las Vegas",
  },
  resources: {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1920&h=1080&q=85",
    alt: "Desert home with pool in northwest Las Vegas",
  },
  "new-construction": {
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1920&h=1080&q=85",
    alt: "New construction home being built in a Las Vegas master plan",
  },
  blog: {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1920&h=1080&q=85",
    alt: "Sunset over desert mountains near Las Vegas",
  },
  accessibility: {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&h=1080&q=85",
    alt: "Accessible single-level desert home in Las Vegas",
  },
};

const BLOG_SLUG_TO_HERO: Record<string, HeroImageKey> = {
  "pickleball-resort-style-55-plus-las-vegas": "amenities",
  "red-rock-mount-charleston-northwest-las-vegas-lifestyle": "desert-mountains",
  "compare-new-construction-options-trilogy-sunstone": "new-construction",
  "mortgage-preparation-checklist-las-vegas-55-plus": "buyers",
  "design-upgrades-comfort-long-term-value": "new-construction",
};

const RESOURCE_SLUG_TO_HERO: Record<string, HeroImageKey> = {
  "55-plus": "community",
  "buying-a-trilogy-sunstone-new-home-with-dr-jan-duffy": "new-construction",
  "trilogy-sunstone-homes-by-dr-jan-duffy-resources": "community",
  "trilogy-buying-resources-for-dr-jan-duffy-clients": "community",
  "building-a-new-home": "new-construction",
  "building-resources": "new-construction",
  "the-dr-jan-duffy-homes-building-process": "new-construction",
  "choosing-a-floor-plan": "buyers",
  "designing-resources": "new-construction",
  "designing-a-new-home-using-a-consultant": "new-construction",
  "20-must-have-features-in-your-new-construction-home": "new-construction",
  "the-berkshire-hathaway-home-services-design-studio": "new-construction",
  "five-step-mortgage-process": "buyers",
  "secure-a-mortgage-with-partners": "buyers",
  "mortgage-calculator": "buyers",
  "the-best-loan-for-you": "buyers",
  "rent-vs-own": "buyers",
  "benefits-of-buying-new": "new-construction",
};

const PATH_TO_HERO: Record<string, HeroImageKey> = {
  "/": "home",
  "/about": "about",
  "/contact": "contact",
  "/faq": "faq",
  "/buyers-guide": "buyers",
  "/neighborhoods": "neighborhoods",
  "/neighborhoods/trilogy-sunstone": "community",
  "/amenities/cabochon-club": "amenities",
  "/guides": "guides",
  "/guides/northwest-las-vegas-55-plus-homes": "desert-mountains",
  "/guides/moving-from-california-to-las-vegas-55-plus": "relocation",
  "/guides/best-55-plus-communities-las-vegas": "compare",
  "/compare/sun-city-summerlin-vs-trilogy-sunstone": "compare",
  "/compare/del-webb-north-ranch-vs-trilogy-sunstone": "compare",
  "/compare/regency-at-summerlin-vs-trilogy-sunstone": "compare",
  "/blog": "blog",
  "/resources": "resources",
  "/accessibility-statement": "accessibility",
};

export function getHeroImage(key: HeroImageKey): HeroImage {
  return HERO_IMAGES[key];
}

export function getHeroImageForPath(path: string): HeroImage {
  const normalized = path.replace(/\/$/, "") || "/";
  const key = PATH_TO_HERO[normalized] ?? "guides";
  return HERO_IMAGES[key];
}

export function getHeroImageForBlogSlug(slug: string): HeroImage {
  const key = BLOG_SLUG_TO_HERO[slug] ?? "blog";
  return HERO_IMAGES[key];
}

export function getHeroImageForResourceSlug(slug: string[]): HeroImage {
  const joined = slug.join("/");
  const lastSegment = slug.at(-1) ?? joined;

  for (const [pattern, key] of Object.entries(RESOURCE_SLUG_TO_HERO)) {
    if (joined.includes(pattern) || lastSegment === pattern) {
      return HERO_IMAGES[key];
    }
  }

  if (joined.includes("mortgage") || joined.includes("loan") || joined.includes("rent")) {
    return HERO_IMAGES.buyers;
  }
  if (joined.includes("build") || joined.includes("design") || joined.includes("floor-plan")) {
    return HERO_IMAGES["new-construction"];
  }
  if (joined.includes("trilogy") || joined.includes("55-plus")) {
    return HERO_IMAGES.community;
  }

  return HERO_IMAGES.resources;
}

export function getOptimizedHeroSrc(src: string, width = 1920, height = 1080): string {
  try {
    const url = new URL(src);
    url.searchParams.set("auto", "format");
    url.searchParams.set("fit", "crop");
    url.searchParams.set("w", String(width));
    url.searchParams.set("h", String(height));
    url.searchParams.set("q", "85");
    return url.toString();
  } catch {
    return src;
  }
}
