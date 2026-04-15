import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { RealScoutOfficeListings } from "@/components/realscout-office-listings";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { homeRealEstateAgentWithReviewsJsonLd } from "@/lib/schema";
import { SITE_NAME_SHORT } from "@/lib/site-contact";

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
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100/90">
            Las Vegas · 55+ Active Adult
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-6 leading-tight text-white drop-shadow-sm">
            Find Your Dream Home at Trilogy Sunstone
          </h1>
          <p className="text-lg md:text-xl text-blue-50/95 mb-10 max-w-2xl mx-auto">
            Las Vegas&apos; premier 55+ active lifestyle community. Discover new homes,
            amenities, and a vibrant neighborhood.
          </p>
          <Link href="/contact" className="btn-primary-solid">
            Get Started
          </Link>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex items-start justify-center gap-3 text-center sm:text-left">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Tired of searching endless listings?
                </h2>
                <p className="text-lg text-slate-700">
                  We simplify your home search with{" "}
                  <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
                    curated Trilogy Sunstone listings
                  </Link>
                  , expert guidance, and exclusive{" "}
                  <Link
                    href="/neighborhoods/trilogy-sunstone"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    community insights
                  </Link>
                  .
                </p>
              </div>
              <span
                className="shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center"
                aria-hidden="true"
              >
                <svg
                  className="w-4 h-4 text-blue-600"
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

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                A Better Way to Buy
              </h2>
              <ul
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
                aria-label="Benefits"
              >
                <li className="card-elevated p-6 text-slate-900 font-medium transition-shadow">
                  Personalized Home Matches
                </li>
                <li className="card-elevated p-6 text-slate-900 font-medium transition-shadow">
                  <Link
                    href="/neighborhoods/trilogy-sunstone"
                    className="text-blue-700 hover:text-blue-800 font-semibold"
                  >
                    Neighborhood &amp; Amenity Insights
                  </Link>
                </li>
                <li className="card-elevated p-6 text-slate-900 font-medium transition-shadow">
                  <Link href="/buyers-guide" className="text-blue-700 hover:text-blue-800 font-semibold">
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
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                What Buyers Are Saying
              </h2>
              <div className="flex flex-col md:flex-row gap-8 justify-center mt-8">
                <blockquote className="card-elevated max-w-sm mx-auto p-6 text-slate-700">
                  &ldquo;The process was so easy and the community is amazing!&rdquo;
                  <span className="block mt-2 font-semibold text-blue-600">— Linda S.</span>
                </blockquote>
                <blockquote className="card-elevated max-w-sm mx-auto p-6 text-slate-700">
                  &ldquo;I found my perfect home and made new friends right away.&rdquo;
                  <span className="block mt-2 font-semibold text-blue-600">— Mark L.</span>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-slate-50/80 min-h-[480px] flex flex-col items-center justify-center relative z-[1]">
          <div className="container mx-auto px-4 w-full max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-center">
              Trilogy Sunstone homes for sale
            </h2>
            <p className="text-center text-slate-600 mb-8">
              Explore current listings and home values in the{" "}
              <Link
                href="/neighborhoods/trilogy-sunstone"
                className="text-blue-600 hover:text-blue-700 font-medium"
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
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                Have Questions or Concerns?
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                Our team is here to help you every step of the way. No pressure, just
                guidance. See our{" "}
                <Link href="/faq" className="text-blue-600 hover:text-blue-700 font-medium">
                  FAQ
                </Link>{" "}
                for common questions, or reach out anytime.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-md shadow transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Ask a Question
              </Link>
            </div>
          </div>
        </section>

        <section className="section-cta py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-50/95 mb-8 max-w-2xl mx-auto">
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
            <Link href="/buyers-guide" className="btn-primary-solid">
              Get Your Free Guide
            </Link>
          </div>
        </section>
      </main>
      </div>
      <StickyMobileCta />
    </>
  );
}
