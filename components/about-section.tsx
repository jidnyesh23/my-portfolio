"use client"

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-12">
          {/* Section Header */}
          <div className="space-y-4 text-reveal">
            <h2 className="text-5xl md:text-6xl font-bold text-white text-balance">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <p className="text-reveal text-xl md:text-2xl text-white leading-relaxed text-pretty max-w-3xl mx-auto">
              I’m Jidnyesh Chaudhari a MERN Stack Developer and Master’s student at D Y Patil Institute of Masters of Computer Applications, passionate about transforming ideas into impactful digital experiences.<br /><br />
              From crafting sleek, responsive portfolios to building AI-powered applications, I thrive at the intersection of problem solving, creativity, and modern web development. My work reflects not just technical skill, but an obsession with creating intuitive, user friendly interfaces that leave a lasting impression.<br /><br />
              Driven by adaptability and a hunger to learn, I’m constantly pushing boundaries, embracing challenges, and turning code into meaningful solutions.<br /><br />
            </p>
            <p className="text-white text-xl md:text-2xl leading-relaxed text-pretty max-w-3xl mx-auto">
              Continuously learning and adapting to new technologies, with a focus on creating scalable, maintainable, and user friendly applications.
            </p>
          </div>

          {/* Stats or Highlights */}
          <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {/* 2+ Years Experience */}
            <div className="relative rounded-2xl bg-white/10 border border-white/30 shadow-xl backdrop-blur-xl px-8 py-10 flex flex-col items-center justify-center space-y-2">
              <div className="text-3xl font-bold text-primary">2+</div>
              <div className="text-white">Years Experience</div>
            </div>
            {/* 10+ Projects Completed */}
            <div className="relative rounded-2xl bg-white/10 border border-white/30 shadow-xl backdrop-blur-xl px-8 py-10 flex flex-col items-center justify-center space-y-2">
              <div className="text-3xl font-bold text-muted-foreground">10+</div>
              <div className="text-white">Projects Completed</div>
            </div>
            {/* 5+ Technologies Mastered */}
            <div className="relative rounded-2xl bg-white/10 border border-white/30 shadow-xl backdrop-blur-xl px-8 py-10 flex flex-col items-center justify-center space-y-2">
              <div className="text-3xl font-bold text-foreground">5+</div>
              <div className="text-white">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
