function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function NumberColumn({ index }: { index: number }) {
  const numbers = "0123456789";
  const length = 30 + Math.floor(seededRandom(index + 1) * 20);
  const chars = [...Array(length)].map((_, i) => numbers[Math.floor(seededRandom(index * 100 + i) * 10)]);
  const speed = Math.round((4 + seededRandom(index + 50) * 6) * 10) / 10;
  const delayVal = Math.round((-speed * (index % 10) / 10) * 10) / 10;
  const initialOffset = (index % 5) * -20;

  return (
    <div
      className="font-mono text-sm text-black/[0.08] leading-5 animate-number-fall whitespace-nowrap"
      style={{
        animationDuration: `${speed}s`,
        animationDelay: `${delayVal}s`,
        transform: `translateY(${initialOffset}%)`,
      }}
    >
      {chars.map((char, i) => (
        <div
          key={i}
          style={{ opacity: Math.max(0.15, 0.8 - i * 0.025) }}
          className="text-center"
        >
          {char}
        </div>
      ))}
    </div>
  );
}

export default function NumberRain() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      style={{ maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)", WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)" }}
    >
      <div className="absolute inset-0 flex gap-2 justify-around">
        {[...Array(50)].map((_, i) => (
          <NumberColumn key={i} index={i} />
        ))}
      </div>
    </div>
  );
}
