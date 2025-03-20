import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import ContentSection from "@/components/ContentSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main >
        <Hero />
        <ContentSection />
      </main>
      <Footer />
    </div>
  )
}

