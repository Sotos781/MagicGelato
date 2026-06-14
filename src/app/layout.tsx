import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Magic Gelato — Artisan Italian Ice Cream",
    template: "%s | Magic Gelato",
  },
  description:
    "Handcrafted artisan gelato made with premium ingredients. Italian-inspired flavors, locally sourced, made fresh daily.",
  keywords: ["gelato", "ice cream", "artisan", "Italian", "handmade"],
  openGraph: {
    title: "Magic Gelato",
    description: "Handcrafted artisan gelato made with premium ingredients.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
