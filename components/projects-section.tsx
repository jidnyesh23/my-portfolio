"use client"

import { useState } from "react"

export default function ProjectsSection() {
  // Color mapping for technologies
  const techColors: { [key: string]: string } = {
    'React': 'bg-cyan-500 text-white',
    'Tailwind CSS': 'bg-teal-400 text-white',
    'JavaScript': 'bg-yellow-400 text-black',
    'Responsive Design': 'bg-pink-400 text-white',
    'OpenWeatherMap API': 'bg-blue-500 text-white',
    'CSS': 'bg-blue-300 text-black',
    'Express.js': 'bg-gray-800 text-white',
    'Node.js': 'bg-green-600 text-white',
    'Gemini API': 'bg-purple-500 text-white',
    'AI Integration': 'bg-indigo-500 text-white',
  };
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with React and Tailwind CSS, featuring smooth animations, modern design principles, and optimized performance for all devices.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
      image: "/portfolio_image.png",
      gradient: "from-primary to-primary/70",
    },
    {
      title: "Live Weather App",
      description:
        "A real-time weather application with clean design, built using React and OpenWeatherMap API for accurate weather data.",
      technologies: ["React", "OpenWeatherMap API", "JavaScript", "CSS"],
      image: "/liveweatherapp.png",
      gradient: "from-muted-foreground to-muted-foreground/70",
    },
    {
      title: "AI-Powered Code Inspector",
      description:
        "An intelligent application that analyzes code for bugs and provides suggestions using React, Express, and Gemini API integration.",
      technologies: ["React", "Express.js", "Node.js", "Gemini API", "AI Integration"],
      image: "/codeinspector.png",
      gradient: "from-accent to-accent/70",
    },
  ]

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-12 mb-20">
          {/* Section Header */}
          <div className="space-y-4 text-reveal">
            <h2 className="text-5xl md:text-6xl font-bold text-white text-balance">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-xl max-w-2xl mx-auto text-pretty" style={{ color: '#fff' }}>
              Showcasing innovative solutions and modern web experiences
            </p>
          </div>
        </div>

        {/* Projects Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <div key={project.title} className="bg-card border border-border rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4 border border-white/20"
                style={{ background: 'rgba(0,0,0,0.04)', cursor: 'pointer' }}
                onClick={() => {
                  if (project.title === "Live Weather App") {
                    window.open("https://liveweather.page", "_blank");
                  } else {
                    const hero = document.getElementById('hero');
                    if (hero) hero.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              />
              <h3 className="text-2xl font-bold text-black mb-2 text-center">{project.title}</h3>
              <p className="text-lg mb-4 text-center" style={{ color: '#333' }}>{project.description}</p>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 border border-border text-sm ${techColors[tech] || 'bg-muted text-muted-foreground'}`}
                    style={{ borderRadius: '8px' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Project Links */}
              {project.title === "Portfolio Website" && (
                <div className="mb-4">
                  <a 
                    href="https://jidnyeschaudhari.live" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline font-medium"
                  >
                    jidnyeschaudhari.live
                  </a>
                </div>
              )}
              
              {project.title === "Live Weather App" && (
                <div className="mb-4">
                  <a 
                    href="https://liveweather.page" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline font-medium"
                  >
                    liveweather.page
                  </a>
                </div>
              )}
              
              {project.title === "AI-Powered Code Inspector" && (
                <div className="mb-4">
                  <a 
                    href="https://intellicodebyjidnyesh.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline font-medium"
                  >
                    intellicodebyjidnyesh.app
                  </a>
                </div>
              )}
              
              {/* Action Button */}
              <div className="flex justify-center pt-2">
                <button
                  className="bg-green-800 text-white px-6 py-3 font-medium hover:bg-green-900 transition-all duration-300 hover:scale-105"
                  style={{ borderRadius: '4px' }}
                  onClick={() => {
                    if (project.title === "Live Weather App") {
                      window.open("https://liveweather.page", "_blank");
                    } else {
                      const hero = document.getElementById('hero');
                      if (hero) hero.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  View Live
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Client Work Teaser */}
        <div className="mt-32 text-center space-y-8">
          <h3 className="text-reveal text-3xl font-bold" style={{ color: '#fff' }}>Client Work & Collaborations</h3>
          <p className="text-reveal text-lg max-w-2xl mx-auto text-pretty" style={{ color: '#fff' }}>
            Delivered professional websites for lawyers, chartered accountants, counsellors, and real estate agents, empowering them with a strong digital presence
          </p>
          <div className="stagger-item flex flex-wrap justify-center gap-6 pt-8">
            {["Counsellors", "Chartered Accountants and Lawyers", "Content Creators", "Small Businesses"].map((client) => (
              <div
                key={client}
                className="stagger-child bg-card border border-border rounded-xl px-6 py-4"
              >
                <span className="text-foreground font-medium">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
