"use client"

export default function ContactSection() {
  return (
  <section id="contact" className="px-6 pb-8">
      <div className="max-w-4xl mx-auto">
  <div className="text-center space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white text-balance">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Ready to bring your ideas to life? Let's start a conversation.
            </p>
          </div>

          {/* Glass Effect Contact Buttons */}
                <div className="flex flex-col md:flex-row gap-8 pt-16 justify-center items-center">
                  <button
                    onClick={() => window.location.href = 'mailto:jidnyeshtc23@gmail.com'}
                    className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 px-12 py-8 min-w-[220px] transition-all duration-700 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 focus:outline-none"
                  >
                    <span className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700"></span>
                    <span className="absolute top-1/2 left-1/2 w-0 h-0 bg-blue-400/20 rounded-full hover:w-96 hover:h-96 transition-all duration-700 -translate-x-1/2 -translate-y-1/2"></span>
                    <span className="relative z-10 flex flex-col items-center space-y-2">
                      {/* Colorful Gmail Logo */}
                      <svg className="w-10 h-10 mb-2" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path fill="#4285F4" d="M44 39.5V14.5L24 29.5L4 14.5V39.5C4 41.43 5.57 43 7.5 43H40.5C42.43 43 44 41.43 44 39.5Z"/>
                          <path fill="#34A853" d="M44 14.5V8.5C44 6.57 42.43 5 40.5 5H7.5C5.57 5 4 6.57 4 8.5V14.5L24 29.5L44 14.5Z"/>
                          <path fill="#FBBC05" d="M4 14.5L24 29.5L44 14.5L24 5.5L4 14.5Z"/>
                          <path fill="#EA4335" d="M24 29.5L4 14.5V39.5C4 41.43 5.57 43 7.5 43H40.5C42.43 43 44 41.43 44 39.5V14.5L24 29.5Z"/>
                        </g>
                      </svg>
                      <span className="text-xl font-bold text-white">Email Me</span>
                    </span>
                  </button>
                  <button
                    onClick={() => window.open('https://www.linkedin.com/in/jidnyesh-chaudhari-2ba832211/', '_blank')}
                    className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 px-12 py-8 min-w-[220px] transition-all duration-700 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 focus:outline-none"
                  >
                    <span className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700"></span>
                    <span className="absolute top-1/2 left-1/2 w-0 h-0 bg-purple-400/20 rounded-full hover:w-96 hover:h-96 transition-all duration-700 -translate-x-1/2 -translate-y-1/2"></span>
                    <span className="relative z-10 flex flex-col items-center space-y-2">
                      {/* Colorful LinkedIn Logo */}
                      <svg className="w-10 h-10 mb-2" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <rect width="48" height="48" rx="8" fill="#0A66C2"/>
                          <path fill="#fff" d="M14 19h4v15h-4V19zm2-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm7 6h3.6v2.1h.1c.5-1 1.7-2.1 3.5-2.1 3.7 0 4.4 2.4 4.4 5.5V34h-4v-7.1c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.8-2.8 3.8V34h-4V19z"/>
                        </g>
                      </svg>
                      <span className="text-xl font-bold text-white">LinkedIn</span>
                    </span>
                  </button>
                  <button
                    onClick={() => window.open('https://github.com/jidnyesh23', '_blank')}
                    className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 px-12 py-8 min-w-[220px] transition-all duration-700 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-gray-500/20 hover:scale-105 focus:outline-none"
                  >
                    <span className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700"></span>
                    <span className="absolute top-1/2 left-1/2 w-0 h-0 bg-gray-400/20 rounded-full hover:w-96 hover:h-96 transition-all duration-700 -translate-x-1/2 -translate-y-1/2"></span>
                    <span className="relative z-10 flex flex-col items-center space-y-2">
                      {/* Colorful GitHub Logo */}
                      <svg className="w-10 h-10 mb-2" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <rect width="48" height="48" rx="8" fill="#181717"/>
                          <path fill="#fff" d="M24 12c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C36.563 33.8 40 29.302 40 24c0-6.627-5.373-12-12-12z"/>
                        </g>
                      </svg>
                      <span className="text-xl font-bold text-white">GitHub</span>
                    </span>
                  </button>
                </div>

          {/* Additional Links Removed */}
        </div>
      </div>

      {/* Footer */}
  <footer className="mt-16 pt-8 pb-0 mb-0 border-t border-border text-center">
    <div className="space-y-0">
            <p className="text-muted-foreground">© 2025 Jidnyesh Chaudhari. Crafted with passion and precision.</p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js 14, React 18, Tailwind CSS, TypeScript, GSAP, WebGL, Shadcn UI, and PostCSS
          </p>
        </div>
      </footer>
    </section>
  )
}
