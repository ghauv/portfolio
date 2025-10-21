import { UXProject } from "@/types/projects.types";

export const atelierBizetData: UXProject = {
  id: 5,
  slug: "atelier-bizet",
  category: "ux",
  subcategory: "projects",
  published: true,

  // Project card data
  title: "Atelier Bizet",
  description:
    "Refonte du site vitrine de l'atelier afin de créer une stratégie de contenu plus efficace",

  images: [
    "https://i.ibb.co/1Ybyh5BJ/Capture-d-e-cran-2025-10-18-a-15-51-21.png",
  ],
  deviceType: "laptop",
  template: "web",

  tags: ["Web", "Haute-Couture"],

  // Detailed project
  content: {
    articleTitle: "Réécriture du site vitrine de l'atelier Bizet",
    context:
      "L'atelier Bizet est un atelier de broderie haute-couture en région parisienne, travaillant pour de grands noms de la mode et des clients privés prestigieux, qu'ils trouvent via leur réseau et leur site internet.",
    problem:
      "La clientèle cible a besoin de comprendre l'offre, l'ADN et la portée de l'atelier dans le monde de la haute-couture, puis de pouvoir le contacter aisément. L'atelier cherche aussi à renforcer sa présence dans la haute-couture.",
    solutionList: [
      "Repenser et ré-organiser le plan du site et le contenu pour devenir un support d'information clair et efficace mais aussi pour faciliter la prise de contact. Les potentiels clients et collaborateurs découvriront rapidement l'univers de l'atelier et comprendront pourquoi l'atelier Bizet se démarque des autres.",
      "Si le projet venait à bout de développement, l'augmentation de la prise de contact permettrait de valider cette hypothèse et cette solution.",
    ],
    scope:
      "Refonte complète du site vitrine de l'atelier Bizet. N'est détaillé ici que le processus de création de contenu.",
    roles: ["Stratégie de contenu", "Rédaction", "Conception visuelle"],
    tools: ["Figma"],
    copyrights: "Les photos utilisées sont des copyrights de l'Atelier Bizet.",
    sections: [
      {
        title: "Header et Hero-page",
        medias: [
          {
            type: "image",
            deviceType: "laptop",
            url: "https://i.ibb.co/SwdTxYgb/bizet-hero-avant.png",
            alt: "Avant",
          },
          {
            type: "image",
            deviceType: "laptop",
            url: "https://i.ibb.co/RT0YDQP4/bizet-hero-apres.png",
            alt: "Après",
          },
        ],
        contentTitle: "Ce que j'ai fait :",
        contentList: [
          'Réécriture de la navigation avec regroupement par catégories logiques. "Créations" en premier pour présenter l\'étendue des savoir-faire, organisés par techniques et catégories, suivi de "Références haute-couture" pour établir le positionnement premium, puis "Presse" et "Contact" pour faciliter la prise de connaissance et l\'échange.',
          "Ajout d'une image montrant une couturière travaillant sur un métier à tisser de l'atelier. Image lumineuse et de haute résolution pour souligner la qualité des réalisations.",
          "Réduction de la hauteur de la hero afin de rendre visible la prochaine section et inviter à défiler vers le bas.",
          "Choix d'une typographie serif élégante qui renforce l'identité haut de gamme et artisanale.",
          "Ajout d'une courte description pour établir immédiatement le domaine d'expertise et l'ADN de l'atelier.",
          "Suppression des options de partage peu utiles ici. ",
        ],
      },
      {
        title: "Homepage",
        medias: [
          {
            type: "image",
            deviceType: "laptop",
            url: "https://i.ibb.co/bYvMYkY/bizet-homepage-avant.png",
            alt: "Avant",
          },
          {
            type: "image",
            deviceType: "laptop",
            url: "/projects/bizet/press-after.jpg",
            alt: "Après",
          },
        ],
        contentTitle: "Ce que j'ai fait :",
        contentList: [
          "Ajout de sections faisant part des expertises, de la ligne directrice et des activités recentes de l'atelier pour offrir une vision complète de l'atelier.",
          "Section \"Dernières actualités\" avec tags clairs et visuels attractifs montrant un aperçu de l'offre, des clients prestigieux, une couverture médiatique forte et des exemples de créations. L'utilisateur saisit en un coup d'oeil l'activité, la renommée et l'expertise de l'atelier.",
          "Ajout de liens vers les contenus complets pour approfondir et offrir différentes portes d'entrée vers le site.",
          'Section "Notre engagement" exposant la vision, les valeurs et la méthodologie de travail de l\'atelier pour clarifier son positionnement dans la haute-couture.',
          "Section \"L'Atelier et ses talents\" valorisant l'âme parisienne et l'échelle humaine de l'atelier pour renforcer son authenticité artisanale.",
          "Section \"Contact rapide\" pour faciliter la prise de contact et permettre aux prospects d'initier une collaboration ou une demande de renseignements directement depuis la page d'accueil.",
        ],
      },
      {
        title: "Page références haute-couture",
        medias: [
          {
            type: "image",
            deviceType: "laptop",
            url: "https://i.ibb.co/xSCgVxNS/bizet-client-avant.png",
            alt: "Avant",
          },
          {
            type: "image",
            deviceType: "laptop",
            url: "https://i.ibb.co/21gscWHF/bizet-client-apres.png",
            alt: "Après",
          },
        ],
        contentTitle: "Ce que j'ai fait :",
        contentList: [
          "Création d'une grille visuelle présentant les logos des maisons de haute-couture partenaires pour établir immédiatement le positionnement et le réseau de l'atelier.",
          "Organisation en cartes élégantes avec visuels des créations pour chaque collaboration et description concises, contextualisant chaque partenariat et illustrant l'étendue des savoir-faire de l'atelier.",
          "Ajout de descriptions courtes pour chaque collaboration, contextualisant le savoir-faire de l'atelier",
          "Mise en page aérée avec espacements généreux pour valoriser chaque référence et maintenir une esthétique premium.",
        ],
      },
      {
        title: "Page contact",
        medias: [
          {
            type: "image",
            deviceType: "laptop",
            url: "https://i.ibb.co/9mtZpfBD/bizet-contact-avant.png",
            alt: "Avant",
          },
          {
            type: "image",
            deviceType: "laptop",
            url: "/projects/bizet/collab-after.jpg",
            alt: "Après",
          },
        ],
        contentTitle: "Ce que j'ai fait :",
        contentList: [
          "Restructuration moderne du formulaire de contact permettant aux prospects de soumettre facilement leurs demandes de collaboration ou renseignements.",
          "Ajout des liens vers les réseaux sociaux pour offrir des canaux de communication alternatifs et suivre l'actualité de l'atelier.",
          "Intégration d'une carte interactive avec l'adresse de l'atelier pour faciliter la localisation et la venue sur place.",
          "Présence en pied de chaque page pour permettre un contact rapide à tout moment de la navigation.",
        ],
      },
    ],
    finalSolution: {
      text: "La refonte de la navigation et la restructuration des sections créent une expérience claire, convaincante et centrée sur l'utilisateur, favorisant ainsi la compréhension de l'offre et encourageant la prise de contact.",
    },
    conclusion:
      "En positionnant l'atelier Bizet comme « un artisant d'art d'exception et renommé » et en créant une stratégie de contenu qui soutient cette promesse, les clients et professionnels de broderie hautes coutures devraient désormais comprendre en quoi l'atelier se distingue de la concurrence, et seront donc plus enclins à prendre contact avec l'atelier.",
  },
};
