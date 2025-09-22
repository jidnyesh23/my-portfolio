"use client"

export default function SkillsSection() {
  const skillCategories = [
    {
      level: "Skilled",
      color: "from-primary to-primary/70",
      skills: [
        { name: "HTML", logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
        { name: "Git", logo: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png" },
        { name: "GitHub", logo: "https://cdn-icons-png.flaticon.com/512/733/733553.png" },
        { name: "GitLab", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968853.png" },
        { name: "Linux", logo: "https://cdn-icons-png.flaticon.com/512/226/226772.png" },
      ],
    },
    {
      level: "Intermediate",
      color: "from-accent to-accent/70",
      skills: [
        { name: "DSA", logo: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png" },
        { name: "Java", logo: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
        { name: "JavaScript", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
        { name: "CSS", logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
        { name: "Bootstrap", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png" },
        { name: "Tailwind", logo: "https://cdn-icons-png.flaticon.com/512/919/919828.png" },
        { name: "React", logo: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
  { name: "Express", logo: "https://cdn-icons-png.flaticon.com/512/919/919831.png" },
        { name: "Node.js", logo: "https://cdn-icons-png.flaticon.com/512/919/919825.png" },
      ],
    },
    {
      level: "Basic",
      color: "from-muted-foreground to-muted-foreground/70",
      skills: [
        { name: "SQL", logo: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png" },
  { name: "MongoDB", logo: "https://cdn-icons-png.flaticon.com/512/919/919836.png" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white text-balance text-center">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-xl max-w-2xl mx-auto text-pretty mb-8" style={{ color: '#fff' }}>
            A comprehensive toolkit for building modern web experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.level}
              className="space-y-8"
              style={{ marginTop: category.level === 'Intermediate' || category.level === 'Basic' ? '0.5rem' : '2rem' }}
            >
              <h3 className="text-2xl font-semibold text-white">{category.level}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {category.skills.map((skillObj, skillIndex) => (
                  <div
                    key={skillObj.name}
                    className="group relative bg-background border border-border rounded-xl p-2 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-primary/30"
                    style={{
                      animationDelay: `${categoryIndex * 100 + skillIndex * 50}ms`,
                      minWidth: '80px',
                      maxWidth: '110px',
                    }}
                  >
                    {/* Skill Card Content */}
                    <div className="text-center space-y-2">
                      <div
                        className="w-8 h-8 mx-auto rounded-lg flex items-center justify-center group-hover:animate-glow"
                      >
                        {skillObj.logo && (
                          <img src={skillObj.logo} alt={skillObj.name + " logo"} className="w-6 h-6 object-contain" />
                        )}
                      </div>
                      <h4 className="font-medium text-xs text-foreground group-hover:text-primary transition-colors duration-300">
                        {skillObj.name}
                      </h4>
                    </div>
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="pt-16 space-y-6">
          <p className="text-lg text-pretty max-w-3xl mx-auto" style={{ color: '#888' }}>
            Continuously learning and adapting to new technologies, with a focus on creating scalable, maintainable,
            and user-friendly applications.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="px-5 py-2 bg-primary/10 text-primary rounded-full text-base font-semibold">Frontend Development</span>
            <span className="px-5 py-2 bg-accent/10 text-accent rounded-full text-base font-semibold">Backend Development</span>
            <span className="px-5 py-2 bg-muted-foreground/10 text-muted-foreground rounded-full text-base font-semibold">
              <span style={{ color: '#fff' }}>Database Management</span>
            </span>
            <span className="px-5 py-2 bg-primary/10 text-primary rounded-full text-base font-semibold">Version Control</span>
          </div>
        </div>
      </div>
    </section>
  )
}
