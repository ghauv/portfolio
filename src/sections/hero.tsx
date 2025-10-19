"use client";

import { expertiseConfig, hero } from "@/mocks/hero.mock";
import { Focus } from "@/types/types";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import FocusButtons from "@/components/focus-buttons";
import Image from "next/image";

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
    <section id="hero" className="md:h-fit section-padding bg-gray-100 flex">
      <div className="w-full flex flex-col-reverse gap-6 sm:flex-row sm:gap-0 sm:justify-left pt-12 max-w-7xl mx-auto">
        <div className="max-w-xl lg:max-w-2xl flex flex-col gap-4 sm:gap-8">
          {/* MOI & Badge */}
          <div className="flex flex-col ">
            <h1 className="text-3xl font-bold tracking-tight max-sm:flex max-sm:justify-center">
              {hero.title}
            </h1>
            <p className="text-3xl text-foreground leading-relaxed opacity-80 -mt-2 max-sm:flex max-sm:justify-center">
              {config.badge}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm sm:text-md text-foreground leading-relaxed">
              {hero.firstDescription}
            </p>
            <p className="text-sm sm:text-md text-foreground leading-relaxed opacity-80">
              {hero.secondDescription}
            </p>
          </div>
          {/* Other Expertises */}
          <FocusButtons currentFocus={focus} onFocusChange={changeFocus} />
        </div>
        <div className="w-full flex justify-center sm:justify-end lg:pr-10">
          <Image
            src="https://i.ibb.co/nqGjSDHG/DSC05337-2.jpg"
            alt="Garance Hauvette"
            width={500}
            height={500}
            className="w-30 h-30 rounded-full"
          />
        </div>
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
