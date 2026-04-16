"use client";

import { CalendlyPopupButton } from "@/components/calendly-popup-button";
import { RealScoutSearchCta } from "@/components/realscout-search-cta";
import { cn } from "@/lib/cn";

type StickyMobileCtaProps = {
  /** Extra bottom padding so fixed bar does not cover content */
  className?: string;
};

/**
 * Mobile-first sticky bar: inventory search + Calendly.
 */
export function StickyMobileCta({ className }: StickyMobileCtaProps) {
  return (
    <div
      className={cn(
        "fixed bottom-0 inset-x-0 z-50 flex gap-2 rounded-t-2xl border border-slate-200/80 border-b-0 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-12px_40px_-8px_rgba(15,23,42,0.18)] backdrop-blur-md md:hidden",
        className,
      )}
      role="region"
      aria-label="Search inventory and contact"
    >
      <RealScoutSearchCta variant="sticky" className="flex-1 min-w-0" />
      <CalendlyPopupButton className="inline-flex min-h-11 flex-1 min-w-0 items-center justify-center rounded-md bg-[#8bb63e] px-2 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#789e35] focus:outline-none focus:ring-2 focus:ring-[#8bb63e] focus:ring-offset-2">
        Schedule time
      </CalendlyPopupButton>
    </div>
  );
}
