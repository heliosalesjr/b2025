import React from 'react'
import Image from 'next/image'
const PageApresentacao1 = () => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold pt-4">APRESENTAÇÃO DO CURSO</h2>
                <p className="text-muted-foreground py-2">
                Este Curso sobre a aplicação da COLEÇÃO APRENDENDO A LIDAR COM DINHEIRO faz parte das ações de acompanhamento pedagógico realizadas pela BEĨ EDUCAÇÃO aos educadores(as) da Secretaria Estadual de Educação do Estado do Mato Grosso que atuam na disciplina de Matemática com os alunos do 6º ao 8º ano do Ensino Fundamental e da 1ª série do Ensino Médio.
                </p>
                <p className="text-slate-800 text-sm py-2">
                O curso foi desenvolvido pela equipe pedagógica da BEĨ Educação em parceria com a equipe de tecnologia da SEDUC no formato autoinstrucional, ou seja, não conta com a figura de um tutor para interagir ou tirar dúvidas dos participantes.

                </p>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/livros_bei.png"
                  alt="Imagem ilustrativa"
                  width={500}
                  height={200}
                  className="rounded-md object-cover"
                />
              </div>
            </div>
          </div>
  )
}

export default PageApresentacao1