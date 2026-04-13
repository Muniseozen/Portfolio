import { Metadata } from "next";
import Career from "@/components/Career";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Career | Munise Haruyama",
  description:
    "テスターから開発リードへ。4年間の成長軌跡。",
  openGraph: {
    title: "Career | Munise Haruyama",
    description: "テスターから開発リードへ。4年間の成長軌跡。",
    type: "article",
  },
};

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
