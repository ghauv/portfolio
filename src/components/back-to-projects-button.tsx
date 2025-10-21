"use client";

import { useRouter } from "next/navigation";
import { Project } from "@/types/projects.types";

interface BackToProjectsButtonProps {
  project: Project;
}

export function BackToProjectsButton({ project }: BackToProjectsButtonProps) {
  const router = useRouter();

  const handleBackToProjects = () => {
    // Essayer de récupérer les valeurs depuis sessionStorage
    let category = "ux";
    let subcategory = "all";

    if (typeof window !== "undefined") {
      const storedFocus = sessionStorage.getItem("portfolioLastFocus");
      const storedSubcategory = sessionStorage.getItem(
        "portfolioLastSubcategory"
      );

      if (storedFocus) {
        category = storedFocus;
      } else {
        category = project.category || "ux";
      }

      if (storedSubcategory) {
        subcategory = storedSubcategory;
      } else {
        subcategory = project.subcategory || "all";
      }
    }

    // Rediriger vers la page principale avec les paramètres de focus et subcategory
    router.push(`/?focus=${category}&subcategory=${subcategory}`);
  };

  return (
    <button
      onClick={handleBackToProjects}
      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      Revenir aux projets
    </button>
  );
}
