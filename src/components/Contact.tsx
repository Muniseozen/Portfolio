"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "@/i18n/LocaleContext";

// Web3Forms のアクセスキー（.env.local と公開先の環境変数に設定する）。送信内容はキー発行時に登録したメールに届く
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
// LINE公式アカウントの友だち追加URL
const LINE_URL = "https://lin.ee/TGc7FPm";
const LINE_ID = "@625jkxnb";

const field =
  "w-full px-4 py-2.5 rounded-xl bg-transparent border border-zinc-400 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#a8305f]/60 focus:ring-1 focus:ring-[#a8305f]/30 transition-colors";
const label = "block text-sm text-zinc-500 mb-2";
const view = { once: true, margin: "0px 0px -150px 0px" };

export default function Contact() {
  const { m } = useLocale();
  const t = m.contact;
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const data = Object.fromEntries(new FormData(form));
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          access_key: ACCESS_KEY,
          subject: `ポートフォリオからのお問い合わせ（${data.name}様）`,
          from_name: "Portfolio",
        }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-8 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={view} transition={{ duration: 0.6 }} className="mb-8">
          <h2 className="section-title text-5xl md:text-6xl font-black mb-2 pr-2"><span className="gradient-text">Contact</span></h2>
          <p className="text-zinc-500 text-base max-w-xl mt-2">{t.tagline}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={view} transition={{ duration: 0.6, delay: 0.1 }} className="grid grid-cols-1 md:grid-cols-[304px_1fr] gap-x-10 gap-y-20 md:pt-4">
          <div>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              {/* スパム対策：人には見えない欄。ボットが入力すると Web3Forms が破棄する */}
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={label}>{t.name}</label>
                  <input type="text" id="name" name="name" required autoComplete="name" placeholder={t.namePlaceholder} className={field} />
                </div>
                <div>
                  <label htmlFor="email" className={label}>{t.email}</label>
                  <input type="email" id="email" name="email" required autoComplete="email" placeholder="name@example.com" className={field} />
                </div>
              </div>
              <div>
                <label htmlFor="type" className={label}>{t.type}</label>
                <div className="relative">
                  <select id="type" name="type" defaultValue="" className={`${field} appearance-none pr-10`}>
                    <option value="">{t.typePlaceholder}</option>
                    {t.types.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
              <div>
                <label htmlFor="message" className={label}>{t.message}</label>
                <textarea id="message" name="message" required rows={4} placeholder={t.messagePlaceholder} className={`${field} resize-none`} />
              </div>
              <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-between gap-4">
                <motion.button type="submit" disabled={status === "sending"} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative group px-6 py-3 rounded-full overflow-hidden text-sm font-medium text-white self-end md:self-auto disabled:opacity-60">
                  <span className="absolute inset-0 gradient-bg" />
                  <span className="relative flex items-center gap-2">{status === "sending" ? t.sending : t.submit}
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  </span>
                </motion.button>
                <p role="status" className={`text-sm ${status === "error" ? "text-[#a8305f]" : "text-zinc-600"}`}>
                  {status === "success" && t.success}
                  {status === "error" && t.error}
                </p>
              </div>
            </form>
          </div>

          {/* LINE：PC は左の列に QR コード、スマホはフォームの下にボタンだけ。
              PC ではフォームと同じ高さに伸ばし、上はラベルの分（28px）、下は送信ボタンの行の分（74px）を空けて、
              「お名前」の入力欄の上端とメッセージ欄の下端にそろえる */}
          <div className="relative card-dark rounded-2xl p-6 order-last md:order-first flex flex-col md:mt-[28px] md:mb-[74px]">
            {/* カードのふちから顔を出すキャラクター（装飾）。体の下端をカードの上辺に合わせる */}
            <Image src="/images/contact/line-character.png" alt="" aria-hidden="true" width={286} height={159} className="absolute right-5 bottom-full translate-y-[3px] w-[104px] h-auto pointer-events-none" />
            <p className="text-xs font-mono tracking-[0.15em] text-[#a8305f]">LINE</p>
            <h3 className="mt-2 text-base font-bold text-zinc-900">{t.lineTitle}</h3>
            <p className="mt-1 text-sm text-zinc-600">{t.lineBody}</p>
            <div className="hidden md:flex items-center gap-4 mt-4 mb-4 p-2.5 rounded-xl border border-black/[0.06]">
              <Image src="/images/contact/line-qr.png" alt={t.lineQrAlt} width={360} height={360} className="w-16 h-16 shrink-0" />
              <div>
                <p className="text-xs text-zinc-500">{t.lineScan}</p>
                <p className="mt-1 text-sm font-mono text-zinc-900">{LINE_ID}</p>
              </div>
            </div>
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="mt-4 md:mt-auto flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-full bg-white border border-black/[0.1] text-sm font-medium text-zinc-900 transition-[background-color,transform] duration-150 ease-out hover:bg-zinc-50 active:scale-[0.97]">
              {t.lineButton}
              <svg className="w-3.5 h-3.5 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" /></svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
