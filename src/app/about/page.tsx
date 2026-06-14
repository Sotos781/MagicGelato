"use client";

import { motion } from "framer-motion";

const timeline = [
  { year: "2009", title: "The Beginning", desc: "Founded in a small kitchen by the Conti family with one freezer and a dream." },
  { year: "2013", title: "First Storefront", desc: "Opened our first shop in Milan District. Lines around the block from day one." },
  { year: "2017", title: "Farm Partnerships", desc: "Launched direct partnerships with 8 local farms for seasonal ingredients." },
  { year: "2020", title: "Vegan Range", desc: "Introduced our full plant-based gelato lineup, winning a national award." },
  { year: "2023", title: "3 Locations", desc: "Expanded to three locations while keeping every batch handmade." },
  { year: "2025", title: "Best Gelato Award", desc: "Voted Best Gelato in the City by readers of City Food Magazine." },
];

const team = [
  { name: "Marco Conti", role: "Founder & Head Gelatiere", emoji: "👨‍🍳" },
  { name: "Elena Conti", role: "Co-founder & Creative Director", emoji: "👩‍🎨" },
  { name: "Luca Romano", role: "Head of Flavour Development", emoji: "🧪" },
  { name: "Sophia Park", role: "Operations & Sourcing", emoji: "🌿" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Hero */}
      <section className="pt-36 pb-20 px-6 max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#D4A853] font-medium text-sm uppercase tracking-widest mb-3"
        >
          Our Story
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-bold text-[#2C1A0E] leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Born from a Passion
          <br />
          <span className="text-[#D4A853] italic">for Real Gelato</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-[#2C1A0E]/60 text-lg leading-relaxed"
        >
          Magic Gelato started as a family obsession — Sunday afternoons spent
          perfecting recipes passed down from a grandmother in Florence. Today
          we&apos;re a team of passionate gelatieri, but the soul is exactly the same.
        </motion.p>
      </section>

      {/* Values */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Our Philosophy",
              body: "We believe great gelato starts with great ingredients. No artificial colours, no shortcuts. Every flavour is made the way it should be — slowly, carefully, and with love.",
            },
            {
              title: "The Craft",
              body: "Traditional Italian methods, kept alive. We churn at lower speeds than commercial ice cream, keeping less air in and more flavour. The result is denser, silkier, more intense.",
            },
          ].map(({ title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFF8F0] rounded-3xl p-8"
            >
              <h3
                className="text-2xl font-bold text-[#2C1A0E] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {title}
              </h3>
              <p className="text-[#2C1A0E]/60 leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-[#2C1A0E] text-center mb-16"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Journey
          </motion.h2>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-[#D4A853]/30" />
            <div className="space-y-12">
              {timeline.map(({ year, title, desc }, i) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-8 pl-4"
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-5 h-5 rounded-full bg-[#D4A853] border-4 border-[#FFF8F0] mt-1" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#D4A853] uppercase tracking-widest">
                      {year}
                    </span>
                    <h4
                      className="text-xl font-bold text-[#2C1A0E] mt-1 mb-2"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {title}
                    </h4>
                    <p className="text-[#2C1A0E]/60 text-sm leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 bg-[#2C1A0E]">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-[#FFF8F0] text-center mb-14"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Meet the Team
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, emoji }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center"
              >
                <div className="text-5xl mb-4">{emoji}</div>
                <h4
                  className="text-lg font-bold text-[#FFF8F0] mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {name}
                </h4>
                <p className="text-[#D4A853] text-xs font-medium">{role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
