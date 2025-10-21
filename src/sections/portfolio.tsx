"use client";

import { ProjectCard } from "@/components/project-card";
import SubCategoryButtons from "@/components/subcategory-button";
import { artProjects, devProjects, uxProjects } from "@/data/projects";
import { Project } from "@/types/projects.types";
import { Focus, SubCategory } from "@/types/types";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function PortfolioContent() {
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
      case "art":
        return artProjects;
      default:
        return uxProjects;
    }
  })();

  const displayedProjects =
    subCategory === "all"
      ? mainProjects
      : mainProjects.filter((p) => p.subcategory === subCategory);

  return (
    <section id="portfolio" className="h-fit section-padding">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-4 md:mb-8">
          <h2 className="text-xl md:text-3xl font-light tracking-tight text-foreground mb-1">
            Portfolio
          </h2>
        </div>

        <SubCategoryButtons
          focus={focus}
          activeSubCategory={subCategory}
          onSubCategoryChange={setSubCategory}
        />

        <div className={`${focus === "art" ? "pt-12 pb-12" : "pb-12"}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12 lg:gap-16 ">
            {displayedProjects.map((project: Project, index: number) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Portfolio() {
  return (
    <Suspense
      fallback={
        <section id="portfolio" className="min-h-screen section-padding">
          <div className="container mx-auto max-w-7xl">
            <div className="mb-4 md:mb-8">
              <h2 className="text-xl md:text-3xl font-light tracking-tight text-foreground mb-1">
                Portfolio
              </h2>
            </div>
            <div className="flex justify-center items-center h-64">
              <p className="text-muted-foreground">Chargement des projets...</p>
            </div>
          </div>
        </section>
      }
    >
      <PortfolioContent />
    </Suspense>
  );
}
