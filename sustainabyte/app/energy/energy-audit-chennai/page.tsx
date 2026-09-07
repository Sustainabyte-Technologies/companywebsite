"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Building2,
  Factory,
  Stethoscope,
  Hotel,
  Cpu,
  ShoppingBag,
  Zap,
  Wind,
  Thermometer,
  BarChart3,
  ShieldCheck,
  Award,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  TrendingDown,
  Settings,
  Search,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const auditTypes = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Electrical Energy Audit",
    desc: "Power quality analysis, load profiling, capacitor bank sizing, motor efficiency & transformer losses.",
  },
  {
    icon: <Wind className="w-6 h-6" />,
    title: "HVAC Energy Audit",
    desc: "Chiller plant optimization, AHU efficiency, cooling tower performance & VFD opportunities.",
  },
  {
    icon: <Thermometer className="w-6 h-6" />,
    title: "Thermal & Steam Audit",
    desc: "Boiler efficiency, steam trap survey, heat balance & waste heat recovery assessments.",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Compressed Air Audit",
    desc: "Air leak detection via acoustic imaging, compressor efficiency & pressure optimization.",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Detailed Energy Audit",
    desc: "ASHRAE Level 2 & 3 / ISO 50002 deep-dive audit with ECM identification & investment-grade reporting.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Walk-Through Audit",
    desc: "Rapid ASHRAE Level 1 / BEE preliminary audit with quick-win energy savings identification.",
  },
];

const industries = [
  { icon: <Factory className="w-7 h-7" />, name: "Factories & Manufacturing" },
  { icon: <Building2 className="w-7 h-7" />, name: "Commercial Buildings" },
  { icon: <Stethoscope className="w-7 h-7" />, name: "Hospitals" },
  { icon: <Hotel className="w-7 h-7" />, name: "Hotels & Hospitality" },
  { icon: <Cpu className="w-7 h-7" />, name: "IT Parks & Data Centres" },
  { icon: <ShoppingBag className="w-7 h-7" />, name: "Malls & Retail" },
];

const process = [
  {
    step: "01",
    title: "Initial Consultation",
    desc: "Free 30-minute call to understand your facility, energy bills, and goals.",
  },
  {
    step: "02",
    title: "Site Walkthrough",
    desc: "Our BEE-certified auditors visit your Chennai facility for data collection and observations.",
  },
  {
    step: "03",
    title: "Data Analysis",
    desc: "Energy consumption analysis, benchmarking, SEC calculations & opportunity identification.",
  },
  {
    step: "04",
    title: "Audit Report",
    desc: "Detailed report with prioritized ECMs, ROI, payback period & savings projections.",
  },
  {
    step: "05",
    title: "Implementation Support",
    desc: "We help you implement recommendations and verify savings through M&V studies.",
  },
];

const stats = [
  { value: "10–30%", label: "Average Energy Savings" },
  { value: "100+", label: "Audits Completed" },
  { value: "BEE", label: "Certified Auditors" },
  { value: "ISO 50001", label: "Compliant Process" },
];

const faqs = [
  {
    q: "What is an energy audit?",
    a: "An energy audit is a systematic inspection of a facility's energy use. It identifies where energy is being wasted and recommends cost-effective measures to reduce consumption — typically saving 10–30% on energy bills.",
  },
  {
    q: "How much does an energy audit cost in Chennai?",
    a: "The cost depends on the facility size and audit depth. A preliminary walk-through audit for a small commercial building starts from ₹25,000. Detailed industrial audits are priced based on scope. Contact us for a free quote.",
  },
  {
    q: "How long does an energy audit take?",
    a: "A walk-through audit takes 1–2 days on-site. A detailed energy audit typically takes 3–7 days depending on facility size. The final report is delivered within 2–3 weeks.",
  },
  {
    q: "Is an energy audit mandatory in India?",
    a: "Under the Energy Conservation Act 2001, designated consumers (large energy users) are mandated to conduct energy audits by BEE-accredited energy auditors. Most industrial facilities above a threshold are covered.",
  },
  {
    q: "What industries do you serve in Chennai?",
    a: "We serve factories, manufacturing plants, commercial buildings, hospitals, hotels, IT parks, data centres, malls, warehouses, chemical plants, automobile showrooms, and educational institutions across Chennai and Tamil Nadu.",
  },
  {
    q: "Do you provide ISO 50001 consulting in Chennai?",
    a: "Yes. We provide end-to-end ISO 50001 Energy Management System consulting — from gap assessment and documentation to implementation and certification support.",
  },
];

