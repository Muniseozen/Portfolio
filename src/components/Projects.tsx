"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects, type Project } from "@/data/projects";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const workProjects = projects.filter((p) => p.category === "work");
const personalProjects = projects.filter((p) => p.category === "personal");

/* ─── Grid card ─── */

function GridCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -150px 0px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease }}
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="card-clickable rounded-xl group overflow-hidden cursor-pointer h-full flex flex-col">
          {/* Thumbnail */}
          <div className="overflow-hidden bg-[#f5f0ee] aspect-[5/3]">
            {project.thumbnail ? (
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={800}
                height={480}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-3xl" dangerouslySetInnerHTML={{ __html: project.emoji }} />
              </div>
            )}
          </div>
          {/* Content */}
          <div className="p-4 flex flex-col flex-1">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[11px] font-mono tracking-[0.15em] text-[#d4567e]">{project.num}</span>
              <div className="flex-1 h-px bg-zinc-200" />
            </div>
            <h3 className="text-sm font-bold tracking-tight text-zinc-900 leading-snug">
              {project.title}
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">{project.role}</p>
            <div className="flex flex-wrap gap-1 mt-auto pt-3">
              {project.tech.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="px-1.5 py-0.5 rounded-full text-[11px] font-mono bg-black/[0.03] border border-black/[0.06] text-zinc-500"
                >
                  {t}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className="px-1.5 py-0.5 rounded-full text-[11px] font-mono bg-black/[0.03] border border-black/[0.06] text-zinc-400">
                  +{project.tech.length - 3}
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {workProjects.map((project, index) => (
            <GridCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* ── My Projects ── */}
        <div className="mt-12">
          <SectionHeader num="02" title="My Projects" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {personalProjects.map((project, index) => (
              <GridCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
