import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import ScrollProgressBar from "@/components/layout/ScrollProgressBar";
import { Toaster } from "react-hot-toast";
import { organizationSchema, websiteSchema, localBusinessSchema, siteNavigationSchema } from "@/lib/seo";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";

const Footer = dynamic(() => import("@/components/layout/Footer"));

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sustainabyte.ai"),
  title: "Energy Audit & Energy Management Company in Chennai | Sustainabyte Technologies",
  description:
    "Sustainabyte Technologies delivers enterprise AI energy management systems, industrial chiller plant optimization, and automated Net Zero decarbonization solutions.",
  keywords: [
    // 🏢 Brand / Company name keywords
    "Sustainabyte",
    "Sustainabyte.ai",
    "Sustainabyte AI",
    "Sustainabyte Pvt Ltd",
    "Sustainabyte Private Limited",
    "Sustainabyte Technologies",
    "Sustainabyte Technology",
    "Sustainabyte company",
    "Sustainabyte Chennai",
    "Sustainabyte India",
    // 🔑 Main Chennai company keywords
    "Energy Audit Company in Chennai",
    "Energy Audit Services in Chennai",
    "Energy Service Company in Chennai",
    "Energy Management Company in Chennai",
    "Energy Efficiency Company in Chennai",
    "Energy Consulting Company in Chennai",
    "Energy Consultant in Chennai",
    "Industrial Energy Audit in Chennai",
    "Commercial Energy Audit in Chennai",
    "Energy Conservation Services in Chennai",
    "Energy Optimization Company in Chennai",
    "Energy Management Services in Chennai",
    // 🔧 Service type keywords
    "Energy audit",
    "Electrical energy audit",
    "HVAC energy audit",
    "Industrial energy audit",
    "Commercial energy audit",
    "Building energy audit",
    "Energy performance assessment",
    "Energy consumption analysis",
    "Energy saving assessment",
    "Energy efficiency assessment",
    "Energy conservation study",
    "Energy monitoring",
    "Energy optimization",
    "Chiller plant optimization",
    "HVAC optimization",
    "ISO 50001 consulting",
    "ISO 50002 energy audit",
    // 📍 Chennai location keywords
    "Energy Audit Chennai",
    "Energy Audit Company Chennai",
    "Energy Consultant Chennai",
    "Energy Management Chennai",
    "Energy Efficiency Chennai",
    "Energy Services Chennai",
    "Energy Optimization Chennai",
    "Industrial Energy Consultant Chennai",
    "Energy Audit Tamil Nadu",
    "Energy Management Tamil Nadu",
    "Energy Efficiency Services Tamil Nadu",
    // 🏭 Industry verticals Chennai
    "Factory Energy Audit Chennai",
    "Manufacturing Energy Audit Chennai",
    "Hospital Energy Audit Chennai",
    "Hotel Energy Audit Chennai",
    "IT Park Energy Management Chennai",
    "Commercial Building Energy Audit Chennai",
    "Industrial Energy Efficiency Chennai",
    "Factory Energy Management Chennai",
    "HVAC Energy Optimization Chennai",
    "Chiller Optimization Chennai",
    // ⚙️ Core product / solution keywords
    "AI energy management",
    "energy management system",
    "industrial energy management",
    "energy monitoring system",
    "energy optimization solutions",
    "chiller plant optimization",
    "HVAC energy optimization",
    "industrial energy efficiency",
    "energy audit services",
    "ISO 50001 consulting",
    "ESG reporting",
    "Scope 1 2 3 emissions",
    "Net Zero solutions",
    "industrial decarbonization",
    "AI energy management India",
  ],
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "Sustainabyte Technologies | Energy Intelligence Reimagined",
    description: "AI-powered energy efficiency and net-zero solutions for industrial facilities and commercial buildings.",
    type: "website",
    url: "https://sustainabyte.ai",
    siteName: "Sustainabyte Technologies",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Sustainabyte Technologies - AI Energy Management",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sustainabyte Technologies",
    description: "Energy Intelligence Reimagined",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    // Single canonical — all country traffic handled by geo-targeting in GBP & GSC
    // Having 20+ hreflang variants pointing to the same URL causes critical hreflang errors
    canonical: "https://sustainabyte.ai",
    languages: {
      "en": "https://sustainabyte.ai",
      "en-IN": "https://sustainabyte.ai",
      "x-default": "https://sustainabyte.ai",
    },
  },
  icons: {
    icon: "/icon.png?v=1",
  },
  // Google verification is done via DNS TXT record (already verified in Search Console)
  // Do NOT add placeholder verification strings — they create broken meta tags
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Preconnect to critical third-party origins — reduces LCP by ~400-500ms */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://static.cloudflareinsights.com" />
        {/* llms.txt — Agentic Browsing / AI agent discoverability */}
        <link rel="describedby" href="/llms.txt" type="text/plain" />
        {/* Preload logo to prevent it being a late-discovered LCP resource */}
        <link rel="preload" as="image" href="/Company-Logo-3-1.webp" fetchPriority="high" />

        {/* Global Geo Meta Tags — only primary region; multiple geo.region tags are invalid HTML */}
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai, Tamil Nadu, India" />
        <meta name="geo.position" content="12.9249;80.1000" />
        <meta name="ICBM" content="12.9249, 80.1000" />
        {/* Author / Publisher Attribution */}
        <meta name="author" content="Sustainabyte Technologies" />
        <meta name="publisher" content="Sustainabyte Technologies" />

        {/* JSON-LD Structured Data - native static scripts for zero JS overhead and instant crawler pickup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {/* Lazy load Google Analytics after page is interactive so it never blocks mobile FCP/LCP */}
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-06T4EBKHVW"
        />
        <Script id="google-analytics-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-06T4EBKHVW', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        <Toaster position="top-right" reverseOrder={false} />
        <ScrollProgressBar />
        <Navbar />
        <main>{children}</main>
        <WhatsAppWidget />
        <Footer />
      </body>
    </html>
  );
}
 