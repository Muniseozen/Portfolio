export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  role: string;
  tech: string[];
  gradient: string;
  emoji: string;
  thumbnail?: string;
  url?: string;
  preview?: string;
  previewType?: "web" | "mobile";
  designProcess?: string;
  designSystem?: string;
  prototype?: string;
  duration: string;
  team: string;
  status: string;
  category: "work" | "personal";
  type: "web" | "app";
  roleBreakdown: { title: string; tasks: string[] }[];
  challenges: { problem: string; solution: string }[];
}

export const projects: Project[] = [
  // ── Selected Work ──
  {
    id: 1,
    slug: "ynp-homepage",
    title: "株式会社YNP ホームページ",
    subtitle: "Web / UI・UX Design / Frontend",
    description:
      "自社コーポレートサイトのリニューアルとブランディング。サイト構成・コピーライティング・デザインを担当。",
    longDescription:
      "自社コーポレートサイト（y-n-p.co.jp）のリニューアルプロジェクト。サイト全体の構成設計と文章作成から、ブランドイメージの刷新、FigmaでのUI/UXデザインまでを担当。フロントエンド実装のコードレビューとWordPress構築のディレクションも行いました。",
    role: "Planner / Copywriter / UI・UX Designer",
    tech: ["UI/UX Design", "Figma", "HTML", "CSS", "JavaScript", "WordPress"],
    gradient: "from-[#9b2c5a] via-[#a83660] to-[#c2456e]",
    emoji: "&#x1F3A8;",
    thumbnail: "/images/projects/ynp-thumbnail.webp",
    url: "https://y-n-p.co.jp/",
    preview: "/images/projects/ynp-preview.webp",
    designProcess: "/images/projects/ynp-figma-grids.webp",
    duration: "",
    team: "",
    status: "Completed",
    category: "work",
    type: "web",
    roleBreakdown: [
      { title: "Design", tasks: ["Figmaでのワイヤーフレーム・UIデザイン", "レスポンシブデザインの設計"] },
      { title: "Frontend", tasks: ["HTML/CSS/JSのコードレビュー", "WordPressテーマのディレクション"] },
    ],
    challenges: [
      { problem: "ページ数・情報量が少なく、企業の魅力が十分に伝わっていなかった", solution: "事業内容・実績・採用情報などのページを新設し、訪問者が知りたい情報にアクセスしやすい構成に再設計" },
      { problem: "キャッチコピーが企業の目的やビジョンと合っていなかった", solution: "ヒアリングを重ね、企業の強みとターゲットに刺さるメッセージを策定。ファーストビューで明確に伝わるコピーに刷新" },
      { problem: "余白が多く、コンテンツが少ない印象で信頼感に欠けていた", solution: "適切な余白バランスとビジュアル要素を配置し、プロフェッショナルで信頼感のあるデザインに改善" },
    ],
  },
  {
    id: 2,
    slug: "naitei-lp",
    title: "内定者向けLP制作",
    subtitle: "LP / UI・UX Design / Planning",
    description:
      "内定者向けLPの企画・構成・コピーライティング・デザインを全て担当。ターゲットに響く情報設計で仕上げました。",
    longDescription:
      "内定者向けの情報発信を目的としたランディングページを企画からデザインまで一人で担当しました。LPの構成設計、キャッチコピー・文章の作成、ビジュアルデザインまで全て自分で考え、Canvaで制作。内定者が知りたい情報を整理し、直感的に伝わるレイアウトに仕上げています。",
    role: "Planner / Copywriter / UI・UX Designer",
    tech: ["UI/UX Design", "Canva"],
    gradient: "from-[#a83660] via-[#b84468] to-[#c2456e]",
    emoji: "&#x1F4C4;",
    thumbnail: "/images/projects/naitei-lp-thumbnail.webp",
    url: "https://ynp-naitei.my.canva.site/lp",
    preview: "/images/projects/naitei-lp-preview.webp",
    duration: "",
    team: "",
    status: "Completed",
    category: "work",
    type: "web",
    roleBreakdown: [
      { title: "企画・構成", tasks: ["LPの全体構成・情報設計", "キャッチコピー・文章の作成"] },
      { title: "Design", tasks: ["Canvaでのビジュアルデザイン・制作", "ターゲットに合わせたトーン設計"] },
    ],
    challenges: [],
  },
  {
    id: 3,
    slug: "netherlands-lp",
    title: "オランダIT研修LP制作",
    subtitle: "LP / UI・UX Design / Planning",
    description:
      "オランダのIT企業で研修を行うブートキャンプ型プログラムの集客LP。企画・構成・コピーライティング・デザインを担当。",
    longDescription:
      "オランダのIT企業での実践型研修プログラムを訴求するランディングページを、企画・構成・デザインまで一貫して担当しました。ターゲットが「海外でキャリアを広げたいエンジニア」であることから、日本のLPによくある明るいトーンではなく、ダークネイビーを基調にした海外風のビジュアルに振り切りました。現地オフィスや街並みの写真を大きく配置し、「ここで働く自分」をイメージできる世界観を意識しています。プログラムの特長・スケジュール・料金・研修生の声・FAQなど情報量が多いLPですが、セクションごとにメリハリをつけたレイアウトで、スクロールしても読み疲れしない構成に仕上げました。",
    role: "Planner / Copywriter / UI・UX Designer",
    tech: ["UI/UX Design", "Canva"],
    gradient: "from-[#1a1f3d] via-[#2a3060] to-[#3a4080]",
    emoji: "&#x1F1F3;&#x1F1F1;",
    thumbnail: "/images/projects/netherlands-lp-thumbnail.webp",
    preview: "/images/projects/netherlands-lp-preview.webp",
    duration: "",
    team: "",
    status: "Completed",
    category: "work",
    type: "web",
    roleBreakdown: [
      { title: "企画・構成", tasks: ["LP全体の構成・情報設計", "キャッチコピー・セクション文章の作成", "研修内容・料金・フローの情報整理"] },
      { title: "Design", tasks: ["Canvaでのビジュアルデザイン・制作", "ダークネイビー基調のトーン設計", "写真・マップを活用したレイアウト設計"] },
    ],
    challenges: [],
  },
  {
    id: 4,
    slug: "hr-matching-platform",
    title: "人材マッチングプラットフォーム",
    subtitle: "iOS & Web / UI・UX Design / PM",
    description:
      "求職者と企業をつなぐマッチングプラットフォーム。iOSアプリ + 企業向けWebダッシュボードを設計・開発。",
    longDescription:
      "求職者と企業をスムーズにマッチングさせるプラットフォームを、モバイルアプリとWeb管理画面の両面から設計・開発しました。iOSアプリは企画からリリースまで担当し、FigmaでのUI/UXデザイン、SwiftUIでのフロントエンド実装、AWSバックエンドの構築まで幅広くカバー。企業向けWebダッシュボードではReact + TypeScriptでの実装をリードし、求人管理・応募者管理・マッチングデータの可視化を実現しています。",
    role: "PM / UI・UX Designer / iOS Dev / Frontend Dev",
    tech: ["UI/UX Design", "Figma", "Swift", "SwiftUI", "AWS", "React", "TypeScript", "Tailwind CSS"],
    gradient: "from-[#c2456e] via-[#d45e6a] to-[#e07850]",
    emoji: "&#x1F91D;",
    thumbnail: "/images/projects/uply-thumbnail.webp",
    preview: "/images/projects/uply-dashboard-and-sp-screens.webp",
    designProcess: "/images/projects/uply-figma.webp",
    designSystem: "/images/projects/uply-components.webp",
    prototype: "/images/projects/uply-prototype.webp",
    duration: "",
    team: "5 members",
    status: "Released",
    category: "work",
    type: "app",
    roleBreakdown: [
      { title: "PM", tasks: ["プロダクトロードマップの策定", "スプリント計画とチームマネジメント"] },
      { title: "UI/UX Design", tasks: ["Figmaでのユーザーフロー・UI設計", "ユーザビリティテストの実施と改善"] },
      { title: "Mobile App (iOS)", tasks: ["SwiftUIでのフロントエンド実装", "AWSバックエンドとの連携"] },
      { title: "+ Web Dashboard", tasks: ["React + TypeScriptでの管理画面実装", "求人管理・応募者管理・ダッシュボード機能"] },
    ],
    challenges: [],
  },
  {
    id: 5,
    slug: "mycloset",
    title: "My Closet",
    subtitle: "iOS / UI・UX Design / PM",
    description:
      "インフルエンサー向けフリマアプリ。出品・購入・決済までアプリ内で完結。SNSシェア・クーポン機能を搭載。",
    longDescription:
      "インフルエンサーが自分のブランディングを保ちながら中古品を販売できるiOSアプリ。企画からUI/UXデザイン、Swift実装、AWSバックエンド構築、PMまで一気通貫で担当。",
    role: "PM / UI・UX Designer / iOS Dev",
    tech: ["UI/UX Design", "Figma", "Swift", "SwiftUI", "AWS"],
    gradient: "from-[#e07850] via-[#e8956a] to-[#f0b080]",
    emoji: "&#x1F45C;",
    thumbnail: "/images/projects/mycloset-thumbnail.webp",
    designProcess: "/images/projects/mycloset-screens.webp",
    duration: "",
    team: "",
    status: "Completed",
    category: "work",
    type: "app",
    roleBreakdown: [
      { title: "PM", tasks: ["プロダクト企画とビジネス要件の整理", "リリース計画と品質管理"] },
      { title: "UI/UX Design", tasks: ["カスタマイズ可能なUIシステム設計", "出品〜購入〜決済のユーザーフロー設計"] },
      { title: "iOS Development", tasks: ["SwiftUIでのアプリ実装", "AWSバックエンドとの連携"] },
    ],
    challenges: [],
  },
];

