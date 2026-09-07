// SEO utilities for structured data (JSON-LD) and metadata

interface SchemaProps {
  [key: string]: any;
}

export const generateSchema = (schema: SchemaProps) => {
  return {
    __html: JSON.stringify(schema),
  };
};

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://sustainabyte.ai/#organization",
  name: "Sustainabyte Technologies",
  legalName: "Sustainabyte Technologies Private Limited",
  url: "https://sustainabyte.ai",
  logo: "https://sustainabyte.ai/icon.png",
  description: "AI and IoT solutions for industrial energy efficiency, sustainability, and net-zero decarbonization.",
  foundingDate: "2024-05",
  founder: [
    {
      "@type": "Person",
      name: "Thanakarthik Kumar ",
      jobTitle: "Founder & CEO"
    }
  ],
  sameAs: [
    "https://www.linkedin.com/company/sustainabyte-ai/",
    "https://www.youtube.com/@SustainabyteTechnologies",
    "https://www.instagram.com/sustainabyte.ai",
    "https://www.facebook.com/sustainabyte",
    "https://x.com/sustainabyte",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "House No. 11, Prashanthi Colony, Plot 1, Madambakkam",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600126",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support & Sales",
    telephone: "+91-83770-07638",
    email: "contact@sustainabyte.ai",
    availableLanguage: ["en", "ta", "hi"],
  },
};

// Website Schema with Search Action
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Sustainabyte Technologies",
  url: "https://sustainabyte.ai",
  searchAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://sustainabyte.ai/search?q={search_term_string}",
    },
    query: "required name=search_term_string",
  },
};

// SiteNavigationElement Schema for Google Sitelinks
export const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    // ── Top 6 Primary Sitelinks for Google Search ────────────────────────────
    {
      "@type": "SiteNavigationElement",
      name: "Contact Us",
      description: "Get in touch with Sustainabyte Technologies in Chennai for product demos, energy audits, and inquiries.",
      url: "https://sustainabyte.ai/contact",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Technology & AI Products",
      description: "Explore AI-powered energy intelligence platforms: OptiByte, InByte, FixByte, FusionByte, and IoT solutions.",
      url: "https://sustainabyte.ai/technology",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Energy Solutions & Audits",
      description: "Industrial energy management, efficiency consulting, and BEE-certified energy audit services in Chennai.",
      url: "https://sustainabyte.ai/energy",
    },
    {
      "@type": "SiteNavigationElement",
      name: "About Sustainabyte",
      description: "Learn about Sustainabyte Technologies — our mission, vision, leadership, and company profile.",
      url: "https://sustainabyte.ai/company",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Careers & Jobs",
      description: "Explore open career opportunities in software engineering, energy systems, and AI in Chennai.",
      url: "https://sustainabyte.ai/careers",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Blogs & Insights",
      description: "In-depth articles on Agentic AI, smart utilities, ASHRAE energy audits, and industrial decarbonization.",
      url: "https://sustainabyte.ai/blogs",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Resources",
      description: "Case studies, whitepapers, and guides on industrial energy efficiency and sustainability.",
      url: "https://sustainabyte.ai/resources",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Energy Audit Chennai",
      description: "BEE certified energy audit services in Chennai — industrial, commercial, HVAC & electrical audits.",
      url: "https://sustainabyte.ai/energy/energy-audit-chennai",
    },
    {
      "@type": "SiteNavigationElement",
      name: "OptiByte – Chiller Plant Optimizer",
      description: "AI-driven chiller plant optimisation platform for industrial and commercial HVAC systems.",
      url: "https://sustainabyte.ai/technology/optibyte",
    },
    {
      "@type": "SiteNavigationElement",
      name: "InByte – Energy Monitoring",
      description: "Real-time energy monitoring and analytics platform for industrial facilities.",
      url: "https://sustainabyte.ai/technology/inbyte",
    },
    {
      "@type": "SiteNavigationElement",
      name: "FixByte – Predictive Maintenance",
      description: "AI-powered predictive maintenance and fault detection for industrial equipment.",
      url: "https://sustainabyte.ai/technology/fixbyte",
    },
    {
      "@type": "SiteNavigationElement",
      name: "FusionByte – IoT Integration",
      description: "IoT data fusion and integration platform for smart industrial facilities.",
      url: "https://sustainabyte.ai/technology/fusionbyte",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Chiller Plant Manager",
      description: "Comprehensive chiller plant management and optimisation solution.",
      url: "https://sustainabyte.ai/technology/chiller-plant-manager",
    },
    {
      "@type": "SiteNavigationElement",
      name: "IoT Solutions",
      description: "Industrial IoT sensor solutions and smart monitoring for energy and utilities.",
      url: "https://sustainabyte.ai/technology/iot-solutions",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Compass – AI Analytics",
      description: "AI analytics and decision intelligence platform for energy and operations.",
      url: "https://sustainabyte.ai/technology/compass",
    },
    {
      "@type": "SiteNavigationElement",
      name: "DigiWeld",
      description: "Digital welding process monitoring and optimisation solution.",
      url: "https://sustainabyte.ai/technology/digiweld",
    },
    // ── Energy Services ─────────────────────────────────────────────────────
    {
      "@type": "SiteNavigationElement",
      name: "Energy Solutions",
      description: "Industrial energy management, efficiency consulting, and BEE-compliant energy audits.",
      url: "https://sustainabyte.ai/energy",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Energy Audit Services",
      description: "ASHRAE & BEE-compliant energy audits for industrial and commercial facilities.",
      url: "https://sustainabyte.ai/energy/energy-audit",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Energy Management Solutions",
      description: "Comprehensive energy management systems and ISO 50001 consulting.",
      url: "https://sustainabyte.ai/energy/management-solutions",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Energy Efficiency Consulting",
      description: "Expert energy efficiency consulting and optimisation for industrial operations.",
      url: "https://sustainabyte.ai/energy",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Energy Analytics",
      description: "Advanced energy analytics and reporting for industrial and commercial facilities.",
      url: "https://sustainabyte.ai/energy/analytics",
    },
    // ── Sustainability ───────────────────────────────────────────────────────
    {
      "@type": "SiteNavigationElement",
      name: "Sustainability Solutions",
      description: "Net Zero roadmaps, carbon accounting, decarbonization strategies, and ESG reporting.",
      url: "https://sustainabyte.ai/sustainability",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Net Zero Roadmap",
      description: "Science-based Net Zero planning and decarbonization roadmaps for industrial companies.",
      url: "https://sustainabyte.ai/sustainability/net-zero-roadmap",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Carbon Accounting",
      description: "Scope 1, 2 & 3 carbon accounting and GHG emissions tracking for enterprises.",
      url: "https://sustainabyte.ai/sustainability/carbon-accounting",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Industrial Decarbonization",
      description: "End-to-end industrial decarbonization solutions and implementation support.",
      url: "https://sustainabyte.ai/sustainability/decarbonization",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Water Management",
      description: "Industrial water management, efficiency monitoring, and conservation solutions.",
      url: "https://sustainabyte.ai/sustainability/water-management",
    },
    // ── Other ────────────────────────────────────────────────────────────────
    {
      "@type": "SiteNavigationElement",
      name: "Analytics Dashboard",
      description: "Real-time energy and sustainability analytics dashboard for enterprise clients.",
      url: "https://sustainabyte.ai/analytics",
    },
    {
      "@type": "SiteNavigationElement",
      name: "Regions & Global Presence",
      description: "Sustainabyte's global service regions across India, Middle East, and Southeast Asia.",
      url: "https://sustainabyte.ai/regions",
    },
  ],
};

