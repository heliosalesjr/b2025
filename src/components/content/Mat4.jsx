'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Sparkles, Brain, Users, Lightbulb, NotebookPen } from "lucide-react"

const SectionCard = ({ icon: Icon, title, children, color = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    
  >
    <Card className={`bg-gradient-to-br ${color} border border-emerald-200 shadow-md`}>
      <CardHeader className="flex flex-row items-center gap-4">
        <Icon className="w-6 h-6 text-emerald-700" />
        <CardTitle className="text-xl text-slate-800 font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-slate-700 text-justify leading-relaxed space-y-2 font-medium">
        {children}
      </CardContent>
    </Card>
  </motion.div>
)

export default function Mat4() {
  return (
    <section className="max-w-5xl mx-auto my-16 px-4 md:px-8 space-y-8 from-blue-100 to-emerald-100 rounded-2xl shadow-2xl p-6">
      <motion.h1
        className="text-center text-3xl md:text-4xl font-bold text-slate-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Diagnóstico do perfil da turma e de seus conhecimentos prévios
      </motion.h1>

      <div className="space-y-6">
        <SectionCard icon={Sparkles} title="Determinar o perfil da turma">
          <p>
            Determinar o perfil da turma é um momento precioso no qual o educador descobre os interesses dos estudantes, seus talentos e desejos, destaca suas qualidades e seus potenciais, e identifica dificuldades e limites que devem ser superados.
          </p>
          <p>
            Isso deve auxiliá-lo a criar atividades que engajem a turma, assim como a selecionar os materiais que subsidiarão o seu trabalho. Em sala de aula, quando se fala de algo que tem relação com a realidade do estudante fora da escola, o interesse pela aprendizagem aumenta, e ela se torna mais significativa.
          </p>
        </SectionCard>

        <SectionCard icon={Brain} title="Diagnóstico de conhecimentos prévios" color="bg-white">
          <p>
            Já em relação ao diagnóstico de conhecimentos prévios, é possível avaliar até que ponto os estudantes dominam os conteúdos que são pré-requisitos para a aplicação deste programa. Se os jovens não dominam conhecimentos básicos, não adianta avançar com o programa sem resolver as dificuldades prévias.
          </p>
          <p>
            Nesse caso, é preciso adotar estratégias para recuperar o conhecimento de forma que todos possam avançar no aprendizado.
          </p>
        </SectionCard>

        <SectionCard icon={Users} title="Para o diagnóstico do perfil da turma, considere:" color="bg-white">
          <ul className="list-disc list-inside space-y-1">
            <li>O que meus alunos gostam de fazer? Quais atividades realizam fora da escola?</li>
            <li>Quais suas realidades?</li>
            <li>Quais seus planos para o futuro?</li>
            <li>Quem são as pessoas que admiram e por quê?</li>
          </ul>
        </SectionCard>

        <SectionCard icon={Lightbulb} title="PARA REFLETIR" color="bg-white">
          <p>Como estas informações podem interferir no trabalho de sala de aula?</p>
        </SectionCard>

        <SectionCard icon={NotebookPen} title="Sugestões de abordagem participativa" color="bg-white">
          <p>
            Sugerimos o uso de ferramentas participativas, com capacidade de estimular uma aproximação entre educador e educandos e entre os próprios jovens, proporcionando um melhor conhecimento uns dos outros.
          </p>
          <p>Algumas ideias para realizar o diagnóstico do perfil da turma:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>→ Jogo de perguntas e respostas</li>
            <li>→ Bate-papo em pequenos grupos</li>
            <li>→ Roda de conversa</li>
            <li>→ “A pessoa mais importante da minha vida”</li>
          </ul>
        </SectionCard>
      </div>
    </section>
  )
}
