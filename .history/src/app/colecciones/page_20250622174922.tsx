import { getFormattedDate } from "@/lib/utils";
import AudioPlayer from "@/components/AudioPlayer";
import { DigitalText } from "@/components/atoms/DigitalText";

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

// La función getFormattedDate está importada desde @/lib/utils

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
      <section className="relative min-h-screen w-full overflow-hidden bg-white font-['Inter']">
        {/* Fondo con rayas diagonales */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[length:60px_60px] bg-[linear-gradient(45deg,#000_2px,transparent_2px),linear-gradient(-45deg,#000_2px,transparent_2px)] opacity-10"></div>
        </div>

        {/* Contenido principal */}
        <div className="relative h-screen w-full flex items-center justify-center">
          {/* Contenedor del texto principal */}
          <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
            <h1 className="font-thin tracking-tight uppercase">
              <span className="block text-5xl md:text-7xl lg:text-8xl mb-2 text-gray-900">
                Nuestras
              </span>
              <span className="relative inline-block px-6 py-3">
                <span className="relative z-10 text-6xl md:text-8xl lg:text-[7rem] font-light text-white">
                  COLECCIONES
                </span>
                <span className="absolute inset-0 w-full h-full bg-black transform -skew-x-12 -translate-x-1"></span>
              </span>
            </h1>

            {/* Línea decorativa */}
            <div className="w-48 h-px bg-black/30 mx-auto my-12"></div>

            {/* Subtítulo */}
            <p className="text-lg md:text-xl max-w-2xl mx-auto font-light tracking-widest leading-relaxed text-gray-900/90 uppercase">
              Descubre la riqueza sonora de Zamora, Venezuela
              <span className="block mt-2 text-sm md:text-base tracking-widest font-normal">
                a través de nuestras grabaciones de campo en diferentes momentos
                del día.
              </span>
            </p>
          </div>

          {/* Textos digitales flotantes con animaciones */}
          <DigitalText
            text="SONIDOS"
            position={{ top: "15%", left: "10%" }}
            delay={1000}
            size="base"
            className="font-mono font-bold opacity-80 text-gray-900"
          />
          <DigitalText
            text="COLECCIONES"
            position={{ top: "25%", right: "15%" }}
            delay={1500}
            size="lg"
            className="font-mono font-bold text-gray-900"
          />
          <DigitalText
            text="NATURALEZA"
            position={{ bottom: "30%", left: "15%" }}
            delay={2000}
            size="base"
            className="font-mono font-bold opacity-80 text-gray-900"
          />
          <DigitalText
            text="GRABACIONES"
            position={{ bottom: "40%", right: "15%" }}
            delay={2500}
            size="sm"
            className="font-mono font-bold text-gray-900"
          />
          <DigitalText
            text="ZAMORA"
            position={{ top: "60%", right: "25%" }}
            delay={3000}
            size="base"
            className="font-mono font-bold opacity-80 text-gray-900"
          />
          <DigitalText
            text="PAISAJES"
            position={{ bottom: "20%", right: "20%" }}
            delay={3500}
            size="sm"
            className="font-mono font-bold text-gray-900"
          />
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
