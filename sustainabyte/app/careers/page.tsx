"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import GreenButton from "@/components/ui/GreenButton";
import toast from "react-hot-toast";
import {
  Briefcase,
  Upload,
  Cpu,
  TrendingUp,
  Coffee,
  Users,
  BookOpen,
  Lightbulb,
  MapPin,
  Mail,
  Phone,
  ChevronDown,
  Building,
  GraduationCap,
  Zap,
  BarChart2,
  Megaphone,
  Code2,
  Clock
} from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const whyJoinUs = [
  { icon: Lightbulb, title: "Innovative Projects", desc: "Work on cutting-edge AI and IoT solutions." },
  { icon: TrendingUp, title: "Career Growth", desc: "Clear pathways to advance your career rapidly." },
  { icon: Coffee, title: "Flexible Work Culture", desc: "Balance your life with flexible working arrangements." },
  { icon: Cpu, title: "Latest Technologies", desc: "Access the best tools and tech stacks." },
  { icon: Users, title: "Collaborative Team", desc: "Join a diverse team of brilliant minds." },
  { icon: BookOpen, title: "Learning & Development", desc: "Continuous learning programs and resources." },
];

const jobs = [
  {
    title: "Frontend Developer",
    subtitle: "Next.js / React.js / TypeScript",
    experience: "1+ Years (Freshers with strong projects welcome)",
    type: "Full Time",
    location: "Chennai (Tambaram) / On-site",
    about: "We are looking for a Frontend Developer responsible for developing, maintaining, debugging, and enhancing modern web applications using Next.js, React.js, and TypeScript. The developer will build reusable frontend modules, integrate REST APIs, implement state management, and work closely with backend, QA, UI/UX, and product teams.",
    mandatoryStack: "React.js + Next.js + TypeScript + JavaScript ES6+ + HTML5 + CSS3 + REST API Integration + State Management + Git/GitHub",
    requiredSkills: [
      "React.js & Next.js (App Router, Server & Client Components, SSR/SSG)",
      "TypeScript & Modern JavaScript (ES6+)",
      "HTML5, CSS3 & Responsive Web Design across all devices",
      "REST API Integration & Handling (loading, success, empty, and error states)",
      "State Management (Zustand, Redux Toolkit, React Context, or TanStack Query)",
      "Component-based architecture & reusable UI module development",
      "Git / GitHub version control, branching, PRs, and code reviews",
      "Debugging & performance optimization using Browser DevTools",
    ],
    preferredSkills: [
      "Tailwind CSS / Material UI / Ant Design / Shadcn UI",
      "2D & 3D Visualization (Three.js, React Three Fiber, SVG / Canvas, draw.io)",
      "WebSockets / SignalR & MQTT real-time streaming protocols",
      "Docker, Azure / AWS cloud environments & CI/CD pipelines",
      "Automated Testing (Jest, React Testing Library, Playwright / Cypress)",
      "Data visualization (D3.js, Chart.js / ECharts)",
      "Basic understanding of ASP.NET Core and PostgreSQL",
    ],
    responsibilities: [
      "Develop and maintain scalable web applications using Next.js, React.js, and TypeScript",
      "Design and build reusable modules: dashboards, data tables, forms, filters, search, pagination, charts, modals, and configuration panels",
      "Integrate frontend applications with REST APIs and ensure robust error and state handling",
      "Implement appropriate state management for local UI state, global application state, and server/API state",
      "Build responsive, pixel-perfect, and user-friendly interfaces for desktop, tablet, and mobile",
      "Debug existing frontend modules and resolve functional, UI, integration, and production issues",
      "Investigate frontend performance bottlenecks, unnecessary re-renders, and bundle size optimizations",
      "Participate in code reviews, follow clean coding standards, and write unit/integration tests",
      "Collaborate with backend developers, QA, UI/UX, and product teams to deliver features",
    ],
    gains: [
      "Work on real-time industrial dashboards & IoT visualization",
      "Exposure to 2D/3D digital twin visualization (Three.js, Canvas)",
      "Strong engineering culture with Next.js App Router & TypeScript",
      "Fast-track growth in an agile climate-tech startup environment",
    ],
  },

  {
    title: "Full Stack Developer",
    subtitle: ".NET / React.js / Next.js",
    experience: "2+ Years",
    type: "Full Time",
    location: "Chennai (Tambaram) / On-site",
    about: "We are looking for a Full Stack Developer (.NET / React.js / Next.js) responsible for developing and maintaining scalable web applications. You will design REST APIs using .NET Web API, build modern UIs with React/Next.js, optimize PostgreSQL database schemas, and integrate real-time IoT feeds for industrial sustainability.",
    mandatoryStack: "C# + ASP.NET Core + PostgreSQL + React.js / Next.js",
    requiredSkills: [
      "C# / .NET / ASP.NET Core Web API",
      "React.js / Next.js & TypeScript / JavaScript",
      "PostgreSQL Database Design, Complex Queries & Query Optimization",
      "Entity Framework Core & LINQ",
      "RESTful API Design, Development & Integration",
      "HTML5, CSS3 & Responsive UI Components",
      "Git / GitHub Version Control",
      "OOP, SOLID Principles & Software Design Patterns",
    ],
    preferredSkills: [
      "Docker & Containerization",
      "Azure / AWS Cloud Deployments",
      "CI/CD Pipelines (GitHub Actions / Jenkins)",
      "Redis In-Memory Caching & Microservices Architecture",
      "MQTT / IoT Protocols & WebSockets",
      "Python Scripting & Automation",
    ],
    responsibilities: [
      "Develop and maintain scalable web applications using ASP.NET Core and React.js / Next.js",
      "Design and develop high-performance REST APIs using .NET Web API",
      "Design database schemas, write complex queries, and optimize database performance using PostgreSQL",
      "Build responsive and reusable UI components using React.js / Next.js",
      "Integrate frontend applications with backend APIs and handle authentication, authorization, validation, and error states",
      "Debug and resolve application, database, and production issues across the stack",
      "Participate in code reviews and adhere to clean coding, OOP, and architectural best practices",
      "Collaborate with frontend, backend, QA, and product teams to deliver end-to-end features",
    ],
    gains: [
      "End-to-end product ownership on industrial IoT and SaaS platforms",
      "Enterprise-grade .NET Core and Next.js full-stack architecture expertise",
      "Hands-on exposure to high-frequency time-series data & MQTT feeds",
      "High-impact startup environment driving real-world decarbonization",
    ],
  },

  {
    title: "AI/ML Engineer – Building Energy Intelligence",
    subtitle: "Machine Learning / GenAI / Agentic AI",
    experience: "2+ Years (or strong demonstrable project capabilities)",
    qualification: "B.E. / B.Tech / M.E. / M.Tech in CS, AI/ML, Data Science, Electrical, Mechanical, Energy Engineering",
    type: "Full Time",
    location: "Chennai (Tambaram) / Hybrid",
    about: "Sustainabyte is looking for an AI/ML Engineer to develop intelligent solutions for energy-efficient and cognitive buildings. The role combines Machine Learning, Data Analytics, Generative AI, Agentic AI, and Building Energy Systems. You will work with real-world building sensor data and develop AI-driven solutions for prediction, anomaly detection, optimization, insights, recommendations, and intelligent supervisory controls.",
    requiredSkills: [
      "Python (Pandas, NumPy, Scikit-learn)",
      "Machine Learning fundamentals, model development & time-series forecasting",
      "Data analysis, preprocessing, feature engineering & anomaly detection",
      "SQL and relational databases (PostgreSQL / MySQL)",
      "FastAPI / REST API development & integration",
      "Git / GitHub and clean software development practices",
      "Understanding of HVAC, electrical systems, BMS/EMS, or building energy systems",
    ],
    preferredSkills: [
      "LLMs & Generative AI, Prompt Engineering, RAG & Vector Databases",
      "Agentic AI, LangChain / LangGraph, Tool / Function Calling & MCP (Model Context Protocol)",
      "Multi-agent systems & autonomous decision workflows",
      "AWS / Azure / GCP Cloud Platforms & Docker containerization",
      "MLOps, CI/CD, model deployment, monitoring & evaluation",
      "HVAC domain concepts: Chillers, AHUs, pumps, cooling towers, VFDs, kW/TR, COP & building automation",
    ],
    responsibilities: [
      "Develop and deploy ML models for energy forecasting, anomaly detection, prediction, and optimization",
      "Build LLM, RAG, and Agentic AI applications for building and energy intelligence use cases",
      "Analyse BMS/EMS, HVAC, electrical, sensor, and energy time-series data",
      "Develop AI-driven insights, recommendations, and decision-support / supervisory control solutions",
      "Integrate AI solutions with databases, APIs, cloud platforms, and existing software systems",
      "Work closely with engineering and software teams to convert real-world building problems into scalable AI solutions",
    ],
    gains: [
      "Pioneer cutting-edge Agentic AI and cognitive building technology",
      "Direct impact on global decarbonization and enterprise energy optimization",
      "Hands-on work with real-world IoT sensor telemetry and industrial plant data",
      "Collaborate in an innovative, high-impact climate tech engineering team",
    ],
  },

  {
    title: "Energy Audit Engineer",
    subtitle: "Junior Engineer – Energy Audit",
    experience: "0–3 Years",
    qualification: "ITI / Diploma / B.E. / B.Tech in Mechanical, Electrical, Instrumentation, or Energy Engineering",
    type: "Full Time",
    location: "Chennai / Field-Based (Client Sites)",
    about: "Conduct industrial and commercial energy audits and field assessments covering electrical and mechanical utilities. Carry out measurements and data collection for equipment such as motors, pumps, compressors, chillers, HVAC, boilers, and transformers, and identify high-impact Energy Conservation Measures (ECMs).",
    requiredSkills: [
      "Knowledge of electrical and mechanical systems and industrial utilities",
      "Understanding of motors, pumps, compressors, chillers, HVAC systems, boilers, transformers & distribution",
      "Hands-on operation of audit instruments: power analyzers, clamp meters, thermal imaging cameras, ultrasonic leak detectors, flow meters",
      "Measurement of electrical parameters: kW, kVA, kWh, power factor, voltage, current & maximum demand",
      "MS Excel data analysis, energy calculations & technical report preparation",
      "Good client communication, site coordination, and field reporting skills",
      "Willingness to travel extensively to industrial customer sites across regions",
      "Adherence to industrial electrical safety and site procedures",
    ],
    preferredSkills: [
      "Knowledge of BEE / ASHRAE / ISO 50001 / IPMVP concepts and standards",
      "Basic understanding of BMS/EMS and digital energy monitoring systems",
      "Understanding of chiller performance (COP, kW/TR), compressor FAD, and motor loading",
      "Compressed air system audits & ultrasonic leak detection",
      "Basic knowledge of solar PV systems and renewable energy generation",
    ],
    responsibilities: [
      "Conduct comprehensive energy audits and field assessments at industrial and commercial facilities",
      "Carry out measurements and data collection for major utility equipment (motors, pumps, compressors, chillers, HVAC, boilers, transformers)",
      "Perform electrical measurements including voltage, current, kW, kVA, power factor, energy consumption, and maximum demand",
      "Assess motor loading, pump performance, compressor efficiency, and chiller operating conditions to identify optimization opportunities",
      "Conduct power quality measurements, thermography, and electrical system safety assessments",
      "Analyze energy consumption and operating patterns to identify Energy Conservation Measures (ECMs)",
      "Support Measurement & Verification (M&V) by comparing pre- and post-implementation equipment performance",
      "Prepare detailed audit reports, measurement data sheets, calculations, energy-saving estimates, and payback analysis",
      "Ensure proper handling, calibration, and safe operation of energy audit testing instruments",
    ],
    gains: [
      "Hands-on experience with industrial energy audits & electrical safety audits",
      "Direct involvement in Energy Management System (EMS) implementation and commissioning",
      "Mastery of industrial measuring instruments, thermal imaging, and power analyzers",
      "Extensive exposure to large manufacturing plants and commercial facilities",
    ],
  },

  {
    title: "Content Strategist",
    subtitle: "B2B Content / Tech Storytelling / Brand Strategy",
    experience: "2–5 Years",
    qualification: "Degree in Marketing, Communications, Journalism, English, or related field",
    type: "Full Time",
    location: "Chennai (Tambaram) / Hybrid",
    about: "Sustainabyte Technologies is looking for a Content Strategist who can turn complex AI, IoT, Energy, and Sustainability concepts into clear, engaging content that builds our brand and attracts customers and talent.",
    requiredSkills: [
      "2–5 years of experience in content strategy / content marketing",
      "Strong writing, storytelling, and communication skills",
      "Ability to understand and simplify technical concepts",
      "Creative, proactive, and data-driven mindset",
      "Experience executing content strategies across LinkedIn, website, blogs, and campaigns",
    ],
    preferredSkills: [
      "Experience with B2B / climate-tech / SaaS technology content",
      "Understanding of AI, IoT, Smart Buildings, Energy & ClimateTech domains",
      "Familiarity with SEO best practices and content distribution channels",
      "Track record in analyzing content metrics to improve engagement",
    ],
    responsibilities: [
      "Develop and execute content strategies across LinkedIn, website, blogs, and campaigns",
      "Create compelling content around AI, IoT, Smart Buildings, Energy & ClimateTech",
      "Translate complex technical concepts into simple, engaging stories for B2B decision-makers",
      "Work closely with Sales, Product, and Technical teams to create business-focused content",
      "Track content performance and continuously improve reach and engagement",
    ],
    gains: [
      "Shape the brand voice and messaging of a high-growth climate-tech startup",
      "Work directly on cutting-edge AI, IoT, and sustainability innovations",
      "Close collaboration with executive leadership and cross-functional teams",
      "High-impact role driving inbound pipeline, audience reach, and talent attraction",
    ],
  },

  {
    title: "AutoCAD 3D Design & Graphics Engineer",
    subtitle: "2D & 3D CAD / MEP Layouts / Project Visualizations",
    experience: "0–1 Years (Freshers Welcome)",
    qualification: "Diploma / B.E. / B.Tech in Mechanical, Electrical, Civil, Mechatronics, or related engineering discipline",
    type: "Full Time",
    location: "Chennai (Tambaram) / On-site",
    about: "We are looking for a fresher with good AutoCAD 2D/3D knowledge to join our engineering design team. The candidate will support the preparation of technical drawings, 3D models, layouts, and project presentation graphics for BMS, HVAC, electrical, and building automation projects.",
    requiredSkills: [
      "Good knowledge of AutoCAD 2D & 3D",
      "Basic understanding of 3D modeling and visualization",
      "Ability to read and understand technical engineering drawings",
      "Basic knowledge of dimensions, layers, blocks, symbols, and drawing standards",
      "Good visualization and design skills",
      "Willingness to learn engineering systems such as BMS, HVAC, MEP, and electrical systems",
      "Good communication, teamwork, and strong attention to detail",
    ],
    preferredSkills: [
      "AutoCAD certification or academic/project experience in 3D modeling",
      "Exposure to 3D modeling tools (Revit, SketchUp, SolidWorks, or 3ds Max)",
      "Basic understanding of MEP (Mechanical, Electrical, Plumbing) services",
      "Familiarity with building automation and control panel layouts",
    ],
    responsibilities: [
      "Prepare 2D and 3D drawings using AutoCAD",
      "Create 3D models of equipment, control panels, HVAC systems, and installations",
      "Prepare layouts, elevations, sections, and basic engineering drawings",
      "Convert engineering concepts and sketches into CAD drawings",
      "Assist senior engineers in preparing project drawings and documentation",
      "Make drawing modifications based on project requirements",
      "Maintain proper layers, dimensions, blocks, symbols, and drawing standards",
      "Prepare basic 3D visualizations and graphics for project presentations",
      "Coordinate with engineering and project teams to update drawings",
      "Learn and understand BMS, HVAC, electrical, and MEP drawings",
    ],
    gains: [
      "Hands-on experience in 2D/3D drafting for smart buildings and industrial facilities",
      "Direct mentorship from senior engineering and automation architects",
      "Exposure to real-world industrial MEP and building automation projects",
      "Rapid career growth into digital twin design and technical visualization",
    ],
  },

  {
    title: "Junior Field Engineer – Compressed Air System",
    subtitle: "Acoustic Leak Surveys / Energy Auditing / Field Rectification",
    experience: "0–1 Years",
    qualification: "ITI / Diploma in Mechanical / B.E. Instrumentation Engineering",
    type: "Full Time",
    location: "Field-Based (Multiple Client Sites) / Chennai",
    about: "Conduct compressed air leak surveys using an Acoustic Imager, quantify leak rates, assess associated energy losses, coordinate leak rectification, verify repairs through post-audit inspections, and prepare detailed audit reports with energy-saving recommendations across industrial customer facilities.",
    requiredSkills: [
      "Basic knowledge of compressed air systems, compressors, air dryers, and distribution networks",
      "Ability to operate Acoustic Imagers or ultrasonic leak detection instruments",
      "Understanding of pneumatic components such as valves, FRLs, hoses, couplings, and actuators",
      "Knowledge of MS Excel, data collection, and report preparation",
      "Willingness to travel to industrial customer sites across regions",
      "Adherence to industrial safety protocols and site procedures",
    ],
    preferredSkills: [
      "Hands-on experience in pneumatic maintenance or compressed air pipe installation",
      "Understanding of compressor efficiency, FAD (Free Air Delivery), and pressure drop analysis",
      "Knowledge of industrial energy efficiency and ECMs (Energy Conservation Measures)",
    ],
    responsibilities: [
      "Conduct compressed air leak surveys using an Acoustic Imager and identify leak locations across the compressed air distribution system",
      "Quantify leak rates, assess associated energy losses, and prioritize leaks based on severity and savings potential",
      "Coordinate and perform leak rectification activities, including tightening fittings, replacing damaged components, and ensuring effective leak arresting",
      "Verify the effectiveness of repairs through post-audit inspections and leak re-measurements",
      "Prepare audit reports, document findings, estimate energy savings, and submit detailed recommendations for continuous improvement of compressed air systems",
      "Provide regular updates to the supervisor on audit progress, leak rectification status, site observations, and daily activities",
    ],
    gains: [
      "Hands-on experience with cutting-edge Acoustic Imagers and industrial leak detection tech",
      "Direct involvement in major industrial energy conservation and efficiency projects",
      "Extensive field exposure across manufacturing and automotive plants",
      "Accelerated career pathway in industrial energy auditing and utility management",
    ],
  },

  {
    title: "B2B SaaS Sales & Business Development Executive",
    subtitle: "SaaS Sales / Enterprise Outreach / Client Acquisition",
    experience: "1–3 Years",
    qualification: "Degree in Business, Marketing, Engineering, or related field",
    type: "Full Time",
    location: "Chennai (Tambaram) / On-site & Field",
    about: "We are looking for a proactive and result-oriented B2B SaaS Sales & Business Development Executive to support sales growth for our software and digital solutions. The role involves identifying prospects, meeting customers, conducting product demos, creating proposals, following up on leads, and converting opportunities into business. Best suited for someone comfortable with field sales, in-person meetings, client relationship building, and startup-style execution.",
    requiredSkills: [
      "1–3 years of experience in B2B sales, SaaS sales, software sales, or business development",
      "Good understanding of B2B customer engagement and sales cycles",
      "Strong communication, presentation, and interpersonal skills",
      "Ability to conduct face-to-face meetings and deliver impactful product demos",
      "Good follow-up discipline and negotiation skills",
      "Comfortable working in a startup environment with self-motivated attitude",
      "Willingness to travel within Chennai and other locations for customer meetings",
      "Fluency in English and Tamil preferred",
      "Basic knowledge of MS Office, Google Workspace, CRM tools, and LinkedIn prospecting",
    ],
    preferredSkills: [
      "Experience in selling CMMS, ERP, EMS, IoT, facility management software, or industrial software",
      "Familiarity with enterprise accounts in commercial buildings, IT parks, manufacturing, and hospitals",
      "Curiosity to learn SaaS, energy management, and climate-tech solutions",
      "Channel partner and vendor relationship development experience",
    ],
    responsibilities: [
      "Generate new business leads through cold calls, LinkedIn outreach, email campaigns, referrals, and field visits",
      "Identify and approach customers in commercial buildings, industries, facility management companies, hospitals, hotels, IT parks, and manufacturing units",
      "Promote SaaS and digital solutions such as CMMS, ERP, EMS, IoT monitoring, and energy management platforms",
      "Schedule and conduct in-person customer meetings and product demonstrations",
      "Understand customer pain points and position the right solution",
      "Prepare and share proposals, quotations, presentations, and follow-up communications",
      "Maintain regular follow-up with prospects and customers to move opportunities through the sales pipeline",
      "Coordinate with technical and product teams for demos, solution discussions, and customer clarifications",
      "Support channel partner, consultant, and vendor relationship development",
      "Maintain CRM records, sales pipeline, meeting reports, and weekly sales updates",
      "Take ownership of sales targets and contribute to revenue growth",
    ],
    gains: [
      "Opportunity to work with a growing climate-tech and AIoT startup",
      "Exposure to B2B SaaS, CMMS, EMS, energy management, and industrial digital transformation",
      "Direct customer interaction with commercial and industrial clients",
      "Learning opportunity in consultative selling and solution-based sales",
      "High-growth career path based on performance with attractive incentives",
    ],
  },

  {
    title: "Executive / Sr. Executive – Sales Engineer",
    subtitle: "Technical Sales / IoT, BMS & Energy Management / Account Acquisition",
    experience: "1–4 Years",
    qualification: "Bachelor's degree in Engineering (Electrical / Mechanical / EEE / ECE / Instrumentation or related field)",
    type: "Full Time",
    location: "Chennai (Tambaram) / On-site & Field",
    about: "We are looking for a dynamic and result-driven Sales Engineer who can bridge the gap between technical solutions and client needs. The ideal candidate will play a key role in driving revenue growth by promoting Sustainabyte's IoT, BMS, and Energy Management solutions while building strong client relationships across industries.",
    requiredSkills: [
      "Bachelor's degree in Engineering (Electrical / Mechanical / EEE / ECE / Instrumentation or related)",
      "1–4 years of experience in technical sales / B2B sales / industrial or IoT solutions",
      "Strong understanding of BMS, EMS, IoT, HVAC systems, or industrial automation (preferred)",
      "Excellent communication, presentation, and negotiation skills",
      "Ability to understand technical concepts and translate them into clear business value",
      "Strong client-facing and relationship management skills",
      "Willingness to travel for client meetings and site visits",
      "Consultative selling approach with target-driven mindset",
    ],
    preferredSkills: [
      "Proven track record in account expansion, repeat business, and upselling",
      "Experience with commercial facilities, manufacturing plants, and industrial utilities",
      "Knowledge of solution pricing, market trends, and competitor offerings in IoT & EMS",
      "Experience with vendor development and strategic channel alliances",
    ],
    responsibilities: [
      "Aggressively drive new business acquisition and expand existing accounts to achieve/exceed sales targets",
      "Proactively hunt, qualify, and convert leads through continuous networking and market outreach",
      "Analyze customer needs and effectively position Sustainabyte's IoT and energy solutions",
      "Explore and develop new business opportunities in the IoT and smart building ecosystem",
      "Deliver high-impact presentations, demos, and solution pitches to influence decision-makers and close deals faster",
      "Conduct site visits and requirement analysis to accelerate proposal turnaround and deal closure",
      "Take complete ownership of the end-to-end sales cycle—from prospecting to negotiation to closure",
      "Build strong client relationships with a focus on repeat business, upselling, and cross-selling",
      "Maintain an active sales pipeline, forecasts, and conversion metrics with clear accountability to targets",
      "Collaborate with pre-sales and internal execution teams to ensure faster closures and seamless delivery",
      "Continuously identify new markets, partnerships, and revenue streams in IoT and smart buildings",
    ],
    gains: [
      "Work on cutting-edge IoT & energy optimization solutions",
      "Opportunity to engage with top industries and infrastructure projects",
      "High-growth environment with performance-driven incentives",
      "Be part of a mission-driven team focused on sustainability and innovation",
    ],
  },

  {
    title: "Pre-Sales Executive",
    subtitle: "Technical Proposals / Solution Mapping / Demos & RFQs",
    experience: "0–2 Years (Freshers Welcome)",
    qualification: "B.E. / B.Tech / Diploma in Electrical, Electronics, ECE, Instrumentation, Mechanical, Mechatronics or related fields",
    type: "Full Time",
    location: "Chennai (Tambaram) / On-site",
    about: "We are looking for a proactive and technically inclined Pre-Sales Executive to support our Sales & Business Development team in understanding customer requirements, preparing solutions and proposals, conducting product demonstrations and supporting business closures.",
    requiredSkills: [
      "B.E. / B.Tech / Diploma in Electrical, Electronics, ECE, Instrumentation, Mechanical, Mechatronics or related fields",
      "0–2 years of experience (freshers with strong technical aptitude welcome)",
      "Strong verbal and written communication skills",
      "Basic understanding of IoT, Automation, BMS, HVAC or Energy Management is preferred",
      "Good knowledge of MS Excel, PowerPoint, and Word",
      "Strong presentation, documentation, and problem-solving skills",
      "Ability to learn technical products quickly and communicate value propositions",
      "Proactive, customer-focused, self-motivated with an ownership mindset",
    ],
    preferredSkills: [
      "Experience preparing technical proposals, BOQs/BOMs, and Scope of Work (SOW)",
      "Familiarity with CRM systems and sales pipeline tracking",
      "Experience with inbound lead nurturing & LinkedIn outreach",
      "Market research on emerging trends in AIoT, SaaS, and energy efficiency",
    ],
    responsibilities: [
      "Understand and document customer requirements and operational pain points",
      "Map customer requirements to Sustainabyte's AI, IoT, Energy Management, BMS/EMS, HVAC and Smart Building solutions",
      "Prepare technical proposals, presentations, capability decks, quotations, MoUs, BOQ/BOM and Scope of Work",
      "Support customer meetings, product demonstrations and technical discussions",
      "Coordinate with Sales, Energy Services, IoT, BMS and Software teams",
      "Follow up on proposals and customer requirements until closure",
      "Support RFQs, tenders, and other business development activities",
      "Maintain and update CRM / sales trackers with accurate pipeline and opportunity records",
      "Conduct market research on industries, competitors, and emerging trends in AIoT, SaaS, and energy efficiency",
      "Support marketing initiatives such as events, webinars, LinkedIn campaigns, and partnerships",
    ],
    gains: [
      "Master the intersection of IoT engineering solutions and enterprise sales",
      "Direct mentorship from technical architects and commercial sales leaders",
      "Multi-domain exposure across AI, IoT, BMS, HVAC, and energy decarbonization",
      "High-visibility role with rapid advancement into senior solution consulting",
    ],
  },
];

