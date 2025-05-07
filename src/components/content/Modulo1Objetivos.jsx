import React from 'react'
import { FaChalkboardTeacher, FaBookOpen, FaUsers, FaTools } from 'react-icons/fa'

const objetivos = [
  {
    icon: <FaChalkboardTeacher size={32} className="text-blue-600" />,
    title: 'Educação Financeira',
    description: 'Entender por que é importante trabalhar a educação financeira em sala de aula.'
  },
  {
    icon: <FaBookOpen size={32} className="text-green-600" />,
    title: 'Conhecer a Coleção',
    description: 'Conhecer a coleção Aprendendo a Lidar com Dinheiro.'
  },
  {
    icon: <FaUsers size={32} className="text-pink-600" />,
    title: 'Diagnóstico da Turma',
    description: 'Aprender a fazer o diagnóstico do perfil da turma.'
  },
  {
    icon: <FaTools size={32} className="text-yellow-600" />,
    title: 'Ferramentas de Engajamento',
    description: 'Conhecer ferramentas e atividades para o engajamento dos estudantes.'
  }
]

const Modulo1Objetivos = () => {
  return (
    <div className="bg-white rounded-lg shadow-2xl p-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 mb-8">Objetivos do Módulo</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mb-4">
        {objetivos.map((obj, index) => (
          <div
            key={index}
            className="bg-slate-50 hover:bg-slate-100 transition-colors duration-300 rounded-xl shadow-md p-4 flex flex-col items-center text-center border border-slate-200"
          >
            <div className="mb-3">{obj.icon}</div>
            <h3 className="text-base font-semibold text-slate-800 mb-1">{obj.title}</h3>
            <p className="text-sm text-slate-600">{obj.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Modulo1Objetivos
