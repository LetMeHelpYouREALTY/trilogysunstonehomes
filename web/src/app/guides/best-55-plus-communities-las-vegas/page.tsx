import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { breadcrumbListJsonLd, contactRealEstateAgentJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best 55+ Communities Las Vegas 2026 | How to Compare (No Fake Rankings)",
  description:
    "How to evaluate the best 55+ communities in Las Vegas in 2026: location, HOA, product type, and lifestyle fit—including Trilogy Sunstone and Summerlin-area alternatives.",
  alternates: { canonical: "/guides/best-55-plus-communities-las-vegas" },
};

export default function Best55PlusCommunitiesPage() {
  return (
    <>
      <JsonLd data={contactRealEstateAgentJsonLd()} />
      <JsonLd
        data={breadcrumbListJsonLd([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          {
            name: "Best 55+ Las Vegas",
            path: "/guides/best-55-plus-communities-las-vegas",
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
                  Best 55+ communities Las Vegas
                </li>
              </ol>
            </div>
          </nav>

          <section className="hero-mesh relative flex flex-col items-center justify-center py-16 px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Best 55+ communities in Las Vegas—how to compare
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-white/90">
              A people-first framework for 2026 shopping: fit beats buzzwords.
            </p>
          </section>

          <article className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
              <p className="text-[#3d4544] text-lg leading-relaxed mb-6">
                Searching <strong>best 55+ communities Las Vegas 2026</strong> will surface glossy
                marketing and conflicting opinions. Google rewards helpful, reliable content—so here
                is an honest decision framework instead of a fake numbered ranking.
              </p>
              <h2 className="text-2xl font-bold text-[#3d4544] mt-10 mb-4">Start with constraints</h2>
              <p className="text-[#3d4544] leading-relaxed mb-4">
                List your non-negotiables: budget, single-story vs multi-level tolerance, guest suite
                needs, proximity to healthcare, and travel patterns. Then evaluate{" "}
                <strong>active adult communities northwest Las Vegas</strong> separately from
                Summerlin-centered options—drive times and vibe differ.
              </p>
              <h2 className="text-2xl font-bold text-[#3d4544] mt-10 mb-4">Compare HOA and value</h2>
              <p className="text-[#3d4544] leading-relaxed mb-4">
                Low HOA is not automatically “better.” Understand what is covered: front yard
                maintenance, clubhouse staffing, reserves, and insurance. Ask for the latest budget
                and special assessment history when you are serious about a community.
              </p>
              <h2 className="text-2xl font-bold text-[#3d4544] mt-10 mb-4">Where Trilogy Sunstone fits</h2>
              <p className="text-[#3d4544] leading-relaxed mb-6">
                <Link
                  href="/neighborhoods/trilogy-sunstone"
                  className="text-[#1c5087] hover:text-[#003a70] font-medium"
                >
                  Trilogy Sunstone
                </Link>{" "}
                is a strong candidate when you want Shea Homes product, a northwest Las Vegas
                location, and resort-style programming. Compare it directly using our{" "}
                <Link href="/compare/sun-city-summerlin-vs-trilogy-sunstone" className="text-[#1c5087] font-medium">
                  Sun City Summerlin comparison
                </Link>{" "}
                or{" "}
                <Link href="/compare/del-webb-north-ranch-vs-trilogy-sunstone" className="text-[#1c5087] font-medium">
                  Del Webb North Ranch comparison
                </Link>
                {" "}or{" "}
                <Link href="/compare/regency-at-summerlin-vs-trilogy-sunstone" className="text-[#1c5087] font-medium">
                  Regency at Summerlin comparison
                </Link>
                .
              </p>
              <p className="text-sm text-[#6b7373]">
                Dr. Jan Duffy represents buyers—not sellers for competing builders. Disclosures are
                part of good service, not a footnote.
              </p>
            </div>
          </article>
        </main>
      </div>
      <StickyMobileCta />
    </>
  );
}
