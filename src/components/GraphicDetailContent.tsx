"use client";

import { useState, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import { works, shuffledWorks, graphicCategories, type DesignWork } from "@/data/projects";
import { useLocale } from "@/i18n/LocaleContext";
import { localize } from "@/i18n/messages";

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
    ...(cat.kind ? [{ label: "Type", value: cat.kind }] : []),
    ...(cat.placement ? [{ label: "Placement", value: cat.placement }] : []),
    ...(cat.time ? [{ label: "Time", value: cat.time }] : []),
    { label: "Works", value: m.projects.graphicCount.replace("{n}", String(categoryWorks.length)) },
  ];
  const overviewItems = [
    ...(cat.summary ? [{ label: "Summary", value: cat.summary }] : []),
    ...(cat.purpose ? [{ label: "Goal", value: cat.purpose }] : []),
    ...(cat.target ? [{ label: "Target", value: cat.target }] : []),
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
              Graphic Design {String(index + 1).padStart(2, "0")}
            </span>
            <h1 className="section-title text-4xl md:text-5xl font-black mt-3 mb-4">
              <span className="gradient-text">{m.projects.graphicCategories[cat.key]}</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Meta Bar */}
      <section className="py-6 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn delay={0.15}>
            <div className={`grid grid-cols-2 gap-8 ${{ 1: "md:grid-cols-1", 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4" }[metaItems.length] ?? "md:grid-cols-4"}`}>
              {metaItems.map((item) => (
                <div key={item.label}>
                  <span className="text-sm font-mono uppercase tracking-widest text-zinc-400">
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
      {(overviewItems.length > 0 || cat.role || cat.tools.length > 0) && (
        <section className="py-6 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              <FadeIn delay={0.2} className="lg:col-span-2">
                <h2 className="section-title text-2xl md:text-3xl font-black mb-4">
                  <span className="gradient-text">Overview</span>
                </h2>
                <dl className="space-y-4">
                  {overviewItems.map((item) => (
                    <div key={item.label}>
                      <dt className="text-sm font-mono uppercase tracking-widest text-zinc-400">{item.label}</dt>
                      <dd className="text-sm text-zinc-500 leading-relaxed mt-1">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </FadeIn>
              {(cat.role || cat.tools.length > 0) && (
                <FadeIn delay={0.3}>
                  <div className="card-dark rounded-2xl p-6 space-y-4">
                    {cat.role && (
                      <div>
                        <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-400 mb-1">Role</h3>
                        <p className="text-sm text-zinc-900">{cat.role}</p>
                      </div>
                    )}
                    {cat.tools.length > 0 && (
                      <div>
                        <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-400 mb-1">Tools</h3>
                        <p className="text-sm text-zinc-900">{cat.tools.join(" / ")}</p>
                      </div>
                    )}
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

      {/* Gallery */}
      <section className="py-6 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="columns-2 md:columns-3 gap-3">
            {categoryWorks.map((work, i) => (
              <motion.div
                key={work.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -150px 0px" }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                className="cursor-pointer group mb-3 break-inside-avoid"
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
              </motion.div>
            ))}
          </div>
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
