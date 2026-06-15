import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import Link from "next/link";
import { CalendlyPopupButton } from "@/components/calendly-popup-button";
import { COMMUNITY_NAME, ZIP } from "@/lib/hyperlocal";
import { pageSeo } from "@/lib/seo-metadata";
import { PHONE_DISPLAY, PHONE_E164, SITE_NAME_SHORT } from "@/lib/site-contact";

export const metadata: Metadata = {
  ...pageSeo({
    title: `Accessibility Statement | ${SITE_NAME_SHORT}`,
    description:
      `Accessibility statement for ${COMMUNITY_NAME} (${ZIP}) Homes by Dr. Jan Duffy—support options, contact paths, and our ongoing commitment to an inclusive northwest Las Vegas real estate website.`,
    path: "/accessibility-statement",
  }),
};

export default function AccessibilityStatementPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <PageHero image="accessibility">
        <h1 className="hero-title mb-4">Accessibility Statement</h1>
        <p className="text-lg md:text-xl max-w-3xl text-center text-white/90">
          We are committed to making this website accessible and usable for all visitors.
        </p>
      </PageHero>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <article>
            <h2 className="text-2xl font-bold text-[#3d4544] mb-3">Our commitment</h2>
            <p className="text-[#3d4544] leading-relaxed">
              We strive to provide a website experience that works across assistive technologies,
              keyboard navigation, and a broad range of devices and browsers.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-[#3d4544] mb-3">Continuous improvement</h2>
            <p className="text-[#3d4544] leading-relaxed">
              Accessibility is an ongoing process. We regularly review content, navigation,
              headings, links, and contrast to improve usability and reduce friction.
            </p>
          </article>

          <article>
            <h2 className="text-2xl font-bold text-[#3d4544] mb-3">Need assistance?</h2>
            <p className="text-[#3d4544] leading-relaxed mb-4">
              If you encounter accessibility barriers, contact us so we can support your request
              and improve your experience.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE_E164}`}
                className="inline-flex items-center justify-center rounded-md bg-[#1c5087] text-white font-semibold px-5 py-3 hover:bg-[#003a70] transition-colors"
              >
                Call {PHONE_DISPLAY}
              </a>
              <CalendlyPopupButton className="inline-flex items-center justify-center rounded-md bg-[#8bb63e] text-white font-semibold px-5 py-3 hover:bg-[#789e35] transition-colors">
                Schedule support call
              </CalendlyPopupButton>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-[#d9e0e2] bg-white text-[#3d4544] font-semibold px-5 py-3 hover:bg-[#f7fafb] transition-colors"
              >
                Contact page
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
