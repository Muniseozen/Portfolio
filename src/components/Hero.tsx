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

// Floating Code Snippet Component - stays dark
function FloatingCode({ code, language, className, delay = 0 }: { code: string; language: string; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className={`absolute hidden lg:block ${className}`}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 rounded-lg p-3 shadow-xl"
      >
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span className="text-[10px] text-zinc-500 ml-2 font-mono">{language}</span>
        </div>
        <pre className="text-[11px] font-mono text-zinc-300 leading-relaxed">
          <code>{code}</code>
        </pre>
      </motion.div>
    </motion.div>
  );
}

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
        animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* Phone Frame */}
        <div className="w-[140px] h-[280px] bg-zinc-200 rounded-[28px] p-2 shadow-2xl border border-zinc-300">
          <div className="w-full h-full bg-gradient-to-br from-[#a8305f] via-[#d4567e] to-[#e88560] rounded-[22px] relative overflow-hidden">
            {/* Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-zinc-800 rounded-full" />
            {/* Screen Content */}
            <div className="absolute inset-4 top-10 flex flex-col gap-2">
              <div className="h-3 bg-white/20 rounded w-3/4" />
              <div className="h-3 bg-white/20 rounded w-1/2" />
              <div className="h-16 bg-white/10 rounded-lg mt-2" />
              <div className="h-3 bg-white/20 rounded w-2/3" />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Floating Laptop Mockup - screen stays dark
function FloatingLaptop({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      className={`absolute hidden lg:block ${className}`}
    >
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, -1, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="relative"
      >
        {/* Laptop Screen */}
        <div className="w-[200px] h-[130px] bg-zinc-200 rounded-t-lg p-2 shadow-2xl border border-zinc-300 border-b-0">
          <div className="w-full h-full bg-zinc-900 rounded-sm relative overflow-hidden">
            {/* Code on screen - stays dark */}
            <div className="p-2 text-[8px] font-mono leading-tight">
              <span className="text-purple-400">const</span> <span className="text-blue-400">app</span> <span className="text-white">=</span> <span className="text-yellow-400">()</span> <span className="text-purple-400">=&gt;</span> <span className="text-yellow-400">{"{"}</span>
              <br />
              <span className="text-zinc-500 ml-2">// Building cool stuff</span>
              <br />
              <span className="ml-2 text-purple-400">return</span> <span className="text-green-400">&lt;Magic /&gt;</span>
              <br />
              <span className="text-yellow-400">{"}"}</span>
            </div>
          </div>
        </div>
        {/* Laptop Base */}
        <div className="w-[220px] h-3 bg-zinc-300 rounded-b-lg mx-auto relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-zinc-400 rounded-b" />
        </div>
      </motion.div>
    </motion.div>
  );
}

// Glowing Accent Orbs - reduced opacity for light theme
function GlowingOrb({ className, color, delay = 0 }: { className?: string; color: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay }}
      className={`absolute pointer-events-none ${className}`}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className={`w-32 h-32 md:w-48 md:h-48 rounded-full blur-3xl ${color}`}
      />
    </motion.div>
  );
}

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const typedRole = useTypingAnimation(roles);
  const headline = "Hello, I'm Munise.";

  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 bg-[#fafafa] overflow-hidden">
      {/* Glowing Background Accents */}
      <GlowingOrb className="top-20 right-1/4" color="bg-[#a8305f]" delay={0.5} />
      <GlowingOrb className="bottom-32 left-1/4" color="bg-[#e88560]" delay={0.8} />
      <GlowingOrb className="top-1/2 right-10" color="bg-[#d4567e]" delay={1} />

      {/* Floating Elements */}
      <FloatingCode
        code={`function create() {\n  return <Amazing />;\n}`}
        language="jsx"
        className="top-40 right-16"
        delay={1.5}
      />
      <FloatingCode
        code={`const skills = [\n  "React",\n  "TypeScript"\n];`}
        language="ts"
        className="bottom-36 right-24"
        delay={1.8}
      />
      <FloatingPhone className="top-32 right-[24%]" delay={2} />
      <FloatingLaptop className="bottom-28 right-[16%]" delay={2.2} />

      <motion.div style={{ opacity }} className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Left: Text Content */}
          <div className="flex-1">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex items-center gap-2 mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <span className="text-sm text-zinc-500">Available for freelance work</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-6">
              {headline.split("").map((char, i) => (
                <motion.span key={`${char}-${i}`} custom={i} variants={letterVariants} initial="hidden" animate="visible"
                  className={i >= headline.indexOf("Munise") ? "gradient-text" : "text-zinc-900"}
                  style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : undefined }}
                >{char}</motion.span>
              ))}
            </h1>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }} className="mb-8">
              <span className="text-xl md:text-2xl font-mono text-zinc-400">{">"} {typedRole}<span className="animate-pulse text-[#d4567e]">|</span></span>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.3 }} className="text-lg md:text-xl text-zinc-500 max-w-xl leading-relaxed mb-10">
              企画から納品まで、まるっとお任せください。<br />「こんなの作りたい」を一緒にカタチにします。
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.6 }} className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="group relative px-8 py-4 rounded-full overflow-hidden text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95">
                <span className="absolute inset-0 gradient-bg" />
                <span className="relative flex items-center gap-2">つくったもの見る
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </a>
              <a href="#contact" className="group px-8 py-4 rounded-full text-sm font-medium text-zinc-900 border border-zinc-200 hover:bg-zinc-100 transition-all hover:scale-105 active:scale-95">
                <span className="flex items-center gap-2">話しかける<span className="text-lg transition-transform group-hover:rotate-12 inline-block">&#x1F44B;</span></span>
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }} className="mt-16 flex flex-wrap gap-10">
              {[{ value: "4+", label: "プロジェクト実績" }, { value: "3+", label: "対応領域" }, { value: "100%", label: "やる気" }].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-black gradient-text">{stat.value}</div>
                  <div className="text-sm text-zinc-400 mt-1">{stat.label}</div>
                </div>
              ))}
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
