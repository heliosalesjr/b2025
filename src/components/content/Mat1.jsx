import React from 'react'
import { FaUsersCog, FaBookOpen, FaChalkboardTeacher } from 'react-icons/fa'

const Mat1 = () => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-6 md:p-10 space-y-10">
      
      {/* Título e Parágrafo */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
          Conhecendo a estrutura do Livro do Estudante
        </h2>
        <p className="text-slate-700 text-sm md:text-base max-w-3xl mx-auto">
          O Livro do Estudante aborda conteúdos do currículo de Matemática ancorados em conceitos de Educação Financeira – tais como operações com números inteiros; aumentos e descontos; interpretação de gráficos e tabelas; relação entre preço de serviços ou produtos; e grandezas como peso, tempo, área, capacidade e volume.
        </p>
      </div>

      {/* Seção com 3 blocos */}
      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-300">
        
        {/* Bloco 1 */}
        <div className="md:w-1/3 px-4 md:px-6 pb-6 md:pb-0 flex flex-col items-center text-center md:text-left">
          <FaUsersCog className="text-indigo-600 text-3xl mb-4" />
          <p className="text-slate-700 text-sm md:text-base">
            Essa integração permite que o professor de Matemática convide educadores de outros componentes curriculares, como Português, Ciências, Geografia, entre outros, para trabalhar de forma interdisciplinar.
          </p>
        </div>

        {/* Bloco 2 */}
        <div className="md:w-1/3 px-4 md:px-6 py-6 md:py-0 flex flex-col items-center text-center md:text-left">
          <FaBookOpen className="text-emerald-600 text-3xl mb-4" />
          <p className="text-slate-700 text-sm md:text-base">
            Os capítulos são estruturados em torno de reflexões e questões práticas do cotidiano, que se conectam diretamente à Educação Financeira e aos tópicos de Matemática pertinentes a cada ano escolar.
          </p>
        </div>

        {/* Bloco 3 */}
        <div className="md:w-1/3 px-4 md:px-6 pt-6 md:pt-0 flex flex-col items-center text-center md:text-left">
          <FaChalkboardTeacher className="text-yellow-500 text-3xl mb-4" />
          <p className="text-slate-700 text-sm md:text-base">
            Os exercícios são cuidadosamente alinhados com as reflexões dos capítulos, oferecendo exemplos práticos para que os estudantes possam se basear. Cada aula culmina com uma lição que responde às perguntas: por que discutimos este assunto e por que escolhemos esta abordagem?
          </p>
        </div>
      </div>

      {/* Subtítulo + PDF */}
      <div className="text-center mt-10 space-y-6">
        <h3 className="text-xl font-semibold text-slate-800">
          Veja uma amostra de um de nossos livros do estudante
        </h3>
        <div className="w-full h-[800px]">
          <iframe
            src="/sample.pdf"
            className="w-full h-full rounded-xl border"
            title="Amostra Livro do Estudante"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Mat1
