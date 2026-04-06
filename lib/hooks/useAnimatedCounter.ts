"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface UseAnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

export function useAnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.8,
}: UseAnimatedCounterProps): { ref: React.RefObject<HTMLSpanElement | null>; display: string } {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);
  const rafId = useRef<number>(0);

  useEffect(() => {
    if (!isInView || target === 0) {
      setDisplay(`${prefix}0${suffix}`);
      return;
    }

    const startTime = performance.now();
    const durationMs = duration * 1000;

    function easeOut(t: number): number {
      return 1 - Math.pow(1 - t, 3);
    }

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const easedProgress = easeOut(progress);
      const current = easedProgress * target;

      const formatted =
        decimals > 0
          ? current.toFixed(decimals)
          : Math.round(current).toString();

      setDisplay(`${prefix}${formatted}${suffix}`);

      if (progress < 1) {
        rafId.current = requestAnimationFrame(tick);
      }
    }

    rafId.current = requestAnimationFrame(tick);

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [isInView, target, prefix, suffix, decimals, duration]);

  return { ref, display };
}
