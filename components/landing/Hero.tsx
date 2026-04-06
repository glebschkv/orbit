"use client";

import { motion } from "framer-motion";
import { DotGrid } from "./DotGrid";
import { TextScramble } from "./TextScramble";
import { MagneticButton } from "@/components/ui/MagneticButton";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease, delay },
  },
});

const fadeOnly = (delay: number) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease, delay },
  },
});

export function Hero() {
  return (
    <section className="relative pt-[160px] pb-[100px] max-md:pt-[120px] max-md:pb-[60px] overflow-hidden">
      <DotGrid />

      {/* Subtle radial glow behind hero */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(79, 143, 247, 0.06) 0%, transparent 70%)",
        }}
      />

      <motion.div
        className="max-w-[1100px] mx-auto px-6 flex flex-col items-center relative"
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div variants={fadeUp(0)}>
          <div className="inline-flex items-center gap-2.5 bg-positive-subtle border border-positive-border px-4 py-1.5 rounded-full mb-9">
            <span
              className="w-1.5 h-1.5 rounded-full bg-positive"
              style={{
                animation: "pulse-dot 2s ease-in-out infinite",
              }}
            />
            <span className="font-mono text-xs font-medium text-positive">
              Accepting 3 founding clients
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp(0.15)}
          className="font-sans font-black text-[clamp(44px,7vw,76px)] tracking-[-0.04em] leading-[1.05] text-text-primary max-w-[800px] text-center mb-6"
        >
          <TextScramble text="613K" delay={400} className="font-mono" /> impressions.
          <br />
          Zero followers. Ten days.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeUp(0.25)}
          className="text-[18px] text-text-secondary leading-[1.7] max-w-[520px] text-center mb-11"
        >
          AI-powered X growth for SaaS founders who&apos;d rather build product
          than write tweets.
        </motion.p>

        {/* CTA button */}
        <motion.div variants={fadeUp(0.35)}>
          <MagneticButton
            href="#pricing"
            className="inline-block border border-border-hover bg-transparent text-text-primary px-9 py-3.5 rounded-[10px] text-[15px] font-semibold transition-colors duration-250 ease-out hover:bg-text-primary hover:text-background hover:border-transparent"
          >
            See pricing
          </MagneticButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeOnly(0.5)}
          className="flex flex-col items-center gap-3 mt-20"
        >
          <div
            className="w-px h-10 bg-text-muted"
            style={{
              animation: "pulse-dot 3s ease-in-out infinite",
            }}
          />
          <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted">
            scroll
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
