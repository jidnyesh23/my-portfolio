import type React from "react"
import BackgroundStars from "@/components/background-stars"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import Cursor from "@/components/Cursor"
import SplashCursor from "@/components/custom-cursor"
import UpArrowButton from "@/components/UpArrowButton"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Jidnyesh Chaudhari - Web Developer & Problem Solver",
  description:
    "Portfolio of Jidnyesh Chaudhari, a passionate web developer and MCA student specializing in modern web experiences and AI-powered applications.",
  generator: "v0.app",
  keywords: ["Web Developer", "React", "JavaScript", "Portfolio", "MCA Student", "AI Applications"],
  authors: [{ name: "Jidnyesh Chaudhari" }],
  openGraph: {
    title: "Jidnyesh Chaudhari - Web Developer",
    description: "Passionate web developer creating modern, user-focused experiences",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        className="font-sans antialiased"
        style={{
          background: "linear-gradient(135deg, #020001 0%, #4F2107 50%, #000000 100%)",
          minHeight: "100vh",
        }}
      >
        <SplashCursor />
        <UpArrowButton />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
