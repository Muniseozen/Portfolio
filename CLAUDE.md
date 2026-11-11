# Portfolio Project Guidelines

## Tech Stack
- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (`@theme inline` で定義)
- Framer Motion (アニメーション)
- フォント: Geist Sans / Geist Mono

## Project Structure
- `src/app/(ja)/` — 日本語ページ、`src/app/en/` — 英語ページ。それぞれが `<html lang>` を持つルートレイアウト
  - ページ本体とメタ情報は `src/app/_shared/` に置き、両言語のページファイルから再エクスポートする
  - 404 は `src/app/global-not-found.tsx`（`next.config.ts` の `experimental.globalNotFound`）
- `src/components/` — UIコンポーネント
- `src/data/` — プロジェクト・キャリアデータ (`projects.ts`, `career.ts`)
- `public/images/projects/` — プロジェクトのスクリーンショット・サムネイル

## Design System / Styling Rules
- ブランドカラー: wine (#a8305f), wine-light (#d4567e), rose (#e88560)
- グラデーションテキスト: `.gradient-text` クラスを使用
- カードスタイル: `.card-dark`（静的カード）/ `.card-clickable`（ホバーエフェクト付き）
- 本文テキストサイズ: `text-sm` に統一済み。独自サイズ (`text-[11px]` 等) を使わないこと
- 統一ルール（全ページ共通）
  - 幅: 本文・ナビ・フッターとも `px-6` の内側に `max-w-5xl mx-auto`。トップと Career のセクションは `py-8`、見出しブロックは `mb-8`
  - 見出し: トップ / Career のセクション見出しは `section-title text-5xl md:text-6xl font-black` + `gradient-text`
  - 文字サイズは `text-xs` 以上（Hero の装飾モック内は例外）
  - 本文（説明文・箇条書き・カードの文章）は `zinc-600`、サブタイトル・タグ・ラベル・キャプションなど補助の文字は `zinc-500`。読ませる文字は `zinc-500` 以上の濃さ、小さいアクセント文字は wine `#a8305f`（`zinc-300/400`・wine-light・rose はコントラスト不足のため文字に使わない。装飾・アイコンは可）
  - タグ: `rounded-full font-mono`。小 `px-2 py-0.5 text-xs`（カード内。My Works・Skills・Career）／大 `px-3 py-1 text-sm`（詳細ページのタイトル下だけ）
  - 角丸: グリッド・リストで繰り返すカードは `rounded-xl`、単独のパネルは `rounded-2xl`
  - クリックできる画像は `<button type="button">` にする。閉じるボタンなどアイコンだけのボタンには `aria-label`。装飾（NumberRain・Marquee）は `aria-hidden`
  - 「視差効果を減らす」設定には `MotionConfig reducedMotion="user"` と globals.css の `prefers-reduced-motion` で対応済み。新しい無限ループアニメーションを作ったら globals.css の一覧に追加する
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
- 英語版の文章は各データの `en` フィールドに書く（`localize()` で英語版のときだけ上書き）。日本語を追加・変更したら `en` も更新する

## 文体ルール
- サイト内のテキストは文末の形を統一すること。「〜ます。」と「〜る。」を混在させない
- 現在の方針: です・ます調（「〜です。」「〜します。」「〜しました。」）で統一
  - キャッチコピー・見出し・箇条書きの体言止め（「〜まで。」「〜の設計」など）はそのままでよい

## Git
- コミットメッセージは日本語で書く
- mainブランチで直接作業

## 作業の進め方
参考: https://github.com/multica-ai/andrej-karpathy-skills （Karpathy の LLM コーディングの失敗パターンへの指摘をもとにしたガイドライン）

### 1. 書く前に考える
- 前提は明示する。不確かなら推測で進めず質問する
- 解釈が複数ありうる場合は黙って選ばず、選択肢を提示する
- よりシンプルな方法があれば指摘し、必要なら反対意見を述べる

### 2. シンプルさ優先
- 依頼されていない機能・設定項目・汎用化は加えない
- 一度しか使わないコードを抽象化しない。起こりえないケースのエラー処理を書かない
- 200行で書いたものが50行で済むなら書き直す

### 3. 変更は最小限に
- 依頼と無関係なコード・コメント・フォーマットを「改善」しない。壊れていないものをリファクタしない
- 既存のスタイルに合わせる
- 無関係な不要コードに気づいたら、削除せず報告にとどめる（自分の変更で不要になった import 等は削除する）
- 判断基準: 変更したすべての行が依頼内容に直接結びついていること

### 4. ゴールを決めて検証する
- 作業前に完了条件を決め、複数ステップの作業は「手順 → 確認方法」の形で簡潔に計画を示す
- このプロジェクトにテストはないため、`npm run build` と `npm run lint` の通過、および実際の画面表示で確認する
