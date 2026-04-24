import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import { LocaleProvider } from "@/i18n/LocaleContext";

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

export const metadata: Metadata = {
  title: "Munise Haruyama | PM & Frontend Developer",
  description:
    "PM/UX Designer & Frontend Developer. Specializing in web applications, mobile apps, and UI/UX design.",
  openGraph: {
    title: "Munise Haruyama | PM & Frontend Developer",
    description:
      "PM/UX Designer & Frontend Developer. Specializing in web applications, mobile apps, and UI/UX design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansJp.variable} antialiased`}
      >
        <LocaleProvider locale="ja">
          <CustomCursor />
          <ScrollProgress />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
