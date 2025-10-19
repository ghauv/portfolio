"use client";

import { Focus } from "@/types/types";
import { useState } from "react";

interface OldFocusButtonsProps {
  currentFocus: Focus;
  onFocusChange: (focus: Focus) => void;
  location: "hero" | "header";
}

export default function OldFocusButtons({
  currentFocus,
  onFocusChange,
  location,
}: OldFocusButtonsProps) {
  const getExpertiseLabel = (exp: Focus) => {
    const labels = {
      ux: "Explorer mes designs",
      dev: "Parcourir mes développements",
      art: "Découvrir mon art",
      // design: "Graphic Designer",
    };
    return labels[exp];
  };

  const allExpertises: Focus[] = ["ux", "dev", "art"];
  const [displayedButtons, setDisplayedButtons] = useState<Focus[]>(
    allExpertises.filter((exp) => exp !== currentFocus)
  );
  const [animatingOut, setAnimatingOut] = useState<Focus | null>(null);
  const [animatingIn, setAnimatingIn] = useState<Focus | null>(null);

  const handleFocusChange = (newFocus: Focus) => {
    setAnimatingOut(newFocus);

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
      }, 500);
    }, 400);
  };

  return (
    <div id="focus-buttons" className="flex flex-wrap gap-2 items-center">
      <span className="text-sm text-muted-foreground"></span>
      <div className="relative flex gap-2 overflow-visible">
        {displayedButtons.map((exp, index) => (
          <button
            id={`${location}-${exp}`}
            key={`${location}-${exp}`}
            onClick={() => handleFocusChange(exp)}
            className={`group px-4 py-2 rounded-full text-sm font-medium bg-neutral-200 hover:bg-neutral-300 whitespace-nowrap border border-neutral-400
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
