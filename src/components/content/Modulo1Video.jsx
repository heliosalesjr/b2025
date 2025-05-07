import React from 'react'
import { FaLink } from 'react-icons/fa'

const Modulo1Video = () => {
  return (
    <div className="bg-white rounded-lg shadow-2xl p-6 md:p-10 space-y-8 text-center">
      {/* Título */}
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
        A Situação Financeira dos Brasileiros
      </h2>

      {/* Vídeo */}
      <div className="relative w-full pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/srOQ8l_ps0o"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>

      {/* Subtítulo */}
      <h3 className="text-xl font-semibold text-slate-800">Saiba mais</h3>

      {/* Cards com links */}
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 text-left">
        {/* Card 1 */}
        <a
          href="https://porque.com.br/endividamento-excessivo-papo-reto"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-slate-100 hover:bg-slate-200 transition-colors rounded-lg p-6 shadow hover:shadow-lg border border-slate-200"
        >
          <div className="flex items-center gap-4">
            <FaLink className="text-blue-600 text-2xl" />
            <div>
              <h4 className="text-lg font-bold text-slate-900">Endividamento Excessivo</h4>
              <p className="text-slate-600 text-sm">Entenda como o endividamento pode sair do controle e quais são os impactos disso.</p>
            </div>
          </div>
        </a>

        {/* Card 2 */}
        <a
          href="https://porque.com.br/endividamento-guetonomia-27"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-slate-100 hover:bg-slate-200 transition-colors rounded-lg p-6 shadow hover:shadow-lg border border-slate-200"
        >
          <div className="flex items-center gap-4">
            <FaLink className="text-green-600 text-2xl" />
            <div>
              <h4 className="text-lg font-bold text-slate-900">Endividamento</h4>
              <p className="text-slate-600 text-sm">Um olhar crítico e direto sobre a realidade financeira das periferias.</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Modulo1Video
