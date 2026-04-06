"use client";

import { useRef, useState } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  strength?: number;
  style?: React.CSSProperties;
}

export function MagneticButton({
  children,
  href,
  className,
  strength = 0.3,
  style,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setTransform({
      x: (e.clientX - centerX) * strength,
      y: (e.clientY - centerY) * strength,
    });
  };

  const handleLeave = () => {
    setTransform({ x: 0, y: 0 });
  };

  return (
    <a
      ref={ref}
      href={href}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{
        ...style,
        transform: `translate(${transform.x}px, ${transform.y}px)`,
        transition:
          transform.x === 0 && transform.y === 0
            ? "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
            : "transform 0.15s ease-out",
      }}
    >
      {children}
    </a>
  );
}
