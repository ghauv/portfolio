"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export function ScrollRestoration() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Vérifier si on vient de revenir d'une page de projet
    if (typeof window !== "undefined") {
      const scrollPosition = sessionStorage.getItem("portfolioScrollPosition");

      if (scrollPosition) {
        // Petit délai pour s'assurer que la page est chargée
        setTimeout(() => {
          window.scrollTo({
            top: parseInt(scrollPosition, 10),
            behavior: "smooth",
          });

          // Nettoyer le sessionStorage après la restauration
          sessionStorage.removeItem("portfolioScrollPosition");
        }, 100);
      }
    }
  }, [searchParams]);

  return null;
}
