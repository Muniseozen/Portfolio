"use client";

import { motion } from "framer-motion";

const experiences = [
  { year: "2024", title: "フリーランス開始", description: "PM/デザイン/開発をワンストップで提供" },
  { year: "2023", title: "フルスタック開発", description: "React Native / Next.js でのアプリ開発" },
  { year: "2022", title: "UI/UX デザイン", description: "Figma を使ったプロダクトデザイン" },
];

const values = [
  { icon: "🎯", title: "ゴール志向", description: "「何を作るか」より「なぜ作るか」を大切に" },
  { icon: "🤝", title: "コミュニケーション", description: "認識のズレをなくす丁寧なすり合わせ" },
  { icon: "⚡", title: "スピード感", description: "素早いプロトタイプで早期にフィードバック" },
  { icon: "✨", title: "細部へのこだわり", description: "使い心地を左右する小さな部分も妥協しない" },
];

// Number rain columns
function NumberRain() {
  const columns = 50;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 flex gap-2 justify-around">
        {[...Array(columns)].map((_, i) => (
          <NumberColumn key={i} index={i} />
        ))}
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-transparent to-[#fafafa]" />
    </div>
  );
}

function NumberColumn({ index }: { index: number }) {
  const numbers = "0123456789";
  const length = 30 + Math.floor(Math.random() * 20);
  const chars = [...Array(length)].map(() => numbers[Math.floor(Math.random() * numbers.length)]);
  const speed = 4 + Math.random() * 6;
  // Stagger start positions so some are already mid-fall
  const initialOffset = (index % 5) * -20;

  return (
    <div
      className="font-mono text-sm text-black/[0.08] leading-5 animate-number-fall whitespace-nowrap"
      style={{
        animationDuration: `${speed}s`,
        animationDelay: `${-speed * (index % 10) / 10}s`,
        transform: `translateY(${initialOffset}%)`,
      }}
    >
      {chars.map((char, i) => (
        <div
          key={i}
          style={{ opacity: Math.max(0.15, 0.8 - i * 0.025) }}
          className="text-center"
        >
          {char}
        </div>
      ))}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-[#fafafa] relative overflow-hidden">
      {/* Falling numbers background */}
      <NumberRain />

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#a8305f]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e88560]/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
            <span className="gradient-text">About</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl">
            企画・デザイン・開発、ぜんぶやります。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="card-dark rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">自己紹介</h3>
              <div className="space-y-4 text-zinc-500 leading-relaxed">
                <p>
                  はじめまして、<span className="text-zinc-900 font-medium">Munise</span> です。
                </p>
                <p>
                  PM（プロダクトマネージャー）として要件定義から、UI/UXデザイナーとしてユーザー体験の設計、
                  そしてフロントエンド/モバイルエンジニアとして実装まで、
                  <span className="text-zinc-900 font-medium">一気通貫</span>で対応できるのが強みです。
                </p>
                <p>
                  「こんなアプリ作りたいんだけど...」という漠然としたアイデアから、
                  実際に動くプロダクトまで、一緒に形にしていきましょう。
                </p>
              </div>

              {/* Timeline */}
              <div className="mt-8 pt-8 border-t border-zinc-200">
                <h4 className="text-sm font-mono uppercase tracking-widest text-zinc-400 mb-6">Experience</h4>
                <div className="space-y-4">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={exp.year}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <span className="text-sm font-mono text-[#d4567e] w-12">{exp.year}</span>
                      <div>
                        <p className="text-zinc-900 font-medium">{exp.title}</p>
                        <p className="text-sm text-zinc-400">{exp.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-zinc-900 mb-6">大切にしていること</h3>
            <div className="grid gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="card-dark rounded-xl p-5 flex gap-4 items-start group cursor-default"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">{value.icon}</span>
                  <div>
                    <h4 className="text-zinc-900 font-medium mb-1">{value.title}</h4>
                    <p className="text-sm text-zinc-400">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-[#a8305f]/10 to-[#e88560]/10 border border-[#a8305f]/20"
            >
              <p className="text-zinc-600 mb-4">
                一緒にプロジェクトを進めてみませんか？
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[#d4567e] hover:text-[#e88560] transition-colors font-medium"
              >
                お問い合わせする
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
