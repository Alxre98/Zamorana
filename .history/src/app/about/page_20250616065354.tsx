
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-20 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/3 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-green-50 border-2 border-green-100">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Sobre <span className="text-green-600">Zamorana</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Conectando con la esencia natural de Zamora, Venezuela a través de sonidos que inspiran y conservan nuestra herencia natural.
              </p>
            </div>
          </div>
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


    </div>
  );
}
