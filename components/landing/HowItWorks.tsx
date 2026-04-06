"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn, fadeUp, staggerContainer } from "@/lib/animations";
import { PROCESS_STEPS } from "@/lib/constants";
import { WordReveal } from "@/components/ui/WordReveal";

export function HowItWorks() {
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
          // process
        </motion.p>
        <motion.h2
          variants={fadeIn}
          className="font-sans font-extrabold text-[clamp(32px,4vw,48px)] tracking-[-0.03em] leading-[1.1] text-text-primary mb-5"
        >
          <WordReveal text="You talk. We grow." />
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-[17px] text-text-secondary leading-[1.7] max-w-[540px] mb-14"
        >
          One onboarding call, then we handle everything. You review a weekly
          report. That&apos;s it.
        </motion.p>

        {/* 3-col cards */}
        <motion.div variants={fadeUp}>
          <div className="grid grid-cols-3 max-md:grid-cols-1 gap-0.5 bg-border border border-border rounded-2xl overflow-hidden">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="bg-surface p-11 max-md:p-7 transition-colors duration-200 hover:bg-surface-hover"
              >
                <span className="font-mono text-[56px] font-bold text-border-hover leading-none block mb-7">
                  {step.num}
                </span>
                <h3 className="text-[20px] font-bold tracking-[-0.02em] text-text-primary mb-3.5">
                  {step.title}
                </h3>
                <p className="text-[15px] text-text-secondary leading-[1.65]">
                  {step.description}
                </p>
                <p className="font-mono text-xs text-text-muted mt-5">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
