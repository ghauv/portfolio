"use client";

import { DeviceType, Project } from "@/types/projects.types";
import { DevicesFrame } from "./devices-frame";
import { CATEGORIES_CONFIG, Focus, SubCategory } from "@/types/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const clipFrame = (frame: React.ReactNode) => {
  return <div className="w-[calc(100%+4rem)] flex items-start">{frame}</div>;
};

export function ProjectCard(project: Project) {
  const { slug, title, category, subcategory, tags, template, description } =
    project;
  const router = useRouter();

  const getSubcategoryLabel = () => {
    const focus = category as Focus;
    const subCat = subcategory as SubCategory;
    const categoryConfig = CATEGORIES_CONFIG[focus];
    const subCategoryConfig = categoryConfig?.find(
      (config) => config.id === subCat
    );
    return subCategoryConfig?.label || subcategory;
  };

  const textColor = "#000000";

  const handleClick = () => {
    // Stocker la position de scroll actuelle
    if (typeof window !== "undefined") {
      sessionStorage.setItem(
        "portfolioScrollPosition",
        window.scrollY.toString()
      );
      sessionStorage.setItem("portfolioLastFocus", category);
      sessionStorage.setItem("portfolioLastSubcategory", subcategory);
    }
    router.push(`/${slug}`);
  };

  return (
    <div className="group cursor-pointer" onClick={handleClick}>
      {/* Device mockup container with elegant background */}

      {template === "web" && "deviceType" in project && "images" in project && (
        <div className="relative mb-4 md:mb-8 pt-2 px-2 bg-gradient-to-br from-background via-muted/30 to-muted/50 flex aspect-[14/9] overflow-y-clip">
          {clipFrame(
            <DevicesFrame
              type={project.deviceType as DeviceType}
              title={title}
              image={project.images?.[0]}
              images={project.images}
              borderClass={"border-1 border-gray-200"}
              notchClass={"bg-gray-200"}
            />
          )}
        </div>
      )}
      {template === "art" && "image" in project && (
        <div className="relative mb-4 md:mb-8 pt-2 px-2 bg-gradient-to-br from-background via-muted/30 to-muted/50 flex ">
          <div className="w-full aspect-square overflow-hidden flex items-center">
            <Image src={project.image} alt={title} width={700} height={700} />
          </div>
        </div>
      )}

      {/* Decorative gradient overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}

      {/* Project info */}
      <div className="space-y-1 md:space-y-2 px-2">
        <div className="flex items-center">
          <div style={{ color: textColor }}>
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              {getSubcategoryLabel()}
            </span>
          </div>
        </div>
        <h3 className="text-md sm:text-lg md:text-xl font-medium text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-neutral-500 leading-relaxed text-xs sm:text-sm md:text-md">
          {description}
        </p>
        <div className="text-sm flex flex-wrap gap-2 pt-2">
          {
            tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="text-xs text-muted-foreground px-2 py-0.5 bg-neutral-100"
              >
                {tag}
              </span>
            ))

            // <Badge key={index} variant="secondary" className="text-xs">
            //   {tag}
            // </Badge>
          }
        </div>
      </div>
    </div>
  );
}
