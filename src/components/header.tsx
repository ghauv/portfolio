"use client";

import { useState, useEffect, Suspense } from "react";
import { useActiveSection, SectionKey } from "@/hooks/useActiveSection";

function HeaderContent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const NavLink = ({ id, label }: { id: SectionKey; label: string }) => {
    const isActive = activeSection === id;

    return (
      <button
        onClick={() => scrollToSection(id)}
        className={`relative text-sm pb-1 transition-colors ${
          isActive
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {label}
        {isActive && (
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
        )}
      </button>
    );
  };

  return (
    <header
      id="main-header"
      role="banner"
      className="header-padding fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent"
    >
      <div className="container mx-auto max-w-7xl">
        <nav
          aria-label="Navigation principale"
          className="flex items-center transition-all duration-500 justify-end"
        >
          <div
            id="nav-sections"
            className={`flex items-center gap-2 py-1.5 px-3 sm:gap-8 sm:py-3 sm:px-5 rounded-full transition-all duration-300 ${
              isScrolled
                ? "bg-background/20 backdrop-blur-md border-b border-b-neutral-200"
                : "bg-transparent"
            }`}
          >
            <NavLink id="portfolio" label="Portfolio" />
            <NavLink id="resume" label="Resume" />
            <NavLink id="about" label="About" />
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-foreground text-background hover:bg-foreground/90 px-4 py-2 rounded-full text-sm transition-all duration-300"
            >
              Contact
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export function Header() {
  return (
    <Suspense
      fallback={
        <header
          id="main-header"
          role="banner"
          className="header-padding fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent"
        >
          <div className="container mx-auto max-w-7xl">
            <nav
              aria-label="Navigation principale"
              className="flex items-center transition-all duration-500 justify-end"
            >
              <div className="flex items-center gap-2 py-1.5 px-3 sm:gap-8 sm:py-3 sm:px-5 rounded-full bg-transparent">
                <span className="text-sm text-muted-foreground">
                  Chargement...
                </span>
              </div>
            </nav>
          </div>
        </header>
      }
    >
      <HeaderContent />
    </Suspense>
  );
}
