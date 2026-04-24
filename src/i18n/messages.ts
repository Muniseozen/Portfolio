import type { Locale } from "./config";

type Segment = { text: string; bold?: boolean };
type Paragraph = Segment[];

export type Messages = {
  hero: {
    roles: string[];
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
    values: { label: string; title: string; description: string }[];
    careerLinkDescription: string;
  };
  skills: {
    tagline: string;
    categoryTaglines: string[];
  };
  projects: {
    tagline: string;
  };
  designWorks: {
    tagline: string;
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
      roles: ["PM/プロダクトマネージャー", "UI/UX デザイナー", "フロントエンドエンジニア"],
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
          title: "認識のズレをなくす対話",
          description:
            "言葉の裏にある意図もくみ取りながら、認識のズレが出ないように対話を大切にしています。",
        },
        {
          label: "リサーチ",
          title: "ユーザーと競合から学ぶ",
          description: "ユーザーや競合を見ながら、本当に必要なものは何かを考えています。",
        },
        {
          label: "実行力",
          title: "まず形にして検証する",
          description:
            "やってみると見えることも多いので、まず形にして、そこから磨いていくことを大切にしています。",
        },
        {
          label: "成長",
          title: "学び続け、より良いものへ",
          description:
            "変化に合わせて学び続けながら、より良い形にしていくことを大切にしています。",
        },
      ],
      careerLinkDescription: "テスターから開発リードへ。4年間の成長軌跡。",
    },
    skills: {
      tagline: "企画・デザイン・実装をカバーするスキルセット。",
      categoryTaglines: [
        "体験設計からUI設計まで",
        "UIの実装とインタラクション設計",
        "ネイティブ・クロスプラットフォーム開発",
        "API連携とデータの取得・表示",
        "要件定義と開発推進管理",
      ],
    },
    projects: {
      tagline: "企画からデザイン、実装まで。何よりも先に手を動かします。",
    },
    designWorks: {
      tagline: "バナー・グラフィックなどのデザイン制作。",
    },
    career: {
      tagline: "テスターから開発リードへ。4年間の成長軌跡。",
      description:
        "テレビ制作会社でのAD経験（2020〜2022年）を経て、2023年にIT業界へ未経験転職しました。マニュアル作成・QAを経験後、自ら開発事業部の立ち上げを発案・提案し承認を獲得。ゼロから5名のチームを組成し、iOSアプリを2本リリースしました。現在はReact + TypeScriptを軸としたWebシステムの開発リードを担っています。PM・デザイン・開発の三刀流と、事業部立ち上げ経験が最大の強みです。",
      concurrent: "同時進行",
    },
  },
  en: {
    hero: {
      roles: ["Product Manager", "UI/UX Designer", "Frontend Developer"],
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
          title: "Aligning on what's truly meant",
          description:
            "I listen for the intent behind the words and work to keep everyone on the same page.",
        },
        {
          label: "RESEARCH",
          title: "Learning from users and competitors",
          description:
            "I study both user behavior and the competitive landscape to find what really matters.",
        },
        {
          label: "EXECUTION",
          title: "Ship first, refine next",
          description:
            "You see more once it's real. I build something tangible quickly, then iterate from there.",
        },
        {
          label: "GROWTH",
          title: "Always learning, always improving",
          description:
            "I adapt as things change and keep pushing the work toward something better.",
        },
      ],
      careerLinkDescription: "From QA tester to dev lead — a four-year journey.",
    },
    skills: {
      tagline: "A skill set that spans planning, design, and implementation.",
      categoryTaglines: [
        "From UX research to UI design",
        "UI implementation and interaction design",
        "Native and cross-platform mobile",
        "API integration and data display",
        "Requirements, roadmap, and delivery",
      ],
    },
    projects: {
      tagline:
        "Planning, design, implementation — I'd rather get my hands on it first.",
    },
    designWorks: {
      tagline: "Banners, graphics, and visual design work.",
    },
    career: {
      tagline: "From QA tester to dev lead — a four-year journey.",
      description:
        "After starting my career in Japanese TV production as an assistant director (2020–2022), I transitioned into IT in 2023 with no prior experience. I began in technical documentation and QA, then proposed and launched a new development division — getting executive approval, building a team of five from scratch, and shipping two iOS apps to the App Store. Today I lead the development of React + TypeScript web systems. My greatest strengths are this triple capability across PM, design, and engineering, plus hands-on experience founding a new division.",
      concurrent: "in parallel",
    },
  },
};
