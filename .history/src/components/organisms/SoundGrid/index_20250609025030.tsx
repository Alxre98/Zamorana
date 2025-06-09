import React from "react";
import { AudioCard } from "../../molecules";

interface SoundItem {
  id: string;
  title: string;
  description: string;
  audioSrc: string;
  imageSrc?: string;
}

interface SoundGridProps {
  sounds: SoundItem[];
  title?: string;
  description?: string;
}

export const SoundGrid: React.FC<SoundGridProps> = ({
  sounds,
  title = "Explora nuestra colección",
  description = "Descubre sonidos relajantes de la naturaleza",
}) => {
  if (!sounds || sounds.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">
          No hay sonidos disponibles en este momento.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            {description}
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sounds.map((sound) => (
            <AudioCard
              key={sound.id}
              title={sound.title}
              description={sound.description}
              audioSrc={sound.audioSrc}
              imageSrc={sound.imageSrc}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
