import { DevProject } from "@/types/projects.types";

export const satisfyRunningData: DevProject = {
  id: 10,
  slug: "satisfy-running",
  category: "dev",
  subcategory: "teamProjects",
  published: true,

  // Project card data
  title: "Satisfy Running",
  description: "Refonte du site e-commerce de la marque",

  images: [
    "https://i.ibb.co/84D85pK3/Capture-d-e-cran-2025-10-18-a-15-31-07.png",
  ],
  deviceType: "laptop",
  template: "web",

  tags: ["Web", "Shopify", "Klavio"],

  // Detailed project
  content: {
    articleTitle: "Site e-commerce Satisfy Running",
    context:
      "Satisfy Running, marque premium de vêtements de course, nécessitait une refonte complète de son site e-commerce pour améliorer les conversions et l'expérience d'achat.",
    realization:
      "Développement d'une boutique en ligne moderne sur Shopify. Personnalisation avancée du thème pour refléter l'identité visuelle de la marque. Intégration de Klaviyo pour l'automatisation du marketing et la personnalisation des communications clients. Optimisation des performances et de l'expérience mobile. Mise en place de flux d'emails automatisés pour l'engagement client.",
  },
};
