"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"

const uxProjects = [
  {
    title: "Decathlon",
    description: "Pour l'application mobile Smart Office Decathlon",
    category: "UX Design",
    image: "/decathlon-mobile-app-smart-office.jpg",
    tags: ["Mobile", "Smart-Office"],
  },
  {
    title: "Radio Planning",
    description: "Refonte application mobile Smart Medical Office pour un cabinet de radiologie",
    category: "UX Design",
    image: "/medical-office-planning-app.jpg",
    tags: ["Mobile", "Smart-Medical-Office", "Planning"],
  },
  {
    title: "Jesus Festival",
    description: "Création application web pour l'intégration d'une billetterie de groupe au festival",
    category: "UX Design",
    image: "/festival-ticketing-app.jpg",
    tags: ["Mobile", "Education", "UX"],
  },
  {
    title: "Emblem",
    description: "Création application mobile pour la gestion d'offres étudiantes à Grenoble",
    category: "UX Design",
    image: "/student-offers-mobile-app.jpg",
    tags: ["Mobile"],
  },
]

const redesigns = [
  {
    title: "Apple Plan",
    description: "Redesign et intégration des filtres ",
    category: "Unsolicited Redesign",
    image: "/apple-maps-filters-redesign.jpg",
    tags: ["Mobile", "Filtres"],
  },
  {
    title: "Satisfy Running",
    description: "Optimisation de l'expérience Shopify pour la marque de running",
    category: "Unsolicited Redesign",
    image: "/running-brand-ecommerce-shopify.jpg",
    tags: ["E-commerce", "Shopify", "Fashion"],
  },
]

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<"ux" | "redesigns">("ux")

  const displayedProjects = selectedCategory === "ux" ? uxProjects : redesigns

  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-4">Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Une sélection de projets UX et de redesigns non sollicités
          </p>
        </div>

        <div className="flex gap-4 mb-16">
          <button
            onClick={() => setSelectedCategory("ux")}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
              selectedCategory === "ux"
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            Réalisations UX
          </button>
          <button
            onClick={() => setSelectedCategory("redesigns")}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
              selectedCategory === "redesigns"
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            Unsolicited Redesigns
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
