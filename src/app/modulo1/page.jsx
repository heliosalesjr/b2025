import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"
import Modulo1Intro from "@/components/content/Modulo1Intro"
import Modulo1Objetivos from "@/components/content/Modulo1Objetivos"
import Modulo1Situacao from "@/components/content/Modulo1Situacao"
import Modulo1TextBlock from "@/components/content/Modulo1TextBlock"

export default function Modulo1() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ProgressBar />
      <main >
      <Hero
        title="Módulo 1"
        subtitle="Como funciona o programa “Aprendendo a lidar com dinheiro” da BEĨ Educação e a metodologia de aplicação do material"
        />
        <Modulo1Intro />
        <Modulo1Objetivos />
        <Modulo1Situacao />
        <Modulo1TextBlock />


      </main>
      <Footer />
    </div>
  )
}

