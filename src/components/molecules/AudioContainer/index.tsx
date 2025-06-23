"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import styles from "./AudioContainer.module.css";
import { useAudioPlayer } from "@/context/AudioPlayerContext";

// Función para asegurar que la descripción tenga una longitud consistente
const formatDescription = (desc: string) => {
  if (!desc) return "";
  // Limitar la longitud de la descripción para mantener consistencia visual
  return desc.length > 120 ? desc.substring(0, 117) + "..." : desc;
};

interface AudioContainerProps {
  title: string;
  description: string;
  timeOfDay: string;
  location: string;
  date: string;
  className?: string;
}

const AudioContainer: React.FC<AudioContainerProps> = ({
  title,
  description,
  timeOfDay,
  location,
  date,
  className = "",
}) => {
  const { activePlayer, playAudio, pauseAudio } = useAudioPlayer();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(180); // 3 minutos en segundos
  const progressContainerRef = useRef<HTMLDivElement>(null);
  const playerId = useRef(
    `player-${Math.random().toString(36).substr(2, 9)}`
  ).current;

  // Efecto para sincronizar el estado de reproducción con el contexto
  useEffect(() => {
    // Si este es el reproductor activo, reproducir
    if (activePlayer === playerId) {
      if (!isPlaying) {
        setIsPlaying(true);
      }
    } else {
      // Si hay otro reproductor activo, pausar este
      if (isPlaying) {
        setIsPlaying(false);
      }
    }
  }, [activePlayer, playerId]);

  // Actualizar el tiempo actual cuando el audio está reproduciéndose
  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window === "undefined") return;

    if (isPlaying) {
      const timer = setInterval(() => {
        setCurrentTime((prev) => {
          const newTime = prev + 0.5; // Actualizar cada 500ms
          if (newTime >= duration) {
            setIsPlaying(false);
            pauseAudio();
            return duration;
          }
          return newTime;
        });
      }, 500);
      return () => clearInterval(timer);
    }
  }, [isPlaying, duration, pauseAudio]);

  // Actualizar el progreso basado en el tiempo actual
  useEffect(() => {
    setProgress((currentTime / duration) * 100);
  }, [currentTime, duration]);

  const togglePlayPause = () => {
    if (isPlaying && activePlayer === playerId) {
      // Si se hace clic en el reproductor que ya está reproduciéndose, pausar
      pauseAudio();
    } else {
      // Si se hace clic en un reproductor que no está reproduciéndose, reproducir este
      playAudio(playerId);
    }
  };

  // Manejar clic en la barra de progreso
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressContainerRef.current) return;

    const rect = progressContainerRef.current.getBoundingClientRect();
    const clickPosition = (e.clientX - rect.left) / rect.width;
    const newProgress = Math.min(Math.max(clickPosition, 0), 1) * 100;
    setProgress(newProgress);

    // Actualizar el tiempo actual basado en la posición del clic
    const newTime = clickPosition * duration;
    setCurrentTime(newTime);
  };

  // Formatear el tiempo (mm:ss)
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div
      className={`${styles.audioContainer} ${className} ${
        isPlaying ? styles.playing : ""
      }`}
    >
      {/* Encabezado con título y metadatos */}
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.metadata}>
          <span className={styles.timeOfDay}>{timeOfDay}</span>
          {location && <span className={styles.location}>{location}</span>}
          <span className={styles.date}>{date}</span>
        </div>
      </div>

      {/* Descripción con longitud consistente */}
      <p className={styles.description}>
        {description ? formatDescription(description) : "\u00A0"}
      </p>

      {/* Controles de reproducción */}
      <div className={styles.controls}>
        <button
          className={`${styles.playButton} ${isPlaying ? styles.playing : ""}`}
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pausar" : "Reproducir"}
        >
          <div className={styles.playIcon}>
            {isPlaying ? (
              <>
                <span className={styles.pauseBar}></span>
                <span className={styles.pauseBar}></span>
              </>
            ) : (
              <div className={styles.playTriangle}></div>
            )}
          </div>
        </button>

        <div
          ref={progressContainerRef}
          className={styles.progressContainer}
          onClick={handleProgressClick}
        >
          <div
            className={styles.progressBar}
            style={{ '--progress': `${progress}%` } as React.CSSProperties}
          ></div>
        </div>
        <div className={styles.time}>
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>

      {/* Onda de sonido */}
      <div className={styles.soundwave}>
        <div className={styles.waveBars}>
          {useMemo(() => {
            // Reducir el número de barras para que se vean mejor con el ancho completo
            const barCount = 30;
            const bars = [];
            
            for (let i = 0; i < barCount; i++) {
              // Usar una función hash simple para generar valores consistentes
              const hash = (i * 9301 + 49297) % 233280;
              const random = hash / 233280; // Valor entre 0 y 1
              
              // Crear un patrón de onda más pronunciado
              const baseHeight = 20 + random * 60; // Base entre 20% y 80%
              
              // Aplicar un patrón de onda más pronunciado
              const wavePattern = Math.sin((i / barCount) * Math.PI * 2) * 0.5 + 1;
              const finalHeight = Math.min(95, Math.max(5, baseHeight * wavePattern));
              
              // Retraso para el efecto de onda
              const delay = `${(i * 0.03)}s`;
              
              bars.push(
                <div 
                  key={i} 
                  className={styles.waveBar}
                  style={{
                    '--delay': delay,
                    '--height': `${finalHeight}%`,
                  } as React.CSSProperties}
                >
                  <div className={styles.waveBarInner} />
                </div>
              );
            }
            return bars;
          }, [])}
        </div>
      </div>
    </div>
  );
};

export default AudioContainer;
