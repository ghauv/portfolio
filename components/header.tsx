"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ["hero", "portfolio", "resume", "about", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const NavLink = ({ id, label }: { id: string; label: string }) => {
    const isActive = activeSection === id

    return (
      <button
        onClick={() => scrollToSection(id)}
        className={`relative text-sm transition-colors pb-1 ${
          isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {label}
        {isActive && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />}
      </button>
    )
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg font-medium text-foreground hover:text-accent transition-colors"
          >
            Garance
          </button>

          <div className="flex items-center gap-8">
            <NavLink id="portfolio" label="Portfolio" />
            <NavLink id="resume" label="Resume" />
            <NavLink id="about" label="About" />
            <Button
              onClick={() => scrollToSection("contact")}
              size="sm"
              className="bg-foreground text-background hover:bg-foreground/90"
            >
              Contact
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
