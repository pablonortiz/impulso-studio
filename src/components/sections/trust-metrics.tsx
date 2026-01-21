"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { metrics } from "@/data/metrics";

export function TrustMetrics() {
  return (
    <section className="section-padding border-y border-[var(--card-border)]">
      <div className="container-main">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center sm:text-left"
            >
              <p className="text-h3 text-[var(--color-yellow)] mb-2">
                {metric.value}
              </p>
              <p className="text-body text-[var(--muted)]">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
