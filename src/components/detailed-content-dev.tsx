"use client";

import { DevProject } from "@/types/projects.types";
import { DevicesFrame } from "./devices-frame";
import { clipFrame } from "./project-card";

interface ProjectDetailProps {
  project: DevProject;
}

export function DetailedContentDev({ project }: ProjectDetailProps) {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16 md:mt-8">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          {project.content.articleTitle}
        </h1>
      </header>

      {"deviceType" in project && project.deviceType && (
        <div className="relative pt-2 px-2 bg-gradient-to-br from-background via-muted/30 to-muted/50 flex aspect-[16/9] overflow-y-clip mb-8 md:mb-18">
          {clipFrame(
            <DevicesFrame
              type={project.deviceType}
              title={project.title}
              image={project.images?.[0]}
              images={project.images}
              borderClass={"border-1 border-gray-200"}
              notchClass={"bg-gray-200"}
            />
          )}
        </div>
      )}

      <section className="mb-20">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Contexte</h3>
            <p className="text-gray-700 leading-relaxed">
              {project.content.context}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {project.content.realization}
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
