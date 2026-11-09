import { notFound } from "next/navigation";
import { Metadata } from "next";
import { graphicCategories } from "@/data/projects";
import { messages } from "@/i18n/messages";
import GraphicDetailContent from "@/components/GraphicDetailContent";

export function generateStaticParams() {
  return graphicCategories.map((cat) => ({ category: cat.key }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = graphicCategories.find((c) => c.key === category);

  if (!cat) {
    return { title: "Not Found" };
  }

  const title = `${messages.ja.projects.graphicCategories[cat.key]} | Munise Haruyama`;
  return {
    title,
    description: cat.description,
    openGraph: { title, description: cat.description, type: "article" },
  };
}

export default async function GraphicCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  if (!graphicCategories.some((c) => c.key === category)) {
    notFound();
  }

  return <GraphicDetailContent categoryKey={category} />;
}
