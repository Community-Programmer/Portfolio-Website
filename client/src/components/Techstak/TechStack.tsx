import type { RootState } from "@/store/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const TechStack: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const { techStack } = useSelector((state: RootState) => state.home);
  const { portfolioStats } = useSelector((state: RootState) => state.home);
  return (
    <>
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-[var(--portfolio-primary-50)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--portfolio-primary-300)] rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-[var(--portfolio-primary-400)] rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[var(--portfolio-primary-200)] rounded-full animate-ping"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-6 font-serif">
              My Tech Arsenal
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Crafting Solutions with the Right Tools
            </p>
            <p className="text-lg font-medium text-[var(--portfolio-primary)]">
              Empowering my projects with cutting-edge technologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-12">
            {techStack?.map((tech, index) => (
              <div
                key={tech.name}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <div className="tech-card relative w-full h-32 cursor-pointer perspective-1000">
                  <div
                    className={`tech-card-inner relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${hoveredTech === tech.name ? "rotate-y-180" : ""}`}
                  >
                    <div className="tech-card-face tech-card-front absolute inset-0 w-full h-full bg-card rounded-2xl shadow-lg border border-border flex flex-col items-center justify-center p-4 backface-hidden hover:border-[var(--portfolio-primary-200)] transition-colors duration-300">
                      <div className="w-8 h-8 mb-2">
                        <img
                          src={tech.icon || "/placeholder.svg"}
                          alt={tech.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="text-sm font-semibold text-card-foreground text-center">
                        {tech.name}
                      </h3>
                      <span className="text-xs font-medium text-[var(--portfolio-primary)]">
                        {tech.category}
                      </span>
                    </div>

                    <div className="tech-card-face tech-card-back absolute inset-0 w-full h-full rounded-2xl shadow-lg flex flex-col items-center justify-center p-4 backface-hidden rotate-y-180 bg-[linear-gradient(135deg,_var(--portfolio-primary),_var(--portfolio-muted))]">
                      <p className="text-white text-xs text-center mb-2 leading-tight">
                        {tech.description}
                      </p>
                      <div className="text-xs text-[var(--portfolio-primary-200)] font-medium">
                        {tech.projects.length} projects
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[var(--portfolio-primary-400)]/20 to-[var(--portfolio-primary-600)]/20 blur-xl -z-10"></div>
                </div>

                {hoveredTech === tech.name && (
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-popover text-popover-foreground px-3 py-2 rounded-lg text-xs z-20 animate-fade-in-up w-64 max-w-xs border border-border shadow-lg">
                    <div className="font-medium mb-1 text-center">
                      {tech.name}
                    </div>
                    <div className="text-xs text-muted-foreground text-center truncate">
                      {tech.projects.slice(0, 3).join(", ")}
                      {tech.projects.length > 3 &&
                        ` +${tech.projects.length - 3} more`}
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-card rounded-2xl shadow-lg border border-border hover:border-[var(--portfolio-primary-200)] transition-colors duration-300">
              <div className="text-3xl font-bold mb-2 text-[var(--portfolio-primary)]">
                {portfolioStats?.technologies}+
              </div>
              <div className="text-muted-foreground font-medium">
                Technologies
              </div>
            </div>
            <div className="text-center p-6 bg-card rounded-2xl shadow-lg border border-border hover:border-[var(--portfolio-primary-200)] transition-colors duration-300">
              <div className="text-3xl font-bold mb-2 text-[var(--portfolio-primary)]">
                {portfolioStats?.projectsBuilt}+
              </div>
              <div className="text-muted-foreground font-medium">
                Projects Built
              </div>
            </div>
            <div className="text-center p-6 bg-card rounded-2xl shadow-lg border border-border hover:border-[var(--portfolio-primary-200)] transition-colors duration-300">
              <div className="text-3xl font-bold mb-2 text-[var(--portfolio-primary)]">
                {portfolioStats?.yearsExperience}+
              </div>
              <div className="text-muted-foreground font-medium">
                Years Experience
              </div>
            </div>
            <div className="text-center p-6 bg-card rounded-2xl shadow-lg border border-border hover:border-[var(--portfolio-primary-200)] transition-colors duration-300">
              <div className="text-3xl font-bold mb-2 text-[var(--portfolio-primary)]">
                {portfolioStats?.passionDriven}%
              </div>
              <div className="text-muted-foreground font-medium">
                Passion Driven
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Each tool is a vital piece of my coding journey
            </p>
            <button className="text-white px-8 py-4 rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl bg-[linear-gradient(135deg,_var(--portfolio-primary),_var(--portfolio-muted))]">
              Let's Build Something Amazing
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechStack;
