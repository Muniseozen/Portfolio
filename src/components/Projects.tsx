"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects, type Project } from "@/data/projects";

const workProjects = projects.filter((p) => p.category === "work");
const personalProjects = projects.filter((p) => p.category === "personal");

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
      <Link href={`/projects/${project.slug}`}>
        <div className="card-dark gradient-border rounded-xl p-4 group relative overflow-hidden cursor-pointer h-full flex gap-4 items-start">
          <div className="flex-shrink-0 w-28 h-20 rounded-lg bg-zinc-200 p-[1px] overflow-hidden">
            {project.thumbnail ? (
              <div className="w-full h-full rounded-lg overflow-hidden relative">
                <Image src={project.thumbnail} alt={project.title} fill className="object-cover" />
              </div>
            ) : (
              <div className="w-full h-full rounded-lg bg-white/80 flex items-center justify-center">
                <span className="text-2xl" dangerouslySetInnerHTML={{ __html: project.emoji }} />
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2 mb-0.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">{project.num}</span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">{project.subtitle}</span>
            </div>
            <h3 className="text-sm font-bold tracking-tight text-zinc-900 leading-tight mb-1">{project.title}</h3>
            <p className="text-[11px] text-zinc-400 mb-2">{project.role}</p>
            <div className="flex flex-wrap gap-1">
              {project.tech.map((t) => (
                <span key={t} className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-black/[0.03] border border-black/[0.06] text-zinc-500">{t}</span>
              ))}
            </div>
          </div>
          <svg className="w-4 h-4 text-zinc-300 shrink-0 mt-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="mb-10">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-2 pr-2"><span className="gradient-text">Projects</span></h2>
          <p className="text-zinc-500 text-sm max-w-xl">企画からデザイン、実装まで。手を動かして作ったものたちです。</p>
        </motion.div>

        {/* Selected Work */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-6"
        >
          <h3 className="text-xl font-mono uppercase tracking-widest text-zinc-400 flex items-end gap-3 shrink-0">
            <span className="font-light text-4xl text-zinc-400 leading-none">01</span>
            Selected Work
          </h3>
          <div className="flex-1 h-px bg-gradient-to-r from-zinc-300 to-transparent" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {workProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Personal Projects */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mt-10 mb-4"
        >
          <h3 className="text-xl font-mono uppercase tracking-widest text-zinc-400 flex items-end gap-3 shrink-0">
            <span className="font-light text-4xl text-zinc-400 leading-none">02</span>
            My Projects
          </h3>
          <div className="flex-1 h-px bg-gradient-to-r from-zinc-300 to-transparent" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {personalProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
