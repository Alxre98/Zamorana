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
      {/* Fondo con rayas diagonales */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[length:40px_40px] bg-[linear-gradient(45deg,#000_1px,transparent_1px),linear-gradient(-45deg,#000_1px,transparent_1px)] opacity-5"></div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 h-screen flex flex-col items-center justify-center relative z-10 py-16 md:py-0">
        {/* Título principal */}
        <div className="relative w-full text-center mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight uppercase mb-4">
            <span className="block">Sobre</span>
            <span className="relative inline-block">
              <span className="relative z-10">ZAMORANA</span>
              <span className="absolute inset-0 w-full h-full bg-black opacity-5 transform -skew-x-12 -translate-x-1"></span>
            </span>
          </h1>
          
          {/* Línea decorativa */}
          <div className="w-24 h-1 bg-black mx-auto my-8"></div>
          
          {/* Subtítulo */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wider leading-relaxed">
            Conectando con la esencia natural de Zamora, Venezuela a través de sonidos que inspiran y conservan nuestra herencia natural.
          </p>
        </div>

        {/* Textos digitales flotantes */}
        <DigitalText
          text="Naturaleza"
          position={{ top: "20%", left: "10%" }}
          delay={1000}
          size="base"
          className="font-mono opacity-70"
        />
        <DigitalText
          text="Sonidos"
          position={{ top: "30%", right: "15%" }}
          delay={2000}
          size="lg"
          className="font-mono font-bold"
        />
        <DigitalText
          text="Venezuela"
          position={{ bottom: "30%", left: "20%" }}
          delay={3000}
          size="base"
          className="font-mono opacity-70"
        />
        <DigitalText
          text="Paisajes"
          position={{ bottom: "40%", right: "15%" }}
          delay={2500}
          size="sm"
          className="font-mono"
        />
        
        {/* Elementos decorativos */}
        <div className="absolute bottom-8 left-8 w-32 h-px bg-black opacity-30"></div>
        <div className="absolute top-8 right-8 w-16 h-16 border border-black opacity-10"></div>
        <div className="absolute bottom-16 right-16 w-8 h-8 border-t border-r border-black opacity-20"></div>
      </div>
      
      {/* Texto vertical izquierda */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden md:block">
        <div className="text-xs font-mono tracking-widest [writing-mode:vertical-rl] transform rotate-180">
          PAISAJES SONOROS
        </div>
      </div>
      
      {/* Texto vertical derecha */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden md:block">
        <div className="text-xs font-mono tracking-widest [writing-mode:vertical-rl]">
          ZAMORA VENEZUELA
        </div>
      </div>
    </div>
  );
};
