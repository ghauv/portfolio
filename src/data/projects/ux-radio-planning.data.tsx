import { UXProject } from "@/types/projects.types";

export const radioPlanningData: UXProject = {
  id: 4,
  slug: "radio-planning",
  category: "ux",
  subcategory: "projects",
  published: true,

  // Project card data
  title: "Radio Planning",
  description:
    "Refonte application mobile Smart Medical Office pour un cabinet de radiologie",

  images: [
    "https://i.ibb.co/Mk5f63Yt/radio-planing-3.png",
    "https://i.ibb.co/BVVyr7zS/radio-planing-2.png",
    "https://i.ibb.co/G4ZTygGP/radio-planing-1.png",
  ],
  deviceType: "mobile",
  template: "web",

  tags: ["Mobile", "Smart-Medical-Office", "Planning"],

  // Detailed project
  content: {
    articleTitle: "Application Smart Medical Office pour cabinet de radiologie",
    context:
      "Radio Planning est une application de gestion destinée aux cabinets de radiologie. Elle permet aux radiologues d’organiser efficacement leur emploi du temps : gardes, services hospitaliers (SCE, MSA, ICP, DDPM, etc.) et congés. L’outil facilite la consultation des plannings et l’anticipation des rotations au quotidien.​​​​​​​​​​​​​​​​",
    problem:
      "Les utilisateurs (radiologues et médecins) ont besoin de visualiser rapidement leur planning mensuel avec toutes leurs affectations et de comprendre en un coup d'œil où ils doivent se présenter chaque jour. Le calendrier doit être lisible malgré la densité d'informations. Les professionnels ont également besoin d'accéder rapidement aux détails d'une journée spécifique (horaires exacts, type de service) sans perdre de temps dans la navigation.",
    solutionList: [
      "Repenser l'interface du calendrier pour passer d'une vue liste chronologique à une vue calendrier mensuelle plus intuitive et visuelle. Simplifier la navigation et améliorer la hiérarchie de l'information pour réduire la charge cognitive. Les radiologues pourront scanner leur mois en quelques secondes, identifier les services d'un simple coup d'œil grâce aux codes couleurs optimisés, et accéder aux détails en un tap.",
      "Si le projet venait à bout de développement, l'augmentation de la prise de contact permettrait de valider cette hypothèse et cette solution.",
    ],
    scope:
      "Réalisation de la refonte complète de la feature calendrier : wireframing et maquettes haute-fidélité.",
    roles: ["Architecture de l'information", "Wireframing", "Conception UI/UX"],
    tools: ["Figma"],
    sections: [
      {
        title: "Vue globale : De la liste à la vue calendrier mensuelle",
        medias: [
          {
            type: "image",
            deviceType: "mobile",
            url: "https://i.ibb.co/sMN4TP1/radio-planning-cal-avant.jpg",
            alt: "Avant : Liste chronologique",
          },
          {
            type: "image",
            deviceType: "mobile",
            url: "https://i.ibb.co/BVVyr7zS/radio-planing-2.png",
            alt: "Après : Vue calendrier mensuelle",
          },
        ],
        contentTitle: "AVANT",
        contentTitleClass: "text-sm",
        contentList: [
          "Liste chronologique verticale par semaine : l'utilisateur devait scroller verticalement pour voir l'ensemble de son mois",
          "Visualisation limitée à quelques jours à la fois",
          "Difficile d'avoir une vue d'ensemble du planning mensuel",
          "Navigation par semaine peu intuitive (Semaine 41, Semaine 42...)",
          "Blocs de services empilés verticalement créant une densité visuelle importante",
          // "Codes couleurs nombreux mais peu distinctifs sur fond blanc",
        ],
        content2Title: "APRÈS",
        content2TitleClass: "text-sm",
        content2List: [
          "Vue calendrier mensuelle complète : affichage de tout le mois d'octobre 2025 en une seule vue",
          "Navigation mensuelle simple avec flèches latérales (< Octobre 2025 >)",
          "Tous les jours du mois visibles simultanément pour une meilleure anticipation",
          "Format calendrier universel et familier qui réduit la courbe d'apprentissage",
          "Possibilité de scanner visuellement l'ensemble du mois en quelques secondes",
          //"Palette de couleurs optimisée pour une meilleure différenciation (bleu, orange, rouge, vert, rose, jaune)",
        ],
      },
      {
        title: "Numéros de semaine et repères temporels",
        medias: [
          {
            type: "image",
            deviceType: "mobile",
            url: "https://i.ibb.co/sMN4TP1/radio-planning-cal-avant.jpg",
            alt: "Avant : Liste chronologique",
          },
          {
            type: "image",
            deviceType: "mobile",
            url: "https://i.ibb.co/BVVyr7zS/radio-planing-2.png",
            alt: "Après : Vue calendrier mensuelle",
          },
        ],
        contentTitle: "AVANT",
        contentTitleClass: "text-sm",
        contentList: [
          "Numéros de semaine affichés en gros titres (Semaine 41, 42, 43...)",
          "Séparation visuelle forte entre les semaines",
          "Focus sur la structure hebdomadaire plutôt que mensuelle",
        ],
        content2Title: "APRÈS",
        content2TitleClass: "text-sm",
        content2List: [
          "Numéros de semaine (40, 41, 42, 43, 44) affichés discrètement dans la marge gauche",
          "Information toujours accessible mais non intrusive",
          "Permet aux utilisateurs habitués à raisonner en semaines de conserver leurs repères",
        ],
      },
      {
        title: "Détails du jour sélectionné",
        medias: [
          {
            type: "image",
            deviceType: "mobile",
            url: "https://i.ibb.co/sMN4TP1/radio-planning-cal-avant.jpg",
            alt: "Avant : Liste chronologique",
          },
          {
            type: "image",
            deviceType: "mobile",
            url: "https://i.ibb.co/BVVyr7zS/radio-planing-2.png",
            alt: "Après : Vue calendrier mensuelle",
          },
        ],
        contentTitle: "AVANT",
        contentTitleClass: "text-sm",
        contentList: [
          "Horaires intégrés directement dans les blocs du calendrier (08:15, 12:15, etc.)",
          "Surcharge d'information dans la vue principale",
          "Pas de légende visible pour comprendre les codes couleurs",
          "Courbe d'apprentissage plus longue pour les nouveaux utilisateurs",
        ],
        content2Title: "APRÈS",
        content2TitleClass: "text-sm",
        content2List: [
          'Création d\'une section dédiée "Détails du jeudi 16 octobre" sous le calendrier',
          "Affichage clair des plages horaires avec codes de service : SCE : 08:00 - 13:00 (M = Matin), MSA : 14:00 - 18:00 (AM = Après-midi)",
          "Séparation visuelle nette entre vue d'ensemble et détails",
          "Les horaires précis n'apparaissent que quand nécessaire (après sélection d'un jour)",
          "Ajout d'une section \"Légende\" en bas de l'écran",
          "Permet aux nouveaux utilisateurs de comprendre immédiatement le système",
        ],
      },
      {
        title: "Navigation et architecture de l'information",
        medias: [
          {
            type: "image",
            deviceType: "mobile",
            url: "https://i.ibb.co/sMN4TP1/radio-planning-cal-avant.jpg",
            alt: "Avant : Liste chronologique",
          },
          {
            type: "image",
            deviceType: "mobile",
            url: "https://i.ibb.co/BVVyr7zS/radio-planing-2.png",
            alt: "Après : Vue calendrier mensuelle",
          },
        ],
        contentTitle: "AVANT",
        contentTitleClass: "text-sm",
        contentList: [
          "Barre de navigation en bas avec 4 icônes : Accueil, Planning, Compte PRO, Mon compte",
          'Titre "Planning" en orange dans le header',
          "Information de semaine et pourcentage affichés en haut (S / 21-30h / 24h / 99%)",
        ],
        content2Title: "APRÈS",
        content2TitleClass: "text-sm",
        content2List: [
          "Même structure de navigation conservée pour la cohérence de l'app",
          'Titre "Planning" simplifié en rouge-orangé plus doux',
          "Suppression des informations de pourcentage et d'heures de la vue principale (trop techniques pour la vue d'ensemble)",
          "Jour actuel (16) marqué visuellement par un cercle noir pour repérage immédiat",
        ],
      },
    ],
    finalSolution: {
      text: "J'ai transformé une interface de liste chronologique dense en une vue calendrier mensuelle intuitive et visuelle. La nouvelle interface permet aux radiologues de :",
      list: [
        "Visualiser l'ensemble de leur mois en un seul écran sans scroll excessif",
        "Identifier rapidement leurs services grâce aux pastilles de couleur optimisées",
        "Accéder aux détails précis (horaires, type de service) en sélectionnant un jour spécifique",
        "Naviguer facilement entre les mois avec des contrôles clairs",
        "Comprendre le système grâce à la légende accessible",
      ],
    },
    conclusion:
      "En transformant la feature calendrier d'une liste verticale à une vue mensuelle, et en séparant clairement la vue d'ensemble des détails, Radio Planning devient un outil plus efficace pour les professionnels de santé. La réduction de la charge cognitive permet aux radiologues de planifier leur mois plus sereinement, d'anticiper leurs rotations et d'accéder rapidement à l'information dont ils ont besoin au moment critique : juste avant de partir en service. Cette refonte respecte les codes familiers du calendrier tout en adaptant l'interface aux besoins spécifiques des cabinets de radiologie.",
  },
};
