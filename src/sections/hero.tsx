"use client";

import { expertiseConfig } from "@/mocks/hero.mock";
import { Focus } from "@/types/types";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import FocusButtons from "@/components/focus-buttons";

// Composant interne qui utilise useSearchParams
function HeroContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const focus = (searchParams.get("focus") as Focus) || "ux";

  const config = expertiseConfig[focus];

  const changeFocus = (newFocus: Focus) => {
    router.push(`/?focus=${newFocus}`, { scroll: false });
  };

  return (
    <section
      id="hero"
      className="md:h-[60vh] section-padding bg-gray-100 flex items-end justify-left"
    >
      <div className="container mx-auto max-w-7xl pt-12 pb-3 sm:py-2 md:py-1">
        {/* Badge */}
        <div className="mb-5">
          <span className="text-md text-muted-foreground px-2 py-1 bg-black text-white">
            {config.badge}
          </span>
        </div>
        <h2
          className={`h-20 text-2xl md:text-4xl font-bold tracking-tight mb-6 ${config.color} text-balance max-w-3xl`}
        >
          {config.title}
        </h2>
        <p className="text-md text-muted-foreground leading-relaxed mb-8">
          {config.subtitle}
        </p>
        {/* Other Expertises */}
        <FocusButtons currentFocus={focus} onFocusChange={changeFocus} />
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <Suspense
      fallback={
        <section className="md:h-[60vh] section-padding bg-gray-100 flex items-end justify-left">
          <div className="container mx-auto max-w-7xl py-1">
            <div className="mb-5">
              <span className="text-md text-muted-foreground px-2 py-1 bg-neutral-300">
                Chargement...
              </span>
            </div>
          </div>
        </section>
      }
    >
      <HeroContent />
    </Suspense>
  );
}
