import React from 'react'
import { FaUsersCog, FaBookOpen, FaChalkboardTeacher } from 'react-icons/fa'

const Mat2 = () => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-6 md:p-10 space-y-10">
          
          {/* Título e Parágrafo */}
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-700 mb-4">
            Conhecendo a estrutura do Caderno do Educador
            </h2>
            <p className="text-slate-700 text-sm md:text-base max-w-3xl mx-auto">
            O Caderno do Educador foi concebido para auxiliar você a integrar em sala de aula tanto a teoria quanto a aplicação prática da Matemática Financeira, oferecendo subsídios valiosos para o planejamento das suas aulas. 
            </p>
          </div>
    
          {/* Seção com 3 blocos */}
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-300">
            
            {/* Bloco 1 */}
          <div className="md:w-1/3 px-4 md:px-6 pb-6 md:pb-0 flex flex-col items-center text-center md:text-left">
            <FaUsersCog className="text-indigo-600 text-3xl mb-4" />
            <h3 className="text-slate-700 font-bold text-lg mb-3">Papel do educador</h3>
            <p className="text-slate-700 text-sm md:text-base">
              Em vez de um manual rígido, o caderno reúne sugestões e referências que valorizam a experiência única do(a) educador(a) como mediador(a) da aprendizagem, promovendo a autonomia dos estudantes.
            </p>
          </div>

          {/* Bloco 2 */}
          <div className="md:w-1/3 px-4 md:px-6 py-6 md:py-0 flex flex-col items-center text-center md:text-left">
            <FaBookOpen className="text-emerald-600 text-3xl mb-4" />
            <h3 className="text-slate-700 font-bold text-lg mb-3">Finalidade pedagógica</h3>
            <p className="text-slate-700 text-sm md:text-base">
              Apresenta ideias e orientações que ajudam os estudantes a explorar conceitos de Educação Financeira integrados à Matemática, desenvolvendo também competências socioemocionais previstas na BNCC, por meio de projetos práticos.
            </p>
          </div>

          {/* Bloco 3 */}
          <div className="md:w-1/3 px-4 md:px-6 pt-6 md:pt-0 flex flex-col items-center text-center md:text-left">
            <FaChalkboardTeacher className="text-yellow-500 text-3xl mb-4" />
            <h3 className="text-slate-700 font-bold text-lg mb-3">Metodologias e estrutura</h3>
            <p className="text-slate-700 text-sm md:text-base">
              A proposta é aplicar metodologias ativas por meio de atividades significativas (Plano Pedagógico Didático de Apoio), organizadas em alinhamento com as quatro partes do <em>Livro do Estudante</em>.
            </p>
          </div>
          </div>
          <div className="mt-10">
            <h3 className="text-xl md:text-2xl font-semibold text-center text-slate-800 mb-6">
              Estrutura do Caderno do Educador
            </h3>
            <ul className="space-y-4 max-w-4xl mx-auto">
              {[
                "Abordagem de conteúdos",
                "Como engajar os estudantes?",
                "Mapa esquemático dos conteúdos de matemática para o ensino básico",
                "Metodologias ativas e o trabalho das ideias fundamentais de matemática",
                "Aprendizagem Baseada em Projetos",
                "Sugestões de atividades com metodologias ativas e estratégias didáticas (é aqui que ficam os PPDAs).",
                "Referências bibliográficas, leituras e vídeos",
                "Respostas das perguntas, exercícios, atividades e questões do Livro do Estudante"
              ].map((item, index) => (
                <li
                  key={index}
                  className={`bg-slate-100 hover:bg-slate-200 transition-all duration-300 rounded-xl p-4 shadow-md text-slate-700 text-sm md:text-base flex items-start gap-2 ${
                    index === 5 ? 'font-bold text-amber-700' : ''
                  }`}
                >
                  <span className="font-semibold text-slate-600">{index + 1}.</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>  
  
  )
}

export default Mat2