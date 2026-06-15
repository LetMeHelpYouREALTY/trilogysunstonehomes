import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { localBusinessJsonLd, websiteJsonLd } from "@/lib/schema";
import { SITE_NAME_SHORT, SITE_URL } from "@/lib/site-contact";

const sans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

const display = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  adjustFontFallback: true,
});

const metadataBase = new URL(SITE_URL);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: SITE_NAME_SHORT,
    template: `%s | ${SITE_NAME_SHORT}`,
  },
  description:
    "Trilogy Sunstone homes for sale — Trilogy at Sunstone real estate, Las Vegas 55+ community in northwest Las Vegas (89143). Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME_SHORT,
    url: metadataBase,
  },
  twitter: { card: "summary_large_image" },
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <head>
        <meta name="theme-color" content="#003a70" />
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <JsonLd data={websiteJsonLd()} />
        <JsonLd data={localBusinessJsonLd()} />
      </head>
      <body className="min-h-screen flex flex-col text-sm md:text-base font-sans text-[#3d4544]">
        <a
          href="#main-content"
          className="absolute left-[-9999px] top-4 w-px h-px overflow-hidden focus:left-4 focus:top-4 focus:z-[100] focus:px-4 focus:py-2 focus:w-auto focus:h-auto focus:overflow-visible focus:bg-[#1c5087] focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1c5087]"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <div id="main-content" className="flex-1 outline-none" tabIndex={-1}>
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
