"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { RealScoutSearchCta } from "@/components/realscout-search-cta";
import { cn } from "@/lib/cn";
import { PHONE_DISPLAY, PHONE_E164, SITE_NAME_SHORT } from "@/lib/site-contact";

const homesIdx = SITE_NAME_SHORT.lastIndexOf(" Homes");
const beforeHomes =
  homesIdx > 0 ? SITE_NAME_SHORT.slice(0, homesIdx) : SITE_NAME_SHORT;

/** Primary links — always visible on desktop */
const primaryLinks = [
  { href: "/neighborhoods/trilogy-sunstone", label: "Community" },
  { href: "/buyers-guide", label: "Buyer's Guide" },
  { href: "/guides", label: "Guides" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

/** Secondary links — desktop dropdown + mobile menu */
const secondaryLinks = [
  { href: "/", label: "Home" },
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/neighborhoods", label: "Neighborhoods" },
] as const;

const navLinkClass =
  "rounded-md px-2.5 py-1.5 text-[13px] font-medium text-[#4e5655] transition-colors hover:bg-[#eaf0f2] hover:text-[#1c5087] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1c5087] focus-visible:ring-offset-2";

function IconPhone({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconMenu({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function IconClose({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function IconChevron({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    function onPointerDown(e: MouseEvent) {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    }
    if (moreOpen) {
      document.addEventListener("pointerdown", onPointerDown);
      return () => document.removeEventListener("pointerdown", onPointerDown);
    }
  }, [moreOpen]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setMoreOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const allMobileLinks = [...primaryLinks, ...secondaryLinks];

  return (
    <header className="sticky top-0 z-50 border-b border-[#d9e0e2]/90 bg-white/95 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-white/85">
      <nav
        className="container mx-auto flex h-14 items-center justify-between gap-3 px-4"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="group flex shrink-0 items-baseline gap-1.5 font-display text-[1.05rem] leading-none tracking-tight text-[#3d4544] sm:text-lg"
        >
          <span className="transition-colors group-hover:text-[#1c5087]">{beforeHomes}</span>
          <span className="bg-gradient-to-r from-[#40738d] to-[#003a70] bg-clip-text font-semibold text-transparent">
            Homes
          </span>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:gap-0.5">
          {primaryLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={navLinkClass}>
                {link.label}
              </Link>
            </li>
          ))}
          <li className="relative">
            <div ref={moreRef}>
            <button
              type="button"
              className={cn(navLinkClass, "inline-flex items-center gap-0.5")}
              aria-expanded={moreOpen}
              aria-haspopup="true"
              onClick={() => setMoreOpen((v) => !v)}
            >
              More
              <IconChevron className={cn("h-4 w-4 transition-transform", moreOpen && "rotate-180")} />
            </button>
            {moreOpen ? (
              <ul
                role="menu"
                className="absolute left-0 top-full z-50 mt-1 min-w-[11rem] rounded-lg border border-[#d9e0e2] bg-white py-1 shadow-lg"
              >
                {secondaryLinks.map((link) => (
                  <li key={link.href} role="none">
                    <Link
                      href={link.href}
                      role="menuitem"
                      className="block px-3 py-2 text-[13px] font-medium text-[#4e5655] hover:bg-[#eaf0f2] hover:text-[#1c5087]"
                      onClick={() => setMoreOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
            </div>
          </li>
        </ul>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <RealScoutSearchCta variant="navCompact" className="hidden sm:inline-flex" />
          <RealScoutSearchCta variant="navCompactIcon" className="sm:hidden" />
          <a
            href={`tel:${PHONE_E164}`}
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-br from-[#8bb63e] to-[#789e35] px-2.5 text-[13px] font-semibold text-white shadow-sm transition hover:from-[#789e35] hover:to-[#66872d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8bb63e] focus-visible:ring-offset-2 sm:px-3"
            aria-label={`Call ${PHONE_DISPLAY}`}
          >
            <IconPhone className="h-3.5 w-3.5 shrink-0" />
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#d9e0e2] text-[#3d4544] transition hover:bg-[#eaf0f2] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1c5087] focus-visible:ring-offset-2 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {mobileOpen ? (
        <div
          id="mobile-nav-panel"
          className="border-t border-[#d9e0e2]/90 bg-white lg:hidden"
        >
          <ul className="container mx-auto grid max-h-[min(70vh,24rem)] gap-0.5 overflow-y-auto px-4 py-3">
            {allMobileLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-[#3d4544] hover:bg-[#eaf0f2] hover:text-[#1c5087]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="border-t border-[#d9e0e2] pt-2 mt-1">
              <RealScoutSearchCta variant="navCompact" className="w-full justify-center" />
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
