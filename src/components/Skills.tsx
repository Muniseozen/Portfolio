"use client";

import { motion } from "framer-motion";

const skillCategories = [
  { title: "Frontend", icon: "{ }", tagline: "UIを作るのが一番好き", skills: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "HTML/CSS"], gradient: "from-[#9b2c5a] to-[#c2456e]", border: "border-[#9b2c5a]/30" },
  { title: "Mobile", icon: "[ ]", tagline: "ネイティブもクロスも対応", skills: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)"], gradient: "from-[#a83660] to-[#d45e6a]", border: "border-[#a83660]/30" },
  { title: "Backend", icon: "> _", tagline: "API設計から DB まで", skills: ["Node.js", "Express", "PostgreSQL", "Firebase", "REST API", "GraphQL"], gradient: "from-[#c2456e] to-[#e07850]", border: "border-[#c2456e]/30" },
  { title: "Design", icon: "~ *", tagline: "設計して作って検証する", skills: ["Figma", "UI Design", "UX Research", "Prototyping", "Design System"], gradient: "from-[#e07850] to-[#e8956a]", border: "border-[#e07850]/30" },
  { title: "PM / Other", icon: "# +", tagline: "チームを回すのも得意", skills: ["Agile / Scrum", "要件定義", "Wireframing", "Git / GitHub", "CI/CD", "Vercel"], gradient: "from-[#e8956a] to-[#9b2c5a]", border: "border-[#e8956a]/30" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-[#09090b]">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="mb-20">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4"><span className="gradient-text">Skills</span></h2>
          <p className="text-zinc-400 text-lg max-w-xl">「それ、全部ひとりでできますか？」→ はい、できます。</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div key={category.title} initial={{ opacity: 0, y: 30, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className={`card-dark rounded-2xl p-6 transition-all duration-300 border-l-2 ${category.border}`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-[10px] font-mono font-bold text-white`}>{category.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">{category.title}</h3>
                  <span className="text-xs text-zinc-500">{category.tagline}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] border border-white/[0.07] text-zinc-400 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.15] transition-all cursor-default">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
