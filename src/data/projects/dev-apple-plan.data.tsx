import { DevProject } from "@/types/projects.types";

export const applePlanDevData: DevProject = {
  id: 12,
  slug: "apple-plan",
  category: "dev",
  subcategory: "personnalProjects",
  published: true,

  // Project card data
  title: "Apple Plan",
  description:
    "Redéveloppement de l'application et intégration de nouvelles features",

  images: [
    "https://i.ibb.co/wFdgnkTG/BAD-Location-01-3.png",
    "https://i.ibb.co/7xff8mwc/bad-2.png",
    "https://i.ibb.co/jP09qk8M/bad-3.png",
  ],
  deviceType: "mobile",
  template: "web",

  tags: ["Mobile", "Swift"],

  // Detailed project
  content: {
    articleTitle: "Clone et amélioration de l'application Apple Plan",
    context:
      "Projet personnel de redéveloppement de l'application Apple Plan pour explorer les capacités de Swift et intégrer de nouvelles fonctionnalités.",
    realization:
      "Développement d'une application iOS native en Swift. Intégration de MapKit pour la cartographie. Implémentation d'un système de filtrage avancé pour la recherche de lieux. Ajout de fonctionnalités personnalisées non présentes dans l'application originale. Gestion de la localisation en temps réel et des itinéraires. Interface utilisateur moderne avec SwiftUI.",
  },
};
