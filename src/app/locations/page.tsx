"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const locations = [
  {
    id: 1,
    name: "Milan District",
    address: "123 Gelato Lane, Milan District, NY 10001",
    phone: "+1 (212) 555-0101",
    hours: [
      { days: "Mon – Fri", time: "11:00 am – 9:00 pm" },
      { days: "Sat – Sun", time: "10:00 am – 10:00 pm" },
    ],
    mapUrl: "https://maps.google.com/?q=New+York+NY+10001",
    tag: "Flagship",
  },
  {
    id: 2,
    name: "Brooklyn Heights",
    address: "456 Promenade Ave, Brooklyn, NY 11201",
    phone: "+1 (718) 555-0202",
    hours: [
      { days: "Mon – Fri", time: "12:00 pm – 9:00 pm" },
      { days: "Sat – Sun", time: "11:00 am – 10:00 pm" },
    ],
    mapUrl: "https://maps.google.com/?q=Brooklyn+Heights+NY+11201",
    tag: "Brooklyn",
  },
  {
    id: 3,
    name: "Upper West Side",
    address: "789 Columbus Ave, New York, NY 10024",
    phone: "+1 (212) 555-0303",
    hours: [
      { days: "Mon – Thu", time: "12:00 pm – 9:00 pm" },
      { days: "Fri – Sun", time: "11:00 am – 10:30 pm" },
    ],
    mapUrl: "https://maps.google.com/?q=Upper+West+Side+New+York+NY+10024",
    tag: "New",
  },
];

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Header */}
      <section className="pt-36 pb-16 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#D4A853] font-medium text-sm uppercase tracking-widest mb-3"
        >
          Find Us
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-bold text-[#2C1A0E]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our Locations
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-[#2C1A0E]/60 max-w-xl mx-auto"
        >
          Three locations across New York, each crafting gelato fresh every morning.
        </motion.p>
      </section>

      {/* Location cards */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          {locations.map(({ id, name, address, phone, hours, mapUrl, tag }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-8 md:flex md:gap-10">
                {/* Map placeholder */}
                <div className="md:w-64 md:flex-shrink-0 mb-6 md:mb-0">
                  <div className="h-44 md:h-full rounded-2xl bg-gradient-to-br from-[#A8C5A0]/30 to-[#D4A853]/20 flex items-center justify-center relative overflow-hidden">
                    <MapPin size={40} className="text-[#D4A853]" />
                    <span className="absolute top-3 left-3 bg-[#2C1A0E] text-[#FFF8F0] text-xs font-bold px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h2
                    className="text-2xl font-bold text-[#2C1A0E] mb-4"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {name}
                  </h2>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3 text-sm text-[#2C1A0E]/70">
                      <MapPin size={16} className="text-[#D4A853] mt-0.5 flex-shrink-0" />
                      <span>{address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#2C1A0E]/70">
                      <Phone size={16} className="text-[#D4A853] flex-shrink-0" />
                      <a href={`tel:${phone}`} className="hover:text-[#D4A853] transition-colors">
                        {phone}
                      </a>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock size={16} className="text-[#D4A853]" />
                      <span className="text-sm font-medium text-[#2C1A0E]">Opening Hours</span>
                    </div>
                    <div className="space-y-1 ml-6">
                      {hours.map(({ days, time }) => (
                        <div key={days} className="flex justify-between text-sm text-[#2C1A0E]/60 gap-8">
                          <span>{days}</span>
                          <span className="font-medium text-[#2C1A0E]">{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#2C1A0E] text-[#FFF8F0] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#D4A853] transition-colors"
                  >
                    <MapPin size={14} /> Get Directions
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
