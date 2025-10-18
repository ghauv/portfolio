"use client";

import { ProjectCard } from "@/components/project-card";
import SubCategoryButtons from "@/components/subcategory-button";
import { Project, uxProjects, devProjects } from "@/mocks/portfolio.mock";
import { Focus, SubCategory } from "@/types/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function Portfolio() {
  const searchParams = useSearchParams();
  const focus = (searchParams.get("focus") || "ux") as Focus;

  const [subCategory, setSubCategory] = useState<SubCategory>("all");

  useEffect(() => {
    setSubCategory("all");
  }, [focus]);

  // Filtrer les projets
  const mainProjects = (() => {
    switch (focus) {
      case "ux":
        return uxProjects;
      case "dev":
        return devProjects;
      default:
        return uxProjects;
    }
  })();
  const displayedProjects =
    subCategory === "all"
      ? mainProjects
      : mainProjects.filter((p) => p.subcategory === subCategory);

  return (
    <section id="portfolio" className="min-h-screen section-padding">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <h2 className="text-xl md:text-3xl font-light tracking-tight text-foreground mb-1">
            Portfolio
          </h2>
          {/* <p className="text-md text-neutral-500 max-w-2xl">
            Une sélection de projets UX et de redesigns non sollicités
          </p> */}
        </div>

        <SubCategoryButtons
          focus={focus}
          activeSubCategory={subCategory}
          onSubCategoryChange={setSubCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16 ">
          {displayedProjects.map((project: Project, index: number) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
