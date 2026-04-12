"use client";

import { motion } from "framer-motion";

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
  { icon: <TargetIcon />, title: "目的への純粋さ（ゴール志向）", description: <>「なぜ作るか」という本質。<br />AD時代に叩き込まれた、ターゲットへ届けるための視点。</> },
  { icon: <ChatIcon />, title: "丁寧なすり合わせ（コミュニケーション）", description: <>言葉の裏にある意図を汲み取ること。<br />認識のズレをなくし、プロジェクトを確実に前へ進める対話。</> },
  { icon: <ZapIcon />, title: "スピードと「更新感」", description: <>迷う前にまず形にする。<br />新しい技術を吸収し、常に自分をアップデートし続ける勢い。</> },
  { icon: <UsersIcon />, title: "チームの和と心地よさ", description: <>職種の垣根を超えた最高の連携。<br />誰もが前向きに、仲良くプロジェクトを楽しめる空気感。</> },
  { icon: <LayersIcon />, title: "実装の裏付けがあるデザイン", description: <>フロントエンドを理解した、地に足のついた設計。<br />女性目線の細やかな配慮と、確かなロジックの融合。</> },
];

// Number rain columns
function NumberRain() {
  const columns = 50;

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      style={{ maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)" }}
    >
      <div className="absolute inset-0 flex gap-2 justify-around">
        {[...Array(columns)].map((_, i) => (
          <NumberColumn key={i} index={i} />
        ))}
      </div>
    </div>
  );
}

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function NumberColumn({ index }: { index: number }) {
  const numbers = "0123456789";
  const length = 30 + Math.floor(seededRandom(index + 1) * 20);
  const chars = [...Array(length)].map((_, i) => numbers[Math.floor(seededRandom(index * 100 + i) * 10)]);
  const speed = Math.round((4 + seededRandom(index + 50) * 6) * 10) / 10;
  const delayVal = Math.round((-speed * (index % 10) / 10) * 10) / 10;
  const initialOffset = (index % 5) * -20;

  return (
    <div
      className="font-mono text-sm text-black/[0.08] leading-5 animate-number-fall whitespace-nowrap"
      style={{
        animationDuration: `${speed}s`,
        animationDelay: `${delayVal}s`,
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
    <section id="about" className="py-6 px-6 relative overflow-hidden">
      {/* Falling numbers background */}
      <NumberRain />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-2 pr-2">
            <span className="gradient-text">About</span>
          </h2>
          <p className="text-zinc-500 text-lm max-w-xl">
            戦略からデザイン、実装まで。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-lg font-bold text-zinc-900 mb-4">自己紹介</h3>
            <div className="card-dark rounded-2xl p-6">
              <div className="space-y-3 text-sm text-zinc-500 leading-relaxed">
                <p>
                  はじめまして、<span className="text-zinc-900 font-bold">Munise（むにせ）</span>です。
                </p>
                <p>
                  18歳でトルコから来日し、日本の大学で国際関係を学びました。ゼロから新しい環境に飛び込み、文化や言葉を吸収してきたこの経験が、今の私の<span className="text-zinc-900 font-bold">柔軟な考え方や適応力</span>の土台になっています。
                </p>
                <p>
                  新卒で入社したテレビ業界ではADとして、分刻みのスケジュールや多くの関係者が関わる番組制作の現場を走り回っていました。そこで身についた<span className="text-zinc-900 font-bold">「現場を動かす調整力」</span>や<span className="text-zinc-900 font-bold">「どうすれば視聴者に伝わるかという視点」</span>は、今のPMやディレクションの仕事にもそのまま活きています。
                </p>
                <p>
                  IT業界に入ってからは4年目になります。私は新しい技術に触れたり、未知の課題に挑戦したりすることが大好きで、常に自分自身をアップデートし続ける<span className="text-zinc-900 font-bold">「更新感」</span>を大切にしています。
                </p>
                <p>
                  フロントエンド開発の知識があるからこそ、エンジニアが実装しやすく、かつユーザーが心地よさを感じるデザインを提案できるのが私の強みです。<span className="text-zinc-900 font-bold">女性目線のきめ細やかな配慮</span>と、<span className="text-zinc-900 font-bold">多角的な視点</span>を掛け合わせ、アイデアを迷いなく形にしていきます。チームと共にプロダクトを育てていくことを大切にしています。
                </p>
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
            <h3 className="text-lg font-bold text-zinc-900 mb-4">大切にしていること</h3>
            <div className="grid gap-2">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
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
      </div>
    </section>
  );
}
