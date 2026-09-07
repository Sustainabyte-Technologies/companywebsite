"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Search,
  X,
  ArrowRight,
  FileText,
  Zap,
  Cpu,
  Leaf,
  Globe,
  BookOpen,
  Building2,
} from "lucide-react";
import { blogPosts } from "@/lib/blogsData";

interface SearchResult {
  title: string;
  href: string;
  category: string;
  description?: string;
  type: "page" | "service" | "technology" | "blog" | "sustainability" | "company";
}

const siteIndex: SearchResult[] = [
  { title: "Home", href: "/", category: "Page", description: "Sustainabyte Technologies homepage", type: "page" },
  { title: "Contact Us", href: "/contact", category: "Page", description: "Get in touch with our expert team", type: "page" },
  { title: "Regions", href: "/regions", category: "Page", description: "We operate across India and the GCC", type: "page" },
  { title: "Careers", href: "/careers", category: "Company", description: "Join Sustainabyte Technologies", type: "company" },
  { title: "About Us", href: "/company", category: "Company", description: "Our story, mission and values", type: "company" },
  { title: "Clients", href: "/company#clients", category: "Company", description: "Trusted by leading enterprises", type: "company" },
  { title: "Blogs", href: "/blogs", category: "Resources", description: "Sustainability insights and expert articles", type: "blog" },
  { title: "News", href: "/news", category: "Resources", description: "Latest news from Sustainabyte", type: "blog" },
  { title: "Energy Efficiency & Consulting", href: "/energy", category: "Services", description: "ASHRAE audits, chiller and boiler performance, compressed air", type: "service" },
  { title: "Equip-Ops Analytics", href: "/energy#equip-ops", category: "Services", description: "Equipment-level operational analytics", type: "service" },
  { title: "Compressed Air Leakage Audits", href: "/energy#compressed-air", category: "Services", description: "Identify and fix costly compressed air leaks", type: "service" },
  { title: "Chiller Reliability & Performance Audits", href: "/energy#chiller", category: "Services", description: "Maximize chiller uptime and efficiency", type: "service" },
  { title: "Boiler Performance Audits", href: "/energy#boiler", category: "Services", description: "Reduce boiler energy consumption and emissions", type: "service" },
  { title: "ASHRAE Level 1 & 2 Audits", href: "/energy#ashrae", category: "Services", description: "ASHRAE-compliant energy audits for buildings", type: "service" },
  { title: "Electrical Safety Audits", href: "/energy#electrical", category: "Services", description: "Identify and mitigate electrical hazards", type: "service" },
  { title: "Power Quality Analysis", href: "/energy#power", category: "Services", description: "Diagnose harmonics, PF issues and voltage dips", type: "service" },
  { title: "Energy Analytics", href: "/energy/analytics", category: "Services", description: "Utility, BMS and solar data analytics", type: "service" },
  { title: "Utility Data Analytics", href: "/energy/analytics#utility", category: "Services", description: "Turn utility bills into actionable intelligence", type: "service" },
  { title: "BMS Data Analytics", href: "/energy/analytics#bms", category: "Services", description: "Unlock insights from your Building Management System", type: "service" },
  { title: "Solar Data Analytics", href: "/energy/analytics#solar", category: "Services", description: "Monitor and optimize solar plant performance", type: "service" },
  { title: "Energy Management Solutions", href: "/energy/management-solutions", category: "Services", description: "ISO 50001/50002, IPMVP and digitisation programs", type: "service" },
  { title: "ISO 50001 Implementation", href: "/energy/management-solutions#iso-50001", category: "Services", description: "Energy management system certification support", type: "service" },
  { title: "Measurement & Verification (IPMVP)", href: "/energy/management-solutions#ipmvp", category: "Services", description: "Audit-backed verified energy savings", type: "service" },
  { title: "Technology Overview", href: "/technology", category: "Technology", description: "AI, IoT, and software solutions for energy intelligence", type: "technology" },
  { title: "OptiByte - AIoT Energy Platform", href: "/technology/optibyte", category: "Technology", description: "Real-time energy monitoring powered by AI and IoT", type: "technology" },
  { title: "FixiByte - CMMS & Maintenance", href: "/technology/fixbyte", category: "Technology", description: "Computerized maintenance management system", type: "technology" },
  { title: "Digiweld", href: "/technology/digiweld", category: "Technology", description: "Welding process digitisation and analytics", type: "technology" },
  { title: "Compass - AI Governance", href: "/technology/compass", category: "Technology", description: "Responsible AI governance framework", type: "technology" },
  { title: "IR Blaster - AC Monitoring", href: "/technology/inbyte", category: "Technology", description: "Smart AC control and monitoring device", type: "technology" },
  { title: "Fusionbyte", href: "/technology/fusionbyte", category: "Technology", description: "Data fusion platform for energy intelligence", type: "technology" },
  { title: "CPM/CPO - Chiller Plant Manager", href: "/technology/chiller-plant-manager", category: "Technology", description: "End-to-end chiller plant optimisation", type: "technology" },
  { title: "Optiedge HVAC", href: "/technology/iot-solutions#optiedgeac", category: "Technology", description: "AIoT edge device for HVAC optimisation", type: "technology" },
  { title: "Optiedge Cooling Tower", href: "/technology/iot-solutions#optiedgect", category: "Technology", description: "Smart cooling tower monitoring and control", type: "technology" },
  { title: "AI Capabilities", href: "/technology/ai", category: "Technology", description: "Machine learning and predictive intelligence", type: "technology" },
  { title: "Digital Twin Intelligence", href: "/technology/ai#digital-twin", category: "Technology", description: "Virtual replicas for simulation and optimisation", type: "technology" },
  { title: "Smart Fault Detection & Diagnostics", href: "/technology/ai#fdd", category: "Technology", description: "AI-powered anomaly detection for equipment", type: "technology" },
  { title: "AI Assistant", href: "/technology/ai#ai-assistant", category: "Technology", description: "Conversational energy AI for your facility", type: "technology" },
  { title: "Sustainability Overview", href: "/sustainability", category: "Sustainability", description: "Carbon, water, decarbonization, and net zero programs", type: "sustainability" },
  { title: "Carbon Accounting", href: "/sustainability/carbon-accounting", category: "Sustainability", description: "GHG Protocol, ISO 14064, and CDP reporting", type: "sustainability" },
  { title: "GHG Protocol Reporting", href: "/sustainability/carbon-accounting#ghg", category: "Sustainability", description: "Scope 1, 2 and 3 greenhouse gas inventory", type: "sustainability" },
  { title: "ISO 14064 Certification", href: "/sustainability/carbon-accounting#iso14064", category: "Sustainability", description: "Carbon footprint quantification and verification", type: "sustainability" },
  { title: "CDP Reporting", href: "/sustainability/carbon-accounting#cdp", category: "Sustainability", description: "Carbon Disclosure Project submission support", type: "sustainability" },
  { title: "Water Management", href: "/sustainability/water-management", category: "Sustainability", description: "Conservation strategies and water audits", type: "sustainability" },
  { title: "Decarbonization", href: "/sustainability/decarbonization", category: "Sustainability", description: "Science-based targets and measurable results", type: "sustainability" },
  { title: "Net Zero Roadmap", href: "/sustainability/net-zero-roadmap", category: "Sustainability", description: "Baseline setting and performance monitoring", type: "sustainability" },
];

