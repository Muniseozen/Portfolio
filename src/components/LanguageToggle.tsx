"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleContext";

const options = [
  { locale: "ja" as const, href: "/", label: "JA", name: "日本語" },
  { locale: "en" as const, href: "/en", label: "EN", name: "English" },
];

export default function LanguageToggle() {
  const { locale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLabel = options.find((o) => o.locale === locale)?.label ?? "JA";

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language selector"
        className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200 bg-white/60 hover:border-[#a8305f]/50 hover:bg-[#a8305f]/5 transition-colors text-xs font-mono"
      >
        <svg
          className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#a8305f] transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
        </svg>
        <span className="text-zinc-900 font-semibold tracking-widest">{currentLabel}</span>
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="w-3 h-3 text-zinc-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 min-w-[140px] rounded-xl border border-zinc-200 bg-white/95 backdrop-blur-xl shadow-lg overflow-hidden z-50"
          >
            {options.map((opt) => {
              const isActive = locale === opt.locale;
              return (
                <li key={opt.locale} role="option" aria-selected={isActive}>
                  <Link
                    href={opt.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between gap-3 px-3.5 py-2.5 text-xs font-mono transition-colors ${
                      isActive
                        ? "bg-[#a8305f]/5 text-[#a8305f]"
                        : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="font-semibold tracking-widest">{opt.label}</span>
                      <span className="text-zinc-400 normal-case tracking-normal">{opt.name}</span>
                    </span>
                    {isActive && (
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
