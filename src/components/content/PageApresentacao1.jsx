import React from 'react'
import Image from 'next/image'

const PageApresentacao1 = () => {
  return (
    <div className="rounded-xl bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl border border-slate-100">
      <div className="grid gap-8 md:grid-cols-3 items-stretch">
        {/* Conteúdo - 2/3 da largura */}
        <div className="md:col-span-2 space-y-6 flex flex-col justify-center">
          <div className="flex items-center gap-3">
            <div className="w-1 h-12 bg-gradient-to-b from-slate-500 to-blue-500 rounded-full"></div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">
              Apresentação do Curso
            </h2>
          </div>
          
          <p className="text-slate-700 text-lg leading-relaxed">
            Este curso sobre a aplicação da Coleção{' '}
            <span className="italic font-semibold text-slate-800">Aprendendo a Lidar com Dinheiro</span>{' '}
            integra as ações de acompanhamento pedagógico promovidas pela{' '}
            <span className="font-semibold text-blue-600">BEĨ Educação</span>, voltadas aos educadores 
            e às educadoras da Secretaria de Estado de Educação de Mato Grosso que lecionam 
            Matemática para turmas do 6º ao 8º ano do Ensino Fundamental e da 1ª série do Ensino Médio.
          </p>
          
          <p className="text-slate-700 text-lg leading-relaxed">
            Desenvolvido pela equipe pedagógica da{' '}
            <span className="font-semibold text-blue-600">BEĨ Educação</span>, em parceria com a 
            equipe de tecnologia da{' '}
            <span className="font-semibold text-green-600">SEDUC</span>, o curso é oferecido no 
            formato <span className="font-semibold text-slate-800">autoinstrucional</span> — ou seja, 
            sem a presença de tutores para interação ou esclarecimento de dúvidas dos participantes.
          </p>
          
          {/* Elementos visuais adicionais */}
          <div className="flex gap-4 pt-4">
            <div className="flex items-center gap-2 text-slate-600">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Matemática</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Autoinstrucional</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">6º ao 8º ano + 1ª série EM</span>
            </div>
          </div>
        </div>
        
        {/* Imagem - 1/3 da largura */}
        <div className="flex items-center justify-center h-full">
          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-full min-h-96">
            <Image
              src="/livros_bei.png"
              alt="Imagem ilustrativa"
              fill
              className="rounded-xl object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageApresentacao1