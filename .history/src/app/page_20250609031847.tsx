"use client";

import { Hero } from "@/components/organisms/Hero";
import { SoundGrid } from "@/components/organisms/SoundGrid";

// Mock data - replace with actual data from your API or CMS
const featuredSounds = [
  {
    id: "1",
    title: "Bosque Tropical",
    description: "Sonidos relajantes de un bosque tropical al amanecer",
    audioSrc: "/sounds/forest.mp3",
    // imageSrc: "/images/forest.jpg", // Uncomment when you have the image
  },
  {
    id: "2",
    title: "Olas del Mar",
    description: "El suave sonido de las olas rompiendo en la orilla",
    audioSrc: "/sounds/ocean.mp3",
    // imageSrc: "/images/ocean.jpg", // Uncomment when you have the image
  },
  {
    id: "3",
    title: "Lluvia Ligera",
    description: "El relajante sonido de la lluvia cayendo suavemente",
    audioSrc: "/sounds/rain.mp3",
    // imageSrc: "/images/rain.jpg", // Uncomment when you have the image
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <SoundGrid sounds={featuredSounds} />
    </main>
  );
}
