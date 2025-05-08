import React from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Met1 from './content/Met1'

const MetContentSection = () => {
  return (
    <section id="content" className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">
         <Met1 />

         
          {/* Next Page Button */}
          <div className="flex justify-center mt-8">
            <Button asChild>
              <Link href="/modulo1">Próxima Página: O Módulo 1</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MetContentSection