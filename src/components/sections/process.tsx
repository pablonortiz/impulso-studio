"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { processSteps } from "@/data/process";

export function Process() {
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
            <h2 className="text-h2">Cómo trabajamos</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className="relative"
              >
                {/* Connector line for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-12 right-0 h-[2px] bg-[var(--card-border)]" />
                )}

                <div className="flex md:flex-col items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-yellow)] flex items-center justify-center flex-shrink-0 relative z-10">
                    <span className="text-[var(--color-black)] font-semibold">
                      {step.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-medium text-lg mb-1">{step.title}</h3>
                    <p className="text-small text-[var(--muted)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