function buildIndex(): SearchResult[] {
  return [
    ...siteIndex,
    ...blogPosts.map((post) => ({
      title: post.title,
      href: `/blogs/${post.slug}`,
      category: post.category,
      description: post.excerpt.slice(0, 120) + "...",
      type: "blog" as const,
    })),
  ];
}

const typeIcon = (type: SearchResult["type"]) => {
  const cls = "w-4 h-4";
  switch (type) {
    case "page": return <Globe className={cls} />;
    case "service": return <Zap className={cls} />;
    case "technology": return <Cpu className={cls} />;
    case "blog": return <BookOpen className={cls} />;
    case "sustainability": return <Leaf className={cls} />;
    case "company": return <Building2 className={cls} />;
    default: return <FileText className={cls} />;
  }
};

const typeColor: Record<SearchResult["type"], string> = {
  page: "text-sky-400 bg-sky-400/10",
  service: "text-amber-400 bg-amber-400/10",
  technology: "text-violet-400 bg-violet-400/10",
  blog: "text-emerald-400 bg-emerald-400/10",
  sustainability: "text-green-400 bg-green-400/10",
  company: "text-rose-400 bg-rose-400/10",
};

const quickLinks: SearchResult[] = [
  { title: "OptiByte - AIoT Energy Platform", href: "/technology/optibyte", category: "Technology", description: "Real-time energy monitoring powered by AI and IoT", type: "technology" },
  { title: "Carbon Accounting", href: "/sustainability/carbon-accounting", category: "Sustainability", description: "GHG Protocol, ISO 14064, and CDP reporting", type: "sustainability" },
  { title: "Energy Efficiency & Consulting", href: "/energy", category: "Services", description: "ASHRAE audits, chiller and boiler performance, compressed air", type: "service" },
  { title: "Blogs", href: "/blogs", category: "Resources", description: "Sustainability insights and expert articles", type: "blog" },
  { title: "Contact Us", href: "/contact", category: "Page", description: "Get in touch with our expert team", type: "page" },
];

