"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects, type Project } from "@/data/projects";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const workProjects = projects.filter((p) => p.category === "work");
const personalProjects = projects.filter((p) => p.category === "personal");

/* ─── Featured card — first work project ─── */

function FeaturedCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -150px 0px" }}
      transition={{ duration: 0.6, ease }}
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="card-clickable rounded-2xl group overflow-hidden cursor-pointer">
          <div className="grid md:grid-cols-[1.15fr_1fr]">
            {/* Thumbnail */}
            <div className="overflow-hidden bg-[#f5f0ee]">
              {project.thumbnail ? (
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  width={1200}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="aspect-[3/2] flex items-center justify-center">
                  <span className="text-4xl" dangerouslySetInnerHTML={{ __html: project.emoji }} />
                </div>
              )}
            </div>
            {/* Content */}
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#d4567e]">
                Featured — {project.num}
              </span>
              <h3 className="text-xl md:text-2xl font-black tracking-tight text-zinc-900 mt-2 leading-tight">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-400 mt-1">{project.role}</p>
              <p className="text-sm text-zinc-500 leading-relaxed mt-3 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.tech.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full text-xs font-mono bg-black/[0.03] border border-black/[0.06] text-zinc-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[#d4567e] group-hover:text-[#a8305f] transition-colors">
                <span>View Project</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Grid card — standard project ─── */

function GridCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -150px 0px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease }}
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="card-clickable rounded-2xl group overflow-hidden cursor-pointer h-full flex flex-col">
          {/* Thumbnail */}
          <div className="overflow-hidden bg-[#f5f0ee]">
            {project.thumbnail ? (
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={1200}
                height={800}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
              />
            ) : (
              <div className="aspect-[3/2] flex items-center justify-center">
                <span className="text-4xl" dangerouslySetInnerHTML={{ __html: project.emoji }} />
              </div>
            )}
          </div>
          {/* Content */}
          <div className="p-5 flex flex-col flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono tracking-[0.15em] text-[#d4567e]">{project.num}</span>
              <div className="flex-1 h-px bg-zinc-200" />
            </div>
            <h3 className="text-base font-bold tracking-tight text-zinc-900 leading-snug">
              {project.title}
            </h3>
            <p className="text-sm text-zinc-400 mt-0.5">{project.role}</p>
            <div className="flex flex-wrap gap-1.5 mt-auto pt-4">
              {project.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded-full text-xs font-mono bg-black/[0.03] border border-black/[0.06] text-zinc-500"
                >
                  {t}
                </span>
              ))}
              {project.tech.length > 4 && (
                <span className="px-2 py-0.5 rounded-full text-xs font-mono bg-black/[0.03] border border-black/[0.06] text-zinc-400">
                  +{project.tech.length - 4}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Section header ─── */

function SectionHeader({ num, title, delay = 0 }: { num: string; title: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -150px 0px" }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-4 mb-6"
    >
      <h3 className="text-lg font-mono uppercase tracking-widest text-zinc-400 flex items-end gap-3 shrink-0">
        <span className="font-light text-3xl text-zinc-300 leading-none">{num}</span>
        {title}
      </h3>
      <div className="flex-1 h-px bg-gradient-to-r from-zinc-200 to-transparent" />
    </motion.div>
  );
}

/* ─── Main ─── */

export default function Projects() {
  const [featured, ...restWork] = workProjects;

  return (
    <section id="projects" className="py-10 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -150px 0px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-2 pr-2">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl mt-2">
            企画からデザイン、実装まで。何よりも先に手を動かす。
          </p>
        </motion.div>

        {/* ── Selected Work ── */}
        <SectionHeader num="01" title="Selected Work" />

        {/* Featured project */}
        <FeaturedCard project={featured} />

        {/* Remaining work projects — 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {restWork.map((project, index) => (
            <GridCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* ── My Projects ── */}
        <div className="mt-14">
          <SectionHeader num="02" title="My Projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {personalProjects.map((project, index) => (
              <GridCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
