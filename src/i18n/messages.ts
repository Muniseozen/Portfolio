export type Locale = "ja" | "en";
export const defaultLocale: Locale = "ja";

// 英語版のパスは /en を前につける（"/" → "/en", "/career" → "/en/career"）
export function localePath(locale: Locale, path: string): string {
  if (locale === "ja") return path;
  return path === "/" ? "/en" : `/en${path}`;
}

// データの日本語を、英語版のときだけ en フィールドの内容で上書きする
export function localize<T extends { en?: object }>(item: T, locale: Locale): T {
  return locale === "en" && item.en ? { ...item, ...item.en } : item;
}

type Segment = { text: string; bold?: boolean };
type Paragraph = Segment[];

export type Messages = {
  hero: {
    descriptionBefore: string;
    descriptionHighlight: string;
    descriptionAfter: string;
    ctaWorks: string;
  };
  about: {
    tagline: string;
    selfIntroTitle: string;
    selfIntroParagraphs: Paragraph[];
    valuesTitle: string;
    values: { label: string; description: string }[];
    careerLinkDescription: string;
  };
  skills: {
    tagline: string;
    categoryTaglines: string[];
  };
  projects: {
    tagline: string;
    workLabel: string;
    personalLabel: string;
    graphicCategories: { recruit: string; app: string; campaign: string };
    graphicCount: string;
    deviceLabels: { pc: string; sp: string };
    viewAll: string;
    openPdf: string;
  };
  process: {
    intro: string;
    loopLabel: string;
    steps: { title: string; body: string }[];
  };
  career: {
    tagline: string;
    description: string;
    concurrent: string;
  };
};

