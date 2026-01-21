"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { services, Service } from "@/data/services";

function ServiceIcon({ type }: { type: Service["icon"] }) {
  const icons = {
    app: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    system: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    web: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    automation: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 3 21 3 21 8" />
        <line x1="4" y1="20" x2="21" y2="3" />
        <polyline points="21 16 21 21 16 21" />
        <line x1="15" y1="15" x2="21" y2="21" />
        <line x1="4" y1="4" x2="9" y2="9" />
      </svg>
    ),
  };

  return <span className="text-[var(--color-yellow)]">{icons[type]}</span>;
}

export function Services() {
  return (
    <section id="servicios" className="section-padding">
      <div className="container-main">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="mb-12">
            <div className="accent-line mb-6" />
            <h2 className="text-h2">Qué hacemos</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="card p-6 md:p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-[var(--radius-md)] bg-[var(--color-yellow)]/10">
                    <ServiceIcon type={service.icon} />
                  </div>
                  <div>
                    <h3 className="text-h3 mb-2">{service.title}</h3>
                    <p className="text-body text-[var(--muted)]">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 mt-6 pl-4 border-l-2 border-[var(--color-yellow)]">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="text-body text-[var(--muted)]">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
