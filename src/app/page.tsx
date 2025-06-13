"use client";

import { Hero } from "@/components/organisms/Hero";
import { SoundGrid } from "@/components/organisms/SoundGrid";

// Mock data - replace with actual data from your API or CMS
const featuredSounds = [
  {
    id: "1",
    title: "Río Norte - Toma 1",
    description: "Grabación del río Norte en Cañón del Norte, cuenca baja",
    audioSrc:
      "/audios/LaChurca_CañónDelNorte_RíoNorte_CuencaBaja_TomaV1_081124_125938_Tarde.mp3",
  },
  {
    id: "2",
    title: "Río Norte - Toma 2",
    description: "Segunda toma del río Norte en Cañón del Norte, cuenca baja",
    audioSrc:
      "/audios/LaChurca_CañónDelNorte_RíoNorte_CuencaBaja_TomaV2_081124_130539_Tarde.mp3",
  },
  {
    id: "3",
    title: "Río Norte - Toma 3",
    description: "Tercera toma del río Norte en Cañón del Norte, cuenca baja",
    audioSrc:
      "/audios/LaChurca_CañónDelNorte_RíoNorte_CuencaBaja_TomaV4_081124_131750_Tarde.mp3",
  }
];

export default function Home() {
  return (
    <main>
      <Hero />
      <SoundGrid sounds={featuredSounds} />
    </main>
  );
}
