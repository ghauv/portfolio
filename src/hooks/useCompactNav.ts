import { useState, useEffect, RefObject } from "react";

export function useCompactNav(
  navSectionsRef: RefObject<HTMLElement | null>,
  focusButtonsId: string = "focus-buttons"
): boolean {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    let raf = 0;
    const calc = () => {
      raf = requestAnimationFrame(() => {
        const ns = navSectionsRef.current?.getBoundingClientRect();
        const fb = document
          .getElementById(focusButtonsId)
          ?.getBoundingClientRect();
        if (!ns || !fb) return;
        const yNavSectionsBottom = ns.bottom;
        const yFocusButtonsTop = fb.top;
        const nextCompact = yNavSectionsBottom > yFocusButtonsTop;
        setCompact((prev) => (prev !== nextCompact ? nextCompact : prev));
      });
    };

    calc();
    const onScroll = () => calc();
    const onResize = () => calc();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    const fb = document.getElementById(focusButtonsId);
    const ro1 = new ResizeObserver(calc);
    const ro2 = new ResizeObserver(calc);
    if (navSectionsRef.current) ro1.observe(navSectionsRef.current);
    if (fb) ro2.observe(fb);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      ro1.disconnect();
      ro2.disconnect();
    };
  }, [navSectionsRef, focusButtonsId]);

  return compact;
}
