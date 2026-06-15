import type { Metadata } from "next";
import Link from "next/link";
import { CalendlyInlineWidget } from "@/components/calendly-inline-widget";
import { CalendlyPopupButton } from "@/components/calendly-popup-button";
import { JsonLd } from "@/components/json-ld";
import { RealScoutSearchCta } from "@/components/realscout-search-cta";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import {
  AREA_LABEL,
  BUILDER,
  CLUB_NAME,
  COMMUNITY_NAME,
  COMMUNITY_NAME_ALT,
  GEO_SUBHEAD,
  HIGHWAY_ACCESS,
  HOME_COLLECTIONS,
  LIFESTYLE_CONTEXT,
  LOCAL_CONTEXT_PARAGRAPH,
  MASTER_PLAN,
  SALES_OFFICE,
  SEO_KEYWORDS,
  ZIP,
} from "@/lib/hyperlocal";
import { pageSeo } from "@/lib/seo-metadata";
import { faqPageJsonLd, trilogySunstoneBreadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  ...pageSeo({
    title: "Trilogy at Sunstone Real Estate | Shea Homes Floor Plans, HOA & Cabochon Club",
    description: `${COMMUNITY_NAME_ALT} real estate in ${AREA_LABEL} (${ZIP}): ${BUILDER}, Freedom & Resort Collection homes, Cabochon Club, resale & new construction. ${SEO_KEYWORDS}.`,
    path: "/neighborhoods/trilogy-sunstone",
  }),
};

const communityFaq = [
  {
    question: "Is Trilogy Sunstone age-restricted?",
    answer:
      "Yes. Trilogy Sunstone is a 55+ active adult community. At least one household member must be 55 or older. This supports a lifestyle focused on active adults.",
  },
  {
    question: "What zip code is Trilogy Sunstone?",
    answer:
      `${COMMUNITY_NAME} is in Las Vegas zip code ${ZIP}, in the ${AREA_LABEL} / ${MASTER_PLAN} area off ${HIGHWAY_ACCESS}. Always confirm the property address on the listing you are considering.`,
  },
  {
    question: "How far is Trilogy Sunstone from the Las Vegas Strip?",
    answer:
      "Trilogy Sunstone is in northwest Las Vegas—roughly 20–25 miles from the central Las Vegas Strip depending on your route. Drive time varies with traffic and time of day; use your maps app for a live estimate when touring.",
  },
  {
    question: "What types of homes are available at Trilogy Sunstone?",
    answer:
      "Trilogy Sunstone offers Shea Homes new construction and resale homes: typically low-maintenance, single-story and accessible layouts, including Freedom Collection plans and Resort Collection duplex-style product where offered. Floor plans and availability change—see current Trilogy Sunstone homes for sale or ask us for a plan-specific overview.",
  },
  {
    question: "What are Trilogy Sunstone HOA fees?",
    answer:
      "Trilogy Sunstone HOA fees depend on phase and home type. They generally cover common areas, amenities, and often exterior or landscape maintenance. Ask for current HOA fee details when viewing a specific Trilogy Sunstone home for sale.",
  },
  {
    question: "What is the Cabochon Club at Trilogy Sunstone?",
    answer:
      `The ${CLUB_NAME} at ${SALES_OFFICE} is the resident lifestyle hub—resort-style gathering space, fitness and social programming, Cooper's Kitchen dining, and a central place to meet neighbors. Review the Cabochon Club page on this site or tour to confirm current hours and programming.`,
  },
  {
    question: "What amenities does Trilogy Sunstone offer?",
    answer:
      `${COMMUNITY_NAME} is built around an active lifestyle: the ${CLUB_NAME} with Cooper's Kitchen, resort-style pools, eight pickleball courts, fitness and wellness facilities, and outdoor gathering areas. Specific offerings and hours can be confirmed when you tour or contact us.`,
  },
  {
    question: "Where is Trilogy Sunstone located?",
    answer:
      `${COMMUNITY_NAME} sits in ${AREA_LABEL} within the ${MASTER_PLAN} master-planned area (zip ${ZIP}), accessed via ${HIGHWAY_ACCESS}. The sales center and ${CLUB_NAME} are at ${SALES_OFFICE}. Outdoor recreation toward Red Rock Canyon and Mount Charleston is a major draw for northwest Las Vegas 55+ buyers.`,
  },
  {
    question: "How many homes are in Trilogy Sunstone?",
    answer:
      `Trilogy Sunstone is planned for roughly 933 homes across ${HOME_COLLECTIONS.join(", ")} product lines. Build-out continues in phases—confirm which collections and lots are available when you tour.`,
  },
  {
    question: "How do I get to Trilogy Sunstone from US-95?",
    answer:
      `From US-95 northbound, take Kyle Canyon Road (Exit 96) toward the ${MASTER_PLAN} master plan. The ${CLUB_NAME} and sales office are at ${SALES_OFFICE}. Allow extra time during peak commute hours and confirm gate procedures with your agent before your first visit.`,
  },
  {
    question: "Where can I find Trilogy Sunstone Las Vegas reviews?",
    answer:
      "Trilogy Sunstone reviews and Trilogy Sunstone Las Vegas reviews are on Google, community sites, and resident testimonials. We can point you to reviews and share what buyers say about living at Trilogy Sunstone.",
  },
  {
    question: "Is Trilogy Sunstone Las Vegas for rent?",
    answer:
      "Trilogy Sunstone is primarily a for-sale community; most homes are owner-occupied. Occasionally Trilogy Sunstone Las Vegas for rent listings appear when owners lease their homes. Ask us about current rental availability in the community.",
  },
];

