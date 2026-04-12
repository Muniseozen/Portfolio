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
  duration: string;
  team: string;
  status: string;
  category: "work" | "personal";
  roleBreakdown: { title: string; tasks: string[] }[];
  challenges: { problem: string; solution: string }[];
  screenshots: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "corporate-website",
    num: "01",
    title: "Corporate Website\n& Landing Pages",
    subtitle: "Web Design / Frontend",
    description:
      "クライアント企業のコーポレートサイトとLPをまるっと担当。ブランドの世界観を壊さず、ちゃんと成果が出るデザインを追求しました。",
    longDescription:
      "複数のクライアント企業に対して、コーポレートサイトとランディングページの企画・デザイン・実装を一貫して担当しました。ブランドガイドラインを深く理解した上で、コンバージョン率の向上を意識したUI設計を行い、A/Bテストを通じて継続的に改善。レスポンシブ対応はもちろん、Core Web Vitalsの最適化にも注力し、パフォーマンスとUXの両立を実現しました。",
    role: "PM / Designer / Frontend Dev",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
    gradient: "from-[#9b2c5a] via-[#a83660] to-[#c2456e]",
    emoji: "&#x1F3A8;",
    duration: "6 months",
    team: "3 members",
    status: "Completed",
    category: "work",
    roleBreakdown: [
      {
        title: "Project Management",
        tasks: [
          "クライアントとの要件定義・スケジュール管理",
          "デザインレビューとフィードバックサイクルの運用",
          "チーム間のコミュニケーションハブとしての役割",
        ],
      },
      {
        title: "Design",
        tasks: [
          "ブランドガイドラインに基づいたUIデザイン",
          "ワイヤーフレーム・プロトタイプ作成（Figma）",
          "レスポンシブデザインの設計",
        ],
      },
      {
        title: "Frontend Development",
        tasks: [
          "Next.js + TypeScriptでの実装",
          "Tailwind CSSによるスタイリング",
          "Core Web Vitalsの最適化",
        ],
      },
    ],
    challenges: [
      {
        problem:
          "ブランドの世界観を維持しながらコンバージョン率を向上させる必要があった",
        solution:
          "A/Bテストを実施し、デザインの美しさとCTA配置のバランスを数値で検証。ブランドカラーを活かしたCTAデザインで両立を達成",
      },
      {
        problem:
          "複数のLP間でデザインの一貫性を保ちつつ、各ページの目的に合わせたカスタマイズが必要だった",
        solution:
          "共通のデザインシステムとコンポーネントライブラリを構築し、再利用可能なパーツで効率的にページを量産",
      },
    ],
    screenshots: [],
  },
  {
    id: 2,
    slug: "hr-matching-platform",
    num: "02",
    title: "HR Matching\nPlatform",
    subtitle: "Mobile App & Web Admin",
    description:
      "求職者と企業をつなぐマッチングアプリ。スマホアプリとWeb管理画面の両方を設計・開発。「使いやすい」を何度も検証して磨きました。",
    longDescription:
      "求職者と企業をスムーズにマッチングさせるプラットフォームを、モバイルアプリとWeb管理画面の両面から設計・開発しました。求職者側はReact NativeによるクロスプラットフォームアプリでiOS/Androidに対応し、企業側はReactベースのWeb管理画面で求人管理・応募者管理を行えるようにしました。UXリサーチとユーザビリティテストを繰り返し、直感的に使える操作フローを実現しています。",
    role: "PM / UI&UX Designer / Developer",
    tech: ["React Native", "React", "Node.js", "PostgreSQL"],
    gradient: "from-[#c2456e] via-[#d45e6a] to-[#e07850]",
    emoji: "&#x1F91D;",
    duration: "8 months",
    team: "5 members",
    status: "Completed",
    category: "work",
    roleBreakdown: [
      {
        title: "Project Management",
        tasks: [
          "プロダクトロードマップの策定",
          "スプリント計画とタスク管理",
          "ステークホルダーへの進捗報告",
        ],
      },
      {
        title: "UI/UX Design",
        tasks: [
          "ユーザーリサーチとペルソナ設計",
          "ユーザーフロー・ワイヤーフレーム作成",
          "ユーザビリティテストの実施と改善",
        ],
      },
      {
        title: "Development",
        tasks: [
          "React Nativeでのモバイルアプリ実装",
          "Reactでの管理画面実装",
          "Node.js + PostgreSQLのAPI設計・実装",
        ],
      },
    ],
    challenges: [
      {
        problem:
          "求職者と企業の双方にとって使いやすいマッチングロジックの設計",
        solution:
          "ユーザーインタビューを重ね、スキル・希望条件・カルチャーフィットの3軸でスコアリングするアルゴリズムを設計",
      },
      {
        problem:
          "モバイルとWebで一貫したUXを提供しながら、各プラットフォームの特性を活かす必要があった",
        solution:
          "共通のデザイントークンとコンポーネント設計を基盤に、プラットフォーム固有のインタラクションパターンを適用",
      },
    ],
    screenshots: [],
  },
  {
    id: 3,
    slug: "influencer-resale-app",
    num: "03",
    title: "Influencer\nResale App",
    subtitle: "Mobile App",
    description:
      "インフルエンサーが自分のブランドで中古品を販売できるアプリ。出品から決済まで完結する体験と、各インフルエンサーの個性が出るUIを実現。",
    longDescription:
      "インフルエンサーが自分のブランディングを保ちながら中古品を販売できるC2Cプラットフォームを開発しました。各インフルエンサーのショップページは個別にカスタマイズ可能で、出品・購入・決済までアプリ内で完結する体験を設計。Stripeを活用した安全な決済フローと、Firebaseによるリアルタイム在庫管理を実装し、スケーラブルなアーキテクチャを実現しています。",
    role: "PM / UI&UX Designer / Frontend Dev",
    tech: ["React Native", "TypeScript", "Firebase", "Stripe"],
    gradient: "from-[#e07850] via-[#e8956a] to-[#f0b080]",
    emoji: "&#x2728;",
    duration: "10 months",
    team: "4 members",
    status: "Completed",
    category: "personal",
    roleBreakdown: [
      {
        title: "Project Management",
        tasks: [
          "プロダクト企画とビジネス要件の整理",
          "開発チームのリードとアジャイル運用",
          "リリース計画と品質管理",
        ],
      },
      {
        title: "UI/UX Design",
        tasks: [
          "インフルエンサーごとのカスタマイズ可能なUIシステム設計",
          "出品〜購入〜決済のユーザーフロー設計",
          "ブランディングテンプレートの設計",
        ],
      },
      {
        title: "Frontend Development",
        tasks: [
          "React Native + TypeScriptでのアプリ実装",
          "Stripe決済フローの統合",
          "Firebaseリアルタイムデータ同期の実装",
        ],
      },
    ],
    challenges: [
      {
        problem:
          "各インフルエンサーの個性を出しながら、統一されたUXを提供する必要があった",
        solution:
          "テーマシステムを設計し、カラー・フォント・レイアウトをカスタマイズ可能にしつつ、操作フローは統一",
      },
      {
        problem:
          "出品から決済までのフローをシンプルに保ちながら、安全性も確保する必要があった",
        solution:
          "Stripeのエスクロー機能を活用し、商品受取確認後に売上を確定するフローを実装。UIはステップ形式で直感的に",
      },
    ],
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
