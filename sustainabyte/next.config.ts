import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["nodemailer"],

  images: {
    // Re-enabled Next.js built-in image optimization.
    // This auto-resizes, converts to WebP/AVIF and compresses images on demand.
    // The 2.4 MB Net Zero Focusbg.webp will be served as ~150 KB at actual display size.
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 80, 85],
    minimumCacheTTL: 86400, // cache optimised images for 24h
    dangerouslyAllowSVG: false,
  },

  allowedDevOrigins: [
    "13.66.130.236",
    "sustainabyte.ai",
    "www.sustainabyte.ai",
  ],

  async redirects() {
    return [
      {
        source: "/people",
        destination: "/company",
        permanent: true,
      },
      {
        source: "/energy/efficiency-consulting",
        destination: "/energy",
        permanent: true,
      },
    ];
  },

  // Security and SEO headers
  async headers() {
    return [
      // ─── HTML pages: never cache, always serve fresh SSR ──────────────────
      {
        source: "/:path*",
        headers: [
          // Security Headers
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // FIX: HTML pages must NOT be cached immutably — they need revalidation
          // so the browser always fetches the latest server-rendered HTML.
          // Stale HTML + new JS = hydration mismatch (the "stale" Turbopack bug).
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
      // ─── Static public assets (images, fonts, icons) ──────────────────────
      {
        source: "/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // ─── WebP and image assets ─────────────────────────────────────────────
      {
        source: "/:path*.webp",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*.svg",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;