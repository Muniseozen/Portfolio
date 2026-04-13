"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function ComingSoon({ title }: { title: string }) {
  return (
    <PageTransition>
      <Navigation variant="detail" />
      <section className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl font-black tracking-tighter mb-3">
            <span className="gradient-text">{title.replace("\n", " ")}</span>
          </h1>
          <p className="text-zinc-400 text-lg mb-8">Coming Soon</p>
          <Link
            href="/"
            className="text-sm font-mono text-zinc-400 hover:text-zinc-600 transition-colors flex items-center justify-center gap-2"
          >
            <span>&larr;</span>
            <span>Back to Home</span>
          </Link>
        </motion.div>
      </section>
      <Footer />
    </PageTransition>
  );
}
