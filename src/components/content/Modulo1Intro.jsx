import React from 'react'
import Image from 'next/image'

const Modulo1Intro = () => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-2xl min-h-[50vh]">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Imagem */}
        <div className="w-full md:w-1/3 flex items-center justify-center md:items-stretch">
          <div className="relative w-full aspect-square md:aspect-auto md:h-full overflow-hidden rounded-md">
            <Image
              src="/pbank.jpg"
              alt="Imagem ilustrativa"
              fill
              className="object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>
        </div>

        {/* Texto */}
        <div className="w-full md:w-2/3 space-y-4">
          <h2 className="text-3xl font-bold pt-4 text-slate-900">Módulo 1</h2>
          <p className="text-slate-600">
            Sejam bem-vindos e bem-vindas ao módulo 1 da nossa formação! Nesse primeiro módulo, queremos começar falando sobre a importância da Educação Financeira para o cotidiano de qualquer pessoa e, assim, a importância de trazer isso para sala de aula.
          </p>
          <p className="text-slate-700 text-sm">
            A partir daí, vamos falar sobre a coleção <strong>Aprendendo a lidar com Dinheiro</strong>, criada para tornar o aprendizado de educação financeira em sala de aula mais prático e efetivo.
          </p>
          <p className="text-slate-700 text-sm">
            Para isso, nosso primeiro passo é fazer um diagnóstico da turma que vamos trabalhar, entendendo como vivem, seus sonhos e como a educação financeira pode fazer parte da realização desses sonhos.
          </p>
          <p className="text-slate-700 text-sm">
            Por fim, apresentamos ferramentas e atividades que podem ajudar a engajar a turma, aproximando-os do tema, uns dos outros e mesmo de você, professor e professora.
          </p>
          <p className="text-slate-700 text-sm font-medium italic">
            Bons estudos!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Modulo1Intro
