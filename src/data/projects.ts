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
  screens?: { src: string; label: string; title: string; width: number; height: number }[]; // 縦長のスマホ画面を並べて見せる（各画面は枠内スクロール）
  duration: string;
  team: string;
  status: string;
  category: "work" | "personal";
  type: "web" | "app";
  roleBreakdown: { title: string; tasks: string[] }[];
  challenges: { problem: string; solution: string }[];
  points?: { title: string; body: string }[]; // デザインの工夫（Overview の概要文の下に表示）
  en: ProjectText; // 英語版の文章
}

type ProjectText = Pick<Project, "title" | "subtitle" | "description" | "longDescription" | "role" | "roleBreakdown" | "challenges" | "screens" | "points">;

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
    title: "ECサイト 美容コラム",
    subtitle: "Web / Editorial Design / SP",
    description:
      "30〜40代の女性に向けた連載美容コラムから、3号をピックアップして紹介。",
    longDescription:
      "30〜40代の女性に向けた、連載美容コラムのページデザイン。シリーズの中から、「UVケア」「毛穴ケア」「コラーゲン」をテーマにした3号をピックアップして紹介する。美容の知識を日々のお手入れに役立ててもらえるよう、親しみやすく読みやすいページにまとめた。",
    points: [
      { title: "30〜40代の女性に合う雰囲気づくり", body: "淡い配色と繊細な装飾を取り入れ、女性らしく、落ち着いた印象にまとめた。美容の知識を扱うページとして、親しみやすさと清潔感を意識している。" },
      { title: "長い文章を読みやすく整理", body: "内容のまとまりごとに見出しや囲みを設け、ポイントとなる言葉は色や文字の大きさで強調した。説明が続く部分にも余白を取り、スマートフォンで少しずつ読み進めやすい構成にしている。" },
      { title: "内容に合わせた見せ方の工夫", body: "比較する情報は横に並べ、手順やポイントは番号で整理するなど、内容に合わせてレイアウトを変えた。図解やイラストも組み合わせ、美容の知識を視覚的に理解しやすくしている。" },
      { title: "シリーズとしての統一感と変化", body: "タイトルや見出しの基本ルールをそろえながら、各テーマに合わせてアクセントカラーや囲みの形を変えた。同じシリーズだと分かりつつ、それぞれの内容に合ったデザインにしている。" },
    ],
    role: "Planner / Designer",
    tech: ["Editorial Design", "Figma"],
    gradient: "from-[#c2456e] via-[#d4567e] to-[#e88560]",
    emoji: "&#x1F484;",
    screens: [
      { src: "/images/projects/beauty-column-vol10.webp", label: "vol.10", title: "UVケアと紫外線にまつわる豆知識", width: 750, height: 9316 },
      { src: "/images/projects/beauty-column-vol11.webp", label: "vol.11", title: "大人の毛穴ケア対策ガイド", width: 750, height: 9574 },
      { src: "/images/projects/beauty-column-vol12.webp", label: "vol.12", title: "美肌のカナメ「コラーゲン」の上手な摂り方", width: 750, height: 8764 },
    ],
    duration: "",
    team: "",
    status: "Completed",
    category: "work",
    type: "web",
    roleBreakdown: [],
    challenges: [],
    en: {
      title: "E-commerce Beauty Column",
      subtitle: "Web / Editorial Design / SP",
      description:
        "Three issues picked from a beauty column series aimed at women in their 30s and 40s.",
      longDescription:
        "Page design for a beauty column series aimed at women in their 30s and 40s. Here I've picked three issues from the series, on UV care, pore care, and collagen. The pages are friendly and easy to read, so readers can put beauty knowledge to use in their daily skincare.",
      points: [
        { title: "A look suited to women in their 30s and 40s", body: "Pale colors and delicate ornaments create a feminine, calm impression. As pages about beauty knowledge, they aim to feel approachable and clean." },
        { title: "Making long text easy to read", body: "Each block of content gets its own heading or box, and key words are emphasized with color and type size. Generous spacing around longer explanations lets readers move through the article bit by bit on a smartphone." },
        { title: "Layouts that fit the content", body: "Information to compare sits side by side, while steps and key points are numbered, so the layout changes to suit the content. Diagrams and illustrations make beauty knowledge easier to grasp visually." },
        { title: "Consistency and variety across the series", body: "Titles and headings follow shared rules, while accent colors and box shapes change with each theme, so the pages read as one series yet each suits its own topic." },
      ],
      role: "Planner / Designer",
      roleBreakdown: [],
      challenges: [],
      screens: [
        { src: "/images/projects/beauty-column-vol10.webp", label: "Vol. 10", title: "Fun facts about UV care and ultraviolet rays", width: 750, height: 9316 },
        { src: "/images/projects/beauty-column-vol11.webp", label: "Vol. 11", title: "A guide to pore care for adults", width: 750, height: 9574 },
        { src: "/images/projects/beauty-column-vol12.webp", label: "Vol. 12", title: "How to get the most out of collagen", width: 750, height: 8764 },
      ],
    },
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
  { src: "/images/design/banner-cosme-1.webp", alt: "口コミサービス リニューアル告知バナー", width: 750, height: 700, category: "campaign" },
  { src: "/images/design/banner-cosme-2.webp", alt: "LINE公式アカウント 友だち募集バナー", width: 750, height: 700, category: "campaign" },
  { src: "/images/design/banner-cosme-3.webp", alt: "LINE公式アカウント 友だち募集バナー（横長）", width: 1200, height: 400, category: "campaign" },
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
  en?: Partial<Pick<GraphicCategory, "kind" | "summary" | "purpose" | "target" | "placement" | "intent" | "role" | "time" | "result">>; // 英語版の文章
};

