import type { Metadata } from "next";
import Link from "next/link";
import { CalendlyPopupButton } from "@/components/calendly-popup-button";
import { JsonLd } from "@/components/json-ld";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { breadcrumbListJsonLd, contactRealEstateAgentJsonLd } from "@/lib/schema";
import { REALSCOUT_SHARED_SEARCH_URL } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Del Webb North Ranch vs Trilogy Sunstone | 55+ Las Vegas",
  description:
    "Compare Del Webb North Ranch and Trilogy Sunstone: builder backgrounds, northwest Las Vegas context, and what to verify on site tours.",
  alternates: { canonical: "/compare/del-webb-north-ranch-vs-trilogy-sunstone" },
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
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
                Del Webb has a long track record across multiple Las Vegas communities. Trilogy
                Sunstone is a Trilogy-branded Shea Homes community in the Sunstone master plan. Your
                comparison should be less about logos and more about the specific homes available
                today: plan, lot, monthly carrying costs, and commute reality.
              </p>
              <h2 className="text-2xl font-bold">Northwest context</h2>
              <p className="leading-relaxed">
                If you are focused on <strong>Del Webb Las Vegas</strong> vs Trilogy for northwest
                access and outdoor recreation, map your typical week: healthcare appointments,
                airport runs, and family visits. Drive-time assumptions are where many spreadsheets
                break.
              </p>
              <h2 className="text-2xl font-bold">Practical next step</h2>
              <p className="leading-relaxed">
                Open{" "}
                <a
                  href={REALSCOUT_SHARED_SEARCH_URL}
                  className="text-[#1c5087] font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trilogy Sunstone listings
                </a>
                , then schedule a community tour with questions in hand. If you want a side-by-side
                itinerary, contact us and we will help you structure it.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/neighborhoods/trilogy-sunstone"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold bg-[#1c5087] text-white hover:bg-[#003a70]"
                >
                  Trilogy Sunstone community
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
