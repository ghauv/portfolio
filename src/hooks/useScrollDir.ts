import { useState, useEffect, useRef } from "react";

export type ScrollDir = "up" | "down" | "idle";

export function useScrollDir(hysteresis = 0): ScrollDir {
  const [dir, setDir] = useState<ScrollDir>("idle");
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const dy = y - lastY.current;
        if (Math.abs(dy) >= hysteresis) setDir(dy > 0 ? "down" : "up");
        lastY.current = y;
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hysteresis]);

  return dir;
}
