import AudioPlayer from "@/components/AudioPlayer";

// Tipos para los audios
interface AudioFile {
  id: string;
  title: string;
  description: string;
  timeOfDay: "Mañana" | "Mediodía" | "Tarde";
  location: string;
  date: string;
  path: string;
}

// Función para obtener la fecha formateada desde el nombre del archivo
const getFormattedDate = (dateStr: string) => {
  const months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  const [day, month, year] = dateStr.split("_");
  return `${day} ${months[parseInt(month) - 1]} ${year}`;
};

// Datos de ejemplo para los audios (ajusta según tus necesidades)
const audioFiles: AudioFile[] = [
  // Mañana
  {
    id: "m1",
    title: "Amanecer en La Churca",
    description:
      "Sonidos del amanecer en el Río Norte, capturando el despertar de la naturaleza.",
    timeOfDay: "Mañana",
    location: "La Churca",
    date: getFormattedDate("08_11_2024"),
    path: "/audios/LaChurca_RíoPacairigua_CuencaAlta_TomaV1_130924_111342_Mañana/audio.mp3",
  },
  {
    id: "m2",
    title: "Cascada Matinal",
    description:
      "El sonido relajante de la cascada en las primeras horas de la mañana.",
    timeOfDay: "Mañana",
    location: "Waraira Repano",
    date: getFormattedDate("10_05_2025"),
    path: "/audios/WarairaRepano_RuinasHaciendaElNorte_TomaV1_100525_114409_Mañana/audio.mp3",
  },
  // Agrega más audios de mañana...

  // Mediodía
  {
    id: "md1",
    title: "Río al Mediodía",
    description: "El sonido del río en su punto más activo del día.",
    timeOfDay: "Mediodía",
    location: "La Churca",
    date: getFormattedDate("16_10_2024"),
    path: "/audios/LaChurca_RíoPacairigua_CuencaAlta_TomaV2_161024_123910_Mediodía/audio.mp3",
  },
  // Agrega más audios de mediodía...

  // Tarde
  {
    id: "t1",
    title: "Atardecer en el Cañón",
    description:
      "Los últimos rayos de sol iluminando el cañón con sonidos de aves nocturnas.",
    timeOfDay: "Tarde",
    location: "Cañón del Norte",
    date: getFormattedDate("08_11_2024"),
    path: "/audios/LaChurca_CañónDelNorte_RíoNorte_CuencaBaja_TomaV1_081124_125938_Tarde/audio.mp3",
  },
  // Agrega más audios de tarde...
];

// Agrupar audios por franja horaria
const audioByTimeOfDay = audioFiles.reduce((acc, audio) => {
  if (!acc[audio.timeOfDay]) {
    acc[audio.timeOfDay] = [];
  }
  acc[audio.timeOfDay].push(audio);
  return acc;
}, {} as Record<string, AudioFile[]>);

export default function ColeccionesPage() {
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
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              ></path>
            </svg>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Explora Nuestras
            </span>
            <span className="block">Colecciones</span>
          </h1>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Sumérgete en los sonidos de la naturaleza, capturados en
              diferentes momentos del día en los paisajes de Zamora, Venezuela.
            </p>
          </div>
        </div>
      </section>

      {/* Contenido de Colecciones */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-light text-gray-700 mb-4">
            Nuestra{" "}
            <span className="text-green-600 font-normal">Colección</span>
          </h2>
          <div className="w-16 h-0.5 bg-green-100 mx-auto my-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Explora nuestra selección de grabaciones de campo, cuidadosamente
            capturadas para ofrecerte una experiencia auditiva inmersiva.
          </p>
        </div>

        {Object.entries(audioByTimeOfDay).map(([timeOfDay, audios]) => (
          <section key={timeOfDay} className="mb-20">
            <div className="mb-10 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 inline-flex items-center justify-center px-6 py-2 rounded-full bg-white shadow-sm border border-gray-100">
                {timeOfDay === "Mañana"
                  ? "🌅 Amanecer"
                  : timeOfDay === "Mediodía"
                  ? "☀️ Mediodía"
                  : "🌇 Tarde/Noche"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {audios.map((audio) => (
                <div key={audio.id} className="h-full">
                  <AudioPlayer
                    src={audio.path}
                    title={audio.title}
                    description={audio.description}
                    timeOfDay={
                      audio.timeOfDay as "Mañana" | "Mediodía" | "Tarde"
                    }
                    location={audio.location}
                    date={audio.date}
                  />
                </div>
              ))}

              {/* Añadir tarjetas vacías si es necesario para completar la última fila */}
              {audios.length % 3 === 2 && (
                <div className="hidden xl:block"></div>
              )}
              {audios.length % 3 === 1 && (
                <>
                  <div className="hidden xl:block"></div>
                  <div className="hidden xl:block"></div>
                </>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
