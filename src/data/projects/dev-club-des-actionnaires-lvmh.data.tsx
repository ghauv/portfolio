import { DevProject } from "@/types/projects.types";

export const clubActionnairesLVMHData: DevProject = {
  id: 8,
  slug: "club-des-actionnaires-lvmh",
  category: "dev",
  subcategory: "teamProjects",
  published: true,

  // Project card data
  title: "Club des Actionnaires LVMH",
  description: "Refonte du site du club des actionnaires",

  images: [
    "https://i.ibb.co/fLKcSBQ/Capture-d-e-cran-2025-10-18-a-15-28-03.png",
  ],
  deviceType: "laptop",
  template: "web",

  tags: ["Web", "Prismic", "Next.js", "Nest.js", "AzureDevOps", "Adyen"],

  // Detailed project
  content: {
    articleTitle: "Plateforme du Club des Actionnaires LVMH",
    context:
      "Le Club des Actionnaires LVMH nécessitait une plateforme moderne pour engager et informer ses membres actionnaires.",
    realization:
      "Développement d'une plateforme web complète avec Next.js et Nest.js. Gestion du contenu via Prismic CMS. Intégration d'Adyen pour les paiements sécurisés. Déploiement et gestion via Azure DevOps avec pipelines CI/CD. Création d'un espace membre personnalisé avec accès à des contenus exclusifs et gestion des avantages actionnaires.",
  },
};
