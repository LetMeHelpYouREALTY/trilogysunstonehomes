import type { Metadata } from "next";
import Link from "next/link";
import { CalendlyPopupButton } from "@/components/calendly-popup-button";
import { JsonLd } from "@/components/json-ld";
import { RealScoutSearchCta } from "@/components/realscout-search-cta";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { breadcrumbListJsonLd, contactRealEstateAgentJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sun City Summerlin vs Trilogy Sunstone | Las Vegas 55+ Comparison",
  description:
    "Compare Sun City Summerlin and Trilogy Sunstone: location, home types, HOA considerations, and lifestyle fit. Educational overview for buyers touring Las Vegas 55+ communities.",
  alternates: { canonical: "/compare/sun-city-summerlin-vs-trilogy-sunstone" },
};

export default function SunCityVsTrilogyPage() {
  return (
    <>
      <JsonLd data={contactRealEstateAgentJsonLd()} />
      <JsonLd
        data={breadcrumbListJsonLd([
          { name: "Home", path: "/" },
          {
            name: "Sun City Summerlin vs Trilogy Sunstone",
            path: "/compare/sun-city-summerlin-vs-trilogy-sunstone",
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
                  Sun City Summerlin vs Trilogy Sunstone
                </li>
              </ol>
            </div>
          </nav>

          <section className="hero-mesh relative flex flex-col items-center justify-center py-16 px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Sun City Summerlin vs Trilogy Sunstone
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-white/90">
              A balanced buyer-side look at two popular Las Vegas 55+ options.
            </p>
          </section>

          <article className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 max-w-3xl space-y-6 text-[#3d4544]">
              <p className="text-sm bg-[#eaf0f2] border border-[#d9e0e2] rounded-md p-4">
                <strong>Disclosure:</strong> Dr. Jan Duffy represents buyers in Las Vegas. This
                comparison is for education—confirm all material facts on tours, in HOA
                documents, and with builder or resale disclosures.
              </p>
              <h2 className="text-2xl font-bold text-[#3d4544]">Location &amp; setting</h2>
              <p className="leading-relaxed">
                Sun City Summerlin is an established Del Webb community within the Summerlin master
                plan—mature trees, extensive clubs, and a wide range of resale homes. Trilogy
                Sunstone is a newer Shea Homes 55+ neighborhood in northwest Las Vegas within the
                Sunstone area, with modern floor plans and resort-style programming. Your preferred
                geography—Summerlin vs northwest—often narrows the decision quickly.
              </p>
              <h2 className="text-2xl font-bold text-[#3d4544]">Homes &amp; inventory</h2>
              <p className="leading-relaxed">
                Summerlin-area resale inventory can be broad in age and condition; Trilogy Sunstone
                often emphasizes newer construction and targeted resale alongside builder sales.
                Searching{" "}
                <RealScoutSearchCta variant="inline" className="font-medium">
                  live listings
                </RealScoutSearchCta>{" "}
                beats guessing price bands.
              </p>
              <h2 className="text-2xl font-bold text-[#3d4544]">Lifestyle fit</h2>
              <p className="leading-relaxed">
                Both communities cater to active adults, but club culture, amenity mix, and travel
                patterns differ. Tour each with a written list: guest parking, pickleball, pool hours,
                fitness offerings, and social clubs you will actually use.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/neighborhoods/trilogy-sunstone"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold bg-[#1c5087] text-white hover:bg-[#003a70]"
                >
                  Explore Trilogy Sunstone
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
