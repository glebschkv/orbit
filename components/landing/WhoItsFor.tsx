"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn, fadeUp, staggerContainer } from "@/lib/animations";
import { FOR_YOU_ITEMS, NOT_FOR_YOU_ITEMS } from "@/lib/constants";
import { WordReveal } from "@/components/ui/WordReveal";

export function WhoItsFor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-[140px] max-md:py-[100px]" ref={ref}>
      <motion.div
        className="max-w-[1100px] mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section header */}
        <motion.p
          variants={fadeUp}
          className="font-mono text-xs uppercase tracking-[0.1em] text-accent mb-3.5"
        >
          // fit
        </motion.p>
        <motion.h2
          variants={fadeIn}
          className="font-sans font-extrabold text-[clamp(32px,4vw,48px)] tracking-[-0.03em] leading-[1.1] text-text-primary mb-14"
        >
          <WordReveal text="Built for SaaS founders." />
        </motion.h2>

        {/* Two columns */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-2 max-md:grid-cols-1 gap-4"
        >
          {/* Left card — For you */}
          <div className="card-glow relative bg-surface border border-border rounded-2xl p-9 max-md:p-7">
            <h3 className="text-[18px] font-bold text-text-primary mb-6">
              This is for you if
            </h3>
            <div>
              {FOR_YOU_ITEMS.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 py-3 border-b border-border last:border-0"
                >
                  <span className="text-positive shrink-0 mt-0.5">
                    &rarr;
                  </span>
                  <span className="text-[15px] text-text-secondary leading-[1.65]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right card — Not for you */}
          <div className="card-glow relative bg-surface border border-border rounded-2xl p-9 max-md:p-7">
            <h3 className="text-[18px] font-bold text-text-primary mb-6">
              This is not for you if
            </h3>
            <div>
              {NOT_FOR_YOU_ITEMS.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 py-3 border-b border-border last:border-0"
                >
                  <span className="text-text-muted shrink-0 mt-0.5">
                    &times;
                  </span>
                  <span className="text-[15px] text-text-secondary leading-[1.65]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
