import Image from "next/image";
import { Button } from "@/components/atoms/Button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2940&auto=format&fit=crop"
            alt="Fondo botánico con hojas verdes"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 backdrop-blur-[1px]"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 z-20 mx-auto max-w-7xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-lg">
            Sobre Zamorana
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
            Conectando con la esencia natural de Zamora, Venezuela
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Nuestra Misión</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              En Zamorana, nos dedicamos a preservar y compartir la riqueza
              sonora de la naturaleza de Zamora, Guatire. Nuestro objetivo es
              crear un archivo digital accesible de sonidos ambientales que
              capturen la esencia única de esta región venezolana.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Fundado en 2025, nuestro proyecto busca conectar a las personas
              con la naturaleza a través de la escucha consciente, ofreciendo
              recursos valiosos para artistas, investigadores y amantes de la
              naturaleza.
            </p>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-emerald-100 flex items-center justify-center">
              <span className="text-6xl">🌿</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
            Lo que ofrecemos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎵",
                title: "Biblioteca de Sonidos",
                description:
                  "Accede a nuestra creciente colección de grabaciones de campo de alta calidad.",
              },
              {
                icon: "🌱",
                title: "Conservación",
                description:
                  "Contribuye a la preservación del patrimonio sonoro natural de Zamora.",
              },
              {
                icon: "🎧",
                title: "Recursos Creativos",
                description:
                  "Material para productores musicales, artistas sonoros y creadores de contenido.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-green-50 to-emerald-50 p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Únete a Nuestra Comunidad
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explora, descubre y contribuye a nuestra creciente biblioteca de
            sonidos naturales de Zamora.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" className="px-8 py-3 text-lg">
              Explorar Sonidos
            </Button>
            <Button variant="outline" className="px-8 py-3 text-lg">
              Contribuir
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
