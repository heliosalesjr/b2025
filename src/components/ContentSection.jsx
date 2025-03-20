import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import PageApresentacao1 from "./content/PageApresentacao1"
import PageApresentacao2 from "./content/PageApresentacao2"
import PageApresentacao3 from "./content/PageApresentacao3"

export default function ContentSection() {
  return (
    <section id="content" className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-5xl space-y-8">
          {/* First Component - Two columns */}
          <PageApresentacao1 />

          {/* Second and Third Components - Side by side */}
          <PageApresentacao2 />

          <PageApresentacao3 />
          {/* Next Page Button */}
          <div className="flex justify-center mt-8">
            <Button asChild>
              <Link href="/page1">Próxima Página</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

