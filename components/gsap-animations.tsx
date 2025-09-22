"use client"

import { useEffect, useState } from "react"

export default function GSAPAnimations() {
  const [gsapLoaded, setGsapLoaded] = useState(false)

  useEffect(() => {
      // ...removed GSAP logic for .tech-logo...
    // Check if GSAP is already loaded
    if ((window as any).gsap) {
      setGsapLoaded(true)
      return
    }

    // Load GSAP dynamically
    const loadGSAP = async () => {
      try {
        const gsapScript = document.createElement("script")
        gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
        gsapScript.async = true

        const scrollTriggerScript = document.createElement("script")
        scrollTriggerScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
        scrollTriggerScript.async = true

        // Load GSAP first
        await new Promise((resolve, reject) => {
          gsapScript.onload = resolve
          gsapScript.onerror = reject
          document.head.appendChild(gsapScript)
        })

        // Then load ScrollTrigger
        await new Promise((resolve, reject) => {
          scrollTriggerScript.onload = resolve
          scrollTriggerScript.onerror = reject
          document.head.appendChild(scrollTriggerScript)
        })

        setGsapLoaded(true)
      } catch (error) {
        console.warn("Failed to load GSAP, using CSS animations as fallback")
      }
    }

    loadGSAP()
  }, [])

  useEffect(() => {
    if (!gsapLoaded || typeof window === "undefined") return


    try {
      let gsap: any = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;

      if (!gsap || !ScrollTrigger) return

      gsap.registerPlugin(ScrollTrigger)

      // ...existing code...

      // Hero section animations
      gsap.fromTo(
        ".hero-title",
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.5,
        },
      )

      gsap.fromTo(
        ".hero-subtitle",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.5,
        },
      )

      gsap.fromTo(
        ".hero-buttons",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.5,
        },
      )

      // Pop-up animation for hero card
      gsap.fromTo(
        ".hero-card",
        {
          opacity: 0,
          y: 40,
          scale: 0.85,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          delay: 0.7,
        }
      )

        // Premium pop-in animation for navbar
        gsap.fromTo(
          ".navbar-pop",
          {
            opacity: 0,
            y: -40,
            scale: 0.8,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1.05,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "elastic.out(1, 0.6)",
            delay: 0.5,
            onComplete: () => {
              gsap.to(".navbar-pop", {
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
              })
            }
          }
        )

        // Pop-up animation for Let's Connect button
        gsap.fromTo(
          ".letsconnect-pop",
          {
            opacity: 0,
            y: 30,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            ease: "power3.out",
            delay: 0.9,
          }
        )

      // Section reveal animations
      gsap.utils.toArray(".section-reveal").forEach((section: any) => {
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })

      // Stagger animations for cards
      gsap.utils.toArray(".stagger-item").forEach((container: any) => {
        const items = container.querySelectorAll(".stagger-child")
        if (items.length > 0) {
          gsap.fromTo(
            items,
            {
              opacity: 0,
              y: 50,
              scale: 0.9,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power2.out",
              stagger: 0.1,
              scrollTrigger: {
                trigger: container,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            },
          )
        }
      })

      // Text reveal animations
      gsap.utils.toArray(".text-reveal").forEach((text: any) => {
        gsap.fromTo(
          text,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: text,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })

      // Timeline animations for education section
      gsap.utils.toArray(".timeline-item").forEach((item: any, index: number) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
            scale: 0.8,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })

      // Scale on scroll for project images
      gsap.utils.toArray(".scale-on-scroll").forEach((element: any) => {
        gsap.fromTo(
          element,
          {
            scale: 0.8,
            opacity: 0.8,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          },
        )
      })

      // Cleanup function
      return () => {
  ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill())
      }
    } catch (error) {
      console.warn("GSAP animation setup failed:", error)
    }
  }, [gsapLoaded])

  return null
}
