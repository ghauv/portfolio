import { UXProject } from "@/types/projects.types";

export const emblemData: UXProject = {
  id: 6,
  slug: "emblem",
  category: "ux",
  subcategory: "projects",
  published: true,

  // Project card data
  title: "Emblem",
  description:
    "Création application mobile pour la gestion d'offres étudiantes à Grenoble",

  images: [
    "https://i.ibb.co/7dX43Twf/emblem-1.png",
    "https://i.ibb.co/WpqyywVj/Liste-Cadeaux.png",
    "https://i.ibb.co/vCMnHfdv/emblem-2.png",
  ],
  deviceType: "mobile",
  template: "web",

  tags: ["Mobile", "Map"],

  // Detailed project
  content: {
    articleTitle: "Application mobile pour offres étudiantes à Grenoble",
    context:
      "Les étudiants grenoblois avaient besoin d'une solution centralisée pour découvrir et bénéficier des offres et réductions qui leur sont dédiées.",
    problem:
      "Difficulté pour les étudiants à trouver et accéder aux offres partenaires, et manque de visibilité pour les commerces locaux.",
    solutionList: [
      "Création d'une application mobile centralisant toutes les offres étudiantes",
      "Intégration d'une carte interactive pour localiser les commerces partenaires",
      "Système de favoris et de notifications pour ne manquer aucune offre",
    ],
    scope:
      "Conception complète de l'application mobile Emblem pour la ville de Grenoble",
    roles: ["UX Designer", "UI Designer", "Product Designer"],
    tools: ["Figma", "User Research"],
    sections: [
      {
        title: "Carte interactive et liste d'offres",
        medias: [
          {
            type: "image",
            deviceType: "mobile",
            url: "https://i.ibb.co/7dX43Twf/emblem-1.png",
            alt: "Carte des offres",
          },
        ],
        contentTitle: "Fonctionnalités clés :",
        contentList: [
          "Carte interactive montrant tous les commerces partenaires",
          "Filtres par catégorie et proximité",
          "Détails des offres avec conditions d'utilisation",
        ],
      },
    ],
    finalSolution: {
      text: "Une application mobile complète qui facilite l'accès aux offres étudiantes et valorise les commerces locaux grenoblois.",
    },
    conclusion:
      "Emblem crée un lien direct entre étudiants et commerces locaux, bénéficiant aux deux parties.",
  },
};
