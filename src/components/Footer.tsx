import Image from "next/image";

const socials = [
  { name: "GitHub", href: "https://github.com/Muniseozen", icon: "/images/tools/github.svg" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/munise-haruyama-818553256/", icon: "/images/tools/linkedin.svg" },
  { name: "Qiita", href: "https://qiita.com/Munise", icon: "/images/tools/qiita.svg" },
];

export default function Footer() {
  return (
    <footer className="py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-40 hover:opacity-70 transition-opacity"
              aria-label={s.name}
            >
              <Image src={s.icon} alt={s.name} width={22} height={22} />
            </a>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <p className="text-sm text-zinc-400">&copy; {new Date().getFullYear()} Munise Haruyama. All rights reserved.</p>
          <p className="text-sm text-zinc-400">Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
