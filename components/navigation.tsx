"use client"

import { useState, useEffect } from "react"


export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showNav, setShowNav] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setShowNav(window.scrollY < window.innerHeight - 80)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-transparent ${showNav ? 'navbar-pop' : 'navbar-hide'} transition-all duration-300`}
        style={{
          pointerEvents: showNav ? 'auto' : 'none',
          opacity: showNav ? 1 : 0,
          transition: 'opacity 0.6s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="relative flex items-center w-full">
            <div className="flex-1 flex items-center justify-center">
              <div className="hidden md:flex items-center space-x-6 justify-center">
                <div className="flex items-center space-x-6 border border-white/30 rounded-xl px-2 py-1 bg-transparent" style={{ boxShadow: "none" }}>
                  {[
                    { label: "About", id: "about" },
                    { label: "Projects", id: "projects" },
                    { label: "Skills", id: "skills" },
                    { label: "Education", id: "education" },
                    { label: "Contact", id: "contact" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="font-semibold px-6 py-2 bg-transparent text-white hover:text-gray-200 hover:scale-110 transition-all duration-200 focus:outline-none drop-shadow hover:bg-white/20 hover:backdrop-blur-md cursor-pointer animate-pop-fade"
                      style={{ position: "relative", overflow: "hidden", border: "none", borderRadius: "0.75rem", boxShadow: "none", transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)", animation: "pop-fade 0.7s cubic-bezier(0.4,0,0.2,1) both" }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <a
              href="https://www.linkedin.com/in/jidnyesh-chaudhari-2ba832211/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold px-8 py-3 bg-transparent text-white border border-white/30 hover:text-gray-200 hover:scale-110 transition-all duration-200 focus:outline-none drop-shadow hover:bg-white/20 hover:backdrop-blur-md hover:border-white/50 cursor-pointer rounded-md letsconnect-pop animate-pop-fade"
              style={{ position: "relative", transition: "opacity 0.6s cubic-bezier(0.4,0,0.2,1)", animation: "pop-fade 0.7s cubic-bezier(0.4,0,0.2,1) both" }}
            >
              Let's Connect
            </a>
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  )
}
import MobileMenu from "./mobile-menu"
