"use client";

import React from "react";
import Image from "next/image";

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden font-['Inter']">
      {/* Líneas botánicas inspiradas en Nurture */}

      {/* Tallos principales */}
      <div className="absolute top-0 left-1/4 w-0.5 h-2/3 bg-black transform -rotate-1 origin-top"></div>
      <div className="absolute top-0 right-1/3 w-0.5 h-3/4 bg-black transform rotate-1 origin-top"></div>

      {/* Ramas */}
      <div className="absolute top-1/4 left-1/4 w-0.5 h-40 bg-black transform rotate-15 origin-top"></div>
      <div className="absolute top-1/3 right-1/3 w-0.5 h-32 bg-black transform -rotate-12 origin-top"></div>
      <div className="absolute top-1/2 left-1/3 w-0.5 h-24 bg-black transform rotate-8 origin-top"></div>

      {/* Hojas y formas orgánicas */}
      <div className="absolute top-1/5 left-1/5 w-16 h-0.5 bg-black transform rotate-45 origin-left"></div>
      <div className="absolute top-1/4 right-1/4 w-20 h-0.5 bg-black transform -rotate-30 origin-right"></div>
      <div className="absolute bottom-1/3 left-1/5 w-24 h-0.5 bg-black transform rotate-15 origin-left"></div>
      <div className="absolute top-2/3 right-1/5 w-20 h-0.5 bg-black transform -rotate-15 origin-right"></div>

      {/* Líneas curvas (simulando pétalos) */}
      <div className="absolute top-1/3 left-1/2 w-24 h-24 border-t border-r border-black rounded-tr-full transform -rotate-12"></div>
      <div className="absolute top-1/2 right-1/4 w-20 h-20 border-b border-l border-black rounded-bl-full transform rotate-6"></div>

      {/* Líneas de contorno de hojas */}
      <div className="absolute top-1/4 left-2/3 w-16 h-8 border-t border-black rounded-t-full"></div>
      <div className="absolute bottom-1/4 right-2/3 w-16 h-8 border-b border-black rounded-b-full"></div>

      {/* Líneas de textura (venas) */}
      <div className="absolute top-1/3 right-1/5 w-12 h-0.5 bg-black transform rotate-45 origin-right"></div>
      <div className="absolute bottom-1/3 left-1/5 w-12 h-0.5 bg-black transform -rotate-45 origin-left"></div>

      {/* Líneas de movimiento/sutileza */}
      <div className="absolute top-1/6 left-0 w-1/3 h-0.5 bg-black transform rotate-3"></div>
      <div className="absolute bottom-1/6 right-0 w-1/3 h-0.5 bg-black transform -rotate-2"></div>

      {/* Puntos decorativos (como semillas) */}
      <div className="absolute top-1/4 right-1/6 w-1 h-1 rounded-full bg-black"></div>
      <div className="absolute bottom-1/3 left-1/6 w-1 h-1 rounded-full bg-black"></div>
      <div className="absolute top-3/4 left-3/4 w-1 h-1 rounded-full bg-black"></div>

      {/* Contenedor principal del hero */}
      <div className="container mx-auto px-4 h-screen flex items-center justify-center relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-center w-full gap-4 md:gap-8 pt-16 md:pt-0 md:items-center">
          {/* Logo y texto */}
          <div className="w-full md:w-5/12 text-center md:text-left relative z-20 md:mt-16">
            <div className="relative w-72 h-72 mx-auto md:mx-0">
              <Image
                src="/zamorana-logo.png"
                alt="Zamorana Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 90vw, 60vw"
              />
            </div>
            <div className="mt-2 mb-6">
              <p className="inline-block text-center">
                <span className="text-lg font-sans font-light text-gray-500 align-middle">
                  by
                </span>
                <span className="text-4xl font-serif italic font-normal text-black align-middle ml-1">
                  artikko
                </span>
              </p>
            </div>
            <div className="w-24 h-px bg-black my-8 mx-auto md:mx-0"></div>
          </div>

          {/* Imagen con superposición */}
          <div className="w-full md:w-7/12 relative">
            <div className="relative w-full h-80 md:h-[28rem] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1539186247735-4fa949e90b00?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Paisaje natural"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/10"></div>
              <div className="absolute inset-0 mix-blend-multiply"></div>
            </div>

            {/* Elemento decorativo circular */}
            <div className="absolute -bottom-8 -left-8 w-16 h-16 border-2 border-black rounded-full opacity-30"></div>

            {/* Arco decorativo */}
            <div className="absolute -top-12 -right-12 w-24 h-24 border-2 border-black rounded-full border-b-0 border-l-0 transform -rotate-45 opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
