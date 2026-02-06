"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });
  const glowX = useSpring(0, { stiffness: 120, damping: 20 });
  const glowY = useSpring(0, { stiffness: 120, damping: 20 });

  useEffect(() => {
    document.body.style.cursor = "none";
    const moveCursor = (e: MouseEvent) => { cursorX.set(e.clientX); cursorY.set(e.clientY); glowX.set(e.clientX); glowY.set(e.clientY); if (!isVisible) setIsVisible(true); };
    const handlePointerOver = (e: MouseEvent) => { const t = e.target as HTMLElement; setIsPointer(!!(t.tagName === "A" || t.tagName === "BUTTON" || t.closest("a") || t.closest("button") || window.getComputedStyle(t).cursor === "pointer")); };
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handlePointerOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    return () => { document.body.style.cursor = ""; window.removeEventListener("mousemove", moveCursor); window.removeEventListener("mouseover", handlePointerOver); document.removeEventListener("mouseleave", handleMouseLeave); document.removeEventListener("mouseenter", handleMouseEnter); };
  }, [cursorX, cursorY, glowX, glowY, isVisible]);

  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      <motion.div style={{ x: cursorX, y: cursorY }} className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference">
        <motion.div animate={{ width: isPointer ? 48 : 12, height: isPointer ? 48 : 12, opacity: isVisible ? 1 : 0 }} transition={{ duration: 0.2 }} className="rounded-full bg-white -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
      <motion.div style={{ x: glowX, y: glowY }} className="fixed top-0 left-0 z-[9998] pointer-events-none">
        <motion.div animate={{ opacity: isVisible ? 0.12 : 0 }} className="w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: "radial-gradient(circle, rgba(155,44,90,0.5) 0%, rgba(224,120,80,0.25) 40%, transparent 70%)" }} />
      </motion.div>
    </>
  );
}
