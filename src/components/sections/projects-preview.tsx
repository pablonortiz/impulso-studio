"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { projects, Project } from "@/data/projects";
import { VideoModal } from "@/components/ui/video-modal";

export function ProjectsPreview() {
  const featuredProjects = projects.slice(0, 3);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="section-padding">
        <div className="container-main">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={fadeInUp} className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <div className="accent-line mb-6" />
                <h2 className="text-h2">Proyectos</h2>
              </div>
              <Link href="/proyectos" className="btn btn-secondary">
                Ver todos
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  className="card p-6 cursor-pointer group"
                  onClick={() => handleProjectClick(project)}
                >
                  {/* Play Button Overlay */}
                  <div className="relative mb-6 aspect-video bg-[var(--background)] rounded-lg overflow-hidden flex items-center justify-center border border-[var(--card-border)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-yellow)]/5 to-transparent" />
                    <div className="relative z-10 w-16 h-16 rounded-full bg-[var(--color-yellow)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg
                        className="w-7 h-7 text-[var(--color-black)] ml-1"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                    <span className="absolute bottom-3 right-3 text-xs text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity">
                      Ver demo
                    </span>
                  </div>

                  <div className="mb-3">
                    <span className="text-small text-[var(--color-yellow)] uppercase tracking-wider">
                      {project.category === "app" && "Aplicación"}
                      {project.category === "web" && "Web"}
                      {project.category === "system" && "Sistema"}
                    </span>
                  </div>

                  <h3 className="text-h3 mb-3 group-hover:text-[var(--color-yellow)] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-body text-[var(--muted)]">
                    {project.solution}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <VideoModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
