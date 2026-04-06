"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn, fadeUp, staggerContainer } from "@/lib/animations";
import { PRICING_FEATURES } from "@/lib/constants";
import { WordReveal } from "@/components/ui/WordReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="pricing"
      className="py-[140px] max-md:py-[100px]"
      ref={ref}
    >
      <motion.div
        className="max-w-[1100px] mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section header — centered */}
        <div className="text-center">
          <motion.p
            variants={fadeUp}
            className="font-mono text-xs uppercase tracking-[0.1em] text-accent mb-3.5"
          >
            // pricing
          </motion.p>
          <motion.h2
            variants={fadeIn}
            className="font-sans font-extrabold text-[clamp(32px,4vw,48px)] tracking-[-0.03em] leading-[1.1] text-text-primary mb-5"
          >
            <WordReveal text="One plan. Everything." />
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[17px] text-text-secondary leading-[1.7] max-w-[460px] mx-auto mb-14"
          >
            No tiers to compare. No feature gates. No upsells.
          </motion.p>
        </div>

        {/* Pricing card */}
        <motion.div variants={fadeUp} className="flex justify-center">
          <div className="relative overflow-hidden max-w-[580px] w-full bg-surface border border-border rounded-[20px] p-[52px_44px] max-md:p-[36px_28px]">
            {/* Top gradient line */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--color-accent), transparent)",
              }}
            />

            {/* Founding badge */}
            <div className="flex justify-center mb-7">
              <div className="inline-flex items-center gap-2 bg-accent-subtle border border-accent-border px-4 py-1.5 rounded-full">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-accent">
                  Founding rate &middot; 3 spots
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="text-center mb-1.5">
              <span className="font-mono text-[60px] max-md:text-[48px] font-bold text-text-primary leading-none">
                $500
              </span>
              <span className="text-[18px] text-text-muted font-normal ml-1">
                /mo
              </span>
            </div>
            <p className="text-center font-mono text-[13px] text-text-muted mb-9">
              3-month minimum &middot; founding rate locked for life
            </p>

            {/* Feature list */}
            <div className="mb-8">
              {PRICING_FEATURES.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 py-3.5 border-b border-border last:border-0"
                >
                  <span className="text-positive text-[15px] shrink-0">
                    &#10003;
                  </span>
                  <span className="text-[15px] text-text-secondary">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <MagneticButton
              href="#calendly"
              className="block w-full text-center bg-accent text-white px-8 py-4 rounded-xl text-[16px] font-bold transition-colors duration-250 ease-out hover:bg-accent-hover"
              style={{
                boxShadow: "0 0 40px var(--color-accent-subtle)",
              }}
            >
              Book a free strategy call &rarr;
            </MagneticButton>

            {/* Below button note */}
            <p className="text-[13px] text-text-muted text-center mt-3.5">
              Price increases to $2,000/mo after founding spots fill
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
