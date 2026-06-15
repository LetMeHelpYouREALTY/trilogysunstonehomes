import type { Metadata } from "next";
import Link from "next/link";
import { CalendlyInlineWidget } from "@/components/calendly-inline-widget";
import { CalendlyPopupButton } from "@/components/calendly-popup-button";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { LazyRealScoutOfficeListings } from "@/components/lazy-realscout-office-listings";
import { MlsListingDisclaimer } from "@/components/mls-listing-disclaimer";
import { RealScoutSearchCta } from "@/components/realscout-search-cta";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import {
  AGE_RESTRICTION,
  BUILDER,
  CLUB_NAME,
  COMMUNITY_NAME,
  GEO_SUBHEAD,
  HOME_COLLECTIONS,
  LIFESTYLE_CONTEXT,
  LOCAL_CONTEXT_PARAGRAPH,
  REALTOR_POSITIONING,
  ZIP,
} from "@/lib/hyperlocal";
import { pageSeo } from "@/lib/seo-metadata";
import { homeRealEstateAgentWithReviewsJsonLd } from "@/lib/schema";
import { AGENT_LICENSE_LINE, CONTACT_SELLING_SECTION_ID } from "@/lib/site-contact";

export const metadata: Metadata = {
  ...pageSeo({
    title: "Trilogy Sunstone Homes for Sale | Las Vegas 55+ | Northwest Active Adult",
    description: `Trilogy Sunstone homes for sale in northwest Las Vegas (${ZIP}) — ${AGE_RESTRICTION} active adult community with Shea Homes new construction and resale. Inventory, Cabochon Club tours, and buyer guidance.`,
    path: "/",
  }),
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeRealEstateAgentWithReviewsJsonLd()} />
      <div className="pb-24 md:pb-0">
      <main className="min-h-screen flex flex-col">
        <PageHero image="home" size="large" priority>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/95">
            {GEO_SUBHEAD}
          </p>
          <h1 className="hero-title-lg mb-6 leading-tight text-white drop-shadow-sm">
            Trilogy Sunstone Homes for Sale
          </h1>
          <p className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto">
            Buy a home in Trilogy Sunstone — Las Vegas&apos; 55+ community with Shea Homes
            new construction, resale homes, and resort-style living near Red Rock Canyon.
          </p>
          <div className="flex w-full max-w-3xl flex-col items-stretch justify-center gap-4 px-2 sm:flex-row sm:items-stretch">
            <RealScoutSearchCta variant="hero" className="sm:min-w-0 sm:flex-1" />
            <CalendlyPopupButton className="btn-primary-solid sm:flex-1 sm:justify-center">
              Schedule a 15-Minute Conversation
            </CalendlyPopupButton>
          </div>
          <p className="mx-auto mt-6 max-w-xl px-2 text-[11px] leading-relaxed text-white/90 sm:text-xs">
            {AGENT_LICENSE_LINE}
          </p>
          <p className="mt-4 text-sm font-medium text-white">
            <Link
              href={`/contact#${CONTACT_SELLING_SECTION_ID}`}
              className="rounded-sm underline decoration-white/40 underline-offset-[3px] transition hover:decoration-white"
            >
              Selling your Trilogy Sunstone home?
            </Link>
          </p>
        </PageHero>

        <section className="py-16 md:py-20 bg-[#eaf0f2]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#3d4544] mb-4 text-center">
                Northwest Las Vegas {ZIP}: {COMMUNITY_NAME}
              </h2>
              <p className="text-[#3d4544] leading-relaxed mb-4">{LOCAL_CONTEXT_PARAGRAPH}</p>
              <p className="text-[#3d4544] leading-relaxed mb-6">{LIFESTYLE_CONTEXT}</p>
              <p className="text-[#4e5655] text-sm leading-relaxed mb-6">{REALTOR_POSITIONING}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card-elevated bg-white p-6">
                  <h3 className="font-semibold text-[#1c5087] mb-2">
                    <Link
                      href="/amenities/cabochon-club"
                      className="hover:text-[#003a70]"
                    >
                      {CLUB_NAME}
                    </Link>
                  </h3>
                  <p className="text-[#6b7373] text-sm">
                    Resort-style amenities anchor daily life at {COMMUNITY_NAME}—fitness,
                    pools, social clubs, and events inside the staff-gated {AGE_RESTRICTION}{" "}
                    neighborhood.
                  </p>
                </div>
                <div className="card-elevated bg-white p-6">
                  <h3 className="font-semibold text-[#1c5087] mb-2">{BUILDER} collections</h3>
                  <ul className="text-[#6b7373] text-sm space-y-1 list-disc list-inside">
                    {HOME_COLLECTIONS.map((collection) => (
                      <li key={collection}>{collection}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex items-start justify-center gap-3 text-center sm:text-left">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#3d4544] mb-4">
                  Tired of searching endless listings?
                </h2>
                <p className="text-lg text-[#3d4544]">
                  We simplify your home search with{" "}
                  <RealScoutSearchCta variant="inline" className="font-medium">
                    curated Trilogy Sunstone inventory
                  </RealScoutSearchCta>
                  , expert guidance, and exclusive{" "}
                  <Link
                    href="/neighborhoods/trilogy-sunstone"
                    className="text-[#1c5087] hover:text-[#003a70] font-medium"
                  >
                    community insights
                  </Link>
                  .
                </p>
              <p className="mt-4 text-sm text-[#4e5655]">
                Start with our{" "}
                <Link href="/buyers-guide" className="text-[#1c5087] hover:text-[#003a70] font-medium">
                  buyers guide
                </Link>{" "}
                for resale vs new construction, then review{" "}
                <Link href="/faq" className="text-[#1c5087] hover:text-[#003a70] font-medium">
                  HOA fee and pricing FAQ
                </Link>{" "}
                before scheduling a tour.
              </p>
              </div>
              <span
                className="shrink-0 w-6 h-6 rounded-full bg-[#eaf0f2] flex items-center justify-center"
                aria-hidden="true"
              >
                <svg
                  className="w-4 h-4 text-[#1c5087]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[#eaf0f2]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#3d4544] mb-4">
                A Better Way to Buy
              </h2>
              <ul
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
                aria-label="Benefits"
              >
                <li className="card-elevated p-6 text-[#3d4544] font-medium transition-shadow">
                  Personalized Home Matches
                </li>
                <li className="card-elevated p-6 text-[#3d4544] font-medium transition-shadow">
                  <Link
                    href="/neighborhoods/trilogy-sunstone"
                    className="text-[#1c5087] hover:text-[#003a70] font-semibold"
                  >
                    Neighborhood &amp; Amenity Insights
                  </Link>
                </li>
                <li className="card-elevated p-6 text-[#3d4544] font-medium transition-shadow">
                  <Link href="/buyers-guide" className="text-[#1c5087] hover:text-[#003a70] font-semibold">
                    Guided Buyer Journey
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#3d4544] mb-4">
                What Buyers Are Saying
              </h2>
              <div className="flex flex-col md:flex-row gap-8 justify-center mt-8">
                <blockquote className="card-elevated max-w-sm mx-auto p-6 text-[#3d4544]">
                  &ldquo;The process was so easy and the community is amazing!&rdquo;
                  <span className="block mt-2 font-semibold text-[#1c5087]">— Linda S.</span>
                </blockquote>
                <blockquote className="card-elevated max-w-sm mx-auto p-6 text-[#3d4544]">
                  &ldquo;I found my perfect home and made new friends right away.&rdquo;
                  <span className="block mt-2 font-semibold text-[#1c5087]">— Mark L.</span>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[#eaf0f2] min-h-[480px] flex flex-col items-center justify-center relative z-[1]">
          <div className="container mx-auto px-4 w-full max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[#3d4544] mb-4 text-center">
              Trilogy Sunstone homes for sale
            </h2>
            <p className="text-center text-[#6b7373] mb-8">
              Explore current inventory and home values in the{" "}
              <Link
                href="/neighborhoods/trilogy-sunstone"
                className="text-[#1c5087] hover:text-[#003a70] font-medium"
              >
                Trilogy Sunstone community
              </Link>
              .
            </p>
            <LazyRealScoutOfficeListings />
            <MlsListingDisclaimer />
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#3d4544] mb-4">
                Have Questions or Concerns?
              </h2>
              <p className="text-lg text-[#3d4544] mb-6">
                Our team is here to help you every step of the way. No pressure, just
                guidance. See our{" "}
                <Link href="/faq" className="text-[#1c5087] hover:text-[#003a70] font-medium">
                  FAQ
                </Link>{" "}
                for common questions, or reach out anytime.
              </p>
              <CalendlyPopupButton className="inline-flex items-center justify-center bg-[#789e35] hover:bg-[#66872d] text-white font-semibold px-8 py-4 rounded-md shadow transition-colors focus:outline-none focus:ring-2 focus:ring-[#8bb63e] focus:ring-offset-2">
                Ask a Question
              </CalendlyPopupButton>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[#3d4544] mb-4 text-center">
                Book a 15-Minute Conversation
              </h2>
              <p className="text-[#6b7373] mb-8 text-center">
                Pick a time that works for you and we will confirm the details.
              </p>
              <CalendlyInlineWidget />
            </div>
          </div>
        </section>

        <section className="section-cta py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display mb-4 tracking-tight">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-[#eaf0f2] mb-8 max-w-2xl mx-auto">
              Get your free{" "}
              <Link href="/buyers-guide" className="link-accent">
                buyer&apos;s guide
              </Link>{" "}
              and{" "}
              <Link href="/neighborhoods/trilogy-sunstone" className="link-accent">
                community insights
              </Link>
              .
            </p>
            <CalendlyPopupButton className="btn-primary-solid">
              Schedule time with me
            </CalendlyPopupButton>
          </div>
        </section>
      </main>
      </div>
      <StickyMobileCta />
    </>
  );
}
