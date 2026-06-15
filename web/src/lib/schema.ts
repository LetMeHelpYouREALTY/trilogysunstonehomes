/**
 * JSON-LD helpers — stable @id values for GEO; keep aligned with visible NAP in site-contact.
 */
import {
  ADDRESS_LOCALITY,
  ADDRESS_REGION,
  MAPS_SEARCH_URL,
  PHONE_E164,
  POSTAL_CODE,
  SITE_NAME,
  SITE_NAME_SHORT,
  SITE_URL,
  STREET_ADDRESS,
} from "@/lib/site-contact";
import { COMMUNITY_NAME, COMMUNITY_NAME_ALT, MASTER_PLAN } from "@/lib/hyperlocal";

const base = SITE_URL.replace(/\/$/, "");

/** Shared areaServed for Trilogy Sunstone realtor schema */
export function trilogySunstoneAreaServed() {
  return [
    {
      "@type": "Place" as const,
      name: COMMUNITY_NAME,
      alternateName: COMMUNITY_NAME_ALT,
      containedInPlace: {
        "@type": "City" as const,
        name: ADDRESS_LOCALITY,
        containedInPlace: { "@type": "State" as const, name: "Nevada" },
      },
      address: {
        "@type": "PostalAddress" as const,
        addressLocality: ADDRESS_LOCALITY,
        addressRegion: ADDRESS_REGION,
        postalCode: POSTAL_CODE,
        addressCountry: "US",
      },
    },
    {
      "@type": "AdministrativeArea" as const,
      name: `${MASTER_PLAN} master plan`,
      containedInPlace: {
        "@type": "City" as const,
        name: ADDRESS_LOCALITY,
      },
    },
  ];
}

export const SCHEMA_IDS = {
  website: `${base}/#website`,
  realEstateAgent: `${base}/#realEstateAgent`,
} as const;

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SCHEMA_IDS.website,
    name: SITE_NAME_SHORT,
    alternateName: SITE_NAME,
    url: base,
    description: `${SITE_NAME_SHORT} — Trilogy Sunstone real estate specialist in northwest Las Vegas (${POSTAL_CODE}). Buyer and seller representation for Shea Homes new construction and resale in the 55+ community.`,
    publisher: { "@id": SCHEMA_IDS.realEstateAgent },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${base}/#localBusiness`,
    name: SITE_NAME_SHORT,
    alternateName: SITE_NAME,
    url: base,
    telephone: PHONE_E164,
    address: {
      "@type": "PostalAddress",
      streetAddress: STREET_ADDRESS,
      addressLocality: ADDRESS_LOCALITY,
      addressRegion: ADDRESS_REGION,
      postalCode: POSTAL_CODE,
      addressCountry: "US",
    },
    areaServed: trilogySunstoneAreaServed(),
    hasMap: MAPS_SEARCH_URL,
    description: `${SITE_NAME_SHORT} helps buyers and sellers with Trilogy Sunstone homes for sale in northwest Las Vegas (${POSTAL_CODE}) — Shea Homes new construction, resale, and Cabochon Club community tours.`,
    image: `${base}/favicon-48.png`,
  };
}

export function realEstateAgentBase() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": SCHEMA_IDS.realEstateAgent,
    name: SITE_NAME_SHORT,
    alternateName: SITE_NAME,
    url: base,
    telephone: PHONE_E164,
    address: {
      "@type": "PostalAddress",
      streetAddress: STREET_ADDRESS,
      addressLocality: ADDRESS_LOCALITY,
      addressRegion: ADDRESS_REGION,
      postalCode: POSTAL_CODE,
    },
    areaServed: trilogySunstoneAreaServed(),
  };
}

const testimonialReviews = [
  {
    author: { "@type": "Person", name: "Linda S." },
    reviewBody: "The process was so easy and the community is amazing!",
    reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
  },
  {
    author: { "@type": "Person", name: "Mark L." },
    reviewBody: "I found my perfect home and made new friends right away.",
    reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
  },
];

/** Matches visible testimonials on the homepage. */
export function homeRealEstateAgentWithReviewsJsonLd() {
  return {
    ...realEstateAgentBase(),
    description:
      "Dr. Jan Duffy, REALTOR® — Trilogy Sunstone real estate specialist for buyer and seller representation in northwest Las Vegas (89143).",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 5,
      bestRating: 5,
      reviewCount: 2,
    },
    review: testimonialReviews.map((r) => ({
      "@type": "Review",
      author: r.author,
      reviewBody: r.reviewBody,
      reviewRating: r.reviewRating,
    })),
  };
}

export function contactRealEstateAgentJsonLd() {
  return {
    ...realEstateAgentBase(),
    description:
      "Dr. Jan Duffy, REALTOR® — Trilogy Sunstone real estate specialist for buyer and seller representation in northwest Las Vegas (89143).",
  };
}

export function faqPageJsonLd(
  items: readonly { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/** BreadcrumbList — keep in sync with visible breadcrumb on the page. */
export function trilogySunstoneBreadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: base,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Neighborhoods",
        item: `${base}/neighborhoods`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Trilogy Sunstone",
        item: `${base}/neighborhoods/trilogy-sunstone`,
      },
    ],
  };
}

/** BlogPosting schema for blog articles */
export function blogPostingJsonLd(input: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    url: `${base}/blog/${input.slug}`,
    datePublished: input.publishedAt,
    dateModified: input.publishedAt,
    author: { "@id": SCHEMA_IDS.realEstateAgent },
    publisher: { "@id": SCHEMA_IDS.realEstateAgent },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${base}/blog/${input.slug}` },
    ...(input.image ? { image: input.image } : {}),
  };
}

/** Generic BreadcrumbList — paths must start with `/` and match visible nav. */
export function breadcrumbListJsonLd(
  items: readonly { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${base}${item.path.startsWith("/") ? item.path : `/${item.path}`}`,
    })),
  };
}
