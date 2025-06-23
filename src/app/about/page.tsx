import { SobreHero } from "@/components/organisms/SobreHero";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <SobreHero />

      <div id="nuestra-mision"></div>

      {/* Mission Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-black">Nuestra Misión</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              En Zamorana, nos dedicamos a preservar y compartir la riqueza
              sonora de la naturaleza de Zamora, Guatire. Nuestro objetivo es
              crear un archivo digital accesible de sonidos ambientales que
              capturen la esencia única de esta región venezolana.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Fundado en 2025, nuestro proyecto busca conectar a las personas
              con la naturaleza a través de la escucha consciente, ofreciendo
              recursos valiosos para artistas, investigadores y amantes de la
              naturaleza.
            </p>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/Green Gradient Background.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-black mb-16">
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
    </div>
  );
}
