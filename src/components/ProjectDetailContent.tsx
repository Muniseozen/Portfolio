"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ProjectDetailContent({ slug }: { slug: string }) {
  const project = getProjectBySlug(slug)!;
  const { prev, next } = getAdjacentProjects(slug);

  return (
    <PageTransition>
      <Navigation variant="detail" />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-[#fafafa] relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-[0.04]`} />
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              Project {project.num}
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mt-3 mb-4 whitespace-pre-line">
              <span className="gradient-text">{project.title}</span>
            </h1>
            <p className="text-xl text-zinc-500 max-w-2xl mb-8">
              {project.subtitle}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full text-xs font-mono bg-black/[0.03] border border-black/[0.06] text-zinc-500"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meta Bar */}
      <section className="py-12 px-6 border-y border-black/5">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Role", value: project.role },
                { label: "Duration", value: project.duration },
                { label: "Team", value: project.team },
                { label: "Status", value: project.status },
              ].map((item) => (
                <div key={item.label}>
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                    {item.label}
                  </span>
                  <p className="text-zinc-900 mt-1 text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Screenshots Placeholder */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className={`aspect-video rounded-3xl bg-gradient-to-br ${project.gradient} p-[1px]`}>
              <div className="w-full h-full rounded-3xl bg-[#fafafa] flex items-center justify-center">
                <div className="text-center">
                  <span
                    className="text-7xl block mb-4"
                    dangerouslySetInnerHTML={{ __html: project.emoji }}
                  />
                  <span className="text-zinc-400 text-sm font-mono">
                    Screenshots Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Overview + Tech Stack */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <FadeIn className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6">
                <span className="gradient-text">Overview</span>
              </h2>
              <p className="text-zinc-500 leading-relaxed text-lg">
                {project.longDescription}
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="card-dark gradient-border rounded-3xl p-8">
                <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">
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
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-12">
              <span className="gradient-text">My Role</span>
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {project.roleBreakdown.map((role, index) => (
              <FadeIn key={role.title} delay={index * 0.1}>
                <div className="card-dark gradient-border rounded-3xl p-8 h-full">
                  <h3 className="text-lg font-bold text-zinc-900 mb-4">
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

      {/* Challenges & Solutions */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-12">
              <span className="gradient-text">Challenges & Solutions</span>
            </h2>
          </FadeIn>
          <div className="flex flex-col gap-8">
            {project.challenges.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="card-dark gradient-border rounded-3xl p-8 md:p-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3 block">
                        Challenge
                      </span>
                      <p className="text-zinc-600 leading-relaxed">
                        {item.problem}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3 block">
                        Solution
                      </span>
                      <p className="text-zinc-600 leading-relaxed">
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

      {/* Prev / Next Navigation */}
      <section className="py-20 px-6 border-t border-black/5">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-2 gap-6">
              {prev ? (
                <Link
                  href={`/projects/${prev.slug}`}
                  className="card-dark gradient-border rounded-3xl p-8 group transition-all duration-300 hover:bg-black/[0.02]"
                >
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                    &larr; Previous
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-zinc-900 mt-2 whitespace-pre-line group-hover:text-zinc-700 transition-colors">
                    {prev.title}
                  </h3>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link
                  href={`/projects/${next.slug}`}
                  className="card-dark gradient-border rounded-3xl p-8 group transition-all duration-300 text-right hover:bg-black/[0.02]"
                >
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                    Next &rarr;
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-zinc-900 mt-2 whitespace-pre-line group-hover:text-zinc-700 transition-colors">
                    {next.title}
                  </h3>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </PageTransition>
  );
}
