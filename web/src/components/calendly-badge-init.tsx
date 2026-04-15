"use client";

import { useEffect } from "react";
import {
  CALENDLY_BADGE_COLOR,
  CALENDLY_BADGE_TEXT,
  CALENDLY_BADGE_TEXT_COLOR,
  CALENDLY_EVENT_URL,
} from "@/lib/calendly";

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

export function CalendlyBadgeInit() {
  useEffect(() => {
    const existingBadge = document.querySelector(".calendly-badge-widget");
    if (existingBadge) {
      return;
    }

    const start = () => {
      window.Calendly?.initBadgeWidget?.({
        url: CALENDLY_EVENT_URL,
        text: CALENDLY_BADGE_TEXT,
        color: CALENDLY_BADGE_COLOR,
        textColor: CALENDLY_BADGE_TEXT_COLOR,
        branding: false,
      });
    };

    if (window.Calendly) {
      start();
      return;
    }

    const timer = window.setTimeout(start, 800);
    return () => window.clearTimeout(timer);
  }, []);

  return null;
}
