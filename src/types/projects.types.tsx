export type ProjectFocus = "ux" | "dev" | "art";
export type DeviceType = "mobile" | "laptop";

interface BaseProject {
  id: number;
  slug: string;
  category: ProjectFocus;
  subcategory: string;

  title: string;
  description: string;

  tags: string[];
  published: boolean;
}

interface UXContent {
  articleTitle: string;
  context: string;
  problem: string;
  solutionList: string[];
  scope: string;
  roles: string[];
  tools: string[];
  copyrights?: string;
  sections: Section[];
  finalSolution: FinalSolution;
  conclusion: string;
}

interface DevContent {
  articleTitle: string;
  context: string;
  realization: string;
}

export interface UXProject extends BaseProject {
  category: "ux";
  template: "web";
  deviceType: DeviceType;
  images: string[]; // Mobile = 3, Laptop = 1
  content: UXContent;
}

export interface DevProject extends BaseProject {
  category: "dev";
  template: "web";
  deviceType: DeviceType;
  images: string[]; // Mobile = 3, Laptop = 1
  content: DevContent;
}
export interface ArtProject extends BaseProject {
  category: "art";
  template: "art";
  image: string;
  // Art n'a pas de content spécifique ?
}

export type Project = UXProject | DevProject | ArtProject;

// ----------------------------- UX Content specific -----------------------------

export interface Section {
  title: string;
  medias: MediaItem[]; // Peut contenir 1 ou 2 images/vidéos
  contentTitle?: string;
  contentTitleClass?: string;
  contentText?: string;
  contentList?: string[];
  content2Title?: string;
  content2TitleClass?: string;
  content2Text?: string;
  content2List?: string[];
}
export interface MediaItem {
  type: "image" | "video";
  deviceType: DeviceType;
  url: string;
  alt?: string;
  caption?: string;
}

export interface FinalSolution {
  medias?: MediaItem[];
  text: string;
  list?: string[];
}

//--------------------------------- Guards ---------------------------------

export function isUXProject(project: Project): project is UXProject {
  return project.category === "ux";
}

export function isDevProject(project: Project): project is DevProject {
  return project.category === "dev";
}

export function isArtProject(project: Project): project is ArtProject {
  return project.category === "art";
}

//---------------------------------
