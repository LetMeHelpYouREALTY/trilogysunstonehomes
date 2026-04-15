import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { faqPageJsonLd } from "@/lib/schema";
import { SITE_NAME_SHORT } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: `FAQ | ${SITE_NAME_SHORT}`,
  description:
    "FAQ: Trilogy Sunstone Las Vegas reviews, homes for sale, price list, by owner, for rent, HOA fees. Answers about the 55+ community and real estate.",
  alternates: { canonical: "/faq" },
};

const faqItems = [
  {
    question: "What is Trilogy Sunstone?",
    answer:
      "Trilogy Sunstone is a 55+ active adult community in the Las Vegas area. It offers new homes and amenities designed for an active, engaged lifestyle.",
  },
  {
    question: "Who can buy a home in Trilogy Sunstone?",
    answer:
      "Trilogy Sunstone is an age-qualified 55+ community. At least one resident must be 55 or older. Specific rules may apply—we can clarify for your situation.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We focus on Trilogy Sunstone and the greater Las Vegas and Henderson area, including Summerlin, Green Valley, and other Southern Nevada communities.",
  },
  {
    question: "How do I see Trilogy Sunstone homes for sale?",
    answer:
      "Our homepage lists Trilogy Sunstone Las Vegas homes for sale. You can browse current listings, request a Trilogy Sunstone Las Vegas price list, or contact us for a personalized search and showings.",
  },
  {
    question: "Are there Trilogy Sunstone homes for sale by owner?",
    answer:
      "Some Trilogy Sunstone listings are for sale by owner (FSBO). Our site and MLS include both agent-listed and by-owner homes. Contact us to see what is available and how we can help with any purchase.",
  },
  {
    question: "What are Trilogy Sunstone HOA fees?",
    answer:
      "Trilogy Sunstone HOA fees vary by phase and home type. They typically cover common-area maintenance, amenities, and sometimes landscape. For current HOA fee details for a specific home or phase, contact us or review the listing and HOA documents.",
  },
  {
    question: "Are there Trilogy Sunstone Las Vegas homes for rent?",
    answer:
      "Some owners at Trilogy Sunstone offer their homes for rent. Rental availability is limited in 55+ communities. We can help you search Trilogy Sunstone Las Vegas for rent listings or refer you to rental resources in the area.",
  },
  {
    question:
      "Where can I find Trilogy Sunstone Las Vegas reviews or Trilogy Sunstone reviews?",
    answer:
      "Trilogy Sunstone reviews and Trilogy Sunstone Las Vegas reviews appear on Google, community forums, and resident testimonials. We can share what buyers and residents say about the community and connect you with current residents if helpful.",
  },
  {
    question: "How do I get a Trilogy Sunstone Las Vegas price list?",
    answer:
      "View our homepage for current Trilogy Sunstone homes for sale and prices, or contact us for a tailored Trilogy Sunstone Las Vegas price list by floor plan or phase. Prices vary by plan and market conditions.",
  },
  {
    question: "How can I get in touch?",
    answer:
      "Call us or use the contact page. We're happy to answer questions about Trilogy Sunstone, current inventory, and the buying process.",
  },
];

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqItems)} />
      <div className="pb-24 md:pb-0">
      <main className="min-h-screen flex flex-col">
        <section className="hero-mesh relative flex flex-col items-center justify-center py-20 px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-center text-white/90">
            Common questions about{" "}
            <Link
              href="/neighborhoods/trilogy-sunstone"
              className="text-white font-semibold underline underline-offset-2 hover:no-underline"
            >
              Trilogy Sunstone
            </Link>{" "}
            and buying in the area.
          </p>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-8">
              {faqItems.map((item) => (
                <article key={item.question} className="border-b border-slate-200 pb-6 last:border-0">
                  <h2 className="text-xl font-semibold text-slate-900 mb-2">{item.question}</h2>
                  <p className="text-slate-700">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Still have questions?</h2>
              <p className="text-slate-700 mb-6">
                Browse{" "}
                <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
                  Trilogy Sunstone homes for sale
                </Link>
                , read our{" "}
                <Link href="/buyers-guide" className="text-blue-600 hover:text-blue-700 font-medium">
                  buyer&apos;s guide
                </Link>
                , or explore the{" "}
                <Link
                  href="/neighborhoods/trilogy-sunstone"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Trilogy Sunstone community
                </Link>
                .
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      </div>
      <StickyMobileCta />
    </>
  );
}
