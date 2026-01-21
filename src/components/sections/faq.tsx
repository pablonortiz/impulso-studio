"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { faqItems } from "@/data/faq";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-[var(--card-bg)]">
      <div className="container-main">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <div className="accent-line mb-6" />
            <h2 className="text-h2">Preguntas frecuentes</h2>
          </motion.div>

          <div className="max-w-2xl space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="border border-[var(--card-border)] rounded-[var(--radius-md)] overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 md:p-6 text-left bg-[var(--background)] hover:bg-[var(--card-bg)] transition-colors"
                >
                  <span className="font-medium pr-4">{item.question}</span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 text-[var(--color-yellow)]"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-4 pb-4 md:px-6 md:pb-6">
                        <p className="text-body text-[var(--muted)]">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
