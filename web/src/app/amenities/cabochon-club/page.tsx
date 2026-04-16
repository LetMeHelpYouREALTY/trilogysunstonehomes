import type { Metadata } from "next";
import Link from "next/link";
import { CalendlyPopupButton } from "@/components/calendly-popup-button";
import { JsonLd } from "@/components/json-ld";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { breadcrumbListJsonLd, contactRealEstateAgentJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Cabochon Club Trilogy Sunstone | Resort-Style 55+ Amenities",
  description:
    "Cabochon Club at Trilogy Sunstone: resident clubhouse, fitness and social programming, and resort-style 55+ living in northwest Las Vegas—confirm details on tour.",
  alternates: { canonical: "/amenities/cabochon-club" },
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

          <section className="hero-mesh relative flex flex-col items-center justify-center py-16 px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Cabochon Club at Trilogy Sunstone
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-white/90">
              Resort-style living in a Las Vegas 55+ community—programming and amenities evolve;
              tour for the latest.
            </p>
          </section>

          <article className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 max-w-3xl space-y-6 text-[#3d4544]">
              <p className="leading-relaxed">
                The <strong>Cabochon Club</strong> is the social and wellness heart of Trilogy
                Sunstone—a place where residents gather for fitness, events, and everyday
                connection. Exact menus of classes and hours can change seasonally; the best way to
                evaluate fit is to visit and ask what is active this month.
              </p>
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
                <strong>Las Vegas retirement community with pool and fitness center</strong>. If
                those amenities are non-negotiable, confirm court reservations, hours, and any
                guest policies during your discovery period—not just on a website screenshot.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/neighborhoods/trilogy-sunstone"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold bg-[#1c5087] text-white hover:bg-[#003a70]"
                >
                  Back to community overview
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
