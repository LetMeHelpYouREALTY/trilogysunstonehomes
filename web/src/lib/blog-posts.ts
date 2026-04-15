export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  publishedAt: string;
  readMinutes: number;
  image?: string;
  sections: { heading: string; body: string[] }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "compare-new-construction-options-trilogy-sunstone",
    title: "How to compare new-construction options in Trilogy Sunstone",
    excerpt:
      "A practical framework for evaluating lot, plan, and upgrade decisions before signing a builder contract.",
    description:
      "Compare lot, plan, and upgrade options with a practical framework for Trilogy Sunstone new-construction buyers.",
    publishedAt: "2026-04-15",
    readMinutes: 6,
    sections: [
      {
        heading: "Start with your non-negotiables",
        body: [
          "Identify your top priorities first: layout flow, location in the community, and monthly payment comfort.",
          "This keeps you from over-indexing on design upgrades before confirming the floor plan and lot meet your daily lifestyle needs.",
        ],
      },
      {
        heading: "Compare lots with long-term value in mind",
        body: [
          "Review lot orientation, proximity to amenities, privacy, and potential traffic flow.",
          "Even in the same plan, lot differences can change resale appeal and your day-to-day comfort.",
        ],
      },
      {
        heading: "Upgrade strategically",
        body: [
          "Prioritize structural and utility upgrades first, then finish selections.",
          "It is usually easier to change paint later than to retrofit electrical, storage, or core layout decisions.",
        ],
      },
    ],
  },
  {
    slug: "mortgage-preparation-checklist-las-vegas-55-plus",
    title: "Mortgage preparation checklist for Las Vegas 55+ buyers",
    excerpt:
      "Organize lender docs, timeline milestones, and payment scenarios to reduce financing delays.",
    description:
      "Use this mortgage checklist to prepare financing documents and scenarios for a smooth 55+ home purchase in Las Vegas.",
    publishedAt: "2026-04-15",
    readMinutes: 5,
    sections: [
      {
        heading: "Document checklist before touring",
        body: [
          "Prepare core lender documentation early: income verification, assets, credit profile, and debt obligations.",
          "A complete file before active touring makes your offer more competitive and reduces underwriting delays.",
        ],
      },
      {
        heading: "Test multiple payment scenarios",
        body: [
          "Model monthly payment ranges using different down payments, rates, HOA dues, taxes, and insurance assumptions.",
          "This helps you set a realistic ceiling and avoid stretching your budget when the right home appears.",
        ],
      },
      {
        heading: "Protect financing during escrow",
        body: [
          "Avoid major credit changes and large unplanned purchases before closing.",
          "Respond to lender requests quickly so underwriting and clear-to-close milestones stay on track.",
        ],
      },
    ],
  },
  {
    slug: "design-upgrades-comfort-long-term-value",
    title: "Design upgrades that improve daily comfort and long-term value",
    excerpt:
      "Focus budget on practical features that support lifestyle needs and strong resale positioning.",
    description:
      "Select design upgrades that improve daily usability while supporting long-term value in new construction homes.",
    publishedAt: "2026-04-15",
    readMinutes: 6,
    sections: [
      {
        heading: "Upgrade for function first",
        body: [
          "Prioritize choices that improve day-to-day usability: storage, lighting, and durable materials in high-traffic zones.",
          "Functional upgrades consistently outperform purely cosmetic changes in buyer satisfaction.",
        ],
      },
      {
        heading: "Balance personalization and resale",
        body: [
          "Keep the home personal but avoid highly niche selections that can narrow future buyer demand.",
          "Neutral foundations with intentional accents usually hold broader market appeal.",
        ],
      },
      {
        heading: "Plan your budget in tiers",
        body: [
          "Use a must-have, should-have, and nice-to-have budget framework before design studio appointments.",
          "This approach reduces decision fatigue and keeps your spend aligned with long-term goals.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
