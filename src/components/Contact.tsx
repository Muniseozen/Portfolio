"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-[#fafafa] relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#9b2c5a]/5 blur-[120px]" />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            <span className="text-zinc-900">Let&apos;s work</span><br /><span className="gradient-text">together.</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-md mx-auto">「ちょっと相談したいんだけど」くらいの温度感で大丈夫です。<br />お気軽にどうぞ。</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, delay: 0.2 }} className="card-light rounded-3xl p-8 md:p-12">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-zinc-500 mb-2 group-focus-within:text-zinc-900 transition-colors">お名前</label>
                <input type="text" id="name" name="name" placeholder="山田 太郎" className="w-full px-5 py-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:border-[#9b2c5a]/40 focus:bg-white focus:ring-1 focus:ring-[#9b2c5a]/20 transition-all" />
              </div>
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-zinc-500 mb-2 group-focus-within:text-zinc-900 transition-colors">メールアドレス</label>
                <input type="email" id="email" name="email" placeholder="taro@example.com" className="w-full px-5 py-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:border-[#9b2c5a]/40 focus:bg-white focus:ring-1 focus:ring-[#9b2c5a]/20 transition-all" />
              </div>
            </div>
            <div className="group">
              <label htmlFor="type" className="block text-sm font-medium text-zinc-500 mb-2 group-focus-within:text-zinc-900 transition-colors">ご相談内容</label>
              <select id="type" name="type" className="w-full px-5 py-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-500 focus:text-zinc-900 focus:outline-none focus:border-[#9b2c5a]/40 focus:bg-white focus:ring-1 focus:ring-[#9b2c5a]/20 transition-all appearance-none">
                <option value="">選択してください</option>
                <option value="web">Webサイト制作</option>
                <option value="app">アプリ開発</option>
                <option value="design">UI/UXデザイン</option>
                <option value="consult">PM/技術相談</option>
                <option value="other">その他</option>
              </select>
            </div>
            <div className="group">
              <label htmlFor="message" className="block text-sm font-medium text-zinc-500 mb-2 group-focus-within:text-zinc-900 transition-colors">メッセージ</label>
              <textarea id="message" name="message" rows={5} placeholder="プロジェクトについて教えてください..." className="w-full px-5 py-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:border-[#9b2c5a]/40 focus:bg-white focus:ring-1 focus:ring-[#9b2c5a]/20 transition-all resize-none" />
            </div>
            <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative group px-8 py-4 rounded-full overflow-hidden text-sm font-medium text-white self-center md:self-start">
              <span className="absolute inset-0 gradient-bg" />
              <span className="relative flex items-center gap-2">送信する
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </span>
            </motion.button>
          </form>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-12 flex flex-col items-center gap-6">
          <p className="text-sm text-zinc-400">SNSでもつながりましょう</p>
          <div className="flex items-center gap-4">
            {[
              { label: "GitHub", href: "https://github.com/", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
              { label: "X", href: "https://twitter.com/", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
              { label: "LinkedIn", href: "https://linkedin.com/", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="group w-12 h-12 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-zinc-900 hover:border-zinc-300 transition-all hover:scale-110" aria-label={s.label}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d={s.icon} /></svg>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
