"use client";

import { useEffect, useState } from "react";

const CHARS = "0123456789ABCDEF";

interface TextScrambleProps {
  text: string;
  delay?: number;
  className?: string;
}

export function TextScramble({ text, delay = 0, className }: TextScrambleProps) {
  const [display, setDisplay] = useState(text.replace(/[^\s]/g, " "));
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let frame = 0;
    const totalFrames = 20;
    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      const result = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          const charProgress = progress - i * 0.03;
          if (charProgress >= 1) return char;
          if (charProgress <= 0) return " ";
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplay(result);

      if (frame >= totalFrames + text.length * 2) {
        setDisplay(text);
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [started, text]);

  return <span className={className}>{display}</span>;
}
