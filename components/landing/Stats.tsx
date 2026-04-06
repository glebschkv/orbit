"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { STATS } from "@/lib/constants";
import { useAnimatedCounter } from "@/lib/hooks/useAnimatedCounter";

function StatCell({
  number,
  prefix,
  suffix,
  label,
}: {
  number: number;
  prefix?: string;
  suffix: string;
  label: string;
}) {
  const decimals = number % 1 !== 0 ? 1 : 0;
  const { ref, display } = useAnimatedCounter({
    target: number,
    prefix: prefix || "",
    suffix,
    decimals,
  });

  return (
    <div className="bg-surface p-9 max-md:p-6 text-center">
      <span
        ref={ref}
        className="font-mono text-[42px] max-md:text-[32px] font-bold text-text-primary block mb-1.5"
      >
        {display}
      </span>
      <span className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-text-muted">
        {label}
      </span>
    </div>
  );
}

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="pb-[140px] max-md:pb-[100px]" ref={ref}>
      <motion.div
        className="max-w-[1100px] mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={fadeUp}>
          <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-px bg-border border border-border rounded-2xl overflow-hidden">
            {STATS.map((stat) => (
              <StatCell
                key={stat.label}
                number={stat.number}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
