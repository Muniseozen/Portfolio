"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import NumberRain from "@/components/NumberRain";

const GradientDefs = ({ id }: { id: string }) => (
  <defs>
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#a8305f" />
      <stop offset="50%" stopColor="#d4567e" />
      <stop offset="100%" stopColor="#e88560" />
    </linearGradient>
  </defs>
);

const TargetIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#target-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><GradientDefs id="target-grad" /><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;
const ChatIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#chat-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><GradientDefs id="chat-grad" /><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>;
const ZapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#zap-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><GradientDefs id="zap-grad" /><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#users-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><GradientDefs id="users-grad" /><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
const LayersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#layers-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><GradientDefs id="layers-grad" /><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>;

const values = [
  { icon: <TargetIcon />, title: "「なぜ作るか」から考える", description: "ゴールから逆算する。届けるための視点を大事にする。" },
  { icon: <ChatIcon />, title: "認識のズレをなくす対話", description: "言葉の裏にある意図を拾って、プロジェクトを前に進める。" },
  { icon: <ZapIcon />, title: "迷う前にまず形にする", description: "考えすぎるより動く。出してから磨く。" },
  { icon: <UsersIcon />, title: "チームが楽しく働ける空気", description: "職種関係なく、前向きに話せる場がいいものを作ると思っている。" },
  { icon: <LayersIcon />, title: "実装がわかるデザイン", description: "きれいなだけじゃなく、ちゃんと動くものを。エンジニア目線とデザイン目線、両方持つ。" },
];

export default function About() {
  return (
    <section id="about" className="py-6 px-6 relative overflow-hidden">
      {/* Falling numbers background */}
      <NumberRain />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -150px 0px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-2 pr-2">
            <span className="gradient-text">About</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl mt-2">
            戦略からデザイン、実装まで。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -150px 0px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-lg font-bold text-zinc-900 mb-4">自己紹介</h3>
            <div className="card-dark rounded-2xl p-6">
              <div className="space-y-3 text-sm text-zinc-500 leading-relaxed">
                <p>
                  はじめまして、<span className="text-zinc-900 font-bold">Munise（むにせ）</span>です。
                </p>
                <p>
                  18歳でトルコから来日し、新卒でテレビ制作の現場へ。分刻みのスケジュールの中で<span className="text-zinc-900 font-bold">「どうすれば伝わるか」</span>を叩き込まれました。その後、未経験からIT業界に飛び込み、QA・デザイン・モバイル・Webと領域を広げながら4年が経ちました。
                </p>
                <p>
                  途中、自ら<span className="text-zinc-900 font-bold">開発事業部の立ち上げを提案・実現</span>し、チームを作ってアプリをリリース。<span className="text-zinc-900 font-bold">「やってみよう」と動き出すのが割と早い方</span>だと思っています。
                </p>
                <p>
                  今は<span className="text-zinc-900 font-bold">フロントエンドとUIデザイン</span>を軸に、エンジニアが実装しやすく・ユーザーが迷わないUIを考えることが自分の得意なことです。チームと一緒にプロダクトを育てていくのが好きです。
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -150px 0px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-lg font-bold text-zinc-900 mb-4">大切にしていること</h3>
            <div className="grid gap-2">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -150px 0px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-dark rounded-xl p-4 flex gap-3 items-start"
                >
                  <div className="flex-shrink-0 mt-0.5">{value.icon}</div>
                  <div>
                    <h4 className="text-zinc-900 text-sm font-bold mb-1">{value.title}</h4>
                    <p className="text-sm text-zinc-400">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>


          </motion.div>
        </div>

        {/* Career link — full width below the 2-col grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -150px 0px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <Link href="/career" className="group block">
            <div className="rounded-2xl p-5 md:p-6 bg-gradient-to-r from-[#a8305f] to-[#e88560] backdrop-blur-sm flex items-center justify-between hover:opacity-90 transition-opacity">
              <div>
                <span className="text-lg md:text-xl font-black tracking-tight text-white">My Career Story</span>
                <p className="text-sm text-white/70 mt-0.5">テスターから開発リードへ。4年間の成長軌跡。</p>
              </div>
              <div className="flex items-center gap-2 shrink-0 ml-4">
                <span className="text-xs text-white/70 tracking-widest uppercase hidden md:inline">View Timeline</span>
                <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
