// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { allProjects } from "@/data/projects";
import { UxProjectContent } from "@/components/ux-project-detailed-content";
import { UXProject } from "@/types/projects.types";
import { BackToProjectsButton } from "@/components/back-to-projects-button";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const project = await allProjects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto px-6  pt-10 mt:py-16 md:mt-8">
        <div className="pt-16 md:pt-8">
          <BackToProjectsButton project={project} />
        </div>
      </div>
      {project.category === "ux" && (
        <UxProjectContent project={project as UXProject} />
      )}
    </div>
  );
}
