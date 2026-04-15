import type { Metadata } from "next";
import Link from "next/link";
import { CalendlyPopupButton } from "@/components/calendly-popup-button";
import { SITE_NAME_SHORT } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: `Blog | ${SITE_NAME_SHORT}`,
  description:
    "Blog articles from Dr. Jan Duffy covering Trilogy Sunstone buying strategy, financing, building, and Las Vegas 55+ homeownership.",
  alternates: { canonical: "/blog" },
};

const featuredPosts = [
  {
    title: "How to compare new-construction options in Trilogy Sunstone",
    excerpt:
      "A practical framework for evaluating lot, plan, and upgrade decisions before signing a builder contract.",
    href: "/resources/buying-a-trilogy-sunstone-new-home-with-dr-jan-duffy",
  },
  {
    title: "Mortgage preparation checklist for Las Vegas 55+ buyers",
    excerpt:
      "Organize lender docs, timeline milestones, and payment scenarios to reduce financing delays.",
    href: "/resources/five-step-mortgage-process",
  },
  {
    title: "Design upgrades that improve daily comfort and long-term value",
    excerpt:
      "Focus budget on practical features that support lifestyle needs and strong resale positioning.",
    href: "/resources/20-must-have-features-in-your-new-construction-home",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="hero-mesh relative flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-lg md:text-xl max-w-3xl text-center text-white/90">
          Strategy, insights, and practical tips for Trilogy Sunstone buyers and Las Vegas 55+
          homeowners.
        </p>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold text-[#3d4544] mb-6">Featured articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredPosts.map((post) => (
              <article
                key={post.title}
                className="rounded-lg border border-[#d9e0e2] bg-[#f7fafb] p-5 flex flex-col"
              >
                <h3 className="text-lg font-semibold text-[#1c5087] mb-3">{post.title}</h3>
                <p className="text-[#3d4544] text-sm leading-relaxed mb-5">{post.excerpt}</p>
                <Link href={post.href} className="mt-auto text-[#003a70] font-medium hover:underline">
                  Read related resource
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#eaf0f2]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-[#3d4544] mb-4">Want topic-specific help?</h2>
          <p className="text-[#3d4544] mb-6">
            Schedule a planning call with Dr. Jan Duffy for tailored guidance on your buying or
            building path.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <CalendlyPopupButton className="inline-flex items-center justify-center rounded-md bg-[#8bb63e] text-white font-semibold px-6 py-3 hover:bg-[#789e35] transition-colors">
              Schedule time with me
            </CalendlyPopupButton>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center rounded-md border border-[#d9e0e2] bg-white text-[#3d4544] font-semibold px-6 py-3 hover:bg-[#f7fafb] transition-colors"
            >
              Explore all resources
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
