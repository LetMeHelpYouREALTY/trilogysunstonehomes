import type { Metadata } from "next";
import Link from "next/link";
import { CalendlyPopupButton } from "@/components/calendly-popup-button";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import {
  CLUB_NAME,
  COMMUNITY_NAME,
  HIGHWAY_ACCESS,
  LIFESTYLE_CONTEXT,
  RESOURCE_LOCAL_SECTION,
  SALES_OFFICE,
  SEO_KEYWORDS,
} from "@/lib/hyperlocal";
import { pageSeo } from "@/lib/seo-metadata";
import { breadcrumbListJsonLd, contactRealEstateAgentJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  ...pageSeo({
    title: "Cabochon Club Trilogy Sunstone | Resort-Style 55+ Amenities",
    description: `${CLUB_NAME} at ${COMMUNITY_NAME}: Cooper's Kitchen, eight pickleball courts, pools, fitness, and social programming at ${SALES_OFFICE}. ${SEO_KEYWORDS}.`,
    path: "/amenities/cabochon-club",
  }),
};

export default function CabochonClubPage() {
  return (
    <>
      <JsonLd data={contactRealEstateAgentJsonLd()} />
      <JsonLd
        data={breadcrumbListJsonLd([
          { name: "Home", path: "/" },
          { name: "Cabochon Club", path: "/amenities/cabochon-club" },
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
                  Cabochon Club
                </li>
              </ol>
            </div>
          </nav>

          <PageHero image="amenities">
            <h1 className="hero-title mb-4 text-white">
              Cabochon Club at Trilogy Sunstone
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-white/90">
              Resort-style 55+ living at {SALES_OFFICE}—Cooper&apos;s Kitchen, eight pickleball
              courts, pools, and fitness; confirm hours on tour.
            </p>
          </PageHero>

          <article className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 max-w-3xl space-y-6 text-[#3d4544]">
              <p className="leading-relaxed">
                The <strong>{CLUB_NAME}</strong> at {SALES_OFFICE} is the social and wellness heart
                of {COMMUNITY_NAME}—a staff-gated 55+ neighborhood accessed via {HIGHWAY_ACCESS}.
                Residents gather here for fitness, events, dining at Cooper&apos;s Kitchen, and
                everyday connection. Exact menus of classes and hours can change seasonally; the
                best way to evaluate fit is to visit and ask what is active this month.
              </p>
              <h2 className="text-2xl font-bold">On-site amenities buyers tour</h2>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>Eight dedicated pickleball courts with active resident play</li>
                <li>Cooper&apos;s Kitchen — on-site dining and social gathering</li>
                <li>Resort-style pools and outdoor areas for desert-friendly exercise</li>
                <li>Strength and cardio spaces with age-friendly equipment</li>
                <li>Club rooms for classes, clubs, and neighbor meetups</li>
              </ul>
              <h2 className="text-2xl font-bold">What buyers typically look for</h2>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>Strength and cardio spaces with age-friendly equipment</li>
                <li>Pool and outdoor areas for desert-friendly exercise</li>
                <li>Club rooms for clubs, classes, and neighbor meetups</li>
                <li>Programming that matches how you actually socialize—not just a brochure list</li>
              </ul>
              <h2 className="text-2xl font-bold">Pickleball, pools, and “resort-style”</h2>
              <p className="leading-relaxed">
                Many shoppers search <strong>pickleball community Las Vegas</strong> or{" "}
                <strong>Las Vegas retirement community with pool and fitness center</strong>.{" "}
                {COMMUNITY_NAME} offers eight pickleball courts and resort-style pools at the{" "}
                {CLUB_NAME}. If those amenities are non-negotiable, confirm court reservations,
                Cooper&apos;s Kitchen hours, and any guest policies during your discovery
                period—not just on a website screenshot.
              </p>
              <p className="leading-relaxed">{LIFESTYLE_CONTEXT}</p>
              <article className="space-y-4 rounded-lg border border-[#d9e0e2] bg-[#f7fafb] p-6">
                <h2 className="text-2xl font-bold">{RESOURCE_LOCAL_SECTION.heading}</h2>
                {RESOURCE_LOCAL_SECTION.body.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </article>
              <p className="leading-relaxed">
                Next step: review the{" "}
                <Link href="/buyers-guide" className="text-[#1c5087] hover:text-[#003a70] font-medium">
                  Trilogy Sunstone buyer&apos;s guide
                </Link>{" "}
                and{" "}
                <Link href="/guides/northwest-las-vegas-55-plus-homes" className="text-[#1c5087] hover:text-[#003a70] font-medium">
                  northwest Las Vegas 55+ guide
                </Link>{" "}
                to compare lifestyle fit, HOA expectations, and tour planning.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/neighborhoods/trilogy-sunstone"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold bg-[#1c5087] text-white hover:bg-[#003a70]"
                >
                  Back to community overview
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold border border-[#d9e0e2] text-[#3d4544] hover:bg-[#eaf0f2]"
                >
                  Contact us
                </Link>
                <CalendlyPopupButton className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold border border-[#d9e0e2] text-[#3d4544] hover:bg-[#eaf0f2]">
                  Schedule a tour
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
