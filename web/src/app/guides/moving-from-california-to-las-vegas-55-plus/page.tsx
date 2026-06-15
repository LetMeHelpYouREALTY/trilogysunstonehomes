import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import {
  AREA_LABEL,
  CLUB_NAME,
  COMMUNITY_NAME,
  HIGHWAY_ACCESS,
  LIFESTYLE_CONTEXT,
  LOCAL_CONTEXT_PARAGRAPH,
  RESOURCE_LOCAL_SECTION,
  SEO_KEYWORDS,
} from "@/lib/hyperlocal";
import { pageSeo } from "@/lib/seo-metadata";
import { breadcrumbListJsonLd, contactRealEstateAgentJsonLd } from "@/lib/schema";
import { SITE_NAME_SHORT } from "@/lib/site-contact";

export const metadata: Metadata = {
  ...pageSeo({
    title: "California to Las Vegas 55+ | Retirement Relocation Guide",
    description: `Moving from California to Las Vegas for retirement: 55+ community shopping, lifestyle tradeoffs, and why buyers tour ${COMMUNITY_NAME} in ${AREA_LABEL}. ${SEO_KEYWORDS}. General information—not tax or legal advice.`,
    path: "/guides/moving-from-california-to-las-vegas-55-plus",
  }),
};

export default function CaliforniaRelocationGuidePage() {
  return (
    <>
      <JsonLd data={contactRealEstateAgentJsonLd()} />
      <JsonLd
        data={breadcrumbListJsonLd([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          {
            name: "California to Las Vegas 55+",
            path: "/guides/moving-from-california-to-las-vegas-55-plus",
          },
        ])}
      />
      <div className="pb-24 md:pb-0">
        <main className="min-h-screen flex flex-col">
          <nav
            aria-label="Breadcrumb"
            className="border-b border-[#d9e0e2] bg-white py-3 text-sm text-[#6b7373]"
          >
            <div className="container mx-auto px-4">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="text-[#1c5087] hover:text-[#003a70] font-medium">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/guides" className="text-[#1c5087] hover:text-[#003a70] font-medium">
                    Guides
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="font-medium text-[#3d4544]" aria-current="page">
                  California to Las Vegas 55+
                </li>
              </ol>
            </div>
          </nav>

          <PageHero image="relocation">
            <h1 className="hero-title mb-4 text-white">
              Moving from California to a Las Vegas 55+ community
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-white/90">
              Retire in Las Vegas from California with a practical checklist—home first, headlines
              second.
            </p>
          </PageHero>

          <article className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
              <p className="text-[#3d4544] text-lg leading-relaxed mb-6">
                If you are researching <strong>California to Las Vegas 55+ community</strong> moves,
                you are not alone: many buyers want lower housing friction, desert sunshine, and a
                true active adult neighborhood rather than a generic subdivision. This page is
                educational—not tax, legal, or financial advice.
              </p>
              <h2 className="text-2xl font-bold text-[#3d4544] mt-10 mb-4">
                Lifestyle and logistics checklist
              </h2>
              <ul className="list-disc list-inside space-y-2 text-[#3d4544] mb-6">
                <li>Confirm how often you will return to California for family, work, or healthcare.</li>
                <li>Model real costs: HOA, insurance, utilities, and travel—not just the home price.</li>
                <li>Tour at least two 55+ communities before you decide; product varies widely.</li>
              </ul>
              <h2 className="text-2xl font-bold text-[#3d4544] mt-10 mb-4">
                State income tax and retirement (general)
              </h2>
              <p className="text-[#3d4544] leading-relaxed mb-4">
                Nevada is often discussed alongside <strong>no state income tax retirement Las Vegas</strong>{" "}
                framing. Personal situations differ—pension taxation, residency rules, and estate
                planning questions belong with your CPA and attorney. We focus on helping you buy the
                right home with confidence.
              </p>
              <h2 className="text-2xl font-bold text-[#3d4544] mt-10 mb-4">
                Why buyers tour Trilogy Sunstone
              </h2>
              <p className="text-[#3d4544] leading-relaxed mb-6">
                <Link
                  href="/neighborhoods/trilogy-sunstone"
                  className="text-[#1c5087] hover:text-[#003a70] font-medium"
                >
                  {COMMUNITY_NAME}
                </Link>{" "}
                combines Shea Homes new construction and resale inventory with a dedicated 55+
                lifestyle footprint in {AREA_LABEL}, accessed via {HIGHWAY_ACCESS}. The{" "}
                {CLUB_NAME}—with Cooper&apos;s Kitchen, eight pickleball courts, and resort-style
                pools—draws many California relocators comparing northwest Las Vegas to Summerlin.
                Start with a tour and a live search aligned to your budget.
              </p>
              <p className="text-[#3d4544] leading-relaxed mb-6">{LIFESTYLE_CONTEXT}</p>
              <article className="space-y-4 rounded-lg border border-[#d9e0e2] bg-[#f7fafb] p-6 mb-6">
                <h2 className="text-2xl font-bold text-[#3d4544]">{RESOURCE_LOCAL_SECTION.heading}</h2>
                <p className="text-[#3d4544] leading-relaxed">{LOCAL_CONTEXT_PARAGRAPH}</p>
                {RESOURCE_LOCAL_SECTION.body.slice(1).map((paragraph) => (
                  <p key={paragraph} className="text-[#3d4544] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </article>
              <p className="text-sm text-[#6b7373] border-t border-[#d9e0e2] pt-6">
                Questions? {SITE_NAME_SHORT} is happy to coordinate tours and introductions to
                trusted local professionals when you need them. Start with our{" "}
                <Link href="/faq" className="text-[#1c5087] font-medium">
                  Trilogy Sunstone FAQ
                </Link>{" "}
                or{" "}
                <Link href="/contact" className="text-[#1c5087] font-medium">
                  contact page
                </Link>{" "}
                for buyer support.
              </p>
            </div>
          </article>
        </main>
      </div>
      <StickyMobileCta />
    </>
  );
}
