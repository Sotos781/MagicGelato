"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, IceCream } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/flavors", label: "Flavors" },
  { href: "/about", label: "About" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <IceCream
            size={28}
            className="text-[#D4A853] group-hover:rotate-12 transition-transform duration-300"
          />
          <span
            className="text-xl font-playfair font-bold text-[#2C1A0E]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Magic Gelato
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors duration-200 hover:text-[#D4A853] relative group ${
                pathname === href ? "text-[#D4A853]" : "text-[#2C1A0E]"
              }`}
            >
              {label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#D4A853] transition-all duration-300 ${
                  pathname === href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
          <Link
            href="/flavors"
            className="bg-[#2C1A0E] text-[#FFF8F0] px-5 py-2 rounded-full text-sm font-medium hover:bg-[#D4A853] transition-colors duration-300"
          >
            Order Now
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#2C1A0E]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-[#2C1A0E]/10 px-6 py-6 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-base font-medium ${
                pathname === href ? "text-[#D4A853]" : "text-[#2C1A0E]"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/flavors"
            onClick={() => setOpen(false)}
            className="bg-[#2C1A0E] text-[#FFF8F0] px-5 py-2 rounded-full text-sm font-medium text-center hover:bg-[#D4A853] transition-colors"
          >
            Order Now
          </Link>
        </div>
      )}
    </header>
  );
}
