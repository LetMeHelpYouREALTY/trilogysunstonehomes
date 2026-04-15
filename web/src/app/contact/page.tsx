import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { contactRealEstateAgentJsonLd } from "@/lib/schema";
import {
  ADDRESS_LINE,
  MAPS_SEARCH_URL,
  PHONE_E164,
  SITE_NAME_SHORT,
} from "@/lib/site-contact";

export const metadata: Metadata = {
  title: `Contact | ${SITE_NAME_SHORT}`,
  description:
    "Get in touch about homes and real estate at Trilogy Sunstone, Las Vegas' premier 55+ active lifestyle community. We're here to help.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactRealEstateAgentJsonLd()} />
      <div className="pb-24 md:pb-0">
      <main className="min-h-screen flex flex-col">
        <section className="hero-mesh relative flex flex-col items-center justify-center py-20 px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-center text-white/90">
            Questions about Trilogy Sunstone homes? We&apos;re here to help.
          </p>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-[#3d4544] mb-6">Get in Touch</h2>
              <div className="space-y-6 text-[#3d4544]">
                <p className="text-lg">
                  Reach out for{" "}
                  <Link href="/" className="text-[#1c5087] hover:text-[#003a70] font-medium">
                    Trilogy Sunstone homes for sale
                  </Link>
                  ,{" "}
                  <Link
                    href="/neighborhoods/trilogy-sunstone"
                    className="text-[#1c5087] hover:text-[#003a70] font-medium"
                  >
                    community information
                  </Link>
                  , or to schedule a visit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${PHONE_E164}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold bg-[#1c5087] text-white hover:bg-[#003a70] transition-colors shadow focus:outline-none focus:ring-2 focus:ring-[#1c5087] focus:ring-offset-2"
                  >
                    Call (702) 500-1942
                  </a>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold border border-[#d9e0e2] text-[#3d4544] hover:bg-[#eaf0f2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1c5087] focus:ring-offset-2"
                  >
                    View Listings
                  </Link>
                </div>
              </div>
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
