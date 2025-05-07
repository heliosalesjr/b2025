import React from 'react'
import Image from 'next/image'

const Modulo1Situacao = () => {
  return (
    <div className="relative w-full h-[70vh] rounded-lg overflow-hidden shadow-2xl">
      {/* Imagem de fundo */}
      <Image
        src="/sad.webp"
        alt="Cenário preocupante"
        fill
        className="object-cover object-center z-1 transition-transform duration-500 ease-in-out hover:scale-110"
        priority
      />

      {/* Camada preta com opacidade */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Conteúdo centralizado */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center text-white">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            A situação e a importância da educação financeira na sala de aula
          </h2>
          <p className="text-sm md:text-base text-slate-100">
            Investir em educação financeira é crucial, especialmente em um contexto como o do Brasil, onde a população enfrenta desafios significativos relacionados ao endividamento e à falta de planejamento financeiro. De acordo com dados recentes do Serasa, cerca de 74 milhões de brasileiros estavam inadimplentes em dezembro de 2024, o que representa um número alarmante de consumidores com contas em atraso. Esse cenário reflete não apenas a dificuldade em gerenciar dívidas, mas também a falta de conhecimento sobre práticas financeiras saudáveis, como o orçamento familiar e a importância de poupar para emergências. A educação financeira nas escolas pode desempenhar um papel vital na inversão dessa situação, capacitando os jovens a tomarem decisões financeiras mais informadas e responsáveis.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Modulo1Situacao
