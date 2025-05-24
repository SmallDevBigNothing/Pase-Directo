import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Logo Image */}
        <div className="mb-8">
          <Image
            src="/logo.jpg"
            alt="Pase Directo Logo"
            width={300}
            height={120}
            className="mx-auto h-auto w-auto max-w-xs"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          El mejor
          <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"> fútbol </span>
          en vivo
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Disfruta de todos los partidos de fútbol. ¡No te pierdas ni un gol!
        </p>

        {/* Main CTA Button */}
        <div className="flex justify-center">
          <Link href="/ver-en-directo">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" />
              Ver en Directo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
