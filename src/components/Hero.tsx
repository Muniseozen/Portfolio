"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const roles = ["PM / プロダクトマネージャー", "UI/UX デザイナー", "フロントエンドエンジニア", "フルスタック開発者", "モバイルアプリ開発者"];

function useTypingAnimation(texts: string[], typingSpeed = 80, deleteSpeed = 40, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, displayText.length + 1));
        if (displayText.length === current.length) setTimeout(() => setIsDeleting(true), pauseTime);
      } else {
        setDisplayText(current.slice(0, displayText.length - 1));
        if (displayText.length === 0) { setIsDeleting(false); setTextIndex((prev) => (prev + 1) % texts.length); }
      }
    }, isDeleting ? deleteSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deleteSpeed, pauseTime]);

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
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      className={`absolute hidden lg:block ${className}`}
    >
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <div className="w-[110px] h-[220px] bg-zinc-800 rounded-[22px] p-[3px] shadow-2xl border border-zinc-700">
          <div className="w-full h-full bg-white rounded-[19px] relative overflow-hidden flex flex-col">
            {/* Notch */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-3 bg-zinc-900 rounded-full z-10" />
            {/* Status bar */}
            <div className="pt-5 px-2.5 pb-1.5 flex items-center justify-between">
              <span className="text-[6px] font-semibold text-zinc-800">9:41</span>
              <div className="flex gap-0.5 items-center">
                <div className="w-2 h-1.5 rounded-sm border border-zinc-400" />
                <div className="w-1.5 h-1.5 rounded-full border border-zinc-400" />
              </div>
            </div>
            {/* App header */}
            <div className="px-2.5 pb-1.5 flex items-center justify-between">
              <span className="text-[7px] font-bold text-zinc-900">Discover</span>
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#a8305f] to-[#e88560]" />
            </div>
            {/* Search bar */}
            <div className="mx-2.5 mb-2 h-4 rounded-full bg-zinc-100 flex items-center px-2 gap-1">
              <svg className="w-2 h-2 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <span className="text-[5px] text-zinc-300">Search</span>
            </div>
            {/* Card */}
            <div className="mx-2.5 rounded-lg overflow-hidden mb-2 flex-shrink-0">
              <div className="h-14 bg-gradient-to-br from-[#a8305f] via-[#d4567e] to-[#e88560] relative">
                <div className="absolute bottom-1 left-1.5 right-1.5">
                  <div className="h-1 bg-white/30 rounded w-3/4 mb-0.5" />
                  <div className="h-1 bg-white/20 rounded w-1/2" />
                </div>
              </div>
            </div>
            {/* List items */}
            <div className="px-2.5 flex-1 space-y-1.5">
              {[0.6, 0.45, 0.55].map((w, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-zinc-100 flex-shrink-0" style={{ background: i === 0 ? "linear-gradient(135deg, #d4567e, #e88560)" : undefined }} />
                  <div className="flex-1 space-y-0.5">
                    <div className="h-1 bg-zinc-200 rounded" style={{ width: `${w * 100}%` }} />
                    <div className="h-1 bg-zinc-100 rounded w-3/4" />
                  </div>
                </div>
              ))}
            </div>
            {/* Bottom nav */}
            <div className="mt-auto px-3 py-1.5 flex justify-around border-t border-zinc-100">
              <div className="w-1.5 h-1.5 rounded-full bg-[#d4567e]" />
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-200" />
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-200" />
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-200" />
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
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      className={`absolute hidden lg:block ${className}`}
    >
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, -1, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="relative"
      >
        <div className="w-[160px] h-[100px] bg-zinc-200 rounded-t-md p-1.5 shadow-xl border border-zinc-300 border-b-0">
          <div className="w-full h-full bg-zinc-900 rounded-sm relative overflow-hidden">
            <div className="p-2 text-[7px] font-mono leading-tight">
              <span className="text-purple-400">const</span> <span className="text-blue-400">app</span> <span className="text-white">=</span> <span className="text-yellow-400">()</span> <span className="text-purple-400">=&gt;</span> <span className="text-yellow-400">{"{"}</span>
              <br />
              <span className="text-zinc-500 ml-2">// Design + Code</span>
              <br />
              <span className="ml-2 text-purple-400">return</span> <span className="text-green-400">&lt;UI /&gt;</span>
              <br />
              <span className="text-yellow-400">{"}"}</span>
            </div>
          </div>
        </div>
        <div className="w-[176px] h-2.5 bg-zinc-300 rounded-b-md mx-auto relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-zinc-400 rounded-b" />
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
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
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

// Static background orbs — no JS animation, pure CSS opacity
function GlowingOrb({ className, color }: { className?: string; color: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <div className={`w-32 h-32 md:w-48 md:h-48 rounded-full blur-3xl opacity-20 ${color}`} />
    </div>
  );
}

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const typedRole = useTypingAnimation(roles);
  const line1 = "Hello, I'm";
  const line2 = "Haruyama Munise.";

  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 bg-[#fafafa] overflow-hidden">
      {/* Background Accents */}
      <GlowingOrb className="top-20 right-1/4" color="bg-[#a8305f]" />
      <GlowingOrb className="bottom-32 left-1/4" color="bg-[#e88560]" />

      {/* Floating Elements */}
      <FloatingPhone className="top-24 right-[12%]" delay={1.3} />
      <FloatingLaptop className="bottom-28 right-[10%]" delay={1.5} />
      <FloatingPalette className="top-[45%] right-[8%]" delay={1.7} />

      <motion.div style={{ opacity }} className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          {/* Left: Text Content */}
          <div className="flex-1">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex items-center gap-2 mb-5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <span className="text-sm text-zinc-500">Available for work</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] mb-5">
              <span className="block text-zinc-900">
                {line1.split("").map((char, i) => (
                  <motion.span key={`l1-${i}`} custom={i} variants={letterVariants} initial="hidden" animate="visible"
                    style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : undefined }}
                  >{char}</motion.span>
                ))}
              </span>
              <span className="block gradient-text">
                {line2.split("").map((char, i) => (
                  <motion.span key={`l2-${i}`} custom={line1.length + i} variants={letterVariants} initial="hidden" animate="visible"
                    style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : undefined }}
                  >{char}</motion.span>
                ))}
              </span>
            </h1>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }} className="mb-5">
              <span className="text-base md:text-lg font-mono text-zinc-400">{">"} {typedRole}<span className="animate-pulse text-[#d4567e]">|</span></span>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.3 }} className="text-sm md:text-base text-zinc-500 max-w-xl leading-relaxed mb-8">
              女性ならではの感性を用いたUI/UXと、確かな技術力。<br />
              実装の裏付けがあるデザインで、アイデアを迷いなく形にします。<br />
              貴社のビジョンに深く寄り添い、共にプロダクトを育てる開発を。
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.6 }} className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="group relative px-6 py-3 rounded-full overflow-hidden text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95">
                <span className="absolute inset-0 gradient-bg" />
                <span className="relative flex items-center gap-2">つくったもの見る
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
            className="flex-shrink-0 mt-12 lg:mt-0 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border-2 border-dashed border-zinc-300"
              />
              {/* Gradient ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#a8305f] via-[#d4567e] to-[#e88560] opacity-75 blur-sm" />
              {/* Photo container */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white">
                {/* Placeholder - replace src with actual photo */}
                <div className="w-full h-full bg-gradient-to-br from-zinc-200 to-zinc-300 flex items-center justify-center">
                  <span className="text-6xl">👩‍💻</span>
                </div>
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
