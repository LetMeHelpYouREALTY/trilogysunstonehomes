"use client";

import Link from "next/link";
import { PHONE_DISPLAY, PHONE_E164 } from "@/lib/site-contact";
import { cn } from "@/lib/cn";

type StickyMobileCtaProps = {
  /** Extra bottom padding so fixed bar does not cover content */
  className?: string;
};

/**
 * Mobile-first sticky Call + Contact bar (plan: conversion / repeat CTAs).
 */
export function StickyMobileCta({ className }: StickyMobileCtaProps) {
  return (
    <div
      className={cn(
        "fixed bottom-0 inset-x-0 z-50 flex gap-2 rounded-t-2xl border border-slate-200/80 border-b-0 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-12px_40px_-8px_rgba(15,23,42,0.18)] backdrop-blur-md md:hidden",
        className,
      )}
      role="region"
      aria-label="Quick contact"
    >
      <a
        href={`tel:${PHONE_E164}`}
        className="inline-flex flex-1 items-center justify-center rounded-md bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
      >
        Call {PHONE_DISPLAY}
      </a>
      <Link
        href="/contact"
        className="inline-flex flex-1 items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
      >
        Contact
      </Link>
    </div>
  );
}
