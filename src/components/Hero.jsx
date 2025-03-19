import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Bem-vindo ao Nosso Projeto
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Este é um projeto moderno e responsivo criado com Next.js e shadcn/ui.
            </p>
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

