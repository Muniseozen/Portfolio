"use client";

interface MarqueeProps {
  items: string[];
  speed?: number;
  reverse?: boolean;
}

export default function Marquee({ items, speed = 30, reverse = false }: MarqueeProps) {
  const content = items.join(" — ");
  return (
    <div aria-hidden className="overflow-hidden whitespace-nowrap">
      <div className={`inline-flex gap-0 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`} style={{ animationDuration: `${speed}s` }}>
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-6xl md:text-7xl font-black uppercase tracking-tighter px-8 text-black/[0.04]">{content} —{" "}</span>
        ))}
      </div>
    </div>
  );
}
