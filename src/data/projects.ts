export interface Project {
  id: number;
  slug: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  role: string;
  tech: string[];
  gradient: string;
  emoji: string;
  thumbnail?: string;
  duration: string;
  team: string;
  status: string;
  category: "work" | "personal";
  roleBreakdown: { title: string; tasks: string[] }[];
  challenges: { problem: string; solution: string }[];
  screenshots: string[];
}

export const projects: Project[] = [
  // ── Selected Work ──
  {
    id: 1,
    slug: "ynp-homepage",
    num: "01",
    title: "YNPホームページ\nリニューアル & ブランディング",
    subtitle: "Web / UI・UX Design / Frontend",
    description:
      "自社コーポレートサイトのリニューアルとブランディングを担当。デザインからコーディングまで一貫して対応。",
    longDescription:
      "自社コーポレートサイト（y-n-p.co.jp）のリニューアルプロジェクト。ブランドイメージの刷新からFigmaでのデザイン、HTML/CSS/JavaScriptでの実装、WordPressでの構築まで一貫して担当しました。",
    role: "UI・UX Designer / Frontend Dev",
    tech: ["UI/UX Design", "Figma", "HTML", "CSS", "JavaScript", "WordPress"],
    gradient: "from-[#9b2c5a] via-[#a83660] to-[#c2456e]",
    emoji: "&#x1F3A8;",
    duration: "",
    team: "",
    status: "Completed",
    category: "work",
    roleBreakdown: [
      { title: "Design", tasks: ["Figmaでのワイヤーフレーム・UIデザイン", "レスポンシブデザインの設計"] },
      { title: "Frontend", tasks: ["HTML/CSS/JSでのコーディング", "WordPressテーマの構築・カスタマイズ"] },
    ],
    challenges: [],
    screenshots: [],
  },
  {
    id: 2,
    slug: "naitei-lp",
    num: "02",
    title: "内定者向けLP制作",
    subtitle: "LP / UI・UX Design",
    description:
      "内定者向けのランディングページを企画・デザイン。ターゲットに響く構成とビジュアルで情報を届けるLPに仕上げました。",
    longDescription:
      "内定者向けの情報発信を目的としたランディングページをCanvaで制作しました。ターゲットである内定者の視点に立ち、必要な情報を直感的に伝えるレイアウトとビジュアルデザインを設計しています。",
    role: "UI・UX Designer",
    tech: ["UI/UX Design", "Canva"],
    gradient: "from-[#a83660] via-[#b84468] to-[#c2456e]",
    emoji: "&#x1F4C4;",
    duration: "",
    team: "",
    status: "Completed",
    category: "work",
    roleBreakdown: [
      { title: "Design", tasks: ["LP構成・ワイヤーフレーム設計", "Canvaでのビジュアルデザイン・制作"] },
    ],
    challenges: [],
    screenshots: [],
  },
  {
    id: 3,
    slug: "hr-matching-mobile",
    num: "03",
    title: "人材マッチングアプリ",
    subtitle: "iOS / UI・UX Design / PM",
    description:
      "求職者と企業をつなぐiOSマッチングアプリ。UI/UXデザインからSwiftでの実装、AWS基盤構築、PMまで一気通貫で担当しリリース。",
    longDescription:
      "求職者と企業をスムーズにマッチングさせるiOSアプリを、企画からリリースまで担当しました。Figmaでの UI/UXデザイン、SwiftUIでのフロントエンド実装、AWSを活用したサーバーレスバックエンドの構築まで幅広くカバー。PMとしてチームをリードしながら、ユーザビリティテストを繰り返して使いやすさを追求しました。",
    role: "PM / UI・UX Designer / iOS Dev",
    tech: ["UI/UX Design", "Figma", "Swift", "SwiftUI", "AWS"],
    gradient: "from-[#c2456e] via-[#d45e6a] to-[#e07850]",
    emoji: "&#x1F91D;",
    duration: "",
    team: "5 members",
    status: "Released",
    category: "work",
    roleBreakdown: [
      { title: "PM", tasks: ["プロダクトロードマップの策定", "スプリント計画とチームマネジメント"] },
      { title: "UI/UX Design", tasks: ["Figmaでのユーザーフロー・UI設計", "ユーザビリティテストの実施と改善"] },
      { title: "iOS Development", tasks: ["SwiftUIでのフロントエンド実装", "AWSバックエンドとの連携"] },
    ],
    challenges: [],
    screenshots: [],
  },
  {
    id: 4,
    slug: "hr-matching-web",
    num: "04",
    title: "人材マッチング\nWeb ダッシュボード",
    subtitle: "Web App / UI・UX Design / PM",
    description:
      "人材マッチングプラットフォームの企業向けWeb管理画面。求人管理・応募者管理などのダッシュボード機能を設計・開発。",
    longDescription:
      "モバイルアプリと連携する企業向けのWeb管理画面を設計・開発しました。求人の作成・管理、応募者の一覧・ステータス管理、マッチングデータのダッシュボードなど、企業側に必要な機能を一通り実装しています。",
    role: "PM / UI・UX Designer / Frontend Dev",
    tech: ["UI/UX Design", "Figma", "React", "TypeScript", "Vite", "Tailwind CSS"],
    gradient: "from-[#d45e6a] via-[#e07850] to-[#e8956a]",
    emoji: "&#x1F4CA;",
    duration: "",
    team: "",
    status: "In Progress",
    category: "work",
    roleBreakdown: [
      { title: "PM", tasks: ["要件定義・機能設計", "チーム技術選定・アーキテクチャ設計"] },
      { title: "UI/UX Design", tasks: ["ダッシュボードUI設計", "管理画面のユーザーフロー設計"] },
      { title: "Frontend", tasks: ["React + TypeScriptでの実装", "Vite + Tailwind CSSでの基盤構築"] },
    ],
    challenges: [],
    screenshots: [],
  },
  {
    id: 5,
    slug: "mycloset",
    num: "05",
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
    thumbnail: "/images/projects/mycloset.png",
    duration: "",
    team: "",
    status: "Completed",
    category: "work",
    roleBreakdown: [
      { title: "PM", tasks: ["プロダクト企画とビジネス要件の整理", "リリース計画と品質管理"] },
      { title: "UI/UX Design", tasks: ["カスタマイズ可能なUIシステム設計", "出品〜購入〜決済のユーザーフロー設計"] },
      { title: "iOS Development", tasks: ["SwiftUIでのアプリ実装", "AWSバックエンドとの連携"] },
    ],
    challenges: [],
    screenshots: [],
  },
  // ── My Projects ──
  {
    id: 6,
    slug: "mochibo",
    num: "01",
    title: "Mochibo",
    subtitle: "iOS / UI・UX Design",
    description:
      "個人開発のiOSアプリ。UI/UXデザインからSwift実装、Firebaseバックエンドまで一人で構築。",
    longDescription:
      "個人プロジェクトとして企画・デザイン・開発を一人で手がけたiOSアプリです。FigmaでUI/UXデザインを行い、SwiftUIで実装。バックエンドはFirebaseを活用しています。",
    role: "UI・UX Designer / iOS Dev",
    tech: ["UI/UX Design", "Figma", "Swift", "SwiftUI", "Firebase"],
    gradient: "from-[#9b2c5a] via-[#b84468] to-[#d4567e]",
    emoji: "&#x1F4F1;",
    duration: "",
    team: "1 member",
    status: "Completed",
    category: "personal",
    roleBreakdown: [
      { title: "UI/UX Design", tasks: ["Figmaでのアプリ全体のUI設計"] },
      { title: "iOS Development", tasks: ["SwiftUIでのフロントエンド実装", "Firebaseバックエンドの構築"] },
    ],
    challenges: [],
    screenshots: [],
  },
  {
    id: 7,
    slug: "earthquect",
    num: "02",
    title: "Earthquect",
    subtitle: "Web App / UI・UX Design",
    description:
      "トルコ語の地震情報Webアプリ。Next.jsで構築した個人プロジェクト。",
    longDescription:
      "トルコ語で地震情報を提供するWebアプリケーションを個人プロジェクトとしてNext.jsで開発しました。",
    role: "UI・UX Designer / Full-stack Dev",
    tech: ["UI/UX Design", "Next.js", "TypeScript", "React"],
    gradient: "from-[#c2456e] via-[#d45e6a] to-[#e07850]",
    emoji: "&#x1F30D;",
    duration: "",
    team: "1 member",
    status: "Completed",
    category: "personal",
    roleBreakdown: [
      { title: "Design & Development", tasks: ["UI設計", "Next.jsでのフルスタック実装"] },
    ],
    challenges: [],
    screenshots: [],
  },
];

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
