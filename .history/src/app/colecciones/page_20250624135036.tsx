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
    title: "Amanecer en La Churca",
    description:
      "Sonidos del amanecer en el Río Norte, capturando el despertar de la naturaleza con el canto de las aves y el suave murmullo del agua.",
    timeOfDay: "Mañana",
    location: "La Churca",
    date: getFormattedDate("08_11_2024"),
    path: "",
  },
  {
    id: "m2",
    title: "Cascada Matinal",
    description:
      "El sonido relajante de la cascada en las primeras horas de la mañana, con el agua cayendo sobre las rocas y el bosque despertando.",
    timeOfDay: "Mañana",
    location: "Waraira Repano",
    date: getFormattedDate("10_05_2025"),
    path: "",
  },
  {
    id: "m3",
    title: "Bosque al Amanecer",
    description:
      "Los primeros rayos de sol filtrándose entre los árboles, acompañados por el crujido de las hojas y los primeros cantos de aves.",
    timeOfDay: "Mañana",
    location: "Parque Nacional El Ávila",
    date: getFormattedDate("15_06_2025"),
    path: "",
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
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

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {audios.map((audio) => (
                  <AudioContainer
                    key={audio.id}
                    title={audio.title}
                    description={audio.description}
                    timeOfDay={audio.timeOfDay}
                    location={audio.location}
                    date={audio.date}
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
