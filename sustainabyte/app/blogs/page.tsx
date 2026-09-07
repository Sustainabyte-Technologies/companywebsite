"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Clock,
  ArrowRight,
  Sparkles,
  BookOpen,
  Search,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { blogPosts, BlogPost } from "@/lib/blogsData";
import BlogModal from "@/components/blogs/BlogModal";

const categories = ["All", "Agentic AI", "Energy Management", "Smart Utilities"];

export default function BlogsPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" ||
      post.category === selectedCategory ||
      post.tag === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen text-[#0D1B3E] overflow-x-hidden font-[family-name:var(--font-sora)]">
      {/* ── Hero Section ── */}
      <section className="relative w-full min-h-[500px] flex items-center pt-32 pb-20 overflow-hidden bg-[#0D1B3E]">
        {/* Pure Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/blogs/Untitled-design.webp"
            alt="Sustainability Insights Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
    
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 text-white drop-shadow-md">
              Sustainability Insights for Built
              <br />
              Environments
            </h1>

            {/* Subscribe button + social icons */}
            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                href="#newsletter"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-3 rounded text-white bg-[#4DB846] hover:bg-[#3ca036] font-semibold text-sm transition-colors shadow-lg"
              >
                Subscribe
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/company/sustainabyte-ai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.05 }}
                className="w-11 h-11 rounded bg-[#4DB846] hover:bg-[#3ca036] flex items-center justify-center text-white transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>

              <motion.a
                href="https://wa.me/918377007638?text=Hello!%20I%20visited%20your%20website%20and%20would%20like%20to%20learn%20more%20about%20Sustainabyte%27s%20AI-Powered%20Energy%20Intelligence%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                whileHover={{ scale: 1.05 }}
                className="w-11 h-11 rounded bg-[#4DB846] hover:bg-[#3ca036] flex items-center justify-center text-white transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </motion.a>

              <motion.a
                href="https://www.youtube.com/@SustainabyteTechnologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                whileHover={{ scale: 1.05 }}
                className="w-11 h-11 rounded bg-[#4DB846] hover:bg-[#3ca036] flex items-center justify-center text-white transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Filter & Search Bar ── */}
      <section className="py-8 bg-gray-50/80 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    selectedCategory === category
                      ? "bg-[#0D1B3E] text-white shadow-sm"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-full text-xs text-[#0D1B3E] placeholder-gray-400 outline-none focus:border-[#4DB846] focus:ring-1 focus:ring-[#4DB846] transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Latest Articles ── */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12 border-b border-gray-100 pb-4"
          >
            <div>
              <span className="text-xs font-bold text-[#4DB846] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5" /> Curated Knowledge
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0D1B3E] uppercase tracking-wide">
                Latest Articles
              </h2>
            </div>
            <span className="text-xs text-gray-400 font-medium">
              Showing {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
            </span>
          </motion.div>

          {/* Articles Grid (Small / Compact Size) */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
              <p className="text-gray-500 text-sm">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 text-xs font-semibold text-[#4DB846] hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((article, idx) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  onClick={() => setSelectedArticle(article)}
                  className="group flex flex-col bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  <div className="flex flex-col h-full">
                    {/* Thumbnail - Compact */}
                    <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-gray-100">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className={`group-hover:scale-105 transition-transform duration-500 ease-out ${article.imageFit === "contain" ? "object-contain" : "object-cover"} ${article.imagePosition || "object-center"}`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full bg-[#0D1B3E]/85 backdrop-blur-md text-white text-[10px] font-semibold tracking-wide">
                          {article.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content - Compact */}
                    <div className="p-5 flex flex-col flex-1 justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-gray-400 text-[11px] mb-2">
                          <span>{article.date}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                          </span>
                        </div>

                        <h3 className="text-[#0D1B3E] font-bold text-base leading-snug mb-2 group-hover:text-[#4DB846] transition-colors duration-200 line-clamp-2">
                          {article.title}
                        </h3>

                        <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#4DB846]">
                        <span>Read in Popup</span>
                        <div className="w-6 h-6 rounded-full bg-[#4DB846]/10 group-hover:bg-[#4DB846] text-[#4DB846] group-hover:text-white flex items-center justify-center transition-all">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Blog Reader Popup / Modal ── */}
      <BlogModal
        post={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      {/* ── Newsletter Section ── */}
      <section
        id="newsletter"
        className="py-20 relative overflow-hidden bg-[#eaf4eb]"
      >
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Left copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:max-w-sm"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-[#3DA45C] mb-3 leading-tight">
                Want to keep up with our blog?
              </h3>
              <p className="text-[#0D1B3E]/70 text-sm leading-relaxed font-medium">
                Our most valuable tips right inside your inbox, once per month.
              </p>
            </motion.div>

            {/* Right form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-auto"
            >
              {subscribed ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex items-center gap-3 px-8 py-4 rounded bg-[#3DA45C]/20 border border-[#3DA45C]/40 text-[#0D1B3E] font-semibold"
                >
                  <Leaf className="w-5 h-5 text-[#3DA45C]" />
                  You&apos;re subscribed! Welcome aboard 🎉
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your e-mail"
                    className="flex-1 px-5 py-3 border border-transparent bg-[#0D1B3E] text-white placeholder-gray-400 text-sm outline-none focus:border-[#3DA45C] transition-all min-w-0 sm:min-w-[280px]"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#4DB846] hover:bg-[#3ca036] text-white font-semibold text-sm transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Subscribe
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
