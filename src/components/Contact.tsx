"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleContext";

// Web3Forms のアクセスキー（.env.local と公開先の環境変数に設定する）。送信内容はキー発行時に登録したメールに届く
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

const field =
  "w-full px-4 py-3 rounded-xl bg-white border border-zinc-200 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-[#a8305f]/60 focus:ring-1 focus:ring-[#a8305f]/30 transition-colors";
const label = "block text-sm text-zinc-500 mb-2";

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
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px 0px -150px 0px" }} transition={{ duration: 0.6 }} className="mb-8">
          <h2 className="section-title text-5xl md:text-6xl font-black mb-2 pr-2"><span className="gradient-text">Contact</span></h2>
          <p className="text-zinc-500 text-base max-w-xl mt-2">{t.tagline}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px 0px -150px 0px" }} transition={{ duration: 0.6, delay: 0.1 }} className="card-dark rounded-2xl p-6 md:p-8 max-w-3xl">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* スパム対策：人には見えない欄。ボットが入力すると Web3Forms が破棄する */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
              <textarea id="message" name="message" required rows={5} placeholder={t.messagePlaceholder} className={`${field} resize-none`} />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <motion.button type="submit" disabled={status === "sending"} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative group px-6 py-3 rounded-full overflow-hidden text-sm font-medium text-white self-start disabled:opacity-60">
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
        </motion.div>
      </div>
    </section>
  );
}
