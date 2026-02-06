"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const projects = [
  { id: 1, num: "01", title: "Corporate Website\n& Landing Pages", subtitle: "Web Design / Frontend", description: "クライアント企業のコーポレートサイトとLPをまるっと担当。ブランドの世界観を壊さず、ちゃんと成果が出るデザインを追求しました。", role: "PM / Designer / Frontend Dev", tech: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"], gradient: "from-[#9b2c5a] via-[#a83660] to-[#c2456e]", emoji: "&#x1F3A8;" },
  { id: 2, num: "02", title: "HR Matching\nPlatform", subtitle: "Mobile App & Web Admin", description: "求職者と企業をつなぐマッチングアプリ。スマホアプリとWeb管理画面の両方を設計・開発。「使いやすい」を何度も検証して磨きました。", role: "PM / UI&UX Designer / Developer", tech: ["React Native", "React", "Node.js", "PostgreSQL"], gradient: "from-[#c2456e] via-[#d45e6a] to-[#e07850]", emoji: "&#x1F91D;" },
  { id: 3, num: "03", title: "Influencer\nResale App", subtitle: "Mobile App", description: "インフルエンサーが自分のブランドで中古品を販売できるアプリ。出品から決済まで完結する体験と、各インフルエンサーの個性が出るUIを実現。", role: "PM / UI&UX Designer / Frontend Dev", tech: ["React Native", "TypeScript", "Firebase", "Stripe"], gradient: "from-[#e07850] via-[#e8956a] to-[#f0b080]", emoji: "&#x2728;" },
];

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 });
  const handleMouseMove = (e: React.MouseEvent) => { if (!ref.current) return; const rect = ref.current.getBoundingClientRect(); mouseX.set((e.clientX - rect.left) / rect.width); mouseY.set((e.clientY - rect.top) / rect.height); };
  return (
    <motion.div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={() => { mouseX.set(0.5); mouseY.set(0.5); }} style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}>
      {children}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="mb-20">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4"><span className="gradient-text">Projects</span></h2>
          <p className="text-zinc-500 text-lg max-w-xl">企画からデザイン、実装まで。手を動かして作ったものたちです。</p>
        </motion.div>
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>
              <TiltCard>
                <div className="card-light gradient-border rounded-3xl p-8 md:p-12 group transition-all duration-500 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700`} />
                  <div className="absolute -right-4 -top-8 text-[12rem] md:text-[16rem] font-black text-black/[0.03] leading-none select-none pointer-events-none">{project.num}</div>
                  <div className="relative flex flex-col lg:flex-row lg:items-start gap-8">
                    <div className="flex-shrink-0 w-full lg:w-72">
                      <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${project.gradient} p-[1px]`}>
                        <div className="w-full h-full rounded-2xl bg-[#fafafa] flex flex-col items-center justify-center gap-3">
                          <span className="text-5xl" dangerouslySetInnerHTML={{ __html: project.emoji }} />
                          <span className="text-xs text-zinc-500 font-mono uppercase tracking-widest">{project.subtitle}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">Project {project.num}</span>
                      <h3 className="text-3xl md:text-4xl font-black tracking-tight mt-2 mb-4 text-zinc-900 whitespace-pre-line leading-tight">{project.title}</h3>
                      <p className="text-zinc-500 leading-relaxed mb-6 max-w-lg">{project.description}</p>
                      <div className="mb-5">
                        <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">Role</span>
                        <p className="text-sm text-zinc-600 mt-1">{project.role}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="px-3 py-1.5 rounded-full text-xs font-mono bg-zinc-100 border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:border-zinc-300 transition-all cursor-default">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
