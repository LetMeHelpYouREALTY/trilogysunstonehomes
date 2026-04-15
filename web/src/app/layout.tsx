import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { websiteJsonLd } from "@/lib/schema";
import { SITE_NAME_SHORT, SITE_URL } from "@/lib/site-contact";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
    "Trilogy Sunstone Las Vegas homes for sale and community information. 55+ active adult community in Southern Nevada.",
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
    <html lang="en" className={geist.variable}>
      <head>
        <meta name="theme-color" content="#172554" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://em.realscout.com" />
        <link rel="preconnect" href="https://www.realscout.com" />
        <JsonLd data={websiteJsonLd()} />
      </head>
      <body className="min-h-screen flex flex-col text-sm md:text-base font-sans text-slate-800">
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="afterInteractive"
        />
        <a
          href="#main-content"
          className="absolute left-[-9999px] top-4 w-px h-px overflow-hidden focus:left-4 focus:top-4 focus:z-[100] focus:px-4 focus:py-2 focus:w-auto focus:h-auto focus:overflow-visible focus:bg-blue-600 focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
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
