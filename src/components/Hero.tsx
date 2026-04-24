"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useLocale } from "@/i18n/LocaleContext";

function useTypingAnimation(texts: string[], typingSpeed = 70, deleteSpeed = 30, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const pause = setTimeout(() => { setIsPaused(false); setIsDeleting(true); }, pauseTime);
      return () => clearTimeout(pause);
    }

    const current = texts[textIndex];
    let delay: number;

    if (isDeleting) {
      delay = deleteSpeed + Math.random() * 15;
    } else {
      delay = typingSpeed + Math.random() * 40;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, displayText.length + 1);
        setDisplayText(next);
        if (next.length === current.length) setIsPaused(true);
      } else {
        const next = current.slice(0, displayText.length - 1);
        setDisplayText(next);
        if (next.length === 0) { setIsDeleting(false); setTextIndex((prev) => (prev + 1) % texts.length); }
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isPaused, textIndex, texts, typingSpeed, deleteSpeed, pauseTime]);

  return displayText;
}

const letterVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1, y: 0, rotateX: 0,
    transition: { delay: i * 0.04, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

// Floating Phone Mockup
function FloatingPhone({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className={`absolute hidden lg:block scale-[0.9] origin-center ${className}`}
    >
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div className="w-[130px] h-[260px] bg-zinc-800 rounded-[26px] p-[4px] shadow-2xl border border-zinc-700">
          <div className="w-full h-full bg-white rounded-[22px] relative overflow-hidden flex flex-col">
            {/* Notch */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-3.5 bg-zinc-900 rounded-full z-10" />

            {/* Status bar */}
            <div className="pt-6 px-3 pb-2 flex items-center justify-between">
              <span className="text-[7px] font-semibold text-zinc-800">9:41</span>
              <div className="flex gap-1 items-center">
                <div className="w-2.5 h-1.5 rounded-[1px] border border-zinc-400" />
                <div className="w-1.5 h-1.5 rounded-full border border-zinc-400" />
              </div>
            </div>

            {/* App header */}
            <div className="px-3 pb-2 flex items-center justify-between">
              <span className="text-[9px] font-bold text-zinc-900">Discover</span>
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#a8305f] to-[#e88560]" />
            </div>

            {/* Search bar */}
            <div className="mx-3 mb-3 h-5 rounded-full bg-zinc-100 flex items-center px-2.5 gap-1.5 border border-zinc-200">
              <svg className="w-2.5 h-2.5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <span className="text-[6px] font-medium text-zinc-400">Search projects...</span>
            </div>

            {/* Card */}
            <div className="mx-3 rounded-lg overflow-hidden mb-3 flex-shrink-0 shadow-sm">
              <div className="h-16 bg-gradient-to-br from-[#a8305f] via-[#d4567e] to-[#e88560] relative">
                <div className="absolute bottom-1.5 left-2 right-2">
                  <div className="h-1.5 bg-white/40 rounded w-3/4 mb-1" />
                  <div className="h-1.5 bg-white/20 rounded w-1/2" />
                </div>
              </div>
            </div>

            {/* List items */}
            <div className="px-3 flex-1 space-y-2">
              {[0.7, 0.5, 0.6].map((w, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-zinc-200 flex-shrink-0" style={{ background: i === 0 ? "linear-gradient(135deg, #d4567e, #e88560)" : undefined }} />
                  <div className="flex-1 space-y-1">
                    <div className="h-1.5 bg-zinc-300 rounded" style={{ width: `${w * 100}%` }} />
                    <div className="h-1.5 bg-zinc-200 rounded w-3/4" />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom nav */}
            <div className="mt-auto px-4 py-2.5 flex justify-around border-t border-zinc-100 bg-zinc-50/80">
              <div className="w-2 h-2 rounded-full bg-[#d4567e]" />
              <div className="w-2 h-2 rounded-full bg-zinc-300" />
              <div className="w-2 h-2 rounded-full bg-zinc-300" />
              <div className="w-2 h-2 rounded-full bg-zinc-300" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Floating Laptop Mockup
function FloatingLaptop({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className={`absolute hidden lg:block ${className}`}
    >
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, -1, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="relative"
      >
        {/* Screen */}
        <div className="w-[190px] h-[125px] bg-zinc-800 rounded-t-lg p-[3px] shadow-2xl border border-zinc-700">
          <div className="w-full h-full bg-[#1e1e2e] rounded-t-md relative overflow-hidden">
            {/* Title bar */}
            <div className="flex items-center gap-1 px-2 py-1 bg-[#181825]">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-[5px] text-zinc-500 ml-1.5 font-mono">App.tsx</span>
            </div>
            {/* Code */}
            <div className="px-2 py-1 text-[6px] font-mono leading-[1.7]">
              <span className="text-purple-400">import</span> <span className="text-yellow-400">{"{"}</span> <span className="text-blue-400">motion</span> <span className="text-yellow-400">{"}"}</span> <span className="text-purple-400">from</span> <span className="text-green-400">&quot;framer&quot;</span>
              <br />
              <span className="text-purple-400">import</span> <span className="text-yellow-400">{"{"}</span> <span className="text-blue-400">useState</span> <span className="text-yellow-400">{"}"}</span> <span className="text-purple-400">from</span> <span className="text-green-400">&quot;react&quot;</span>
              <br />
              <br />
              <span className="text-purple-400">export default</span> <span className="text-yellow-400">function</span> <span className="text-blue-300">App</span><span className="text-yellow-400">() {"{"}</span>
              <br />
              <span className="ml-2 text-purple-400">const</span> <span className="text-blue-300">[data, set]</span> <span className="text-white">=</span> <span className="text-blue-400">useState</span><span className="text-yellow-400">([])</span>
              <br />
              <br />
              <span className="ml-2 text-purple-400">return</span> <span className="text-yellow-400">(</span>
              <br />
              <span className="ml-3 text-green-400">&lt;motion.div</span> <span className="text-blue-300">animate</span><span className="text-white">=</span><span className="text-yellow-400">{"{{"}</span><span className="text-blue-300">y</span><span className="text-white">:</span><span className="text-orange-300">0</span><span className="text-yellow-400">{"}}"}</span><span className="text-green-400">&gt;</span>
              <br />
              <span className="ml-4 text-green-400">&lt;Header</span> <span className="text-blue-300">user</span><span className="text-white">=</span><span className="text-yellow-400">{"{"}data{"}"}</span> <span className="text-green-400">/&gt;</span>
            </div>
          </div>
        </div>
        {/* Base */}
        <div className="w-[190px] h-[8px] bg-gradient-to-b from-zinc-300 to-zinc-400 rounded-b-xl relative shadow-md">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-[3px] bg-zinc-400/60 rounded-b" />
        </div>
      </motion.div>
    </motion.div>
  );
}

// Floating Color Palette
function FloatingPalette({ className, delay = 0 }: { className?: string; delay?: number }) {
  const colors = ["#a8305f", "#d4567e", "#e88560", "#f0b080", "#fafafa"];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className={`absolute hidden lg:block ${className}`}
    >
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="bg-white/90 backdrop-blur-sm border border-zinc-200 rounded-xl p-3 shadow-lg"
      >
        <div className="text-[9px] font-mono text-zinc-400 mb-2">Brand Colors</div>
        <div className="flex gap-1.5">
          {colors.map((c) => (
            <div key={c} className="flex flex-col items-center gap-1">
              <div className="w-7 h-7 rounded-lg shadow-sm border border-black/5" style={{ background: c }} />
              <span className="text-[7px] font-mono text-zinc-400">{c.slice(0, 4)}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

// Floating UI Component Card
function FloatingUICard({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className={`absolute hidden lg:block ${className}`}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="bg-white/90 backdrop-blur-sm border border-zinc-200 rounded-xl p-3 shadow-lg w-[160px]"
      >
        <div className="text-[9px] font-mono text-zinc-400 mb-2.5 flex items-center gap-1.5">
          <svg className="w-3 h-3 text-[#d4567e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
          UI Components
        </div>
        {/* Buttons */}
        <div className="flex gap-1.5 mb-2">
          <div className="h-4 px-2 rounded-full bg-gradient-to-r from-[#a8305f] to-[#d4567e] flex items-center">
            <span className="text-[6px] text-white font-medium">Primary</span>
          </div>
          <div className="h-4 px-2 rounded-full border border-zinc-200 flex items-center">
            <span className="text-[6px] text-zinc-500 font-medium">Ghost</span>
          </div>
        </div>
        {/* Input */}
        <div className="h-4 rounded-md border border-zinc-200 bg-zinc-50 px-1.5 flex items-center mb-2">
          <svg className="w-2 h-2 text-zinc-300 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <span className="text-[6px] text-zinc-300">Search...</span>
        </div>
        {/* Card preview */}
        <div className="rounded-md border border-zinc-100 bg-zinc-50 p-1.5 mb-2">
          <div className="h-6 rounded bg-gradient-to-r from-[#a8305f]/15 to-[#e88560]/15 mb-1" />
          <div className="h-1 bg-zinc-200 rounded w-4/5 mb-0.5" />
          <div className="h-1 bg-zinc-200 rounded w-3/5" />
        </div>
        {/* Toggle + badge */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-5 h-3 rounded-full bg-[#d4567e] relative">
              <div className="absolute right-0.5 top-0.5 w-2 h-2 rounded-full bg-white" />
            </div>
            <span className="text-[6px] text-zinc-400">Active</span>
          </div>
          <div className="h-3 px-1.5 rounded-full bg-[#e88560]/15 flex items-center">
            <span className="text-[6px] text-[#e88560] font-medium">New</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Floating Design Tool
function FloatingDesignTool({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={`absolute hidden lg:block ${className}`}
    >
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="bg-white/90 backdrop-blur-sm border border-zinc-200 rounded-xl p-3 shadow-lg w-[150px]"
      >
        <div className="text-[9px] font-mono text-zinc-400 mb-2 flex items-center gap-1.5">
          <svg className="w-3 h-3 text-[#e88560]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
          Design Tokens
        </div>
        <div className="space-y-1">
          <div className="flex items-baseline gap-2">
            <span className="text-[11px] font-bold text-zinc-800">Aa</span>
            <span className="text-[7px] text-zinc-400 font-mono">Heading / 24px</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-[9px] font-medium text-zinc-600">Aa</span>
            <span className="text-[7px] text-zinc-400 font-mono">Body / 14px</span>
          </div>
          <div className="h-px bg-zinc-100 my-1" />
          <div className="flex gap-1">
            <div className="w-4 h-4 rounded bg-gradient-to-br from-[#a8305f] to-[#d4567e]" />
            <div className="w-4 h-4 rounded bg-zinc-900" />
            <div className="w-4 h-4 rounded bg-zinc-100 border border-zinc-200" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const { m, locale } = useLocale();
  const typedRole = useTypingAnimation(m.hero.roles);
  const line1 = "Hello, I'm";
  const line2 = "Munise Haruyama.";
  const homeHref = locale === "en" ? "/en" : "/";

  return (
    <section id="home" className="relative min-h-screen flex items-start pt-24 md:items-center md:pt-0 px-6 overflow-x-clip overflow-y-visible">

      {/* ── Organic geometric background ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ maskImage: "linear-gradient(to bottom, black 60%, transparent 90%)", WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 90%)" }}
      >
        {/* Desktop — 横長viewBoxで全体表示 */}
        <svg
          className="hidden md:block absolute inset-0 w-full h-full"
          viewBox="0 -50 1500 884"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <path d="M1071 237.5C1071 154.381 1138.38 87 1221.5 87C1304.62 87 1372 154.381 1372 237.5C1372 320.619 1304.62 388 1221.5 388H1071V237.5Z" fill="#FAEFEB" />
          <path d="M1066 -77.5C1066 5.619 1133.38 73 1216.5 73C1299.62 73 1367 5.619 1367 -77.5C1367 -160.619 1299.62 -228 1216.5 -228H1066V-77.5Z" fill="#FAE8EC" />
          <path d="M479 241.5C479 163.904 541.904 101 619.5 101C697.096 101 760 163.904 760 241.5C760 319.096 697.096 382 619.5 382H479V241.5Z" fill="#FAE8EC" />
          <path d="M479 395H1056V423.5C1056 582.834 926.834 712 767.5 712C608.166 712 479 582.834 479 423.5V395Z" fill="#FAE8EC" />
          <path d="M1071 547.5C1071 630.619 1138.38 698 1221.5 698C1304.62 698 1372 630.619 1372 547.5C1372 464.381 1304.62 397 1221.5 397H1071V547.5Z" fill="#FAEFEB" />
          <path d="M1056 241.5C1056 163.904 993.096 101 915.5 101C837.904 101 775 163.904 775 241.5V382H1056V241.5Z" fill="#FAEFEB" />
          <path d="M296 73C388.784 73 464 148.216 464 241V544C464 636.784 388.784 712 296 712C203.216 712 128 636.784 128 544V241C128 148.216 203.216 73 296 73ZM297.5 397C218.8 397 155 461.806 155 540.507C155 618.103 217.904 682 295.5 682C373.096 682 436 619.096 436 541.5V397H297.5Z" fill="#FAE8EC" />
        </svg>
        {/* Mobile — 90度回転して縦向きに表示 */}
        <svg
          className="md:hidden absolute inset-0 w-full h-full"
          viewBox="250 -600 700 1200"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <g transform="rotate(90, 750, 242)">
            <path d="M1071 237.5C1071 154.381 1138.38 87 1221.5 87C1304.62 87 1372 154.381 1372 237.5C1372 320.619 1304.62 388 1221.5 388H1071V237.5Z" fill="#FAEFEB" />
            <path d="M1066 -77.5C1066 5.619 1133.38 73 1216.5 73C1299.62 73 1367 5.619 1367 -77.5C1367 -160.619 1299.62 -228 1216.5 -228H1066V-77.5Z" fill="#FAE8EC" />
            <path d="M479 241.5C479 163.904 541.904 101 619.5 101C697.096 101 760 163.904 760 241.5C760 319.096 697.096 382 619.5 382H479V241.5Z" fill="#FAE8EC" />
            <path d="M479 395H1056V423.5C1056 582.834 926.834 712 767.5 712C608.166 712 479 582.834 479 423.5V395Z" fill="#FAE8EC" />
            <path d="M1071 547.5C1071 630.619 1138.38 698 1221.5 698C1304.62 698 1372 630.619 1372 547.5C1372 464.381 1304.62 397 1221.5 397H1071V547.5Z" fill="#FAEFEB" />
            <path d="M1056 241.5C1056 163.904 993.096 101 915.5 101C837.904 101 775 163.904 775 241.5V382H1056V241.5Z" fill="#FAEFEB" />
            <path d="M296 73C388.784 73 464 148.216 464 241V544C464 636.784 388.784 712 296 712C203.216 712 128 636.784 128 544V241C128 148.216 203.216 73 296 73ZM297.5 397C218.8 397 155 461.806 155 540.507C155 618.103 217.904 682 295.5 682C373.096 682 436 619.096 436 541.5V397H297.5Z" fill="#FAE8EC" />
          </g>
        </svg>
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
          {/* Left: Text Content */}
          <div className="flex-1 lg:min-w-[480px]">

            <h1 className="section-title text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] mb-5">
              <span className="block text-zinc-900">
                {line1.split("").map((char, i) => (
                  <motion.span key={`l1-${i}`} custom={i} variants={letterVariants} initial="hidden" animate="visible"
                    style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : undefined }}
                  >{char}</motion.span>
                ))}
              </span>
              <motion.span
                className="block gradient-text"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: line1.length * 0.04, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {line2}
              </motion.span>
            </h1>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }} className="mb-5">
              <span className="text-base md:text-lg font-mono text-zinc-400">{">"} {typedRole}<span className="animate-pulse text-[#d4567e]">|</span></span>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.3 }} className="text-sm md:text-base text-zinc-500 max-w-xl leading-relaxed mb-8 whitespace-pre-line">
              {m.hero.descriptionBefore}
              <span className="text-[#a8305f] font-bold">{m.hero.descriptionHighlight}</span>
              {m.hero.descriptionAfter}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.6 }} className="flex flex-wrap items-center gap-4">
              <a href={`${homeHref}#projects`} className="group relative px-6 py-3 rounded-full overflow-hidden text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95">
                <span className="absolute inset-0 gradient-bg" />
                <span className="relative flex items-center gap-2">{m.hero.ctaWorks}
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </a>
            </motion.div>

          </div>

          {/* Right: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="lg:flex-1 flex-shrink-0 mt-12 lg:mt-0 flex justify-center"
          >
            <div className="relative">
              {/* Floating Elements — surrounding profile photo */}
              <FloatingLaptop className="-top-24 -left-32 z-0" delay={1.3} />
              <FloatingPalette className="-top-24 -right-24 z-0" delay={1.9} />
              <FloatingUICard className="top-1/2 -translate-y-1/2 -right-40 z-0" delay={1.7} />
              <FloatingPhone className="-bottom-28 -left-28 z-0" delay={1.5} />
              <FloatingDesignTool className="-bottom-28 -right-16 z-0" delay={2.1} />

              {/* Decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border-2 border-dashed border-zinc-300 z-10"
              />
              {/* Gradient ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#a8305f] via-[#d4567e] to-[#e88560] opacity-75 blur-sm z-10" />
              {/* Photo container */}
              <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white z-10">
                <Image
                  src="/images/profile.webp"
                  alt="Munise Haruyama"
                  fill
                  className="object-cover object-top scale-[1.2]"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-zinc-400 tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
