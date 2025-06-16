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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-28 md:py-40 lg:py-56 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-full">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-20 w-64 h-64 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/3 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-green-50 border-2 border-green-100">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-6-18a3 3 0 00-3 3v2a3 3 0 003 3h6a3 3 0 003-3V7a3 3 0 00-3-3h-6z"
                ></path>
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Nuestras <span className="text-green-600">Colecciones</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Sumérgete en los sonidos de la naturaleza, capturados en diferentes momentos del día.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido de Colecciones */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Colección de Sonidos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sumérgete en los sonidos de la naturaleza, capturados en diferentes
            momentos del día.
          </p>
        </div>

        {Object.entries(audioByTimeOfDay).map(([timeOfDay, audios]) => (
          <section key={timeOfDay} className="mb-16">
            <div className="border-b border-gray-200 pb-2 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800">
                {timeOfDay === "Mañana"
                  ? "🌅 Amanecer"
                  : timeOfDay === "Mediodía"
                  ? "☀️ Mediodía"
                  : "🌇 Tarde/Noche"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {audios.map((audio) => (
                <AudioPlayer
                  key={audio.id}
                  src={audio.path}
                  title={audio.title}
                  description={audio.description}
                  timeOfDay={audio.timeOfDay as "Mañana" | "Mediodía" | "Tarde"}
                  location={audio.location}
                  date={audio.date}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
