import { useState, useEffect } from "react";

export type SectionKey = "hero" | "portfolio" | "resume" | "about" | "contact";

export function useActiveSection(): SectionKey {
  const [active, setActive] = useState<SectionKey>("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Point 1/3 depuis le haut

      const sections: SectionKey[] = [
        "hero",
        "portfolio",
        "resume",
        "about",
        "contact",
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActive(sections[i]);
            return;
          }
        }
      }
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return active;
}
