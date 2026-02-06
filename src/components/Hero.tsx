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

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const typedRole = useTypingAnimation(roles);
  const headline = "Hello, I'm Munise.";

  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 bg-[#09090b]">
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div className="orb orb-1" /><div className="orb orb-2" /><div className="orb orb-3" />
      </motion.div>
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

      <motion.div style={{ opacity }} className="relative z-10 max-w-6xl mx-auto w-full">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex items-center gap-2 mb-8">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
          </span>
          <span className="text-sm text-zinc-400">Available for freelance work</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-6">
          {headline.split("").map((char, i) => (
            <motion.span key={`${char}-${i}`} custom={i} variants={letterVariants} initial="hidden" animate="visible"
              className={i >= headline.indexOf("Munise") ? "gradient-text" : "text-white"}
              style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : undefined }}
            >{char}</motion.span>
          ))}
        </h1>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }} className="mb-8">
          <span className="text-xl md:text-3xl font-mono text-zinc-500">{">"} {typedRole}<span className="animate-pulse text-wine-light">|</span></span>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.3 }} className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-12">
          企画から納品まで、まるっとお任せください。<br />「こんなの作りたい」を一緒にカタチにします。
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.6 }} className="flex flex-wrap items-center gap-4">
          <a href="#projects" className="group relative px-8 py-4 rounded-full overflow-hidden text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95">
            <span className="absolute inset-0 gradient-bg" />
            <span className="relative flex items-center gap-2">つくったもの見る
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </span>
          </a>
          <a href="#contact" className="group px-8 py-4 rounded-full text-sm font-medium text-white border border-zinc-800 hover:bg-zinc-800/50 transition-all hover:scale-105 active:scale-95">
            <span className="flex items-center gap-2">話しかける<span className="text-lg transition-transform group-hover:rotate-12 inline-block">&#x1F44B;</span></span>
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }} className="mt-20 flex flex-wrap gap-12">
          {[{ value: "4+", label: "プロジェクト実績" }, { value: "3+", label: "対応領域" }, { value: "100%", label: "やる気" }].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-black gradient-text">{stat.value}</div>
              <div className="text-sm text-zinc-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-zinc-500 tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <svg className="w-5 h-5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
