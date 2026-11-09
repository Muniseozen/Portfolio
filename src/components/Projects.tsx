"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects, projectTypeLabels, works, graphicCategories } from "@/data/projects";
import { useLocale } from "@/i18n/LocaleContext";
import { localize, localePath } from "@/i18n/messages";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];
const groups = [
  { num: "01", title: projectTypeLabels.web, type: "web" },
  { num: "02", title: projectTypeLabels.app, type: "app" },
] as const;

/* ─── Grid card ─── */

type CardProps = {
  href: string;
  image?: string;
  emoji?: string;
  title: string;
  subtitle: string;
  isWork: boolean;
  tags?: string[];
  index: number;
};

function GridCard({ href, image, emoji, title, subtitle, isWork, tags = [], index }: CardProps) {
  const { m } = useLocale();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -150px 0px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease }}
    >
      <Link href={href}>
        <div className="card-clickable rounded-xl group overflow-hidden cursor-pointer h-full flex flex-col">
          {/* Thumbnail */}
          <div className="overflow-hidden bg-[#f5f0ee] aspect-[5/3]">
            {image ? (
              <Image
                src={image}
                alt={title}
                width={800}
                height={480}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 33vw"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-3xl" dangerouslySetInnerHTML={{ __html: emoji ?? "" }} />
              </div>
            )}
          </div>
          {/* Content */}
          <div className="p-4 flex flex-col flex-1">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[11px] font-mono tracking-[0.15em] text-[#d4567e]">{String(index + 1).padStart(2, "0")}</span>
              <div className="flex-1 h-px bg-zinc-200" />
              <span className={`text-xs ${isWork ? "text-[#a8305f]" : "text-zinc-400"}`}>
                {isWork ? m.projects.workLabel : m.projects.personalLabel}
              </span>
            </div>
            <h3 className="text-sm font-bold tracking-tight text-zinc-900 leading-snug">
              {title}
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">{subtitle}</p>
            <div className="flex flex-wrap gap-1 mt-auto pt-3">
              {tags.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="px-1.5 py-0.5 rounded-full text-[11px] font-mono bg-black/[0.03] border border-black/[0.06] text-zinc-500"
                >
                  {t}
                </span>
              ))}
              {tags.length > 3 && (
                <span className="px-1.5 py-0.5 rounded-full text-[11px] font-mono bg-black/[0.03] border border-black/[0.06] text-zinc-400">
                  +{tags.length - 3}
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
  const { m, locale } = useLocale();

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
          <h2 className="section-title text-5xl md:text-6xl font-black mb-2 pr-2">
            <span className="gradient-text">My Works</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl mt-2">
            {m.projects.tagline}
          </p>
        </motion.div>

        {groups.map((group) => (
          <div key={group.type} className="mb-12">
            <SectionHeader num={group.num} title={group.title} />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {projects
                .filter((p) => p.type === group.type)
                .map((p) => localize(p, locale))
                .map((project, index) => (
                  <GridCard
                    key={project.id}
                    href={localePath(locale, `/projects/${project.slug}`)}
                    image={project.thumbnail}
                    emoji={project.emoji}
                    title={project.title}
                    subtitle={project.role}
                    isWork={project.category === "work"}
                    tags={project.tech}
                    index={index}
                  />
                ))}
            </div>
          </div>
        ))}

        {/* ── Graphic ── */}
        <SectionHeader num="03" title="Graphic Design" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {graphicCategories.map((cat, index) => (
            <GridCard
              key={cat.key}
              href={localePath(locale, `/design/${cat.key}`)}
              image={cat.cover}
              title={m.projects.graphicCategories[cat.key]}
              subtitle={m.projects.graphicCount.replace("{n}", String(works.filter((w) => w.category === cat.key).length))}
              isWork
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