export default function EnergyAuditChennaiPage() {
  return (
    <div className="bg-[#0D1B3E] min-h-screen text-white overflow-x-hidden">

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-28 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#3DD68C]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#00FFAA]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <motion.nav
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-2 text-sm text-white/40 mb-8"
          >
            <Link href="/" className="hover:text-[#00FFAA] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/energy" className="hover:text-[#00FFAA] transition-colors">Energy</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/60">Energy Audit Chennai</span>
          </motion.nav>

          {/* Badge */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00FFAA]/10 border border-[#00FFAA]/30 text-[#00FFAA] text-sm font-semibold mb-6">
              <MapPin className="w-4 h-4" />
              Serving Chennai &amp; Tamil Nadu
            </span>
          </motion.div>

          {/* H1 — Primary keyword */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 max-w-4xl"
          >
            #1{" "}
            <span className="bg-gradient-to-r from-[#3DD68C] to-[#00FFAA] bg-clip-text text-transparent">
              Energy Audit Company
            </span>{" "}
            in Chennai
          </motion.h1>

          {/* H2 — Supporting keyword */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-xl md:text-2xl font-normal text-white/70 mb-8 max-w-3xl"
          >
            Energy Audit, Energy Management &amp; Energy Efficiency Services in Chennai &amp; Tamil Nadu
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="text-white/60 text-lg max-w-3xl leading-relaxed mb-10"
          >
            Sustainabyte Technologies is a BEE-certified energy audit company based in Chennai. We deliver
            industrial and commercial energy audits, ISO 50001 consulting, and AI-powered energy management
            solutions — helping factories, hospitals, hotels, IT parks and commercial buildings across Chennai
            reduce energy costs by{" "}
            <span className="text-[#00FFAA] font-semibold">10–30%</span>.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00FFAA] text-[#0D1B3E] font-bold rounded-xl hover:bg-[#3DD68C] transition-all duration-300 shadow-[0_0_30px_rgba(0,255,170,0.3)] hover:shadow-[0_0_50px_rgba(0,255,170,0.5)]"
            >
              Get Free Energy Audit Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/energy/energy-audit"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:border-[#00FFAA]/50 hover:text-[#00FFAA] transition-all duration-300"
            >
              View Audit Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────────────── */}
      <section className="py-16 border-y border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="text-center"
              >
                <div className="font-[family-name:var(--font-sora)] text-3xl md:text-4xl font-bold text-[#00FFAA] mb-2">
                  {s.value}
                </div>
                <div className="text-white/60 text-sm">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-bold text-[#0D1B3E] mb-4">
              Why Choose Sustainabyte as Your{" "}
              <span className="text-[#4DB846]">Energy Audit Partner in Chennai?</span>
            </h2>
            <div className="w-20 h-1 bg-[#4DB846] mx-auto mt-6 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8 text-[#4DB846]" />,
                title: "BEE Certified Auditors",
                desc: "Our energy auditors are certified by the Bureau of Energy Efficiency (BEE), Government of India — ensuring compliance with all statutory requirements.",
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-[#4DB846]" />,
                title: "ISO 50001 & ISO 50002 Compliant",
                desc: "We follow international standards — ASHRAE Level 1–3, ISO 50002 energy auditing, and ISO 50001 EnMS implementation.",
              },
              {
                icon: <TrendingDown className="w-8 h-8 text-[#4DB846]" />,
                title: "10–30% Energy Savings",
                desc: "Our audits identify concrete, actionable energy conservation measures (ECMs) with clear ROI, payback periods and M&V verification.",
              },
              {
                icon: <Cpu className="w-8 h-8 text-[#4DB846]" />,
                title: "AI-Powered Analysis",
                desc: "We combine traditional audit expertise with AI-driven energy analytics for deeper insights and continuous monitoring beyond the audit.",
              },
              {
                icon: <MapPin className="w-8 h-8 text-[#4DB846]" />,
                title: "Local Chennai Presence",
                desc: "Based in Tambaram, Chennai — we have deep knowledge of Tamil Nadu's industrial clusters, tariff structures and regulatory environment.",
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-[#4DB846]" />,
                title: "End-to-End Service",
                desc: "From audit to implementation to monitoring — we support you at every stage, ensuring savings are real and sustained.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.5}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-[#0D1B3E] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Audit Types ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0D1B3E]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-bold text-white mb-4">
              Energy Audit Services{" "}
              <span className="bg-gradient-to-r from-[#3DD68C] to-[#00FFAA] bg-clip-text text-transparent">
                We Offer in Chennai
              </span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mt-4">
              Comprehensive energy auditing services for industrial and commercial facilities across
              Chennai, Tambaram, and Tamil Nadu.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditTypes.map((audit, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.1}
                className="group bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-[#00FFAA]/30 transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-[#00FFAA]/10 text-[#00FFAA] mb-5 group-hover:bg-[#00FFAA]/20 transition-colors">
                  {audit.icon}
                </div>
                <h3 className="font-[family-name:var(--font-sora)] text-xl font-bold text-white mb-3">
                  {audit.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">{audit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries Served ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-bold text-[#0D1B3E] mb-4">
              Industries We Serve in{" "}
              <span className="text-[#4DB846]">Chennai</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
              From manufacturing plants in Ambattur to IT parks in OMR and hospitals across Chennai — we
              audit every type of facility in Tamil Nadu.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.1}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-100 bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group"
              >
                <div className="text-[#4DB846] group-hover:scale-110 transition-transform duration-300">
                  {ind.icon}
                </div>
                <span className="font-semibold text-[#0D1B3E] text-sm leading-tight">{ind.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Additional industries text */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-gray-500 mt-10 text-sm"
          >
            Also serving: Warehouses, Chemical Plants, Power Plants, Automobile Showrooms, Schools &amp;
            Colleges, Banks, Restaurants in Chennai &amp; Tamil Nadu.
          </motion.p>
        </div>
      </section>

      {/* ── Our Process ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0D1B3E]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-bold text-white mb-4">
              How Our{" "}
              <span className="bg-gradient-to-r from-[#3DD68C] to-[#00FFAA] bg-clip-text text-transparent">
                Energy Audit Process
              </span>{" "}
              Works
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4">
            {process.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.1}
                className="relative"
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:border-[#00FFAA]/30 transition-all duration-300">
                  <div className="font-[family-name:var(--font-sora)] text-4xl font-bold text-[#00FFAA]/20 mb-3">
                    {step.step}
                  </div>
                  <h3 className="font-[family-name:var(--font-sora)] text-base font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-2 z-10 items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-[#00FFAA]/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-[family-name:var(--font-sora)] text-4xl font-bold text-[#0D1B3E] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500">Everything you need to know about energy audits in Chennai</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.1}
                className="group border border-gray-200 rounded-xl overflow-hidden open:shadow-md transition-all"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-[family-name:var(--font-sora)] font-semibold text-[#0D1B3E] list-none hover:text-[#4DB846] transition-colors">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-[#4DB846] group-open:rotate-90 transition-transform duration-300 flex-shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.a}</div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#0D1B3E] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3DD68C]/10 via-transparent to-[#00FFAA]/5" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Reduce Your{" "}
              <span className="bg-gradient-to-r from-[#3DD68C] to-[#00FFAA] bg-clip-text text-transparent">
                Energy Bills in Chennai?
              </span>
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
              Get a free consultation with our BEE-certified energy auditors. We&apos;ll assess your
              facility and give you a no-obligation quote within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00FFAA] text-[#0D1B3E] font-bold rounded-xl hover:bg-[#3DD68C] transition-all duration-300 shadow-[0_0_30px_rgba(0,255,170,0.3)]"
              >
                Get Free Audit Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/energy/energy-audit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:border-[#00FFAA]/50 hover:text-[#00FFAA] transition-all duration-300"
              >
                View All Audit Services
              </Link>
            </div>

            {/* Contact info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+918377007638"
                className="flex items-center gap-3 text-white/60 hover:text-[#00FFAA] transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#00FFAA]/10 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-medium">+91 83770 07638</span>
              </a>
              <a
                href="mailto:contact@sustainabyte.ai"
                className="flex items-center gap-3 text-white/60 hover:text-[#00FFAA] transition-colors group"
              >
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-[#00FFAA]/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-medium">contact@sustainabyte.ai</span>
              </a>
              <div className="flex items-center gap-3 text-white/60">
                <div className="p-2 rounded-lg bg-white/5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-medium">Tambaram, Chennai — Tamil Nadu</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Local SEO Text Block ───────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="prose prose-lg max-w-none text-gray-600">
            <h2 className="font-[family-name:var(--font-sora)] text-3xl font-bold text-[#0D1B3E] mb-6">
              Energy Audit &amp; Energy Management Services in Chennai
            </h2>
            <p className="mb-4">
              Sustainabyte Technologies is a leading <strong>energy audit company in Chennai</strong>,
              providing comprehensive <strong>energy audit services</strong>,{" "}
              <strong>energy management solutions</strong>, and{" "}
              <strong>energy efficiency consulting</strong> to industrial and commercial clients across
              Tamil Nadu.
            </p>
            <p className="mb-4">
              As an <strong>energy service company in Chennai</strong>, we help factories, hospitals,
              hotels, IT parks, and commercial buildings identify energy waste and implement
              cost-effective energy conservation measures. Our BEE-certified{" "}
              <strong>energy consultants in Chennai</strong> use a combination of proven audit
              methodologies and AI-powered tools to deliver results that go beyond the audit report.
            </p>
            <p className="mb-4">
              Our <strong>industrial energy audits in Chennai</strong> cover electrical systems, HVAC
              and chiller plants, compressed air systems, boilers and steam, pumps and motors — giving
              you a complete picture of your energy performance. For commercial clients, our{" "}
              <strong>commercial energy audits</strong> target lighting, HVAC, building envelope and
              utility systems.
            </p>
            <p className="mb-4">
              We also provide <strong>ISO 50001 Energy Management System</strong> consulting — from
              initial gap assessment through to certification support. Our{" "}
              <strong>energy management services in Chennai</strong> include continuous monitoring using
              our InByte IoT platform, ensuring your energy savings are sustained and verified.
            </p>
            <p>
              Serving Chennai, Tambaram, Ambattur, Guindy, OMR, Perungudi, Sriperumbudur, Kancheepuram,
              Vellore, Coimbatore and across Tamil Nadu — contact us today for a free{" "}
              <strong>energy audit consultation in Chennai</strong>.
            </p>

            {/* Internal links */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { label: "Energy Audit Services", href: "/energy/energy-audit" },
                { label: "Energy Management Solutions", href: "/energy/management-solutions" },
                { label: "Energy Efficiency Consulting", href: "/energy" },
                { label: "Technology Products", href: "/technology" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1 px-4 py-2 bg-white border border-[#4DB846]/30 text-[#4DB846] text-sm font-semibold rounded-lg hover:bg-[#4DB846]/5 transition-colors"
                >
                  {link.label}
                  <ChevronRight className="w-3 h-3" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
