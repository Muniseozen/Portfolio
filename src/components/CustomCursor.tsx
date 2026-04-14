"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const opacity = useMotionValue(0);
  const isHover = useMotionValue(0);
  const isTouchRef = useRef(false);

  // Ring follows with a soft spring delay
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  // Hover transitions
  const ringSize = useTransform(isHover, [0, 1], [32, 52]);
  const ringBorder = useTransform(isHover, [0, 1], [1.5, 2]);
  const ringBg = useTransform(isHover, [0, 1], ["rgba(168,48,95,0)", "rgba(168,48,95,0.08)"]);
  const dotScale = useTransform(isHover, [0, 1], [1, 0]);

  useEffect(() => {
    if ("ontouchstart" in window) {
      isTouchRef.current = true;
      return;
    }

    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      opacity.set(1);
    };

    const handlePointerOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const hit = t.tagName === "A" || t.tagName === "BUTTON" || t.closest("a") || t.closest("button");
      isHover.set(hit ? 1 : 0);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handlePointerOver, { passive: true });
    document.addEventListener("mouseleave", () => opacity.set(0));
    document.addEventListener("mouseenter", () => opacity.set(1));

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handlePointerOver);
    };
  }, [mouseX, mouseY, opacity, isHover]);

  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      {/* Center dot — follows mouse exactly */}
      <motion.div
        style={{ x: mouseX, y: mouseY, opacity, scale: dotScale }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
      >
        <div
          className="w-[5px] h-[5px] rounded-full -translate-x-1/2 -translate-y-1/2"
          style={{ background: "linear-gradient(135deg, #a8305f, #e88560)" }}
        />
      </motion.div>

      {/* Gradient ring — follows with spring delay */}
      <motion.div
        style={{ x: ringX, y: ringY, opacity }}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
      >
        <motion.div
          style={{
            width: ringSize,
            height: ringSize,
            borderWidth: ringBorder,
            backgroundColor: ringBg,
          }}
          className="rounded-full -translate-x-1/2 -translate-y-1/2 border-[#d4567e]/60 border-solid"
        />
      </motion.div>
    </>
  );
}
