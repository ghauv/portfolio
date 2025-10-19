"use client";

import { Focus } from "@/types/types";
import { expertiseConfig } from "@/mocks/hero.mock";

interface FocusButtonsProps {
  currentFocus: Focus;
  onFocusChange: (focus: Focus) => void;
  location: "hero" | "header";
}

export default function FocusButtons({
  currentFocus,
  onFocusChange,
  location,
}: FocusButtonsProps) {
  const allExpertises: Focus[] = ["ux", "dev", "art"];
  const otherExpertises: Focus[] = ["dev", "art"];

  const phrase =
    "Mais je suis aussi développeuse fullstack et passionnée d'art";

  const totalPhrase =
    "Je fais de la conception produit, mais je suis aussi développeuse fullstack et passionnée d'art";

  const ArrowRight = () => (
    <svg
      className="w-4 h-4 ml-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  );

  const FocusButton = ({ exp }: { exp: Focus }) => {
    const isActive = currentFocus === exp;
    const config = expertiseConfig[currentFocus];

    // Récupérer les couleurs si disponibles, sinon fallback
    const colors = typeof config.color === "object" ? config.color : null;
    const bgColor = colors?.borderPrimary || "#D4D4D4";
    const borderColor = colors?.secondary || "#737373";
    const textColor = colors?.onSecondary || "#171717";
    const hoverBgColor = colors?.tertiary || "#E5E5E5";

    return (
      <button
        id={`${location}-${exp}`}
        onClick={() => onFocusChange(exp)}
        className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border transition-colors w-full sm:w-fit flex items-center justify-center"
        style={
          isActive
            ? {
                backgroundColor: bgColor,
                borderColor: borderColor,
                color: textColor,
              }
            : undefined
        }
        onMouseEnter={(e) => {
          if (!isActive) {
            e.currentTarget.style.backgroundColor = bgColor;
            e.currentTarget.style.borderColor = borderColor;
            e.currentTarget.style.color = textColor;
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            e.currentTarget.style.backgroundColor = "";
            e.currentTarget.style.borderColor = "";
            e.currentTarget.style.color = "";
          }
        }}
      >
        {expertiseConfig[exp].focusButtonLabel2}
        <ArrowRight />
      </button>
    );
  };

  return (
    <div id="focus-buttons" className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2 justify-start">
        {allExpertises.map((exp) => (
          <FocusButton key={exp} exp={exp} />
        ))}
      </div>
    </div>
  );
}
