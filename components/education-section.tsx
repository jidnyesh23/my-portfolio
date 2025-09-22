"use client"

export default function EducationSection() {
  const educationData = [
    {
      period: "2024–2026",
      degree: "Master of Computer Applications (MCA)",
      institution: "D Y Patil Institute of MCA, Pune",
      grade: "SGPA: 7.38",
      status: "Current",
      color: "from-primary to-primary/70",
      logo: "/dyp.jpg"
    },
    {
      period: "2021–2024",
      degree: "B.Sc. Computer Science",
      institution: "Sir Parshurambhau College, Pune",
      grade: "CGPA: 7.61",
      status: "Completed",
      color: "from-accent to-accent/70",
      logo: "/sp.png"
    },
    {
      period: "2020–2021",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Tarapur Vidya Mandir, Mumbai",
      grade: "82%",
      status: "Completed",
      color: "from-muted-foreground to-muted-foreground/70",
      logo: "/tvm.png",
      logoSize: 24
    },
  ]

  return (
    <section id="education" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-12 mb-20">
          {/* Section Header */}
          <div className="space-y-4 text-reveal">
            <h2 className="text-5xl md:text-6xl font-bold text-white text-balance">Education Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-xl max-w-2xl mx-auto text-pretty" style={{ color: '#fff' }}>
              Building a strong foundation in computer science and technology
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-muted-foreground rounded-full"></div>

          {/* Education Items */}
          <div className="space-y-16">
            {educationData.map((item, index) => (
              <div
                key={item.degree}
                className={`timeline-item flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } gap-8 lg:gap-16 relative`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div
                    className={`w-6 h-6 bg-gradient-to-br ${item.color} rounded-full border-4 border-background shadow-lg animate-pulse`}
                  ></div>
                </div>

                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? "text-right pr-8 lg:pr-16" : "text-left pl-8 lg:pl-16"}`}>
                  <div className="bg-background/80 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 flex items-center gap-6">
                    {/* Institute Logo */}
                    <div className="flex-shrink-0 w-24 h-24 rounded-xl bg-white/20 flex items-center justify-center overflow-hidden border border-white/30 ml-8">
                      <img src={item.logo} alt={item.institution + ' logo'} className="w-24 h-24 object-contain" />
                    </div>
                    {/* Card Content */}
                    <div className="flex-1 space-y-4">
                      {/* Period & Status */}
                      <div className="flex items-center gap-2 justify-start">
                        <span
                          className={`text-sm font-medium px-3 py-1 bg-gradient-to-r ${item.color} text-white rounded-full`}
                        >
                          {item.period}
                        </span>
                        <span
                          className={`text-sm px-3 py-1 rounded-full ${
                            item.status === "Current"
                              ? "bg-primary/10 text-primary"
                              : "bg-green-900/80 text-green-200 border border-green-900/40"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                      {/* Shift left for all cards */}
                      {item.degree === "Master of Computer Applications (MCA)" || item.degree === "Higher Secondary Certificate (HSC)" || item.degree === "B.Sc. Computer Science" ? (
                        <>
                          <h3 className="text-2xl font-bold text-left ml-2" style={{ color: '#000' }}>{item.degree}</h3>
                          <p className="text-lg font-medium text-left ml-2" style={{ color: '#000' }}>{item.institution}</p>
                        </>
                      ) : (
                        <>
                          <h3 className="text-2xl font-bold text-balance" style={{ color: '#000' }}>{item.degree}</h3>
                          <p className="text-lg font-medium" style={{ color: '#000' }}>{item.institution}</p>
                        </>
                      )}
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Grade:</span>
                        <span className="font-semibold text-foreground">{item.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-20 text-center space-y-6">
          <p className="text-reveal text-lg text-pretty max-w-3xl mx-auto" style={{ color: '#fff' }}>
            Consistently maintaining strong academic performance while actively engaging in practical projects and skill development.
          </p>
        </div>
      </div>
    </section>
  )
}
