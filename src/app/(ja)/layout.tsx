import type { Metadata } from "next";
import RootDocument from "@/app/_shared/RootDocument";

export const metadata: Metadata = {
  title: "Munise Haruyama | Designer & Developer",
  description:
    "PM/UX Designer & Frontend Developer. Specializing in web applications, mobile apps, and UI/UX design.",
  openGraph: {
    title: "Munise Haruyama | Designer & Developer",
    description:
      "PM/UX Designer & Frontend Developer. Specializing in web applications, mobile apps, and UI/UX design.",
    type: "website",
  },
};

export default function JaLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument locale="ja">{children}</RootDocument>;
}
