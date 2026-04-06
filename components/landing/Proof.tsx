"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn, fadeUp, staggerContainer } from "@/lib/animations";
import { PROOF_METRICS } from "@/lib/constants";
import { WordReveal } from "@/components/ui/WordReveal";

export function Proof() {
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
          // results
        </motion.p>
        <motion.h2
          variants={fadeIn}
          className="font-sans font-extrabold text-[clamp(32px,4vw,48px)] tracking-[-0.03em] leading-[1.1] text-text-primary mb-5"
        >
          <WordReveal text="The receipts." />
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-[17px] text-text-secondary leading-[1.7] max-w-[540px] mb-14"
        >
          Real numbers from a real account. Started from zero, no ads, no paid
          followers, no tricks.
        </motion.p>

        {/* 2x2 metric cards */}
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-2 max-md:grid-cols-1 gap-4"
        >
          {PROOF_METRICS.map((item) => (
            <div
              key={item.label}
              className="card-glow relative bg-surface border border-border rounded-2xl p-9 transition-all duration-200 hover:border-border-hover hover:-translate-y-[3px]"
            >
              <span className="font-mono text-[40px] font-bold text-accent block mb-2">
                {item.metric}
              </span>
              <span className="text-[16px] font-medium text-text-secondary block mb-5">
                {item.label}
              </span>
              <div className="border-t border-border pt-4">
                <p className="text-[13px] text-text-muted leading-[1.6]">
                  {item.context}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Analytics screenshot */}
        <motion.div variants={fadeUp}>
          <div
            className="mt-10 border border-border rounded-2xl p-2 bg-surface"
            style={{
              boxShadow: "0 0 80px rgba(79, 143, 247, 0.06)",
            }}
          >
            <img
              src="/analytics.png"
              alt="X analytics dashboard — @adshotco — March 27 to April 6, 2026"
              className="w-full rounded-xl"
            />
          </div>
          <p className="mt-4 text-center font-mono text-xs text-text-muted">
            live analytics &mdash; @adshotco &mdash; march 27 to april 6, 2026
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
