# Portfolio Project Guidelines

## Tech Stack
- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (`@theme inline` で定義)
- Framer Motion (アニメーション)
- フォント: Geist Sans / Geist Mono

## Project Structure
- `src/app/` — ページ (App Router)
- `src/components/` — UIコンポーネント
- `src/data/` — プロジェクト・キャリアデータ (`projects.ts`, `career.ts`)
- `public/images/projects/` — プロジェクトのスクリーンショット・サムネイル

## Design System / Styling Rules
- ブランドカラー: wine (#a8305f), wine-light (#d4567e), rose (#e88560)
- グラデーションテキスト: `.gradient-text` クラスを使用
- カードスタイル: `.card-dark`（静的カード）/ `.card-clickable`（ホバーエフェクト付き）
- 本文テキストサイズ: `text-sm` に統一済み。独自サイズ (`text-[11px]` 等) を使わないこと
- Tailwind のクラスは必ず静的に記述すること。`grid-cols-${n}` のような動的クラスは本番で消えるため禁止。マッピングオブジェクトを使う

## AI生成っぽいデザインを避けるルール
参考: https://zenn.dev/tmasuyama1114/articles/anthropic_claude_skills_design

AIが生成するUIは「統計的収束 (Distributional Convergence)」により似通ったデザインになりがち。以下を厳守すること。

### Typography
- Inter, Roboto, Open Sans, Lato, Arial は使わない。このプロジェクトでは Geist Sans / Geist Mono を使用
- フォントウェイトに極端なコントラストをつける（thin 100/200 と bold 800/900 の組み合わせ）
- サイズジャンプは大胆に（見出し・本文・キャプションで明確な視覚的階層を作る）

### Color
- 紫グラデーション等のありがちな配色を避ける。wine/rose のブランドカラーを一貫して使う
- パレットを均等に分散させず、支配的なブランドカラー + 鋭いアクセントでメリハリをつける

### Motion
- Framer Motion で意味のあるアニメーションを付与する（現在の方針を維持）
- ページロード時の段階的表示、ホバーエフェクト等は積極的に使う
- ただし「ハイインパクトな瞬間」に絞り、過剰にしない

### Background
- ソリッドカラー（白・ライトグレー）だけの背景を避ける
- 現在の `body::before` メッシュグラデーション背景を維持し、深度を持たせる

## 保持するコンポーネント
- `src/components/Contact.tsx` — フリーランス用のコンタクトフォーム。現在は未使用だが、将来使うため削除しないこと

## Data
- プロジェクトデータは `src/data/projects.ts` で一元管理
- `category: "work"` = 実務、`category: "personal"` = 個人プロジェクト
- `previewType: "mobile"` でスマホフレーム表示、未指定でブラウザChromeフレーム表示

## Git
- コミットメッセージは日本語で書く
- mainブランチで直接作業