function highlight(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp("(" + escaped + ")", "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-[#3DD68C]/30 text-[#3DD68C] rounded-sm px-0.5 not-italic">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

function doSearch(query: string, index: SearchResult[]): SearchResult[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return index
    .filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q) ||
        (r.description && r.description.toLowerCase().includes(q))
    )
    .slice(0, 10);
}

export default function SearchModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const indexRef = useRef<SearchResult[]>([]);

  useEffect(() => {
    indexRef.current = buildIndex();
  }, []);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setResults([]);
      setActiveIndex(-1);
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    setActiveIndex(-1);
    setResults(doSearch(val, indexRef.current));
  }, []);

  const displayedItems = query ? results : quickLinks;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, displayedItems.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      const item = displayedItems[activeIndex];
      if (item) {
        window.location.href = item.href;
        onClose();
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="search-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-[#020B18]/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            key="search-modal"
            initial={{ opacity: 0, y: -24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -24, scale: 0.97 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[80px] left-1/2 -translate-x-1/2 z-[201] w-full max-w-2xl px-4"
          >
            <div
              className="rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.7)]"
              style={{
                background: "linear-gradient(135deg, rgba(13,27,62,0.98) 0%, rgba(5,10,24,0.99) 100%)",
                border: "1px solid rgba(61,214,140,0.15)",
              }}
            >
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5">
                <Search className="w-5 h-5 text-[#3DD68C] flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Search services, technology, sustainability..."
                  className="flex-1 bg-transparent text-white text-base placeholder:text-white/30 outline-none caret-[#3DD68C]"
                  autoComplete="off"
                  spellCheck={false}
                />
                {query && (
                  <button
                    onClick={() => {
                      setQuery("");
                      setResults([]);
                      inputRef.current?.focus();
                    }}
                    className="text-white/30 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="text-white/30 hover:text-white transition-colors px-2 py-1 rounded-lg hover:bg-white/5 border border-white/10 text-xs font-mono"
                >
                  Esc
                </button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto overscroll-contain">
                <div className="px-5 pt-4 pb-2">
                  <p className="text-xs font-semibold text-white/25 uppercase tracking-widest">
                    {query
                      ? results.length > 0
                        ? results.length + " result" + (results.length > 1 ? "s" : "")
                        : "No results"
                      : "Quick links"}
                  </p>
                </div>

                {query && results.length === 0 && (
                  <div className="px-5 pb-8 pt-2 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4">
                      <Search className="w-7 h-7 text-white/20" />
                    </div>
                    <p className="text-white/40 text-sm">
                      No results for{" "}
                      <span className="text-white/60 font-semibold">"{query}"</span>
                    </p>
                    <p className="text-white/25 text-xs mt-1">
                      Try a service, technology, or topic
                    </p>
                  </div>
                )}

                {displayedItems.length > 0 && (
                  <ul className="px-3 pb-4 space-y-0.5">
                    {displayedItems.map((item, i) => (
                      <motion.li
                        key={item.href + "-" + i}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.025 }}
                      >
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className={
                            "flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-150 group/r " +
                            (i === activeIndex
                              ? "bg-[#3DD68C]/10 border border-[#3DD68C]/20"
                              : "hover:bg-white/[0.04] border border-transparent")
                          }
                          onMouseEnter={() => setActiveIndex(i)}
                        >
                          <span className={"flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center " + typeColor[item.type]}>
                            {typeIcon(item.type)}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-white group-hover/r:text-[#3DD68C] transition-colors truncate leading-tight">
                              {query ? highlight(item.title, query) : item.title}
                            </p>
                            {item.description && (
                              <p className="text-xs text-white/35 mt-0.5 truncate leading-snug">
                                {query ? highlight(item.description, query) : item.description}
                              </p>
                            )}
                          </div>
                          <span className="flex-shrink-0 text-[10px] font-semibold text-white/25 bg-white/5 rounded-md px-2 py-0.5 hidden sm:block">
                            {item.category}
                          </span>
                          <ArrowRight className="w-4 h-4 text-white/20 group-hover/r:text-[#3DD68C] transition-colors flex-shrink-0" />
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                )}

                <div className="border-t border-white/5 px-5 py-3 flex items-center justify-between">
                  <span className="text-[10px] text-white/20">
                    <kbd className="font-mono bg-white/5 rounded px-1.5 py-0.5 text-white/30">up/down</kbd>{" "}
                    navigate{" "}
                    <kbd className="font-mono bg-white/5 rounded px-1.5 py-0.5 text-white/30">enter</kbd>{" "}
                    open
                  </span>
                  <span className="text-[10px] text-white/20 flex items-center gap-1">
                    <Leaf className="w-3 h-3 text-[#3DD68C]/50" />
                    Sustainabyte.ai
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
