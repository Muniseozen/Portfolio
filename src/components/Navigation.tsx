"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#09090b]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold gradient-text">MO</a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-zinc-400 hover:text-white transition-colors duration-300">{link.label}</a>
          ))}
        </div>
        <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
          <motion.span animate={isMobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5 bg-white" />
          <motion.span animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-6 h-0.5 bg-white" />
          <motion.span animate={isMobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5 bg-white" />
        </button>
      </div>
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-[#09090b]/95 backdrop-blur-xl border-b border-white/5">
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsMobileOpen(false)} className="text-lg text-zinc-400 hover:text-white transition-colors">{link.label}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
