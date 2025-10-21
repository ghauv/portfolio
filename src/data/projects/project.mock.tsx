import { DeviceType } from "@/components/devices-frame";
import { DetailedProject } from "@/types/projects.types";

export const projects: DetailedProject[] = [
  {
    id: "1",
    slug: "atelier-bizet",
    title: "Réécriture du site vitrine de l'atelier Bizet",
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
            deviceType: DeviceType.LAPTOP,
            url: "https://i.ibb.co/SwdTxYgb/bizet-hero-avant.png",
            alt: "Avant",
          },
          {
            type: "image",
            deviceType: DeviceType.LAPTOP,
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
            deviceType: DeviceType.LAPTOP,
            url: "https://i.ibb.co/bYvMYkY/bizet-homepage-avant.png",
            alt: "Avant",
          },
          {
            type: "image",
            deviceType: DeviceType.LAPTOP,
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
            deviceType: DeviceType.LAPTOP,
            url: "https://i.ibb.co/xSCgVxNS/bizet-client-avant.png",
            alt: "Avant",
          },
          {
            type: "image",
            deviceType: DeviceType.LAPTOP,
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
            deviceType: DeviceType.LAPTOP,
            url: "https://i.ibb.co/9mtZpfBD/bizet-contact-avant.png",
            alt: "Avant",
          },
          {
            type: "image",
            deviceType: DeviceType.LAPTOP,
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
  {
    id: "2",
    slug: "radio-planning",
    title: "Refonte de la feature Calendrier de Radio Planning",
    context:
      "Radio Planning est une application de gestion destinée aux cabinets de radiologie et aux professionnels de santé. Elle permet aux radiologues de gérer leur emploi du temps chargé, incluant les gardes, les services hospitaliers (SCE, MSA, ICP, DDPM, etc.) et les périodes de repos. L'application est utilisée quotidiennement pour consulter les plannings et anticiper les rotations.",
    problem:
      "Les utilisateurs (radiologues et médecins) ont besoin de visualiser rapidement leur planning mensuel avec toutes leurs affectations et de comprendre en un coup d'œil où ils doivent se présenter chaque jour. Le calendrier doit être lisible malgré la densité d'informations (plusieurs services par jour, codes couleurs multiples, horaires variables). Les professionnels ont également besoin d'accéder rapidement aux détails d'une journée spécifique (horaires exacts, type de service) sans perdre de temps dans la navigation.",
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
            deviceType: DeviceType.MOBILE,
            url: "/projects/radio-planning/calendar-before.jpg",
            alt: "Avant : Liste chronologique",
          },
          {
            type: "image",
            deviceType: DeviceType.MOBILE,
            url: "/projects/radio-planning/calendar-after.jpg",
            alt: "Après : Vue calendrier mensuelle",
          },
        ],
        contentTitle: "AVANT",
        contentTitleClass: "text-sm",
        contentList: [
          "Liste chronologique verticale par semaine - L'utilisateur devait scroller verticalement pour voir l'ensemble de son mois",
          "Visualisation limitée à quelques jours à la fois",
          "Difficile d'avoir une vue d'ensemble du planning mensuel",
          "Navigation par semaine peu intuitive (Semaine 41, Semaine 42...)",
          "Blocs de services empilés verticalement créant une densité visuelle importante",
          "Codes couleurs nombreux mais peu distinctifs sur fond blanc",
        ],
        content2Title: "APRÈS",
        content2TitleClass: "text-sm",
        content2List: [
          "Vue calendrier mensuelle complète - Affichage de tout le mois d'octobre 2025 en une seule vue",
          "Navigation mensuelle simple avec flèches latérales (< Octobre 2025 >)",
          "Tous les jours du mois visibles simultanément pour une meilleure anticipation",
          "Format calendrier universel et familier qui réduit la courbe d'apprentissage",
          "Possibilité de scanner visuellement l'ensemble du mois en quelques secondes",
          "Palette de couleurs optimisée pour une meilleure différenciation (bleu, orange, rouge, vert, rose, jaune)",
        ],
      },
      {
        title: "Numéros de semaine et repères temporels",
        medias: [
          {
            type: "image",
            deviceType: DeviceType.MOBILE,
            url: "/projects/radio-planning/weeks.jpg",
            alt: "Numéros de semaine",
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
            deviceType: DeviceType.MOBILE,
            url: "/projects/radio-planning/details-before.jpg",
            alt: "Avant",
          },
          {
            type: "image",
            deviceType: DeviceType.MOBILE,
            url: "/projects/radio-planning/details-after.jpg",
            alt: "Après",
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
            deviceType: DeviceType.MOBILE,
            url: "/projects/radio-planning/navigation.jpg",
            alt: "Navigation optimisée",
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
  {
    id: "3",
    slug: "emblem",
    title:
      "Refonte de l'application mobile Emblem - Plateforme de fidélité multi-enseignes",
    context:
      "Emblem est une application de fidélité grenobloise qui permet aux utilisateurs de -26ans de profiter d'offres avantageuses de différents commerces locaux. L'application vise à aider les jeunes étudiants d'une part et diriger une clientèle quantitative aux commerce locaux d'autre part. Emblem cherche à accroître son nombre de souscrits afin d'augmenter les chances de transactions réalisées et ainsi ajouter de nouveaux commerces à ses partenariats.",
    problem:
      "Les utilisateurs de l'offre Emblem doivent pouvoir découvrir rapidement les offres et cadeaux disponibles près d'eux, connaître les évènements qui s'organisent pour eux et accéder à leur carte de fidélité au moment du paiement en magasin. Les commerçants ont besoin d'attirer et de fidéliser leur clientèle locale dans un contexte de concurrence accrue.",
    solutionList: [
      "Créer l'architecture de l'information et de l'interface pour créer une expérience fluide qui facilite : la découverte des enseignes et offres locales, l'accès rapide à la carte dématérialisée (QR), la navigation entre les différentes sections (cadeaux, offres, calendrier d'événements). Les utilisateurs pourront rapidement connaître leurs avantages et profiter d'offres exclusives en quelques taps, tout en soutenant le commerce local grenoblois.",
      "Si le projet venait à bout de développement, l'augmentation du nombre d'offres activées et de cadeaux récupérés permettraient de valider cette hypothèse et cette solution.",
    ],
    scope:
      "Réalisation du wireframing, des interviews utilisateurs, analyse et restitution des résultats et design de maquettes haute-fidélité pour l'ensemble de l'application mobile.",
    roles: [
      "Wireframing",
      "Recherche utilisateur",
      "Architecture de l'information",
      "Conception visuelle",
    ],
    tools: ["Figma"],
    sections: [
      {
        title: "Écran de connexion et onboarding",
        medias: [
          {
            type: "image",
            deviceType: DeviceType.MOBILE,
            url: "/projects/emblem/login-before.jpg",
            alt: "Avant",
          },
          {
            type: "image",
            deviceType: DeviceType.MOBILE,
            url: "https://i.ibb.co/C5Rd9mZv/emblem-login-apres.png",
            alt: "Après",
          },
        ],
        contentTitle: "Ce que j'ai fait :",
        contentList: [
          "Création d'un écran de connexion épuré avec le logo Emblem centré pour renforcer l'identité de marque",
          "Ajout d'un champ email simple avec un CTA clair \"Continuer\" pour réduire la friction à l'entrée",
          "Design minimaliste, choix d'une palette de couleurs douces et moderne pour renforcer le confort et inciter l'utilisation fréquente",
        ],
      },
      {
        title: "Liste et carte des cadeaux et enseignes partenaires",
        medias: [
          {
            type: "video",
            deviceType: DeviceType.MOBILE,
            url: "/projects/emblem/map-list.mp4",
            alt: "Navigation liste/carte",
          },
        ],
        contentTitle: "Ce que j'ai fait :",
        contentList: [
          "Organisation claire avec une vue liste, une vue carte et des catégories visuelles (Cadeaux, Offres disponibles, Offres liées)",
          "Ajout de logos d'enseignes reconnaissables (Starbucks, Le Panier Grenoblois, etc.) pour identification rapide",
          "Mise en place de cartes d'information compactes avec horaires et types d'offres pour scanner rapidement des informations détaillées, et permettre le filtrage",
          "Ajout d'une barre de recherche pour trouver rapidement une enseigne spécifique",
          "Cadeaux à aller chercher visuellement reconnaissables",
          "Carte doublement interactive pour une navigation fluide : l'utilisateur est attiré par l'enseigne et souhaite savoir où il se situe / l'utilisateur souhaite voir ce qu'il y a près de chez lui",
        ],
      },
      {
        title: "Wallet et codes QR",
        medias: [
          {
            type: "image",
            deviceType: DeviceType.MOBILE,
            url: "/projects/emblem/wallet-before.jpg",
            alt: "Avant",
          },
          {
            type: "image",
            deviceType: DeviceType.MOBILE,
            url: "/projects/emblem/wallet-after.jpg",
            alt: "Après",
          },
        ],
        contentTitle: "Ce que j'ai fait :",
        contentList: [
          "Design sobre et élégant du wallet pour le confort d'utilisation",
          "Affichage du code QR en grand format pour être scanné facilement en caisse ou par les organisateurs d'un évènement (élément fonctionnel principal)",
          "Informations essentielles visibles : nom de l'utilisateur, date d'expiration ou date et lieu de l'évènement",
        ],
      },
    ],
    finalSolution: {
      text: "L'ensemble du redesign vise à réduire le nombre de taps nécessaires pour accéder aux fonctionnalités principales, tout en créant une expérience visuelle cohérente qui renforce l'identité locale d'Emblem. La navigation par onglets en bas permet un accès rapide aux 4 sections principales (wallet, offres, calendrier, profil).",
    },
    conclusion:
      "En simplifiant l'architecture de l'information et en créant une interface intuitive qui met en avant les offres locales, Emblem devient un outil quotidien pour les jeunes grenoblois. La facilité d'accès à la carte QR et la découverte fluide des enseignes partenaires encouragent l'utilisation régulière de l'application, créant ainsi un cercle vertueux bénéfique aux utilisateurs et aux commerçants locaux.",
  },
];
