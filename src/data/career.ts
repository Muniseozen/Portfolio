export interface ConcurrentProject {
  title: string;
  description: string | string[];
  tech: string[];
}

export interface CareerProject {
  period: string;
  startDate: string;
  endDate: string;
  title: string;
  role: string;
  description: string | string[];
  tech: string[];
  type: "compact" | "hero" | "current";
  concurrent?: ConcurrentProject;
}

export interface Certification {
  name: string;
  category: "language" | "cloud" | "development";
  detail?: string;
}

export const careerProjects: CareerProject[] = [
  {
    period: "2020 — 2022",
    startDate: "2020",
    endDate: "2022",
    title: "テレビ番組制作",
    role: "アシスタント ディレクター",
    description: [
      "バラエティ・情報系など複数ジャンルの番組制作",
      "撮影・動画編集・制作進行を担当",
      "先方とのやり取り・スケジュール管理",
    ],
    tech: ["番組制作", "撮影", "動画編集", "ディレクション", "スケジュール管理"],
    type: "compact",
  },
  {
    period: "2023.1 — 2023.3",
    startDate: "2023.1",
    endDate: "2023.3",
    title: "請求管理システム マニュアル作成",
    role: "マニュアル作成 / 研修生",
    description: [
      "大手企業向け請求管理システムのマニュアル設計・作成",
      "Java / Python / AWS 技術研修修了",
    ],
    tech: ["Java", "Python", "AWS"],
    type: "compact",
    concurrent: {
      title: "プログラミングスクール",
      description: "業務と並行して自己投資で通学。プログラミング基礎を習得。",
      tech: ["Python"],
    },
  },
  {
    period: "2023.4 — 2023.6",
    startDate: "2023.4",
    endDate: "2023.6",
    title: "請求管理 / POSシステム テスト",
    role: "QAエンジニア",
    description: [
      "請求管理システムのテスト設計・実行",
      "コンビニPOSシステムの結合テスト",
    ],
    tech: ["テスト設計", "QA", "品質保証"],
    type: "compact",
  },
  {
    period: "2023.10 — 2025.2",
    startDate: "2023.10",
    endDate: "2025.2",
    title: "My Closet（中古販売プラットフォーム）",
    role: "PM / UI&UXデザイナー / iOSエンジニア",
    description: [
      "企画〜AppStoreリリースまで一気通貫でリード",
      "SwiftUI実装・AWSサーバーレス基盤の設計・構築",
      "FigmaによるUI/UXデザイン・プロトタイプ作成",
    ],
    tech: ["Swift", "SwiftUI", "AWS Lambda", "MySQL", "Figma"],
    type: "hero",
    concurrent: {
      title: "侍エンジニア アプリ開発コース",
      description: "業務と並行して自己投資で通学。iOS開発・AWSバックエンド構築を習得。",
      tech: ["Swift", "Swift Data", "AWS Lambda", "API Gateway", "MySQL", "S3"],
    },
  },
  {
    period: "2024.6 — 2025.6",
    startDate: "2024.6",
    endDate: "2025.6",
    title: "Uply（人材マッチングアプリ）",
    role: "PM / UI&UXデザイナー / iOSエンジニア",
    description: [
      "企画〜開発をリード",
      "SwiftUI実装・AWS基盤構築",
      "FigmaによるUI/UXデザイン",
    ],
    tech: ["Swift", "SwiftUI", "AWS Lambda", "MySQL", "Figma"],
    type: "hero",
    concurrent: {
      title: "HP・LP制作（4件）",
      description: [
        "自社HP制作",
        "内定者向けLP制作",
        "オランダLP制作",
        "クライアントLP制作",
      ],
      tech: ["HTML/CSS", "JavaScript", "Figma"],
    },
  },
  {
    period: "2026.1 — 2026.1",
    startDate: "2026.1",
    endDate: "2026.1",
    title: "Web管理システム開発",
    role: "PM / UI&UXデザイナー / フロントエンド",
    description: [
      "React + TypeScriptによるWeb管理システムの設計・実装リード",
      "Vite + React Router v7によるモダン基盤構築",
      "技術選定・アーキテクチャ設計・チームマネジメント",
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Figma"],
    type: "compact",
  },
  {
    period: "2026.2 — 現在",
    startDate: "2026.2",
    endDate: "現在",
    title: "大手化粧品企業 ECサイト口コミ機能追加・LP/バナーデザイン",
    role: "フロントエンド / デザイナー",
    description: [
      "大手化粧品企業ECサイトの口コミ機能追加",
      "LPデザイン",
      "バナーデザイン",
    ],
    tech: ["HTML", "CSS", "JavaScript", "UI/UX Design", "VSCode", "Bitbucket"],
    type: "current",
  },
];

export const certifications: Certification[] = [
  { name: "BJT J1", category: "language", detail: "ビジネス日本語最上級" },
  { name: "AWS Cloud Practitioner", category: "cloud", detail: "クラウド基礎" },
  { name: "Python 3 エンジニア認定基礎", category: "development", detail: "プログラミング基礎" },
];
