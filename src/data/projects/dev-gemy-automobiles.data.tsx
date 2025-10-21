import { DevProject } from "@/types/projects.types";

export const gemyAutomobilesData: DevProject = {
  id: 11,
  slug: "gemy-automobiles",
  category: "dev",
  subcategory: "teamProjects",
  published: true,

  // Project card data
  title: "Gemy Automobiles",
  description: "Refonte du site du concessionnaire automobile",

  images: [
    "https://i.ibb.co/jkGXkY85/Capture-d-e-cran-2025-10-18-a-15-32-57.png",
  ],
  deviceType: "laptop",
  template: "web",

  tags: ["Web", "Refine", "Node.js"],

  // Detailed project
  content: {
    articleTitle: "Plateforme web pour Gemy Automobiles",
    context:
      "Gemy Automobiles, concessionnaire automobile, avait besoin d'une plateforme web moderne pour présenter son catalogue et faciliter la prise de contact avec les clients.",
    realization:
      "Développement d'une plateforme web avec Refine, framework React pour applications data-intensive. Backend Node.js pour la gestion du catalogue de véhicules et des demandes clients. Interface d'administration pour la gestion du stock et des informations véhicules. Système de filtrage avancé et de recherche pour faciliter la navigation dans le catalogue.",
  },
};
