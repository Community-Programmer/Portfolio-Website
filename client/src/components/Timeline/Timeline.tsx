import React from 'react'


const timelineData = [
  {
    date: "2023 - Present",
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    description: "Leading development of enterprise web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting scalable solutions for high-traffic applications.",
    tags: ["React", "Node.js", "AWS", "TypeScript"],
    iconColor: "green-500",
    dotColor: "purple-500",
    side: "left"
  },
  {
    date: "2021 - 2023",
    title: "Full Stack Developer",
    company: "Digital Innovations Ltd.",
    description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create responsive, user-friendly interfaces and robust backend systems.",
    tags: ["JavaScript", "Python", "MongoDB", "Docker"],
    iconColor: "blue-500",
    dotColor: "purple-400",
    side: "right"
  },
  {
    date: "2020 - 2021",
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    description: "Started my professional journey building responsive websites and learning modern development practices. Gained experience in version control, agile methodologies, and collaborative development.",
    tags: ["HTML/CSS", "JavaScript", "Git", "MySQL"],
    iconColor: "orange-500",
    dotColor: "purple-300",
    side: "left"
  },
  {
    date: "2018 - 2020",
    title: "Computer Science Graduate",
    company: "University of Technology",
    description: "Completed Bachelor's degree in Computer Science with focus on software engineering and web technologies. Built strong foundation in programming fundamentals, data structures, and software development principles.",
    tags: ["C++", "Java", "Data Structures", "Algorithms"],
    iconColor: "gray-500",
    dotColor: "purple-200",
    side: "right"
  }
];

const Timeline = () => {
  return (
    <>
{/* Timeline / Experience Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-serif">Career Timeline</h2>
            <p className="text-xl text-muted-foreground">My professional journey and key milestones</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute  md:left-1/2 left-8 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-[var(--portfolio-primary-500)] to-[var(--portfolio-primary-300)] rounded-full"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Current Position */}
              <div className="relative flex md:items-center">
                <div className="flex-1 md:pr-8 md:text-right pl-16 md:pl-0">
                  <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center md:justify-end gap-3 mb-3">
                      <span className="text-sm font-medium text-muted-foreground">2023 - Present</span>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Senior Full Stack Developer</h3>
                    <p className="text-[var(--portfolio-primary-600)] font-semibold mb-3">Tech Solutions Inc.</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      Leading development of enterprise web applications using React, Node.js, and cloud technologies.
                      Mentoring junior developers and architecting scalable solutions for high-traffic applications.
                    </p>
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">React</span>
                      <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">Node.js</span>
                      <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">AWS</span>
                      <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">TypeScript</span>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 md:left-1/2 left-8 transform md:-translate-x-1/2 -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className="flex-1 md:pl-8 hidden md:block"></div>
              </div>

              {/* Previous Position */}
              <div className="relative flex md:items-center">
                <div className="flex-1 md:pr-8 hidden md:block"></div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 md:left-1/2 left-8 transform md:-translate-x-1/2 -translate-x-1/2 w-6 h-6 bg-purple-400 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className="flex-1 md:pl-8 pl-16 md:pl-8">
                  <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium text-muted-foreground">2021 - 2023</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Full Stack Developer</h3>
                    <p className="text-purple-600 font-semibold mb-3">Digital Innovations Ltd.</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      Developed and maintained multiple client projects using modern web technologies. Collaborated with
                      design teams to create responsive, user-friendly interfaces and robust backend systems.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">JavaScript</span>
                      <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">Python</span>
                      <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">MongoDB</span>
                      <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">Docker</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Junior Position */}
              <div className="relative flex md:items-center">
                <div className="flex-1 md:pr-8 md:text-right pl-16 md:pl-0">
                  <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center md:justify-end gap-3 mb-3">
                      <span className="text-sm font-medium text-muted-foreground">2020 - 2021</span>
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Junior Web Developer</h3>
                    <p className="text-purple-600 font-semibold mb-3">StartUp Ventures</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      Started my professional journey building responsive websites and learning modern development
                      practices. Gained experience in version control, agile methodologies, and collaborative
                      development.
                    </p>
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">HTML/CSS</span>
                      <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">JavaScript</span>
                      <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">Git</span>
                      <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">MySQL</span>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 md:left-1/2 left-8 transform md:-translate-x-1/2 -translate-x-1/2 w-6 h-6 bg-purple-300 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className="flex-1 md:pl-8 hidden md:block"></div>
              </div>

              {/* Education/Beginning */}
              <div className="relative flex md:items-center">
                <div className="flex-1 md:pr-8 hidden md:block"></div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 md:left-1/2 left-8 transform md:-translate-x-1/2 -translate-x-1/2 w-6 h-6 bg-purple-200 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className="flex-1 md:pl-8 pl-16 md:pl-8">
                  <div className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                      <span className="text-sm font-medium text-muted-foreground">2018 - 2020</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Computer Science Graduate</h3>
                    <p className="text-purple-600 font-semibold mb-3">University of Technology</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      Completed Bachelor's degree in Computer Science with focus on software engineering and web
                      technologies. Built strong foundation in programming fundamentals, data structures, and software
                      development principles.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">C++</span>
                      <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">Java</span>
                      <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">
                        Data Structures
                      </span>
                      <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full">Algorithms</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Start Point */}
            <div className="absolute bottom-0 left-1/2 md:left-1/2 left-8 transform md:-translate-x-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full shadow-lg"></div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to be part of my next chapter? Let's build something amazing together.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ background: "linear-gradient(135deg, #715693, #6b5b8a)" }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
  )
}

export default Timeline