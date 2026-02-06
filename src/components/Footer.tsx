export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-[#09090b] border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500">&copy; {new Date().getFullYear()} Munise Ozen. All rights reserved.</p>
        <p className="text-xs text-zinc-600">Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
