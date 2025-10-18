import { DeviceType } from "@/components/devices-frame";

interface BaseProject {
  title: string;
  description: string;
  category: string;
  subcategory: string;
  tags: string[];
}

export interface MobileProject extends BaseProject {
  type: DeviceType.MOBILE;
  images: [string, string, string]; // Exactement 3 images
}

export interface LaptopProject extends BaseProject {
  type: DeviceType.LAPTOP;
  image: string; // 1 seule image
}

export type Project = MobileProject | LaptopProject;

export const uxProjects: Project[] = [
  {
    title: "Decathlon",
    type: DeviceType.MOBILE,
    description: "Pour l'application mobile Smart Office Decathlon",
    category: "ux",
    subcategory: "projects",
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
    images: [
      "https://i.ibb.co/Mk5f63Yt/radio-planing-3.png",
      "https://i.ibb.co/BVVyr7zS/radio-planing-2.png",
      "https://i.ibb.co/G4ZTygGP/radio-planing-1.png",
    ],
    tags: ["Mobile", "Smart-Medical-Office", "Planning"],
  },
  {
    title: "Jesus Festival",
    type: DeviceType.LAPTOP,
    description:
      "Création application web pour l'intégration d'une billetterie de groupe au festival",
    category: "ux",
    subcategory: "projects",
    image: "https://i.ibb.co/nqY6Cr1p/jesus-festival.png",
    tags: ["Web", "Billetterie"],
  },
  {
    title: "Atelier Bizet",
    type: DeviceType.LAPTOP,
    description: "Refonte application web d'un atelier haute couture",
    category: "ux",
    subcategory: "projects",
    image: "https://i.ibb.co/xtF8hMzx/bizet.png",
    tags: ["Web", "Haute-Couture"],
  },
  {
    title: "Emblem",
    type: DeviceType.MOBILE,
    description:
      "Création application mobile pour la gestion d'offres étudiantes à Grenoble",
    category: "ux",
    subcategory: "projects",
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
    images: [
      "https://i.ibb.co/Kp8w8syS/bad-1.png",
      "https://i.ibb.co/7xff8mwc/bad-2.png",
      "https://i.ibb.co/jP09qk8M/bad-3.png",
    ],
    tags: ["Mobile", "Filtres"],
  },
];

export const devProjects: Project[] = [
  {
    title: "LVMH",
    type: DeviceType.LAPTOP,
    description: "Teamwork",
    category: "dev",
    subcategory: "teamProjects",
    image:
      "https://i.ibb.co/FqXnt9Mm/Capture-d-e-cran-2025-10-18-a-11-02-43.png",
    tags: ["Web", "ATS", "Next.js", "Nest.js", "GCP"],
  },
  {
    title: "Apple MAP",
    type: DeviceType.LAPTOP,
    description: "Teamwork",
    category: "dev",
    subcategory: "personnalProjects",
    image:
      "https://i.ibb.co/FqXnt9Mm/Capture-d-e-cran-2025-10-18-a-11-02-43.png",
    tags: ["Web", "ATS", "Next.js", "Nest.js", "GCP"],
  },
];
