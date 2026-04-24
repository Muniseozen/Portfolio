"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import LanguageToggle from "@/components/LanguageToggle";
import { useLocale } from "@/i18n/LocaleContext";

function buildNavLinks(homeHref: string) {
  return [
    { href: `${homeHref}#home`, label: "Home" },
    { href: `${homeHref}#about`, label: "About" },
    { href: `${homeHref}#skills`, label: "Skills" },
    { href: "/career", label: "Career" },
    { href: `${homeHref}#projects`, label: "Projects" },
  ];
}

interface NavigationProps {
  variant?: "home" | "detail";
}

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  const isRoute = href.startsWith("/");
  const cls = "relative text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-300 group";

  const inner = (
    <>
      {label}
      <span className="absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-[#a8305f] to-[#e88560] rounded-full" />
    </>
  );

  return isRoute ? (
    <Link href={href} onClick={onClick} className={cls}>{inner}</Link>
  ) : (
    <a href={href} onClick={onClick} className={cls}>{inner}</a>
  );
}

export default function Navigation({ variant = "home" }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { locale } = useLocale();
  const homeHref = locale === "en" ? "/en" : "/";
  const navLinks = buildNavLinks(homeHref);

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
          ? "bg-white/90 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={homeHref} className="flex items-center gap-2 group">
          <span className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#a8305f] via-[#d4567e] to-[#e88560] shadow-sm group-hover:shadow-md transition-shadow">
            <span className="text-sm font-black text-white tracking-tight">M</span>
          </span>
          <span className="text-sm font-bold text-zinc-900 hidden sm:block">
            Munise<span className="text-zinc-400 font-normal ml-1.5">/ Portfolio</span>
          </span>
        </Link>

        {variant === "home" ? (
          <>
            {/* Desktop nav */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center gap-7 mr-6">
                {navLinks.map((link) => (
                  <NavLink key={link.href} href={link.href} label={link.label} />
                ))}
              </div>
              <LanguageToggle />
            </div>

            {/* Mobile: language toggle + hamburger */}
            <div className="md:hidden flex items-center gap-4">
              <LanguageToggle />
              <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
                <motion.span animate={isMobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5 bg-zinc-900" />
                <motion.span animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-6 h-0.5 bg-zinc-900" />
                <motion.span animate={isMobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5 bg-zinc-900" />
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-6">
            <LanguageToggle />
            <Link
              href={homeHref}
              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors duration-300 flex items-center gap-2"
            >
              <span>&larr;</span>
              <span>Back</span>
            </Link>
          </div>
        )}
      </div>

      {/* Bottom accent line (visible on scroll) */}
      <div
        className={`h-px transition-opacity duration-300 ${isScrolled ? "opacity-100" : "opacity-0"}`}
        style={{ background: "linear-gradient(to right, transparent, #d4567e40 30%, #e8856040 70%, transparent)" }}
      />

      {/* Mobile menu */}
      {variant === "home" && (
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white/95 backdrop-blur-xl border-b border-black/5">
              <div className="flex flex-col items-center gap-6 py-8">
                {navLinks.map((link) => (
                  <NavLink key={link.href} href={link.href} label={link.label} onClick={() => setIsMobileOpen(false)} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.nav>
  );
}
