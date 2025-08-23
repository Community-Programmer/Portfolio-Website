import type { RootState } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";

const Timeline: React.FC = () => {
  const { timeline } = useSelector((state: RootState) => state.home);

  return (
    <>
      <section
        id="timeline"
        className="py-20 px-4 bg-gradient-to-br from-slate-50 to-[var(--portfolio-primary-50)] relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--portfolio-primary-300)] rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-[var(--portfolio-primary-400)] rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[var(--portfolio-primary-200)] rounded-full animate-ping"></div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-serif">
              Career Timeline
            </h2>
            <p className="text-xl text-muted-foreground">
              My professional journey and key milestones
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute md:left-1/2 left-8 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-[var(--portfolio-primary-500)] to-[var(--portfolio-primary-300)] rounded-full"></div>

            <div className="space-y-12">
              {timeline?.map((item) => (
                <div key={item.id} className="relative flex md:items-center">
                  {/* Left side content for desktop alternating layout */}
                  <div
                    className={`flex-1 ${item.side === "left" ? "md:pr-8 md:text-right" : "md:pr-8 hidden md:block"} pl-16 md:pl-0`}
                  >
                    {item.side === "left" && (
                      <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center md:justify-end gap-3 mb-3">
                          <span className="text-sm font-medium text-muted-foreground">
                            {item.period}
                          </span>
                          <div
                            className={`w-3 h-3 ${item.statusColor} rounded-full ${item.status === "current" ? "animate-pulse" : ""}`}
                          ></div>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {item.position}
                        </h3>
                        <p className="text-[var(--portfolio-primary-600)] font-semibold mb-3">
                          {item.company}
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2 md:justify-end">
                          {item.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 text-xs bg-[var(--portfolio-primary-100)] text-[var(--portfolio-primary-700)] rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Timeline Node */}
                  <div
                    className={`absolute md:left-1/2 left-8 transform md:-translate-x-1/2 -translate-x-1/2 w-6 h-6 bg-[var(--portfolio-primary)] rounded-full border-4 border-white shadow-lg z-10`}
                  ></div>

                  {/* Right side content for desktop alternating layout */}
                  <div
                    className={`flex-1 ${item.side === "right" ? "md:pl-8" : "md:pl-8 hidden md:block"} pl-16 md:pl-8`}
                  >
                    {item.side === "right" && (
                      <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className={`w-3 h-3 ${item.statusColor} rounded-full ${item.status === "current" ? "animate-pulse" : ""}`}
                          ></div>
                          <span className="text-sm font-medium text-muted-foreground">
                            {item.period}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {item.position}
                        </h3>
                        <p className="text-[var(--portfolio-primary-600)] font-semibold mb-3">
                          {item.company}
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 text-xs bg-[var(--portfolio-primary-100)] text-[var(--portfolio-primary-700)] rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline Start Point */}
            <div className="absolute bottom-0 md:left-1/2 left-8 transform md:-translate-x-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-[var(--portfolio-primary-500)] to-[var(--portfolio-primary-600)] rounded-full shadow-lg"></div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to be part of my next chapter? Let's build something amazing
              together.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl bg-[linear-gradient(135deg,_var(--portfolio-primary),_var(--portfolio-muted))]"
            >
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Let's Connect
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Timeline;