// Service Schema
export const serviceSchema = (
  name: string,
  description: string,
  url: string,
  image?: string
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  provider: {
    "@type": "Organization",
    name: "Sustainabyte Technologies",
    url: "https://sustainabyte.ai",
  },
  image: image || "https://sustainabyte.ai/icon.png",
  url,
  serviceArea: {
    "@type": "Country",
    name: "India",
  },
  areaServed: "IN",
});

// LocalBusiness Schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://sustainabyte.ai/#localbusiness",
  name: "Sustainabyte Technologies Private Limited",
  image: "https://sustainabyte.ai/icon.png",
  description: "AI-powered industrial energy intelligence, IoT monitoring, and net-zero sustainability solutions provider based in Chennai, Tamil Nadu.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "House No. 11, Prashanthi Colony, Plot 1, Madambakkam",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600126",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "12.9249",
    longitude: "80.1000",
  },
  telephone: "+91-83770-07638",
  email: "contact@sustainabyte.ai",
  url: "https://sustainabyte.ai",
  priceRange: "$$",
  currenciesAccepted: "INR, USD, AED",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:30",
    closes: "18:30",
  },
  sameAs: [
    "https://www.linkedin.com/company/sustainabyte-ai/",
    "https://www.youtube.com/@SustainabyteTechnologies",
    "https://www.instagram.com/sustainabyte.ai",
    "https://www.facebook.com/sustainabyte",
    "https://x.com/sustainabyte",
  ],
};

// BlogPosting Schema
export const blogPostSchema = (
  headline: string,
  description: string,
  image: string,
  datePublished: string,
  authorName: string = "Sustainabyte Technologies",
  authorLinkedIn?: string,
  dateModified?: string
) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline,
  description,
  image,
  datePublished,
  dateModified: dateModified || datePublished,
  author: {
    "@type": "Person",
    name: authorName,
    ...(authorLinkedIn && { sameAs: authorLinkedIn }),
    worksFor: {
      "@type": "Organization",
      name: "Sustainabyte Technologies",
      url: "https://sustainabyte.ai",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "Sustainabyte Technologies",
    logo: {
      "@type": "ImageObject",
      url: "https://sustainabyte.ai/logo.png",
    },
  },
});

