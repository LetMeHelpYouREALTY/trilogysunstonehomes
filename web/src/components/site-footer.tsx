import Link from "next/link";
import {
  ADDRESS_LINE,
  AGENT_LICENSE_LINE,
  BROKERAGE_LEGAL_LINE,
  MAPS_SEARCH_URL,
  PHONE_DISPLAY,
  PHONE_E164,
  REALSCOUT_SHARED_SEARCH_URL,
  SITE_NAME,
  SITE_NAME_SHORT,
} from "@/lib/site-contact";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/resources", label: "Resources" },
  { href: "/guides", label: "Guides" },
  { href: "/blog", label: "Blog" },
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/about", label: "About" },
  { href: "/buyers-guide", label: "Buyer's Guide" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

const services = [
  { href: "/buyers-guide", label: "Home Buying" },
  { href: REALSCOUT_SHARED_SEARCH_URL, label: "View Listings" },
  { href: "/neighborhoods/trilogy-sunstone", label: "Trilogy Sunstone Community" },
  { href: "/contact", label: "Contact" },
] as const;

const guidesAndComparisons = [
  { href: "/guides", label: "Guides hub" },
  { href: "/guides/northwest-las-vegas-55-plus-homes", label: "Northwest Las Vegas 55+" },
  {
    href: "/guides/moving-from-california-to-las-vegas-55-plus",
    label: "California to Las Vegas 55+",
  },
  {
    href: "/guides/best-55-plus-communities-las-vegas",
    label: "Best 55+ communities overview",
  },
  { href: "/amenities/cabochon-club", label: "Cabochon Club" },
  {
    href: "/compare/sun-city-summerlin-vs-trilogy-sunstone",
    label: "Sun City Summerlin vs Trilogy",
  },
  {
    href: "/compare/del-webb-north-ranch-vs-trilogy-sunstone",
    label: "Del Webb North Ranch vs Trilogy",
  },
  {
    href: "/compare/regency-at-summerlin-vs-trilogy-sunstone",
    label: "Regency at Summerlin vs Trilogy",
  },
] as const;

export function SiteFooter() {
  return (
    <footer
      className="relative mt-auto border-t border-[#40738d]/35 bg-gradient-to-b from-[#003a70] via-[#1c5087] to-[#003a70] text-white"
      role="contentinfo"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d9e0e2]/55 to-transparent"
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <h3 className="font-bold text-xl mb-4">
              <Link href="/" className="text-white hover:text-[#d9e0e2] transition-colors">
                {SITE_NAME_SHORT}
              </Link>
            </h3>
            <p className="text-[#b7bec0] text-xs mb-4">{SITE_NAME}</p>
            <p className="text-[#eaf0f2] mb-4 text-sm">
              Las Vegas 55+ active adult community. Your trusted partner for Trilogy
              Sunstone homes for sale and community information. Backed by a legacy of
              trust and integrity.
            </p>
          </div>

          <nav aria-label="Quick links">
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#eaf0f2] hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[#eaf0f2] hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Real estate services">
            <h3 className="font-bold text-lg mb-4">Real Estate Services</h3>
            <ul className="space-y-2">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#eaf0f2] hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#d9e0e2] shrink-0 mt-0.5" aria-hidden="true">
                  📍
                </span>
                <a
                  href={MAPS_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#eaf0f2] hover:text-white transition-colors text-sm"
                >
                  {ADDRESS_LINE}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#d9e0e2] shrink-0" aria-hidden="true">
                  📞
                </span>
                <a
                  href={`tel:${PHONE_E164}`}
                  className="text-[#eaf0f2] hover:text-white transition-colors text-sm"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex flex-wrap gap-2 mt-2">
                <a
                  href={`tel:${PHONE_E164}`}
                  className="inline-flex items-center justify-center bg-[#40738d] hover:bg-[#205d9e] text-white text-sm font-medium rounded-md h-9 px-4 transition-colors"
                >
                  Call
                </a>
                <a
                  href={MAPS_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-[#6b7373] text-[#eaf0f2] hover:bg-[#30566a] hover:text-white text-sm font-medium rounded-md h-9 px-4 transition-colors"
                >
                  Directions
                </a>
                <a
                  href={MAPS_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center border border-[#6b7373] text-[#eaf0f2] hover:bg-[#30566a] hover:text-white text-sm font-medium rounded-md h-9 px-4 transition-colors"
                >
                  View Google Reviews
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#eaf0f2] hover:text-white transition-colors text-sm"
                >
                  Schedule a call or send a message →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <nav
          aria-label="Guides and community comparisons"
          className="border-t border-[#40738d]/50 mt-8 pt-8"
        >
          <h3 className="font-bold text-lg mb-4">Guides &amp; comparisons</h3>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {guidesAndComparisons.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#eaf0f2] hover:text-white transition-colors underline-offset-2 hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-[#40738d] mt-8 pt-8 space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#d9e0e2] text-sm text-center md:text-left">
              {BROKERAGE_LEGAL_LINE}
            </p>
            <nav
              aria-label="Footer legal and site links"
              className="flex flex-wrap justify-center gap-4 text-sm"
            >
              <Link href="/faq" className="text-[#d9e0e2] hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="/accessibility-statement" className="text-[#d9e0e2] hover:text-white transition-colors">
                Accessibility
              </Link>
              <Link href="/sitemap.xml" className="text-[#d9e0e2] hover:text-white transition-colors">
                Sitemap
              </Link>
            </nav>
          </div>
          <p className="text-[#b7bec0] text-xs text-center">{AGENT_LICENSE_LINE}</p>
          <p className="text-[#b7bec0] text-xs text-center max-w-2xl mx-auto">
            When you work with a Berkshire Hathaway HomeServices agent, you&apos;re backed
            by a name synonymous with trust, ethical standards, and financial strength.
          </p>
        </div>
      </div>
    </footer>
  );
}
