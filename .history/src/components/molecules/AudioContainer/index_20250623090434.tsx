"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./AudioContainer.module.css";
import { useAudioPlayer } from "@/context/AudioPlayerContext";

// Función para asegurar que la descripción tenga una longitud consistente
const formatDescription = (desc: string) => {
  if (!desc) return '';
  // Limitar la longitud de la descripción para mantener consistencia visual
  return desc.length > 120 ? desc.substring(0, 117) + '...' : desc;
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
  const { activePlayer, setActivePlayer } = useAudioPlayer();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(180); // 3 minutos en segundos
  const progressContainerRef = useRef<HTMLDivElement>(null);
  const playerId = useRef(`player-${Math.random().toString(36).substr(2, 9)}`).current;

  // Actualizar el tiempo actual cuando el audio está reproduciéndose
  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window === 'undefined') return;
    
    if (isPlaying) {
      // Establecer este reproductor como activo
      setActivePlayer(playerId);
      
      const timer = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 0.5; // Actualizar cada 500ms
          if (newTime >= duration) {
            setIsPlaying(false);
            setActivePlayer(null);
            return duration;
          }
          return newTime;
        });
      }, 500);
      return () => clearInterval(timer);
    } else if (activePlayer === playerId) {
      // Si este era el reproductor activo pero se pausó
      setActivePlayer(null);
    }
  }, [isPlaying, duration, activePlayer, playerId, setActivePlayer]);
  
  // Efecto para pausar este reproductor si se activa otro
  useEffect(() => {
    if (activePlayer !== null && activePlayer !== playerId && isPlaying) {
      setIsPlaying(false);
    }
  }, [activePlayer, playerId, isPlaying]);

  // Actualizar el progreso basado en el tiempo actual
  useEffect(() => {
    setProgress((currentTime / duration) * 100);
  }, [currentTime, duration]);

  const togglePlayPause = () => {
    if (activePlayer === playerId) {
      // Si se hace clic en el reproductor que ya está activo, simplemente alterna
      setIsPlaying(!isPlaying);
    } else {
      // Si se hace clic en un reproductor diferente, pausa el actual y reproduce el nuevo
      setIsPlaying(true);
      // El efecto secundario se encargará de actualizar el activePlayer
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
    const newTime = (clickPosition * duration);
    setCurrentTime(newTime);
  };

  // Formatear el tiempo (mm:ss)
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`${styles.audioContainer} ${className} ${isPlaying ? styles.playing : ''}`}>
      {/* Encabezado con título y metadatos */}
      <div className={styles.header}>
        <h3 className={styles.title}>
          {title}
        </h3>
        
        <div className={styles.metadata}>
          <span className={styles.timeOfDay}>{timeOfDay}</span>
          {location && <span className={styles.location}>{location}</span>}
          <span className={styles.date}>{date}</span>
        </div>
      </div>

      {/* Descripción con longitud consistente */}
      <p className={styles.description}>
        {description ? formatDescription(description) : '\u00A0'}
      </p>

      {/* Controles de reproducción */}
      <div className={styles.controls}>
        <button 
          className={`${styles.playButton} ${isPlaying ? styles.playing : ''}`} 
          onClick={togglePlayPause}
          aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
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
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className={styles.time}>{formatTime(currentTime)} / {formatTime(duration)}</div>
      </div>

      {/* Onda de sonido */}
      <div className={styles.soundwave}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i} 
            className={`${styles.soundwaveLine} ${i % 3 === 0 ? styles.soundwaveLineTall : i % 4 === 0 ? styles.soundwaveLineShort : ''}`}
            style={{ '--delay': i * 0.05 } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  );
};

export default AudioContainer;
