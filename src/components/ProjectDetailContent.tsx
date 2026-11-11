"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import PdfViewer from "@/components/PdfViewer";
import PrevNextNav from "@/components/PrevNextNav";
import { useLocale } from "@/i18n/LocaleContext";
import { localize, localePath } from "@/i18n/messages";
import { getProjectBySlug, getAdjacentProjects, getProjectNumber, projectTypeLabels } from "@/data/projects";

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

// 記事の上に重なる細いスクロールバー（標準のバーはクラスで非表示）。
// スクロールのたびに state を使わず transform を直接書き換えて、再描画を起こさない
function OverlayScroll({ children }: { children: React.ReactNode }) {
  const areaRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLSpanElement>(null);

  const update = () => {
    const area = areaRef.current;
    const thumb = thumbRef.current;
    if (!area || !thumb) return;
    const { scrollTop, scrollHeight, clientHeight } = area;
    const height = Math.max(24, (clientHeight * clientHeight) / scrollHeight);
    const top = (scrollTop / (scrollHeight - clientHeight || 1)) * (clientHeight - height);
    thumb.style.height = `${height}px`;
    thumb.style.transform = `translateY(${top}px)`;
  };

  // 画像は width/height 指定で高さが先に決まるので、表示直後に一度合わせる
  useEffect(update, []);

  return (
    <div className="relative">
      <div ref={areaRef} onScroll={update} className="h-[510px] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden overscroll-contain border-t border-black/[0.06]">
        {children}
      </div>
      <span ref={thumbRef} aria-hidden className="pointer-events-none absolute top-0 right-1 w-1 rounded-full bg-zinc-300" />
    </div>
  );
}

