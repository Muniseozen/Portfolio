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
  en: Partial<Pick<CareerProject, "period" | "endDate" | "title" | "role" | "description" | "tech" | "concurrent">>; // 英語版で上書きする項目
}

export interface Certification {
  name: string;
  category: "language" | "cloud" | "development";
  detail?: string;
  en?: Partial<Pick<Certification, "name" | "detail">>; // 英語版で上書きする項目
}

export const careerProjects: CareerProject[] = [
  {
    period: "2020.1 — 2021.12",
    startDate: "2020.1",
    endDate: "2021.12",
    title: "テレビ番組制作",
    role: "アシスタント ディレクター",
    description: [
      "特別番組・スペシャル番組を中心に、企画・台本作成から撮影・編集まで担当",
      "関係者との調整・制作工程の進行管理",
    ],
    tech: ["番組制作", "台本作成", "撮影", "動画編集", "進行管理"],
    type: "compact",
    en: {
      title: "TV Program Production",
      role: "Assistant Director",
      description: [
        "Worked mainly on special programs, from planning and scriptwriting to filming and editing",
        "Coordinated with stakeholders and managed the production schedule",
      ],
      tech: ["TV Production", "Scriptwriting", "Filming", "Video Editing", "Production Management"],
    },
  },
  {
    period: "2023.2 — 2023.4",
    startDate: "2023.2",
    endDate: "2023.4",
    title: "請求書自動発行システム マニュアル整備・テスト",
    role: "QAエンジニア",
    description: [
      "大手企業向け請求書自動発行システムの操作・運用マニュアル作成",
      "システムテストの実施、不具合修正後の再テスト",
    ],
    tech: ["JavaScript", "HTML5", "Excel", "Notion"],
    type: "compact",
    concurrent: {
      title: "プログラミングスクール",
      description: "Pythonを中心にプログラミングの基礎を体系的に習得しました。",
      tech: ["Python"],
    },
    en: {
      title: "Invoice Automation System: Manuals & Testing",
      role: "QA Engineer",
      description: [
        "Wrote operation manuals for an enterprise invoice automation system",
        "Ran system tests and retested after bug fixes",
      ],
      concurrent: {
        title: "Programming School",
        description: "Learned programming fundamentals systematically, centered on Python.",
        tech: ["Python"],
      },
    },
  },
  {
    period: "2023.5 — 2024.4",
    startDate: "2023.5",
    endDate: "2024.4",
    title: "My Closet（インフルエンサー向け中古販売アプリ）",
    role: "PM / UI/UXデザイナー / iOSエンジニア",
    description: [
      "開発部長として、開発体制の構築・プロジェクト管理・技術方針の策定を担当",
      "FigmaによるUI/UX設計、SwiftUIによるiOS実装",
      "Cognitoによる認証、WebSocketによるリアルタイム通信の実装",
      "企画からApp Storeリリース・保守運用まで一貫して担当",
    ],
    tech: ["Swift", "SwiftUI", "AWS Lambda", "Cognito", "MySQL", "Figma"],
    type: "hero",
    concurrent: {
      title: "侍エンジニア アプリ開発コース（6ヶ月）",
      description: "iOS開発・AWSバックエンド構築を体系的に習得しました。",
      tech: ["Swift", "Swift Data", "AWS Lambda", "API Gateway", "MySQL", "S3"],
    },
    en: {
      title: "My Closet (Secondhand Marketplace App for Influencers)",
      role: "PM / UI/UX Designer / iOS Engineer",
      description: [
        "As head of development, built the team, managed the project, and set the technical direction",
        "UI/UX design in Figma and iOS implementation in SwiftUI",
        "Implemented authentication with Cognito and real-time messaging with WebSocket",
        "Owned the project from planning to App Store release and maintenance",
      ],
      concurrent: {
        title: "SAMURAI ENGINEER App Development Course (6 months)",
        description: "Systematically learned iOS development and building AWS backends.",
        tech: ["Swift", "Swift Data", "AWS Lambda", "API Gateway", "MySQL", "S3"],
      },
    },
  },
  {
    period: "2024.5 — 2025.9",
    startDate: "2024.5",
    endDate: "2025.9",
    title: "Uply（人材マッチングアプリ）",
    role: "PM / UI/UXデザイナー / iOSエンジニア",
    description: [
      "要件定義・FigmaによるUI/UX設計からApp Storeリリースまで担当",
      "SwiftUIによるiOSアプリの設計・実装、AWSとのAPI連携",
      "リリース後の保守運用・継続的な機能改善",
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
      tech: ["HTML / CSS", "JavaScript", "Figma"],
    },
    en: {
      title: "Uply (HR Matching App)",
      role: "PM / UI/UX Designer / iOS Engineer",
      description: [
        "Owned requirements and UI/UX design in Figma through App Store release",
        "Designed and built the iOS app in SwiftUI, integrated with AWS APIs",
        "Maintenance and continuous improvement after release",
      ],
      concurrent: {
        title: "Website & LP Production (4 projects)",
        description: [
          "Company website",
          "LP for incoming hires",
          "Netherlands program LP",
          "Client LP",
        ],
        tech: ["HTML / CSS", "JavaScript", "Figma"],
      },
    },
  },
  {
    period: "2025.10 — 2026.1",
    startDate: "2025.10",
    endDate: "2026.1",
    title: "Uply 企業向けWeb管理システム",
    role: "PM / UI/UXデザイナー / フロントエンド",
    description: [
      "アプリと連携する企業向け管理画面の設計・実装",
      "React・Vite・React Routerで構築、Cognitoによる認証・WebSocketによるリアルタイム通信を実装",
      "技術選定・コードレビュー・進行・品質管理",
    ],
    tech: ["React", "Vite", "Tailwind CSS", "AWS Lambda", "Figma"],
    type: "compact",
    en: {
      title: "Uply Employer Web Admin System",
      role: "PM / UI/UX Designer / Frontend",
      description: [
        "Designed and built the employer admin screens that connect with the app",
        "Built with React, Vite, and React Router; implemented Cognito authentication and real-time messaging with WebSocket",
        "Tech selection, code review, and progress and quality management",
      ],
    },
  },
  {
    period: "2026.1 — 2026.5",
    startDate: "2026.1",
    endDate: "2026.5",
    title: "大手化粧品企業 ECサイト口コミ機能開発",
    role: "フロントエンドエンジニア（リーダー）",
    description: [
      "口コミの投稿・一覧・詳細画面と、マイページの口コミ管理機能のUI/UX設計",
      "HTML・CSS・JavaScriptによるフロントエンド実装",
      "テストケース作成、単体テスト・結合テストの実施",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Git", "Backlog", "Figma"],
    type: "compact",
    concurrent: {
      title: "メンタルヘルス管理システム（2026.3〜5）",
      description: "ストレスチェックや各種サーベイの結果画面の情報設計・ワイヤーフレーム・UIデザインを担当しました。",
      tech: ["Figma"],
    },
    en: {
      title: "Major Cosmetics Brand: E-commerce Review Feature",
      role: "Frontend Engineer (Lead)",
      description: [
        "UI/UX design for posting, listing, and viewing reviews, plus review management in My Page",
        "Frontend implementation in HTML, CSS, and JavaScript",
        "Wrote test cases and ran unit and integration tests",
      ],
      concurrent: {
        title: "Mental Health Management System (2026.3–5)",
        description: "Handled information design, wireframes, and UI design for the results screens of stress checks and other surveys.",
        tech: ["Figma"],
      },
    },
  },
  {
    period: "2026.2 — 2026.7",
    startDate: "2026.2",
    endDate: "2026.7",
    title: "大手化粧品企業 ECサイトのキャンペーンLP・バナー制作",
    role: "UXエンジニア",
    description: [
      "毎月のキャンペーンに合わせたLPの構成・デザイン",
      "定期更新バナーの制作",
      "関係部署との制作調整・修正対応",
    ],
    tech: ["Adobe XD", "Figma"],
    type: "compact",
    concurrent: {
      title: "大手物流企業向けスタッフ管理システム（2026.5〜6）",
      description: "情報設計・画面遷移・ワイヤーフレームから、管理画面・ダッシュボードのUIデザインまで担当しました。",
      tech: ["Photoshop", "Figma"],
    },
    en: {
      title: "Major Cosmetics Brand: Campaign LPs & Banners",
      role: "UX Engineer",
      description: [
        "Structure and design of LPs for each month's campaign",
        "Regularly updated banners",
        "Coordinated production with related departments and handled revisions",
      ],
      concurrent: {
        title: "Staff Management System for a Major Logistics Company (2026.5–6)",
        description: "Handled information design, screen flows, and wireframes through UI design of the admin screens and dashboard.",
        tech: ["Photoshop", "Figma"],
      },
    },
  },
];
export const certifications: Certification[] = [
  { name: "BJT J1", category: "language", detail: "ビジネス日本語最上級", en: { detail: "Highest level of Business Japanese" } },
  { name: "AWS Cloud Practitioner", category: "cloud", detail: "クラウド基礎", en: { detail: "Cloud fundamentals" } },
  { name: "Python 3 エンジニア認定基礎", category: "development", detail: "プログラミング基礎", en: { name: "Python 3 Engineer Certification (Basic)", detail: "Programming fundamentals" } },
];
