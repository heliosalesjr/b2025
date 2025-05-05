import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero({ title, subtitle, buttonText, buttonHref = "#content" }) {
  return (
    <section className="w-full min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-500 to-green-500 py-16 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center mx-auto transform translate-y-4">
          <div className="space-y-4 max-w-6xl mx-auto">
            <h1 className="text-4xl font-thin tracking-widest sm:text-5xl md:text-6xl lg:text-7xl text-white">
              {title}
            </h1>
            <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
              {subtitle}
            </p>
          </div>
          {buttonText && (
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-white/90">
                <Link href={buttonHref}>{buttonText}</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

