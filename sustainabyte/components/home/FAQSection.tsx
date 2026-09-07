"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import Script from "next/script";
import { faqPageSchema } from "@/lib/seo";

const allFaqs = [
  // Google People Also Ask & General
  {
    q: "Where is Sustainabyte Technologies Pvt Ltd located?",
    a: "Sustainabyte Technologies Pvt Ltd is headquartered in Tambaram, Chennai, Tamil Nadu, India (PIN: 600045), with engineering hubs and client deployment teams operating across pan-India industrial clusters.",
    category: "People Also Ask",
    isGooglePAA: true,
  },
  {
    q: "What is meant by sustainability in AI?",
    a: "Sustainability in AI refers to using artificial intelligence as an enabling technology to optimize resource efficiency, eliminate carbon emissions, and support UN Sustainable Development Goals (SDGs), while also ensuring that AI models and edge computational workloads are engineered to run with minimal compute power and electrical overhead.",
    category: "People Also Ask",
    isGooglePAA: true,
  },
  {
    q: "Which AI companies are leading the field of clean energy?",
    a: "Innovative cleantech pioneers like Sustainabyte Technologies lead the clean energy AI sector in India and emerging markets, delivering specialized deep-tech platforms (OptiByte CPM, InByte ESG, FixiByte) for real-time chiller plant optimization, predictive maintenance, and autonomous industrial decarbonization.",
    category: "People Also Ask",
    isGooglePAA: true,
  },
  {
    q: "What is SDG in AI?",
    a: "SDG in AI refers to the deployment of artificial intelligence to accelerate the United Nations Sustainable Development Goals—most notably SDG 7 (Affordable & Clean Energy), SDG 9 (Industry, Innovation & Infrastructure), SDG 11 (Sustainable Cities), and SDG 13 (Climate Action) by driving measurable energy savings and net-zero emissions.",
    category: "People Also Ask",
    isGooglePAA: true,
  },
  {
    q: "What is AI-powered energy management?",
    a: "AI-powered energy management combines IoT sensory data, machine learning algorithms, and real-time telemetry to continuously monitor, predict, and autonomously optimize energy consumption across industrial and commercial facilities. Unlike conventional static control systems, AI models analyze historical baselines, weather forecasts, tariff structures, and operational demand curves to eliminate energy waste and dynamically tune high-load equipment without compromising operational comfort or productivity.",
    category: "AI & Energy",
  },
  {
    q: "How does AI help reduce energy consumption in buildings?",
    a: "Buildings consume massive amounts of energy through HVAC, chillers, lighting, and baseload utilities. AI reduces this consumption through dynamic setpoint adjustment (adapting chilled water temperatures and airflow to occupancy/weather), peak demand shaving (shifting non-critical loads away from high-tariff windows), and continuous anomaly & fault detection (spotting thermal leaks and sensor drift in real time).",
    category: "AI & Energy",
  },
  {
    q: "What is AIoT and how is it used in energy?",
    a: "AIoT (Artificial Intelligence of Things) is the convergence of Internet of Things (IoT) hardware and Artificial Intelligence (AI) software. In energy management, smart power meters, pressure sensors, BTU meters, and temperature probes collect continuous high-frequency operational telemetry (IoT), which is ingested by edge gateways and cloud AI algorithms to run closed-loop optimization, predictive maintenance, and autonomous setpoint steering.",
    category: "AI & Energy",
  },
  {
    q: "How much can businesses save with AI energy management?",
    a: "Enterprises utilizing Sustainabyte typically achieve a 10% to 30% reduction in HVAC & chiller plant energy consumption, a 15% to 25% decrease in overall utility bill costs via peak load shifting and power factor optimization, and a rapid payback period (ROI) within 6 to 18 months.",
    category: "AI & Energy",
  },
  {
    q: "What industries benefit most from AI energy solutions?",
    a: "AI energy management delivers maximum value to energy-intensive and critical-cooling facilities, including Data Centers & Tech Parks, Commercial Real Estate & Malls, Heavy Manufacturing (Steel, Auto, Textiles, Cement), Pharmaceuticals & Cleanrooms, and Hospitals & Hospitality.",
    category: "AI & Energy",
  },
  {
    q: "Is Sustainabyte available across India?",
    a: "Yes. Sustainabyte Technologies provides pan-India deployment and support, serving major industrial belts and metro hubs across Tamil Nadu, Karnataka, Maharashtra, Gujarat, Delhi NCR, Telangana, and Andhra Pradesh, as well as international clients in the Middle East and Southeast Asia.",
    category: "AI & Energy",
  },
  // Chiller Plant Optimization
  {
    q: "What is chiller plant optimization?",
    a: "Chiller Plant Optimization (CPO) is the holistic, system-level control of all chiller room equipment—including chillers (compressors), condenser water pumps (CWP), chilled water pumps (CHWP), and cooling tower fans—to achieve the lowest aggregate kW/TR wire-to-water power consumption.",
    category: "Chiller & HVAC",
  },
  {
    q: "What is the difference between chiller plant optimization and a BMS?",
    a: "A Building Management System (BMS) executes basic schedules and static setpoint controls in isolation, whereas an AI Chiller Plant Optimization platform (like OptiByte CPM) dynamically computes real-time thermodynamic efficiency sweet spots across all chillers, pumps, and cooling towers simultaneously.",
    category: "Chiller & HVAC",
  },
  // ESG & Audits
  {
    q: "What is ISO 50001 and how does it benefit facilities?",
    a: "ISO 50001:2018 is the global standard for establishing an Energy Management System (EnMS). It helps enterprises systematically establish baselines, track Energy Performance Indicators (EnPIs), cut utility expenses by 5%–15%, and comply with ESG regulations like SEBI BRSR and GHG Protocol.",
    category: "ESG & Audits",
  },
  {
    q: "What is the difference between Scope 1, 2, and 3 emissions?",
    a: "Scope 1 covers direct emissions from owned sources (generators, boilers, fleet). Scope 2 covers indirect emissions from purchased electricity and steam. Scope 3 covers all upstream and downstream supply chain activities (purchased goods, logistics, business travel).",
    category: "ESG & Audits",
  },
];

const faqSchema = faqPageSchema(
  allFaqs.map((faq) => ({
    question: faq.q,
    answer: faq.a,
  }))
);

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <Script
        id="homepage-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />

      <section className="py-16 sm:py-24 bg-white" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#4DB846] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2"
            >
              Clear Answers to Common Questions
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-[family-name:var(--font-sora)] text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D1B3E]"
            >
              Frequently Asked <span className="text-[#3DD68C]">Questions</span>
            </motion.h2>
          </div>

          <div className="space-y-0 divide-y divide-gray-100 border-t border-b border-gray-100">
            {allFaqs.map((faq, i) => (
              <motion.div
                key={`${faq.q}-${i}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="py-1"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-4 text-left group cursor-pointer"
                >
                  <div className="flex items-center gap-2 pr-4 flex-1">

                    <span className="font-[family-name:var(--font-sora)] font-semibold text-[#0D1B3E] text-sm md:text-base group-hover:text-[#3DD68C] transition-colors">
                      {faq.q}
                    </span>
                  </div>
                  <div
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === i ? "bg-[#3DD68C]" : "bg-gray-100"
                    }`}
                  >
                    {openIndex === i ? (
                      <X className="w-3.5 h-3.5 text-white" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 text-[#0D1B3E]" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="pb-5 pt-1 text-gray-600 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

