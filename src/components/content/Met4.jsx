"use client";

import Image from "next/image";

export default function Met4() {
  return (
    <div className="bg-white py-16 px-6 flex justify-center rounded-2xl shadow-2xl">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* Coluna Esquerda */}
        <div className="space-y-6 mx-4">
          <h2 className="text-3xl font-bold text-slate-700">
            Como trabalhar os Pequenos Projetos Didáticos Ativos
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            Existem várias formas de trabalhar por projetos, mas na coleção <strong>Aprendendo a Lidar com Dinheiro</strong>, sugerimos o <strong>Pequeno Projeto Didático Ativo (PPDA)</strong>: projeto de curta duração (mensal, bimestral ou trimestral) como fator de mobilização para engajar os estudantes, constituindo uma forma interessante e divertida de aplicar os conteúdos aprendidos. Ao fim de cada projeto, os estudantes devem apresentar os resultados para a comunidade escolar.
          </p>
        </div>

        {/* Coluna Direita */}
        <div className="flex flex-col items-center text-center space-y-4">
          <Image
            src="/abp.jpg"
            alt="Capa do livro Aprendizagem baseada em projetos"
            width={300}
            height={400}
            className="rounded-xl shadow-md"
          />
          <p className="text-sm text-gray-600">
            <strong>Sugestão de leitura:</strong><br />
            <em>Aprendizagem baseada em projetos</em>, de William N. Bender
          </p>
        </div>
      </div>
    </div>
  );
}
