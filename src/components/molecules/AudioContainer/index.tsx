"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import styles from "./AudioContainer.module.css";
import { useAudioPlayer } from "@/context/AudioPlayerContext";

// Importar íconos de react-icons
import { FaPlay, FaPause } from "react-icons/fa";

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
  path: string;
  className?: string;
}

const AudioContainer: React.FC<AudioContainerProps> = ({
  title,
  description,
  timeOfDay,
  location,
  date,
  path,
  className = "",
}) => {
  const { activePlayer, playAudio, pauseAudio } = useAudioPlayer();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressContainerRef = useRef<HTMLDivElement>(null);
  const playerId = useRef(
    `player-${Math.random().toString(36).substr(2, 9)}`
  ).current;

  // Efecto para manejar la reproducción/pausa
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        console.error("Error al reproducir el audio:", error);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }

    // Limpiar al desmontar
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [isPlaying]);

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

  // Configurar el audio y manejar eventos
  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    const updateTime = () => {
      if (audio) {
        setCurrentTime(audio.currentTime);
        setProgress((audio.currentTime / audio.duration) * 100 || 0);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      setProgress(0);
      pauseAudio();
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [pauseAudio]);

  const togglePlayPause = () => {
    if (isPlaying && activePlayer === playerId) {
      // Si se hace clic en el reproductor que ya está reproduciéndose, pausar
      pauseAudio();
    } else {
      // Si se hace clic en un reproductor que no está reproduciéndose, reproducir este
      playAudio(playerId);
    }
  };

  // Formatear tiempo (segundos a MM:SS)
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Manejar el clic en la barra de progreso
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressContainerRef.current || !audioRef.current) return;

    const rect = progressContainerRef.current.getBoundingClientRect();
    const clickPosition = (e.clientX - rect.left) / rect.width;
    const newTime = clickPosition * duration;

    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
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

      {path && (
        <audio
          ref={audioRef}
          src={path}
          preload="metadata"
          className={styles.audioElement}
        />
      )}

      {/* Descripción con longitud consistente */}
      <p className={styles.description}>
        {description ? formatDescription(description) : "\u00A0"}
      </p>

      {/* Controles de reproducción */}
      <div className={styles.controls}>
        <button
          className={styles.playButton}
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pausar" : "Reproducir"}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>

        <div
          ref={progressContainerRef}
          className={styles.progressContainer}
          onClick={handleProgressClick}
        >
          <div
            className={styles.progressBar}
            style={{ "--progress": `${progress}%` } as React.CSSProperties}
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
              const wavePattern =
                Math.sin((i / barCount) * Math.PI * 2) * 0.5 + 1;
              const finalHeight = Math.min(
                95,
                Math.max(5, baseHeight * wavePattern)
              );

              // Retraso para el efecto de onda
              const delay = `${i * 0.03}s`;

              bars.push(
                <div
                  key={i}
                  className={styles.waveBar}
                  style={
                    {
                      "--delay": delay,
                      "--height": `${finalHeight}%`,
                    } as React.CSSProperties
                  }
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
