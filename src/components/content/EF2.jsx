import React from 'react'
import { FaGraduationCap, FaCalculator, FaBookOpen, FaChalkboardTeacher } from 'react-icons/fa'

const EF2 = () => {
  return (
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden p-6 md:p-10">
      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 ">
        
        {/* Bloco 1 */}
        <div className="md:w-1/4 px-4 md:px-6 pb-4 md:pb-0 flex flex-col items-center text-center md:text-left hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out rounded-lg">
          <FaGraduationCap className="text-indigo-600 text-3xl mb-4" />
          <p className="text-slate-700 mb-4 text-sm md:text-base">
            A Educação Financeira é, portanto, indispensável para preparar o jovem para o futuro, favorecendo sua formação como cidadão e tornando-o mais crítico e preparado para enfrentar os desafios da vida adulta.
          </p>
        </div>

        {/* Bloco 2 */}
        <div className="md:w-1/4 pb-4 px-4 md:px-6 py-6 md:py-0 flex flex-col items-center text-center md:text-left hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out rounded-lg">
          <FaCalculator className="text-emerald-600 text-3xl mb-4" />
          <p className="text-slate-700 mb-4 text-sm md:text-base">
            Além disso, seu conteúdo aplica-se ao cotidiano de todos, dialogando estreitamente com a Matemática, disciplina que cada vez mais procura associar seu conteúdo teórico com a vida prática do estudante.
          </p>
        </div>

        {/* Bloco 3 */}
        <div className="md:w-1/4 pb-4 px-4 md:px-6 py-6 md:py-0 flex flex-col items-center text-center md:text-left hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out rounded-lg">
          <FaBookOpen className="text-rose-600 text-3xl mb-4" />
          <p className="text-slate-700 mb-4 text-sm md:text-base">
            A Base Nacional Comum Curricular (BNCC), incluiu a Educação Financeira entre os temas que deverão constar nos currículos de todo o país.
          </p>
        </div>

        {/* Bloco 4 */}
        <div className="md:w-1/4 pb-4 px-4 md:px-6 pt-6 md:pt-0 flex flex-col items-center text-center md:text-left hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out rounded-lg">
          <FaChalkboardTeacher className="text-yellow-600 text-3xl mb-4" />
          <p className="text-slate-700 mb-4 text-sm md:text-base">
            Mesmo que inserido como um “tema transversal”, é na competência da Matemática que ele é mencionado explicitamente para o 5º, 6º, 7º e 9º anos do Ensino Fundamental.
          </p>
        </div>

      </div>
    </div>
  )
}

export default EF2
