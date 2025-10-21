import { aboutContent } from "@/data/about.mock";

export function About() {
  return (
    <section id="about" className="h-fit section-padding">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-4 md:mb-8">
          <h2 className="text-xl md:text-3xl font-light tracking-tight text-foreground mb-1">
            {aboutContent.title}
          </h2>
        </div>
        <div>
          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-foreground">{aboutContent.paragraphs[0]}</p>

            <p className="text-muted-foreground">
              {aboutContent.paragraphs[1]}
            </p>

            <div className="pt-8">
              <h3 className="text-2xl font-medium text-foreground mb-4">
                {aboutContent.workingStyle.title}
              </h3>
              <p className="text-muted-foreground">
                {aboutContent.workingStyle.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
