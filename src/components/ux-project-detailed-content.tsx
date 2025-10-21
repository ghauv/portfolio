"use client";

import { UXProject } from "@/types/projects.types";
import { DevicesFrame } from "./devices-frame";
import { clipFrame } from "./project-card";
import Media from "./media";

interface ProjectDetailProps {
  project: UXProject;
}

export function UxProjectContent({ project }: ProjectDetailProps) {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16 md:mt-8">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.title}</h1>
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

      {/* Partie 1 : Le défi */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold mb-8">Partie 1 : Le défi</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Contexte</h3>
            <p className="text-gray-700 leading-relaxed">
              {project.content.context}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Problème</h3>
            <p className="text-gray-700 leading-relaxed">
              {project.content.problem}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Solution</h3>
            {project.content.solutionList.map((solution, i) => (
              <p key={i} className="text-gray-700 leading-relaxed mb-4">
                {solution}
              </p>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Scope</h3>
            <p className="text-gray-700 leading-relaxed">
              {project.content.scope}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Rôles</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {project.content.roles.map((role, i) => (
                  <li key={i}>{role}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Outils</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {project.content.tools.map((tool, i) => (
                  <li key={i}>{tool}</li>
                ))}
              </ul>
            </div>
          </div>

          {project.content.copyrights && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Copyrights</h3>
              <p className="text-gray-700 leading-relaxed">
                {project.content.copyrights}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Partie 2 : Le processus */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold mb-12">Partie 2 : Le processus</h2>

        {project.content.sections.map((section, idx) => (
          <div key={idx} className="mb-16">
            <h3 className="text-2xl font-semibold mb-8">
              {idx + 1} - {section.title}
            </h3>

            {/* Medias */}
            <div
              className={`mb-8 grid gap-6 ${
                section.medias.length === 2 ? "md:grid-cols-2" : "grid-cols-1"
              }`}
            >
              {section.medias.map((media, mediaIdx) => (
                <Media key={mediaIdx} media={media} />
              ))}
            </div>

            {/* Content */}
            <div className="bg-gray-50 p-8 rounded-lg">
              {section.contentTitle && (
                <p
                  className={`text-gray-700 leading-relaxed font-semibold mb-2 ${
                    section.contentTitleClass
                      ? section.contentTitleClass
                      : "text-md"
                  }`}
                >
                  {section.contentTitle}
                </p>
              )}
              {section.contentText && (
                <p className="text-gray-700 leading-relaxed mb-2">
                  {section.contentText}
                </p>
              )}
              {section.contentList && (
                <ul className="space-y-3">
                  {section.contentList.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-gray-700 leading-relaxed list-disc ml-5 "
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {section.content2Title && (
                <p className="text-gray-700 leading-relaxed font-semibold mb-2 text-sm mt-8">
                  {section.content2Title}
                </p>
              )}
              {section.content2Text && (
                <p className="text-gray-700 leading-relaxed">
                  {section.content2Text}
                </p>
              )}
              {section.content2List && (
                <ul className="space-y-3">
                  {section.content2List.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-gray-700 leading-relaxed list-disc ml-5"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Partie 3 : La solution */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold mb-6">Partie 3 : La solution</h2>

        {project.content.finalSolution.medias && (
          <div className="mb-8 grid gap-6">
            {project.content.finalSolution.medias.map((media, mediaIdx) => (
              <Media key={mediaIdx} media={media} />
            ))}
          </div>
        )}
        <p className="text-gray-700 leading-relaxed text-md mb-4">
          {project.content.finalSolution.text}
        </p>
        {project.content.finalSolution.list && (
          <ul className="space-y-3 text-md">
            {project.content.finalSolution.list.map((item, itemIdx) => (
              <li
                key={itemIdx}
                className="text-gray-700 leading-relaxed list-disc ml-5"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Conclusion */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold mb-6">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          {project.content.conclusion}
        </p>
      </section>
    </article>
  );
}
