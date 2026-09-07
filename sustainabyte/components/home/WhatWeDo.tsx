"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Zap, 
  Cpu, 
  Leaf, 
  Settings, 
  ArrowRight,
  TrendingUp,
  Bluetooth,
  FileDigit
} from "lucide-react";

const pillars = [
  {
    title: "OptiByte",
    subtitle: "Energy Monitoring & Optimization",
    description:
      "AI-powered platform providing real-time visibility, predictive analytics, and automated controls to reduce facility energy consumption.",
    href: "/technology/optibyte",
    icon: Cpu,
  },
  {
    title: "CPM/CPO",
    subtitle: "Chiller Plant Optimization",
    description:
      "Advanced chiller plant manager and automation solutions to optimize COP, manage compressor loads, and maximize cooling efficiency.",
    href: "/technology/chiller-plant-manager",
    icon: Zap,
  },
  {
    title: "Energy Audit & ISO 50001",
    subtitle: "Compliance & Consulting",
    description:
      "Comprehensive ASHRAE audits, electrical safety checks, and step-by-step guidance for ISO 50001/50002 implementation and savings tracking.",
    href: "/energy",
    icon: TrendingUp,
  },
  {
    title: "InByte",
    subtitle: "ESG & Carbon Reporting",
    description:
      "Streamlined GHG Protocol, ISO 14064, and CDP-compliant reporting to track Scope 1, 2, and 3 emissions for corporate sustainability disclosure.",
    href: "/technology/inbyte",
    icon: Leaf,
  },
  {
    title: "FixiByte",
    subtitle: "Maintenance & CMMS Support",
    description:
      "Mobile-first CMMS designed to digitize maintenance schedules, track equipment health, manage work orders, and minimize operational downtime.",
    href: "/technology/fixbyte",
    icon: Settings,
  },
  {
    title: "FusionByte",
    subtitle: "Bluetooth-Enabled Welding Control",
    description:
      "Wireless precision for welding operations. Retrofit existing machines to manage voltage and current via mobile app, eliminating manual knobs.",
    href: "/technology/fusionbyte",
    icon: Bluetooth,
  },
  {
    title: "DigiWeld",
    subtitle: "Production Tracking & Quality Control",
    description:
      "Track and improve welding quality. Digitize weld log sheets, track joints and operator IDs, and manage non-conformance reports for full production visibility.",
    href: "/technology/digiweld",
    icon: FileDigit,
  },
];

function PillarCard({ pillar, index }: { pillar: typeof pillars[number]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const Icon = pillar.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full md:w-[calc(50%-16px)] lg:w-[calc(33.33%-22px)] flex"
    >
      <Link
        href={pillar.href}
        className="relative rounded-[2rem] border bg-white p-8 flex flex-col justify-between flex-1 group transition-all duration-300"
        style={{
          boxShadow: hovered ? '0 20px 40px -10px rgba(0,0,0,0.18)' : '0 10px 30px -5px rgba(0,0,0,0.08)',
          borderColor: hovered ? 'rgba(39,163,123,0.4)' : 'rgba(255,255,255,0.9)'
        }}
      >
        <div>
          {/* Icon & Title */}
          <div className="flex items-center gap-3.5 mb-5">
            <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-[#0D1B3E] flex-shrink-0">
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="font-[family-name:var(--font-sora)] text-2xl font-bold text-[#0D1B3E] group-hover:text-[#27A37B] transition-colors duration-300">
              {pillar.title}
            </h3>
          </div>

          {/* Subtitle */}
          <h4 className="text-[#27A37B] text-xs font-bold uppercase tracking-wider mb-4">
            {pillar.subtitle}
          </h4>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-6 font-[family-name:var(--font-dm-sans)]">
            {pillar.description}
          </p>
        </div>

        {/* Learn More link */}
        <div className="flex items-center gap-2 text-sm font-bold text-[#27A37B] group-hover:text-[#1e8261] mt-auto">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </Link>
    </motion.div>
  );
}

export default function WhatWeDo() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-[#0D1B3E]">
      <div className="absolute inset-0">
        <Image
          src="/What We Do all img/bgimg.webp"
          alt="Background"
          fill
          className="object-cover opacity-30"
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B3E]/80 via-[#0D1B3E]/95 to-[#0D1B3E]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="text-[#3DD68C] font-bold tracking-[0.25em] uppercase text-sm mb-4 block">
            We Specialize In
          </span>
          <h2 className="font-[family-name:var(--font-sora)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            AIoT-Driven <span className="bg-gradient-to-r from-[#3DD68C] to-[#00FFAA] bg-clip-text text-transparent">Intelligence</span>
          </h2>
          <p className="text-[#B0BEC5] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-dm-sans)]">
            Leverage intelligent AIoT solutions to monitor, analyze, and optimize industrial assets and building systems for improved efficiency, energy savings, and sustainability performance.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {pillars.map((pillar, i) => (
            <PillarCard key={i} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
