import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContentSection() {
  return (
    <section id="content" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-8">
          {/* First Component - Two columns */}
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Nosso Primeiro Componente</h2>
                <p className="text-muted-foreground">
                  Este é um componente de duas colunas com texto e imagem. O texto está nesta coluna, enquanto a imagem
                  está na coluna ao lado. Este componente ocupa toda a largura disponível.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/ph.jpg"
                  alt="Imagem ilustrativa"
                  width={300}
                  height={200}
                  className="rounded-md object-cover"
                />
              </div>
            </div>
          </div>

          {/* Second and Third Components - Side by side */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Second Component - FAQ */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-2xl font-bold">Perguntas Frequentes</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>O que é Next.js?</AccordionTrigger>
                  <AccordionContent>
                    Next.js é um framework React que permite funcionalidades como renderização do lado do servidor e
                    geração de sites estáticos para aplicativos web baseados em React.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>O que é shadcn/ui?</AccordionTrigger>
                  <AccordionContent>
                    shadcn/ui é uma coleção de componentes reutilizáveis que você pode copiar e colar em seus
                    aplicativos, totalmente personalizáveis e acessíveis.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Este site é responsivo?</AccordionTrigger>
                  <AccordionContent>
                    Sim! Este site foi construído com design responsivo em mente, adaptando-se a diferentes tamanhos de
                    tela.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Third Component - Image with hover effect */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="relative group">
                <Image
                  src="/ph.jpg"
                  alt="Imagem com overlay"
                  width={400}
                  height={250}
                  className="w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                  <p className="text-white p-4 text-center">
                    Este é um texto explicativo que aparece quando você passa o mouse sobre a imagem. Ele fornece
                    informações adicionais sobre o conteúdo da imagem.
                  </p>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Legenda da imagem - passe o mouse para ver mais detalhes
                </p>
              </div>
            </div>
          </div>

          {/* Next Page Button */}
          <div className="flex justify-center mt-8">
            <Button asChild>
              <Link href="/page1">Próxima Página</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

