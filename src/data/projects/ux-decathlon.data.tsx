import { UXProject } from "@/types/projects.types";

export const decathlonData: UXProject = {
  id: 1,
  slug: "decathlon",
  category: "ux",
  subcategory: "projects",
  published: true,

  // Project card data
  title: "Decathlon",
  description: "Pour l'application mobile Smart Office Decathlon",

  images: [
    "https://i.ibb.co/Y4TBYx43/Re-servation.png",
    "https://i.ibb.co/0pZ5wp3R/decath-2.png",
    "https://i.ibb.co/5WSW1vtw/decath-3.png",
  ],
  deviceType: "mobile",
  template: "web",

  tags: ["Mobile", "Smart-Office"],

  // Detailed project
  content: {
    articleTitle: "Application mobile Smart Office Decathlon",
    context:
      "Decathlon souhaitait moderniser son système de réservation de salles et d'espaces de travail pour améliorer l'expérience de ses collaborateurs.",
    problem:
      "Les collaborateurs rencontraient des difficultés pour réserver des espaces de travail et gérer leurs réservations de manière efficace.",
    solutionList: [
      "Création d'une application mobile intuitive permettant une réservation rapide",
      "Interface simplifiée avec visualisation claire des espaces disponibles",
      "Système de gestion des réservations en temps réel",
    ],
    scope: "Conception UX/UI de l'application mobile Smart Office",
    roles: ["UX Designer", "UI Designer"],
    tools: ["Figma", "Adobe XD"],
    sections: [
      {
        title: "Écrans de réservation",
        medias: [
          {
            type: "image",
            deviceType: "mobile",
            url: "https://i.ibb.co/Y4TBYx43/Re-servation.png",
            alt: "Écran de réservation",
          },
        ],
        contentTitle: "Fonctionnalités principales :",
        contentList: [
          "Visualisation des espaces disponibles en temps réel",
          "Réservation en quelques clics",
          "Gestion intuitive des réservations",
        ],
      },
    ],
    finalSolution: {
      text: "Une application mobile moderne et intuitive qui facilite la réservation d'espaces de travail pour les collaborateurs Decathlon.",
    },
    conclusion:
      "L'application Smart Office améliore significativement l'expérience des collaborateurs en simplifiant le processus de réservation.",
  },
};
