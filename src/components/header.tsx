"use client";

import { useState, useEffect } from "react";
import FocusButtons from "./focus-buttons";
import { useRouter, useSearchParams } from "next/navigation";
import { Focus } from "@/types/types";
// import { Button } from "@components/ui/button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const searchParams = useSearchParams();
  const router = useRouter();
  const focus = (searchParams.get("focus") as Focus) || "ux";

  const changeFocus = (newFocus: Focus) => {
    router.push(`/?focus=${newFocus}`, { scroll: false });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["hero", "portfolio", "resume", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const NavLink = ({ id, label }: { id: string; label: string }) => {
    const isActive = activeSection === id;

    return (
      <button
        onClick={() => scrollToSection(id)}
        className={`relative text-sm transition-colors pb-1 ${
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

  //   <header
  //   className={`header-padding fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  //     isScrolled
  //       ? "bg-background/80 backdrop-blur-md border-b border-b-neutral-200"
  //       : "bg-transparent"
  //   }`}
  // >
  //   <div className="container mx-auto max-w-7xl">
  //     <nav className="flex items-center justify-between">
  //       <button
  //         onClick={() => scrollToSection("hero")}
  //         className="text-lg font-medium text-foreground hover:text-accent transition-colors"
  //       >
  //         Garance
  //       </button>

  //       <div className="flex items-center gap-8">
  //         <NavLink id="portfolio" label="Portfolio" />
  //         <NavLink id="resume" label="Resume" />
  //         <NavLink id="about" label="About" />
  //         <button
  //           onClick={() => scrollToSection("contact")}
  //           className="bg-foreground text-background hover:bg-foreground/90 px-4 py-2 rounded-full text-sm"
  //         >
  //           Contact
  //         </button>
  //       </div>
  //     </nav>
  //   </div>
  // </header>

  // `${
  //   isScrolled
  //     ? "bg-background/50 backdrop-blur-md border-b border-b-neutral-200"
  //     : "bg-transparent"
  // }`

  return (
    <header
      className={`header-padding fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent `}
    >
      <div className="container mx-auto max-w-7xl">
        <nav className="flex items-center justify-end">
          <div id="nav-focus" className="">
            <FocusButtons
              currentFocus={focus}
              onFocusChange={changeFocus}
              location="header"
            />
          </div>

          <div
            id="nav-sections"
            className={`flex items-center gap-2 py-1.5 pr-1 pl-3 sm:gap-8 sm:py-3 sm:pr-3 sm:pl-5 rounded-full ${
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
              className="bg-foreground text-background hover:bg-foreground/90 px-4 py-2 rounded-full text-sm"
            >
              Contact
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
