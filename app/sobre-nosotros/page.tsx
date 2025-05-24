import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Play, Users, Globe, Shield } from "lucide-react"
import Link from "next/link"

export default function SobreNosotros() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sobre
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              {" "}
              Nosotros
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Somos la plataforma líder en transmisión de fútbol en vivo, conectando a los fanáticos con la pasión del
            deporte más popular del mundo.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestra Misión</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                En Pase Directo, creemos que cada fanático del fútbol merece acceso a los mejores partidos sin importar
                dónde se encuentre. Nuestra misión es democratizar el acceso al fútbol de calidad.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Trabajamos incansablemente para ofrecer la mejor experiencia de visualización, con transmisiones
                confiables y de alta calidad que te acercan a la acción como nunca antes.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="bg-green-100 dark:bg-green-900 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Comunidad</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Miles de fanáticos conectados</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 dark:bg-green-900 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Globe className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Global</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Cobertura mundial</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 dark:bg-green-900 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Play className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold mb-2">En Vivo</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Transmisiones en tiempo real</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 dark:bg-green-900 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold mb-2">Confiable</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Servicio garantizado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-800/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Nuestros Valores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Pasión</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Compartimos la misma pasión por el fútbol que nuestros usuarios. Cada partido es importante para
                nosotros.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Calidad</h3>
              <p className="text-gray-600 dark:text-gray-300">
                No comprometemos la calidad. Ofrecemos las mejores transmisiones con tecnología de punta.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Accesibilidad</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Creemos que el fútbol debe ser accesible para todos, sin barreras ni limitaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para vivir el fútbol?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Únete a miles de fanáticos que ya disfrutan del mejor fútbol en vivo.
          </p>
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
      </section>
    </div>
  )
}