// 並び順 = トップのカード順・詳細ページの番号順
export const graphicCategories: GraphicCategory[] = [
  {
    key: "recruit",
    cover: "/images/design/recruit-cover.webp",
    kind: "実案件",
    summary: "SES企業の求人媒体・アプリ内に掲載する採用バナー15点を制作。",
    purpose: "未経験からIT業界への転職を検討している方に、研修制度や働く環境を伝え、求人への関心と応募につなげる。",
    target: "IT業界に興味があり、未経験からキャリアを築きたい女性。仕事内容やスキル習得に不安があり、教育体制や働きやすさを重視する方。",
    placement: "",
    intent: [
      "求人サイトに並ぶ多数の求人の中でも目を引くよう、鮮やかな配色とメリハリのある文字・図形の配置を取り入れた。社員の笑顔や動きのあるポーズを大きく見せることで、若手社員が活躍する、明るく活気のある社風を表現している。",
      "各バナーでは「研修制度」「休日」「子育て支援」など、求職者の関心に合わせて訴求を変え、挑戦を支える環境や働きやすさを伝えた。「この仲間と一緒に働きたい」「ここで新しいキャリアに挑戦したい」と感じてもらえるデザインを目指した。",
    ],
    role: "",
    tools: [],
    time: "",
    result: "バナー変更後、求人のクリック数が従来の約3倍に増加した。",
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
    kind: "実案件",
    summary: "",
    purpose: "口コミ機能のリニューアルを告知し、LINE公式アカウントの友だち登録を増やす",
    target: "化粧品ECサイトの利用者。口コミを参考に商品を選びたい人や、お得な情報をいち早く知りたい人",
    placement: "ECサイト内のバナー枠／750×700・1200×400",
    intent: [
      "口コミ告知はブランドに合わせたピンク基調にし、「WEBでも！アプリでも！」を大きく見せて、どちらからでも使えることを伝える",
      "LINEバナーはLINEのブランドカラーの緑を使い、ひと目でLINEの告知だと分かるようにする",
      "「500円OFFクーポン」を吹き出しで目立たせ、友だち登録のメリットを最初に伝える",
    ],
    role: "",
    tools: [],
    time: "",
    result: "",
    en: {
      kind: "Client Work",
      purpose: "Announce the renewal of the review feature and grow followers of the LINE official account",
      target: "Shoppers on a cosmetics e-commerce site — people who choose products based on reviews, and those who want to hear about deals first",
      placement: "Banner slots on the e-commerce site / 750×700, 1200×400",
      intent: [
        "The review announcement uses a pink palette that matches the brand, with \"On the web! In the app!\" set large to show it works on both",
        "The LINE banners use LINE's signature green so they are instantly recognizable as a LINE announcement",
        "The ¥500-off coupon is highlighted in a speech bubble so the benefit of adding the account comes across first",
      ],
    },
  },
  {
    key: "app",
    cover: "/images/design/sns-ad-thumbnail.webp",
    kind: "実案件",
    summary: "",
    purpose: "Uplyアプリのダウンロードを増やす",
    target: "転職を考えている求職者。求人を探す手間を減らしたい人",
    placement: "InstagramなどのSNS広告／1080×1350",
    intent: [
      "アプリのテーマカラーのオレンジで統一し、ブランドを覚えてもらえるようにする",
      "実際のアプリ画面を見せ、「応募」「スキップ」のスタンプでスワイプ操作を直感的に伝える",
      "App StoreボタンとQRコードを下部に置き、その場でダウンロードできるようにする",
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
