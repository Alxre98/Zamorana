"use client";

import { getFormattedDate } from "@/lib/utils";
import AudioContainer from "@/components/molecules/AudioContainer";
import { DigitalText } from "@/components/atoms/DigitalText";
import styles from "./page.module.css";

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

// Datos de ejemplo para los audios
const audioFiles: AudioFile[] = [
  // Mañana
  {
    id: "m1",
    title: "Río Norte - Toma 1",
    description:
      "Sonidos del Río Norte en La Churca, capturando el fluir del agua entre las rocas y la vegetación circundante.",
    timeOfDay: "Mañana",
    location: "La Churca",
    date: getFormattedDate("08_11_2024"),
    path: "/audio/LaChurca_CañónDelNorte_RíoNorte_CuencaBaja_TomaV1_081124_125938_Tarde_LaChurca_CañónDelNorte_RíoNorte_CuencaBaja_TomaV1_081124_125938_Tarde.mp3",
  },
  {
    id: "m2",
    title: "Río Norte - Toma 2",
    description:
      "Segunda toma del Río Norte, capturando diferentes matices del flujo del agua en el cañón.",
    timeOfDay: "Mañana",
    location: "La Churca",
    date: getFormattedDate("08_11_2024"),
    path: "/audio/LaChurca_CañónDelNorte_RíoNorte_CuencaBaja_TomaV2_081124_130539_Tarde_LaChurca_CañónDelNorte_RíoNorte_CuencaBaja_TomaV2_081124_130539_Tarde.mp3",
  },
  {
    id: "m3",
    title: "Río Norte - Toma 3",
    description:
      "Tercera toma del Río Norte, con variaciones en la intensidad del flujo de agua.",
    timeOfDay: "Mañana",
    location: "La Churca",
    date: getFormattedDate("08_11_2024"),
    path: "/audio/LaChurca_CañónDelNorte_RíoNorte_CuencaBaja_TomaV3_081124_130956_Tarde_LaChurca_CañónDelNorte_RíoNorte_CuencaBaja_TomaV3_081124_130956_Tarde.mp3",
  },
  {
    id: "m4",
    title: "Río Norte - Toma 4",
    description:
      "Cuarta toma del Río Norte, capturando los sonidos más profundos del cañón.",
    timeOfDay: "Mañana",
    location: "La Churca",
    date: getFormattedDate("08_11_2024"),
    path: "/audio/LaChurca_CañónDelNorte_RíoNorte_CuencaBaja_TomaV4_081124_131750_Tarde_LaChurca_CañónDelNorte_RíoNorte_CuencaBaja_TomaV4_081124_131750_Tarde.mp3",
  },
  {
    id: "m5",
    title: "Río Norte - Toma 5",
    description:
      "Quinta y última toma del Río Norte, completando la experiencia sonora del cañón.",
    timeOfDay: "Mañana",
    location: "La Churca",
    date: getFormattedDate("08_11_2024"),
    path: "/audio/LaChurca_CañónDelNorte_RíoNorte_CuencaBaja_TomaV5_081124_132240_Tarde_LaChurca_CañónDelNorte_RíoNorte_CuencaBaja_TomaV5_081124_132240_Tarde.mp3",
  },

  // Mediodía
  {
    id: "md1",
    title: "Río al Mediodía",
    description:
      "El sonido del río en su punto más activo del día, con el agua fluyendo vigorosamente entre las rocas.",
    timeOfDay: "Mediodía",
    location: "La Churca",
    date: getFormattedDate("16_10_2024"),
    path: "/audios/LaChurca_RíoPacairigua_CuencaAlta_TomaV2_161024_123910_Mediodía/audio.mp3",
  },
  {
    id: "md2",
    title: "Plaza Central al Mediodía",
    description:
      "Ambiente vibrante de la plaza central con conversaciones, pasos y palomas revoloteando.",
    timeOfDay: "Mediodía",
    location: "Plaza Bolívar, Caracas",
    date: getFormattedDate("20_05_2025"),
    path: "",
  },
  {
    id: "md3",
    title: "Mercado Municipal Activo",
    description:
      "El bullicio del mercado con vendedores pregonando y compradores regateando precios de frutas frescas.",
    timeOfDay: "Mediodía",
    location: "Mercado de Chacao",
    date: getFormattedDate("05_06_2025"),
    path: "",
  },
  {
    id: "md4",
    title: "Olas del Caribe",
    description:
      "El relajante sonido de las olas rompiendo bajo el intenso sol caribeño acompañado de gaviotas.",
    timeOfDay: "Mediodía",
    location: "Playa Colorada",
    date: getFormattedDate("15_07_2025"),
    path: "",
  },
  {
    id: "md5",
    title: "Cascada en su Punto Máximo",
    description:
      "Caudal alto de la cascada golpeando las rocas, generando una niebla refrescante en el aire.",
    timeOfDay: "Mediodía",
    location: "Salto El Sapo, Canaima",
    date: getFormattedDate("01_08_2025"),
    path: "",
  },
  // Fin audios Mediodía

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
  {
    id: "t2",
    title: "Crepúsculo en la Sabana",
    description:
      "El cantar de los grillos y el viento que sopla sobre el pasto seco al caer la tarde.",
    timeOfDay: "Tarde",
    location: "Los Llanos",
    date: getFormattedDate("12_11_2024"),
    path: "",
  },
  {
    id: "t3",
    title: "Bosque Nocturno Inicial",
    description:
      "Primeros sonidos nocturnos del bosque nuboso, con ranas y aves nocturnas emergiendo.",
    timeOfDay: "Tarde",
    location: "Sierra de San Luis",
    date: getFormattedDate("18_12_2024"),
    path: "",
  },
  {
    id: "t4",
    title: "Olas al Atardecer",
    description:
      "El ir y venir de las olas bajo la luz dorada del ocaso y las aves retornando a sus nidos.",
    timeOfDay: "Tarde",
    location: "Playa Cuyagua",
    date: getFormattedDate("25_01_2025"),
    path: "",
  },
  {
    id: "t5",
    title: "Cascada al Anochecer",
    description:
      "El rugir constante de una cascada iluminada por la luna y ecos de fauna nocturna cercana.",
    timeOfDay: "Tarde",
    location: "Parque Nacional Canaima",
    date: getFormattedDate("03_02_2025"),
    path: "",
  },
  // Fin audios Tarde/Noche
];

