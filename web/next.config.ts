import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** App directory (this package). Keeps Turbopack root stable in the monorepo; aligns with Vercel when Root Directory is `web`. */
const turbopackRoot = path.dirname(fileURLToPath(import.meta.url));

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://assets.calendly.com",
  "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
  "img-src 'self' data: https: blob:",
  "font-src 'self' data:",
  "connect-src 'self' https://www.realscout.com https://em.realscout.com https://calendly.com https://assets.calendly.com",
  "frame-src 'self' https://www.google.com https://www.realscout.com https://calendly.com https://assets.calendly.com",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const nextConfig: NextConfig = {
  turbopack: {
    root: turbopackRoot,
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/markdown-page", destination: "/", permanent: true },
      { source: "/sitemap-index.xml", destination: "/sitemap.xml", permanent: true },
    ];
  },
};

export default nextConfig;
