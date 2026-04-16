"use client";

import type { MouseEvent } from "react";
import { loadCalendlyWidget } from "@/lib/calendly-loader";
import { CALENDLY_EVENT_URL } from "@/lib/calendly";

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget?: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
      initPopupWidget?: (options: { url: string }) => void;
      closePopupWidget?: () => void;
    };
  }
}

type CalendlyPopupButtonProps = {
  children: React.ReactNode;
  className?: string;
  url?: string;
};

export function CalendlyPopupButton({
  children,
  className,
  url = CALENDLY_EVENT_URL,
}: CalendlyPopupButtonProps) {
  async function openCalendly(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    try {
      await loadCalendlyWidget();
      window.Calendly?.initPopupWidget?.({ url });
    } catch {
      /* network blocked or CSP; user can retry */
    }
  }

  return (
    <button type="button" onClick={openCalendly} className={className}>
      {children}
    </button>
  );
}
