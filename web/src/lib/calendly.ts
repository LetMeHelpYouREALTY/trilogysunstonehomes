/**
 * Calendly — Dr. Jan Duffy private 15-minute conversation.
 * Matches embed code from Calendly dashboard. Override: NEXT_PUBLIC_CALENDLY_URL
 */
export const CALENDLY_EVENT_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() ||
  "https://calendly.com/drjanduffy/dr-duffy-private-15-min-conversation";

/** Inline iframe — Trilogy brand green */
export const CALENDLY_INLINE_URL = `${CALENDLY_EVENT_URL}?primary_color=8bb63e`;

export const CALENDLY_BADGE_TEXT = "Schedule time with me";
export const CALENDLY_BADGE_COLOR = "#8bb63e";
export const CALENDLY_BADGE_TEXT_COLOR = "#ffffff";

/** iframe embed URL with GDPR banner hidden */
export function calendlyEmbedUrl(base: string = CALENDLY_INLINE_URL): string {
  const separator = base.includes("?") ? "&" : "?";
  return `${base}${separator}hide_gdpr_banner=1`;
}

/** Popup widget URL (plain event URL per Calendly embed snippet) */
export function calendlyPopupUrl(base: string = CALENDLY_EVENT_URL): string {
  return base;
}
