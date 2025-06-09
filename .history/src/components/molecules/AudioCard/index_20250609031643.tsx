"use client";

import React from "react";
import { AudioPlayer } from "../../atoms/AudioPlayer";

interface AudioCardProps {
  title: string;
  description: string;
  audioSrc: string;
  className?: string;
}

export const AudioCard: React.FC<AudioCardProps> = ({
  title,
  description,
  audioSrc,
  className = "",
}) => {
  /*
  // Image rendering code - commented out to prevent 404 errors
  // Uncomment this when you have actual images to display
  
  const renderImage = (imageSrc: string) => (
    <div className="h-40 bg-gray-200">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
  */

  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
    >
      {/* Uncomment when you have images:
      {imageSrc && renderImage(imageSrc)}
      */}

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        {audioSrc ? (
          <div className="mt-2">
            <AudioPlayer src={audioSrc} />
          </div>
        ) : (
          <p className="text-sm text-gray-500 mt-2">
            Audio no disponible actualmente
          </p>
        )}
      </div>
    </div>
  );
};
