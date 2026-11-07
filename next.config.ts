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
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  // Dev mode needs eval for React Refresh, so CSP is applied to production only.
  ...(isProd ? [{ key: "Content-Security-Policy", value: contentSecurityPolicy }] : []),
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  allowedDevOrigins: ["192.168.45.37"],
  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        // Static images rarely change; let browsers and CDNs cache them.
        source: "/assets/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }],
      },
    ];
  },
};

export default nextConfig;
