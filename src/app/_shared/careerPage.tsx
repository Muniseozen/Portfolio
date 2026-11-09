import { Metadata } from "next";
import Career from "@/components/Career";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { messages, type Locale } from "@/i18n/messages";

// /career と /en/career で共通のページ

export function careerMetadata(locale: Locale): Metadata {
  const description = messages[locale].career.tagline;
  return {
    title: "Career | Munise Haruyama",
    description,
    openGraph: { title: "Career | Munise Haruyama", description, type: "article" },
  };
}

export default function CareerPage() {
  return (
    <PageTransition>
      <Navigation variant="detail" />
      <main className="pt-16">
        <Career />
      </main>
      <Footer />
    </PageTransition>
  );
}
