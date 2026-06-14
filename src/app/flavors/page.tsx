"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlavorCard from "@/components/FlavorCard";
import { flavors } from "@/lib/flavors";
import type { Flavor } from "@/components/FlavorCard";

const categories = ["All", "Classic", "Seasonal", "Vegan", "Sorbet"] as const;
type Category = (typeof categories)[number];

export default function FlavorsPage() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All"
      ? flavors
      : flavors.filter((f) => f.category === active);

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Header */}
      <section className="pt-36 pb-16 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#D4A853] font-medium text-sm uppercase tracking-widest mb-3"
        >
          Made Fresh Daily
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-bold text-[#2C1A0E]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our Flavors
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-[#2C1A0E]/60 max-w-xl mx-auto"
        >
          {flavors.length} handcrafted flavors. Rotate seasonally. Always
          made with the finest ingredients.
        </motion.p>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mt-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? "bg-[#2C1A0E] text-[#FFF8F0]"
                  : "bg-white text-[#2C1A0E] border border-[#2C1A0E]/15 hover:border-[#D4A853]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filtered.map((flavor: Flavor, i) => (
                <FlavorCard key={flavor.id} flavor={flavor} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
