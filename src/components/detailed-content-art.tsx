"use client";

import { ArtProject } from "@/types/projects.types";
import Image from "next/image";

interface ProjectDetailProps {
  project: ArtProject;
}

export function DetailedContentArt({ project }: ProjectDetailProps) {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16 md:mt-8">
      <header className="mb-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          {project.content.articleTitle}
        </h1>
      </header>
      <div className="relative mb-4 md:mb-8 pt-2 px-2 bg-gradient-to-br from-background via-muted/30 to-muted/50 flex ">
        <div className="w-full aspect-square overflow-hidden flex items-center">
          <Image
            src={project.image}
            alt={project.title}
            width={700}
            height={700}
          />
        </div>
      </div>

      <section className="mb-20">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Contexte</h3>
            <p className="text-gray-700 leading-relaxed">
              {project.content.realization}
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
