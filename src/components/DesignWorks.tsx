"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const works = [
  { src: "/images/design/sp-1.png", alt: "Design Work 1", width: 1880, height: 1576 },
  { src: "/images/design/sp-11.png", alt: "Design Work 11", width: 1880, height: 1576 },
  { src: "/images/design/sp-8.png", alt: "Design Work 8", width: 1880, height: 1576 },
  { src: "/images/design/sp-12.png", alt: "Design Work 12", width: 1880, height: 1576 },
  { src: "/images/design/sp-10.png", alt: "Design Work 10", width: 1880, height: 1576 },
  { src: "/images/design/sp-9.png", alt: "Design Work 9", width: 1880, height: 1576 },
  { src: "/images/design/sp-6.png", alt: "Design Work 6", width: 1880, height: 1576 },
  { src: "/images/design/sp-14.png", alt: "Design Work 14", width: 1880, height: 1576 },
  { src: "/images/design/sp-7.png", alt: "Design Work 7", width: 1880, height: 1576 },
  { src: "/images/design/sp-13.png", alt: "Design Work 13", width: 1880, height: 1576 },
  { src: "/images/design/sp-5.png", alt: "Design Work 5", width: 1880, height: 1576 },
  { src: "/images/design/sp-4.png", alt: "Design Work 4", width: 1880, height: 1576 },
  { src: "/images/design/sp-3.png", alt: "Design Work 3", width: 1880, height: 1576 },
  { src: "/images/design/sp-2.png", alt: "Design Work 2", width: 1880, height: 1576 },
  { src: "/images/design/sp-15.png", alt: "Design Work 15", width: 1880, height: 1576 },
];

const PREVIEW_COUNT = 6;

export { works };

export default function DesignWorks() {
  const [selected, setSelected] = useState<number | null>(null);
  const preview = works.slice(0, PREVIEW_COUNT);

  return (
    <section id="design" className="py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-2 pr-2">
            <span className="gradient-text">Design Works</span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-xl mt-2">バナー・グラフィックなどのデザイン制作物。</p>
        </motion.div>

        {/* Grid - 6枚のみ */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {preview.map((work, index) => (
            <motion.div
              key={work.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="cursor-pointer group"
              onClick={() => setSelected(index)}
            >
              <div className="rounded-xl overflow-hidden card-clickable transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src={work.src}
                  alt={work.alt}
                  width={work.width}
                  height={work.height}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* もっと見る */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex justify-center"
        >
          <Link href="/design" className="flex flex-col items-center gap-3 group">
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-14 h-14 rounded-full border-2 border-zinc-300 flex items-center justify-center transition-colors group-hover:border-zinc-500"
            >
              <svg className="w-5 h-5 text-zinc-400 transition-colors group-hover:text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </motion.div>
            <span className="text-sm text-zinc-400 tracking-widest uppercase">View All</span>
          </Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 cursor-pointer"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={preview[selected].src}
                alt={preview[selected].alt}
                width={preview[selected].width}
                height={preview[selected].height}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white/90 text-zinc-900 flex items-center justify-center text-sm shadow-md hover:bg-white transition-colors"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
