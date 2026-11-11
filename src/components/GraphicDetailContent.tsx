"use client";

import { useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import PrevNextNav from "@/components/PrevNextNav";
import { works, shuffledWorks, graphicCategories, graphicWorkCount, type DesignWork } from "@/data/projects";
import { useLocale } from "@/i18n/LocaleContext";
import { localize, localePath, messages } from "@/i18n/messages";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function GraphicDetailContent({ categoryKey }: { categoryKey: string }) {
  const index = graphicCategories.findIndex((c) => c.key === categoryKey);
  const [selected, setSelected] = useState<DesignWork | null>(null);
  const { m, locale } = useLocale();
  const cat = localize(graphicCategories[index], locale);
  // 静的生成時（ビルド日）と閲覧日でシャッフル結果が変わり hydration がずれるため、
  // サーバー・hydration 時は元の順、クライアント確定後に日替わりシャッフル順へ切り替える
  const isClient = useSyncExternalStore(() => () => {}, () => true, () => false);
  const categoryWorks = (isClient ? shuffledWorks : works).filter((w) => w.category === cat.key);

  const metaItems = [
    ...(cat.role ? [{ label: "Role", value: cat.role }] : []),
    ...(cat.kind ? [{ label: "Type", value: cat.kind }] : []),
    ...(cat.target ? [{ label: "Target", value: cat.target }] : []),
    ...(cat.placement ? [{ label: "Placement", value: cat.placement }] : []),
    ...(cat.time ? [{ label: "Time", value: cat.time }] : []),
    { label: "Works", value: m.projects.graphicCount.replace("{n}", String(graphicWorkCount(cat))) },
  ];
  const prev = graphicCategories[index - 1] ?? null;
  const next = graphicCategories[index + 1] ?? null;
  const overviewItems = [
    ...(cat.purpose ? [{ label: "Goal", value: cat.purpose }] : []),
  ];

  return (
    <PageTransition>
      <Navigation variant="detail" backHash="projects" />

      {/* Hero */}
      <section className="pt-24 pb-8 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="text-base md:text-lg font-mono uppercase tracking-widest text-zinc-900">
              Graphic {String(index + 1).padStart(2, "0")}  —  {cat.subtitle}
            </span>
            {/* タイトルは英語を大きく見せ、日本語版ではその下に日本語を添える */}
            <h1 className="section-title text-4xl md:text-5xl font-black mt-3 mb-4">
              <span className="gradient-text">{messages.en.projects.graphicCategories[cat.key]}</span>
            </h1>
            {locale === "ja" && <p className="-mt-2 mb-5 text-lg text-zinc-500">{m.projects.graphicCategories[cat.key]}</p>}
            {cat.tools.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {cat.tools.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-sm font-mono bg-black/[0.03] border border-black/[0.06] text-zinc-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Meta Bar */}
      <section className="py-6 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn delay={0.15}>
            <div className={`grid grid-cols-2 gap-8 ${{ 1: "md:grid-cols-1", 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4", 5: "md:grid-cols-5" }[metaItems.length] ?? "md:grid-cols-5"}`}>
              {metaItems.map((item) => (
                <div key={item.label}>
                  <span className="text-sm font-mono uppercase tracking-widest text-zinc-500">
                    {item.label}
                  </span>
                  <p className="text-zinc-900 mt-1 text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Overview: 目的・ターゲット ＋ 担当範囲・使用ツール */}
      {(cat.summary || overviewItems.length > 0 || cat.tools.length > 0) && (
        <section className="py-6 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              <FadeIn delay={0.2} className="lg:col-span-2">
                <h2 className="section-title text-2xl md:text-3xl font-black mb-4">
                  <span className="gradient-text">Overview</span>
                </h2>
                {cat.summary && <p className="text-sm text-zinc-500 leading-relaxed mb-4">{cat.summary}</p>}
                <dl className="space-y-4">
                  {overviewItems.map((item) => (
                    <div key={item.label}>
                      <dt className="text-sm font-mono uppercase tracking-widest text-zinc-500">{item.label}</dt>
                      <dd className="text-sm text-zinc-500 leading-relaxed mt-1">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </FadeIn>
              {cat.tools.length > 0 && (
                <FadeIn delay={0.15}>
                  <div className="card-dark rounded-2xl p-6">
                    <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-500 mb-3">
                      Tech Stack
                    </h3>
                    <div className="flex flex-col gap-3">
                      {cat.tools.map((t) => (
                        <div key={t} className="flex items-center gap-3 text-zinc-500">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#a8305f] to-[#e88560]" />
                          <span className="text-sm">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Design Intent: 配色・文字の優先順位・写真・ボタンの工夫 */}
      {cat.intent.length > 0 && (
        <section className="py-6 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="section-title text-2xl md:text-3xl font-black mb-5">
                <span className="gradient-text">Design Intent</span>
              </h2>
              <div className="card-dark rounded-2xl p-6">
                <ul className="space-y-3">
                  {cat.intent.map((item) => (
                    <li key={item} className="text-sm text-zinc-500 flex items-start gap-2">
                      <span className="gradient-text mt-1 flex-shrink-0">&bull;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Results: 成果（数値）や振り返り・改善案 */}
      {cat.result && (
        <section className="py-6 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="section-title text-2xl md:text-3xl font-black mb-4">
                <span className="gradient-text">Results</span>
              </h2>
              <p className="text-sm text-zinc-500 leading-relaxed">{cat.result}</p>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Sets: 企画ごとに画像と説明を並べる */}
      {cat.sets && (
        <section className="py-6 px-6">
          <div className="max-w-5xl mx-auto">
            {cat.sets.map((rawSet, i) => {
              const set = localize(rawSet, locale);
              return (
                <motion.div
                  key={set.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -150px 0px" }}
                  transition={{ duration: 0.5, ease }}
                  className="py-12 border-t border-black/[0.06] first:border-t-0 first:pt-6"
                >
                  <h2 className="text-lg font-bold text-zinc-900">
                    {String(i + 1).padStart(2, "0")} - {set.title}
                  </h2>
                  <p className="text-sm text-zinc-500 leading-relaxed mt-3">{set.description}</p>
                  {/* PC版・SP版を高さをそろえて横に並べる（幅を縦横比で配分） */}
                  <div className="mt-8 flex flex-col md:flex-row gap-6 md:gap-3">
                    {set.images.map((img) => (
                      <div
                        key={img.src}
                        style={{ "--ratio": img.width / img.height } as React.CSSProperties}
                        className="md:[flex:var(--ratio)_1_0%]"
                      >
                        <p className="text-sm font-mono uppercase tracking-widest text-zinc-500 mb-2">
                          {m.projects.deviceLabels[img.device]}
                        </p>
                        <div className="rounded-xl overflow-hidden border border-black/[0.06] shadow-sm">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            width={img.width}
                            height={img.height}
                            sizes="(max-width: 768px) 100vw, 700px"
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      )}

      {/* Gallery */}
      {categoryWorks.length > 0 && (
      <section className="py-6 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="columns-2 md:columns-3 gap-3">
            {categoryWorks.map((work, i) => (
              <motion.button
                type="button"
                key={work.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -150px 0px" }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                className="block w-full cursor-pointer group mb-3 break-inside-avoid"
                onClick={() => setSelected(work)}
              >
                <div className="rounded-xl overflow-hidden border border-black/[0.06] shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
                  <Image
                    src={work.src}
                    alt={work.alt}
                    width={work.width}
                    height={work.height}
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="w-full h-auto"
                  />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Prev / Next Navigation */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <PrevNextNav
              prevHref={prev ? localePath(locale, `/design/${prev.key}`) : null}
              nextHref={next ? localePath(locale, `/design/${next.key}`) : null}
            />
          </FadeIn>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 cursor-pointer"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selected.src}
                alt={selected.alt}
                width={selected.width}
                height={selected.height}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white/90 text-zinc-900 flex items-center justify-center text-sm shadow-md hover:bg-white transition-colors"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </PageTransition>
  );
}
