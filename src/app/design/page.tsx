"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";
import { works } from "@/components/DesignWorks";

export default function DesignPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <PageTransition>
      <Navigation variant="detail" />

      <section className="pt-28 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter pr-2">
              <span className="gradient-text">Design Works</span>
            </h1>
          </motion.div>

          {/* Full Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {works.map((work, index) => (
              <motion.div
                key={work.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
                className="cursor-pointer group"
                onClick={() => setSelected(index)}
              >
                <div className="rounded-xl overflow-hidden border border-black/[0.06] shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
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
        </div>
      </section>

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
                src={works[selected].src}
                alt={works[selected].alt}
                width={works[selected].width}
                height={works[selected].height}
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

      <Footer />
    </PageTransition>
  );
}
