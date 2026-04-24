"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import NumberRain from "@/components/NumberRain";
import { useLocale } from "@/i18n/LocaleContext";

const GradientDefs = ({ id }: { id: string }) => (
  <defs>
    <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#a8305f" />
      <stop offset="50%" stopColor="#d4567e" />
      <stop offset="100%" stopColor="#e88560" />
    </linearGradient>
  </defs>
);

const TargetIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#target-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><GradientDefs id="target-grad" /><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>;
const ChatIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#chat-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><GradientDefs id="chat-grad" /><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>;
const ZapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#zap-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><GradientDefs id="zap-grad" /><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>;
const TrendingUpIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="url(#trending-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><GradientDefs id="trending-grad" /><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>;

const valueIcons = [<ChatIcon key="chat" />, <TargetIcon key="target" />, <ZapIcon key="zap" />, <TrendingUpIcon key="trending" />];

export default function About() {
  const { m } = useLocale();

  return (
    <section id="about" className="py-6 px-6 relative overflow-hidden">
      {/* Falling numbers background */}
      <NumberRain />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -150px 0px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="section-title text-5xl md:text-6xl font-black mb-2 pr-2">
            <span className="gradient-text">About</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl mt-2">
            {m.about.tagline}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -150px 0px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-lg font-bold text-zinc-900 mb-4">{m.about.selfIntroTitle}</h3>
            <div className="card-dark rounded-2xl p-6">
              <div className="space-y-3 text-sm text-zinc-500 leading-relaxed">
                {m.about.selfIntroParagraphs.map((paragraph, pi) => (
                  <p key={pi}>
                    {paragraph.map((seg, si) =>
                      seg.bold ? (
                        <span key={si} className="text-zinc-900 font-bold">
                          {seg.text}
                        </span>
                      ) : (
                        <Fragment key={si}>{seg.text}</Fragment>
                      )
                    )}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -150px 0px" }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-lg font-bold text-zinc-900 mb-4">{m.about.valuesTitle}</h3>
            <div className="grid gap-2">
              {m.about.values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -150px 0px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-dark rounded-xl p-4 flex gap-3 items-start"
                >
                  <div className="flex-shrink-0 mt-0.5">{valueIcons[index]}</div>
                  <div>
                    <p className="text-sm font-semibold text-[#a8305f] mb-1">{value.label}</p>
                    <h4 className="text-zinc-900 text-sm font-bold mb-1">{value.title}</h4>
                    <p className="text-sm text-zinc-400">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>


          </motion.div>
        </div>

        {/* Career link — full width below the 2-col grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -150px 0px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <Link href="/career" className="group block">
            <div className="rounded-2xl p-5 md:p-6 bg-gradient-to-r from-[#a8305f]/8 to-[#e88560]/8 border border-[#a8305f]/15 backdrop-blur-sm flex items-center justify-between hover:from-[#a8305f]/12 hover:to-[#e88560]/12 transition-colors">
              <div>
                <span className="text-lg md:text-xl font-black tracking-tight gradient-text">My Career Story</span>
                <p className="text-sm text-zinc-500 mt-0.5">{m.about.careerLinkDescription}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0 ml-4">
                <span className="text-xs text-[#a8305f]/70 tracking-widest uppercase hidden md:inline">View Timeline</span>
                <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <svg className="w-5 h-5 text-[#a8305f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
