import React from 'react'
import Image from 'next/image'

const PageApresentacao2 = () => {
  return (
    <div className="rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100">
      <div className="grid gap-8 md:grid-cols-3 items-center">
        {/* Imagem - 1/3 da largura */}
        <div className="flex items-center justify-center">
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/teach_intro1.jpg"
              alt="Imagem ilustrativa"
              width={300}
              height={300}
              className="rounded-xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        {/* Conteúdo - 2/3 da largura */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Autonomia
            </h2>
          </div>
          
          <p className="text-slate-700 text-lg leading-relaxed">
            Você é o <span className="font-semibold text-slate-800">protagonista</span> da sua aprendizagem! 
            Este curso permite que você estude no seu tempo e no seu ritmo, de onde estiver — 
            basta ter acesso à internet. Organize sua rotina e aproveite a liberdade de 
            aprender com             <span className="font-semibold text-green-600">flexibilidade</span> e 
            foco nos seus objetivos.
          </p>
          
          {/* Elementos visuais adicionais */}
          <div className="flex gap-4 pt-4">
            <div className="flex items-center gap-2 text-slate-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Flexível</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Online</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">No seu ritmo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageApresentacao2