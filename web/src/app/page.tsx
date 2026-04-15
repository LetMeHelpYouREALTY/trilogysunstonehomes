import type { Metadata } from "next";
import Link from "next/link";
import { CalendlyInlineWidget } from "@/components/calendly-inline-widget";
import { CalendlyPopupButton } from "@/components/calendly-popup-button";
import { JsonLd } from "@/components/json-ld";
import { RealScoutOfficeListings } from "@/components/realscout-office-listings";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { homeRealEstateAgentWithReviewsJsonLd } from "@/lib/schema";
import { REALSCOUT_SHARED_SEARCH_URL, SITE_NAME_SHORT } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: `${SITE_NAME_SHORT} — Las Vegas 55+ homes for sale`,
  description:
    "Trilogy Sunstone Las Vegas homes for sale. Find your dream home in the premier 55+ active lifestyle community. Listings, price info, and community reviews.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeRealEstateAgentWithReviewsJsonLd()} />
      <div className="pb-24 md:pb-0">
      <main className="min-h-screen flex flex-col">
        <section className="hero-mesh relative flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9e0e2]">
            Las Vegas · 55+ Active Adult
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-6 leading-tight text-white drop-shadow-sm">
            Find Your Dream Home at Trilogy Sunstone
          </h1>
          <p className="text-lg md:text-xl text-[#eaf0f2] mb-10 max-w-2xl mx-auto">
            Las Vegas&apos; premier 55+ active lifestyle community. Discover new homes,
            amenities, and a vibrant neighborhood.
          </p>
          <CalendlyPopupButton className="btn-primary-solid">
            Schedule a Home Tour
          </CalendlyPopupButton>
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
                  <a
                    href={REALSCOUT_SHARED_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1c5087] hover:text-[#003a70] font-medium"
                  >
                    curated Trilogy Sunstone listings
                  </a>
                  , expert guidance, and exclusive{" "}
                  <Link
                    href="/neighborhoods/trilogy-sunstone"
                    className="text-[#1c5087] hover:text-[#003a70] font-medium"
                  >
                    community insights
                  </Link>
                  .
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
              Explore current listings and home values in the{" "}
              <Link
                href="/neighborhoods/trilogy-sunstone"
                className="text-[#1c5087] hover:text-[#003a70] font-medium"
              >
                Trilogy Sunstone community
              </Link>
              .
            </p>
            <RealScoutOfficeListings />
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
                Schedule Your 90-Minute Home Tour
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
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
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
