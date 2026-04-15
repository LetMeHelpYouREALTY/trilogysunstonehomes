import type { Metadata } from "next";
import Link from "next/link";
import { CalendlyInlineWidget } from "@/components/calendly-inline-widget";
import { CalendlyPopupButton } from "@/components/calendly-popup-button";
import { JsonLd } from "@/components/json-ld";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { faqPageJsonLd, trilogySunstoneBreadcrumbJsonLd } from "@/lib/schema";
import { REALSCOUT_SHARED_SEARCH_URL } from "@/lib/site-contact";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Trilogy Sunstone Community | Las Vegas 55+ Active Adult Homes",
  description:
    "Trilogy Sunstone Las Vegas: homes for sale, reviews, price list, HOA fees, for rent. 55+ active adult community. See listings and community info.",
  alternates: { canonical: "/neighborhoods/trilogy-sunstone" },
};

const communityFaq = [
  {
    question: "Is Trilogy Sunstone age-restricted?",
    answer:
      "Yes. Trilogy Sunstone is a 55+ active adult community. At least one household member must be 55 or older. This supports a lifestyle focused on active adults.",
  },
  {
    question: "What types of homes are available at Trilogy Sunstone?",
    answer:
      "Trilogy Sunstone offers new construction and resale homes designed for low-maintenance, single-level or accessible living. Floor plans and price ranges vary; check our Trilogy Sunstone homes for sale listings or contact us for a Trilogy Sunstone Las Vegas price list.",
  },
  {
    question: "What are Trilogy Sunstone HOA fees?",
    answer:
      "Trilogy Sunstone HOA fees depend on phase and home type. They generally cover common areas, amenities, and often exterior or landscape maintenance. Ask for current HOA fee details when viewing a specific Trilogy Sunstone home for sale.",
  },
  {
    question: "What amenities does Trilogy Sunstone offer?",
    answer:
      "The community is built around an active lifestyle: resort-style amenities typically include pools, fitness, social spaces, and outdoor gathering areas. Specific offerings can be confirmed when you tour or contact us.",
  },
  {
    question: "Where is Trilogy Sunstone located?",
    answer:
      "Trilogy Sunstone is in the Las Vegas area, Southern Nevada. It is part of the broader Trilogy brand of 55+ communities, with easy access to area shopping, healthcare, and entertainment.",
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            Trilogy Sunstone Community
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-center text-white/90">
            Las Vegas&apos; premier 55+ active adult community—new homes and a lifestyle built
            for you.
          </p>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-[#3d4544] mb-6">Overview</h2>
              <p className="text-[#3d4544] leading-relaxed mb-4">
                Trilogy Sunstone is an age-qualified 55+ community in the Las Vegas area,
                offering new and resale homes in a setting designed for active adults. Residents
                enjoy a low-maintenance lifestyle with access to community amenities and a
                built-in social environment.
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
                <li>Resort-style pool and outdoor spaces</li>
                <li>Fitness and wellness facilities</li>
                <li>Social and activity programming for residents</li>
                <li>Low-maintenance homes and landscaping</li>
                <li>Proximity to Las Vegas area shopping, healthcare, and entertainment</li>
              </ul>
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
                <a
                  href={REALSCOUT_SHARED_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1c5087] hover:text-[#003a70] font-medium"
                >
                  Trilogy Sunstone homes for sale
                </a>{" "}
                and Trilogy Sunstone Las Vegas for sale listings on our homepage; we also have
                Trilogy Sunstone by owner (FSBO) and agent-listed inventory. For a Trilogy
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
                <a
                  href={REALSCOUT_SHARED_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold bg-[#1c5087] text-white hover:bg-[#003a70] transition-colors shadow focus:outline-none focus:ring-2 focus:ring-[#1c5087] focus:ring-offset-2"
                >
                  View Listings
                </a>
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
