// import { Badge } from "@/components/ui/badge";
import { DevicesFrame, DeviceType } from "./devices-frame";
import { ProjectTemplate } from "@/mocks/portfolio.mock";
import { CATEGORIES_CONFIG, Focus, SubCategory } from "@/types/types";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  type?: DeviceType;
  description: string;
  category: string;
  subcategory: string;
  image?: string;
  images?: [string, string, string];
  tags: string[];
  template: ProjectTemplate;
}

const clipFrame = (frame: React.ReactNode) => {
  return (
    <div className="w-full aspect-[14/9] overflow-hidden flex items-start">
      {frame}
    </div>
  );
};

export function ProjectCard({
  title,
  type,
  description,
  category,
  subcategory,
  image,
  images,
  tags,
  template,
}: ProjectCardProps) {
  const getSubcategoryLabel = () => {
    const focus = category as Focus;
    const subCat = subcategory as SubCategory;
    const categoryConfig = CATEGORIES_CONFIG[focus];
    const subCategoryConfig = categoryConfig?.find(
      (config) => config.id === subCat
    );
    return subCategoryConfig?.label || subcategory;
  };

  const hasImage = image || images;

  return (
    <div className="group cursor-pointer">
      {/* Device mockup container with elegant background */}
      <div className="relative mb-4 md:mb-8 pt-2 px-2 bg-gradient-to-br from-background via-muted/30 to-muted/50 overflow-hidden flex w-full">
        {template === "web" && type ? (
          clipFrame(
            <DevicesFrame
              type={type}
              title={title}
              image={image}
              images={images}
              borderClass={"border-1 border-gray-200"}
              notchClass={"bg-gray-200"}
            />
          )
        ) : (
          <div className="w-full aspect-square overflow-hidden flex items-center">
            {image && (
              <Image src={image} alt={title} width={700} height={700} />
            )}
          </div>
        )}

        {/* Decorative gradient overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" /> */}
      </div>

      {/* Project info */}
      <div className="space-y-1 md:space-y-2 px-2">
        <div className="flex items-center">
          <span className="text-xs uppercase tracking-wider text-muted-foreground">
            {getSubcategoryLabel()}
          </span>
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
