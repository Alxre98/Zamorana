"use client";

import React from "react";
import Image from "next/image";

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Contenedor del logo centrado */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-md aspect-square">
          <Image
            src="/zamorana-logo.png"
            alt="Zamorana Logo"
            fill
            className="object-contain drop-shadow-lg"
            priority
            sizes="(max-width: 768px) 80vw, 60vw"
          />
        </div>
      </div>

      {/* Contenedor del texto by artikko posicionado abajo */}
      <div className="absolute bottom-0 left-0 right-0 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-light text-black">
            <span className="inline-block align-bottom text-xl md:text-2xl font-sans not-italic font-light mr-1 text-gray-600">
              by
            </span>
            <span className="inline-block align-middle font-serif italic font-normal">
              artikko
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};
