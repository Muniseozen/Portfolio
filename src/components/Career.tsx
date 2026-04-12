"use client";

import { motion } from "framer-motion";
import {
  careerPhases,
  type CareerPhase,
  type ConcurrentProject,
} from "@/data/career";

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
        className={`absolute left-1/2 -translate-x-1/2 -top-6 text-[11px] font-mono font-semibold whitespace-nowrap ${isCurrent ? "text-emerald-600" : "text-[#d4567e]"
          }`}
      >
        {date}
      </span>
    </motion.div>
  );
}

/* ─── Main phase card (right side) ─── */

function PhaseCard({ phase }: { phase: CareerPhase }) {
  const isHero = phase.type === "hero";
  const isCurrent = phase.type === "current";

  return (
    <div className={isHero ? "gradient-border" : ""}>
      <div
        className={`card-dark rounded-2xl relative overflow-hidden ${isHero ? "p-4 md:p-5 border-l-4 border-l-[#d4567e]" : "p-3 md:p-4"
          }`}
      >
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3 className={`font-bold text-zinc-900 ${isHero ? "text-sm md:text-base" : "text-xs md:text-sm"}`}>
            {phase.title}
          </h3>
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
        <p className="text-xs text-[#d4567e] font-medium mb-2">{phase.role}</p>
        <p className={`text-zinc-500 leading-relaxed ${isHero ? "text-xs" : "text-[11px]"}`}>
          {phase.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {phase.highlights.map((h) => (
            <span key={h} className="text-[11px] px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200">
              {h}
            </span>
          ))}
        </div>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {phase.tech.map((t) => (
            <span key={t} className="text-[11px] px-2 py-0.5 rounded-md font-mono bg-[#a8305f]/5 text-[#a8305f] border border-[#a8305f]/10">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Concurrent card (left side) ─── */

function ConcurrentCard({ project }: { project: ConcurrentProject }) {
  return (
    <div className="card-dark rounded-2xl p-4 md:p-5 border-r-4 border-r-[#e88560]">
      <h3 className="font-bold text-zinc-900 text-sm md:text-base mb-1">{project.title}</h3>
      <p className="text-xs text-[#e88560] font-medium mb-2">{project.role}</p>
      <p className="text-xs text-zinc-500 leading-relaxed">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.highlights.map((h) => (
          <span key={h} className="text-[11px] px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600 border border-zinc-200">
            {h}
          </span>
        ))}
      </div>
      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span key={t} className="text-[11px] px-2 py-0.5 rounded-md font-mono bg-[#e88560]/5 text-[#e88560] border border-[#e88560]/10">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Desktop timeline item ─── */

function DesktopTimelineItem({ phase, index, isLast }: { phase: CareerPhase; index: number; isLast: boolean }) {
  const hasConcurrent = !!phase.concurrent;
  const isCurrent = phase.type === "current";

  return (
    <>
      {/* ── Start date row ── */}
      <div className="grid grid-cols-[1fr_48px_1fr] items-center">
        <div />
        <div className="flex justify-center">
          <DateDot date={phase.startDate} />
        </div>
        <div />
      </div>

      {/* ── Content row: left card? | line | right card ── */}
      <div className="grid grid-cols-[1fr_48px_1fr] gap-x-6">
        {/* Left column */}
        <div className="flex justify-end items-start pt-4">
          {hasConcurrent && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.15 + 0.1 }}
              className="w-full"
            >
              <ConcurrentCard project={phase.concurrent!} />
              <p className="text-[10px] font-mono text-zinc-300 text-right mt-2 italic">同時進行</p>
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

        {/* Right column */}
        <div className="pt-4 pb-6">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <PhaseCard phase={phase} />
          </motion.div>
        </div>
      </div>

      {/* ── End date row (only for last item) ── */}
      {isLast && (
        <div className="grid grid-cols-[1fr_48px_1fr] items-center">
          <div />
          <div className="flex justify-center">
            <DateDot date={phase.endDate} isCurrent={isCurrent} />
          </div>
          <div />
        </div>
      )}
    </>
  );
}

/* ─── Mobile timeline item ─── */

function MobileTimelineItem({ phase, index, isLast }: { phase: CareerPhase; index: number; isLast: boolean }) {
  const hasConcurrent = !!phase.concurrent;
  const isCurrent = phase.type === "current";

  return (
    <>
      {/* Start date */}
      <div className="grid grid-cols-[32px_1fr] items-center">
        <div className="flex justify-center">
          <div className={`w-3 h-3 rounded-full border-2 ${isCurrent ? "border-emerald-500 bg-emerald-100" : "border-[#d4567e] bg-white"} z-10`} />
        </div>
        <span className={`text-[10px] font-mono font-semibold ${isCurrent ? "text-emerald-600" : "text-[#d4567e]"}`}>
          {phase.startDate}
        </span>
      </div>

      {/* Content */}
      <div className="grid grid-cols-[32px_1fr] gap-x-3">
        <div className="flex justify-center">
          <div className="w-0.5 h-full bg-gradient-to-b from-[#d4567e]/20 to-[#e88560]/10" />
        </div>
        <div className="pb-6 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <PhaseCard phase={phase} />
          </motion.div>
          {hasConcurrent && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 + 0.15 }}
            >
              <p className="text-[10px] font-mono text-zinc-300 italic mb-1">同時進行</p>
              <ConcurrentCard project={phase.concurrent!} />
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
            {phase.endDate}
          </span>
        </div>
      )}
    </>
  );
}

/* ─── Main component ─── */

export default function Career() {
  return (
    <section id="career" className="py-10 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
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
          <p className="text-zinc-500 text-lm max-w-xl">
            テスターから開発リードへ。4年間の成長軌跡。
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden md:block max-w-4xl mx-auto">
          {careerPhases.map((phase, index) => (
            <DesktopTimelineItem
              key={phase.period}
              phase={phase}
              index={index}
              isLast={index === careerPhases.length - 1}
            />
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden">
          {careerPhases.map((phase, index) => (
            <MobileTimelineItem
              key={phase.period}
              phase={phase}
              index={index}
              isLast={index === careerPhases.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
