import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl md:text-9xl font-black tracking-tighter mb-4">
          <span className="gradient-text">404</span>
        </h1>
        <p className="text-zinc-500 text-lg mb-8">
          Project not found.
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
  );
}
