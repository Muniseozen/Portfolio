"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import { getProjectBySlug, getAdjacentProjects } from "@/data/projects";

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

export default function ProjectDetailContent({ slug }: { slug: string }) {
  const project = getProjectBySlug(slug)!;
  const { prev, next } = getAdjacentProjects(slug);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const metaItems = [
    { label: "Role", value: project.role },
    ...(project.duration ? [{ label: "Duration", value: project.duration }] : []),
    ...(project.team ? [{ label: "Team", value: project.team }] : []),
    { label: "Status", value: project.status },
  ];

  return (
    <PageTransition>
      <Navigation variant="detail" />

      {/* Hero */}
      <section className="pt-24 pb-8 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="text-base md:text-lg font-mono uppercase tracking-widest text-zinc-900">
              Project {project.num}  —  {project.subtitle}
            </span>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter mt-3 mb-4 whitespace-pre-line">
              <span className="gradient-text">{project.title}</span>
            </h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full text-sm font-mono bg-black/[0.03] border border-black/[0.06] text-zinc-500"
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
                className="inline-flex items-center gap-2 text-sm text-[#d4567e] hover:text-[#a8305f] transition-colors font-medium"
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

      {/* Preview / Screenshots */}
      <section className="py-6 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn delay={0.25}>
            {project.preview && project.previewType === "mobile" ? (
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
            ) : project.preview && project.url ? (
              <div className="rounded-3xl overflow-hidden border border-black/[0.06] shadow-sm">
                <div className="bg-zinc-100 px-4 py-2 flex items-center gap-2 border-b border-black/[0.06]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                    <div className="w-3 h-3 rounded-full bg-green-400/70" />
                  </div>
                  <div className="flex-1 mx-2">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-md px-3 py-1 text-sm text-zinc-400 font-mono truncate hover:text-zinc-600 transition-colors">
                      {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    </a>
                  </div>
                </div>
                <div className="max-h-[600px] overflow-y-auto">
                  <Image
                    src={project.preview}
                    alt={`${project.title} - Preview`}
                    width={1920}
                    height={3000}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            ) : project.preview ? (
              <div className="rounded-2xl overflow-hidden card-clickable cursor-pointer" onClick={() => setLightbox(project.preview!)}>
                <Image
                  src={project.preview}
                  alt={`${project.title} - Screenshots`}
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                />
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
                    <div className="bg-white rounded-md px-3 py-1 text-sm text-zinc-400 font-mono truncate">
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
                    <span className="text-zinc-400 text-sm font-mono">
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
              <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-4">
                <span className="gradient-text">Overview</span>
              </h2>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {project.longDescription}
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="card-dark rounded-2xl p-6">
                <h3 className="text-sm font-mono uppercase tracking-widest text-zinc-400 mb-3">
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
              <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-5">
                <span className="gradient-text">My Role</span>
              </h2>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              {project.roleBreakdown.map((role, index) => (
                <FadeIn key={role.title} delay={index * 0.1}>
                  <div className="card-dark rounded-2xl p-6 h-full">
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
              <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-5">
                <span className="text-zinc-900">Before</span> <span className="gradient-text">→ After</span>
              </h2>
            </FadeIn>
            <div className="flex flex-col gap-4">
              {project.challenges.map((item, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="card-dark rounded-2xl p-5 md:p-6">
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
              <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-5">
                <span className="gradient-text">Design Process</span>
              </h2>
              <div className="rounded-2xl overflow-hidden card-clickable cursor-pointer" onClick={() => setLightbox(project.designProcess!)}>
                <Image
                  src={project.designProcess}
                  alt={`${project.title} - Design Process`}
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                />
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Design System & Prototype - 横並び */}
      {(project.designSystem || project.prototype) && (
        <section className="py-6 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-[7fr_3fr] gap-6 items-start">
              {project.designSystem && (
                <FadeIn>
                  <h3 className="text-lg font-bold text-zinc-900 mb-3">Design System & Components</h3>
                  <div className="rounded-2xl overflow-hidden card-clickable cursor-pointer" onClick={() => setLightbox(project.designSystem!)}>
                    <Image
                      src={project.designSystem}
                      alt={`${project.title} - Design System`}
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                    />
                  </div>
                </FadeIn>
              )}
              {project.prototype && (
                <FadeIn delay={0.1}>
                  <h3 className="text-lg font-bold text-zinc-900 mb-3">Prototype</h3>
                  <div className="rounded-2xl overflow-hidden card-clickable cursor-pointer" onClick={() => setLightbox(project.prototype!)}>
                    <Image
                      src={project.prototype}
                      alt={`${project.title} - Prototype`}
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                    />
                  </div>
                </FadeIn>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Prev / Next Navigation */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex justify-between items-center">
              {prev ? (
                <Link href={`/projects/${prev.slug}`} className="flex flex-col items-center gap-3 group">
                  <div className="w-14 h-14 rounded-full border-2 border-zinc-300 flex items-center justify-center transition-colors group-hover:border-zinc-500">
                    <svg className="w-5 h-5 text-zinc-400 transition-colors group-hover:text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                  </div>
                  <span className="text-sm text-zinc-400 tracking-widest uppercase">Previous</span>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link href={`/projects/${next.slug}`} className="flex flex-col items-center gap-3 group">
                  <div className="w-14 h-14 rounded-full border-2 border-zinc-300 flex items-center justify-center transition-colors group-hover:border-zinc-500">
                    <svg className="w-5 h-5 text-zinc-400 transition-colors group-hover:text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </div>
                  <span className="text-sm text-zinc-400 tracking-widest uppercase">Next</span>
                </Link>
              ) : (
                <div />
              )}
            </div>
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
