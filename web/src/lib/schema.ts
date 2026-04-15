/**
 * JSON-LD helpers — stable @id values for GEO; keep aligned with visible NAP in site-contact.
 */
import {
  ADDRESS_LOCALITY,
  ADDRESS_REGION,
  PHONE_E164,
  POSTAL_CODE,
  SITE_NAME,
  SITE_NAME_SHORT,
  SITE_URL,
  STREET_ADDRESS,
} from "@/lib/site-contact";

const base = SITE_URL.replace(/\/$/, "");

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
    description: `${SITE_NAME_SHORT} — Las Vegas 55+ active adult community. Find homes for sale, community info, and buyer resources.`,
    publisher: { "@id": SCHEMA_IDS.realEstateAgent },
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
    areaServed: {
      "@type": "City",
      name: "Las Vegas",
      containedInPlace: { "@type": "State", name: "Nevada" },
    },
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
      "Real estate and homes at Trilogy Sunstone, Las Vegas 55+ active adult community.",
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
      "Real estate and homes at Trilogy Sunstone, Las Vegas 55+ active adult community.",
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
