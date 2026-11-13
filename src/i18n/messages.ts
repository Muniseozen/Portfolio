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
    description: string;
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
    sampleNote: string;
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
  contact: {
    tagline: string;
    name: string;
    namePlaceholder: string;
    email: string;
    type: string;
    typePlaceholder: string;
    types: string[];
    message: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    lineLabelSuffix: string;
    lineTitle: string;
    lineBody: string;
    lineScan: string;
    lineButton: string;
    lineQrAlt: string;
  };
};

export const messages: Record<Locale, Messages> = {
  ja: {
    hero: {
      description:
        "アイデアを整理して、デザインして、動く形へ。\nUIデザインを軸に、iOSアプリやWebの実装、企画の整理まで関わっています。\n話して、つくって、試して。少しずつ形にしていくのが好きです。",
      ctaWorks: "つくったものを見る",
    },
    about: {
      tagline: "これまでのことと、ものづくりで大切にしていること。",
      selfIntroTitle: "自己紹介",
      selfIntroParagraphs: [
        [
          { text: "はじめまして、" },
          { text: "Munise（むにせ）" },
          { text: "です。" },
        ],
        [
          { text: "18歳で、大学進学のためにトルコから日本へ。テレビ制作の現場を経て、今は" },
          { text: "UIデザインとフロントエンド" },
          { text: "を軸に、ものづくりに取り組んでいます。" },
        ],
        [
          { text: "大切にしているのは、" },
          { text: "「どうすれば、もっと伝わるだろう？」" },
          { text: "と考えること。使う人が迷わず、開発する人も実装しやすい設計を目指しています。" },
        ],
        [
          { text: "「やってみよう」と、まず動いてみるタイプ" },
          { text: "です。関わる人の声を聞きながら、アイデアや課題、優先順位を整理し、プロジェクトを前に進めることも得意です。それぞれの得意を活かして、一緒に形にしていく時間が好きです。" },
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
      careerLinkDescription: "4年間の成長軌跡。",
    },
    skills: {
      tagline: "できることと、普段使っているツール。",
      categoryTaglines: [
        "体験設計からUI設計まで",
        "UIの実装とインタラクション設計",
        "iOSアプリの設計からリリースまで",
      ],
    },
    projects: {
      tagline: "これまでに手がけた、Web・アプリ・グラフィック。",
      workLabel: "実務",
      personalLabel: "個人",
      graphicCategories: { recruit: "求人バナー", app: "SNS広告", campaign: "ECバナー" },
      graphicCount: "{n}点",
      deviceLabels: { pc: "PC専用", sp: "SP専用" },
      viewAll: "タップで全体を見る",
      sampleNote: "実際の制作画面は公開できないため、制作実績をもとに、内容を一部変更したサンプルを掲載しています。",
    },
    process: {
      intro: "一緒に形にしていくまでの流れ。",
      loopLabel: "必要に応じて繰り返し",
      steps: [
        { title: "ご相談", body: "作りたいものや目的、ご予算、スケジュールを伺います。まだ決まっていないことがあっても大丈夫です。" },
        { title: "リサーチ", body: "ターゲットや競合を調べ、伝えるべきことを見極めます。" },
        { title: "ご提案・制作", body: "お話をもとに方向性を整理し、まずはデザイン案をお見せします。" },
        { title: "確認・調整", body: "気になる点を伺い、修正します。必要に応じて制作と確認を繰り返します。" },
        { title: "納品", body: "最終確認後、ご希望の形式でお渡しします。" },
      ],
    },
    career: {
      tagline: "4年間の成長軌跡。",
      description:
        "テレビ制作会社でのAD経験（2020〜2021年）を経て、2023年にIT業界へ未経験転職しました。マニュアル作成・テストを経験後、自ら開発部門の立ち上げを発案・提案し、承認を獲得しました。開発部長としてゼロから6名のチームを組成し、iOSアプリを2本リリースしました。その後は、アプリと連携する企業向けWeb管理システムの開発や、大手化粧品企業ECサイトの口コミ機能開発・UI/UXデザインを担当しました。PM・デザイン・開発の三刀流と、開発部門の立ち上げ経験が最大の強みです。",
      concurrent: "同時進行",
    },
    contact: {
      tagline: "お仕事のご相談は、こちらからどうぞ。",
      name: "お名前",
      namePlaceholder: "山田 太郎",
      email: "メールアドレス",
      type: "ご相談内容",
      typePlaceholder: "選択してください",
      types: ["Webサイト・LP制作", "アプリ・Webシステム開発", "UI/UXデザイン", "バナー制作", "その他"],
      message: "メッセージ",
      messagePlaceholder: "ご相談の内容をお書きください。",
      submit: "送信する",
      sending: "送信中…",
      success: "送信しました。内容を確認のうえ、ご連絡します。",
      error: "送信できませんでした。時間をおいて、もう一度お試しください。",
      lineLabelSuffix: "で",
      lineTitle: "気軽に相談する",
      lineBody: "LINEなら簡単にやりとりできます。",
      lineScan: "スマホで読み取る",
      lineButton: "LINEで友だち追加",
      lineQrAlt: "LINE公式アカウントの友だち追加用QRコード",
    },
  },
  en: {
    hero: {
      description:
        "Organizing ideas, designing them, and turning them into something that works.\nWith UI design at the core, I work across iOS and web implementation and shaping the plan.\nTalk, build, test. I love bringing things to life step by step.",
      ctaWorks: "See my work",
    },
    about: {
      tagline: "My story so far, and what I value in making things.",
      selfIntroTitle: "About me",
      selfIntroParagraphs: [
        [
          { text: "I'm " },
          { text: "Munise" },
          { text: " — nice to meet you." },
        ],
        [
          { text: "I came to Japan from Turkey at 18 to go to university. After working in TV production, I now build things with a focus on " },
          { text: "UI design and frontend" },
          { text: "." },
        ],
        [
          { text: "What I care about most is asking, " },
          { text: "\"How can this come across even better?\"" },
          { text: " I aim for a well-planned structure that users can navigate without getting lost and that developers can implement easily." },
        ],
        [
          { text: "I'm the type who says \"let's try it\" and gets moving first." },
          { text: " I'm also good at listening to the people involved, sorting out ideas, issues, and priorities, and moving projects forward. I love the time spent bringing things to life together, with everyone making the most of their strengths." },
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
      careerLinkDescription: "A four-year journey of growth.",
    },
    skills: {
      tagline: "What I can do, and the tools I use every day.",
      categoryTaglines: [
        "From UX research to UI design",
        "UI implementation and interaction design",
        "iOS apps from design to release",
      ],
    },
    projects: {
      tagline: "Web, app, and graphic work I've created so far.",
      workLabel: "Work",
      personalLabel: "Personal",
      graphicCategories: { recruit: "Recruitment Banners", app: "Social Media Ads", campaign: "E-commerce Banners" },
      graphicCount: "{n} pieces",
      deviceLabels: { pc: "Desktop", sp: "Mobile" },
      viewAll: "Tap to view all",
      sampleNote: "The actual production screens can't be made public, so these are samples based on the real work, with some content changed.",
    },
    process: {
      intro: "How we shape your idea together, step by step.",
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
      tagline: "A four-year journey of growth.",
      description:
        "After starting my career in Japanese TV production as an assistant director (2020–2021), I transitioned into IT in 2023 with no prior experience. I began in technical documentation and testing, then proposed and launched a new development department — getting executive approval, building a team of six from scratch as head of development, and shipping two iOS apps to the App Store. After that, I developed an employer web admin system connected to the app, and worked on a review feature and UI/UX design for a major cosmetics brand's e-commerce site. My greatest strengths are this triple capability across PM, design, and engineering, plus hands-on experience founding a development department.",
      concurrent: "in parallel",
    },
    contact: {
      tagline: "For project inquiries, feel free to reach out here.",
      name: "Name",
      namePlaceholder: "Jane Smith",
      email: "Email",
      type: "Inquiry type",
      typePlaceholder: "Please select",
      types: ["Website / Landing page", "App / Web system development", "UI/UX design", "Banner design", "Other"],
      message: "Message",
      messagePlaceholder: "Tell me about what you have in mind.",
      submit: "Send",
      sending: "Sending…",
      success: "Thank you! Your message has been sent. I'll get back to you soon.",
      error: "Your message couldn't be sent. Please try again later.",
      lineLabelSuffix: "",
      lineTitle: "Quick chat",
      lineBody: "Reach me faster on LINE.",
      lineScan: "Scan with your phone",
      lineButton: "Add me on LINE",
      lineQrAlt: "QR code to add the LINE official account",
    },
  },
};