// Agrupar audios por franja horaria
const audiosByTimeOfDay = audioFiles.reduce((acc, audio) => {
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

          {/* Texto vertical izquierda */}
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden md:block">
            <div className="text-xs font-mono font-bold tracking-widest [writing-mode:vertical-rl] transform rotate-180 text-gray-900">
              PAISAJES SONOROS
            </div>
          </div>

          {/* Texto vertical derecha */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden md:block">
            <div className="text-xs font-mono font-bold tracking-widest [writing-mode:vertical-rl] text-gray-900">
              ZAMORA VENEZUELA
            </div>
          </div>

          {/* Elementos decorativos */}
          <div className="absolute bottom-8 left-8 w-32 h-px bg-black opacity-50"></div>
          <div className="absolute top-8 right-8 w-16 h-16 border border-black opacity-30"></div>
          <div className="absolute bottom-16 right-16 w-8 h-8 border-t border-r border-black opacity-40"></div>

          {/* Texto de ubicación - Inferior izquierda */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 hidden md:block">
            <div className="text-[8px] leading-[1.2] tracking-wider font-mono text-black/70 uppercase">
              <p>Paisajes sonoros de la región</p>
              <p>central de Venezuela</p>
              <div className="h-4"></div>
              <p>Guatire • Zamora • Miranda</p>
              <p>2022-2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido de Colecciones */}
      <div className="w-full px-4 sm:px-6 lg:px-16 py-16 md:py-20">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-light text-gray-700 mb-4">
            Nuestra Colección
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Explora los sonidos de la naturaleza en diferentes momentos del día
          </p>
        </div>

        <div className="space-y-20">
          {Object.entries(audiosByTimeOfDay).map(([timeOfDay, audios]) => (
            <section key={timeOfDay} className="relative">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 inline-block relative pr-6 bg-white z-10">
                  {timeOfDay === "Mañana"
                    ? " Amanecer"
                    : timeOfDay === "Mediodía"
                    ? " Mediodía"
                    : " Tarde/Noche"}
                </h2>
                <div className="flex-grow h-px bg-gray-200 ml-4"></div>
              </div>

              <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                {audios.map((audio) => (
                  <AudioContainer
                    key={audio.id}
                    title={audio.title}
                    description={audio.description}
                    timeOfDay={audio.timeOfDay}
                    location={audio.location}
                    date={audio.date}
                    path={audio.path}
                    className="hover:shadow-lg transition-shadow duration-300"
                  />
                ))}
              </div>

              {/* Elemento decorativo de rayas */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
