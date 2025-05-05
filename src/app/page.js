import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import ContentSection from "@/components/ContentSection"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main >
        <Hero />
        <ContentSection />
      </main>
      <Footer />
    </div>
  )
}

