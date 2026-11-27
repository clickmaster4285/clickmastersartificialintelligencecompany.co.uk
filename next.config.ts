import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

// No third-party scripts, fonts or analytics are loaded, so the policy can be
// strict on origins. 'unsafe-inline' is required for Next.js inline bootstrap
// scripts and the inline styles used throughout the design.
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  },
  // Dev mode needs eval for React Refresh, so CSP is applied to production only.
  ...(isProd ? [{ key: "Content-Security-Policy", value: contentSecurityPolicy }] : []),
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  allowedDevOrigins: ["192.168.45.37"],
  images: {
    // No image on the site renders wider than 1280px (the content column), so
    // the largest variant is 1280: srcsets never offer w=1920 or wider
    // (audit D-06: photos were served at w=1920&q=75, 110-162 KB each).
    deviceSizes: [640, 750, 828, 1080, 1200, 1280],
    // AVIF first (about 20% smaller), WebP for browsers without AVIF support.
    formats: ["image/avif", "image/webp"],
    // q=70 is the default for every <Image>; the optimizer rejects others.
    qualities: [70],
  },
  async redirects() {
    return [
      // Audit D-01: the SaaS platform page is not published yet. Send visitors
      // and link equity to the MVP & SaaS development page until it is.
      // Remove this once app/solutions/saas-platform/page.tsx exists.
      { source: "/solutions/saas-platform", destination: "/services/mvp-saas-development", statusCode: 301 },
      // The About page lives at /about; send the common /about-us variant there.
      { source: "/about-us", destination: "/about", statusCode: 301 },
      // The Enterprise Cloud pillar lives at a lowercase, hyphenated URL like every
      // other service page; send the mixed-case and unhyphenated variants there.
      { source: "/services/EnterpriseCloud", destination: "/services/enterprise-cloud", statusCode: 301 },
      { source: "/services/enterprisecloud", destination: "/services/enterprise-cloud", statusCode: 301 },
    ];
  },
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        // Static images rarely change; let browsers and CDNs cache them.
        source: "/assets/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }],
      },
      {
        // Icon sprite (scripts/build-icon-sprite.mjs). Pages reference it as
        // /icons.svg?v=<content hash>, so a long cache is safe.
        source: "/icons.svg",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
