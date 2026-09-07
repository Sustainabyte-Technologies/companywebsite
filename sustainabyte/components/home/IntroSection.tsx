"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Cpu, Zap, Activity, ShieldCheck } from "lucide-react";
import GreenButton from "@/components/ui/GreenButton";

const rotatingTaglines = [
  "Connected by IoT. Driven by AI. Built for Net Zero.",
  "Predict. Optimize. Sustain.",
  "The Future of Energy Intelligence",
  "AI Intelligence for Energy Excellence",
  "Smarter Operations. Lower Emissions. Greater Impact."
];



export default function IntroSection() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % rotatingTaglines.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 sm:py-28 bg-[#0D1B3E] overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Background Image — using Next.js Image for optimizer + LCP preload */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/Net Zero.webp"
              alt="Net Zero energy management background"
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              quality={80}
              className="object-cover object-center"
            />
          </div>
        </div>
        {/* Subtle dark gradient from the left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E]/90 via-[#0D1B3E]/60 to-transparent" />
        {/* Subtle dark gradient from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B3E] via-transparent to-transparent opacity-80" />
        {/* Ambient glow effects */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,255,170,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] translate-x-1/3 -translate-y-1/3 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(61,214,140,0.05) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Text Block */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6 sm:mb-8"
            >

            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-[family-name:var(--font-sora)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight mb-3 sm:mb-4 text-white"
            >
              AI-Powered{" "}
              <span className="bg-gradient-to-r from-[#3DD68C] to-[#00FFAA] bg-clip-text text-transparent">
                Energy Management System
              </span>
              <br />
              for Industrial Energy Efficiency
            </motion.h1>

            {/* SEO Supporting Heading — visible to Google, subtle in UI */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base font-normal text-white/50 mb-4 sm:mb-5 tracking-wide"
            >
              Energy Audit, Energy Management &amp; Energy Efficiency Services in Chennai
            </motion.h2>

            {/* Rotating Sub-Tagline */}
            <div className="h-8 mb-6 overflow-hidden flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={taglineIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="text-[#00FFAA] text-sm sm:text-base font-semibold tracking-wider font-[family-name:var(--font-sora)]"
                >
                  {rotatingTaglines[taglineIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#B0BEC5] text-base sm:text-lg md:text-xl max-w-2xl mb-8 sm:mb-10 leading-relaxed font-[family-name:var(--font-dm-sans)]"
            >
              We empower commercial facilities and manufacturing plants to cut utility costs with real-time energy monitoring systems, chiller plant optimization, and automated Net Zero decarbonization solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <GreenButton href="/contact?subject=Book a Demo" variant="primary">
                Book a Demo
              </GreenButton>

              <GreenButton href="/technology" variant="outline">
                Explore our technology
              </GreenButton>

              <GreenButton href="/contact?subject=Schedule a Service" variant="dark">
                Schedule a Service
              </GreenButton>
            </motion.div>
          </div>


        </div>
      </div>
    </section>
  );
}
