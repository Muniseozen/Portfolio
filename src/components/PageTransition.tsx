"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// ブラウザの戻る/進むでの位置復元は自前で行う。
// ブラウザ任せだと描画前に復元され、その後スクロールして見えるため
const scrollPositions = new Map<string, number>();
let popStatePath: string | null = null;
let popStateAt = 0;
if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
  window.addEventListener("popstate", () => {
    popStatePath = window.location.pathname;
    popStateAt = performance.now();
  });
}

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // 開発時は effect が2回実行されるため、印は消さずに「直前（1秒以内）の戻る/進む」で判定する
    const fromPopState = popStatePath === pathname && performance.now() - popStateAt < 1000;

    let frame = 0;
    const stopRestore = () => cancelAnimationFrame(frame);
    if (fromPopState) {
      const target = scrollPositions.get(pathname) ?? 0;
      let tries = 0;
      // 遅延読み込みのセクションが描画されるまではページが短く、途中で止まる。
      // 目標位置に届くまで毎フレーム合わせ直す（最大約1秒。ユーザーが操作したら中断）
      const restore = () => {
        window.scrollTo({ top: target, behavior: "instant" });
        if (Math.abs(window.scrollY - target) > 1 && ++tries < 60) {
          frame = requestAnimationFrame(restore);
        }
      };
      restore();
      window.addEventListener("wheel", stopRestore, { passive: true, once: true });
      window.addEventListener("touchstart", stopRestore, { passive: true, once: true });
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
      stopRestore();
      window.removeEventListener("wheel", stopRestore);
      window.removeEventListener("touchstart", stopRestore);
      window.removeEventListener("scroll", save);
    };
  }, [pathname]);

  return <>{children}</>;
}
