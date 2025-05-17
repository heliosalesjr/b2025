import { Tally4, BookMarked, BarChart } from "lucide-react"

export default function PageApresentacao4() {
  const cards = [
    {
      icon: Tally4,
      title: "Módulos",
      description: "O curso está estruturado em 4 módulos, compostos por seções de conteúdos relacionados à temática geral, que é a metodologia de aplicação do Programa de Educação Financeira da BEĨ Educação, através da coleção Aprendendo a Lidar com Dinheiro.",
    },
    {
      icon: BookMarked,
      title: "Conteúdo",
      description: "Para favorecer a compreensão dos conteúdos abordados neste material, no decorrer da leitura você encontrará links para ampliar o conhecimento a respeito de determinados métodos e informações; boxes com questões para reflexão...",
    },
    {
      icon: BarChart,
      title: "Referências",
      description: "...e histórias fictícias de situações que podem ocorrer no cotidiano na sala de aula, para análise e reflexão. Ao final de cada módulo, temos leituras complementares por meio de uma lista de referências. Para uma visão geral da trilha e iniciar os estudos, confira o detalhamento dos módulos no sumário a seguir.",
    },
  ]

  return (
    <section className="w-full py-6 bg-slate-100 rounded-2xl shadow-2xl">
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-6">
          
          {/* Bloco de título estilizado */}
          
          <h2 className="text-3xl text-slate-800 font-bold text-center">Estrutura do curso</h2>
          

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shadow-2xl px-8">
            {cards.map((card, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <card.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-muted-foreground">{card.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
