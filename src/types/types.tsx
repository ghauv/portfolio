export type Focus = "ux" | "dev" | "art" | "design";
export type SubCategory =
  | "all"
  | "projects"
  | "redesigns"
  | "teamProjects"
  | "personnalProjects"
  | "objects"
  | "acrylics";

export interface SubCategoryConfig {
  id: SubCategory;
  label: string;
}

export const CATEGORIES_CONFIG: Record<Focus, SubCategoryConfig[]> = {
  ux: [
    { id: "all", label: "Tous" },
    { id: "projects", label: "Projets" },
    { id: "redesigns", label: "Redesigns" },
  ],
  dev: [
    { id: "all", label: "Tous" },
    { id: "teamProjects", label: "Projets d'équipe" },
    { id: "personnalProjects", label: "Projets personnels" },
  ],
  art: [
    { id: "all", label: "Tous" },
    { id: "objects", label: "Objets" },
    { id: "acrylics", label: "Acryliques" },
  ],
  design: [{ id: "all", label: "Tous" }],
};
