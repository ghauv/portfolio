import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  category: string
  image: string
  tags: string[]
}

export function ProjectCard({ title, description, category, image, tags }: ProjectCardProps) {
  return (
    <div className="group cursor-pointer">
      {/* Device mockup container with elegant background */}
      <div className="relative mb-8 p-8 bg-gradient-to-br from-background via-muted/30 to-muted/50 rounded-3xl overflow-hidden">
        {/* Device frame with shadow */}
        <div className="relative mx-auto max-w-sm">
          {/* Phone/device mockup */}
          <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden bg-foreground/5 shadow-2xl ring-1 ring-foreground/10">
            {/* Screen content */}
            <div className="absolute inset-3 rounded-[2rem] overflow-hidden bg-background">
              <img
                src={image || "/placeholder.svg"}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Device notch (optional, for phone mockups) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-foreground/90 rounded-b-2xl" />
          </div>
        </div>

        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Project info */}
      <div className="space-y-3 px-2">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-wider text-muted-foreground">{category}</span>
        </div>
        <h3 className="text-2xl font-medium text-foreground group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
