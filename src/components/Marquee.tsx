"use client";

interface MarqueeProps {
  items: string[];
  speed?: number;
  reverse?: boolean;
  variant?: "dark" | "light";
}

export default function Marquee({ items, speed = 30, reverse = false, variant = "dark" }: MarqueeProps) {
  const content = items.join(" — ");
  const isDark = variant === "dark";
  return (
    <div className={`overflow-hidden whitespace-nowrap py-6 ${isDark ? "bg-[#09090b] border-y border-zinc-800/50" : "bg-[#fafafa] border-y border-zinc-200/50"}`}>
      <div className={`inline-flex gap-0 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`} style={{ animationDuration: `${speed}s` }}>
        {[...Array(4)].map((_, i) => (
          <span key={i} className={`text-6xl md:text-8xl font-black uppercase tracking-tighter px-8 ${isDark ? "text-white/[0.04]" : "text-black/[0.04]"}`}>{content} —{" "}</span>
        ))}
      </div>
    </div>
  );
}
