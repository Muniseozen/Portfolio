import { notFound } from "next/navigation";
import { Metadata } from "next";
import { graphicCategories } from "@/data/projects";
import { messages, localize, type Locale } from "@/i18n/messages";
import GraphicDetailContent from "@/components/GraphicDetailContent";

// /design/[category] と /en/design/[category] で共通のページ

type Props = { params: Promise<{ category: string }> };

export function generateStaticParams() {
  return graphicCategories.map((cat) => ({ category: cat.key }));
}

export function designMetadata(locale: Locale) {
  return async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category } = await params;
    const found = graphicCategories.find((c) => c.key === category);

    if (!found) {
      return { title: "Not Found" };
    }

    const cat = localize(found, locale);
    const title = `${messages[locale].projects.graphicCategories[cat.key]} | Munise Haruyama`;
    return {
      title,
      description: cat.summary || cat.purpose,
      openGraph: { title, description: cat.summary || cat.purpose, type: "article" },
    };
  };
}

export default async function GraphicCategoryPage({ params }: Props) {
  const { category } = await params;

  if (!graphicCategories.some((c) => c.key === category)) {
    notFound();
  }

  return <GraphicDetailContent categoryKey={category} />;
}
