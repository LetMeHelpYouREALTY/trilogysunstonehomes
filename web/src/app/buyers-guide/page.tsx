import type { Metadata } from "next";
import Link from "next/link";
import { CalendlyInlineWidget } from "@/components/calendly-inline-widget";
import { CalendlyPopupButton } from "@/components/calendly-popup-button";
import { JsonLd } from "@/components/json-ld";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { faqPageJsonLd } from "@/lib/schema";
import { REALSCOUT_SHARED_SEARCH_URL } from "@/lib/site-contact";

export const metadata: Metadata = {
  title: "Buy a Home in Trilogy Sunstone | Resale vs New | Floor Plans & Listings",
  description:
    "Buy a home in Trilogy Sunstone: resale vs new construction, Freedom & Resort Collection floor plans, single-story options, and how to search Trilogy Sunstone homes for sale in Las Vegas.",
  alternates: { canonical: "/buyers-guide" },
};

const faqItems = [
  {
    question: "How do I get pre-approved for a mortgage when buying at Trilogy Sunstone?",
    answer:
      "Contact a lender to get pre-approved before you shop. You will need income, asset, and credit documentation. Pre-approval shows sellers you are a serious buyer and clarifies your price range. Many buyers at 55+ communities use conventional or FHA loans, or cash.",
  },
  {
    question: "Are there age restrictions for buying at Trilogy Sunstone?",
    answer:
      "Yes. Trilogy Sunstone is a 55+ active adult community. At least one resident in the home must be 55 or older. Some communities also limit the share of residents under 19. We can confirm the exact rules for Trilogy Sunstone.",
  },
  {
    question: "How long does it take to buy a home at Trilogy Sunstone?",
    answer:
      "From offer to closing typically takes 30–45 days. Timeline depends on financing, inspections, and the seller. New construction may follow a different schedule. We can outline the steps and timeline for your situation.",
  },
  {
    question: "Should I get a home inspection for a Trilogy Sunstone home?",
    answer:
      "Yes. A professional inspection reveals the condition of the structure, systems, and major components. Even with new construction, an inspection can catch issues before closing. We recommend scheduling an inspection during your due diligence period.",
  },
  {
    question: "What price range can I expect at Trilogy Sunstone?",
    answer:
      "Prices vary by floor plan, lot, and market. Our homepage lists current Trilogy Sunstone listings with prices. Contact us for a personalized overview of available homes and recent sales in your target range.",
  },
];

export default function BuyersGuidePage() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqItems)} />
      <div className="pb-24 md:pb-0">
      <main className="min-h-screen flex flex-col">
        <section className="hero-mesh relative flex flex-col items-center justify-center py-20 px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            How to Buy a Home at Trilogy Sunstone
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-center text-white/90">
            A clear path from search to closing in Las Vegas&apos; premier 55+ community.
          </p>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <p className="text-slate-700 text-lg mb-10">
                Buying at{" "}
                <Link
                  href="/neighborhoods/trilogy-sunstone"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Trilogy Sunstone
                </Link>{" "}
                follows the same proven steps as any great home purchase—with the added
                benefit of a 55+ community designed for your lifestyle. Here is how it works.
              </p>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Resale vs new construction at Trilogy Sunstone
              </h2>
              <p className="text-slate-700 mb-6">
                <strong>Resale</strong> homes can offer quicker move-in timelines and established landscaping;
                <strong> new construction</strong> may offer builder warranties and personalization through
                Shea Homes (Freedom Collection single-story plans and Resort Collection duplex-style
                product where offered). Neither is automatically “better”—your timeline, budget, and
                floor plan needs should drive the decision. Browse{" "}
                <a
                  href={REALSCOUT_SHARED_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  current inventory
                </a>{" "}
                and we will help you compare net cost, HOA, and inspections side by side.
              </p>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Floor plans &amp; search tips</h2>
              <p className="text-slate-700 mb-6">
                Trilogy Sunstone listings span single-story homes and select duplex-style plans.
                Searching by price band (for example homes under $500K or roughly $600K–$800K) works
                best inside live search—inventory changes weekly. Tell us your must-haves (single-story,
                guest suite, low-maintenance yard) and we will align tours to real availability.
              </p>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Steps to Buy</h2>
              <ol className="space-y-6 list-decimal list-inside">
                <li>
                  <h3 className="text-xl font-semibold text-slate-900 inline">
                    Get pre-approved.
                  </h3>
                  <p className="text-slate-700 mt-1 ml-6">
                    Work with a lender to get pre-approved for a mortgage. This defines your
                    budget and shows sellers you are ready to buy.
                  </p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold text-slate-900 inline">Search and tour.</h3>
                  <p className="text-slate-700 mt-1 ml-6">
                    Browse{" "}
                    <a
                      href={REALSCOUT_SHARED_SEARCH_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      current Trilogy Sunstone listings
                    </a>{" "}
                    and schedule showings. We can help you narrow by price, floor plan, and
                    location within the community.
                  </p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold text-slate-900 inline">Make an offer.</h3>
                  <p className="text-slate-700 mt-1 ml-6">
                    Once you choose a home, we prepare and submit an offer. Terms may include
                    earnest money, contingencies (e.g. inspection, financing), and a closing
                    date.
                  </p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold text-slate-900 inline">
                    Due diligence and inspections.
                  </h3>
                  <p className="text-slate-700 mt-1 ml-6">
                    During the contingency period, complete a home inspection and any other
                    agreed checks. Address issues with the seller or adjust the deal as needed.
                  </p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold text-slate-900 inline">Close.</h3>
                  <p className="text-slate-700 mt-1 ml-6">
                    Finalize financing, complete the title process, and attend closing. You
                    receive the keys and become a Trilogy Sunstone homeowner.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Common questions</h2>
              <p className="text-slate-700 mb-6">
                More answers in our full{" "}
                <Link href="/faq" className="text-blue-600 hover:text-blue-700 font-medium">
                  Trilogy Sunstone FAQ
                </Link>
                .
              </p>
              <div className="space-y-8">
                {faqItems.map((item) => (
                  <article key={item.question} className="border-b border-slate-200 pb-6 last:border-0">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.question}</h3>
                    <p className="text-slate-700">{item.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to start?</h2>
              <p className="text-slate-700 mb-6">
                View{" "}
                <a
                  href={REALSCOUT_SHARED_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Trilogy Sunstone homes for sale
                </a>{" "}
                or{" "}
                <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                  contact us
                </Link>{" "}
                for personalized help.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href={REALSCOUT_SHARED_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  View Listings
                </a>
                <CalendlyPopupButton className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                  Schedule time with me
                </CalendlyPopupButton>
                <Link
                  href="/faq"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md font-semibold border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  More FAQ
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center">
                Schedule Your 2-3 Home Tour
              </h2>
              <p className="text-slate-700 mb-8 text-center">
                Reserve a 90-minute consultation and tour slot that fits your schedule.
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
