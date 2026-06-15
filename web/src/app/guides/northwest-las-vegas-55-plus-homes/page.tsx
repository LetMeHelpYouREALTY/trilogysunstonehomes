import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import {
  AREA_LABEL,
  COMMUNITY_NAME,
  HIGHWAY_ACCESS,
  LOCAL_CONTEXT_PARAGRAPH,
  LIFESTYLE_CONTEXT,
  MASTER_PLAN,
  RESOURCE_LOCAL_SECTION,
  SEO_KEYWORDS,
  ZIP,
} from "@/lib/hyperlocal";
import { pageSeo } from "@/lib/seo-metadata";
import { breadcrumbListJsonLd, contactRealEstateAgentJsonLd } from "@/lib/schema";
import { MAPS_SEARCH_URL, POSTAL_CODE, SITE_NAME_SHORT } from "@/lib/site-contact";

export const metadata: Metadata = {
  ...pageSeo({
    title: "Northwest Las Vegas 55+ Homes | Active Adult 89143 & Sunstone Area",
    description: `55+ homes for sale ${AREA_LABEL}: active adult living near Red Rock Canyon, ${MASTER_PLAN} master plan, zip ${ZIP}, and how ${COMMUNITY_NAME} fits the map. ${SEO_KEYWORDS}.`,
    path: "/guides/northwest-las-vegas-55-plus-homes",
  }),
};

export default function NorthwestLasVegas55GuidePage() {
  return (
    <>
      <JsonLd data={contactRealEstateAgentJsonLd()} />
      <JsonLd
        data={breadcrumbListJsonLd([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          {
            name: "Northwest Las Vegas 55+ homes",
            path: "/guides/northwest-las-vegas-55-plus-homes",
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
                  Northwest Las Vegas 55+ homes
                </li>
              </ol>
            </div>
          </nav>

          <section className="hero-mesh relative flex flex-col items-center justify-center py-16 px-4 text-center">
            <h1 className="hero-title mb-4 text-white">
              Northwest Las Vegas 55+ homes
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-white/90">
              Active adult communities, Sunstone-area master planning, and Trilogy Sunstone in zip{" "}
              {POSTAL_CODE}.
            </p>
          </section>

          <article className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
              <p className="text-[#3d4544] text-lg leading-relaxed mb-6">
                Buyers searching <strong>55+ homes for sale northwest Las Vegas</strong> are often
                comparing lifestyle, HOA costs, and drive times to recreation. {AREA_LABEL} includes
                master-planned areas such as <strong>{MASTER_PLAN}</strong>, where{" "}
                <Link
                  href="/neighborhoods/trilogy-sunstone"
                  className="text-[#1c5087] hover:text-[#003a70] font-medium"
                >
                  {COMMUNITY_NAME}
                </Link>{" "}
                offers Shea Homes product lines, the Cabochon Club with Cooper&apos;s Kitchen, and
                resort-style programming off {HIGHWAY_ACCESS}.
              </p>
              <p className="text-[#3d4544] leading-relaxed mb-6">{LOCAL_CONTEXT_PARAGRAPH}</p>
              <h2 className="text-2xl font-bold text-[#3d4544] mt-10 mb-4">
                Why northwest Las Vegas for active adults
              </h2>
              <p className="text-[#3d4544] leading-relaxed mb-4">
                The corridor appeals to buyers who want newer construction inventory, open desert
                views, and straightforward access to outdoor recreation toward{" "}
                <strong>Red Rock Canyon</strong> and <strong>Mount Charleston</strong> for seasonal
                escapes. Healthcare, retail, and services continue to expand with neighborhood
                growth—confirm commute patterns to your doctors and family before you buy.
              </p>
              <p className="text-[#3d4544] leading-relaxed mb-4">{LIFESTYLE_CONTEXT}</p>
              <h2 className="text-2xl font-bold text-[#3d4544] mt-10 mb-4">
                Active adult community Las Vegas {POSTAL_CODE}
              </h2>
              <p className="text-[#3d4544] leading-relaxed mb-4">
                Trilogy Sunstone is associated with Las Vegas zip code <strong>{POSTAL_CODE}</strong>.
                Always verify the exact address on the listing: tax districts, HOA assessments, and
                school attribution can differ slightly even within the same zip.
              </p>
              <h2 className="text-2xl font-bold text-[#3d4544] mt-10 mb-4">
                Gated community expectations
              </h2>
              <p className="text-[#3d4544] leading-relaxed mb-4">
                Many buyers ask about <strong>55+ gated community Las Vegas NV</strong> options.
                Gates can add privacy and traffic calming, but they do not replace due diligence on
                HOA budgets, insurance, and rules. Ask for the latest HOA budget and meeting notes
                during your discovery period—not just the marketing brochure.
              </p>
              <h2 className="text-2xl font-bold text-[#3d4544] mt-10 mb-4">Next steps</h2>
              <p className="text-[#3d4544] leading-relaxed mb-6">
                Tour{" "}
                <Link href="/neighborhoods/trilogy-sunstone" className="text-[#1c5087] font-medium">
                  {COMMUNITY_NAME}
                </Link>
                , compare notes with our{" "}
                <Link href="/guides" className="text-[#1c5087] font-medium">
                  guides hub
                </Link>
                , and{" "}
                <Link href="/contact" className="text-[#1c5087] font-medium">
                  contact {SITE_NAME_SHORT}
                </Link>{" "}
                when you want buyer representation aligned with your timeline.
              </p>
              <article className="space-y-4 rounded-lg border border-[#d9e0e2] bg-[#f7fafb] p-6 mb-6">
                <h2 className="text-2xl font-bold text-[#3d4544]">{RESOURCE_LOCAL_SECTION.heading}</h2>
                {RESOURCE_LOCAL_SECTION.body.map((paragraph) => (
                  <p key={paragraph} className="text-[#3d4544] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </article>
              <p className="text-[#3d4544] leading-relaxed mb-6">
                For planning details before touring, read the{" "}
                <Link href="/buyers-guide" className="text-[#1c5087] font-medium">
                  buyer&apos;s guide
                </Link>{" "}
                and review{" "}
                <Link href="/faq" className="text-[#1c5087] font-medium">
                  HOA fee and pricing FAQ
                </Link>
                .
              </p>
              <p className="text-sm text-[#6b7373]">
                <a
                  href={MAPS_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1c5087] font-medium"
                >
                  Open map
                </a>{" "}
                for directions context.
              </p>
            </div>
          </article>
        </main>
      </div>
      <StickyMobileCta />
    </>
  );
}
