import type { Metadata } from "next";
import { LocaleProvider } from "@/i18n/LocaleContext";

export const metadata: Metadata = {
  title: "Munise Haruyama | Designer × Developer",
  description:
    "UI/UX Designer who codes. Specializing in web applications, mobile apps, and UI/UX design.",
  openGraph: {
    title: "Munise Haruyama | Designer × Developer",
    description:
      "UI/UX Designer who codes. Specializing in web applications, mobile apps, and UI/UX design.",
    type: "website",
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <LocaleProvider locale="en">{children}</LocaleProvider>;
}
