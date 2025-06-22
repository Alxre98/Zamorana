"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { DigitalText } from "@/components/atoms/DigitalText";
// Ruta al archivo de audio en la carpeta public
const kickSound = "/audio/kick.mp3";

// Extender la interfaz de Window para incluir webkitAudioContext
declare global {
  interface Window {
    webkitAudioContext: typeof AudioContext;
  }
}

// Define the props interface for better type safety
interface HeroProps {
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  // Use null as initial value since requestAnimationFrame returns a number
  const animationRef = useRef<number | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioAnalyserRef = useRef<AnalyserNode | null>(null);
  const sourceNodeRef = useRef<MediaElementAudioSourceNode | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [scale, setScale] = useState(1);

  // Add the className prop to the root div's className
  const rootClassName = `relative min-h-screen max-w-[100vw] overflow-x-hidden bg-white font-['Inter'] cursor-pointer ${className}`;

  useEffect(() => {
    // Solo inicializar si aún no se ha hecho
    if (!audioContextRef.current && audioRef.current) {
      try {
        // Usar el contexto de audio estándar o el prefijado para Safari
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioCtx = new AudioContext();
        const audioAnalyser = audioCtx.createAnalyser();
        audioAnalyser.fftSize = 32;

        // Crear el nodo fuente solo una vez
        const sourceNode = audioCtx.createMediaElementSource(audioRef.current);

        // Conectar los nodos
        sourceNode.connect(audioAnalyser);
        audioAnalyser.connect(audioCtx.destination);

        // Guardar referencias
        audioAnalyserRef.current = audioAnalyser;
        sourceNodeRef.current = sourceNode;
        audioContextRef.current = audioCtx;

        // Iniciar el análisis de audio
        const dataArray = new Uint8Array(audioAnalyser.frequencyBinCount);

        const tick = () => {
          if (audioAnalyserRef.current) {
            audioAnalyserRef.current.getByteFrequencyData(dataArray);
            const average =
              dataArray.reduce((a, b) => a + b, 0) / dataArray.length;
            // Ajustar la escala basada en el audio (entre 0.95 y 1.1)
            const newScale = 0.95 + (average / 255) * 0.15;
            setScale(newScale);
            animationRef.current = requestAnimationFrame(tick);
          }
        };

        animationRef.current = requestAnimationFrame(tick);
      } catch (error) {
        console.error("Error al inicializar el audio:", error);
      }
    }

    return () => {
      // Limpiar la animación
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      // No desconectamos los nodos aquí para evitar problemas de reconexión
      // ya que el efecto se puede ejecutar múltiples veces en desarrollo con React.StrictMode
    };
  }, []); // Este efecto solo se ejecuta una vez al montar el componente

  const handleLogoClick = async () => {
    if (!audioRef.current || !audioContextRef.current) return;

    try {
      if (audioContextRef.current.state === "suspended") {
        await audioContextRef.current.resume();
      }

      audioRef.current.currentTime = 0;
      await audioRef.current.play();
      setIsPlaying(true);

      // Reset scale after animation
      setTimeout(() => {
        setIsPlaying(false);
      }, 300);
    } catch (error) {
      console.error("Error al reproducir el audio:", error);
    }
  };
  return (
    <div
      className={rootClassName}
      onClick={handleLogoClick}
      role="button"
      aria-label="Play sound effect"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleLogoClick()}
    >
      <audio ref={audioRef} src={kickSound} preload="auto" className="hidden" />
      {/* Líneas orgánicas sincronizadas - Inspirado en Nurture */}

      {/* Marco exterior sutil */}
      <div className="absolute inset-0 border border-black/10 m-2 sm:m-4"></div>

      {/* Líneas diagonales principales sincronizadas */}
      <div className="absolute top-0 left-0 w-[150%] h-px bg-black transform -rotate-15 origin-left"></div>
      <div className="absolute top-1/3 left-0 w-[150%] h-px bg-black transform rotate-12 origin-left"></div>
      <div className="absolute top-2/3 left-0 w-[150%] h-px bg-black transform -rotate-8 origin-left"></div>

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

      {/* Textos digitales flotantes */}
      <div className="hidden md:block">
        <DigitalText
          text="Zamora"
          position={{ top: "20%", left: "15%" }}
          delay={1000}
          size="sm"
        />
        <DigitalText
          text="Sonidos Auténticos"
          position={{ top: "30%", right: "20%" }}
          delay={2000}
          size="xs"
        />
        <DigitalText
          text="Venezuela"
          position={{ bottom: "30%", left: "20%" }}
          delay={3000}
          size="base"
        />
        <DigitalText
          text="Paisajes Sonoros"
          position={{ bottom: "40%", right: "15%" }}
          delay={2500}
          size="sm"
        />
        <DigitalText
          text="Zamora"
          position={{ top: "60%", right: "25%" }}
          delay={3500}
          size="lg"
          className="font-bold"
        />
        <DigitalText
          text="Guatire"
          position={{ top: "70%", left: "20%" }}
          delay={4000}
          size="sm"
        />
        <DigitalText
          text="2025"
          position={{ bottom: "20%", right: "20%" }}
          delay={4500}
          size="xs"
        />
      </div>

      {/* Texto de ubicación - Estilo tiny */}
      <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 z-20 hidden md:block">
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
      <div className="absolute right-4 sm:right-6 md:right-8 top-1/2 transform -translate-y-1/2 z-20 hidden md:flex flex-col items-center">
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
      <div className="container mx-auto px-4 h-screen flex items-center justify-center relative z-10 py-16 md:py-0">
        <div className="flex flex-col md:flex-row items-start justify-center w-full gap-4 md:gap-8 pt-16 md:pt-0 md:items-center">
          {/* Logo y texto */}
          <div className="w-full md:w-5/12 lg:w-1/2 text-center md:text-left relative z-20 md:mt-16 px-4">
            <div
              onClick={handleLogoClick}
              className={`relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 mx-auto md:mx-0 cursor-pointer transition-transform ${
                isPlaying ? "scale-95 duration-100" : "duration-300"
              }`}
              style={{
                transform: `scale(${isPlaying ? 0.95 : scale})`,
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleLogoClick()}
            >
              <Image
                src="/zamorana-logo.png"
                alt="Zamorana Logo"
                fill
                className="object-contain select-none"
                priority
                sizes="(max-width: 768px) 90vw, 60vw"
              />
            </div>
            <div className="mt-2 mb-6 px-4">
              <p className="inline-block text-center">
                <span className="text-base md:text-lg font-sans font-light text-gray-500 align-middle">
                  by
                </span>
                <span className="text-3xl md:text-4xl font-serif italic font-normal text-black align-middle ml-1">
                  artikko
                </span>
              </p>
            </div>
            <div className="w-24 h-px bg-black my-8 mx-auto md:mx-0"></div>
          </div>

          {/* Imagen con superposición */}
          <div className="w-full md:w-7/12 lg:w-1/2 relative mt-8 md:mt-0">
            <div className="relative w-full h-64 sm:h-80 md:h-[28rem] overflow-hidden">
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

      {/* Clickable overlay for audio visualization */}
      <div
        className={`absolute inset-0 z-10 pointer-events-none transition-transform duration-100 origin-center ${
          isPlaying ? "scale-[0.98]" : "scale-100"
        }`}
      />
    </div>
  );
};
