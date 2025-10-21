import { DeviceType } from "@/components/devices-frame";

export interface MediaItem {
  type: "image" | "video";
  deviceType: DeviceType;
  url: string;
  alt?: string;
  caption?: string;
}

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

export interface FinalSolution {
  medias?: MediaItem[];
  text: string;
  list?: string[];
}

export interface DetailedProject {
  id: string;
  slug: string;
  title: string;
  heroMedia?: MediaItem;
  // Partie 1 : Le défi
  context: string;
  problem: string;
  solutionList: string[];
  scope: string;
  roles: string[];
  tools: string[];
  copyrights?: string;

  // Partie 2 : Le processus
  sections: Section[];

  // Partie 3 : La solution
  finalSolution: FinalSolution;

  // Conclusion
  conclusion: string;
}
