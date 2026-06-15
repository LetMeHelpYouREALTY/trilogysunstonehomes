import type { Metadata } from "next";
import Link from "next/link";
import { CalendlyInlineWidget } from "@/components/calendly-inline-widget";
import { CalendlyPopupButton } from "@/components/calendly-popup-button";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { RealScoutSearchCta } from "@/components/realscout-search-cta";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import {
  AREA_LABEL,
  COMMUNITY_NAME,
  LOCAL_CONTEXT_PARAGRAPH,
  REALTOR_POSITIONING,
  ZIP,
} from "@/lib/hyperlocal";
import { contactRealEstateAgentJsonLd } from "@/lib/schema";
import { pageSeo } from "@/lib/seo-metadata";
import {
  ADDRESS_LINE,
  AGENT_LICENSE_LINE,
  CONTACT_SELLING_SECTION_ID,
  MAPS_SEARCH_URL,
  PHONE_DISPLAY,
  SITE_NAME_SHORT,
} from "@/lib/site-contact";

export const metadata: Metadata = {
  ...pageSeo({
    title: "Contact Dr. Jan Duffy | Trilogy Sunstone Specialist | BHHS Nevada",
    description: `Contact Dr. Jan Duffy for Trilogy Sunstone homes for sale or selling in ${AREA_LABEL} (${ZIP}). Call ${PHONE_DISPLAY}. Buyer and seller representation for the ${COMMUNITY_NAME} 55+ community.`,
    path: "/contact",
  }),
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactRealEstateAgentJsonLd()} />
      <div className="pb-24 md:pb-0">
      <main className="min-h-screen flex flex-col">
        <PageHero image="contact">
          <h1 className="hero-title mb-4 text-center">
            Contact Dr. Jan Duffy
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-center text-white/90">
            Trilogy Sunstone specialist · Berkshire Hathaway HomeServices Nevada Properties · Call{" "}
            {PHONE_DISPLAY}
          </p>
        </PageHero>

        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-[#3d4544] mb-6">Get in Touch</h2>
              <p className="text-sm text-[#6b7373] mb-4">{AGENT_LICENSE_LINE}</p>
              <div className="space-y-6 text-[#3d4544]">
                <p className="text-lg">
                  Reach out for{" "}
                  <RealScoutSearchCta variant="inline" className="font-medium">
                    current Trilogy Sunstone inventory
                  </RealScoutSearchCta>
                  ,{" "}
                  <Link
                    href="/neighborhoods/trilogy-sunstone"
                    className="text-[#1c5087] hover:text-[#003a70] font-medium"
                  >
                    community information
                  </Link>
                  , resale vs new construction guidance, or to schedule a visit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <CalendlyPopupButton className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold bg-[#789e35] text-white hover:bg-[#66872d] transition-colors shadow focus:outline-none focus:ring-2 focus:ring-[#8bb63e] focus:ring-offset-2">
                    Schedule time with me
                  </CalendlyPopupButton>
                  <RealScoutSearchCta variant="buttonPrimary" className="w-full sm:w-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[#eaf0f2]">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-[#3d4544] mb-4">
                Trilogy Sunstone service area — {ZIP}
              </h2>
              <p className="text-[#3d4544] leading-relaxed mb-4">{REALTOR_POSITIONING}</p>
              <p className="text-[#3d4544] leading-relaxed mb-4">{LOCAL_CONTEXT_PARAGRAPH}</p>
              <p className="text-[#6b7373] text-sm leading-relaxed">
                Whether you are touring Shea Homes new construction, comparing resale on Lapis
                Ln., or preparing to list, Dr. Jan Duffy provides buyer and seller
                representation focused on {COMMUNITY_NAME} and the northwest Las Vegas 55+
                market—not a generic Las Vegas search.
              </p>
            </div>
          </div>
        </section>

        <section
          id={CONTACT_SELLING_SECTION_ID}
          className="scroll-mt-24 border-y border-[#d9e0e2] bg-[#f7fafb] py-14"
        >
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-3 text-2xl font-bold text-[#3d4544]">
                Selling your Trilogy Sunstone home?
              </h2>
              <p className="mb-2 text-sm text-[#6b7373]">{AGENT_LICENSE_LINE}</p>
              <p className="mb-6 text-[#3d4544]">
                Get pricing context, prep guidance, and a marketing plan aligned with northwest Las Vegas
                55+ demand—not a one-size-fits-all template.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <CalendlyPopupButton className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#1c5087] px-6 py-3 font-semibold text-white shadow transition-colors hover:bg-[#003a70] focus:outline-none focus:ring-2 focus:ring-[#1c5087] focus:ring-offset-2">
                  Talk about selling
                </CalendlyPopupButton>
                <Link
                  href="/faq"
                  className="inline-flex min-h-11 items-center justify-center text-center text-sm font-semibold text-[#1c5087] underline decoration-[#1c5087]/35 underline-offset-2 transition hover:text-[#003a70]"
                >
                  Seller questions — FAQ
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-[#3d4544] mb-4 text-center">
                Book a 15-Minute Conversation
              </h2>
              <p className="text-[#6b7373] mb-8 text-center">
                Choose a date and time to connect directly with Dr. Jan Duffy.
              </p>
              <CalendlyInlineWidget />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-[#eaf0f2]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-[#3d4544] mb-4">
                {SITE_NAME_SHORT}
              </h2>
              <address className="text-[#3d4544] not-italic">
                <p>{ADDRESS_LINE}</p>
                <p className="mt-2">
                  <a
                    href={MAPS_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1c5087] hover:text-[#003a70] font-medium"
                  >
                    Get directions
                  </a>
                </p>
              </address>
              <p className="text-[#6b7373] mt-2">55+ active lifestyle community</p>
            </div>
          </div>
        </section>
      </main>
      </div>
      <StickyMobileCta />
    </>
  );
}
