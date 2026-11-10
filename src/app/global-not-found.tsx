import type { Metadata } from "next";
import Link from "next/link";
import RootDocument from "@/app/_shared/RootDocument";

// サイト全体の 404（存在しない URL・存在しないプロジェクト/分類）
// ルートレイアウトが (ja) と en に分かれているため、自前で <html> を持つ

export const metadata: Metadata = {
  title: "404 | Munise Haruyama",
};

export default function GlobalNotFound() {
  return (
    <RootDocument locale="en">
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="section-title text-8xl md:text-9xl font-black mb-4">
            <span className="gradient-text">404</span>
          </h1>
          <p className="text-zinc-500 text-lg mb-8">
            Page not found.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-bg text-white text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <span>&larr;</span>
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </RootDocument>
  );
}
