import type { Metadata } from "next";
import Script from "next/script";
import { jobPostingSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Careers at Sustainabyte | Jobs in Chennai",
  description:
    "Join Sustainabyte Technologies in Chennai. Open roles in Software Engineering, AI/ML, Energy Auditing, Technical Sales, B2B SaaS Sales, Pre-Sales, AutoCAD Design, Content Strategy & Internships.",
  keywords: [
    // Brand job / career keywords
    "Sustainabyte jobs",
    "Sustainabyte careers",
    "Sustainabyte hiring",
    "Sustainabyte recruitment",
    "Sustainabyte vacancies",
    "Sustainabyte developer jobs",
    "Sustainabyte software engineer jobs",
    "Sustainabyte full stack developer jobs",
    "Sustainabyte Python developer jobs",
    "Sustainabyte JavaScript developer jobs",
    "Sustainabyte React developer jobs",
    "Sustainabyte Node.js developer jobs",
    // Location-specific job keywords
    "careers sustainabyte",
    "jobs Chennai",
    "frontend developer jobs Chennai",
    "full stack developer Chennai",
    "energy engineering jobs",
    "sales engineer jobs Chennai",
    "B2B SaaS sales jobs Chennai",
    "pre sales executive Chennai",
    "AutoCAD engineer jobs Chennai",
    "content strategist jobs Chennai",
    "compressed air engineer",
    "digital marketing intern Chennai",
    "sustainability jobs",
    "software jobs Tambaram",
    "startup jobs Chennai",
  ],
  openGraph: {
    title: "Careers at Sustainabyte Technologies | Join Our Team",
    description:
      "Build the future with Sustainabyte. We're hiring Software Devs, AI/ML, Energy Engineers, Sales Engineers, AutoCAD Designers, Content Strategists & Interns in Chennai.",
    type: "website",
    url: "https://sustainabyte.ai/careers",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Careers at Sustainabyte Technologies – Join our team in Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Sustainabyte Technologies",
    description:
      "We're hiring Software Devs, AI/ML Engineers, Energy Auditing, Sales Engineers, AutoCAD Designers & Interns in Chennai. Join our AI-powered sustainability startup.",
    images: ["/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://sustainabyte.ai/careers",
  },
};

// All open positions as structured JobPosting schemas for Google Jobs
const openPositions = [
  jobPostingSchema(
    "Frontend Developer",
    "Build high-performance, visually stunning web interfaces using React.js, Next.js and TypeScript. Work closely with design and backend teams to deliver seamless UX for industrial and sustainability products.",
    "Chennai (Tambaram),",
    "FULL_TIME"
  ),
  jobPostingSchema(
    "Full Stack Developer",
    "Own features end-to-end — from database design to pixel-perfect UI — on our industrial SaaS and energy management platforms. Stack: React/Next.js, Node.js, Python, SQL, TypeScript.",
    "Chennai (Tambaram),",
    "FULL_TIME"
  ),
  jobPostingSchema(
    "AI/ML Engineer – Building Energy Intelligence",
    "Develop intelligent machine learning, time-series forecasting, GenAI, and Agentic AI solutions for cognitive and energy-efficient smart buildings and industrial facilities.",
    "Chennai (Tambaram),",
    "FULL_TIME"
  ),
  jobPostingSchema(
    "Energy Audit Engineer",
    "Conduct industrial and commercial energy audits and field assessments covering electrical and mechanical utilities. Carry out measurements on motors, pumps, compressors, chillers, and identify high-impact ECMs.",
    "Chennai (Tambaram)",
    "FULL_TIME"
  ),
  jobPostingSchema(
    "Content Strategist",
    "Turn complex AI, IoT, Energy, and Sustainability concepts into clear, engaging content across LinkedIn, website, blogs, and marketing campaigns to build our brand and attract enterprise customers and talent.",
    "Chennai (Tambaram),",
    "FULL_TIME"
  ),
  jobPostingSchema(
    "AutoCAD 3D Design & Graphics Engineer",
    "Prepare 2D and 3D technical drawings, 3D equipment models, layouts, and project presentation graphics for BMS, HVAC, electrical, and building automation projects using AutoCAD.",
    "Chennai (Tambaram),",
    "FULL_TIME"
  ),
  jobPostingSchema(
    "Junior Field Engineer – Compressed Air System",
    "Conduct compressed air leak surveys using an Acoustic Imager, quantify leak rates, calculate energy losses, coordinate leak rectification, and prepare comprehensive audit reports for industrial client facilities.",
    "Chennai,",
    "FULL_TIME"
  ),
  jobPostingSchema(
    "B2B SaaS Sales & Business Development Executive",
    "Support sales growth for our software and digital platforms (CMMS, ERP, EMS, IoT). Meet prospective customers, conduct product demonstrations, generate proposals, and drive deal closures.",
    "Chennai (Tambaram),",
    "FULL_TIME"
  ),
  jobPostingSchema(
    "Executive / Sr. Executive – Sales Engineer",
    "Promote Sustainabyte's IoT, BMS, and Energy Management solutions. Deliver high-impact technical demonstrations, conduct site visits, map client requirements, and drive revenue growth across industries.",
    "Chennai (Tambaram),",
    "FULL_TIME"
  ),
  jobPostingSchema(
    "Pre-Sales Executive",
    "Map customer requirements to Sustainabyte's AI, IoT, Energy Management, BMS/EMS, and Smart Building solutions. Prepare technical proposals, BOQ/BOM, Scope of Work, and support client demonstrations.",
    "Chennai (Tambaram),",
    "FULL_TIME"
  ),
  jobPostingSchema(
    "Software Developer Intern",
    "Develop and maintain web applications using Python and Next.js. Design and optimize SQL database queries. Build REST APIs and collaborate with the development team. 3–6 month internship with potential for full-time hire.",
    "Chennai (Tambaram),",
    "INTERN"
  ),
  jobPostingSchema(
    "Energy Audit Intern",
    "Support industrial and commercial energy audits. Collect field data, document observations, and assist in EMS project implementation. 3–6 month internship for Mechanical/Electrical/Energy Engineering students.",
    "Chennai (Tambaram),",
    "INTERN"
  ),
  jobPostingSchema(
    "Sales Intern",
    "Support business development through lead generation, customer engagement, market research, and B2B sales. Gain hands-on experience with CRM and sales processes. 3–6 month internship with potential for full-time hire.",
    "Chennai (Tambaram),",
    "INTERN"
  ),
  jobPostingSchema(
    "Digital Marketing Intern",
    "Support online marketing initiatives including social media, SEO, content marketing, and campaign management. Create social media content, assist in digital campaigns, and track performance. 3–6 month internship.",
    "Chennai (Tambaram),",
    "INTERN"
  ),
  jobPostingSchema(
    "Energy Engineer Intern",
    "Support energy efficiency and sustainability initiatives. Analyze energy consumption, identify savings opportunities, and assist in implementing energy conservation measures. 3–6 month internship.",
    "Chennai (Tambaram),",
    "INTERN"
  ),
];

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {openPositions.map((position, index) => (
        <Script
          key={index}
          id={`job-posting-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(position) }}
          strategy="afterInteractive"
        />
      ))}
      {children}
    </>
  );
}

