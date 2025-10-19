import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/accordion";
import { dropdownSkills, skills, education, roles } from "@/mocks/resume.mock";

export function Resume() {
  return (
    <section id="resume" className="h-fit section-padding bg-gray-100">
      <div className="container mx-auto max-w-7xl ">
        <div className="mb-12">
          <h2 className="text-xl md:text-3xl font-light tracking-tight text-foreground mb-1">
            Resume
          </h2>
          <p className="text-md text-neutral-500 max-w-2xl">
            Compétences, formation et expériences professionnelles
          </p>
        </div>
        <div className="space-y-20">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Skills Section */}
            <div>
              <h3 className="text-2xl font-medium text-foreground mb-8">
                Skills
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {dropdownSkills.map((category) => (
                  <AccordionItem key={category} value={category}>
                    <AccordionTrigger className="text-base font-medium hover:no-underline">
                      {category}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {skills[category as keyof typeof skills].map(
                          (skill, index) => (
                            <span
                              key={index}
                              className="text-xs text-muted-foreground px-2 py-0.5 bg-neutral-100 border border-neutral-200"
                            >
                              {skill}
                            </span>
                          )
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-medium text-foreground mb-8">
                Education
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {education.map((edu, index) => (
                  <AccordionItem key={index} value={`education-${index}`}>
                    <AccordionTrigger className="text-base font-medium hover:no-underline">
                      <div className="flex items-baseline justify-between w-full pr-4">
                        <span>{edu.degree}</span>
                        <span className="text-sm text-muted-foreground font-normal">
                          {edu.period}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pt-2 pl-4">
                        <p className="text-base text-accent mb-1">
                          {edu.school}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {edu.location}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Roles Section */}
          <div>
            <h3 className="text-2xl font-medium text-foreground mb-8">Roles</h3>
            <Accordion type="single" collapsible className="w-full">
              {roles.map((role, roleIndex) => (
                <AccordionItem key={roleIndex} value={`role-${roleIndex}`}>
                  <AccordionTrigger className="text-base font-medium hover:no-underline">
                    <div className="flex items-baseline justify-between w-full pr-4">
                      <span>{role.title}</span>
                      <span className="text-sm text-muted-foreground font-normal">
                        {role.period}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6 pt-4 pl-4">
                      {role.projects.map((project, projectIndex) => (
                        <div key={projectIndex}>
                          <p className="text-base text-accent mb-2">
                            {project.company}
                          </p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
