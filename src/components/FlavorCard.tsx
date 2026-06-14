"use client";

import { motion } from "framer-motion";
import { Leaf, Wheat } from "lucide-react";

export interface Flavor {
  id: number;
  name: string;
  description: string;
  category: "Classic" | "Seasonal" | "Vegan" | "Sorbet";
  color: string;
  emoji: string;
  vegan?: boolean;
  glutenFree?: boolean;
  allergens?: string[];
}

interface FlavorCardProps {
  flavor: Flavor;
  index?: number;
}

const categoryColors: Record<string, string> = {
  Classic: "#D4A853",
  Seasonal: "#A8C5A0",
  Vegan: "#7BAF7B",
  Sorbet: "#F4C5C0",
};

export default function FlavorCard({ flavor, index = 0 }: FlavorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      {/* Color block */}
      <div
        className="h-44 flex items-center justify-center text-6xl relative"
        style={{ backgroundColor: flavor.color + "33" }}
      >
        <span className="group-hover:scale-110 transition-transform duration-300 inline-block">
          {flavor.emoji}
        </span>
        <span
          className="absolute top-3 right-3 text-xs font-medium px-3 py-1 rounded-full"
          style={{
            backgroundColor: categoryColors[flavor.category] + "33",
            color: "#2C1A0E",
          }}
        >
          {flavor.category}
        </span>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3
          className="text-lg font-bold text-[#2C1A0E] mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {flavor.name}
        </h3>
        <p className="text-sm text-[#2C1A0E]/60 leading-relaxed mb-4">
          {flavor.description}
        </p>

        <div className="flex items-center gap-3">
          {flavor.vegan && (
            <span className="flex items-center gap-1 text-xs text-[#7BAF7B] font-medium">
              <Leaf size={12} /> Vegan
            </span>
          )}
          {flavor.glutenFree && (
            <span className="flex items-center gap-1 text-xs text-[#D4A853] font-medium">
              <Wheat size={12} /> GF
            </span>
          )}
          {flavor.allergens && (
            <span className="ml-auto text-xs text-[#2C1A0E]/40">
              Contains: {flavor.allergens.join(", ")}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
