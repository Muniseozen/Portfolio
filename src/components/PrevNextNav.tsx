import Link from "next/link";

// 詳細ページ下部の「Previous / Next」。プロジェクトとグラフィックの詳細ページで共通
export default function PrevNextNav({ prevHref, nextHref }: { prevHref: string | null; nextHref: string | null }) {
  return (
    <div className="flex justify-between items-center">
      {prevHref ? (
        <Link href={prevHref} className="flex flex-col items-center gap-3 group">
          <div className="w-14 h-14 rounded-full border-2 border-zinc-300 flex items-center justify-center transition-colors group-hover:border-zinc-500">
            <svg className="w-5 h-5 text-zinc-500 transition-colors group-hover:text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </div>
          <span className="text-sm text-zinc-500 tracking-widest uppercase">Previous</span>
        </Link>
      ) : (
        <div />
      )}
      {nextHref ? (
        <Link href={nextHref} className="flex flex-col items-center gap-3 group">
          <div className="w-14 h-14 rounded-full border-2 border-zinc-300 flex items-center justify-center transition-colors group-hover:border-zinc-500">
            <svg className="w-5 h-5 text-zinc-500 transition-colors group-hover:text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </div>
          <span className="text-sm text-zinc-500 tracking-widest uppercase">Next</span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
