"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FFF8F0]">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#F4C5C0]/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#A8C5A0]/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#C9B8D8]/20 blur-3xl" />
      </div>

      {/* Floating scoops decoration */}
      <motion.div
        className="absolute top-24 right-16 text-7xl hidden lg:block"
        animate={{ y: [0, -18, 0], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        🍦
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-20 text-5xl hidden lg:block"
        animate={{ y: [0, 14, 0], rotate: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
      >
        🍧
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#D4A853]/15 border border-[#D4A853]/30 rounded-full px-4 py-1.5 text-sm text-[#2C1A0E] font-medium mb-8"
        >
          <Star size={14} className="text-[#D4A853] fill-[#D4A853]" />
          Voted Best Gelato in the City 2025
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold text-[#2C1A0E] leading-tight mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Every Scoop
          <br />
          <span className="text-[#D4A853] italic">Tells a Story</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-[#2C1A0E]/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Handcrafted with the finest Italian ingredients, sourced locally, and
          made fresh every morning. Pure gelato. Pure magic.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/flavors"
            className="inline-flex items-center gap-2 bg-[#2C1A0E] text-[#FFF8F0] px-8 py-4 rounded-full font-medium hover:bg-[#D4A853] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4A853]/30 hover:-translate-y-0.5"
          >
            Explore Flavors <ArrowRight size={18} />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 border-2 border-[#2C1A0E] text-[#2C1A0E] px-8 py-4 rounded-full font-medium hover:bg-[#2C1A0E] hover:text-[#FFF8F0] transition-all duration-300"
          >
            Our Story
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-12 mt-20 pt-10 border-t border-[#2C1A0E]/10"
        >
          {[
            { value: "40+", label: "Unique Flavors" },
            { value: "15", label: "Years of Craft" },
            { value: "3", label: "Locations" },
            { value: "50K+", label: "Happy Customers" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div
                className="text-3xl font-bold text-[#D4A853]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {value}
              </div>
              <div className="text-sm text-[#2C1A0E]/60 mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
