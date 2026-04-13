"use client";

import { motion } from "framer-motion";
import { careerProjects, type CareerProject, type ConcurrentProject } from "@/data/career";

/* ─── Date dot on the timeline ─── */

function DateDot({ date, isCurrent }: { date: string; isCurrent?: boolean }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="relative z-10 flex items-center justify-center"
    >
      <div
        className={`w-4 h-4 rounded-full border-[3px] ${isCurrent
          ? "border-emerald-500 bg-emerald-100"
          : "border-[#d4567e] bg-white"
          }`}
      />
      <span
        className={`absolute left-1/2 -translate-x-1/2 -top-5 text-xs font-mono font-semibold whitespace-nowrap ${isCurrent ? "text-emerald-600" : "text-[#d4567e]"
          }`}
      >
        {date}
      </span>
    </motion.div>
  );
}

/* ─── Project card ─── */

function ProjectCard({ project }: { project: CareerProject }) {
  const isHero = project.type === "hero";
  const isCurrent = project.type === "current";

  return (
    <div
      className={`card-dark rounded-xl relative overflow-hidden ${isHero ? "p-3 border-l-4 border-l-[#d4567e]" : "p-3"
        }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="font-bold text-zinc-900 text-sm">{project.title}</h3>
        {isCurrent && (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-600 border border-emerald-200">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            Now
          </span>
        )}
      </div>
      <p className="text-sm text-[#d4567e] font-medium">{project.role}</p>
      {Array.isArray(project.description) ? (
        <ul className="mt-1 space-y-0.5">
          {project.description.map((item) => (
            <li key={item} className="text-sm text-zinc-500 flex items-start gap-1.5">
              <span className="gradient-text mt-0.5 shrink-0">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-zinc-500 leading-relaxed mt-1">{project.description}</p>
      )}
      <div className="mt-2 flex flex-wrap gap-1">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-1.5 py-0.5 rounded-md font-mono bg-[#a8305f]/5 text-[#a8305f] border border-[#a8305f]/10">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Concurrent card (left side) ─── */

function ConcurrentCard({ project }: { project: ConcurrentProject }) {
  return (
    <div className="card-dark rounded-xl p-3 border-r-4 border-r-[#e88560]">
      <h3 className="font-bold text-zinc-900 text-sm">{project.title}</h3>
      {Array.isArray(project.description) ? (
        <ul className="mt-1 space-y-0.5">
          {project.description.map((item) => (
            <li key={item} className="text-sm text-zinc-500 flex items-start gap-1.5">
              <span className="text-[#e88560] mt-0.5 shrink-0">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-zinc-500 leading-relaxed mt-1">{project.description}</p>
      )}
      <div className="mt-2 flex flex-wrap gap-1">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-1.5 py-0.5 rounded-md font-mono bg-[#e88560]/5 text-[#e88560] border border-[#e88560]/10">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Desktop timeline item ─── */

function DesktopTimelineItem({ project, index, isLast }: { project: CareerProject; index: number; isLast: boolean }) {
  const isCurrent = project.type === "current";

  return (
    <>
      {/* Start date row */}
      <div className="grid grid-cols-[1fr_48px_1fr] items-center">
        <div />
        <div className="flex justify-center">
          <DateDot date={project.startDate} />
        </div>
        <div />
      </div>

      {/* Content row */}
      <div className="grid grid-cols-[1fr_48px_1fr] gap-x-4">
        {/* Left column */}
        <div className="flex justify-end items-start pt-10">
          {project.concurrent && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
              className="w-full"
            >
              <ConcurrentCard project={project.concurrent} />
              <p className="text-[10px] font-mono text-zinc-300 text-right mt-1.5 italic">同時進行</p>
            </motion.div>
          )}
        </div>
        {/* Center line */}
        <div className="flex justify-center">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-0.5 h-full bg-gradient-to-b from-[#d4567e]/25 to-[#e88560]/15"
            style={{ transformOrigin: "top" }}
          />
        </div>
        {/* Card */}
        <div className="pt-1 pb-1">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        </div>
      </div>

      {/* End date (last item only) */}
      {isLast && (
        <div className="grid grid-cols-[1fr_48px_1fr] items-center">
          <div />
          <div className="flex justify-center">
            <DateDot date={project.endDate} isCurrent={isCurrent} />
          </div>
          <div />
        </div>
      )}
    </>
  );
}

/* ─── Mobile timeline item ─── */

function MobileTimelineItem({ project, index, isLast }: { project: CareerProject; index: number; isLast: boolean }) {
  const isCurrent = project.type === "current";

  return (
    <>
      {/* Start date */}
      <div className="grid grid-cols-[32px_1fr] items-center">
        <div className="flex justify-center">
          <div className={`w-3 h-3 rounded-full border-2 ${isCurrent ? "border-emerald-500 bg-emerald-100" : "border-[#d4567e] bg-white"} z-10`} />
        </div>
        <span className={`text-[10px] font-mono font-semibold ${isCurrent ? "text-emerald-600" : "text-[#d4567e]"}`}>
          {project.startDate}
        </span>
      </div>

      {/* Content */}
      <div className="grid grid-cols-[32px_1fr] gap-x-3">
        <div className="flex justify-center">
          <div className="w-0.5 h-full bg-gradient-to-b from-[#d4567e]/20 to-[#e88560]/10" />
        </div>
        <div className="pb-3 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
          {project.concurrent && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.15 }}
            >
              <p className="text-[10px] font-mono text-zinc-300 italic mb-1">同時進行</p>
              <ConcurrentCard project={project.concurrent} />
            </motion.div>
          )}
        </div>
      </div>

      {/* End date (last item only) */}
      {isLast && (
        <div className="grid grid-cols-[32px_1fr] items-center">
          <div className="flex justify-center">
            <div className={`w-3 h-3 rounded-full border-2 ${isCurrent ? "border-emerald-500 bg-emerald-100" : "border-[#d4567e] bg-white"} z-10`} />
          </div>
          <span className={`text-[10px] font-mono font-semibold ${isCurrent ? "text-emerald-600" : "text-[#d4567e]"}`}>
            {project.endDate}
          </span>
        </div>
      )}
    </>
  );
}

/* ─── Number rain background ─── */

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function NumberColumn({ index }: { index: number }) {
  const numbers = "0123456789";
  const length = 30 + Math.floor(seededRandom(index + 1) * 20);
  const chars = [...Array(length)].map((_, i) => numbers[Math.floor(seededRandom(index * 100 + i) * 10)]);
  const speed = Math.round((4 + seededRandom(index + 50) * 6) * 10) / 10;
  const delayVal = Math.round((-speed * (index % 10) / 10) * 10) / 10;
  const initialOffset = (index % 5) * -20;

  return (
    <div
      className="font-mono text-sm text-black/[0.08] leading-5 animate-number-fall whitespace-nowrap"
      style={{
        animationDuration: `${speed}s`,
        animationDelay: `${delayVal}s`,
        transform: `translateY(${initialOffset}%)`,
      }}
    >
      {chars.map((char, i) => (
        <div
          key={i}
          style={{ opacity: Math.max(0.15, 0.8 - i * 0.025) }}
          className="text-center"
        >
          {char}
        </div>
      ))}
    </div>
  );
}

function NumberRain() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      style={{ maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)" }}
    >
      <div className="absolute inset-0 flex gap-2 justify-around">
        {[...Array(50)].map((_, i) => (
          <NumberColumn key={i} index={i} />
        ))}
      </div>
    </div>
  );
}

/* ─── Main component ─── */

export default function Career() {
  return (
    <section id="career" className="py-10 px-6 relative overflow-hidden">
      <NumberRain />
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-2 pr-2">
            <span className="gradient-text">Career</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl mt-2">
            テスターから開発リードへ。4年間の成長軌跡。
          </p>
          <p className="text-sm text-zinc-500 leading-relaxed mt-4 max-w-3xl">
            テレビ制作会社でのAD経験（2020〜2022年）を経て、2023年にIT業界へ未経験転職。マニュアル作成・QAを経験後、自ら開発事業部の立ち上げを発案・提案し承認を獲得。ゼロから5名チームを組成してiOSアプリ2本をリリース。現在はReact + TypeScriptを軸としたWebシステムの開発リードを担う。PM・デザイン・開発の三刀流と、事業部立ち上げ経験が最大の強み。
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden md:block max-w-4xl mx-auto">
          {careerProjects.map((project, index) => (
            <DesktopTimelineItem
              key={project.period}
              project={project}
              index={index}
              isLast={index === careerProjects.length - 1}
            />
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden">
          {careerProjects.map((project, index) => (
            <MobileTimelineItem
              key={project.period}
              project={project}
              index={index}
              isLast={index === careerProjects.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
