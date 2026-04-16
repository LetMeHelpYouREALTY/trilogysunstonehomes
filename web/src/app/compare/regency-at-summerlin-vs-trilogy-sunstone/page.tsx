import type { Metadata } from "next";
import Link from "next/link";
import { CalendlyPopupButton } from "@/components/calendly-popup-button";
import { JsonLd } from "@/components/json-ld";
import { RealScoutSearchCta } from "@/components/realscout-search-cta";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { breadcrumbListJsonLd, contactRealEstateAgentJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Regency at Summerlin vs Trilogy Sunstone | 55+ Buyer Notes",
  description:
    "Regency at Summerlin vs Trilogy Sunstone: Summerlin luxury 55+ vs northwest Trilogy Sunstone—what to compare on price, HOA, and lifestyle.",
  alternates: { canonical: "/compare/regency-at-summerlin-vs-trilogy-sunstone" },
};

export default function RegencyVsTrilogyPage() {
  return (
    <>
      <JsonLd data={contactRealEstateAgentJsonLd()} />
      <JsonLd
        data={breadcrumbListJsonLd([
          { name: "Home", path: "/" },
          {
            name: "Regency at Summerlin vs Trilogy Sunstone",
            path: "/compare/regency-at-summerlin-vs-trilogy-sunstone",
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
                  Regency at Summerlin vs Trilogy Sunstone
                </li>
              </ol>
            </div>
          </nav>

          <section className="hero-mesh relative flex flex-col items-center justify-center py-16 px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Regency at Summerlin vs Trilogy Sunstone
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-white/90">
              Summerlin luxury 55+ living vs northwest Trilogy Sunstone—compare with your budget
              and daily routine.
            </p>
          </section>

          <article className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 max-w-3xl space-y-6 text-[#3d4544]">
              <p className="text-sm bg-[#eaf0f2] border border-[#d9e0e2] rounded-md p-4">
                <strong>Disclosure:</strong> Dr. Jan Duffy represents buyers. Community details
                change—verify fees, rules, and availability with current disclosures.
              </p>
              <h2 className="text-2xl font-bold">Product &amp; price bands</h2>
              <p className="leading-relaxed">
                Regency at Summerlin is widely viewed as a luxury 55+ enclave within Summerlin;
                Trilogy Sunstone targets active adults with Shea Homes plans in northwest Las Vegas.
                Apples-to-apples price comparisons only work when you align plan size, lot, upgrades,
                and resale vs new status.
              </p>
              <h2 className="text-2xl font-bold">Lifestyle &amp; commute</h2>
              <p className="leading-relaxed">
                Summerlin-centric living can shorten certain west-side commutes; northwest placement
                can be advantageous for specific recreation and growth corridors. Write down your top
                three weekly destinations and test drive them during peak hours.
              </p>
              <h2 className="text-2xl font-bold">See current Trilogy inventory</h2>
              <p className="leading-relaxed">
                Browse{" "}
                <RealScoutSearchCta variant="inline" className="font-medium">
                  Trilogy Sunstone inventory
                </RealScoutSearchCta>{" "}
                and pair data with a tour. For a broader Summerlin vs northwest discussion, read{" "}
                <Link href="/guides/best-55-plus-communities-las-vegas" className="text-[#1c5087] font-medium">
                  how we compare 55+ communities
                </Link>
                .
              </p>
              <h2 className="text-2xl font-bold">Quick verdict</h2>
              <p className="leading-relaxed">
                Regency at Summerlin can be compelling for buyers prioritizing a Summerlin luxury
                address. Trilogy Sunstone can be a better match for buyers prioritizing northwest Las
                Vegas location and newer Shea Homes product at different price bands.
              </p>
              <p className="text-sm text-[#6b7373]">
                Related comparisons:{" "}
                <Link href="/compare/sun-city-summerlin-vs-trilogy-sunstone" className="text-[#1c5087] font-medium">
                  Sun City Summerlin vs Trilogy Sunstone
                </Link>{" "}
                and{" "}
                <Link href="/compare/del-webb-north-ranch-vs-trilogy-sunstone" className="text-[#1c5087] font-medium">
                  Del Webb North Ranch vs Trilogy Sunstone
                </Link>
                .
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/neighborhoods/trilogy-sunstone"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold bg-[#1c5087] text-white hover:bg-[#003a70]"
                >
                  Explore Trilogy Sunstone
                </Link>
                <CalendlyPopupButton className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold border border-[#d9e0e2] text-[#3d4544] hover:bg-[#eaf0f2]">
                  Schedule time
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