export default function ProjectDetailContent({ slug }: { slug: string }) {
  const { m, locale } = useLocale();
  const original = getProjectBySlug(slug)!;
  const project = localize(original, locale);
  // タイトルは英語を大きく見せ、日本語版ではその下に日本語を添える（同じ表記なら出さない）
  const titleEn = original.en.title;
  const titleJa = locale === "ja" && original.title !== titleEn ? original.title : null;
  const { prev, next } = getAdjacentProjects(slug);
  const [lightbox, setLightbox] = useState<string | null>(null);
  // 縦長の記事画像はスマホ枠なしで大きく表示する（中をスクロールして読む）
  const [screenView, setScreenView] = useState<{ src: string; alt: string; width: number; height: number } | null>(null);

  const metaItems = [
    { label: "Role", value: project.role },
    ...(project.duration ? [{ label: "Duration", value: project.duration }] : []),
    ...(project.team ? [{ label: "Team", value: project.team }] : []),
    { label: "Status", value: project.status },
  ];

  return (
    <PageTransition>
      <Navigation variant="detail" backHash="projects" />

      {/* Hero */}
      <section className="pt-24 pb-8 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="text-base md:text-lg font-mono uppercase tracking-widest text-zinc-900">
              {projectTypeLabels[project.type]} {getProjectNumber(project)}  —  {project.subtitle}
            </span>
            <h1 className="section-title text-4xl md:text-5xl font-black mt-3 mb-4 whitespace-pre-line">
              <span className="gradient-text">{titleEn}</span>
            </h1>
            {titleJa && <p className="-mt-2 mb-5 text-lg text-zinc-500">{titleJa}</p>}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-sm font-mono bg-black/[0.03] border border-black/[0.06] text-zinc-500"
                >
                  {t}
                </span>
              ))}
            </div>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#a8305f] hover:opacity-70 transition-opacity font-medium"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </a>
            )}
          </motion.div>
        </div>
      </section>

      {/* Meta Bar */}
      <section className="py-6 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn delay={0.15}>
            <div className={`grid grid-cols-2 gap-8 ${{ 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4" }[metaItems.length] ?? "md:grid-cols-4"}`}>
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

      {/* Preview / Screenshots */}
      <section className="py-6 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn delay={0.25}>
            {project.screens ? (
              // 縦長のスマホ画面を並べ、各枠の中をスクロールして全体を読めるようにする
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                {project.screens.map((screen) => (
                  <figure key={screen.src} className="w-full max-w-[300px]">
                    <figcaption className="mb-3 min-h-16 flex flex-col justify-end text-center">
                      <span className="text-sm font-bold text-zinc-900">{screen.label}</span>
                      <span className="text-sm text-zinc-500">{screen.title}</span>
                    </figcaption>
                    {/* iPhone 風の本体 + スマホブラウザの画面で、記事をブラウザで見ているように見せる */}
                    <div className="rounded-[2rem] bg-zinc-900 p-[5px] shadow-xl">
                      <div className="rounded-[1.7rem] bg-white overflow-hidden">
                        {/* ステータスバー + ダイナミックアイランド */}
                        <div aria-hidden className="relative flex items-center justify-between px-6 pt-3 pb-1 text-xs font-semibold text-zinc-900">
                          <span>9:41</span>
                          <span className="absolute left-1/2 top-2.5 -translate-x-1/2 w-20 h-5 rounded-full bg-zinc-900" />
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-3" viewBox="0 0 16 12" fill="currentColor"><rect x="0" y="8" width="3" height="4" rx="1" /><rect x="4.3" y="5.5" width="3" height="6.5" rx="1" /><rect x="8.6" y="3" width="3" height="9" rx="1" /><rect x="12.9" y="0" width="3" height="12" rx="1" /></svg>
                            <svg className="w-6 h-3" viewBox="0 0 24 12" fill="none"><rect x="0.5" y="0.5" width="20" height="11" rx="3" stroke="currentColor" opacity="0.4" /><rect x="2" y="2" width="15" height="8" rx="1.8" fill="currentColor" /><rect x="22" y="4" width="1.5" height="4" rx="0.75" fill="currentColor" opacity="0.4" /></svg>
                          </span>
                        </div>
                        {/* アドレスバー */}
                        <div aria-hidden className="px-3 pb-2">
                          <div className="flex items-center justify-center gap-1.5 h-8 rounded-xl bg-zinc-100 text-xs text-zinc-700">
                            <svg className="w-3 h-3 text-zinc-500" viewBox="0 0 24 24" fill="currentColor"><path d="M17 10V8a5 5 0 00-10 0v2H6a1 1 0 00-1 1v9a1 1 0 001 1h12a1 1 0 001-1v-9a1 1 0 00-1-1h-1zm-8 0V8a3 3 0 016 0v2H9z" /></svg>
                            beauty-column.example.jp
                          </div>
                        </div>
                        {/* 記事（ここをスクロールして全体を読める） */}
                        <OverlayScroll>
                          <button
                            type="button"
                            onClick={() => setScreenView({ src: screen.src, alt: `${screen.label} ${screen.title}`, width: screen.width, height: screen.height })}
                            aria-label={`${screen.label} ${screen.title}`}
                            className="block w-full cursor-zoom-in"
                          >
                            <Image
                              src={screen.src}
                              alt={`${screen.label} ${screen.title}`}
                              width={screen.width}
                              height={screen.height}
                              sizes="300px"
                              className="w-full h-auto"
                            />
                          </button>
                        </OverlayScroll>
                      </div>
                    </div>
                  </figure>
                ))}
              </div>
            ) : project.preview && project.previewType === "mobile" ? (
              <div className="flex justify-center">
                <div className="relative w-[280px] md:w-[320px]">
                  {/* Phone frame */}
                  <div className="rounded-[3rem] border-[6px] border-zinc-900 bg-zinc-900 shadow-2xl overflow-hidden">
                    {/* Notch */}
                    <div className="relative bg-zinc-900 flex justify-center pt-2 pb-1">
                      <div className="w-28 h-6 bg-zinc-900 rounded-full" />
                    </div>
                    {/* Screen */}
                    <div className="bg-white overflow-hidden">
                      <Image
                        src={project.preview}
                        alt={`${project.title} - Preview`}
                        width={390}
                        height={844}
                        className="w-full h-auto"
                      />
                    </div>
                    {/* Bottom bar */}
                    <div className="bg-zinc-900 flex justify-center py-2">
                      <div className="w-28 h-1 bg-zinc-600 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            ) : project.preview ? (
              // SP版があれば PC版の右に高さをそろえて並べる
              <div className="flex flex-col md:flex-row gap-4">
              <div className={`flex-1 min-w-0 ${project.previewSp ? "rounded-xl" : "rounded-3xl"} overflow-hidden border border-black/[0.06] shadow-sm`}>
                <div className="bg-zinc-100 px-4 py-2 flex items-center gap-2 border-b border-black/[0.06]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                    <div className="w-3 h-3 rounded-full bg-green-400/70" />
                  </div>
                  {project.url && (
                    <div className="flex-1 mx-2">
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-md px-3 py-1 text-sm text-zinc-500 font-mono truncate hover:text-zinc-700 transition-colors">
                        {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                      </a>
                    </div>
                  )}
                </div>
                <div className={`${project.previewSp ? "max-h-[480px]" : "max-h-[600px]"} overflow-y-auto`}>
                  <button
                    type="button"
                    onClick={() => setScreenView({ src: project.preview!, alt: `${project.title} - Preview`, width: 1920, height: 3000 })}
                    aria-label={`${project.title} - Preview`}
                    className="block w-full cursor-zoom-in"
                  >
                    <Image
                      src={project.preview}
                      alt={`${project.title} - Preview`}
                      width={1920}
                      height={3000}
                      className="w-full h-auto"
                    />
                  </button>
                </div>
              </div>
              {project.previewSp && (
                // シンプルな iPhone 風の本体（ダイナミックアイランド付き）。画面の中をスクロールして全体を見られる
                <div className="relative w-[260px] md:w-[240px] mx-auto md:mx-0 shrink-0 rounded-[1.4rem] bg-zinc-900 p-[5px] shadow-xl">
                  <div className="h-[480px] md:h-auto md:absolute md:inset-[5px] flex flex-col rounded-[1.1rem] bg-white overflow-hidden">
                    <div aria-hidden className="flex justify-center pt-2 pb-1.5">
                      <span className="w-16 h-4 rounded-full bg-zinc-900" />
                    </div>
                    <div className="flex-1 min-h-0 overflow-y-auto">
                      <button
                        type="button"
                        onClick={() => setScreenView({ ...project.previewSp!, alt: `${project.title} - SP Preview` })}
                        aria-label={`${project.title} - SP Preview`}
                        className="block w-full cursor-zoom-in"
                      >
                        <Image
                          src={project.previewSp.src}
                          alt={`${project.title} - SP Preview`}
                          width={project.previewSp.width}
                          height={project.previewSp.height}
                          sizes="260px"
                          className="w-full h-auto"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              )}
              </div>
            ) : project.url ? (
              <div className="rounded-3xl overflow-hidden border border-black/[0.06] shadow-sm">
                <div className="bg-zinc-100 px-4 py-2 flex items-center gap-2 border-b border-black/[0.06]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                    <div className="w-3 h-3 rounded-full bg-green-400/70" />
                  </div>
                  <div className="flex-1 mx-2">
                    <div className="bg-white rounded-md px-3 py-1 text-sm text-zinc-500 font-mono truncate">
                      {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    </div>
                  </div>
                </div>
                <iframe
                  src={project.url}
                  title={project.title}
                  className="w-full h-[600px]"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className={`aspect-video rounded-3xl bg-gradient-to-br ${project.gradient} p-[1px]`}>
                <div className="w-full h-full rounded-3xl bg-white/80 flex items-center justify-center">
                  <div className="text-center">
                    <span
                      className="text-5xl block mb-3"
                      dangerouslySetInnerHTML={{ __html: project.emoji }}
                    />
                    <span className="text-zinc-500 text-sm font-mono">
                      Screenshots Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            )}
          </FadeIn>
        </div>
      </section>

      {/* Overview + Tech Stack */}
      <section className="py-6 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <FadeIn className="lg:col-span-2">
              <h2 className="section-title text-2xl md:text-3xl font-black mb-4">
                <span className="gradient-text">Overview</span>
              </h2>
              {/* 空行（\n\n）で段落を分ける */}
              <div className="space-y-4">
                {project.longDescription.split("\n\n").map((paragraph) => (
                  <p key={paragraph} className="text-sm text-zinc-500 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                {/* サンプル画面がある場合は、実際の画面ではない旨を添える */}
                {project.samples && <p className="text-sm text-zinc-500 leading-relaxed">{m.projects.sampleNote}</p>}
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="card-dark rounded-2xl p-6">
                <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-500 mb-3">
                  Tech Stack
                </h3>
                <div className="flex flex-col gap-3">
                  {project.tech.map((t) => (
                    <div
                      key={t}
                      className="flex items-center gap-3 text-zinc-500"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`} />
                      <span className="text-sm">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* My Role */}
      {project.roleBreakdown.length > 0 && (
        <section className="py-6 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="section-title text-2xl md:text-3xl font-black mb-5">
                <span className="gradient-text">My Role</span>
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              {project.roleBreakdown.map((role, index) => (
                <FadeIn key={role.title} delay={index * 0.1}>
                  <div className="card-dark rounded-xl p-6 h-full">
                    <h3 className="text-sm font-bold text-zinc-900 mb-3">
                      {role.title}
                    </h3>
                    <ul className="space-y-3">
                      {role.tasks.map((task) => (
                        <li
                          key={task}
                          className="text-sm text-zinc-500 flex items-start gap-2"
                        >
                          <span className="gradient-text mt-1 flex-shrink-0">
                            &bull;
                          </span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Before → After */}
      {project.challenges.length > 0 && (
        <section className="py-6 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="section-title text-2xl md:text-3xl font-black mb-5">
                <span className="text-zinc-900">Before</span> <span className="gradient-text">→ After</span>
              </h2>
            </FadeIn>
            <div className="flex flex-col gap-4">
              {project.challenges.map((item, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="card-dark rounded-xl p-5 md:p-6">
                    <div className="grid md:grid-cols-2 gap-4 items-start">
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center">
                          <span className="text-sm text-zinc-500 font-bold">B</span>
                        </div>
                        <p className="text-sm text-zinc-500 leading-relaxed pt-1">
                          {item.problem}
                        </p>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#a8305f] to-[#e88560] flex items-center justify-center">
                          <span className="text-sm text-white font-bold">A</span>
                        </div>
                        <p className="text-sm text-zinc-900 leading-relaxed pt-1">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Design Process */}
      {project.designProcess && (
        <section className="py-6 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="section-title text-2xl md:text-3xl font-black mb-5">
                <span className="gradient-text">Design Process</span>
              </h2>
              <button type="button" className="block w-full rounded-2xl overflow-hidden card-clickable cursor-pointer" onClick={() => setLightbox(project.designProcess!)}>
                <Image
                  src={project.designProcess}
                  alt={`${project.title} - Design Process`}
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                />
              </button>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Design System（Prototype なし）: 上部だけ見せ、タップで全体を拡大 */}
      {project.designSystem && !project.prototype && (
        <section className="py-6 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="section-title text-2xl md:text-3xl font-black mb-5">
                <span className="gradient-text">Design System</span>
              </h2>
              <button
                type="button"
                onClick={() => setScreenView({ src: project.designSystem!, alt: `${project.title} - Design System`, width: 1920, height: 1080 })}
                className="relative block w-full h-[480px] overflow-hidden rounded-2xl card-clickable cursor-zoom-in"
              >
                <Image
                  src={project.designSystem}
                  alt={`${project.title} - Design System`}
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                />
                <span aria-hidden className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
                <span className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-zinc-900/80 px-4 py-1.5 text-sm text-white">
                  {m.projects.viewAll}
                </span>
              </button>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Design System & Prototype - 横並び */}
      {project.prototype && (
        <section className="py-6 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-[7fr_3fr] gap-6 items-start">
              {project.designSystem && (
                <FadeIn>
                  <h2 className="section-title text-2xl md:text-3xl font-black mb-5">
                    <span className="gradient-text">Design System</span>
                  </h2>
                  <button type="button" className="block w-full rounded-2xl overflow-hidden card-clickable cursor-pointer" onClick={() => setLightbox(project.designSystem!)}>
                    <Image
                      src={project.designSystem}
                      alt={`${project.title} - Design System`}
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                    />
                  </button>
                </FadeIn>
              )}
              {project.prototype && (
                <FadeIn delay={0.1}>
                  <h2 className="section-title text-2xl md:text-3xl font-black mb-5">
                    <span className="gradient-text">Prototype</span>
                  </h2>
                  <button type="button" className="block w-full rounded-2xl overflow-hidden card-clickable cursor-pointer" onClick={() => setLightbox(project.prototype!)}>
                    <Image
                      src={project.prototype}
                      alt={`${project.title} - Prototype`}
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                    />
                  </button>
                </FadeIn>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Design System（PDF）: ページ内で読めるようにする（ダウンロード導線は置かない） */}
      {project.designDoc && (
        <section className="py-6 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="section-title text-2xl md:text-3xl font-black mb-5">
                <span className="gradient-text">Design System</span>
              </h2>
              <div className="max-h-[400px] md:max-h-[600px] overflow-y-auto rounded-2xl border border-black/[0.06] shadow-sm bg-[#f5f0ee] p-3 md:p-5">
                <PdfViewer src={project.designDoc} title={`${project.title} - Design System`} />
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Sample Screens - 横並び */}
      {project.samples && (
        <section className="py-6 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <h2 className="section-title text-2xl md:text-3xl font-black mb-5">
                <span className="gradient-text">Sample Screens</span>
              </h2>
              {/* 画像の縦横比で幅を配分し、高さをそろえて横に並べる */}
              <div className="flex flex-col md:flex-row gap-4 md:items-start">
                {project.samples.map((sample) => (
                  <div
                    key={sample.src}
                    style={{ "--ratio": (sample.width / sample.height) * 100 } as React.CSSProperties} // flex-grow の合計が1未満だと横幅が余るため100倍する
                    className={`md:[flex:var(--ratio)_1_0%] ${sample.width < 600 ? "w-full max-w-[260px] mx-auto md:max-w-none md:mx-0" : ""}`}
                  >
                    <p className="text-sm text-zinc-500 mb-2">{sample.title}</p>
                    <button
                      type="button"
                      onClick={() => setScreenView({ src: sample.src, alt: `${project.title} - ${sample.title}`, width: sample.width, height: sample.height })}
                      aria-label={`${project.title} - ${sample.title}`}
                      className="block w-full rounded-xl overflow-hidden border border-black/[0.06] shadow-sm cursor-zoom-in"
                    >
                      <Image
                        src={sample.src}
                        alt={`${project.title} - ${sample.title}`}
                        width={sample.width}
                        height={sample.height}
                        sizes="(max-width: 768px) 100vw, 700px"
                        className="w-full h-auto"
                      />
                    </button>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Prev / Next Navigation */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <PrevNextNav
              prevHref={prev ? localePath(locale, `/projects/${prev.slug}`) : null}
              nextHref={next ? localePath(locale, `/projects/${next.slug}`) : null}
            />
          </FadeIn>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 cursor-pointer"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox}
                alt="Preview"
                width={1920}
                height={1080}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
              <button
                onClick={() => setLightbox(null)}
                aria-label="Close"
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white/90 text-zinc-900 flex items-center justify-center text-sm shadow-md hover:bg-white transition-colors"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 画面の拡大表示: 画像のみを大きめに表示し、縦にスクロールして読む（PC画面は横幅を広く） */}
      <AnimatePresence>
        {screenView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-black/80 overflow-y-auto overscroll-contain cursor-pointer"
            onClick={() => setScreenView(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.3, ease }}
              className={`mx-auto my-10 ${screenView.width >= 1000 ? "w-[min(1024px,calc(100vw-3rem))]" : "w-[min(340px,calc(100vw-3rem))]"} cursor-auto`}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={screenView.src}
                alt={screenView.alt}
                width={screenView.width}
                height={screenView.height}
                sizes={screenView.width >= 1000 ? "(max-width: 1072px) 100vw, 1024px" : "(max-width: 388px) 100vw, 340px"}
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
            <button
              onClick={() => setScreenView(null)}
              aria-label="Close"
              className="fixed top-5 right-5 w-9 h-9 rounded-full bg-white/90 text-zinc-900 flex items-center justify-center text-lg shadow-md hover:bg-white transition-colors"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </PageTransition>
  );
}
