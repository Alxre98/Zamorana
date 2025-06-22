"use client";

import React from "react";
import Image from "next/image";

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden font-['Inter']">
      {/* Líneas orgánicas sincronizadas - Inspirado en Nurture */}
      
      {/* Marco exterior sutil */}
      <div className="absolute inset-0 border border-black/10 m-4"></div>
      
      {/* Líneas diagonales principales sincronizadas */}
      <div className="absolute top-0 left-0 w-full h-px bg-black transform -rotate-15 origin-left" style={{ width: '150%' }}></div>
      <div className="absolute top-1/3 left-0 w-full h-px bg-black transform rotate-12 origin-left" style={{ width: '150%' }}></div>
      <div className="absolute top-2/3 left-0 w-full h-px bg-black transform -rotate-8 origin-left" style={{ width: '150%' }}></div>
      
      {/* Líneas verticales rítmicas */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-black/20"></div>
      <div className="absolute top-0 left-1/2 w-px h-full bg-black/30"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-black/20"></div>
      
      {/* Líneas de acento que conectan puntos focales */}
      <div className="absolute top-1/4 left-1/4 w-32 h-px bg-black transform -rotate-15 origin-left"></div>
      <div className="absolute top-3/4 right-1/4 w-32 h-px bg-black transform rotate-15 origin-right"></div>
      
      {/* Líneas curvas sutiles */}
      <div className="absolute top-1/3 right-1/4 w-24 h-24 border-t border-r border-black/30 rounded-tr-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-24 h-24 border-b border-l border-black/30 rounded-bl-3xl"></div>
      
      {/* Puntos de intersección */}
      <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-black rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-black rounded-full"></div>

      {/* Texto de ubicación - Estilo tiny */}
      <div className="absolute bottom-8 left-8 z-20 hidden md:block">
        <div className="text-[8px] leading-[1.2] tracking-wider font-mono text-black/60 uppercase">
          <p>Audios grabados en Zamora,</p>
          <p>Estado Miranda, Venezuela</p>
          <div className="h-4"></div>
          <p>Paisajes sonoros de la región</p>
          <p>central de Venezuela</p>
          <div className="h-4"></div>
          <p>Guatire • Zamora • Miranda</p>
          <p>2022-2024</p>
        </div>
      </div>

      {/* Texto vertical - Lado derecho */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 hidden md:flex flex-col items-center">
        <div className="text-[10px] font-mono text-black/60 tracking-widest leading-none [writing-mode:vertical-rl] h-64 flex items-center justify-center">
          <span className="inline-block my-1">V</span>
          <span className="inline-block my-1">E</span>
          <span className="inline-block my-1">N</span>
          <span className="inline-block my-1">E</span>
          <span className="inline-block my-1">Z</span>
          <span className="inline-block my-1">U</span>
          <span className="inline-block my-1">E</span>
          <span className="inline-block my-1">L</span>
          <span className="inline-block my-1">A</span>
          <span className="inline-block my-1 opacity-0">-</span>
          <span className="inline-block my-1">N</span>
          <span className="inline-block my-1">A</span>
          <span className="inline-block my-1">T</span>
          <span className="inline-block my-1">U</span>
          <span className="inline-block my-1">R</span>
          <span className="inline-block my-1">A</span>
          <span className="inline-block my-1">L</span>
        </div>
        <div className="h-16 w-px bg-black/30 mt-4"></div>
        <div className="text-[8px] font-mono text-black/40 tracking-widest mt-4 [writing-mode:vertical-rl] h-24 flex items-center">
          <span>PAISAJES SONOROS</span>
        </div>
      </div>

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
