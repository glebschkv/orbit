"use client";

import { useEffect, useRef } from "react";

export function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    let animationId: number;
    const dots: { x: number; y: number; baseX: number; baseY: number }[] = [];
    const SPACING = isFinePointer ? 40 : 60;
    const DOT_RADIUS = 1.5;
    const INFLUENCE_RADIUS = 150;
    const MAX_DISPLACEMENT = 8;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots.length = 0;
      const cols = Math.ceil(canvas.offsetWidth / SPACING) + 1;
      const rows = Math.ceil(canvas.offsetHeight / SPACING) + 1;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: i * SPACING,
            y: j * SPACING,
            baseX: i * SPACING,
            baseY: j * SPACING,
          });
        }
      }
    };

    const animate = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const centerX = w / 2;
      const centerY = h / 2;
      const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);

      for (const dot of dots) {
        if (isFinePointer) {
          const dx = mouseRef.current.x - dot.baseX;
          const dy = mouseRef.current.y - dot.baseY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < INFLUENCE_RADIUS) {
            const force =
              (1 - distance / INFLUENCE_RADIUS) * MAX_DISPLACEMENT;
            const angle = Math.atan2(dy, dx);
            dot.x = dot.baseX - Math.cos(angle) * force;
            dot.y = dot.baseY - Math.sin(angle) * force;
          } else {
            dot.x += (dot.baseX - dot.x) * 0.1;
            dot.y += (dot.baseY - dot.y) * 0.1;
          }
        }

        const distFromCenter = Math.sqrt(
          (dot.baseX - centerX) ** 2 + (dot.baseY - centerY) ** 2
        );
        const opacity = Math.max(
          0,
          0.35 - (distFromCenter / maxDist) * 0.3
        );

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79, 143, 247, ${opacity})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    resize();
    animate();
    window.addEventListener("resize", resize);
    if (isFinePointer) {
      window.addEventListener("mousemove", handleMouse);
    }

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
}