const internships = [
  {
    title: "Software Developer Intern",
    icon: Code2,
    stack: "Python / Next.js / SQL | Full Stack Development",
    location: "Chennai (Tambaram) (Hybrid / Onsite)",
    duration: "3–6 Months",
    eligibility: "Fresher / Final Year Students",
    about: "We are looking for a passionate Software Developer Intern who is eager to learn and build modern web applications. The ideal candidate should have a good understanding of Python, Next.js, and SQL. Exposure to .NET and Flutter will be an added advantage.",
    requiredSkills: ["Python", "Next.js", "SQL (Database Design, Queries, Joins)", "HTML, CSS, JavaScript", "Git & GitHub", "Basic understanding of REST APIs"],
    preferredSkills: [".NET / ASP.NET Core", "Flutter", "Firebase", "MongoDB", "Cloud platforms (AWS/Azure)"],
    responsibilities: [
      "Develop and maintain web applications using Python and Next.js",
      "Design and optimize SQL database queries",
      "Build and consume REST APIs",
      "Collaborate with the development team on new features and bug fixes",
      "Participate in code reviews and testing activities",
      "Learn and adopt software development best practices",
    ],
    eligibilityDetails: ["B.E./B.Tech, BCA, MCA, B.Sc (CS/IT) or related field", "Final-year students or recent graduates", "Strong problem-solving and analytical skills", "Good communication and teamwork skills"],
    gains: ["Hands-on experience in real-world software development", "Exposure to full-stack application development", "Mentorship from experienced developers", "Opportunity for a full-time role based on performance"],
    note: "We will hire the intern on roll after 3/6 months, who has the potential to grow in a StartUp environment.",
  },
  {
    title: "Energy Audit Intern",
    icon: Zap,
    stack: "Energy Services",
    location: "Chennai (Tambaram)",
    duration: "3–6 Months",
    eligibility: "Final Year / Recent Graduate",
    about: "Support industrial and commercial energy audits. Collect field data, document observations, and assist in EMS project implementation.",
    requiredSkills: ["Final-year or recently graduated B.E./B.Tech in Mechanical, Electrical, EEE, Energy Engineering, or Mechatronics", "Basic understanding of electrical systems, HVAC, pumps, compressors", "Knowledge of Microsoft Excel, Word, and PowerPoint", "Willingness to travel to industrial project sites"],
    preferredSkills: ["Strong analytical and problem-solving skills", "Good communication and documentation skills", "Ability to interpret energy consumption data", "Basic knowledge of EMS/BMS systems", "Eagerness to learn industrial energy efficiency practices"],
    responsibilities: [
      "Assist in conducting industrial and commercial Energy Audits",
      "Support Electrical Safety Audits by collecting field data and documenting observations",
      "Perform on-site measurements using power analyzers, lux meters, thermal cameras, etc.",
      "Verify and validate Energy Meter readings with the EMS dashboard",
      "Analyze energy consumption data and identify discrepancies",
      "Assist in EMS project implementation, including meter installation and commissioning",
      "Prepare audit data sheets, equipment inventories, and measurement records",
      "Identify potential energy conservation opportunities and assist in savings calculations",
      "Coordinate with clients and internal teams during site visits",
    ],
    eligibilityDetails: ["Final-year or recently graduated in Mechanical / Electrical / EEE / Energy Engineering / Mechatronics", "Willingness to travel to industrial project sites"],
    gains: ["Industrial Energy Audits", "Electrical Safety Audits", "Energy Management System (EMS) Implementation", "Power Quality Measurements", "HVAC and Utility System Analysis", "Technical Report Preparation"],
    note: "",
  },
  {
    title: "Sales Intern",
    icon: BarChart2,
    stack: "Business Development / B2B Tech Sales",
    location: "Chennai (Tambaram)",
    duration: "3–6 Months",
    eligibility: "Pursuing / Recently Completed Any Degree",
    about: "We are looking for a proactive and enthusiastic Sales Intern to support our business development activities. This role offers hands-on experience in lead generation, customer engagement, market research, and B2B sales.",
    requiredSkills: [
      "Pursuing or recently completed a degree in Business, Marketing, Commerce, Engineering, or a related field",
      "Strong communication and interpersonal skills",
      "Eagerness to learn and grow in sales and business development",
    ],
    preferredSkills: [
      "Willingness to go to market and develop business opportunities",
      "Basic MS Office knowledge (Excel, PowerPoint, Word)",
      "Smart, confident & self-motivated mindset",
    ],
    responsibilities: [
      "Generate and qualify potential leads",
      "Reach out to prospects via calls, emails, and LinkedIn",
      "Schedule meetings and product demos for the sales team",
      "Conduct market and competitor research",
      "Maintain customer records and sales reports",
      "Support sales campaigns and follow-up activities",
      "Willingness to go to market and develop business opportunities",
    ],
    eligibilityDetails: [
      "Pursuing or recently completed a degree in Business, Marketing, Commerce, Engineering, or a related field",
      "Strong communication and interpersonal skills",
    ],
    gains: [
      "Exposure to B2B sales and business development",
      "Hands-on experience with CRM and sales processes",
      "Mentorship from experienced professionals",
      "Opportunity for a full-time role based on performance",
    ],
    note: "Duration: 3–6 Months | Stipend: As per company policy. We offer full-time on-roll opportunities for interns demonstrating strong startup performance.",
  },
  {
    title: "Digital Marketing Intern",
    icon: Megaphone,
    stack: "Content & Marketing",
    location: "Chennai (Tambaram)",
    duration: "3–6 Months",
    eligibility: "Pursuing / Recently Completed – Marketing / Business",
    about: "A creative and enthusiastic Digital Marketing Intern to support online marketing initiatives including social media, SEO, content marketing, and campaign management.",
    requiredSkills: ["Basic knowledge of digital marketing and social media platforms", "Familiarity with Canva and Google Workspace", "Strong communication and creative skills", "Pursuing or recently completed a degree in Marketing, Business, or related field"],
    preferredSkills: ["Knowledge of SEO basics", "Content writing skills", "Experience with any social media scheduling tools"],
    responsibilities: [
      "Create and manage social media content",
      "Assist in digital marketing campaigns",
      "Design basic creatives using Canva",
      "Support SEO, website updates, and content marketing",
      "Track campaign performance and prepare reports",
    ],
    eligibilityDetails: ["Pursuing or recently completed a degree in Marketing, Business, or related field", "Basic knowledge of digital marketing and social media platforms"],
    gains: ["Hands-on experience in digital marketing", "Exposure to technology and SaaS marketing", "Mentorship and career growth opportunities"],
    note: "We will hire the intern on roll after 3/6 months, who has the potential to grow in a StartUp environment.",
  },
  {
    title: "Energy Engineer Intern",
    icon: Zap,
    stack: "Energy Management / Sustainability",
    location: "Chennai (Tambaram), India",
    duration: "3–6 Months",
    eligibility: "Pursuing / Recently Completed – Mechanical / Electrical / Energy Engineering",
    about: "A motivated and detail-oriented Energy Engineer Intern to support energy efficiency and sustainability initiatives. Assist in analyzing energy consumption, identifying savings opportunities, and supporting implementation of energy conservation measures across facilities.",
    requiredSkills: ["Pursuing or recently completed a degree in Mechanical / Electrical / Energy Engineering or related field", "Basic understanding of energy systems (HVAC, boilers, chillers, etc.)", "Knowledge of MS Excel and data analysis", "Strong analytical and problem-solving skills", "Good communication and teamwork abilities"],
    preferredSkills: ["Familiarity with BMS/EMS systems", "Interest in sustainability and energy efficiency", "Eagerness to work on live projects"],
    responsibilities: [
      "Assist in monitoring and analyzing energy consumption data (electricity, fuel, water)",
      "Support energy audits and site inspections",
      "Identify potential energy conservation measures (ECMs)",
      "Prepare reports on energy performance and savings opportunities",
      "Assist in HVAC, lighting, and utility system analysis",
      "Work on data collection from meters, sensors, and BMS systems",
      "Support implementation of energy efficiency projects",
      "Maintain documentation and track project progress",
    ],
    eligibilityDetails: ["Pursuing or recently completed a degree in Mechanical / Electrical / Energy Engineering or related field", "Basic understanding of energy systems (HVAC, boilers, chillers, etc.)"],
    gains: ["Hands-on experience in energy audits and real-time monitoring", "Exposure to industrial and commercial energy systems", "Practical understanding of energy conservation strategies", "Opportunity to work on live projects and sustainability initiatives"],
    note: "Stipend based on profile and experience.",
  },
];

