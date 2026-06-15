import type { Metadata } from "next";
import Link from "next/link";
import { CalendlyPopupButton } from "@/components/calendly-popup-button";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { RealScoutSearchCta } from "@/components/realscout-search-cta";
import {
  COMMUNITY_NAME,
  GEO_SUBHEAD,
  LOCAL_CONTEXT_PARAGRAPH,
  REALTOR_POSITIONING,
  ZIP,
} from "@/lib/hyperlocal";
import { contactRealEstateAgentJsonLd } from "@/lib/schema";
import { pageSeo } from "@/lib/seo-metadata";
import { AGENT_LICENSE_LINE } from "@/lib/site-contact";

export const metadata: Metadata = {
  ...pageSeo({
    title: "Dr. Jan Duffy — Trilogy Sunstone REALTOR® | BHHS Nevada Properties",
    description: `Dr. Jan Duffy is your Trilogy Sunstone REALTOR® in northwest Las Vegas (${ZIP})—buyer and seller representation, Shea Homes new construction guidance, resale tours, and first-visit agent registration.`,
    path: "/about",
  }),
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={contactRealEstateAgentJsonLd()} />
      <main className="min-h-screen flex flex-col">
      <PageHero image="about">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/95">
          {GEO_SUBHEAD}
        </p>
        <h1 className="hero-title mb-4 text-center">
          Dr. Jan Duffy — Trilogy Sunstone REALTOR®
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-center text-white/90">
          Buyer and seller representation in {COMMUNITY_NAME} ({ZIP})—Shea Homes new
          construction, resale inventory, and community tours in northwest Las Vegas.
        </p>
      </PageHero>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-[#6b7373] mb-8 border-b border-[#d9e0e2] pb-6">{AGENT_LICENSE_LINE}</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#3d4544] mb-6">
              Serving zip {ZIP}
            </h2>
            <p className="text-[#3d4544] leading-relaxed mb-4">{REALTOR_POSITIONING}</p>
            <p className="text-[#3d4544] leading-relaxed mb-8">{LOCAL_CONTEXT_PARAGRAPH}</p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#3d4544] mb-6">Our Community</h2>
            <p className="text-[#3d4544] leading-relaxed mb-4">
              <Link
                href="/neighborhoods/trilogy-sunstone"
                className="text-[#1c5087] hover:text-[#003a70] font-medium"
              >
                Trilogy Sunstone
              </Link>{" "}
              offers an active adult lifestyle in one of Las Vegas&apos; most sought-after
              areas. Residents enjoy a close-knit community, thoughtfully designed new homes,
              and amenities built for an engaged, healthy life.
            </p>
            <p className="text-[#3d4544] leading-relaxed">
              Whether you&apos;re downsizing, relocating, or looking for your next chapter,
              we&apos;re here to help you{" "}
              <RealScoutSearchCta variant="inline" className="font-medium">
                find the right home
              </RealScoutSearchCta>{" "}
              and navigate the Trilogy Sunstone market with our{" "}
              <Link href="/buyers-guide" className="text-[#1c5087] hover:text-[#003a70] font-medium">
                buyer&apos;s guide
              </Link>{" "}
              and personalized support.
            </p>
            <p className="text-[#3d4544] leading-relaxed mt-4">
              For Shea Homes new construction, Dr. Jan Duffy helps you navigate floor plans,
              incentives, and the first-visit agent registration process at the sales center.
              For resale sellers, she provides pricing context, prep guidance, and marketing
              aligned with northwest Las Vegas 55+ demand.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#eaf0f2]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#3d4544] mb-8">
              Why Trilogy Sunstone
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <li className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-semibold text-[#1c5087] mb-2">55+ Active Lifestyle</h3>
                <p className="text-[#6b7373] text-sm">
                  Community designed for active adults with amenities and events that support
                  your lifestyle.
                </p>
              </li>
              <li className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-semibold text-[#1c5087] mb-2">New Construction</h3>
                <p className="text-[#6b7373] text-sm">
                  Discover{" "}
                  <RealScoutSearchCta variant="inline" className="font-medium">
                    new homes
                  </RealScoutSearchCta>{" "}
                  built for comfort, accessibility, and modern living.
                </p>
              </li>
              <li className="bg-white rounded-lg p-6 shadow">
                <h3 className="font-semibold text-[#1c5087] mb-2">Las Vegas Location</h3>
                <p className="text-[#6b7373] text-sm">
                  Enjoy Southern Nevada&apos;s climate, entertainment, and healthcare while
                  living in a dedicated community.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#3d4544] mb-4">
              Ready to Learn More?
            </h2>
            <p className="text-lg text-[#3d4544] mb-6">
              Explore{" "}
              <RealScoutSearchCta variant="inline" className="font-medium">
                Trilogy Sunstone inventory
              </RealScoutSearchCta>
              , read our{" "}
              <Link href="/faq" className="text-[#1c5087] hover:text-[#003a70] font-medium">
                FAQ
              </Link>
              , or get in touch for personalized help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <RealScoutSearchCta variant="buttonPrimary" />
              <Link
                href="/neighborhoods/trilogy-sunstone"
                className="inline-flex items-center justify-center border border-[#d9e0e2] bg-white text-[#3d4544] hover:bg-[#eaf0f2] font-semibold px-6 py-3 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#1c5087] focus:ring-offset-2"
              >
                Community Details
              </Link>
              <CalendlyPopupButton className="inline-flex items-center justify-center border border-[#d9e0e2] bg-white text-[#3d4544] hover:bg-[#eaf0f2] font-semibold px-6 py-3 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#1c5087] focus:ring-offset-2">
                Schedule time with me
              </CalendlyPopupButton>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
