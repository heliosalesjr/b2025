import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import ProgressBar from "@/components/ProgressBar"

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
        <h1>Módulo 1</h1>
      </main>
      <Footer />
    </div>
  )
}

