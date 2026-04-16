import Link from "next/link";
import { RealScoutSearchCta } from "@/components/realscout-search-cta";
import { PHONE_DISPLAY, PHONE_E164, SITE_NAME, SITE_NAME_SHORT } from "@/lib/site-contact";

const homesIdx = SITE_NAME_SHORT.lastIndexOf(" Homes");
const beforeHomes =
  homesIdx > 0 ? SITE_NAME_SHORT.slice(0, homesIdx) : SITE_NAME_SHORT;

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/resources", label: "Resources" },
  { href: "/guides", label: "Guides" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/neighborhoods/trilogy-sunstone", label: "Trilogy Sunstone" },
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/buyers-guide", label: "Buyer's Guide" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d9e0e2]/80 bg-white/90 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-white/75">
      <nav
        className="container mx-auto px-4 py-3.5 flex flex-wrap items-center justify-between gap-4"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex flex-col group max-w-[min(100%,20rem)] sm:max-w-none">
          <span className="text-base sm:text-lg md:text-xl font-bold text-[#3d4544] leading-snug tracking-tight transition-colors group-hover:text-[#1c5087]">
            <span className="block sm:inline">{beforeHomes} </span>
            <span className="bg-gradient-to-r from-[#40738d] to-[#003a70] bg-clip-text text-transparent">
              Homes
            </span>
          </span>
          <span className="text-[11px] sm:text-xs font-medium text-[#6b7373] hidden sm:block">
            {SITE_NAME}
          </span>
        </Link>
        <ul className="flex flex-wrap items-center gap-1 sm:gap-2 md:gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[#6b7373] hover:text-[#1c5087] font-medium transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1c5087] focus-visible:ring-offset-2 rounded-lg px-2.5 py-1.5 hover:bg-[#eaf0f2]"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <RealScoutSearchCta variant="nav" className="h-9 px-3 sm:px-4" />
          </li>
          <li>
            <a
              href={`tel:${PHONE_E164}`}
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-[#8bb63e] to-[#789e35] text-white text-sm font-semibold shadow-md shadow-[#66872d]/35 h-9 px-4 transition-all hover:from-[#789e35] hover:to-[#66872d] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8bb63e] focus-visible:ring-offset-2"
            >
              Call {PHONE_DISPLAY}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
