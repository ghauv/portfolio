import { DeviceType } from "@/components/devices-frame";

export type ProjectTemplate = "web" | "art";

interface BaseProject {
  title: string;
  description: string;
  category: string;
  subcategory: string;
  tags: string[];
  template: ProjectTemplate;
  published: boolean;
}

export interface MobileProject extends BaseProject {
  type: DeviceType.MOBILE;
  images: [string, string, string]; // Exactement 3 images
}

export interface LaptopProject extends BaseProject {
  type: DeviceType.LAPTOP;
  image: string; // 1 seule image
}

export interface ArtProject extends BaseProject {
  image: string;
}

export type Project = MobileProject | LaptopProject | ArtProject;

const allUxProjects: Project[] = [
  {
    title: "Decathlon",
    type: DeviceType.MOBILE,
    description: "Pour l'application mobile Smart Office Decathlon",
    category: "ux",
    subcategory: "projects",
    template: "web",
    published: true,
    images: [
      "https://i.ibb.co/DxdkSxS/decath-1.png",
      "https://i.ibb.co/0pZ5wp3R/decath-2.png",
      "https://i.ibb.co/5WSW1vtw/decath-3.png",
    ],
    tags: ["Mobile", "Smart-Office"],
  },
  {
    title: "Radio Planning",
    type: DeviceType.MOBILE,
    description:
      "Refonte application mobile Smart Medical Office pour un cabinet de radiologie",
    category: "ux",
    subcategory: "projects",
    template: "web",
    published: true,
    images: [
      "https://i.ibb.co/Mk5f63Yt/radio-planing-3.png",
      "https://i.ibb.co/BVVyr7zS/radio-planing-2.png",
      "https://i.ibb.co/G4ZTygGP/radio-planing-1.png",
    ],
    tags: ["Mobile", "Smart-Medical-Office", "Planning"],
  },
  {
    title: "Billetterie festival",
    type: DeviceType.LAPTOP,
    description:
      "Création application web pour l'intégration d'une billetterie de groupe au festival",
    category: "ux",
    subcategory: "projects",
    template: "web",
    published: true,
    image: "https://i.ibb.co/nqY6Cr1p/jesus-festival.png",
    tags: ["Web", "Billetterie"],
  },
  {
    title: "Atelier Bizet",
    type: DeviceType.LAPTOP,
    description: "Refonte application web d'un atelier haute couture",
    category: "ux",
    subcategory: "projects",
    template: "web",
    published: true,
    image:
      "https://i.ibb.co/1Ybyh5BJ/Capture-d-e-cran-2025-10-18-a-15-51-21.png",
    tags: ["Web", "Haute-Couture"],
  },
  {
    title: "Emblem",
    type: DeviceType.MOBILE,
    description:
      "Création application mobile pour la gestion d'offres étudiantes à Grenoble",
    category: "ux",
    subcategory: "projects",
    template: "web",
    published: true,
    images: [
      "https://i.ibb.co/7dX43Twf/emblem-1.png",
      "https://i.ibb.co/7dX43Twf/emblem-1.png",
      "https://i.ibb.co/vCMnHfdv/emblem-2.png",
    ],
    tags: ["Mobile", "Map"],
  },
  {
    title: "Apple Plan",
    type: DeviceType.MOBILE,
    description: "Redesign et intégration des filtres ",
    category: "ux",
    subcategory: "redesigns",
    template: "web",
    published: true,
    images: [
      "https://i.ibb.co/wFdgnkTG/BAD-Location-01-3.png",
      "https://i.ibb.co/7xff8mwc/bad-2.png",
      "https://i.ibb.co/jP09qk8M/bad-3.png",
    ],
    tags: ["Mobile", "Filtres"],
  },
];

export const uxProjects = allUxProjects.filter((p) => p.published);

