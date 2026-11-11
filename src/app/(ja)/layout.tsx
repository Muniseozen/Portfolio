import type { Metadata } from "next";
import RootDocument from "@/app/_shared/RootDocument";

export const metadata: Metadata = {
  title: "Munise Haruyama | Designer & Developer",
  description:
    "UI/UXデザインを軸に、iOSアプリやWebの実装まで手がける Munise Haruyama のポートフォリオです。",
  openGraph: {
    title: "Munise Haruyama | Designer & Developer",
    description:
      "UI/UXデザインを軸に、iOSアプリやWebの実装まで手がける Munise Haruyama のポートフォリオです。",
    type: "website",
  },
};

export default function JaLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument locale="ja">{children}</RootDocument>;
}
