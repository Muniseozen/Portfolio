"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// ブラウザの戻る/進むでの位置復元は自前で行う。
// ブラウザ任せだと描画前に復元され、その後スクロールして見えるため
const scrollPositions = new Map<string, number>();
let popStatePath: string | null = null;
if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
  window.addEventListener("popstate", () => {
    popStatePath = window.location.pathname;
  });
}

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const fromPopState = popStatePath === pathname;
    popStatePath = null;

    let frame = 0;
    if (fromPopState) {
      const restore = () => window.scrollTo({ top: scrollPositions.get(pathname) ?? 0, behavior: "instant" });
      restore();
      // レイアウト確定前だと途中で止まるため、次フレームでもう一度合わせる
      frame = requestAnimationFrame(restore);
    } else if (!window.location.hash) {
      // #projects などのアンカー付き遷移では、Next.js が合わせた位置を上書きしない
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    // 遷移で URL が変わった後のスクロール（次ページ表示時の top 移動など）は記録しない
    const save = () => {
      if (window.location.pathname === pathname) scrollPositions.set(pathname, window.scrollY);
    };
    window.addEventListener("scroll", save, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", save);
    };
  }, [pathname]);

  return <>{children}</>;
}
