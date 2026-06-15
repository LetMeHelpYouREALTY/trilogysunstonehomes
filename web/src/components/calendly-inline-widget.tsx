"use client";

import { useEffect, useRef, useState } from "react";
import { CALENDLY_INLINE_URL, calendlyEmbedUrl } from "@/lib/calendly";

type CalendlyInlineWidgetProps = {
  className?: string;
  title?: string;
};

/**
 * Inline Calendly embed. Does not set iframe `src` until the block intersects the
 * viewport (strict `rootMargin: 0`). Native `loading="lazy"` on iframes still loads
 * within a large distance threshold and pulls the heavy booking/Stripe bundle during
 * initial page load; deferring `src` keeps that work off the critical path for LCP.
 */
export function CalendlyInlineWidget({
  className,
  title = "Schedule a 15-minute conversation with Dr. Jan Duffy",
}: CalendlyInlineWidgetProps) {
  const [iframeSrc, setIframeSrc] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIframeSrc(calendlyEmbedUrl(CALENDLY_INLINE_URL));
            observer.disconnect();
            return;
          }
        }
      },
      { root: null, rootMargin: "0px", threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className} role="region" aria-label={title}>
      {iframeSrc ? (
        <iframe
          title={title}
          src={iframeSrc}
          className="w-full rounded-xl border border-[#d9e0e2] bg-white"
          style={{ minWidth: "320px", height: "700px" }}
          loading="lazy"
        />
      ) : (
        <div
          className="flex w-full min-w-[320px] items-center justify-center rounded-xl border border-dashed border-[#c5ced1] bg-[#f7fafb]"
          style={{ minHeight: "700px" }}
        >
          <p className="max-w-sm px-4 text-center text-sm text-[#3d4544]">
            The scheduling calendar loads when this section is in view.
          </p>
        </div>
      )}
    </div>
  );
}
