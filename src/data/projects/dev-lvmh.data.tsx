import { DevProject } from "@/types/projects.types";

export const lvmhData: DevProject = {
  id: 7,
  slug: "lvmh",
  category: "dev",
  subcategory: "teamProjects",
  published: true,

  // Project card data
  title: "LVMH",
  description: "Refonte du site vitrine de la holding",

  images: [
    "https://i.ibb.co/FqXnt9Mm/Capture-d-e-cran-2025-10-18-a-11-02-43.png",
  ],
  deviceType: "laptop",
  template: "web",

  tags: ["Web", "Prismic", "Next.js", "Nest.js", "GCP", "Algolia", "ATS"],

  // Detailed project
  content: {
    articleTitle: "Refonte du site vitrine du groupe LVMH",
    context:
      "LVMH, premier groupe mondial de luxe, avait besoin de moderniser son site institutionnel pour refléter son prestige et son innovation.",
    realization:
      "Développement d'un site web moderne et performant utilisant Next.js pour le frontend et Nest.js pour le backend. Intégration de Prismic comme CMS headless pour une gestion flexible du contenu. Mise en place d'Algolia pour une recherche optimisée. Déploiement sur Google Cloud Platform avec une architecture scalable. Intégration d'un système ATS (Applicant Tracking System) pour la gestion des candidatures.",
  },
};
