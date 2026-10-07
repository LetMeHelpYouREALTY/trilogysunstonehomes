import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const appRoot = path.dirname(fileURLToPath(import.meta.url));

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://assets.calendly.com https://js.stripe.com https://maps.googleapis.com",
  "style-src 'self' 'unsafe-inline' https://assets.calendly.com https://fonts.googleapis.com",
  "img-src 'self' data: https: blob:",
  "font-src 'self' data: https://fonts.gstatic.com",
  "connect-src 'self' https://www.realscout.com https://em.realscout.com https://calendly.com https://assets.calendly.com https://api.stripe.com https://r.stripe.com https://m.stripe.com https://maps.googleapis.com https://maps.gstatic.com https://places.googleapis.com",
  "worker-src 'self' blob:",
  "frame-src 'self' https://www.google.com https://www.realscout.com https://calendly.com https://assets.calendly.com https://js.stripe.com https://hooks.stripe.com https://m.stripe.network https://m.stripe.com",
  "base-uri 'self'",
  "form-action 'self'",
].join("; ");

const nextConfig: NextConfig = {
  // Monorepo: keep Turbopack rooted in web/ (repo also has a root package-lock.json).
  turbopack: {
    root: appRoot,
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
      { source: "/nearby-amenities", destination: "/amenities", permanent: true },
    ];
  },
};

export default nextConfig;
