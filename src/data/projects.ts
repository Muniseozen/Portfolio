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
  roleBreakdown: { title: string; tasks: string[] }[];
  challenges: { problem: string; solution: string }[];
}

export const projects: Project[] = [
  // ── Selected Work ──
  {
    id: 1,
    slug: "ynp-homepage",
    num: "01",
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
    num: "02",
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
    roleBreakdown: [
      { title: "企画・構成", tasks: ["LPの全体構成・情報設計", "キャッチコピー・文章の作成"] },
      { title: "Design", tasks: ["Canvaでのビジュアルデザイン・制作", "ターゲットに合わせたトーン設計"] },
    ],
    challenges: [],
  },
  {
    id: 3,
    slug: "netherlands-lp",
    num: "03",
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
    roleBreakdown: [
      { title: "企画・構成", tasks: ["LP全体の構成・情報設計", "キャッチコピー・セクション文章の作成", "研修内容・料金・フローの情報整理"] },
      { title: "Design", tasks: ["Canvaでのビジュアルデザイン・制作", "ダークネイビー基調のトーン設計", "写真・マップを活用したレイアウト設計"] },
    ],
    challenges: [],
  },
  {
    id: 4,
    slug: "hr-matching-platform",
    num: "04",
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
    thumbnail: "/images/projects/mycloset-thumbnail.webp",
    designProcess: "/images/projects/mycloset-screens.webp",
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
  },
  // ── My Projects ──
  {
    id: 6,
    slug: "mochibo",
    num: "01",
    title: "Mochibo",
    subtitle: "iOS / Language Learning App",
    description:
      "「餅」+「語」= Mochibo。単語帳・フラッシュカード・練習モードを搭載した多言語対応の語学学習iOSアプリ。",
    longDescription:
      "多言語対応の語学学習iOSアプリを個人で企画・デザイン・開発しました。ユーザーは複数の単語帳を作成し、フレーズ（原文＋翻訳）を登録して、フリップカード形式の練習モードで効率的に学習できます。Firebase AuthenticationとCloud Firestoreによるユーザー認証・リアルタイムデータ同期を実装。UIは日本語・英語・トルコ語の3言語に対応し、抹茶カラーをベースにした可愛いもちキャラクターがユーザーをナビゲートするデザインに仕上げました。",
    role: "PM / UI・UX Designer / iOS Dev",
    tech: ["UI/UX Design", "Figma", "Swift", "SwiftUI", "Firebase Auth", "Cloud Firestore"],
    gradient: "from-[#9b2c5a] via-[#b84468] to-[#d4567e]",
    emoji: "&#x1F4F1;",
    thumbnail: "",
    url: "https://github.com/Muniseozen/Mochibo",
    preview: "/images/projects/mochibo-preview.webp",
    previewType: "mobile",
    duration: "",
    team: "1 member",
    status: "In Development",
    category: "personal",
    roleBreakdown: [
      { title: "企画", tasks: ["アプリコンセプト・機能設計", "多言語対応（日本語・英語・トルコ語）の設計"] },
      { title: "UI/UX Design", tasks: ["抹茶カラーのデザインシステム構築", "もちキャラクターのデザイン・アニメーション設計", "単語帳・練習モードのユーザーフロー設計"] },
      { title: "iOS Development", tasks: ["SwiftUIでのフロントエンド実装", "Firebase Authentication によるユーザー認証", "Cloud Firestore でのリアルタイムデータ同期", "フリップカード・スワイプ操作の実装"] },
    ],
    challenges: [],
  },
  {
    id: 7,
    slug: "earthquect",
    num: "02",
    title: "Earthquect",
    subtitle: "Web App / Real-time Earthquake Monitor",
    description:
      "トルコの地震をリアルタイムで監視するWebアプリ。AFAD APIを活用し、地震情報・断層マップ・避難場所・防災ガイドを提供。トルコ語/英語対応。",
    longDescription:
      "トルコは日本と同じく地震大国でありながら、日本のYahoo!防災速報のような、地震情報をリアルタイムで確認できる一般向けサービスがほとんどありません。防災意識や対策も日本に比べて十分とは言えない現状があります。「自分の国にも、誰でもすぐ使える防災ツールがあるべきだ」という思いから、既存サービスの調査・利用可能なAPIのリサーチ・情報設計を自分で行い、このプロジェクトを立ち上げました。AFAD（トルコ災害緊急事態管理庁）のAPIをメインデータソースとし、USGS（米国地質調査所）をフォールバックとして使用。直近30日間の地震データを30秒間隔で自動更新し、マグニチュード別に色分けされたインタラクティブマップ上に表示します。トルコの主要断層線（北アナトリア断層・東アナトリア断層）の可視化、避難場所情報、防災ガイドなども搭載。UIはトルコ語と英語に対応し、ブラウザ言語を自動検出します。",
    role: "UI・UX Designer / Full-stack Dev",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Leaflet", "i18next", "Axios"],
    gradient: "from-[#c2456e] via-[#d45e6a] to-[#e07850]",
    emoji: "&#x1F30D;",
    thumbnail: "/images/projects/earthquect-preview.webp",
    preview: "/images/projects/earthquect-preview.webp",
    designProcess: "/images/projects/earthquect-faultlines.webp",
    duration: "",
    team: "1 member",
    status: "In Development",
    category: "personal",
    roleBreakdown: [
      { title: "企画・設計", tasks: ["防災情報アプリのコンセプト設計", "AFAD/USGS APIの調査とデータ設計"] },
      { title: "UI/UX Design", tasks: ["マグニチュード別カラーコーディング設計", "インタラクティブマップのUX設計", "レスポンシブ対応（モバイル・タブレット・デスクトップ）"] },
      { title: "Frontend", tasks: ["React + Vite でのSPA構築", "Leafletでのマップ・断層線・地震マーカー実装", "i18nextによるトルコ語/英語の多言語対応", "AFAD APIからのリアルタイムデータ取得（30秒自動更新）"] },
    ],
    challenges: [],
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
