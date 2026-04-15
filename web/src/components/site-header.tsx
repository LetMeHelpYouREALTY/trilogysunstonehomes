import Link from "next/link";
import { PHONE_DISPLAY, PHONE_E164, SITE_NAME, SITE_NAME_SHORT } from "@/lib/site-contact";

const homesIdx = SITE_NAME_SHORT.lastIndexOf(" Homes");
const beforeHomes =
  homesIdx > 0 ? SITE_NAME_SHORT.slice(0, homesIdx) : SITE_NAME_SHORT;

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/neighborhoods/trilogy-sunstone", label: "Trilogy Sunstone" },
  { href: "/neighborhoods", label: "Neighborhoods" },
  { href: "/buyers-guide", label: "Buyer's Guide" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-white/70">
      <nav
        className="container mx-auto px-4 py-3.5 flex flex-wrap items-center justify-between gap-4"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex flex-col group max-w-[min(100%,20rem)] sm:max-w-none">
          <span className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-snug tracking-tight transition-colors group-hover:text-blue-800">
            <span className="block sm:inline">{beforeHomes} </span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Homes
            </span>
          </span>
          <span className="text-[11px] sm:text-xs font-medium text-slate-600 hidden sm:block">
            {SITE_NAME}
          </span>
        </Link>
        <ul className="flex flex-wrap items-center gap-1 sm:gap-2 md:gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-slate-600 hover:text-blue-700 font-medium transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-lg px-2.5 py-1.5 hover:bg-slate-50"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={`tel:${PHONE_E164}`}
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 text-white text-sm font-semibold shadow-md shadow-blue-900/25 h-9 px-4 transition-all hover:from-blue-500 hover:to-blue-700 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Call {PHONE_DISPLAY}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
