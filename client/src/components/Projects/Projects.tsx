import type { RootState } from "@/store/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Projects: React.FC = () => {
  const [currentSlides, setCurrentSlides] = useState<{ [key: string]: number }>(
    {}
  );
  const { projects } = useSelector((state: RootState) => state.home);

  const nextSlide = (projectId: string, totalImages: number) => {
    setCurrentSlides((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages,
    }));
  };

  const prevSlide = (projectId: string, totalImages: number) => {
    setCurrentSlides((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  const goToSlide = (projectId: string, slideIndex: number) => {
    setCurrentSlides((prev) => ({
      ...prev,
      [projectId]: slideIndex,
    }));
  };
  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 font-serif">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Showcase of My Best Work
          </p>
          <p className="text-lg font-medium text-[var(--portfolio-primary)]">
            Transforming ideas into digital reality
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {projects?.map((project) => {
            const currentSlide = currentSlides[project.id] || 0;
            return (
              <div
                key={project.id}
                className="group bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:border-[var(--portfolio-primary-200)] transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
              >
                <div className="relative overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={project.images[currentSlide] || "/placeholder.svg"}
                      alt={`${project.title} - Image ${currentSlide + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {project.images.length > 1 && (
                      <>
                        <button
                          onClick={() =>
                            prevSlide(project.id, project.images.length)
                          }
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
                        >
                          <svg
                            className="w-5 h-5 text-gray-800"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() =>
                            nextSlide(project.id, project.images.length)
                          }
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
                        >
                          <svg
                            className="w-5 h-5 text-gray-800"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </>
                    )}
                    {project.images.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {project.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => goToSlide(project.id, index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === currentSlide
                                ? "bg-white scale-125"
                                : "bg-white/60 hover:bg-white/80"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                    {project.images.length > 1 && (
                      <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {currentSlide + 1} / {project.images.length}
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium rounded-full border border-[var(--portfolio-primary)] text-[var(--portfolio-primary)] bg-[var(--portfolio-primary-50)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm bg-[var(--portfolio-primary)]"
                    >
                      <span>Live Demo</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold border-2 transition-all duration-300 hover:scale-105 text-sm text-[var(--portfolio-primary)] border-[var(--portfolio-primary)]"
                    >
                      <span>GitHub</span>
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 mb-8">
            Want to see more of my work? Check out my complete portfolio on
            GitHub.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl bg-[linear-gradient(135deg,_var(--portfolio-primary),_var(--portfolio-muted))]"
          >
            <span>View All Projects</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
