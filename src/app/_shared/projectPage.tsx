import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects, getProjectBySlug } from "@/data/projects";
import { localize, type Locale } from "@/i18n/messages";
import ProjectDetailContent from "@/components/ProjectDetailContent";
import ComingSoon from "@/components/ComingSoon";

// /projects/[id] と /en/projects/[id] で共通のページ

type Props = { params: Promise<{ id: string }> };

const comingSoonSlugs = ["mycloset"];

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.slug }));
}

export function projectMetadata(locale: Locale) {
  return async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const found = getProjectBySlug(id);

    if (!found) {
      return { title: "Project Not Found" };
    }

    const project = localize(found, locale);
    const title = `${project.title.replace("\n", " ")} | Munise Haruyama`;
    return {
      title,
      description: project.description,
      openGraph: { title, description: project.description, type: "article" },
    };
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectBySlug(id);

  if (!project) {
    notFound();
  }

  if (comingSoonSlugs.includes(id)) {
    return <ComingSoon title={project.title} />;
  }

  return <ProjectDetailContent slug={id} />;
}
