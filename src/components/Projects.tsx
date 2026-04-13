"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects, type Project } from "@/data/projects";

const workProjects = projects.filter((p) => p.category === "work");
const personalProjects = projects.filter((p) => p.category === "personal");

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px 0px -150px 0px" }} transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
      <Link href={`/projects/${project.slug}`}>
        <div className="card-clickable rounded-xl group relative overflow-hidden cursor-pointer h-full flex flex-col">
          {/* タイトル */}
          <div className="p-4 pb-2">
            <span className="text-sm font-mono uppercase tracking-widest text-zinc-400">{project.num}</span>
            <h3 className="text-base font-bold tracking-tight text-zinc-900 leading-tight mt-0.5">{project.title}</h3>
            <p className="text-sm text-zinc-400 mt-0.5">{project.role}</p>
          </div>
          {/* 画像 */}
          <div className="mx-4 rounded-lg aspect-[16/9] bg-zinc-200 overflow-hidden relative">
            {project.thumbnail ? (
              <Image src={project.thumbnail} alt={project.title} fill className="object-contain" />
            ) : (
              <div className="w-full h-full bg-white/80 flex items-center justify-center">
                <span className="text-3xl" dangerouslySetInnerHTML={{ __html: project.emoji }} />
              </div>
            )}
          </div>
          {/* タグ + View */}
          <div className="flex items-end justify-between p-4 pt-3">
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className="px-2.5 py-0.5 rounded-full text-sm font-mono bg-black/[0.03] border border-black/[0.06] text-zinc-500">{t}</span>
              ))}
            </div>
            <div className="flex items-center gap-1.5 text-sm font-mono text-zinc-400 shrink-0 ml-3">
              <span>View</span>
              <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px 0px -150px 0px" }} transition={{ duration: 0.6 }} className="mb-10">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-2 pr-2"><span className="gradient-text">Projects</span></h2>
          <p className="text-zinc-500 text-lg max-w-xl mt-2">企画からデザイン、実装まで。何よりも先に手を動かす。</p>
        </motion.div>

        {/* Selected Work */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -150px 0px" }}
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
          viewport={{ once: true, margin: "0px 0px -150px 0px" }}
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
