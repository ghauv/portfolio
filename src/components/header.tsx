"use client";

import { useState, useEffect, useRef } from "react";
import { Focus } from "@/types/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useScrollDir } from "@/hooks/useScrollDir";
import { useActiveSection, SectionKey } from "@/hooks/useActiveSection";
import { useCompactNav } from "@/hooks/useCompactNav";

type FocusKey = Focus;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const navSectionsRef = useRef<HTMLDivElement>(null);

  const scrollDir = useScrollDir(8);
  const activeSection = useActiveSection();
  const compact = useCompactNav(navSectionsRef, "focus-buttons");

  const [focus, setFocus] = useState<FocusKey>(
    (searchParams.get("focus") as FocusKey) || "ux"
  );
  const [expandedNavLinks, setExpandedNavLinks] = useState(true);
  const [expandedFocus, setExpandedFocus] = useState(false);

  // Mise à jour du focus depuis les query params
  useEffect(() => {
    const newFocus = (searchParams.get("focus") as FocusKey) || "ux";
    setFocus(newFocus);
  }, [searchParams]);

  useEffect(() => {
    console.log("scrollDir", scrollDir);
    if (scrollDir === "up" || scrollDir === "down") {
      setIsScrolled(true);
    }
  }, [scrollDir]);

  // Effets pilotés par règles
  useEffect(() => {
    if (!compact) {
      setExpandedNavLinks(true);
      return;
    }
    // compact === true
    if (scrollDir === "up") {
      setExpandedNavLinks(true);
    } else if (scrollDir === "down") {
      setExpandedNavLinks(false);
      setExpandedFocus(false);
    }
  }, [compact, scrollDir]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onNavClick = () => setExpandedNavLinks(true);
  const onFocusClick = () => setExpandedFocus(true);

  const changeFocus = (newFocus: FocusKey) => {
    setFocus(newFocus);
    router.push(`/?focus=${newFocus}`, { scroll: false });
  };

  // Dérivés d'affichage
  const showNavFocus = compact;
  const showAllNavLinks = !compact || expandedNavLinks;

  const visibleNavLinks: SectionKey[] = (() => {
    if (showAllNavLinks) return ["portfolio", "resume", "about", "contact"];
    // compact + réduit :
    if (activeSection === "hero") return ["portfolio"];
    return [activeSection];
  })();

  const visibleFocusButtons: FocusKey[] = expandedFocus
    ? ["ux", "dev", "art"]
    : [focus];

  const NavLink = ({ id, label }: { id: SectionKey; label: string }) => {
    const isActive = activeSection === id;
    const isVisible = visibleNavLinks.includes(id);

    return (
      <button
        onClick={() => {
          scrollToSection(id);
          onNavClick();
        }}
        className={` relative text-sm pb-1 transition-all duration-300 ${
          isActive
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        } ${
          isVisible ? "opacity-100" : "sr-only-focusable pointer-events-none"
        }`}
      >
        {label}
        {isActive && (
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground" />
        )}
      </button>
    );
  };

  const FocusButton = ({
    focusKey,
    isDivVisible,
  }: {
    focusKey: FocusKey;
    isDivVisible: boolean;
  }) => {
    const isActive = focus === focusKey;
    const isVisible = visibleFocusButtons.includes(focusKey);

    const labels = {
      ux: "UX/UI Designer",
      dev: "Fullstack Developer",
      art: "Artist",
    };

    return (
      <button
        onClick={(e) => {
          e.stopPropagation();
          changeFocus(focusKey);
        }}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap border ${
          !isDivVisible ? "sr-only-focusable" : ""
        } ${
          isActive
            ? "bg-neutral-300 border-neutral-400"
            : "bg-neutral-200 border-neutral-300 hover:bg-neutral-300"
        } ${
          isVisible ? "opacity-100" : "sr-only-focusable pointer-events-none"
        }`}
        data-focus={focusKey}
      >
        {labels[focusKey]}
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
          className="flex items-center transition-all duration-500 justify-between"
        >
          {/* nav-focus */}
          <div
            id="nav-focus"
            onClick={onFocusClick}
            tabIndex={showNavFocus ? undefined : 0}
            className={`flex gap-2 transition-all duration-500 ${
              showNavFocus ? "opacity-100 visible" : ""
            }`}
            aria-expanded={expandedFocus}
          >
            {(["ux", "dev", "art"] as FocusKey[]).map((key) => (
              <FocusButton
                key={key}
                focusKey={key}
                isDivVisible={showNavFocus}
              />
            ))}
          </div>

          {/* nav-sections */}
          <div className="flex items-center gap-2">
            <div
              id="nav-sections"
              ref={navSectionsRef}
              onClick={onNavClick}
              className={`flex items-center gap-2 py-1.5 px-3 sm:gap-8 sm:py-3 sm:px-5 rounded-full transition-all duration-300 ${
                isScrolled
                  ? "bg-background/20 backdrop-blur-md border-b border-b-neutral-200"
                  : "bg-transparent"
              }`}
              aria-expanded={expandedNavLinks}
            >
              <NavLink id="portfolio" label="Portfolio" />
              <NavLink id="resume" label="Resume" />
              <NavLink id="about" label="About" />
            </div>
            <button
              onClick={() => {
                scrollToSection("contact");
                onNavClick();
              }}
              className={`bg-foreground text-background hover:bg-foreground/90 py-1.5 px-3 sm:py-3 sm:px-5 rounded-full text-sm transition-all duration-300`}
            >
              Contact
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