export const projectTypeLabels = { web: "Web", app: "App" } as const;

// トップのカードと同じく、分類（web / app）内での並び順を番号にする
export function getProjectNumber(project: Project): string {
  const index = projects.filter((p) => p.type === project.type).indexOf(project);
  return String(index + 1).padStart(2, "0");
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): { prev: Project | null; next: Project | null } {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}

// ── Graphic（デザイン制作物） ──

export type WorkCategory = "recruit" | "app" | "campaign";

export type DesignWork = {
  src: string;
  alt: string;
  width: number;
  height: number;
  category: WorkCategory;
};

export const works: DesignWork[] = [
  { src: "/images/projects/uply-ad-1.webp", alt: "Uply 広告 1", width: 1080, height: 1350, category: "app" },
  { src: "/images/projects/uply-ad-2.webp", alt: "Uply 広告 2", width: 1080, height: 1350, category: "app" },
  { src: "/images/design/banner-uply-1.webp", alt: "Uply バナー 1", width: 750, height: 700, category: "campaign" },
  { src: "/images/design/banner-uply-2.webp", alt: "Uply LINEバナー", width: 750, height: 700, category: "campaign" },
  { src: "/images/design/banner-uply-3.webp", alt: "Uply LINEバナー 横", width: 1200, height: 400, category: "campaign" },
  { src: "/images/design/sp-1.webp", alt: "Design Work 1", width: 1880, height: 1576, category: "recruit" },
  { src: "/images/design/sp-11.webp", alt: "Design Work 11", width: 1880, height: 1576, category: "recruit" },
  { src: "/images/design/sp-8.webp", alt: "Design Work 8", width: 1880, height: 1576, category: "recruit" },
  { src: "/images/design/sp-12.webp", alt: "Design Work 12", width: 1880, height: 1576, category: "recruit" },
  { src: "/images/design/sp-10.webp", alt: "Design Work 10", width: 1880, height: 1576, category: "recruit" },
  { src: "/images/design/sp-9.webp", alt: "Design Work 9", width: 1880, height: 1576, category: "recruit" },
  { src: "/images/design/sp-6.webp", alt: "Design Work 6", width: 1880, height: 1576, category: "recruit" },
  { src: "/images/design/sp-14.webp", alt: "Design Work 14", width: 1880, height: 1576, category: "recruit" },
  { src: "/images/design/sp-7.webp", alt: "Design Work 7", width: 1880, height: 1576, category: "recruit" },
  { src: "/images/design/sp-13.webp", alt: "Design Work 13", width: 1880, height: 1576, category: "recruit" },
  { src: "/images/design/sp-5.webp", alt: "Design Work 5", width: 1880, height: 1576, category: "recruit" },
  { src: "/images/design/sp-4.webp", alt: "Design Work 4", width: 1880, height: 1576, category: "recruit" },
  { src: "/images/design/sp-3.webp", alt: "Design Work 3", width: 1880, height: 1576, category: "recruit" },
  { src: "/images/design/sp-2.webp", alt: "Design Work 2", width: 1880, height: 1576, category: "recruit" },
  { src: "/images/design/sp-15.webp", alt: "Design Work 15", width: 1880, height: 1576, category: "recruit" },
];

export type GraphicCategory = {
  key: WorkCategory;
  cover: string; // トップページのカードに使う代表画像
  description: string; // 概要
  role: string;
  tools: string[];
  points: string[]; // 担当内容・工夫した点
};

// 並び順 = トップのカード順・詳細ページの番号順
export const graphicCategories: GraphicCategory[] = [
  { key: "recruit", cover: "/images/design/sp-9.webp", description: "", role: "", tools: [], points: [] },
  { key: "app", cover: "/images/projects/uply-ad-2.webp", description: "", role: "", tools: [], points: [] },
  { key: "campaign", cover: "/images/design/banner-uply-2.webp", description: "", role: "", tools: [], points: [] },
];

function shuffleWithSeed(arr: DesignWork[], seed: number) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    seed = (seed * 16807 + 0) % 2147483647;
    const j = seed % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// 日付ベースのシードで1日ごとに並び順が変わる
const dailySeed = Math.floor(Date.now() / 86400000);
export const shuffledWorks = shuffleWithSeed(works, dailySeed);
