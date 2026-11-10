"use client";

import { useEffect, useRef } from "react";

// PDF.js で各ページを canvas に描画する。
// ブラウザ標準の PDF ビューアはダウンロードボタンが出て、背景色も変えられないため。
export default function PdfViewer({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    let cancelled = false;
    let destroy: (() => void) | undefined;

    (async () => {
      const pdfjs = await import("pdfjs-dist");
      pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();
      const pdf = await pdfjs.getDocument(src).promise;
      destroy = () => pdf.destroy();
      if (cancelled) return destroy();

      for (let n = 1; n <= pdf.numPages; n++) {
        const page = await pdf.getPage(n);
        if (cancelled) return;
        const base = page.getViewport({ scale: 1 });
        const viewport = page.getViewport({ scale: (container.clientWidth / base.width) * window.devicePixelRatio });
        const canvas = document.createElement("canvas");
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        canvas.className = "block w-full h-auto rounded-lg shadow-sm";
        canvas.oncontextmenu = (e) => e.preventDefault();
        container.appendChild(canvas);
        await page.render({ canvasContext: canvas.getContext("2d")!, viewport }).promise;
      }
    })();

    return () => {
      cancelled = true;
      destroy?.();
      container.replaceChildren();
    };
  }, [src]);

  return <div ref={ref} role="document" aria-label={title} className="flex flex-col gap-4" />;
}
