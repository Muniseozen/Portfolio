export interface ConcurrentProject {
  title: string;
  role: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export interface CareerPhase {
  period: string;
  startDate: string;
  endDate: string;
  title: string;
  role: string;
  description: string;
  highlights: string[];
  tech: string[];
  type: "compact" | "hero" | "current";
  concurrent?: ConcurrentProject;
}

export interface Certification {
  name: string;
  category: "language" | "cloud" | "development";
  detail?: string;
}

export const careerPhases: CareerPhase[] = [
  {
    period: "2023.1 — 2023.9",
    startDate: "2023.1",
    endDate: "2023.9",
    title: "IT基礎・QAエンジニア",
    role: "テスター / QAエンジニア",
    description:
      "IT業界でのキャリアをスタート。研修でJava・Python・AWS等の基礎を習得後、請求管理システムやコンビニPOSシステムのテスト業務を担当。品質保証の視点とシステム全体を俯瞰する力を培った。",
    highlights: [
      "Java / Python / AWS 研修修了",
      "請求管理システムのテスト設計・実行",
      "コンビニPOSシステムの結合テスト",
    ],
    tech: ["Java", "Python", "AWS", "テスト設計"],
    type: "compact",
  },
  {
    period: "2023.10 — 2025.12",
    startDate: "2023.10",
    endDate: "2025.12",
    title: "モバイルアプリ開発リード",
    role: "PM / UI&UXデザイナー / iOSエンジニア",
    description:
      "入社わずか9ヶ月で開発チームのリードに抜擢。中古販売プラットフォームと人材マッチングアプリの2つのiOSアプリを企画からリリースまで一気通貫で担当。要件定義・UI/UXデザイン・SwiftUI実装・AWSバックエンド構築まで幅広くカバー。",
    highlights: [
      "2つのiOSアプリをリリース",
      "PM・デザイン・開発の三刀流",
      "AWS サーバーレス基盤の設計・構築",
      "5名チームのマネジメント",
    ],
    tech: ["Swift", "SwiftUI", "AWS", "Figma", "Node.js"],
    type: "hero",
    concurrent: {
      title: "HP/LP制作 & Webデザイン",
      role: "デザイナー / コーダー",
      description:
        "モバイル開発と並行してクライアント向けHP・LPの制作やWebデザインを各2件担当。企画からデザイン・コーディングまでワンストップで対応。",
      highlights: [
        "HP制作 2件",
        "LP制作 2件",
        "Webデザイン 2件",
      ],
      tech: ["HTML/CSS", "Figma", "JavaScript"],
    },
  },
  {
    period: "2026.1 — 現在",
    startDate: "2026.1",
    endDate: "現在",
    title: "Web開発リード",
    role: "PM / UI&UXデザイナー / フロントエンドエンジニア",
    description:
      "モバイルで培った経験をWebへ展開。React + TypeScript を軸としたWeb管理システムの開発をリード中。Vite + React Router v7 によるモダンなフロントエンド基盤を構築し、チームの技術選定から実装までを担当。",
    highlights: [
      "React + TypeScript でのWeb開発",
      "Vite + React Router v7 基盤構築",
      "Tailwind CSS 4 によるデザインシステム",
      "チーム技術選定・アーキテクチャ設計",
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    type: "current",
  },
];

export const certifications: Certification[] = [
  { name: "BJT J1", category: "language", detail: "ビジネス日本語最上級" },
  { name: "AWS Cloud Practitioner", category: "cloud", detail: "クラウド基礎" },
  { name: "Python 3 エンジニア認定基礎", category: "development", detail: "プログラミング基礎" },
];