// Blog Schema (for blogs listing page)
export const blogsSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Sustainabyte Sustainability & Energy AI Blogs",
  description: "Expert articles on smart utilities, Agentic AI, ASHRAE energy audits, and industrial decarbonization.",
  url: "https://sustainabyte.ai/blogs",
  publisher: {
    "@type": "Organization",
    name: "Sustainabyte Technologies",
    url: "https://sustainabyte.ai",
    logo: {
      "@type": "ImageObject",
      url: "https://sustainabyte.ai/logo.png",
    },
  },
};

// News Schema (for news listing page)
export const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Sustainabyte News & Insights",
  description: "Latest news and insights on energy efficiency, sustainability, and net-zero solutions",
  url: "https://sustainabyte.ai/news",
  publisher: {
    "@type": "Organization",
    name: "Sustainabyte Technologies",
    url: "https://sustainabyte.ai",
    logo: {
      "@type": "ImageObject",
      url: "https://sustainabyte.ai/logo.png",
    },
  },
};

// FAQPage Schema
export const faqPageSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

// BreadcrumbList Schema
export const breadcrumbSchema = (
  items: Array<{ name: string; url: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// Product Schema (for technology products)
export const productSchema = (
  name: string,
  description: string,
  image: string,
  url: string
) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name,
  description,
  image,
  url,
  brand: {
    "@type": "Brand",
    name: "Sustainabyte Technologies",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Sustainabyte Technologies",
  },
});

// NewsArticle Schema (for news/blog posts)
export const newsArticleSchema = (
  headline: string,
  description: string,
  image: string,
  datePublished: string,
  dateModified?: string,
  authorName: string = "Sustainabyte Technologies",
  authorLinkedIn?: string
) => ({
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline,
  description,
  image,
  datePublished,
  dateModified: dateModified || datePublished,
  author: {
    "@type": "Person",
    name: authorName,
    ...(authorLinkedIn && { sameAs: authorLinkedIn }),
    worksFor: {
      "@type": "Organization",
      name: "Sustainabyte Technologies",
      url: "https://sustainabyte.ai",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "Sustainabyte Technologies",
    logo: {
      "@type": "ImageObject",
      url: "https://sustainabyte.ai/logo.png",
    },
  },
});

// JobPosting Schema (for career positions)
export const jobPostingSchema = (
  title: string,
  description: string,
  jobLocation: string = "Chennai, India",
  employmentType: string = "FULL_TIME",
  salary?: { currency: string; value: { minValue: number; maxValue: number } }
) => ({
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title,
  description,
  datePosted: new Date().toISOString().split("T")[0],
  employmentType,
  hiringOrganization: {
    "@type": "Organization",
    name: "Sustainabyte Technologies",
    sameAs: "https://sustainabyte.ai",
    logo: "https://sustainabyte.ai/logo.png",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: jobLocation.split(",")[0],
      addressCountry: "IN",
    },
  },
  ...(salary && {
    baseSalary: {
      "@type": "PriceSpecification",
      priceCurrency: salary.currency,
      minPrice: salary.value.minValue,
      maxPrice: salary.value.maxValue,
    },
  }),
  validThrough: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0],
});

// Person Schema (for team members)
export const personSchema = (
  name: string,
  jobTitle: string,
  image?: string,
  url?: string,
  email?: string,
  sameAs?: string | string[]
) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name,
  jobTitle,
  image: image || undefined,
  url: url || undefined,
  email: email || undefined,
  ...(sameAs && { sameAs }),
  worksFor: {
    "@type": "Organization",
    name: "Sustainabyte Technologies",
    url: "https://sustainabyte.ai",
  },
});

// ProfilePage Schema (for team/people pages)
export const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Sustainabyte Team",
  description: "Meet the innovative team driving sustainability through technology",
  url: "https://sustainabyte.ai/people",
};

// LocalBusiness Schema for multiple India regions
export const localBusinessRegionalSchema = (city: string) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sustainabyte Technologies",
  image: "https://sustainabyte.ai/icon.png",
  description: `Sustainabyte Technologies - Energy efficiency and sustainability solutions in ${city}, India`,
  address: {
    "@type": "PostalAddress",
    addressLocality: city,
    addressRegion: city,
    postalCode: "600045",
    addressCountry: "IN",
  },
  telephone: "+91-83770-07638",
  email: "contact@sustainabyte.ai",
  url: "https://sustainabyte.ai/contact",
  priceRange: "$$",
  areaServed: {
    "@type": "City",
    name: city,
  },
});
