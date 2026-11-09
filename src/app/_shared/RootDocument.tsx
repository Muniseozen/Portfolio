import { Geist, Geist_Mono, Noto_Sans_JP, Fraunces } from "next/font/google";
import "../globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import { LocaleProvider } from "@/i18n/LocaleContext";
import type { Locale } from "@/i18n/messages";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  display: "swap",
});

// (ja) と en の2つのルートレイアウトで共通の <html> / <body>
export default function RootDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansJp.variable} ${fraunces.variable} antialiased`}
      >
        <LocaleProvider locale={locale}>
          <CustomCursor />
          <ScrollProgress />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
