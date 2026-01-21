"use client";

import { useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";

interface VideoModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ project, isOpen, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleEscape]);

  // Pause video when modal closes
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  if (!project) return null;

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      app: "Aplicación",
      web: "Web",
      system: "Sistema",
    };
    return labels[category] || category;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 md:right-0 p-2 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Cerrar"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Video Container */}
            <div className="relative bg-black rounded-t-2xl overflow-hidden">
              {project.videoUrl ? (
                <video
                  ref={videoRef}
                  src={project.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="w-full aspect-video object-contain"
                  poster={project.thumbnailUrl}
                >
                  Tu navegador no soporta el elemento de video.
                </video>
              ) : (
                <div className="w-full aspect-video flex items-center justify-center bg-[var(--color-dark-gray)]">
                  <div className="text-center">
                    <svg
                      className="w-16 h-16 mx-auto mb-4 text-[var(--color-yellow)]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
                    </svg>
                    <p className="text-[var(--muted)]">Video próximamente</p>
                  </div>
                </div>
              )}
            </div>

            {/* Project Info */}
            <div className="bg-[var(--card-bg)] rounded-b-2xl p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <span className="inline-block text-sm text-[var(--color-yellow)] uppercase tracking-wider mb-2">
                    {getCategoryLabel(project.category)}
                  </span>
                  <h3 className="text-h3 text-[var(--foreground)] mb-2">{project.title}</h3>
                  <p className="text-body text-[var(--muted)]">{project.solution}</p>
                </div>

                {/* Results */}
                {project.results && project.results.length > 0 && (
                  <div className="w-full md:w-auto md:min-w-[280px] mt-4 md:mt-0">
                    <p className="text-sm font-medium text-[var(--foreground)] mb-3">Resultados:</p>
                    <ul className="space-y-2 pl-4 border-l-2 border-[var(--color-yellow)]">
                      {project.results.slice(0, 3).map((result, index) => (
                        <li key={index} className="text-sm text-[var(--muted)]">
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
