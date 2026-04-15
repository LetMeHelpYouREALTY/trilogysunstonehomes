"use client";

import type { MouseEvent } from "react";
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
  function openCalendly(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    window.Calendly?.initPopupWidget?.({ url });
  }

  return (
    <button type="button" onClick={openCalendly} className={className}>
      {children}
    </button>
  );
}
