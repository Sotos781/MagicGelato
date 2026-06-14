"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Hero from "@/components/Hero";
import FlavorCard from "@/components/FlavorCard";
import { flavors } from "@/lib/flavors";
import { ArrowRight, Leaf, Heart, MapPin, Star } from "lucide-react";
import { useState } from "react";

const featured = flavors.slice(0, 6);

const testimonials = [
  {
    name: "Sofia R.",
    text: "The pistachio is unlike anything I've had outside of Sicily. Pure magic.",
    stars: 5,
  },
  {
    name: "James T.",
    text: "My kids drag me here every weekend. The mango sorbet is absolutely divine.",
    stars: 5,
  },
  {
    name: "Maria C.",
    text: "Finally a gelato shop that takes vegan options seriously. The oat milk chocolate is incredible.",
    stars: 5,
  },
];

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <>
      <Hero />

      {/* Featured Flavors */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-[#D4A853] font-medium text-sm uppercase tracking-widest mb-3">
              This Week&apos;s Selection
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#2C1A0E]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Featured Flavors
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((flavor, i) => (
              <FlavorCard key={flavor.id} flavor={flavor} index={i} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/flavors"
              className="inline-flex items-center gap-2 text-[#2C1A0E] font-medium hover:text-[#D4A853] transition-colors"
            >
              View all {flavors.length} flavors <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 px-6 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#D4A853] font-medium text-sm uppercase tracking-widest mb-3">
              Why Magic Gelato
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#2C1A0E]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Crafted with Intention
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf size={32} className="text-[#7BAF7B]" />,
                title: "Local & Seasonal",
                desc: "We source produce from nearby farms, changing our menu with the seasons for maximum freshness.",
              },
              {
                icon: <Heart size={32} className="text-[#F4C5C0]" />,
                title: "Made by Hand",
                desc: "Every batch is handcrafted in small quantities using traditional Italian methods.",
              },
              {
                icon: <MapPin size={32} className="text-[#D4A853]" />,
                title: "Community Roots",
                desc: "Family-owned since 2009. We give back to the community that gave us our start.",
              },
            ].map(({ icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-[#FFF8F0] flex items-center justify-center mx-auto mb-5">
                  {icon}
                </div>
                <h3
                  className="text-xl font-bold text-[#2C1A0E] mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {title}
                </h3>
                <p className="text-[#2C1A0E]/60 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[#2C1A0E]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-[#D4A853] font-medium text-sm uppercase tracking-widest mb-3">
              Our Guests Say
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#FFF8F0]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Pure Delight
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, text, stars }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: stars }).map((_, j) => (
                    <Star key={j} size={14} className="text-[#D4A853] fill-[#D4A853]" />
                  ))}
                </div>
                <p className="text-[#FFF8F0]/80 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{text}&rdquo;
                </p>
                <p className="text-[#D4A853] font-medium text-sm">{name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 bg-[#FFF8F0]">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#D4A853] font-medium text-sm uppercase tracking-widest mb-3">
              Stay in the Loop
            </p>
            <h2
              className="text-4xl font-bold text-[#2C1A0E] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get Gelato Updates
            </h2>
            <p className="text-[#2C1A0E]/60 mb-8">
              New flavors, seasonal specials, and exclusive offers — straight to your inbox.
            </p>

            {subscribed ? (
              <div className="bg-[#A8C5A0]/20 border border-[#A8C5A0] rounded-2xl p-6 text-[#2C1A0E] font-medium">
                🎉 Welcome to the Magic Gelato family!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-5 py-3.5 rounded-full border border-[#2C1A0E]/20 bg-white text-[#2C1A0E] placeholder:text-[#2C1A0E]/40 focus:outline-none focus:ring-2 focus:ring-[#D4A853]"
                />
                <button
                  type="submit"
                  className="bg-[#2C1A0E] text-[#FFF8F0] px-7 py-3.5 rounded-full font-medium hover:bg-[#D4A853] transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
