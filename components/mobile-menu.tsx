"use client"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose}></div>

      {/* Menu */}
      <div className="absolute top-0 right-0 w-64 h-full bg-card border-l border-border shadow-2xl">
        <div className="p-6 space-y-6">
          {/* Close Button */}
          <button onClick={onClose} className="ml-auto block text-foreground">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Menu Items */}
          <nav className="space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-lg text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left text-lg text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left text-lg text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="block w-full text-left text-lg text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left bg-primary text-primary-foreground px-4 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}
