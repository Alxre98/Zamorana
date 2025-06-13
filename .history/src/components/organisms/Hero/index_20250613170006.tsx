"use client";

import React from "react";
import Image from "next/image";

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <div className="relative w-full max-w-6xl px-6 mx-auto h-screen flex flex-col items-center">
        {/* Contenedor del logo (ocupará más espacio) */}
        <div className="flex-grow flex items-center justify-center w-full">
          <div className="relative w-full max-w-2xl aspect-square transform transition-all duration-700">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/zamorana-logo.png"
                alt="Zamorana Logo"
                fill
                className="object-contain p-4 drop-shadow-lg"
                priority
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </div>
          </div>
        </div>

        {/* Texto fijo en la parte inferior */}
        <div className="w-full py-8">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-black">
            <span className="inline-block align-middle text-2xl md:text-3xl font-sans not-italic font-light mr-2">
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

// Añade estas animaciones a tu archivo globals.css
/*
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
    opacity: 0.7;
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
    opacity: 0.8;
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
    opacity: 0.6;
  }
  100% {
    transform: translate(0px, 0px) scale(1);
    opacity: 0.7;
  }
}

.animate-blob {
  animation: blob 15s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
*/
