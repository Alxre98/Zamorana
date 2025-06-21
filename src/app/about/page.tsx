export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white to-emerald-50">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/leaves-pattern-2.png')] opacity-5"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/leaves-pattern-3.png')] opacity-5"></div>

          {/* Decorative leaves */}
          <div className="absolute top-10 left-10 w-32 h-32 text-green-200 opacity-70 transform rotate-12">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 10C30 10 20 30 20 50c0 20 10 40 30 40s30-20 30-40S70 10 50 10zm0 15c8.3 0 15 6.7 15 15s-6.7 15-15 15-15-6.7-15-15 6.7-15 15-15z" />
            </svg>
          </div>
          <div className="absolute bottom-20 right-10 w-40 h-40 text-emerald-200 opacity-60 transform -rotate-15">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 90C30 90 10 70 10 50S30 10 50 10s40 20 40 40-20 40-40 40zm0-15c13.8 0 25-11.2 25-25S63.8 25 50 25 25 36.2 25 50s11.2 25 25 25z" />
            </svg>
          </div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 text-teal-100 opacity-70 transform rotate-45">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 10L10 50l40 40 40-40L50 10zm0 20l20 20-20 20-20-20 20-20z" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 mb-8 rounded-full bg-white/90 backdrop-blur-sm border-2 border-green-100 shadow-lg">
            <svg
              className="w-12 h-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 19.477 5.754 19 7.5 19s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 19.477 18.247 19 16.5 19c-1.746 0-3.332.477-4.5 1.253"
              ></path>
            </svg>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Sobre
            </span>
            <span className="block">Zamorana</span>
          </h1>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Conectando con la esencia natural de Zamora, Venezuela a través de
              sonidos que inspiran y conservan nuestra herencia natural.
            </p>
          </div>
        </div>
      </section>

      <div id="nuestra-mision"></div>

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
