"use client";

import { Focus } from "@/types/types";
import { useState } from "react";

interface FocusButtonsProps {
  currentFocus: Focus;
  onFocusChange: (focus: Focus) => void;
}

export default function FocusButtons({
  currentFocus,
  onFocusChange,
}: FocusButtonsProps) {
  const getExpertiseLabel = (exp: Focus) => {
    const labels = {
      ux: "UX/UI Designer",
      dev: "Fullstack Developer",
      art: "Artist",
      design: "Graphic Designer",
    };
    return labels[exp];
  };

  const allExpertises: Focus[] = ["ux", "dev", "art", "design"];
  const [displayedButtons, setDisplayedButtons] = useState<Focus[]>(
    allExpertises.filter((exp) => exp !== currentFocus)
  );
  const [animatingOut, setAnimatingOut] = useState<Focus | null>(null);
  const [animatingIn, setAnimatingIn] = useState<Focus | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleFocusChange = (newFocus: Focus) => {
    setAnimatingOut(newFocus);
    setIsTransitioning(true);

    // Après l'animation de sortie, changer l'ordre et animer l'entrée
    setTimeout(() => {
      // Retirer le bouton cliqué et ajouter l'ancien focus à la fin
      const newButtons = displayedButtons.filter((exp) => exp !== newFocus);
      newButtons.push(currentFocus);
      setDisplayedButtons(newButtons);

      onFocusChange(newFocus);
      setAnimatingOut(null);
      setAnimatingIn(currentFocus);

      // Réinitialiser l'animation d'entrée
      setTimeout(() => {
        setAnimatingIn(null);
        setIsTransitioning(false);
      }, 500);
    }, 400);
  };

  return (
    <div className="flex flex-wrap gap-2 items-center">
      <span className="text-sm text-muted-foreground">Je suis également :</span>
      <div className="relative flex gap-2 overflow-visible">
        {displayedButtons.map((exp, index) => (
          <button
            key={exp}
            onClick={() => handleFocusChange(exp)}
            className={`group px-4 py-2 rounded-md text-sm font-medium bg-neutral-200 text-muted-foreground hover:bg-neutral-300 whitespace-nowrap
              ${
                animatingOut === exp
                  ? "transition-all duration-400 ease-in-out translate-x-[-150%] opacity-0"
                  : ""
              }
              ${animatingIn === exp ? "animate-slide-in" : ""}
              ${
                !animatingOut || animatingOut !== exp
                  ? "transition-all duration-400 ease-in-out"
                  : ""
              }
            `}
          >
            {getExpertiseLabel(exp)}
          </button>
        ))}
      </div>
    </div>
  );
}
