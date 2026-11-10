"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleContext";

const ease = [0.23, 1, 0.32, 1] as [number, number, number, number];
const view = { once: true, margin: "0px 0px -150px 0px" };

// 「ご提案・制作」(index 2) から「確認・調整」(index 3) をまたいで戻る弧を描く
const LOOP_FROM = 2;

export default function Process() {
  const { m } = useLocale();
  const steps = m.process.steps;

  return (
    <section id="process" className="py-10 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={view}
          transition={{ duration: 0.6 }}
          className="mb-14 md:mb-24 text-center"
        >
          <h2 className="section-title text-3xl md:text-4xl font-black text-zinc-900 mb-2">How I Work</h2>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto mt-2">{m.process.intro}</p>
        </motion.div>

        {/* タイムライン: スマホは左に縦線、PC は上に横線 */}
        <ol className="grid md:grid-cols-5 md:gap-8">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            return (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={view}
                transition={{ duration: 0.6, delay: 0.15 + index * 0.12, ease }}
                className={`relative pl-9 md:pl-0 md:pt-10 ${isLast ? "" : "pb-12 md:pb-0"}`}
              >
                {/* 次の点までの線（最後の点で止める）。スマホは縦、PC は横に伸びる */}
                {!isLast && (
                  <>
                    <motion.span
                      aria-hidden
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={view}
                      transition={{ duration: 0.5, delay: index * 0.15, ease }}
                      className="md:hidden absolute left-[5px] top-2 -bottom-2 w-px origin-top bg-gradient-to-b from-[#d4567e] to-[#e88560]"
                    />
                    <motion.span
                      aria-hidden
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={view}
                      transition={{ duration: 0.5, delay: index * 0.15, ease }}
                      className="hidden md:block absolute top-[5px] left-[5px] -right-[37px] h-px origin-left bg-gradient-to-r from-[#d4567e] to-[#e88560]"
                    />
                  </>
                )}

                {/* 点: 納品だけ塗りつぶしてゴールを示す */}
                <span
                  aria-hidden
                  className={`absolute left-0 top-2 md:top-0 w-[11px] h-[11px] rounded-full ${
                    isLast
                      ? "bg-gradient-to-br from-[#a8305f] to-[#e88560]"
                      : "bg-[#fdf8f8] border-2 border-[#d4567e]"
                  }`}
                />

                {index === LOOP_FROM && (
                  <>
                    {/* PC: 制作と確認の2点を、線の上をまたぐ点線の弧でつなぐ */}
                    <motion.div
                      aria-hidden
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={view}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="hidden md:block absolute left-[5px] -right-[37px] -top-[30px] h-[30px]"
                    >
                      <div className="absolute inset-0 rounded-t-full border-t border-x border-dashed border-[#d4567e]/60" />
                      <span className="absolute left-1/2 -translate-x-1/2 -top-6 whitespace-nowrap text-xs font-mono text-[#d4567e]">
                        {m.process.loopLabel}
                      </span>
                    </motion.div>
                    {/* スマホ: 縦線の左側にふくらむ弧で 03 から 02 へ戻る */}
                    <motion.div
                      aria-hidden
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={view}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="md:hidden absolute -left-3 top-[13px] -bottom-[13px] w-[17px] rounded-l-full border-y border-l border-dashed border-[#d4567e]/60"
                    />
                  </>
                )}

                <span aria-hidden className="block section-title text-4xl md:text-5xl font-black leading-none text-[#d4567e]/20 select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-bold text-zinc-900 mt-2">{step.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mt-2">{step.body}</p>
                {index === LOOP_FROM && (
                  <p className="md:hidden mt-3 text-xs font-mono text-[#d4567e]">↻ {m.process.loopLabel}</p>
                )}
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
