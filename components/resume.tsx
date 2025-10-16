"use client"

import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const skills = {
  Writing: ["Documentation", "Technical Writing", "Content Strategy"],
  Design: ["UX/UI", "Prototyping", "Design Systems", "Figma"],
  Research: ["User Research", "Usability Testing", "Analytics"],
  Development: ["React", "Next.js", "TypeScript", "Shopify"],
  Leadership: ["Product Management", "Team Coordination", "Training"],
}

const education = [
  {
    degree: "Master en Design & Management de l'Innovation Interactive",
    school: "Gobelins, l'école de l'image",
    period: "2018 — 2020",
    location: "Paris, France",
  },
  {
    degree: "Bachelor en Design Graphique",
    school: "École de Design",
    period: "2015 — 2018",
    location: "Paris, France",
  },
]

const roles = [
  {
    title: "Développeuse Fullstack",
    period: "2020 — Present",
    projects: [
      {
        company: "LVMH",
        description: "Casquette de PM, développement e-commerce et outils internes",
      },
      {
        company: "Unibail",
        description: "Développement e-commerce et outils internes",
      },
      {
        company: "Satisfy Running",
        description: "Développement e-commerce",
      },
    ],
  },
  {
    title: "UX Designer",
    period: "2018 — 2020",
    projects: [
      {
        company: "Decathlon",
        description: "Conception d'interfaces et recherche utilisateur",
      },
      {
        company: "Radioplanning",
        description: "Conception d'interfaces et recherche utilisateur",
      },
      {
        company: "App Emile",
        description: "Conception d'interfaces et recherche utilisateur",
      },
      {
        company: "Emblem",
        description: "Conception d'interfaces et recherche utilisateur",
      },
    ],
  },
  {
    title: "Graphic Designer",
    period: "2016 — 2018",
    projects: [
      {
        company: "Junior Entrepreneurs",
        description: "Création de chartes graphiques et identités visuelles",
      },
    ],
  },
  {
    title: "Organisatrice Programme Formation",
    period: "2017",
    projects: [
      {
        company: "Programme Produit",
        description: "Création de charte graphique et organisation de formations",
      },
    ],
  },
]

const dropdownSkills = ["Writing", "Design", "Research", "Development", "Leadership"]

export function Resume() {
  return (
    <section id="resume" className="py-32 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-4">Resume</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Compétences, formation et expériences professionnelles
          </p>
        </div>

        <div className="space-y-20">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Skills Section */}
            <div>
              <h3 className="text-2xl font-medium text-foreground mb-8">Skills</h3>
              <Accordion type="single" collapsible className="w-full">
                {dropdownSkills.map((category) => (
                  <AccordionItem key={category} value={category}>
                    <AccordionTrigger className="text-base font-medium hover:no-underline">{category}</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {skills[category as keyof typeof skills].map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-medium text-foreground mb-8">Education</h3>
              <Accordion type="single" collapsible className="w-full">
                {education.map((edu, index) => (
                  <AccordionItem key={index} value={`education-${index}`}>
                    <AccordionTrigger className="text-base font-medium hover:no-underline">
                      <div className="flex items-baseline justify-between w-full pr-4">
                        <span>{edu.degree}</span>
                        <span className="text-sm text-muted-foreground font-normal">{edu.period}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pt-2 pl-4">
                        <p className="text-base text-accent mb-1">{edu.school}</p>
                        <p className="text-sm text-muted-foreground">{edu.location}</p>
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
                      <span className="text-sm text-muted-foreground font-normal">{role.period}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6 pt-4 pl-4">
                      {role.projects.map((project, projectIndex) => (
                        <div key={projectIndex}>
                          <p className="text-base text-accent mb-2">{project.company}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
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
  )
}
