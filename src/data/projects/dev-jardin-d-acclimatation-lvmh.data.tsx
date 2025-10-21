import { DevProject } from "@/types/projects.types";

export const jardinAcclimatationData: DevProject = {
  id: 9,
  slug: "jardin-d-acclimatation-lvmh",
  category: "dev",
  subcategory: "teamProjects",
  published: true,

  // Project card data
  title: "Jardin d'Acclimatation LVMH",
  description: "Refonte du site vitrine du parc",

  images: [
    "https://i.ibb.co/QvM8P9Y4/Capture-d-e-cran-2025-10-18-a-15-30-07.png",
  ],
  deviceType: "laptop",
  template: "web",

  tags: [
    "Web",
    "Prismic",
    "Next.js",
    "Nest.js",
    "AzureDevOps",
    "Adyen",
    "Billetterie GTS Vision",
  ],

  // Detailed project
  content: {
    articleTitle: "Site web du Jardin d'Acclimatation",
    context:
      "Le Jardin d'Acclimatation, parc d'attractions parisien historique, avait besoin d'un site moderne pour améliorer l'expérience visiteur et faciliter la vente de billets.",
    realization:
      "Développement d'un site web performant avec Next.js et Nest.js. Intégration de Prismic pour la gestion du contenu multilingue. Mise en place d'Adyen pour les transactions sécurisées. Intégration complète du système de billetterie GTS Vision pour la réservation en ligne. Architecture déployée sur Azure avec Azure DevOps pour l'intégration continue.",
  },
};
