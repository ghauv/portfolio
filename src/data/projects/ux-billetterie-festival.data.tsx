import { UXProject } from "@/types/projects.types";

export const billetterieFestivalData: UXProject = {
  id: 2,
  slug: "billetterie-festival",
  category: "ux",
  subcategory: "projects",
  published: true,

  // Project card data
  title: "Billetterie festival",
  description:
    "Création application web pour l'intégration d'une billetterie de groupe au festival",

  images: ["https://i.ibb.co/nqY6Cr1p/jesus-festival.png"],
  deviceType: "laptop",
  template: "web",

  tags: ["Web", "Billetterie"],

  // Detailed project
  content: {
    articleTitle: "Plateforme de billetterie pour festival",
    context:
      "Le festival nécessitait une solution de billetterie en ligne permettant la gestion de réservations de groupes.",
    problem:
      "Absence d'une plateforme dédiée pour gérer efficacement les achats de billets en groupe et les différentes catégories de places.",
    solutionList: [
      "Création d'une interface web intuitive pour l'achat de billets",
      "Système de gestion des réservations de groupe",
      "Intégration de différentes catégories de places et tarifs",
    ],
    scope: "Conception et design de la plateforme de billetterie web",
    roles: ["UX Designer", "UI Designer"],
    tools: ["Figma"],
    sections: [
      {
        title: "Interface de billetterie",
        medias: [
          {
            type: "image",
            deviceType: "laptop",
            url: "https://i.ibb.co/nqY6Cr1p/jesus-festival.png",
            alt: "Interface billetterie",
          },
        ],
        contentTitle: "Fonctionnalités clés :",
        contentList: [
          "Sélection intuitive des places",
          "Gestion des réservations de groupe",
          "Processus de paiement sécurisé",
        ],
      },
    ],
    finalSolution: {
      text: "Une plateforme web complète permettant une gestion fluide des achats de billets pour le festival.",
    },
    conclusion:
      "La solution facilite l'accès aux billets et améliore l'expérience d'achat pour les festivaliers.",
  },
};
