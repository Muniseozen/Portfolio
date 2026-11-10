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
  previewSp?: { src: string; width: number; height: number }; // PC版プレビューの横に並べるSP版
  designProcess?: string;
  designSystem?: string;
  prototype?: string;
  screens?: { src: string; label: string; title: string; width: number; height: number }[]; // 縦長のスマホ画面を並べて見せる（各画面は枠内スクロール）
  samples?: { src: string; title: string; width: number; height: number }[]; // ページ下部にその他の画面を横並びで見せる
  duration: string;
  team: string;
  status: string;
  category: "work" | "personal";
  type: "web" | "app";
  roleBreakdown: { title: string; tasks: string[] }[];
  challenges: { problem: string; solution: string }[];
  en: ProjectText; // 英語版の文章
}

type ProjectText = Pick<Project, "title" | "subtitle" | "description" | "longDescription" | "role" | "roleBreakdown" | "challenges" | "screens" | "samples">;

export const projects: Project[] = [
  // ── Selected Work ──
  {
    id: 1,
    slug: "ynp-homepage",
    title: "株式会社YNP ホームページ",
    subtitle: "Web / UI・UX Design / Frontend",
    description:
      "自社コーポレートサイトのリニューアルとブランディングです。サイト構成・コピーライティング・デザインを担当しました。",
    longDescription:
      "自社コーポレートサイト（y-n-p.co.jp）のリニューアルプロジェクトです。サイト全体の構成設計と文章作成から、ブランドイメージの刷新、FigmaでのUI/UXデザインまでを担当しました。フロントエンド実装のコードレビューとWordPress構築のディレクションも行いました。",
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
      { problem: "キャッチコピーが企業の目的やビジョンと合っていなかった", solution: "ヒアリングを重ね、企業の強みとターゲットに刺さるメッセージを策定し、ファーストビューで明確に伝わるコピーに刷新" },
      { problem: "余白が多く、コンテンツが少ない印象で信頼感に欠けていた", solution: "適切な余白バランスとビジュアル要素を配置し、プロフェッショナルで信頼感のあるデザインに改善" },
    ],
    en: {
      title: "YNP Inc. Corporate Website",
      subtitle: "Web / UI/UX Design / Frontend",
      description:
        "Renewal and rebranding of the company's corporate website. Handled site structure, copywriting, and design.",
      longDescription:
        "A renewal project for the company's corporate website (y-n-p.co.jp). I handled everything from the overall site structure and copywriting to refreshing the brand image and UI/UX design in Figma. I also reviewed the frontend code and directed the WordPress build.",
      role: "Planner / Copywriter / UI/UX Designer",
      roleBreakdown: [
        { title: "Design", tasks: ["Wireframes and UI design in Figma", "Responsive design planning"] },
        { title: "Frontend", tasks: ["Code review of HTML/CSS/JS", "Direction of the WordPress theme"] },
      ],
      challenges: [
        { problem: "With few pages and little content, the site wasn't conveying the company's strengths", solution: "Added pages for services, track record, and recruiting, and restructured the site so visitors can easily reach the information they want" },
        { problem: "The tagline didn't match the company's purpose or vision", solution: "Through repeated interviews, defined a message built on the company's strengths that resonates with its audience, and rewrote the copy so it lands clearly in the first view" },
        { problem: "Excessive whitespace made the content feel thin and undermined trust", solution: "Balanced spacing and visual elements to create a professional, trustworthy design" },
      ],
    },
  },
  {
    id: 2,
    slug: "naitei-lp",
    title: "内定者向けLP制作",
    subtitle: "LP / UI・UX Design / Planning",
    description:
      "内定者向けLPの企画・構成・コピーライティング・デザインを全て担当しました。ターゲットに響く情報設計で仕上げました。",
    longDescription:
      "内定者向けの情報発信を目的としたランディングページを企画からデザインまで一人で担当しました。LPの構成設計、キャッチコピー・文章の作成、ビジュアルデザインまで全て自分で考え、Canvaで制作しました。内定者が知りたい情報を整理し、直感的に伝わるレイアウトに仕上げています。",
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
    en: {
      title: "Landing Page for Incoming Hires",
      subtitle: "LP / UI/UX Design / Planning",
      description:
        "Handled planning, structure, copywriting, and design of a landing page for incoming hires, built around the information they want to know.",
      longDescription:
        "I took a landing page for incoming hires from planning to design on my own. I designed the structure, wrote the headlines and copy, and created the visuals in Canva. I organized the information new hires want to know into a layout that communicates intuitively.",
      role: "Planner / Copywriter / UI/UX Designer",
      roleBreakdown: [
        { title: "Planning & Structure", tasks: ["Overall LP structure and information architecture", "Headlines and copywriting"] },
        { title: "Design", tasks: ["Visual design and production in Canva", "Tone design tailored to the target audience"] },
      ],
      challenges: [],
    },
  },
  {
    id: 3,
    slug: "netherlands-lp",
    title: "オランダIT研修LP制作",
    subtitle: "LP / UI・UX Design / Planning",
    description:
      "オランダのIT企業で研修を行うブートキャンプ型プログラムの集客LPです。企画・構成・コピーライティング・デザインを担当しました。",
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
    en: {
      title: "Netherlands IT Training Program LP",
      subtitle: "LP / UI/UX Design / Planning",
      description:
        "A lead-generation LP for a bootcamp-style program that trains participants at IT companies in the Netherlands. Handled planning, structure, copywriting, and design.",
      longDescription:
        "I led a landing page promoting a hands-on training program at IT companies in the Netherlands, from planning and structure through design. Since the target audience was engineers looking to grow their careers abroad, I went all in on an international look built on dark navy, rather than the bright tone common in Japanese LPs. Large photos of the local offices and streets help visitors picture themselves working there. The page carries a lot of information — program highlights, schedule, pricing, participant testimonials, and FAQ — but a clear rhythm between sections keeps it easy to read all the way down.",
      role: "Planner / Copywriter / UI/UX Designer",
      roleBreakdown: [
        { title: "Planning & Structure", tasks: ["Overall LP structure and information architecture", "Headlines and section copy", "Organizing training content, pricing, and flow"] },
        { title: "Design", tasks: ["Visual design and production in Canva", "Tone design based on dark navy", "Layouts using photos and maps"] },
      ],
      challenges: [],
    },
  },
  {
    id: 6,
    slug: "beauty-column",
    title: "ECサイト 美容コラム vol.10–12",
    subtitle: "Web / Editorial Design / SP Only",
    description:
      "30〜40代の女性に向けた連載美容コラムから、3号をピックアップして紹介します。",
    longDescription:
      "30〜40代の女性に向けた連載美容コラムの、スマートフォン専用のページデザインです。シリーズの中から、「UVケア」「毛穴ケア」「コラーゲン」をテーマにした3号をピックアップしました。\n\n淡い配色と繊細な装飾で、甘くなりすぎない、清潔感のある女性らしさを表現しました。長い記事でもスマートフォンで読み進めやすいよう、見出しや余白で情報を区切り、比較は横並び、ポイントは番号付きで整理しています。図解やイラストも交え、内容を視覚的に理解しやすくしました。\n\nシリーズ共通のタイトルや見出しのルールを保ちながら、号ごとにアクセントカラーや囲みの形を変え、統一感とテーマごとの違いを両立させています。",
    role: "Planner / Designer",
    tech: ["Editorial Design", "Figma"],
    gradient: "from-[#c2456e] via-[#d4567e] to-[#e88560]",
    emoji: "&#x1F484;",
    thumbnail: "/images/projects/beauty-column-thumbnail.webp",
    screens: [
      { src: "/images/projects/beauty-column-vol10.webp", label: "vol.10", title: "UVケアと紫外線にまつわる豆知識", width: 750, height: 9316 },
      { src: "/images/projects/beauty-column-vol11.webp", label: "vol.11", title: "大人の毛穴ケア対策ガイド", width: 750, height: 9574 },
      { src: "/images/projects/beauty-column-vol12-2.webp", label: "vol.12", title: "美肌のカナメ「コラーゲン」の上手な摂り方", width: 750, height: 8764 },
    ],
    duration: "",
    team: "",
    status: "Completed",
    category: "work",
    type: "web",
    roleBreakdown: [],
    challenges: [],
    en: {
      title: "E-commerce Beauty Column Vol. 10–12",
      subtitle: "Web / Editorial Design / SP Only",
      description:
        "Three issues picked from a beauty column series aimed at women in their 30s and 40s.",
      longDescription:
        "Smartphone-only page design for a beauty column series aimed at women in their 30s and 40s. From the series, I picked three issues on UV care, pore care, and collagen.\n\nPale colors and delicate ornaments express a clean, feminine feel that never gets too sweet. So that long articles stay easy to read on a smartphone, information is divided with headings and spacing, comparisons are laid out side by side, and key points are numbered. Diagrams and illustrations make the content easier to grasp visually.\n\nWhile keeping the series' shared rules for titles and headings, each issue changes its accent color and box shapes, balancing consistency with the character of each theme.",
      role: "Planner / Designer",
      roleBreakdown: [],
      challenges: [],
      screens: [
        { src: "/images/projects/beauty-column-vol10.webp", label: "Vol. 10", title: "Fun facts about UV care and ultraviolet rays", width: 750, height: 9316 },
        { src: "/images/projects/beauty-column-vol11.webp", label: "Vol. 11", title: "A guide to pore care for adults", width: 750, height: 9574 },
        { src: "/images/projects/beauty-column-vol12-2.webp", label: "Vol. 12", title: "How to get the most out of collagen", width: 750, height: 8764 },
      ],
    },
  },
  {
    id: 7,
    slug: "mental-health-system",
    title: "メンタルヘルス管理システム",
    subtitle: "Web / UI・UX Design",
    description:
      "従業員のストレスチェック結果を、ひと目で把握できるように設計した管理画面です。",
    longDescription:
      "従業員向けメンタルヘルス管理システムの、ストレス診断結果画面のUIデザインです。\n\n総合判定を最上部に大きく示し、「仕事の負担感」「心身の反応」「周囲のサポート」の3つの観点をカードで要約しました。各観点はレーダーチャートで前回との比較を、表で項目ごとのスコアと判定を確認できるようにし、全体から詳細へと段階的に読み進められる構成にしています。",
    role: "UI・UX Designer",
    tech: ["UI/UX Design", "Figma"],
    gradient: "from-[#9b2c5a] via-[#a83660] to-[#c2456e]",
    emoji: "&#x1F4CA;",
    thumbnail: "/images/projects/mental-health-thumbnail.webp",
    preview: "/images/projects/mental-health-preview.webp",
    previewSp: { src: "/images/projects/mental-health-stress-result-sp.webp", width: 375, height: 4062 },
    designSystem: "/images/projects/mental-health-design-system.webp",
    samples: [
      { src: "/images/projects/mental-health-presenteeism-1item.webp", title: "プレゼンティーズム（東大1項目）", width: 1600, height: 2300 },
      { src: "/images/projects/mental-health-presenteeism-who-hpq.webp", title: "プレゼンティーズム（WHO-HPQ）", width: 1600, height: 2376 },
      { src: "/images/projects/mental-health-wellbeing-survey.webp", title: "こころサーベイ", width: 1600, height: 2649 },
    ],
    duration: "",
    team: "",
    status: "Completed",
    category: "work",
    type: "web",
    roleBreakdown: [],
    challenges: [],
    en: {
      title: "Mental Health Management System",
      subtitle: "Web / UI/UX Design",
      description:
        "A dashboard designed so employees' stress check results can be understood at a glance.",
      longDescription:
        "UI design for the stress check results screen of an employee mental health management system.\n\nThe overall assessment is shown prominently at the top, and three cards summarize the key areas: job strain, stress reactions, and support from others. For each area, a radar chart compares the results with the previous check and a table shows each item's score and rating, so the page reads step by step from the big picture to the details.",
      role: "UI/UX Designer",
      roleBreakdown: [],
      challenges: [],
      samples: [
        { src: "/images/projects/mental-health-presenteeism-1item.webp", title: "Presenteeism (Single-Item)", width: 1600, height: 2300 },
        { src: "/images/projects/mental-health-presenteeism-who-hpq.webp", title: "Presenteeism (WHO-HPQ)", width: 1600, height: 2376 },
        { src: "/images/projects/mental-health-wellbeing-survey.webp", title: "Wellbeing Survey", width: 1600, height: 2649 },
      ],
    },
  },
  {
    id: 4,
    slug: "hr-matching-platform",
    title: "人材マッチングプラットフォーム",
    subtitle: "iOS & Web / UI・UX Design / PM",
    description:
      "求職者と企業をつなぐマッチングプラットフォームです。iOSアプリと企業向けWebダッシュボードを設計・開発しました。",
    longDescription:
      "求職者と企業をスムーズにマッチングさせるプラットフォームを、モバイルアプリとWeb管理画面の両面から設計・開発しました。iOSアプリは企画からリリースまで担当し、FigmaでのUI/UXデザイン、SwiftUIでのフロントエンド実装、AWSバックエンドの構築まで幅広く担当しました。企業向けWebダッシュボードではReact + TypeScriptでの実装をリードし、求人管理・応募者管理・マッチングデータの可視化を実現しています。",
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
    en: {
      title: "HR Matching Platform",
      subtitle: "iOS & Web / UI/UX Design / PM",
      description:
        "A matching platform connecting job seekers and companies. Designed and built an iOS app and a web dashboard for employers.",
      longDescription:
        "I designed and developed a platform that smoothly matches job seekers with companies, covering both the mobile app and the web admin. For the iOS app, I was involved from planning to release, spanning UI/UX design in Figma, frontend implementation in SwiftUI, and building the AWS backend. For the employer web dashboard, I led the implementation in React + TypeScript, delivering job management, applicant management, and visualization of matching data.",
      role: "PM / UI/UX Designer / iOS Dev / Frontend Dev",
      roleBreakdown: [
        { title: "PM", tasks: ["Product roadmap planning", "Sprint planning and team management"] },
        { title: "UI/UX Design", tasks: ["User flows and UI design in Figma", "Usability testing and iteration"] },
        { title: "Mobile App (iOS)", tasks: ["Frontend implementation in SwiftUI", "Integration with the AWS backend"] },
        { title: "+ Web Dashboard", tasks: ["Admin dashboard built with React + TypeScript", "Job management, applicant management, and dashboard features"] },
      ],
      challenges: [],
    },
  },
  {
    id: 5,
    slug: "mycloset",
    title: "My Closet",
    subtitle: "iOS / UI・UX Design / PM",
    description:
      "インフルエンサー向けのフリマアプリです。出品・購入・決済までアプリ内で完結し、SNSシェア・クーポン機能も搭載しています。",
    longDescription:
      "インフルエンサーが自分のブランディングを保ちながら中古品を販売できるiOSアプリです。企画からUI/UXデザイン、Swift実装、AWSバックエンド構築、PMまで一気通貫で担当しました。",
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
    en: {
      title: "My Closet",
      subtitle: "iOS / UI/UX Design / PM",
      description:
        "A flea-market app for influencers. Listing, purchase, and payment all happen in-app, with social sharing and coupon features.",
      longDescription:
        "An iOS app that lets influencers sell secondhand items while keeping their personal brand intact. I handled everything end to end: planning, UI/UX design, Swift implementation, the AWS backend, and project management.",
      role: "PM / UI/UX Designer / iOS Dev",
      roleBreakdown: [
        { title: "PM", tasks: ["Product planning and business requirements", "Release planning and quality management"] },
        { title: "UI/UX Design", tasks: ["Customizable UI system design", "User flows from listing to purchase and payment"] },
        { title: "iOS Development", tasks: ["App implementation in SwiftUI", "Integration with the AWS backend"] },
      ],
      challenges: [],
    },
  },
];

