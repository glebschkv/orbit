"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn, fadeUp, staggerContainer } from "@/lib/animations";
import { WordReveal } from "@/components/ui/WordReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-[140px] max-md:py-[100px]" ref={ref}>
      <motion.div
        className="max-w-[1100px] mx-auto px-6 flex flex-col items-center"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h2
          variants={fadeIn}
          className="text-[clamp(36px,5vw,56px)] font-black tracking-[-0.035em] leading-[1.05] text-text-primary text-center"
        >
          <WordReveal text="Your product deserves an audience." />
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-[17px] text-text-secondary max-w-[460px] mx-auto text-center mt-6 mb-10"
        >
          Three founding spots at $500/month. Let&apos;s build your X presence.
        </motion.p>

        <motion.div variants={fadeUp}>
          <MagneticButton
            href="#"
            className="inline-block bg-accent text-white px-10 py-4 rounded-xl text-[16px] font-bold transition-colors duration-250 ease-out hover:bg-accent-hover"
            style={{
              boxShadow: "0 0 40px var(--color-accent-subtle)",
            }}
          >
            Get started &rarr;
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
