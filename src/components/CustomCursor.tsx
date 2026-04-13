"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  useEffect(() => {
    if ("ontouchstart" in window) return;

    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handlePointerOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setIsPointer(
        !!(
          t.tagName === "A" ||
          t.tagName === "BUTTON" ||
          t.closest("a") ||
          t.closest("button") ||
          window.getComputedStyle(t).cursor === "pointer"
        )
      );
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handlePointerOver, { passive: true });
    document.addEventListener("mouseleave", () => setIsVisible(false));
    document.addEventListener("mouseenter", () => setIsVisible(true));

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handlePointerOver);
    };
  }, [cursorX, cursorY]);

  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <motion.div
      style={{ x: cursorX, y: cursorY }}
      className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
    >
      <motion.div
        animate={{
          width: isPointer ? 48 : 12,
          height: isPointer ? 48 : 12,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
        className="rounded-full bg-zinc-900 -translate-x-1/2 -translate-y-1/2"
      />
    </motion.div>
  );
}
