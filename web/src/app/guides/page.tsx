import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import {
  COMMUNITY_NAME,
  LOCAL_CONTEXT_PARAGRAPH,
  REALTOR_POSITIONING,
  RESOURCE_LOCAL_SECTION,
  SEO_KEYWORDS,
} from "@/lib/hyperlocal";
import { pageSeo } from "@/lib/seo-metadata";
import { breadcrumbListJsonLd, contactRealEstateAgentJsonLd } from "@/lib/schema";
import { SITE_NAME_SHORT } from "@/lib/site-contact";

export const metadata: Metadata = {
  ...pageSeo({
    title: "Las Vegas 55+ Guides | Northwest Active Adult, Relocation & Comparisons",
    description: `Guides for northwest Las Vegas 55+ homes, California-to-Vegas retirement, and how top active adult communities compare—including ${COMMUNITY_NAME}. ${SEO_KEYWORDS}.`,
    path: "/guides",
  }),
};

const guides = [
  {
    href: "/guides/northwest-las-vegas-55-plus-homes",
    title: "Northwest Las Vegas 55+ homes",
    description:
      "Map-pack friendly overview of northwest Las Vegas active adult living, zip 89143 context, and Trilogy Sunstone.",
  },
  {
    href: "/guides/moving-from-california-to-las-vegas-55-plus",
    title: "Moving from California to a Las Vegas 55+ community",
    description:
      "Relocation framing for California buyers—lifestyle, logistics, and how to shop inventory responsibly.",
  },
  {
    href: "/guides/best-55-plus-communities-las-vegas",
    title: "Best 55+ communities in Las Vegas (2026 overview)",
    description:
      "Editorial framework for comparing communities—without fake rankings or one-size-fits-all claims.",
  },
] as const;

const comparisons = [
  {
    href: "/compare/sun-city-summerlin-vs-trilogy-sunstone",
    title: "Sun City Summerlin vs Trilogy Sunstone",
  },
  {
    href: "/compare/del-webb-north-ranch-vs-trilogy-sunstone",
    title: "Del Webb North Ranch vs Trilogy Sunstone",
  },
  {
    href: "/compare/regency-at-summerlin-vs-trilogy-sunstone",
    title: "Regency at Summerlin vs Trilogy Sunstone",
  },
] as const;

export default function GuidesIndexPage() {
  return (
    <>
      <JsonLd data={contactRealEstateAgentJsonLd()} />
      <JsonLd
        data={breadcrumbListJsonLd([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
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
                  Guides
                </li>
              </ol>
            </div>
          </nav>
          <section className="hero-mesh relative flex flex-col items-center justify-center py-20 px-4 text-center">
            <h1 className="hero-title mb-4 text-white">
              Las Vegas 55+ guides and community comparisons
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-white/90">
              Practical resources for {SITE_NAME_SHORT} buyers—local context, relocation, and
              side-by-side community notes.
            </p>
          </section>

          <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
              <p className="text-[#3d4544] leading-relaxed mb-8">{LOCAL_CONTEXT_PARAGRAPH}</p>
              <h2 className="text-2xl font-bold text-[#3d4544] mb-6">Guides</h2>
              <ul className="space-y-6">
                {guides.map((g) => (
                  <li key={g.href} className="border border-[#d9e0e2] rounded-lg p-6 bg-[#f7fafb]">
                    <Link
                      href={g.href}
                      className="text-xl font-semibold text-[#1c5087] hover:text-[#003a70]"
                    >
                      {g.title}
                    </Link>
                    <p className="text-[#3d4544] mt-2">{g.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-[#eaf0f2]">
            <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-2xl font-bold text-[#3d4544] mb-6">Community comparisons</h2>
              <p className="text-[#3d4544] mb-4">
                Start with our{" "}
                <Link href="/guides/best-55-plus-communities-las-vegas" className="text-[#1c5087] hover:text-[#003a70] font-medium">
                  best 55+ communities Las Vegas 2026 overview
                </Link>{" "}
                and then use the direct comparisons below for side-by-side decisions.
              </p>
              <ul className="space-y-3 list-disc list-inside text-[#3d4544]">
                {comparisons.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href} className="text-[#1c5087] hover:text-[#003a70] font-medium">
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-[#6b7373] mt-6">
                {REALTOR_POSITIONING} Comparisons are for education; confirm details on tours and in
                HOA documents.{" "}
                <Link
                  href="/neighborhoods/trilogy-sunstone"
                  className="text-[#1c5087] hover:text-[#003a70] font-medium"
                >
                  {COMMUNITY_NAME} community page
                </Link>
                {" · "}
                <Link href="/contact" className="text-[#1c5087] hover:text-[#003a70] font-medium">
                  Contact us
                </Link>
              </p>
            </div>
          </section>

          <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
              <article className="space-y-4 rounded-lg border border-[#d9e0e2] bg-[#f7fafb] p-6">
                <h2 className="text-2xl font-bold text-[#3d4544]">{RESOURCE_LOCAL_SECTION.heading}</h2>
                {RESOURCE_LOCAL_SECTION.body.map((paragraph) => (
                  <p key={paragraph} className="text-[#3d4544] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </article>
            </div>
          </section>
        </main>
      </div>
      <StickyMobileCta />
    </>
  );
}
