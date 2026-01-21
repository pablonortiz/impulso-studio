"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding">
      <div className="container-main">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-lg mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="mb-6 flex justify-center">
            <div className="accent-line" />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-[120px] font-semibold text-[var(--color-yellow)] leading-none mb-4"
          >
            404
          </motion.p>

          <motion.h1 variants={fadeInUp} className="text-h2 mb-4">
            Página no encontrada
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-body text-[var(--muted)] mb-10">
            La página que buscás no existe o fue movida.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Link href="/" className="btn btn-primary">
              Volver al inicio
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
