import { Hero } from "../components/organisms/Hero";
import { SoundGrid } from "../components/organisms/SoundGrid";
import { DefaultTemplate } from "../components/templates/DefaultTemplate";

// Mock data - replace with actual data from your API or CMS
const featuredSounds = [
  {
    id: "1",
    title: "Bosque Tropical",
    description: "Sonidos relajantes de un bosque tropical al amanecer",
    audioSrc: "/sounds/forest.mp3",
    imageSrc: "/images/forest.jpg",
  },
  {
    id: "2",
    title: "Olas del Mar",
    description: "El suave sonido de las olas rompiendo en la orilla",
    audioSrc: "/sounds/ocean.mp3",
    imageSrc: "/images/ocean.jpg",
  },
  {
    id: "3",
    title: "Lluvia Ligera",
    description: "El relajante sonido de la lluvia cayendo suavemente",
    audioSrc: "/sounds/rain.mp3",
    imageSrc: "/images/rain.jpg",
  },
];

export default function Home() {
  return (
    <DefaultTemplate>
      <Hero />
      <SoundGrid
        sounds={featuredSounds}
        title="Sonidos Destacados"
        description="Nuestra selección de sonidos naturales para relajarte y concentrarte"
      />
    </DefaultTemplate>
  );
}
