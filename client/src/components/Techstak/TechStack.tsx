import React, { useState } from 'react'

  const techStack = [
    {
      name: "React",
      category: "Frontend",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      color: "#61DAFB",
      description: "Building interactive UIs with modern React patterns",
      projects: ["Portfolio Website", "E-commerce Platform", "Admin Dashboard", "Social Media App", "Task Manager"],
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      color: "#339933",
      description: "Server-side JavaScript for scalable applications",
      projects: ["REST API Service", "Real-time Chat App", "Microservices Architecture", "Authentication System"],
    },
    {
      name: "TypeScript",
      category: "Language",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      color: "#3178C6",
      description: "Type-safe JavaScript for better development experience",
      projects: ["Enterprise Applications", "API Development", "Frontend Libraries", "Component Systems", "CLI Tools"],
    },
    {
      name: "Python",
      category: "Language",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      color: "#3776AB",
      description: "Versatile programming for web development and automation",
      projects: ["Web Scraping Tools", "API Services", "Data Processing", "Automation Scripts", "ML Models"],
    },
    {
      name: "MongoDB",
      category: "Database",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      color: "#47A248",
      description: "NoSQL database for flexible data storage",
      projects: ["User Management System", "Content Management", "Analytics Platform", "Real-time Apps"],
    },
    {
      name: "PostgreSQL",
      category: "Database",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      color: "#336791",
      description: "Robust relational database for complex applications",
      projects: ["E-commerce Backend", "Financial Applications", "Data Analytics", "Reporting Systems", "CRM Platform"],
    },
    {
      name: "Docker",
      category: "DevOps",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
      color: "#2496ED",
      description: "Containerization for consistent deployment environments",
      projects: ["Microservices Deployment", "CI/CD Pipelines", "Development Environment", "Production Setup"],
    },
    {
      name: "AWS",
      category: "Cloud",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg",
      color: "#FF9900",
      description: "Cloud infrastructure for scalable applications",
      projects: [
        "Web Application Hosting",
        "Database Services",
        "File Storage Solutions",
        "Lambda Functions",
        "API Gateway",
      ],
    },
    {
      name: "Next.js",
      category: "Framework",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
      color: "#000000",
      description: "Full-stack React framework for production applications",
      projects: ["SSR Applications", "Static Site Generation", "API Routes", "E-commerce Sites"],
    },
    {
      name: "Tailwind CSS",
      category: "Styling",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg",
      color: "#06B6D4",
      description: "Utility-first CSS framework for rapid UI development",
      projects: ["Responsive Designs", "Component Libraries", "Custom Themes", "Landing Pages", "Admin Panels"],
    },
    {
      name: "Git",
      category: "Tools",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      color: "#F05032",
      description: "Version control for collaborative development",
      projects: ["All Development Projects", "Open Source Contributions", "Team Collaboration", "Code Reviews"],
    },
    {
      name: "Linux",
      category: "System",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
      color: "#FCC624",
      description: "Server administration and development environment",
      projects: ["Server Configuration", "Automation Scripts", "System Monitoring", "DevOps Setup"],
    },
  ]

const TechStack = () => {
      const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  return (
    <>
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-200 rounded-full animate-ping"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-6 font-serif">My Tech Arsenal</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Crafting Solutions with the Right Tools
            </p>
            <p className="text-lg font-medium text-[var(--portfolio-primary)]">
              Empowering my projects with cutting-edge technologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-12">
            {techStack.map((tech, index) => (
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
                    <div className="tech-card-face tech-card-front absolute inset-0 w-full h-full bg-card rounded-2xl shadow-lg border border-border flex flex-col items-center justify-center p-4 backface-hidden hover:border-purple-200 transition-colors duration-300">
                      <div className="w-8 h-8 mb-2">
                        <img
                          src={tech.icon || "/placeholder.svg"}
                          alt={tech.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="text-sm font-semibold text-card-foreground text-center">{tech.name}</h3>
                      <span className="text-xs font-medium text-[var(--portfolio-primary)]">
                        {tech.category}
                      </span>
                    </div>

                    <div
                      className="tech-card-face tech-card-back absolute inset-0 w-full h-full rounded-2xl shadow-lg flex flex-col items-center justify-center p-4 backface-hidden rotate-y-180"
                      style={{ background: "linear-gradient(135deg, #715693, #6b5b8a)" }}
                    >
                      <p className="text-white text-xs text-center mb-2 leading-tight">{tech.description}</p>
                      <div className="text-xs text-purple-200 font-medium">{tech.projects.length} projects</div>
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-purple-400/20 to-purple-600/20 blur-xl -z-10"></div>
                </div>

                {hoveredTech === tech.name && (
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-popover text-popover-foreground px-3 py-2 rounded-lg text-xs z-20 animate-fade-in-up w-64 max-w-xs border border-border shadow-lg">
                    <div className="font-medium mb-1 text-center">{tech.name}</div>
                    <div className="text-xs text-muted-foreground text-center truncate">
                      {tech.projects.slice(0, 3).join(", ")}
                      {tech.projects.length > 3 && ` +${tech.projects.length - 3} more`}
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-border"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-card rounded-2xl shadow-lg border border-border hover:border-purple-200 transition-colors duration-300">
              <div className="text-3xl font-bold mb-2 text-[var(--portfolio-primary)]">
                12+
              </div>
              <div className="text-muted-foreground font-medium">Technologies</div>
            </div>
            <div className="text-center p-6 bg-card rounded-2xl shadow-lg border border-border hover:border-purple-200 transition-colors duration-300">
              <div className="text-3xl font-bold mb-2 text-[var(--portfolio-primary)]">
                50+
              </div>
              <div className="text-muted-foreground font-medium">Projects Built</div>
            </div>
            <div className="text-center p-6 bg-card rounded-2xl shadow-lg border border-border hover:border-purple-200 transition-colors duration-300">
              <div className="text-3xl font-bold mb-2 text-[var(--portfolio-primary)]">
                3+
              </div>
              <div className="text-muted-foreground font-medium">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-card rounded-2xl shadow-lg border border-border hover:border-purple-200 transition-colors duration-300">
              <div className="text-3xl font-bold mb-2 text-[var(--portfolio-primary)]">
                100%
              </div>
              <div className="text-muted-foreground font-medium">Passion Driven</div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">Each tool is a vital piece of my coding journey</p>
            <button
              className="text-white px-8 py-4 rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ background: "linear-gradient(135deg, #715693, #6b5b8a)" }}
            >
              Let's Build Something Amazing
            </button>
          </div>
        </div>
      </section>
    
    </>
    
  )
}

export default TechStack