export const projectTypeLabels = { web: "Web", app: "App" } as const;

// トップのカードと同じく、分類（web / app）内での並び順を番号にする
export function getProjectNumber(project: Project): string {
  // 英語版は localize() で作ったコピーが渡されるため、オブジェクトではなく slug で探す
  const index = projects.filter((p) => p.type === project.type).findIndex((p) => p.slug === project.slug);
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

// 分類ページの紹介文。空欄の項目は表示しない
export type GraphicCategory = {
  key: WorkCategory;
  cover: string; // トップページのカードに使う代表画像
  kind: string; // 制作区分：実案件／自主制作／スクール課題
  summary: string; // 制作概要
  purpose: string; // 目的：商品購入、イベント申し込み、サービス認知など
  target: string; // ターゲット：年齢層だけでなく、関心や悩みまで
  placement: string; // 掲載場所・サイズ：SNS広告、Webサイト内など／幅×高さ
  intent: string[]; // デザインの意図：配色、文字の優先順位、写真、ボタンの工夫
  role: string; // 担当範囲
  tools: string[]; // 使用ツール
  time: string; // 制作時間
  result: string; // 成果や改善点：実績があれば数値、自主制作なら振り返りや改善案
  sets?: GraphicSet[]; // 指定するとギャラリーの代わりに、企画ごとに画像と説明を並べる
  en?: Partial<Pick<GraphicCategory, "kind" | "summary" | "purpose" | "target" | "placement" | "intent" | "role" | "time" | "result">>; // 英語版の文章
};

// 1つの企画（サイズ違いのバナーはまとめる）
export type GraphicSet = {
  title: string;
  images: (Omit<DesignWork, "category"> & { device: "pc" | "sp" })[];
  description: string;
  en?: Partial<Pick<GraphicSet, "title" | "description">>;
};

// 分類ごとの作品数（ギャラリー画像 ＋ 企画ごとの画像）
export function graphicWorkCount(cat: GraphicCategory) {
  return works.filter((w) => w.category === cat.key).length + (cat.sets ?? []).reduce((n, s) => n + s.images.length, 0);
}

// 並び順 = トップのカード順・詳細ページの番号順
export const graphicCategories: GraphicCategory[] = [
  {
    key: "recruit",
    cover: "/images/design/recruit-cover.webp",
    kind: "実案件",
    summary: "SES企業の求人媒体・アプリ内に掲載する採用バナー15点を制作しました。",
    purpose: "未経験からIT業界への転職を検討している方に、研修制度や働く環境を伝え、求人への関心と応募につなげます。",
    target: "IT業界に興味があり、未経験からキャリアを築きたい女性。仕事内容やスキル習得に不安があり、教育体制や働きやすさを重視する方。",
    placement: "",
    intent: [
      "求人サイトに並ぶ多数の求人の中でも目を引くよう、鮮やかな配色とメリハリのある文字・図形の配置を取り入れました。社員の笑顔や動きのあるポーズを大きく見せることで、若手社員が活躍する、明るく活気のある社風を表現しています。",
      "各バナーでは「研修制度」「休日」「子育て支援」など、求職者の関心に合わせて訴求を変え、挑戦を支える環境や働きやすさを伝えました。「この仲間と一緒に働きたい」「ここで新しいキャリアに挑戦したい」と感じてもらえるデザインを目指しました。",
    ],
    role: "",
    tools: [],
    time: "",
    result: "バナー変更後、求人のクリック数が従来の約3倍に増加しました。",
    en: {
      kind: "Client Work",
      summary: "Created 15 recruitment banners for an SES (IT staffing) company, published on job boards and in-app job listings.",
      purpose: "Show people considering a move into IT with no prior experience what the training programs and work environment are like, and turn that interest into applications.",
      target: "Women interested in the IT industry who want to build a career from scratch — people uneasy about the work itself or learning new skills, who value strong training and a good place to work.",
      intent: [
        "Vivid colors and a punchy layout of type and shapes help the banners stand out among the many listings on job sites. Large photos of smiling employees in lively poses express a bright, energetic culture where young employees thrive.",
        "Each banner shifts its message to what job seekers care about — training, time off, or childcare support — to show an environment that supports new challenges and makes work easier. The goal was a design that makes people feel \"I want to work with this team\" and \"I want to start a new career here.\"",
      ],
      result: "After the banners were replaced, clicks on the job listings roughly tripled.",
    },
  },
  {
    key: "campaign",
    cover: "/images/design/campaign-cover.webp",
    kind: "実績・ブランド名非公開",
    summary:
      "化粧品メーカーのECサイト向けに制作したバナーです。ブランド名は非公開とし、掲載画像の一部をポートフォリオ用に差し替えています。キャンペーン内容やデザインの異なる7企画をピックアップしました。同じブランドの中でも、企画ごとの目的や季節感に合わせて表現を変えています。各企画のPC・スマートフォン向けデザインを紹介します。",
    purpose: "",
    target: "30〜40代女性",
    placement: "ECサイト内",
    intent: [],
    role: "",
    tools: [],
    time: "",
    result: "",
    sets: [
      {
        title: "美白ケアレベルで選べるセット 10%OFF",
        images: [
          { src: "/images/design/banner-whitening-set-pc.webp", alt: "美白ケアレベルで選べるセット 10%OFF バナー（横長）", width: 2000, height: 667, device: "pc" },
          { src: "/images/design/banner-whitening-set-sp.webp", alt: "美白ケアレベルで選べるセット 10%OFF バナー", width: 1296, height: 1213, device: "sp" },
        ],
        description:
          "淡いブルーからパープルへのグラデーションで、透明感のある肌をイメージさせるデザインにしました。3つのセットはモデル写真と商品を並べ、A・B・Cのラベルを色分けすることで、違いを比べながら選べるようにしています。「10%OFF」には下線のようなグラデーションを敷き、上品さを保ちながら割引が目に留まるようにしました。",
        en: {
          title: "Choose-by-Level Whitening Sets 10% OFF",
          description:
            "A soft gradient from blue to purple evokes clear, translucent skin. Each of the three sets pairs a model photo with its products, and color-coded A/B/C labels make it easy to compare and choose. A gradient underline beneath \"10% OFF\" draws the eye to the discount while keeping the look elegant.",
        },
      },
      {
        title: "口コミサービスリニューアル スタートキャンペーン",
        images: [
          { src: "/images/design/banner-review-renewal-pc.webp", alt: "口コミサービスリニューアル スタートキャンペーン バナー（横長）", width: 2204, height: 874, device: "pc" },
          { src: "/images/design/banner-review-renewal-sp.webp", alt: "口コミサービスリニューアル スタートキャンペーン バナー", width: 1380, height: 1406, device: "sp" },
        ],
        description:
          "口コミサービスのリニューアルを記念したキャンペーンとして、ピンクを基調にプレゼントボックスとコインを添え、お祝いの華やかさとポイントがもらえる楽しさを表現しました。「500ポイント」は大きく赤で見せ、特典がひと目で伝わるようにしています。キャンペーン期間は帯にまとめ、見落とさないようにしました。",
        en: {
          title: "Review Service Renewal Launch Campaign",
          description:
            "For a campaign celebrating the renewal of the review service, a pink base with gift boxes and coins conveys a festive mood and the fun of earning points. \"500 points\" is set large in red so the reward is clear at a glance, and the campaign period sits in a band so it isn't missed.",
        },
      },
      {
        title: "口コミ投稿 ポイントプレゼント",
        images: [
          { src: "/images/design/banner-review-point-pc.webp", alt: "口コミ投稿で300ポイントプレゼント バナー（横長）", width: 1991, height: 790, device: "pc" },
          { src: "/images/design/banner-review-point-sp.webp", alt: "口コミ投稿で300ポイントプレゼント バナー", width: 1243, height: 1266, device: "sp" },
        ],
        description:
          "対象商品のテクスチャーを背景に取り入れ、質感や色味が伝わるデザインにしました。ベージュとブラウンで全体をまとめ、商品の写真になじむ落ち着いた雰囲気にしています。「300ポイント」を大きく見せ、口コミ投稿でもらえる特典がひと目で伝わるようにしました。",
        en: {
          title: "Review Post Point Reward",
          description:
            "Textures of the featured products are worked into the background so their feel and color come across. Beige and brown tie everything together into a calm mood that blends with the product photos. \"300 points\" is set large so the reward for posting a review is clear at a glance.",
        },
      },
      {
        title: "LINE公式アカウント 友だち募集",
        images: [
          { src: "/images/design/banner-cosme-3.webp", alt: "LINE公式アカウント 友だち募集バナー（横長）", width: 1200, height: 400, device: "pc" },
          { src: "/images/design/banner-cosme-2.webp", alt: "LINE公式アカウント 友だち募集バナー", width: 750, height: 700, device: "sp" },
        ],
        description:
          "LINEのブランドカラーであるグリーンを基調に、500円OFFクーポンがもらえるお得感を、紙吹雪を使ったパーティーのような明るく元気なデザインで表現しました。スマートフォンを持つ手のイラストを添え、LINEで友だち登録するイメージが伝わるようにしています。",
        en: {
          title: "LINE Official Account Sign-ups",
          description:
            "Built around LINE's signature green, the banner expresses the value of a ¥500-off coupon with a bright, upbeat, party-like design full of confetti. An illustration of a hand holding a smartphone helps people picture adding the account as a friend on LINE.",
        },
      },
      {
        title: "この時期におすすめ プラスワン商品",
        images: [
          { src: "/images/design/banner-plus-one-pc.webp", alt: "透明美肌に差をつける プラスワン商品 バナー（横長）", width: 2000, height: 667, device: "pc" },
          { src: "/images/design/banner-plus-one-sp.webp", alt: "透明美肌に差をつける プラスワン商品 バナー", width: 1299, height: 1211, device: "sp" },
        ],
        description:
          "梅雨の時期に合わせて紫陽花を四隅に配置し、淡いブルーとパープルで季節感と透明感を表現しました。商品は動きのある角度で散りばめ、軽やかでいろいろな商品を選ぶ楽しさが伝わるようにしています。「透明美肌」にはゴールドを使い、肌がきれいに見えるイメージを印象づけました。",
        en: {
          title: "Seasonal Pick: Plus-One Products",
          description:
            "Hydrangeas in each corner match the rainy season, and soft blues and purples convey both the season and a sense of clarity. Products are scattered at lively angles to feel light and to suggest the fun of choosing from a range of items. \"Clear, radiant skin\" is set in gold to leave an impression of beautiful-looking skin.",
        },
      },
      {
        title: "WEB SALE",
        images: [
          { src: "/images/design/banner-web-sale-pc.webp", alt: "WEB SALE 最大50%OFF バナー（横長）", width: 1200, height: 400, device: "pc" },
          { src: "/images/design/banner-web-sale-sp.webp", alt: "WEB SALE 最大50%OFF バナー", width: 750, height: 700, device: "sp" },
        ],
        description:
          "水面の写真とブルーを基調に、夏らしい清涼感を表現しました。「最大50％OFF」にはアクセントとなるオレンジを使い、涼しげな雰囲気の中でも割引率がひと目で伝わるようにしています。",
        en: {
          title: "Web Sale",
          description:
            "A water-surface photo and a blue palette create a fresh, summery coolness. \"Up to 50% OFF\" is set in an accent orange so the discount stands out at a glance, even within the cool mood.",
        },
      },
      {
        title: "夏のお買い物応援クーポン",
        images: [
          { src: "/images/design/banner-summer-coupon-pc.webp", alt: "夏のお買い物応援 10%OFFクーポン バナー（横長）", width: 1200, height: 400, device: "pc" },
          { src: "/images/design/banner-summer-coupon-sp.webp", alt: "夏のお買い物応援 10%OFFクーポン バナー", width: 750, height: 700, device: "sp" },
        ],
        description:
          "ファブリック商品を扱うコレクションに合わせ、布の風合いを感じる背景を取り入れました。ベージュとブラウンを基調に、ブランドに合う落ち着いた雰囲気にまとめています。「10％OFF」を大きく見せ、クーポン番号は赤い帯で強調することで、お得感と使いやすさを意識しました。",
        en: {
          title: "Summer Shopping Coupon",
          description:
            "To match a collection of fabric products, the background brings in the feel of woven cloth. Beige and brown give it a calm mood that suits the brand. \"10% OFF\" is set large and the coupon code is highlighted in a red band, aiming for a sense of value and ease of use.",
        },
      },
    ],
    en: {
      kind: "Client Work (brand undisclosed)",
      target: "Women in their 30s–40s",
      placement: "On the e-commerce site",
      summary:
        "Banners created for a cosmetics maker's e-commerce site. The brand name is kept private, and some images have been replaced for this portfolio. Seven campaigns with different content and design are featured here. Even within one brand, the look shifts to fit each campaign's goal and season. Each campaign is shown in its desktop and mobile versions.",
    },
  },
  {
    key: "app",
    cover: "/images/design/sns-ad-thumbnail.webp",
    kind: "実案件",
    summary: "",
    purpose: "Uplyアプリのダウンロード数を増やします。",
    target: "転職を考えている求職者。求人を探す手間を減らしたい人",
    placement: "InstagramなどのSNS広告／1080×1350",
    intent: [
      "アプリのテーマカラーのオレンジで統一し、ブランドを覚えてもらえるようにしました。",
      "実際のアプリ画面を見せ、「応募」「スキップ」のスタンプでスワイプ操作を直感的に伝えました。",
      "App StoreボタンとQRコードを下部に置き、その場でダウンロードできるようにしました。",
    ],
    role: "",
    tools: [],
    time: "",
    result: "",
    en: {
      kind: "Client Work",
      purpose: "Drive downloads of the Uply app",
      target: "Job seekers considering a career change who want to spend less time searching for jobs",
      placement: "Social media ads such as Instagram / 1080×1350",
      intent: [
        "Everything is unified in the app's signature orange so the brand sticks",
        "Real app screens with \"Apply\" and \"Skip\" stamps make the swipe interaction instantly clear",
        "The App Store button and QR code sit at the bottom so viewers can download on the spot",
      ],
    },
  },
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
