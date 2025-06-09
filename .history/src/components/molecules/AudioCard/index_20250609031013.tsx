"use client";

import React from "react";
import Image from "next/image";
import { AudioPlayer } from "../../atoms/AudioPlayer";

interface AudioCardProps {
  title: string;
  description: string;
  audioSrc: string;
  imageSrc?: string;
  className?: string;
}

export const AudioCard: React.FC<AudioCardProps> = ({
  title,
  description,
  audioSrc,
  imageSrc,
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
    >
      {imageSrc && (
        <div className="h-40 bg-gray-200">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <AudioPlayer src={audioSrc} />
      </div>
    </div>
  );
};
