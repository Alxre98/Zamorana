"use client";

import React from "react";
import Image from "next/image";

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center">
      <div className="relative w-full max-w-4xl px-6 mx-auto text-center">
        {/* Contenedor principal centrado */}
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <Image
              src="/zamorana-logo.png"
              alt="Zamorana Logo"
              fill
              className="object-contain drop-shadow-lg"
              priority
              sizes="(max-width: 768px) 80vw, 60vw"
            />
          </div>
          
          {/* Texto by artikko más compacto */}
          <h1 className="text-4xl md:text-5xl font-light text-black -mt-2">
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
