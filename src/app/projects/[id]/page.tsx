import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects, getProjectBySlug } from "@/data/projects";
import ProjectDetailContent from "@/components/ProjectDetailContent";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectBySlug(id);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title.replace("\n", " ")} | Munise Haruyama`,
    description: project.description,
    openGraph: {
      title: `${project.title.replace("\n", " ")} | Munise Haruyama`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectBySlug(id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailContent slug={id} />;
}
