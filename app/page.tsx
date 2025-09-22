import Navigation from "@/components/navigation"
import BackgroundStars from "@/components/background-stars"
import EducationSection from "@/components/education-section"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import GSAPAnimations from "@/components/gsap-animations"

export default function Home() {
  return (
  <main className="min-h-screen">
      <Navigation />
      <HeroSection />
  <hr className="border-gray-300 dark:border-gray-700 my-16 mx-auto max-w-6xl h-2" />
      <div className="section-reveal">
        <AboutSection />
      </div>
      <hr className="border-gray-300 dark:border-gray-700 my-16 mx-auto max-w-4xl" />
      <div className="section-reveal stagger-item">
        <ProjectsSection />
      </div>
      <hr className="border-gray-300 dark:border-gray-700 my-16 mx-auto max-w-4xl" />
      <div className="section-reveal stagger-item">
        <SkillsSection />
      </div>
      <hr className="border-gray-300 dark:border-gray-700 my-16 mx-auto max-w-4xl" />
      <div className="section-reveal">
        <EducationSection />
      </div>
      <hr className="border-gray-300 dark:border-gray-700 my-16 mx-auto max-w-4xl" />
      <div className="section-reveal">
        <ContactSection />
      </div>
      <GSAPAnimations />
    </main>
  )
}
