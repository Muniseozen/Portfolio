import type { Metadata } from "next";
import RootDocument from "@/app/_shared/RootDocument";

export const metadata: Metadata = {
  title: "Munise Haruyama | Designer & Developer",
  description:
    "Portfolio of Munise Haruyama, a UI/UX designer who also builds iOS apps and web frontends.",
  openGraph: {
    title: "Munise Haruyama | Designer & Developer",
    description:
      "Portfolio of Munise Haruyama, a UI/UX designer who also builds iOS apps and web frontends.",
    type: "website",
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