export const messages: Record<Locale, Messages> = {
  ja: {
    hero: {
      descriptionBefore:
        "デザインだけでなく、実装まで見据えた設計を大切にしています。\n見た目だけで終わらない、",
      descriptionHighlight: "「成果につながるクリエイティブ」",
      descriptionAfter: "を、\nお客様のご要望に寄り添いながらご提案します。",
      ctaWorks: "つくったもの見る",
    },
    about: {
      tagline: "戦略からデザイン、実装まで。",
      selfIntroTitle: "自己紹介",
      selfIntroParagraphs: [
        [
          { text: "はじめまして、" },
          { text: "Munise（むにせ）", bold: true },
          { text: "です。" },
        ],
        [
          { text: "18歳でトルコから来日し、新卒でテレビ制作の現場へ。分刻みのスケジュールの中で" },
          { text: "「どうすれば伝わるか」", bold: true },
          { text: "を叩き込まれました。その後、未経験からIT業界に飛び込み、QA・デザイン・モバイル・Webと領域を広げながら4年が経ちました。" },
        ],
        [
          { text: "途中、自ら" },
          { text: "開発事業部の立ち上げを提案・実現", bold: true },
          { text: "し、チームを作ってアプリをリリースしました。" },
          { text: "「やってみよう」と動き出すのが割と早い方", bold: true },
          { text: "だと思っています。" },
        ],
        [
          { text: "今は" },
          { text: "フロントエンドとUIデザイン", bold: true },
          { text: "を軸に、エンジニアが実装しやすく・ユーザーが迷わないUIを考えることが自分の得意なことです。チームと一緒にプロダクトを育てていくのが好きです。" },
        ],
      ],
      valuesTitle: "大切にしていること",
      values: [
        {
          label: "コミュニケーション",
          description: "言葉の裏にある意図もくみ取り、認識のズレを防ぎます。",
        },
        {
          label: "リサーチ",
          description: "ユーザーや競合から、本当に必要なものを考えます。",
        },
        {
          label: "実行力",
          description: "まず形にして、そこから磨いていきます。",
        },
        {
          label: "成長",
          description: "変化に合わせて学び続け、より良い形にしていきます。",
        },
      ],
      careerLinkDescription: "テスターから開発リードへ。4年間の成長軌跡。",
    },
    skills: {
      tagline: "企画・デザイン・実装をカバーするスキルセット。",
      categoryTaglines: [
        "体験設計からUI設計まで",
        "UIの実装とインタラクション設計",
        "Figmaを軸にしたデザイン制作",
      ],
    },
    projects: {
      tagline: "企画からデザイン、実装まで。何よりも先に手を動かします。",
      workLabel: "実務",
      personalLabel: "個人",
      graphicCategories: { recruit: "求人バナー", app: "SNS広告", campaign: "キャンペーンバナー" },
      graphicCount: "{n}点",
      deviceLabels: { pc: "PC専用", sp: "SP専用" },
      viewAll: "タップで全体を見る",
      openPdf: "PDFを開く",
    },
    process: {
      intro: "こまめにお見せして、ご相談しながら進めます。",
      loopLabel: "必要に応じてくり返し",
      steps: [
        { title: "ご相談", body: "作りたいものや目的、ご予算、スケジュールを伺います。まだ決まっていないことがあっても大丈夫です。" },
        { title: "リサーチ", body: "ターゲットや競合を調べ、伝えるべきことを見極めます。" },
        { title: "ご提案・制作", body: "お話をもとに方向性を整理し、まずはデザイン案をお見せします。" },
        { title: "確認・調整", body: "気になる点を伺い、修正します。必要に応じて制作と確認を繰り返します。" },
        { title: "納品", body: "最終確認後、ご希望の形式でお渡しします。" },
      ],
    },
    career: {
      tagline: "テスターから開発リードへ。4年間の成長軌跡。",
      description:
        "テレビ制作会社でのAD経験（2020〜2022年）を経て、2023年にIT業界へ未経験転職しました。マニュアル作成・QAを経験後、自ら開発事業部の立ち上げを発案・提案し、承認を獲得しました。ゼロから5名のチームを組成し、iOSアプリを2本リリースしました。現在はReact + TypeScriptを軸としたWebシステムの開発リードを担っています。PM・デザイン・開発の三刀流と、事業部立ち上げ経験が最大の強みです。",
      concurrent: "同時進行",
    },
  },
  en: {
    hero: {
      descriptionBefore:
        "I design with implementation in mind — not just how it looks, but how it works.\nI craft ",
      descriptionHighlight: "\"creative work that drives real outcomes,\"",
      descriptionAfter: "\nshaped closely around each client's needs.",
      ctaWorks: "See my work",
    },
    about: {
      tagline: "Strategy, design, and implementation — end to end.",
      selfIntroTitle: "About me",
      selfIntroParagraphs: [
        [
          { text: "I'm " },
          { text: "Munise", bold: true },
          { text: " — nice to meet you." },
        ],
        [
          { text: "I moved to Japan from Turkey at 18 and started my career in TV production. Working inside minute-by-minute broadcast schedules, I learned one thing deeply: " },
          { text: "how to make things actually land.", bold: true },
          { text: " I later pivoted into IT with zero prior experience, and over the past four years I've expanded across QA, design, mobile, and web." },
        ],
        [
          { text: "Along the way, I " },
          { text: "proposed and launched a new development division from scratch", bold: true },
          { text: ", built the team, and shipped apps to the App Store. I tend to be " },
          { text: "quick to move and prototype rather than overthink.", bold: true },
        ],
        [
          { text: "Today I focus on " },
          { text: "frontend and UI design", bold: true },
          { text: " — shaping UIs that are easy to implement and easy for users to navigate. What I love most: growing products alongside the team." },
        ],
      ],
      valuesTitle: "What I value",
      values: [
        {
          label: "COMMUNICATION",
          description: "I read the intent behind the words to keep everyone aligned.",
        },
        {
          label: "RESEARCH",
          description: "I look at users and competitors to find what really matters.",
        },
        {
          label: "EXECUTION",
          description: "I build something real first, then refine it.",
        },
        {
          label: "GROWTH",
          description: "I keep learning and keep improving the work.",
        },
      ],
      careerLinkDescription: "From QA tester to dev lead — a four-year journey.",
    },
    skills: {
      tagline: "A skill set that spans planning, design, and implementation.",
      categoryTaglines: [
        "From UX research to UI design",
        "UI implementation and interaction design",
        "Design craft centered on Figma",
      ],
    },
    projects: {
      tagline:
        "Planning, design, implementation — I'd rather get my hands on it first.",
      workLabel: "Client",
      personalLabel: "Personal",
      graphicCategories: { recruit: "Recruitment Banners", app: "Social Media Ads", campaign: "Campaign Banners" },
      graphicCount: "{n} pieces",
      deviceLabels: { pc: "Desktop", sp: "Mobile" },
      viewAll: "Tap to view all",
      openPdf: "Open PDF",
    },
    process: {
      intro: "I share work early and often, and shape it together with you.",
      loopLabel: "Repeat as needed",
      steps: [
        { title: "Consultation", body: "Tell me what you'd like to make, its goals, budget, and timeline. It's fine if some things aren't decided yet." },
        { title: "Research", body: "I look into your audience and competitors to pin down what needs to come across." },
        { title: "Proposal & Design", body: "Based on our conversation, I shape the direction and show you a first design draft." },
        { title: "Review & Refine", body: "I hear what you'd like changed and revise it. We go back and forth between design and review as needed." },
        { title: "Delivery", body: "After a final check, I hand everything over in the format you prefer." },
      ],
    },
    career: {
      tagline: "From QA tester to dev lead — a four-year journey.",
      description:
        "After starting my career in Japanese TV production as an assistant director (2020–2022), I transitioned into IT in 2023 with no prior experience. I began in technical documentation and QA, then proposed and launched a new development division — getting executive approval, building a team of five from scratch, and shipping two iOS apps to the App Store. Today I lead the development of React + TypeScript web systems. My greatest strengths are this triple capability across PM, design, and engineering, plus hands-on experience founding a new division.",
      concurrent: "in parallel",
    },
  },
};