export default function TrilogySunstonePage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(communityFaq)} />
      <JsonLd data={trilogySunstoneBreadcrumbJsonLd()} />
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
                <Link
                  href="/neighborhoods"
                  className="text-[#1c5087] hover:text-[#003a70] font-medium"
                >
                  Neighborhoods
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-[#3d4544]" aria-current="page">
                Trilogy Sunstone
              </li>
            </ol>
          </div>
        </nav>
        <section className="hero-mesh relative flex flex-col items-center justify-center py-20 px-4 text-center">
          <h1 className="hero-title mb-4 text-center">
            Trilogy at Sunstone Real Estate
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-center text-white/90">
            {GEO_SUBHEAD} — Freedom &amp; Resort Collection homes, {CLUB_NAME} lifestyle, and
            Trilogy at Sunstone real estate off Kyle Canyon Exit 96.
          </p>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-[#3d4544] mb-6">Overview</h2>
              <p className="text-[#3d4544] leading-relaxed mb-4">
                {LOCAL_CONTEXT_PARAGRAPH}
              </p>
              <p className="text-[#3d4544] leading-relaxed mb-4">
                The community is planned for roughly 933 homes across Shea Homes collections,
                centered on the{" "}
                <Link
                  href="/amenities/cabochon-club"
                  className="text-[#1c5087] hover:text-[#003a70] font-medium"
                >
                  {CLUB_NAME}
                </Link>{" "}
                at {SALES_OFFICE}—with Cooper&apos;s Kitchen, eight pickleball courts, pools, and
                fitness programming for active adults arriving via Kyle Canyon Road (Exit 96).
              </p>
              <p className="text-[#3d4544] leading-relaxed">
                Whether you are relocating, downsizing, or looking for a dedicated 55+
                neighborhood, Trilogy Sunstone is a strong option in Southern Nevada&apos;s
                active adult market. Learn more{" "}
                <Link href="/about" className="text-[#1c5087] hover:text-[#003a70] font-medium">
                  about our community
                </Link>{" "}
                or the{" "}
                <Link href="/buyers-guide" className="text-[#1c5087] hover:text-[#003a70] font-medium">
                  home buying process
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[#eaf0f2]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-[#3d4544] mb-6">Amenities &amp; lifestyle</h2>
              <ul className="space-y-2 text-[#3d4544] list-disc list-inside">
                <li>
                  <Link
                    href="/amenities/cabochon-club"
                    className="text-[#1c5087] hover:text-[#003a70] font-medium"
                  >
                    Cabochon Club
                  </Link>{" "}
                  — resident clubhouse and lifestyle programming
                </li>
                <li>Eight pickleball courts, resort-style pools, and outdoor spaces (confirm on tour)</li>
                <li>Cooper&apos;s Kitchen at the {CLUB_NAME}</li>
                <li>Fitness and wellness facilities</li>
                <li>Shea Homes Freedom Collection (single-story plans) and Resort Collection (duplex-style options where offered)</li>
                <li>Low-maintenance homes and landscaping</li>
                <li>
                  {AREA_LABEL} location via {HIGHWAY_ACCESS}—outdoor recreation toward Red Rock
                  Canyon and Mount Charleston
                </li>
              </ul>
              <p className="text-[#3d4544] leading-relaxed mt-6">{LIFESTYLE_CONTEXT}</p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-[#3d4544] mb-4">Who it&apos;s for</h2>
              <p className="text-[#3d4544] mb-4">
                Trilogy Sunstone is for households with at least one person 55 or older who want
                a dedicated active adult community, new or like-new homes, and an engaged
                neighborhood without the upkeep of a large house or yard.
              </p>
              <h2 className="text-2xl font-bold text-[#3d4544] mb-4 mt-8">
                Trilogy Sunstone homes for sale
              </h2>
              <p className="text-[#3d4544]">
                Homes at Trilogy Sunstone are built with active adults in mind: single-level or
                accessible layouts, modern finishes, and manageable square footage. View{" "}
                <RealScoutSearchCta variant="inline" className="font-medium">
                  current Trilogy Sunstone inventory
                </RealScoutSearchCta>{" "}
                on our homepage (including Las Vegas for-sale homes); we also have
                Trilogy Sunstone by owner (FSBO) and agent-listed homes. For a Trilogy
                Sunstone Las Vegas price list by plan,{" "}
                <Link href="/contact" className="text-[#1c5087] hover:text-[#003a70] font-medium">
                  contact us
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[#eaf0f2]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-[#3d4544] mb-8">Community FAQ</h2>
              <p className="text-[#3d4544] mb-6">
                More on HOA fees, price lists, and buying at Trilogy Sunstone in our{" "}
                <Link href="/faq" className="text-[#1c5087] hover:text-[#003a70] font-medium">
                  FAQ
                </Link>{" "}
                and{" "}
                <Link href="/buyers-guide" className="text-[#1c5087] hover:text-[#003a70] font-medium">
                  buyer&apos;s guide
                </Link>
                .
              </p>
              <div className="space-y-6">
                {communityFaq.map((item) => (
                  <article key={item.question} className="border-b border-[#d9e0e2] pb-6 last:border-0">
                    <h3 className="text-xl font-semibold text-[#3d4544] mb-2">{item.question}</h3>
                    <p className="text-[#3d4544]">{item.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-[#3d4544] mb-4">Explore Trilogy Sunstone</h2>
              <div className="flex flex-wrap gap-4 justify-center">
                <RealScoutSearchCta variant="buttonPrimary" />
                <Link
                  href="/neighborhoods"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold border border-[#d9e0e2] text-[#3d4544] hover:bg-[#eaf0f2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1c5087] focus:ring-offset-2"
                >
                  All Neighborhoods
                </Link>
                <Link
                  href="/buyers-guide"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold border border-[#d9e0e2] text-[#3d4544] hover:bg-[#eaf0f2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1c5087] focus:ring-offset-2"
                >
                  Buyer&apos;s Guide
                </Link>
                <Link
                  href="/guides"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold border border-[#d9e0e2] text-[#3d4544] hover:bg-[#eaf0f2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1c5087] focus:ring-offset-2"
                >
                  Guides &amp; comparisons
                </Link>
                <Link
                  href="/amenities/cabochon-club"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold border border-[#d9e0e2] text-[#3d4544] hover:bg-[#eaf0f2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1c5087] focus:ring-offset-2"
                >
                  Cabochon Club
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold bg-[#1c5087] text-white hover:bg-[#003a70] transition-colors shadow focus:outline-none focus:ring-2 focus:ring-[#1c5087] focus:ring-offset-2"
                >
                  Contact Us
                </Link>
                <CalendlyPopupButton className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold border border-[#d9e0e2] bg-white text-[#3d4544] hover:bg-[#eaf0f2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1c5087] focus:ring-offset-2">
                  Schedule time with me
                </CalendlyPopupButton>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-20 bg-[#eaf0f2]">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-[#3d4544] mb-4 text-center">
                Schedule a 90-Minute Trilogy Sunstone Tour
              </h2>
              <p className="text-[#6b7373] mb-8 text-center">
                Book directly on our calendar to tour 2-3 homes in the community.
              </p>
              <CalendlyInlineWidget />
            </div>
          </div>
        </section>
      </main>
      </div>
      <StickyMobileCta />
    </>
  );
}
