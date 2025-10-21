import { Project } from "@/types/projects.types";
import { grenouilleData } from "./art-grenouille.data";
import { peopleViewsData } from "./art-people-views.data";
import { personnageSurTerreCuiteData } from "./art-personnage-sur-terre-cuite.data";
import { planEauData } from "./art-plan-eau.data";
import { visageSurVerreData } from "./art-visage-sur-verre.data";
import { applePlanDevData } from "./dev-apple-plan.data";
import { clubActionnairesLVMHData } from "./dev-club-des-actionnaires-lvmh.data";
import { gemyAutomobilesData } from "./dev-gemy-automobiles.data";
import { jardinAcclimatationData } from "./dev-jardin-d-acclimatation-lvmh.data";
import { lvmhData } from "./dev-lvmh.data";
import { satisfyRunningData } from "./dev-satisfy-running.data";
import { applePlanUXData } from "./ux-apple-plan.data";
import { atelierBizetData } from "./ux-atelier-bizet.data";
import { billetterieFestivalData } from "./ux-billetterie-festival.data";
import { decathlonData } from "./ux-decathlon.data";
import { emblemData } from "./ux-emblem.data";
import { radioPlanningData } from "./ux-radio-planning.data";

export const allUxProjects = [
  atelierBizetData,
  billetterieFestivalData,
  decathlonData,
  emblemData,
  radioPlanningData,
  applePlanUXData,
];

export const uxProjects = allUxProjects.filter((p) => p.published);

export const allDevProjects = [
  applePlanDevData,
  lvmhData,
  clubActionnairesLVMHData,
  jardinAcclimatationData,
  satisfyRunningData,
  gemyAutomobilesData,
];

export const devProjects = allDevProjects.filter((p) => p.published);

export const allArtProjects = [
  planEauData,
  visageSurVerreData,
  personnageSurTerreCuiteData,
  peopleViewsData,
  grenouilleData,
];

export const artProjects = allArtProjects.filter((p) => p.published);

export const allProjects: Project[] = [
  ...uxProjects,
  ...devProjects,
  ...artProjects,
];
