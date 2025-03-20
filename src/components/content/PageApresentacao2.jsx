import React from 'react'
import Image from 'next/image'

const PageApresentacao2 = () => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="grid gap-6 md:grid-cols-2">
            <div className="flex items-center justify-center">
                <Image
                  src="/profa_ilustra.png"
                  alt="Imagem ilustrativa"
                  width={400}
                  height={200}
                  className="rounded-md object-cover"
                />
              </div>
              <div className="space-y-4">
                
                <h2 className="text-2xl font-bold pt-4">Autonomia</h2>
                <p className="text-muted-foreground py-2">
                A sua autonomia em administrar o tempo e organizar sua rotina de estudos é fundamental para o êxito na aprendizagem e alcance dos objetivos. Isso porque a trilha de aprendizagem pode ser realizada a qualquer hora e em qualquer local que tenha computador ou dispositivo móvel com acesso à internet.

                </p>
              </div>
              
            </div>
          </div>
  )
}

export default PageApresentacao2