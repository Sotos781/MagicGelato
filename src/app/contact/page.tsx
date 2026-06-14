"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: FormState = { name: "", email: "", subject: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Enter a valid email";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSent(true);
      setForm(initialForm);
    }
  };

  const field = (
    key: keyof FormState,
    label: string,
    type: string = "text",
    placeholder: string = ""
  ) => (
    <div>
      <label className="block text-sm font-medium text-[#2C1A0E] mb-1.5">{label}</label>
      <input
        type={type}
        value={form[key]}
        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl border text-[#2C1A0E] bg-white placeholder:text-[#2C1A0E]/30 focus:outline-none focus:ring-2 focus:ring-[#D4A853] transition-all ${
          errors[key] ? "border-red-400" : "border-[#2C1A0E]/15"
        }`}
      />
      {errors[key] && <p className="text-red-500 text-xs mt-1">{errors[key]}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      {/* Header */}
      <section className="pt-36 pb-16 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#D4A853] font-medium text-sm uppercase tracking-widest mb-3"
        >
          Get in Touch
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-6xl font-bold text-[#2C1A0E]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Say Hello
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-[#2C1A0E]/60 max-w-xl mx-auto"
        >
          Questions, catering requests, feedback, or just want to talk gelato?
          We&apos;d love to hear from you.
        </motion.p>
      </section>

      {/* Content */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {[
              {
                icon: <Mail size={20} className="text-[#D4A853]" />,
                label: "Email",
                value: "hello@magicgelato.com",
                href: "mailto:hello@magicgelato.com",
              },
              {
                icon: <Phone size={20} className="text-[#D4A853]" />,
                label: "Phone",
                value: "+1 (212) 555-0101",
                href: "tel:+12125550101",
              },
              {
                icon: <MapPin size={20} className="text-[#D4A853]" />,
                label: "Flagship",
                value: "123 Gelato Lane, Milan District, NY",
                href: "/locations",
              },
            ].map(({ icon, label, value, href }) => (
              <div key={label} className="bg-white rounded-2xl p-5 flex items-start gap-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-[#FFF8F0] flex items-center justify-center flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-xs text-[#2C1A0E]/50 font-medium uppercase tracking-wider mb-0.5">
                    {label}
                  </p>
                  <a
                    href={href}
                    className="text-sm text-[#2C1A0E] font-medium hover:text-[#D4A853] transition-colors"
                  >
                    {value}
                  </a>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm"
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="text-5xl mb-4">🍦</div>
                <h3
                  className="text-2xl font-bold text-[#2C1A0E] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Message Sent!
                </h3>
                <p className="text-[#2C1A0E]/60">
                  Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm text-[#D4A853] underline underline-offset-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {field("name", "Your Name", "text", "Jane Smith")}
                  {field("email", "Email Address", "email", "jane@example.com")}
                </div>
                {field("subject", "Subject (optional)", "text", "Catering inquiry...")}
                <div>
                  <label className="block text-sm font-medium text-[#2C1A0E] mb-1.5">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    placeholder="Tell us what's on your mind..."
                    className={`w-full px-4 py-3 rounded-xl border text-[#2C1A0E] bg-white placeholder:text-[#2C1A0E]/30 focus:outline-none focus:ring-2 focus:ring-[#D4A853] transition-all resize-none ${
                      errors.message ? "border-red-400" : "border-[#2C1A0E]/15"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#2C1A0E] text-[#FFF8F0] py-3.5 rounded-xl font-medium hover:bg-[#D4A853] transition-colors duration-300"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
