import { UXProject } from "@/types/projects.types";

export const applePlanUXData: UXProject = {
  id: 3,
  slug: "apple-plan",
  category: "ux",
  subcategory: "redesigns",
  published: true,

  // Project card data
  title: "Apple Plan",
  description: "Redesign et intégration des filtres",

  images: [
    "https://i.ibb.co/wFdgnkTG/BAD-Location-01-3.png",
    "https://i.ibb.co/7xff8mwc/bad-2.png",
    "https://i.ibb.co/jP09qk8M/bad-3.png",
  ],
  deviceType: "mobile",
  template: "web",

  tags: ["Mobile", "Filtres"],

  // Detailed project
  content: {
    articleTitle: "Redesign de l'application Apple Plan",
    context:
      "Apple Plan est une application de navigation utilisée quotidiennement par des millions d'utilisateurs.",
    problem:
      "L'interface des filtres de recherche manquait de clarté et d'intuitivité, rendant difficile la personnalisation des recherches.",
    solutionList: [
      "Redesign complet de l'interface des filtres",
      "Amélioration de la hiérarchie visuelle",
      "Simplification du processus de filtrage",
    ],
    scope:
      "Redesign non sollicité de l'interface des filtres de l'application Apple Plan",
    roles: ["UX Designer", "UI Designer"],
    tools: ["Figma"],
    sections: [
      {
        title: "Système de filtres redesigné",
        medias: [
          {
            type: "image",
            deviceType: "mobile",
            url: "https://i.ibb.co/wFdgnkTG/BAD-Location-01-3.png",
            alt: "Filtres redesignés",
          },
        ],
        contentTitle: "Améliorations apportées :",
        contentList: [
          "Interface de filtrage plus claire et intuitive",
          "Meilleure organisation des catégories",
          "Feedback visuel amélioré lors de la sélection",
        ],
      },
    ],
    finalSolution: {
      text: "Un système de filtres repensé qui améliore significativement l'expérience utilisateur lors de la recherche de lieux.",
    },
    conclusion:
      "Ce redesign démontre comment une interface de filtrage bien pensée peut améliorer l'efficacité de la recherche.",
  },
};
