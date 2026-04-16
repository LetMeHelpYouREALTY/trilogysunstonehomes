import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { REALSCOUT_SHARED_SEARCH_URL } from "@/lib/site-contact";

const externalProps = {
  target: "_blank" as const,
  rel: "noopener noreferrer" as const,
};

function IconHomeSearch({ className }: { className?: string }) {
  return (
    <svg
      className={cn("shrink-0", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5z" />
      <path d="M16 11h4M18 9v4" />
    </svg>
  );
}

function IconArrowUpRight({ className }: { className?: string }) {
  return (
    <svg className={cn("shrink-0", className)} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M5.22 14.78a.75.75 0 001.06 0L15 6.06V10a.75.75 0 001.5 0V4.25A.75.75 0 0015.75 3.5H10a.75.75 0 000 1.5h3.94L5.22 13.72a.75.75 0 000 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const aria =
  "Open Trilogy Sunstone home search on RealScout — live shared search opens in a new tab";

export type RealScoutSearchCtaVariant =
  | "nav"
  | "sticky"
  | "hero"
  | "buttonPrimary"
  | "buttonSecondary"
  | "footerCard"
  | "footerInline"
  | "inline";

type RealScoutSearchCtaProps = {
  variant: RealScoutSearchCtaVariant;
  className?: string;
  /** Used only with `variant="inline"` for sentence links */
  children?: ReactNode;
};

export function RealScoutSearchCta({ variant, className, children }: RealScoutSearchCtaProps) {
  if (variant === "inline") {
    return (
      <a
        href={REALSCOUT_SHARED_SEARCH_URL}
        {...externalProps}
        className={cn(
          "group inline-flex items-center gap-1 font-semibold text-[#1c5087] underline decoration-[#1c5087]/35 underline-offset-2 transition hover:text-[#003a70] hover:decoration-[#003a70]",
          className,
        )}
        aria-label={aria}
      >
        <span>{children}</span>
        <IconArrowUpRight className="h-3.5 w-3.5 opacity-70 transition group-hover:opacity-100" />
      </a>
    );
  }

  const innerByVariant: Record<Exclude<RealScoutSearchCtaVariant, "inline">, ReactNode> = {
    nav: (
      <>
        <IconHomeSearch className="h-4 w-4" />
        <span className="hidden min-[400px]:inline">Trilogy listings</span>
        <span className="min-[400px]:hidden">Listings</span>
      </>
    ),
    sticky: (
      <>
        <IconHomeSearch className="h-5 w-5 opacity-95" />
        <span className="flex flex-col items-center leading-tight">
          <span className="text-[13px] font-bold tracking-tight">Trilogy Sunstone</span>
          <span className="text-[11px] font-medium text-white/85">Search homes</span>
        </span>
      </>
    ),
    hero: (
      <>
        <IconHomeSearch className="h-6 w-6 sm:h-7 sm:w-7" />
        <span className="flex flex-col items-start text-left sm:items-center sm:text-center">
          <span className="text-base sm:text-lg font-bold tracking-tight">Browse Trilogy listings</span>
          <span className="text-xs sm:text-sm font-medium text-white/85">
            Live search · RealScout MLS feed
          </span>
        </span>
        <IconArrowUpRight className="ml-auto h-5 w-5 opacity-80 sm:ml-0" />
      </>
    ),
    buttonPrimary: (
      <>
        <IconHomeSearch className="h-5 w-5" />
        <span>View Trilogy Sunstone listings</span>
        <IconArrowUpRight className="h-4 w-4 opacity-80" />
      </>
    ),
    buttonSecondary: (
      <>
        <IconHomeSearch className="h-4 w-4" />
        <span>Search homes</span>
      </>
    ),
    footerCard: (
      <>
        <IconHomeSearch className="h-6 w-6 text-[#eaf0f2]" />
        <span className="flex flex-col gap-0.5 text-left">
          <span className="text-sm font-bold text-white">Trilogy Sunstone listings</span>
          <span className="text-xs text-[#b7bec0]">Opens RealScout home search</span>
        </span>
        <IconArrowUpRight className="ml-auto h-5 w-5 text-[#eaf0f2]" />
      </>
    ),
    footerInline: (
      <>
        <IconHomeSearch className="h-4 w-4 text-[#eaf0f2]" />
        <span>View Trilogy Sunstone listings</span>
      </>
    ),
  };

  const inner = innerByVariant[variant];

  const styles: Record<Exclude<RealScoutSearchCtaVariant, "inline">, string> = {
    nav: cn(
      "inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-[#003a70] to-[#1c5087] px-3 py-2 text-sm font-semibold text-white shadow-md shadow-[#003a70]/30 ring-1 ring-white/15",
      "transition hover:brightness-110 hover:ring-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1c5087]",
    ),
    sticky: cn(
      "inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#003a70] via-[#1c5087] to-[#205d9e] px-2 py-2.5 text-white shadow-inner ring-1 ring-white/20",
      "transition active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2",
    ),
    hero: cn(
      "inline-flex w-full max-w-md items-center gap-3 rounded-2xl border border-white/25 bg-gradient-to-br from-white/15 to-white/5 px-5 py-4 text-white shadow-lg shadow-black/20 backdrop-blur-md ring-1 ring-white/10",
      "transition hover:from-white/20 hover:to-white/10 hover:ring-white/20 sm:max-w-none sm:flex-1 sm:justify-center sm:px-6",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
    ),
    buttonPrimary: cn(
      "inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#003a70] to-[#1c5087] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#003a70]/25 ring-1 ring-white/10",
      "transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1c5087] focus-visible:ring-offset-2",
    ),
    buttonSecondary: cn(
      "inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#1c5087]/25 bg-white px-6 py-3.5 text-sm font-semibold text-[#1c5087] shadow-sm",
      "transition hover:border-[#1c5087]/50 hover:bg-[#f7fafb] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1c5087] focus-visible:ring-offset-2",
    ),
    footerCard: cn(
      "mb-6 flex w-full items-center gap-3 rounded-2xl border border-white/20 bg-[#003a70]/50 p-4 text-left shadow-lg backdrop-blur-sm transition hover:bg-[#003a70]/70",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1c5087]",
    ),
    footerInline: cn(
      "inline-flex items-center gap-2 font-medium text-[#eaf0f2] transition hover:text-white",
    ),
  };

  return (
    <a
      href={REALSCOUT_SHARED_SEARCH_URL}
      {...externalProps}
      className={cn(styles[variant], className)}
      aria-label={aria}
    >
      {inner}
    </a>
  );
}