export default function CareersPage() {
  const [activeJob, setActiveJob] = useState<number | null>(null);
  const [activeIntern, setActiveIntern] = useState<number | null>(null);
  const [jobTab, setJobTab] = useState<"fulltime" | "internship">("fulltime");
  const [selectedPosition, setSelectedPosition] = useState("");

  const handleApplyClick = (position: string) => {
    setSelectedPosition(position);
    const element = document.getElementById('apply');
    if (element) {
      const offset = 100; // Offset for header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      const validTypes = [".pdf", ".doc", ".docx"];
      const extension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();

      if (validTypes.includes(extension)) {
        if (file.size <= 5 * 1024 * 1024) {
          setSelectedFile(file);
        } else {
          toast.error("File size exceeds 5MB limit.");
        }
      } else {
        toast.error("Invalid file type. Please upload PDF, DOC, or DOCX.");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const loadingToast = toast.loading("Submitting your application...");

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData();

    formData.append("type", "career");
    formData.append("name", (form.elements.namedItem("applicant-name") as HTMLInputElement).value);
    formData.append("email", (form.elements.namedItem("applicant-email") as HTMLInputElement).value);
    formData.append("mobile", (form.elements.namedItem("mobile") as HTMLInputElement).value);
    formData.append("position", (form.elements.namedItem("applying-position") as HTMLSelectElement).value);
    formData.append("experience", (form.elements.namedItem("experience") as HTMLSelectElement).value);
    formData.append("linkedin", (form.elements.namedItem("linkedin-url") as HTMLInputElement).value);
    formData.append("message", (form.elements.namedItem("cover-letter") as HTMLTextAreaElement).value);

    if (selectedFile) {
      formData.append("resume", selectedFile);
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Application submitted successfully!", { id: loadingToast });
        form.reset();
        setSelectedPosition("");
        setSelectedFile(null);
      } else {
        const errorData = await response.json();
        toast.error(errorData.error || "Something went wrong.", { id: loadingToast });
      }
    } catch (error) {
      toast.error("Error sending application.", { id: loadingToast });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0D1B3E] min-h-screen text-white overflow-x-hidden">

      {/* ── SECTION 1: HERO ── */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Careers/career .webp"
            alt="Careers Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E] via-[#0D1B3E]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B3E]/70 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-l from-[#0D1B3E]/40 via-transparent to-transparent" />
          <div className="absolute inset-0 mesh-gradient opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase bg-[#3DD68C]/10 text-[#3DD68C] border border-[#3DD68C]/20 mb-8">
              <Building className="w-4 h-4" /> Join Sustainabyte
            </span>
            <h1 className="font-[family-name:var(--font-sora)] text-4xl md:text-7xl font-black mb-8 leading-[1.1]">
              <span className="text-white">Build the</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3DD68C] to-[#2bc478]">Future</span>
            </h1>
            <p className="text-[#B0BEC5] text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl">
              Join our team of innovators creating AI-powered industrial and digital solutions to drive <span className="text-white font-bold italic">global sustainability</span>.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <GreenButton href="#jobs">View Open Positions</GreenButton>
              <button
                onClick={() => handleApplyClick("")}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold transition-all backdrop-blur-md flex items-center gap-2 text-white shadow-lg"
              >
                Apply now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: WHY JOIN US ── */}
      <section className="py-24 bg-[#0D1B3E] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#3DD68C]/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-[family-name:var(--font-sora)] text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Why Work With <span className="text-[#3DD68C]">Us</span>
            </motion.h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Experience a culture built on innovation, continuous learning, and <span className="text-[#3DD68C] font-semibold">impactful work</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyJoinUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -12 }}
                className="p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(61,214,140,0.1)] transition-all duration-500 group relative overflow-hidden h-full text-center"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#3DD68C]/5 rounded-bl-[4rem] group-hover:bg-[#3DD68C]/10 transition-colors" />
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                  className="w-16 h-16 rounded-2xl bg-[#3DD68C]/10 flex items-center justify-center mb-8 relative z-10 mx-auto"
                >
                  <item.icon className="w-8 h-8 text-[#3DD68C]" />
                </motion.div>
                <h3 className="font-[family-name:var(--font-sora)] text-xl md:text-2xl font-bold text-[#0D1B3E] mb-4 relative z-10">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: OPEN POSITIONS ── */}
      <section id="jobs" className="py-24 bg-[#F8FAFC] relative overflow-hidden border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-[family-name:var(--font-sora)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D1B3E] mb-6"
            >
              Open <span className="text-[#3DD68C]">Positions</span>
            </motion.h2>
            <p className="text-gray-500 text-lg">Join us in building the next generation of industrial software.</p>
          </div>

          {/* Tab Toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-2xl p-1.5 shadow-sm">
              <button
                onClick={() => setJobTab("fulltime")}
                className={`px-7 py-3 rounded-xl text-sm font-bold transition-all ${
                  jobTab === "fulltime"
                    ? "bg-[#0D1B3E] text-white shadow-md"
                    : "text-gray-500 hover:text-[#0D1B3E]"
                }`}
              >
                Full-Time Roles ({jobs.length})
              </button>
              <button
                onClick={() => setJobTab("internship")}
                className={`px-7 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${
                  jobTab === "internship"
                    ? "bg-[#3DD68C] text-[#0D1B3E] shadow-md"
                    : "text-gray-500 hover:text-[#0D1B3E]"
                }`}
              >
                <GraduationCap className="w-4 h-4" /> Internships ({internships.length})
              </button>
            </div>
          </div>

          {/* Full-Time Jobs */}
          <AnimatePresence mode="wait">
            {jobTab === "fulltime" && (
              <motion.div
                key="fulltime"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                {jobs.map((job, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-[2rem] border border-gray-100 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(61,214,140,0.08)] transition-all overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveJob(activeJob === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-8 text-left transition-colors focus:outline-none"
                    >
                      <div>
                        <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                          <h3 className="text-2xl font-bold text-[#0D1B3E]">{job.title}</h3>
                          <span className="px-3 py-0.5 rounded-full bg-[#0D1B3E]/8 text-[#0D1B3E] text-xs font-bold border border-[#0D1B3E]/15">{job.type}</span>
                        </div>
                        {"subtitle" in job && Boolean(job.subtitle) && (
                          <p className="text-sm text-gray-500 font-medium mb-2.5">{job.subtitle}</p>
                        )}
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 font-medium">
                          <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-[#3DD68C]" /> {job.experience}</span>
                          <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#3DD68C]" /> {job.location}</span>
                          {"qualification" in job && Boolean(job.qualification) && (
                            <span className="flex items-center gap-1.5"><GraduationCap className="w-4 h-4 text-[#3DD68C]" /> {job.qualification}</span>
                          )}
                        </div>
                      </div>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${activeJob === idx ? 'bg-[#3DD68C] text-white' : 'bg-gray-100 text-gray-400'}`}>
                        <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${activeJob === idx ? "rotate-180" : ""}`} />
                      </div>
                    </button>
                    <AnimatePresence>
                      {activeJob === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="border-t border-gray-100 bg-[#F8FAFC]"
                        >
                          <div className="p-8 space-y-8">
                            {/* About */}
                            <div>
                              <h4 className="text-sm font-bold text-[#0D1B3E] uppercase tracking-widest mb-3">About the Role</h4>
                              <p className="text-gray-600 leading-relaxed">{job.about}</p>
                            </div>

                            {"mandatoryStack" in job && Boolean(job.mandatoryStack) && (
                              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#3DD68C]/10 to-[#00FFAA]/5 border border-[#3DD68C]/25">
                                <h5 className="text-xs font-bold uppercase tracking-wider text-[#0D1B3E] mb-1.5 flex items-center gap-2">
                                  <Code2 className="w-4 h-4 text-[#3DD68C]" /> Mandatory Tech Stack
                                </h5>
                                <p className="text-sm font-bold text-[#0D1B3E]">{job.mandatoryStack}</p>
                              </div>
                            )}

                            {"qualification" in job && Boolean(job.qualification) && (
                              <div>
                                <h4 className="text-sm font-bold text-[#0D1B3E] uppercase tracking-widest mb-2 flex items-center gap-2">
                                  <GraduationCap className="w-4 h-4 text-[#3DD68C]" /> Eligibility / Qualification
                                </h4>
                                <p className="text-gray-700 leading-relaxed font-semibold">{job.qualification}</p>
                              </div>
                            )}

                            <div className="grid md:grid-cols-2 gap-8">
                              {/* Required Skills */}
                              <div>
                                <h4 className="text-sm font-bold text-[#0D1B3E] uppercase tracking-widest mb-3">Required Skills</h4>
                                <ul className="space-y-2">
                                  {job.requiredSkills.map((s: string, i: number) => (
                                    <li key={i} className="flex items-start gap-2.5 text-gray-600 text-sm">
                                      <span className="mt-1 w-4 h-4 rounded-full bg-[#3DD68C]/15 text-[#3DD68C] flex items-center justify-center flex-shrink-0 text-[10px] font-bold">✓</span>
                                      {s}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Preferred Skills */}
                              <div>
                                <h4 className="text-sm font-bold text-[#0D1B3E] uppercase tracking-widest mb-3">Preferred Skills</h4>
                                <ul className="space-y-2">
                                  {job.preferredSkills.map((s: string, i: number) => (
                                    <li key={i} className="flex items-start gap-2.5 text-gray-500 text-sm">
                                      <span className="mt-1 w-4 h-4 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center flex-shrink-0 text-[10px] font-bold">+</span>
                                      {s}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Responsibilities */}
                            <div>
                              <h4 className="text-sm font-bold text-[#0D1B3E] uppercase tracking-widest mb-3">Responsibilities</h4>
                              <ul className="space-y-2">
                                {job.responsibilities.map((r: string, i: number) => (
                                  <li key={i} className="flex items-start gap-2.5 text-gray-600 text-sm">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3DD68C] flex-shrink-0" />
                                    {r}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* What You'll Gain */}
                            <div>
                              <h4 className="text-sm font-bold text-[#0D1B3E] uppercase tracking-widest mb-3">What You&apos;ll Gain</h4>
                              <div className="flex flex-wrap gap-2">
                                {job.gains.map((g: string, i: number) => (
                                  <span key={i} className="px-3 py-1.5 rounded-full bg-[#3DD68C]/10 text-[#3DD68C] text-xs font-semibold border border-[#3DD68C]/20">{g}</span>
                                ))}
                              </div>
                            </div>

                            <GreenButton onClick={() => handleApplyClick(job.title)}>Apply Now</GreenButton>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Internship Listings */}
            {jobTab === "internship" && (
              <motion.div
                key="internship"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                {internships.map((intern, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-[2rem] border border-gray-100 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(61,214,140,0.1)] transition-all overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveIntern(activeIntern === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-8 text-left transition-colors focus:outline-none"
                    >
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-[#3DD68C]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <intern.icon className="w-6 h-6 text-[#3DD68C]" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1 flex-wrap">
                            <h3 className="text-xl font-bold text-[#0D1B3E]">{intern.title}</h3>
                            <span className="px-3 py-0.5 rounded-full bg-[#3DD68C]/10 text-[#3DD68C] text-xs font-bold border border-[#3DD68C]/20">Internship</span>
                          </div>
                          <p className="text-sm text-gray-400 font-medium mb-2">{intern.stack}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500 font-medium">
                            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#3DD68C]" /> {intern.location}</span>
                            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#3DD68C]" /> {intern.duration}</span>
                            <span className="flex items-center gap-1.5"><GraduationCap className="w-4 h-4 text-[#3DD68C]" /> {intern.eligibility}</span>
                          </div>
                        </div>
                      </div>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${activeIntern === idx ? 'bg-[#3DD68C] text-white' : 'bg-gray-100 text-gray-400'}`}>
                        <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${activeIntern === idx ? "rotate-180" : ""}`} />
                      </div>
                    </button>

                    <AnimatePresence>
                      {activeIntern === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="border-t border-gray-100 bg-[#F8FAFC]"
                        >
                          <div className="p-8 space-y-8">
                            {/* About */}
                            <div>
                              <h4 className="text-sm font-bold text-[#0D1B3E] uppercase tracking-widest mb-3">About the Role</h4>
                              <p className="text-gray-600 leading-relaxed">{intern.about}</p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                              {/* Required Skills */}
                              <div>
                                <h4 className="text-sm font-bold text-[#0D1B3E] uppercase tracking-widest mb-3">Required Skills</h4>
                                <ul className="space-y-2">
                                  {intern.requiredSkills.map((s, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-gray-600 text-sm">
                                      <span className="mt-1 w-4 h-4 rounded-full bg-[#3DD68C]/15 text-[#3DD68C] flex items-center justify-center flex-shrink-0 text-[10px] font-bold">✓</span>
                                      {s}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Preferred Skills */}
                              {intern.preferredSkills.length > 0 && (
                                <div>
                                  <h4 className="text-sm font-bold text-[#0D1B3E] uppercase tracking-widest mb-3">Preferred Skills</h4>
                                  <ul className="space-y-2">
                                    {intern.preferredSkills.map((s, i) => (
                                      <li key={i} className="flex items-start gap-2.5 text-gray-500 text-sm">
                                        <span className="mt-1 w-4 h-4 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center flex-shrink-0 text-[10px] font-bold">+</span>
                                        {s}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>

                            {/* Responsibilities */}
                            <div>
                              <h4 className="text-sm font-bold text-[#0D1B3E] uppercase tracking-widest mb-3">Responsibilities</h4>
                              <ul className="space-y-2">
                                {intern.responsibilities.map((r, i) => (
                                  <li key={i} className="flex items-start gap-2.5 text-gray-600 text-sm">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3DD68C] flex-shrink-0" />
                                    {r}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* What You'll Gain */}
                            <div>
                              <h4 className="text-sm font-bold text-[#0D1B3E] uppercase tracking-widest mb-3">What You&apos;ll Gain</h4>
                              <div className="flex flex-wrap gap-2">
                                {intern.gains.map((g, i) => (
                                  <span key={i} className="px-3 py-1.5 rounded-full bg-[#3DD68C]/10 text-[#3DD68C] text-xs font-semibold border border-[#3DD68C]/20">{g}</span>
                                ))}
                              </div>
                            </div>

                            {/* Note */}
                            {intern.note && (
                              <p className="text-xs text-gray-400 italic border-l-2 border-[#3DD68C]/30 pl-4">{intern.note}</p>
                            )}

                            <GreenButton onClick={() => handleApplyClick(intern.title)}>Apply Now</GreenButton>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── SECTION 4: INTERNSHIP PROGRAM ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 relative aspect-video md:aspect-square rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] bg-white"
          >
            <Image
              src="/Careers/teams.avif"
              alt="Sustainabyte Team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#3DD68C]/10 to-transparent" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="font-[family-name:var(--font-sora)] text-3xl md:text-5xl font-bold text-[#0D1B3E] mb-6">
              Start Your <span className="text-[#3DD68C]">Tech Career</span> With Us
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed mb-10">
              Our internship program offers hands-on experience, mentorship from industry experts, and a pathway to a full-time career.
            </p>
            <ul className="space-y-4 mb-10">
              {['Real-world industrial projects', '1-on-1 Mentorship', 'Comprehensive training support', 'Pre-placement offers for top performers'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-gray-600 font-medium text-lg">
                  <div className="w-8 h-8 rounded-full bg-[#3DD68C]/10 flex items-center justify-center text-[#3DD68C] border border-[#3DD68C]/20">✓</div>
                  {item}
                </li>
              ))}
            </ul>
            <GreenButton onClick={() => handleApplyClick("Internship")}>Apply for Internship</GreenButton>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 5: RESUME UPLOAD FORM ── */}
      {/* ── SECTION 4: QUOTE ── */}
      <section className="py-24 bg-[#0D1B3E] relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#3DD68C] blur-[120px] rounded-full" />
          <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-blue-500 blur-[120px] rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="font-[family-name:var(--font-sora)] text-3xl md:text-5xl font-bold text-white mb-8 italic"
          >
            "We aren't just building products; we're crafting the future of industrial intelligence."
          </motion.h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-[2px] bg-[#3DD68C]" />
            <span className="text-[#3DD68C] font-bold tracking-widest uppercase">The Sustainabyte Vision</span>
            <div className="w-12 h-[2px] bg-[#3DD68C]" />
          </div>
        </div>
      </section>

      {/* ── SECTION 5: APPLY NOW FORM ── */}
      <section className="relative py-24 overflow-hidden" id="apply">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Careers/career .webp"
            alt="Apply Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gray-800/80 backdrop-blur-[2px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto p-10 md:p-16 rounded-[3rem] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <div className="text-center mb-12">
              <h2 className="font-[family-name:var(--font-sora)] text-4xl font-bold text-[#0D1B3E] mb-4">Apply Now</h2>
              <p className="text-gray-500 text-lg">Send us your details and we'll get back to you soon.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Full Name</label>
                <input name="applicant-name" type="text" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[#0D1B3E] placeholder-gray-400 focus:outline-none focus:border-[#3DD68C] focus:bg-white transition-all" placeholder="John Doe" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Email Address</label>
                  <input name="applicant-email" type="email" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[#0D1B3E] placeholder-gray-400 focus:outline-none focus:border-[#3DD68C] focus:bg-white transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Mobile Number</label>
                  <input name="mobile" type="tel" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[#0D1B3E] placeholder-gray-400 focus:outline-none focus:border-[#3DD68C] focus:bg-white transition-all" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Applying Position</label>
                  <select
                    name="applying-position"
                    value={selectedPosition}
                    onChange={(e) => setSelectedPosition(e.target.value)}
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[#0D1B3E] focus:outline-none focus:border-[#3DD68C] focus:bg-white transition-all"
                  >
                    <option value="">Select a position</option>
                    <optgroup label="Full-Time Roles">
                      {jobs.map(job => (
                        <option key={job.title} value={job.title}>{job.title}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Internships">
                      {internships.map(intern => (
                        <option key={intern.title} value={intern.title}>{intern.title}</option>
                      ))}
                    </optgroup>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Experience</label>
                  <select name="experience" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[#0D1B3E] focus:outline-none focus:border-[#3DD68C] focus:bg-white transition-all">
                    <option value="">Years of experience</option>
                    <option value="Fresher">Fresher</option>
                    <option value="1-2 Years">1-2 Years</option>
                    <option value="3-5 Years">3-5 Years</option>
                    <option value="5+ Years">5+ Years</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">LinkedIn Profile URL</label>
                <input name="linkedin-url" type="url" required className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[#0D1B3E] placeholder-gray-400 focus:outline-none focus:border-[#3DD68C] focus:bg-white transition-all" placeholder="https://linkedin.com/in/johndoe" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Cover Letter (Optional)</label>
                <textarea name="cover-letter" rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 text-[#0D1B3E] placeholder-gray-400 focus:outline-none focus:border-[#3DD68C] focus:bg-white transition-all resize-none" placeholder="Tell us why you'd be a great fit..."></textarea>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Upload Resume</label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`w-full border-2 border-dashed rounded-2xl p-10 text-center transition-all cursor-pointer flex flex-col items-center justify-center group ${
                    isDragging || selectedFile
                      ? "border-[#3DD68C] bg-[#3DD68C]/5"
                      : "border-gray-200 bg-gray-50 hover:border-[#3DD68C] hover:bg-gray-100"
                  }`}
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-colors ${selectedFile || isDragging ? 'bg-[#3DD68C] text-white' : 'bg-[#3DD68C]/10 text-[#3DD68C] group-hover:bg-[#3DD68C]/20'}`}>
                    <Upload className="w-7 h-7" />
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    required={!selectedFile}
                    onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                    className="hidden"
                    id="resume-upload"
                    accept=".pdf,.doc,.docx"
                  />
                  <div>
                    <p className="text-[#0D1B3E] font-bold mb-2">
                      {selectedFile ? selectedFile.name : "Click to upload or drag and drop"}
                    </p>
                    <p className="text-sm text-gray-500">
                      {selectedFile ? `${(selectedFile.size / 1024 / 1024).toFixed(2)} MB` : "PDF, DOC, DOCX (Max 5MB)"}
                    </p>
                  </div>
                  {selectedFile && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedFile(null);
                        if (fileInputRef.current) fileInputRef.current.value = "";
                      }}
                      className="mt-4 text-xs font-bold text-red-500 hover:text-red-600 transition-colors uppercase tracking-wider"
                    >
                      Remove File
                    </button>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full mt-4 py-5 bg-[#3DD68C] hover:bg-[#2bc478] text-[#0D1B3E] rounded-xl font-bold text-lg transition-all shadow-[0_4px_14px_0_rgba(61,214,140,0.39)] hover:shadow-[0_6px_20px_rgba(61,214,140,0.23)] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1'}`}
              >
                {isSubmitting ? "Submitting Application..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3DD68C]/5 blur-[120px] rounded-full -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full -ml-48 -mb-48" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Mail, title: "Email HR", detail: "hr@sustainabyte.ai", link: "mailto:hr@sustainabyte.ai" },
              { icon: Phone, title: "Call Us", detail: "+91 83770 07638", link: "tel:+918377007638" },
              { icon: LinkedinIcon, title: "LinkedIn", detail: "Follow for updates", link: "https://linkedin.com/company/sustainabyte-ai/" }
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target={item.title === "LinkedIn" ? "_blank" : undefined}
                rel={item.title === "LinkedIn" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -12 }}
                className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(61,214,140,0.15)] hover:border-[#3DD68C]/30 transition-all duration-500 text-center group block"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#3DD68C]/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-[#3DD68C] transition-all duration-500 relative">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <item.icon className="w-10 h-10 text-[#3DD68C] group-hover:text-white transition-colors duration-500" />
                  </motion.div>
                  <div className="absolute inset-0 bg-[#3DD68C] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
                </div>
                <h3 className="font-[family-name:var(--font-sora)] font-bold text-[#0D1B3E] text-2xl mb-3">{item.title}</h3>
                <p className="text-gray-500 text-lg font-medium group-hover:text-[#3DD68C] transition-colors">{item.detail}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
