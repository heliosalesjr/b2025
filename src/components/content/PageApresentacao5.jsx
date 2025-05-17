import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function CourseStructure() {
  const modules = [
    {
      title: "MÓDULO 1 - Como funciona o programa “Aprendendo a lidar com dinheiro” da BEĨ Educação e sua metodologia de aplicação",
      topics: [
        "A situação e a importância da educação financeira na sala de aula",
        "Compreendendo o programa da BEĨ Educação e a Aprendizagem Baseada em Projetos",
        "Conhecendo a estrutura do Livro do Estudante",
        "Conhecendo a estrutura do Caderno do Educador",
        "Como iniciar a aplicação do programa, engajar os estudantes e fazer os primeiros registros",
      ],
    },
    {
      title: "MÓDULO 2 - Como planejar aulas e orientar os estudantes a realizar os projetos em sala de aula",
      topics: [
        "Roteiro para elaboração do PPDA e PDA",
        "Matriz de habilidades (Quadro Geral das Etapas)",
        "Ferramenta SMART: um modelo para aperfeiçoar suas metas",
        "Ferramenta 5W2H: um modelo de plano de ação de atividades",
      ],
    },
    {
      title: "MÓDULO 3 - Como realizar o monitoramento e ferramentas de avaliação de aprendizagem ao longo do programa",
      topics: [
        "Tópico 1",
        "Tópico 2",
      ],
    },
    {
      title: "MÓDULO 4 - Como realizar o encerramento e consolidar os registros das atividades resultantes do programa",
      topics: [
        "Tópicos ainda a definir...",
      ],
    },
  ]

  return (
    <section className="w-full">
      <div className="container max-w-6xl bg-white p-6 rounded-lg shadow-2xl">
        <h2 className="mb-4 text-3xl text-center font-bold">Módulos</h2>
        <Accordion type="single" collapsible className="w-ful mx-4">
          {modules.map((module, index) => (
            <AccordionItem key={index} value={`module-${index}`} className="text-2xl">
              <AccordionTrigger>{module.title}</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-4 space-y-2">
                  {module.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
