"use client";

import React from "react";
import { DigitalText } from "@/components/atoms/DigitalText";

interface SobreHeroProps {
  className?: string;
}

export const SobreHero: React.FC<SobreHeroProps> = ({ className = "" }) => {
  const rootClassName = `relative min-h-screen w-full overflow-hidden bg-white font-['Inter'] ${className}`;

  return (
    <div className={rootClassName}>
      {/* Fondo con rayas diagonales más gruesas */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[length:60px_60px] bg-[linear-gradient(45deg,#000_2px,transparent_2px),linear-gradient(-45deg,#000_2px,transparent_2px)] opacity-10"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative h-screen w-full flex items-center justify-center">
        {/* Contenedor del texto principal */}
        <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
          <h1 className="font-thin tracking-tight uppercase">
            <span className="block text-5xl md:text-7xl lg:text-8xl mb-2 text-gray-900">
              Sobre
            </span>
            <span className="relative inline-block px-6 py-3">
              <span className="relative z-10 text-6xl md:text-8xl lg:text-[7rem] font-light text-white">
                ZAMORANA
              </span>
              <span className="absolute inset-0 w-full h-full bg-black transform -skew-x-12 -translate-x-1"></span>
            </span>
          </h1>

          {/* Línea decorativa */}
          <div className="w-48 h-px bg-black/30 mx-auto my-12"></div>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-light tracking-widest leading-relaxed text-gray-900/90 uppercase">
            Conectando con la esencia natural de Zamora, Venezuela
            <span className="block mt-2 text-sm md:text-base tracking-widest font-normal">
              a través de sonidos que inspiran y conservan nuestra herencia
              natural.
            </span>
          </p>
        </div>

        {/* Textos digitales flotantes con mejor contraste */}
        <DigitalText
          text="NATURALEZA"
          position={{ top: "15%", left: "10%" }}
          delay={1000}
          size="base"
          className="font-mono font-bold opacity-80 text-gray-900"
        />
        <DigitalText
          text="SONIDOS"
          position={{ top: "25%", right: "15%" }}
          delay={2000}
          size="lg"
          className="font-mono font-bold text-gray-900"
        />
        <DigitalText
          text="VENEZUELA"
          position={{ bottom: "30%", left: "15%" }}
          delay={3000}
          size="base"
          className="font-mono font-bold opacity-80 text-gray-900"
        />
        <DigitalText
          text="PAISAJES"
          position={{ bottom: "40%", right: "15%" }}
          delay={2500}
          size="sm"
          className="font-mono font-bold text-gray-900"
        />
        <DigitalText
          text="GUATIRE"
          position={{ top: "60%", right: "25%" }}
          delay={3500}
          size="base"
          className="font-mono font-bold opacity-80 text-gray-900"
        />
        <DigitalText
          text="2025"
          position={{ bottom: "20%", right: "20%" }}
          delay={4000}
          size="sm"
          className="font-mono font-bold text-gray-900"
        />

        {/* Texto vertical izquierda */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden md:block">
          <div className="text-xs font-mono font-bold tracking-widest [writing-mode:vertical-rl] transform rotate-180 text-gray-900">
            PAISAJES SONOROS
          </div>
        </div>

        {/* Texto vertical derecha */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden md:block">
          <div className="text-xs font-mono font-bold tracking-widest [writing-mode:vertical-rl] text-gray-900">
            ZAMORA VENEZUELA
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="absolute bottom-8 left-8 w-32 h-px bg-black opacity-50"></div>
        <div className="absolute top-8 right-8 w-16 h-16 border border-black opacity-30"></div>
        <div className="absolute bottom-16 right-16 w-8 h-8 border-t border-r border-black opacity-40"></div>

        {/* Texto de ubicación - Inferior izquierda */}
        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 hidden md:block">
          <div className="text-[8px] leading-[1.2] tracking-wider font-mono text-black/70 uppercase">
            <p>Paisajes sonoros de la región</p>
            <p>central de Venezuela</p>
            <div className="h-4"></div>
            <p>Guatire • Zamora • Miranda</p>
            <p>2022-2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};
