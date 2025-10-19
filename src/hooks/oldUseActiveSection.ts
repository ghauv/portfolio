import { useState, useEffect } from "react";

export type SectionKey = "hero" | "portfolio" | "resume" | "about" | "contact";

export function useOldActiveSection(
  sectionIds: SectionKey[] = ["hero", "portfolio", "resume", "about", "contact"]
): SectionKey {
  const [active, setActive] = useState<SectionKey>("hero");

  useEffect(() => {
    const els = sectionIds
      .map((id) => [id, document.getElementById(id)] as const)
      .filter(([, el]) => !!el)
      .map(([id, el]) => [id, el!] as [SectionKey, Element]);

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .map((e) => ({
            id: e.target.id as SectionKey,
            ratio: e.intersectionRatio,
          }))
          .sort((a, b) => b.ratio - a.ratio)[0];
        if (visible) setActive(visible.id);
      },
      { threshold: [0.6, 0.8, 1] }
    );

    els.forEach(([, el]) => io.observe(el));
    return () => io.disconnect();
  }, [sectionIds]);

  return active;
}
