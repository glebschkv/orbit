"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { FAQ_ITEMS } from "@/lib/constants";

function FAQItem({
  item,
}: {
  item: { question: string; answer: string };
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 cursor-pointer group"
      >
        <span className="text-[17px] font-semibold text-text-primary text-left pr-8 group-hover:text-accent transition-colors duration-200">
          {item.question}
        </span>
        <span
          className={`font-mono text-lg text-text-muted transition-transform duration-300 inline-block shrink-0 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[15px] text-text-secondary leading-[1.7]">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
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
          // faq
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-sans font-extrabold text-[clamp(32px,4vw,48px)] tracking-[-0.03em] leading-[1.1] text-text-primary mb-14"
        >
          Questions you&apos;re thinking.
        </motion.h2>

        {/* Accordion — max-width 680px, left-aligned */}
        <motion.div variants={fadeUp} className="max-w-[680px]">
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem key={i} item={item} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
