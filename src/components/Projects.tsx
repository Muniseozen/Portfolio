"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { projects, type Project } from "@/data/projects";

const workProjects = projects.filter((p) => p.category === "work");
const personalProjects = projects.filter((p) => p.category === "personal");

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
      <Link href={`/projects/${project.slug}`}>
          <div className="card-dark gradient-border rounded-2xl p-6 md:p-8 group relative overflow-hidden cursor-pointer">
            <div className="absolute -right-4 -top-8 text-[10rem] md:text-[12rem] font-black text-black/[0.03] leading-none select-none pointer-events-none">{project.num}</div>
            <div className="relative flex flex-col lg:flex-row lg:items-start gap-6">
              <div className="flex-shrink-0 w-full lg:w-56">
                <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${project.gradient} p-[1px]`}>
                  <div className="w-full h-full rounded-2xl bg-white/80 flex flex-col items-center justify-center gap-3">
                    <span className="text-5xl" dangerouslySetInnerHTML={{ __html: project.emoji }} />
                    <span className="text-xs text-zinc-500 font-mono uppercase tracking-widest">{project.subtitle}</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">Project {project.num}</span>
                <h3 className="text-xl md:text-2xl font-black tracking-tight mt-1 mb-3 text-zinc-900 whitespace-pre-line leading-tight">{project.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-4 max-w-lg">{project.description}</p>
                <div className="mb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">Role</span>
                  <p className="text-xs text-zinc-500 mt-1">{project.role}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-full text-xs font-mono bg-black/[0.03] border border-black/[0.06] text-zinc-500">{t}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <span>View Project</span>
                  <span>&rarr;</span>
                </div>
              </div>
            </div>
          </div>
      </Link>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="mb-10">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-2 pr-2"><span className="gradient-text">Projects</span></h2>
          <p className="text-zinc-500 text-sm max-w-xl">企画からデザイン、実装まで。手を動かして作ったものたちです。</p>
        </motion.div>

        {/* Selected Work */}
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg font-mono uppercase tracking-widest text-zinc-400 mb-6"
        >
          Selected Work
        </motion.h3>
        <div className="flex flex-col gap-8">
          {workProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Personal Projects */}
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg font-mono uppercase tracking-widest text-zinc-400 mt-16 mb-6"
        >
          Personal Projects
        </motion.h3>
        <div className="flex flex-col gap-8">
          {personalProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
