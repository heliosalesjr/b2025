import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted mx-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mx-auto">
          <div className="space-y-2 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            CURSO DE FORMAÇÃO
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            COLEÇÃO APRENDENDO A LIDAR COM DINHEIRO - BEĨ EDUCAÇÃO            </p>
          </div>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="#content">Comece Agora</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

