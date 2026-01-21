"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { projects, Project } from "@/data/projects";
import { FinalCTA } from "@/components/sections/final-cta";
import { VideoModal } from "@/components/ui/video-modal";

export default function ProyectosPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenVideo = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="section-padding pt-32">
        <div className="container-main">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <div className="accent-line mb-6" />
              <h1 className="text-h1 mb-4">Proyectos</h1>
              <p className="text-body text-[var(--muted)]" style={{ maxWidth: "672px" }}>
                Casos reales de negocios que transformaron su operación con soluciones digitales a medida.
                Hacé clic en cualquier proyecto para ver una demostración.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <motion.article
                  key={project.id}
                  variants={fadeInUp}
                  className="card overflow-hidden group"
                >
                  {/* Video Preview Area */}
                  <button
                    onClick={() => handleOpenVideo(project)}
                    className="w-full aspect-video relative bg-[var(--background)] flex items-center justify-center cursor-pointer overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-yellow)]/10 via-transparent to-[var(--color-yellow)]/5" />

                    {/* Decorative elements */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="text-xs text-[var(--color-yellow)] uppercase tracking-wider font-medium px-2 py-1 bg-[var(--color-yellow)]/10 rounded">
                        {project.category === "app" && "Aplicación"}
                        {project.category === "web" && "Web"}
                        {project.category === "system" && "Sistema"}
                      </span>
                    </div>

                    {/* Play button */}
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className="w-20 h-20 rounded-full bg-[var(--color-yellow)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                        <svg
                          className="w-8 h-8 text-[var(--color-black)] ml-1"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                      <span className="text-sm text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">
                        Ver demostración
                      </span>
                    </div>
                  </button>

                  {/* Project Info */}
                  <div className="p-6 md:p-8">
                    <h2 className="text-h3 mb-4 group-hover:text-[var(--color-yellow)] transition-colors">
                      {project.title}
                    </h2>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="font-medium mb-1">Problema</h3>
                        <p className="text-body text-[var(--muted)]">
                          {project.problem}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-medium mb-1">Solución</h3>
                        <p className="text-body text-[var(--muted)]">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Resultados</h3>
                      <ul className="space-y-2 pl-4 border-l-2 border-[var(--color-yellow)]">
                        {project.results.map((result, index) => (
                          <li key={index} className="text-body text-[var(--muted)]">
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <FinalCTA />

      <VideoModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
