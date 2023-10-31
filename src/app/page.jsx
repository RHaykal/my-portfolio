import Image from "next/image"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import AboutSection from "./components/AboutSection"
import ProjectsSection from "./components/ProjectsSection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="mt-24 mx-auto px-24 py-12">
        <Hero />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  )
}