const allDevProjects: Project[] = [
  {
    title: "LVMH",
    type: DeviceType.LAPTOP,
    description: "Refonte du site vitrine de la holding",
    category: "dev",
    subcategory: "teamProjects",
    template: "web",
    published: true,
    image:
      "https://i.ibb.co/FqXnt9Mm/Capture-d-e-cran-2025-10-18-a-11-02-43.png",
    tags: ["Web", "Prismic", "Next.js", "Nest.js", "GCP", "Algolia", "ATS"],
  },
  {
    title: "Club des Actionnaires LVMH",
    type: DeviceType.LAPTOP,
    description: "Refonte du site du club des actionnaires",
    category: "dev",
    subcategory: "teamProjects",
    template: "web",
    published: true,
    image:
      "https://i.ibb.co/fLKcSBQ/Capture-d-e-cran-2025-10-18-a-15-28-03.png",
    tags: ["Web", "Prismic", "Next.js", "Nest.js", "AzureDevOps", "Adyen"],
  },
  {
    title: "Jardin d'Acclimatation LVMH",
    type: DeviceType.LAPTOP,
    description: "Refonte du site vitrine de la holding",
    category: "dev",
    subcategory: "teamProjects",
    template: "web",
    published: true,
    image:
      "https://i.ibb.co/QvM8P9Y4/Capture-d-e-cran-2025-10-18-a-15-30-07.png",
    tags: [
      "Web",
      "Prismic",
      "Next.js",
      "Nest.js",
      "AzureDevOps",
      "Adyen",
      "Billetterie GTS Vision",
    ],
  },
  {
    title: "Satisfy Running",
    type: DeviceType.LAPTOP,
    description: "Refonte du site vitrine de la holding",
    category: "dev",
    subcategory: "teamProjects",
    template: "web",
    published: true,
    image:
      "https://i.ibb.co/84D85pK3/Capture-d-e-cran-2025-10-18-a-15-31-07.png",
    tags: ["Web", "Shopify", "Klavio"],
  },
  {
    title: "Gemy Automobiles",
    type: DeviceType.LAPTOP,
    description: "Refonte du site du conssessionnaire automobile",
    category: "dev",
    subcategory: "teamProjects",
    template: "web",
    published: true,
    image:
      "https://i.ibb.co/jkGXkY85/Capture-d-e-cran-2025-10-18-a-15-32-57.png",
    tags: ["Web", "Refine", "Node.js"],
  },
];

export const devProjects = allDevProjects.filter((p) => p.published);

const allArtProjects: ArtProject[] = [
  {
    title: "Plan d'eau",
    description: "Plan d'eau à l'acrylique",
    category: "art",
    subcategory: "acrylics",
    template: "art",
    published: true,
    image:
      "https://i.ibb.co/kgHDSwST/Mockup-Cadre-Photo-Minimaliste-2-copie.png",
    tags: ["Acrylique", "A3"],
  },
  {
    title: "Visage sur verre",
    description: "Peinture acrylique sur verre",
    category: "art",
    subcategory: "objects",
    template: "art",
    published: true,
    image: "https://i.ibb.co/MxjmR8nx/IMG-0694.jpg",
    tags: ["Verre", "Acrylique"],
  },
  {
    title: "Personnage sur terre cuite",
    description: "Peinture acrylique sur terre cuite",
    category: "art",
    subcategory: "objects",
    template: "art",
    published: true,
    image: "https://i.ibb.co/9XvLLrj/IMG-0710.jpg",
    tags: ["Terre cuite", "Acrylique"],
  },
  {
    title: "People views",
    description: "Vue d'une foule",
    category: "art",
    subcategory: "acrylics",
    template: "art",
    published: true,
    image: "https://i.ibb.co/xqWVh9ny/Mockup-Cadre-Photo-Minimaliste-3.png",
    tags: ["Aquarelle"],
  },
  {
    title: "Grenouille",
    description: "Grenouille à l'acrylique",
    category: "art",
    subcategory: "acrylics",
    template: "art",
    published: true,
    image: "https://i.ibb.co/LDmFKXb4/Mockup-Cadre-Photo-Minimaliste-4.png",
    tags: ["Aquarelle"],
  },
];

export const artProjects = allArtProjects.filter((p) => p.published);
