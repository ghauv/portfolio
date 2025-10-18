export type Focus = "ux" | "dev" | "art";
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
    { id: "projects", label: "Projet client" },
    { id: "redesigns", label: "Redesign personnel" },
  ],
  dev: [
    { id: "all", label: "Tous" },
    { id: "teamProjects", label: "Projet client" },
    { id: "personnalProjects", label: "Projet personnel" },
  ],
  art: [
    { id: "all", label: "Tous" },
    { id: "objects", label: "Objet" },
    { id: "acrylics", label: "Acrylique" },
  ],
  // design: [{ id: "all", label: "Tous" }],
};
