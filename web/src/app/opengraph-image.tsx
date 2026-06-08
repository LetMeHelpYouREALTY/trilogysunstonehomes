import { SITE_NAME_SHORT, SITE_URL } from "@/lib/site-contact";
import { loadOgFonts, renderTrilogyOgImage } from "@/lib/og-image";

export const alt = `${SITE_NAME_SHORT} — Trilogy Sunstone homes for sale, Las Vegas 55+ community`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const { fontConfig } = await loadOgFonts();
  const domain = SITE_URL.replace(/^https:\/\//, "");

  return renderTrilogyOgImage(
    {
      eyebrow: "Northwest Las Vegas · Active Adult · Shea Homes",
      headline: "Trilogy Sunstone",
      headlineAccent: "Homes for Sale",
      subline:
        "New construction & resale in Las Vegas' 55+ community — resort living near Red Rock Canyon.",
      badge: "55+ Active Adult · Trilogy at Sunstone",
      footer: "Dr. Jan Duffy, REALTOR® · BHHS Nevada Properties",
      domain,
    },
    fontConfig,
  );
}
