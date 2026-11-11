"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { certifications } from "@/data/career";
import { useLocale } from "@/i18n/LocaleContext";
import { localize } from "@/i18n/messages";

const toolCategories: { title: string; tools: { name: string; logo: string }[] }[] = [
  {
    title: "UI/UX Design",
    tools: [
      { name: "Figma", logo: "/images/tools/figma.png" },
      { name: "Photoshop", logo: "/images/tools/photoshop.png" },
      { name: "Canva", logo: "/images/tools/canva.png" },
    ],
  },
  {
    title: "Development Tools",
    tools: [
      { name: "VS Code", logo: "/images/tools/vscode.png" },
      { name: "Xcode", logo: "/images/tools/xcode.png" },
      { name: "Android Studio", logo: "/images/tools/android-studio.png" },
    ],
  },
  {
    title: "PM/Collaboration",
    tools: [
      { name: "Lark", logo: "/images/tools/lark.png" },
      { name: "Slack", logo: "/images/tools/slack.png" },
      { name: "Backlog", logo: "/images/tools/backlog.png" },
      { name: "Teams", logo: "/images/tools/teams.png" },
    ],
  },
  {
    title: "Version Control",
    tools: [
      { name: "GitHub", logo: "/images/tools/github.png" },
      { name: "Bitbucket", logo: "/images/tools/bitbucket.png" },
    ],
  },
];

const skillCategories = [
  { title: "UI / UX Design", icon: "~ *", skills: ["UI Design", "UX Research", "Prototyping", "Design System"], gradient: "from-[#a8305f] to-[#d4567e]", border: "border-[#a8305f]/30" },
  { title: "Frontend", icon: "{ }", skills: ["React", "Next.js", "JavaScript", "HTML / CSS", "Tailwind CSS"], gradient: "from-[#b53a65] to-[#d45e6a]", border: "border-[#b53a65]/30" },
  { title: "iOS App", icon: "iOS", skills: ["Swift", "SwiftUI", "AWS", "MySQL"], gradient: "from-[#d45e6a] to-[#e88560]", border: "border-[#e88560]/30" },
];

export default function Skills() {
  const { m, locale } = useLocale();

  return (
    <section id="skills" className="py-8 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "0px 0px -150px 0px" }} transition={{ duration: 0.6 }} className="mb-8">
          <h2 className="section-title text-5xl md:text-6xl font-black mb-2 pr-2"><span className="gradient-text">Skills</span></h2>
          <p className="text-zinc-500 text-base max-w-xl mt-2">{m.skills.tagline}</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div key={category.title} initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "0px 0px -150px 0px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className={`card-dark rounded-xl p-5 border-l-2 ${category.border}`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center text-xs font-mono font-bold text-white`}>{category.icon}</div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-900 leading-tight">{category.title}</h3>
                  <span className="text-sm text-zinc-600">{m.skills.categoryTaglines[index]}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1 mt-3">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-2 py-0.5 rounded-full text-xs font-mono bg-black/[0.03] border border-black/[0.06] text-zinc-500">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -150px 0px" }}
          transition={{ duration: 0.6 }}
          className="mt-8 mb-6"
        >
          <h3 className="text-lg font-mono uppercase tracking-widest text-zinc-500">Tools</h3>
        </motion.div>
        <div className="flex flex-wrap gap-4">
          {toolCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -150px 0px" }}
              transition={{ duration: 0.4, delay: catIndex * 0.06 }}
              // PC ではツールの数に応じて幅を配分し、4つ並ぶ PM/Collaboration でも折り返さないようにする（スマホは均等）
              style={{ "--grow": category.tools.length } as React.CSSProperties}
              className="card-dark rounded-xl p-4 flex-1 min-w-[140px] md:[flex-grow:var(--grow)]"
            >
              <p className="text-xs font-mono text-zinc-500 mb-3">{category.title}</p>
              <div className="flex flex-wrap gap-4 justify-start">
                {category.tools.map((tool) => (
                  <div key={tool.name} className="flex flex-col items-center gap-1.5 w-14">
                    <div className="w-11 h-11 rounded-lg bg-white/90 border border-black/[0.06] shadow-sm flex items-center justify-center p-1.5">
                      <Image src={tool.logo} alt={tool.name} width={28} height={28} className="object-contain" />
                    </div>
                    <span className="text-xs text-zinc-500 text-center leading-tight">{tool.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -150px 0px" }}
          transition={{ duration: 0.6 }}
          className="mt-8 mb-4"
        >
          <h3 className="text-lg font-mono uppercase tracking-widest text-zinc-500">Certifications</h3>
        </motion.div>
        <div className="grid grid-cols-3 gap-3">
          {certifications.map((c) => localize(c, locale)).map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -150px 0px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="card-dark rounded-xl p-5 text-center"
            >
              <p className="text-sm font-medium text-zinc-900 leading-tight">{cert.name}</p>
              {cert.detail && (
                <p className="text-xs text-zinc-500 mt-1">{cert.detail}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
