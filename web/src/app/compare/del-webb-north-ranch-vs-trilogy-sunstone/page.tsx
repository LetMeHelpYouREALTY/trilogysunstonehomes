import type { Metadata } from "next";
import Link from "next/link";
import { CalendlyPopupButton } from "@/components/calendly-popup-button";
import { JsonLd } from "@/components/json-ld";
import { RealScoutSearchCta } from "@/components/realscout-search-cta";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import {
  AREA_LABEL,
  CLUB_NAME,
  COMMUNITY_NAME,
  HIGHWAY_ACCESS,
  LOCAL_CONTEXT_PARAGRAPH,
  MASTER_PLAN,
  RESOURCE_LOCAL_SECTION,
  SEO_KEYWORDS,
} from "@/lib/hyperlocal";
import { pageSeo } from "@/lib/seo-metadata";
import { breadcrumbListJsonLd, contactRealEstateAgentJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  ...pageSeo({
    title: "Del Webb North Ranch vs Trilogy Sunstone | 55+ Las Vegas",
    description: `Compare Del Webb North Ranch and ${COMMUNITY_NAME}: builder backgrounds, ${AREA_LABEL} context via ${HIGHWAY_ACCESS}, and what to verify on site tours. ${SEO_KEYWORDS}.`,
    path: "/compare/del-webb-north-ranch-vs-trilogy-sunstone",
  }),
};

export default function DelWebbVsTrilogyPage() {
  return (
    <>
      <JsonLd data={contactRealEstateAgentJsonLd()} />
      <JsonLd
        data={breadcrumbListJsonLd([
          { name: "Home", path: "/" },
          {
            name: "Del Webb North Ranch vs Trilogy Sunstone",
            path: "/compare/del-webb-north-ranch-vs-trilogy-sunstone",
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
                <li className="font-medium text-[#3d4544]" aria-current="page">
                  Del Webb North Ranch vs Trilogy Sunstone
                </li>
              </ol>
            </div>
          </nav>

          <section className="hero-mesh relative flex flex-col items-center justify-center py-16 px-4 text-center">
            <h1 className="hero-title mb-4 text-white">
              Del Webb North Ranch vs Trilogy Sunstone
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-white/90">
              Two recognizable 55+ brands—different locations, product, and pace of life.
            </p>
          </section>

          <article className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 max-w-3xl space-y-6 text-[#3d4544]">
              <p className="text-sm bg-[#eaf0f2] border border-[#d9e0e2] rounded-md p-4">
                <strong>Disclosure:</strong> Dr. Jan Duffy represents buyers. Builder sales teams
                represent the builder—bring independent representation when you want advocacy
                through contract and inspections.
              </p>
              <h2 className="text-2xl font-bold">Brand &amp; product snapshot</h2>
              <p className="leading-relaxed">
                Del Webb has a long track record across multiple Las Vegas communities.{" "}
                {COMMUNITY_NAME} is a Trilogy-branded Shea Homes community in the {MASTER_PLAN}{" "}
                master plan at {AREA_LABEL}, with the {CLUB_NAME} (Cooper&apos;s Kitchen, eight
                pickleball courts) and access via {HIGHWAY_ACCESS}. Your comparison should be less
                about logos and more about the specific homes available today: plan, lot, monthly
                carrying costs, and commute reality.
              </p>
              <h2 className="text-2xl font-bold">Northwest context</h2>
              <p className="leading-relaxed">
                If you are focused on <strong>Del Webb Las Vegas</strong> vs Trilogy for northwest
                access and outdoor recreation, map your typical week: healthcare appointments,
                airport runs, and family visits. {COMMUNITY_NAME} sits off Kyle Canyon Road (Exit
                96) with roughly 933 planned homes—drive-time assumptions are where many
                spreadsheets break.
              </p>
              <h2 className="text-2xl font-bold">Practical next step</h2>
              <p className="leading-relaxed">
                Open{" "}
                <RealScoutSearchCta variant="inline" className="font-medium">
                  Trilogy Sunstone inventory
                </RealScoutSearchCta>
                , then schedule a community tour with questions in hand.{" "}
                <Link href="/contact" className="text-[#1c5087] font-medium">
                  Contact us
                </Link>{" "}
                if you want a side-by-side itinerary.
              </p>
              <article className="space-y-4 rounded-lg border border-[#d9e0e2] bg-[#f7fafb] p-6">
                <h2 className="text-2xl font-bold">{RESOURCE_LOCAL_SECTION.heading}</h2>
                <p className="leading-relaxed">{LOCAL_CONTEXT_PARAGRAPH}</p>
                {RESOURCE_LOCAL_SECTION.body.slice(1).map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </article>
              <h2 className="text-2xl font-bold">Quick verdict</h2>
              <p className="leading-relaxed">
                If builder pedigree is your top priority, both Del Webb and Trilogy are strong
                national brands. For this comparison, your daily-drive geography and the exact home
                available now usually matter more than brand preference alone.
              </p>
              <p className="text-sm text-[#6b7373]">
                Continue comparing with{" "}
                <Link href="/compare/sun-city-summerlin-vs-trilogy-sunstone" className="text-[#1c5087] font-medium">
                  Sun City Summerlin vs Trilogy Sunstone
                </Link>{" "}
                and{" "}
                <Link href="/compare/regency-at-summerlin-vs-trilogy-sunstone" className="text-[#1c5087] font-medium">
                  Regency at Summerlin vs Trilogy Sunstone
                </Link>
                .
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/neighborhoods/trilogy-sunstone"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold bg-[#1c5087] text-white hover:bg-[#003a70]"
                >
                  Trilogy Sunstone community
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold border border-[#d9e0e2] text-[#3d4544] hover:bg-[#eaf0f2]"
                >
                  Contact us
                </Link>
                <CalendlyPopupButton className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold border border-[#d9e0e2] text-[#3d4544] hover:bg-[#eaf0f2]">
                  Book a consult
                </CalendlyPopupButton>
              </div>
            </div>
          </article>
        </main>
      </div>
      <StickyMobileCta />
    </>
  );
}
