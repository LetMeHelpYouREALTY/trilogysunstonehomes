import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { breadcrumbListJsonLd, contactRealEstateAgentJsonLd } from "@/lib/schema";
import { SITE_NAME_SHORT } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "California to Las Vegas 55+ | Retirement Relocation Guide",
  description:
    "Moving from California to Las Vegas for retirement: 55+ community shopping, lifestyle tradeoffs, and why buyers tour Trilogy Sunstone. General information—not tax or legal advice.",
  alternates: { canonical: "/guides/moving-from-california-to-las-vegas-55-plus" },
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

          <section className="hero-mesh relative flex flex-col items-center justify-center py-16 px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Moving from California to a Las Vegas 55+ community
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-white/90">
              Retire in Las Vegas from California with a practical checklist—home first, headlines
              second.
            </p>
          </section>

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
                  Trilogy Sunstone
                </Link>{" "}
                combines Shea Homes new construction and resale inventory with a dedicated 55+
                lifestyle footprint in northwest Las Vegas. Start with a tour and a live search
                aligned to your budget.
              </p>
              <p className="text-sm text-[#6b7373] border-t border-[#d9e0e2] pt-6">
                Questions? {SITE_NAME_SHORT} is happy to coordinate tours and introductions to
                trusted local professionals when you need them.
              </p>
            </div>
          </article>
        </main>
      </div>
      <StickyMobileCta />
    </>
  );
}
