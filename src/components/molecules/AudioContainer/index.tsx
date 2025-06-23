"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./AudioContainer.module.css";

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
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(180); // 3 minutos en segundos
  const progressContainerRef = useRef<HTMLDivElement>(null);

  // Actualizar el tiempo actual cuando el audio está reproduciéndose
  useEffect(() => {
    // Solo ejecutar en el cliente
    if (typeof window === 'undefined') return;
    
    if (isPlaying) {
      const timer = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 0.5; // Actualizar cada 500ms
          if (newTime >= duration) {
            setIsPlaying(false);
            return duration;
          }
          return newTime;
        });
      }, 500);
      return () => clearInterval(timer);
    }
  }, [isPlaying, duration]);

  // Actualizar el progreso basado en el tiempo actual
  useEffect(() => {
    setProgress((currentTime / duration) * 100);
  }, [currentTime, duration]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
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

  // Generar un hash simple basado en el título para valores consistentes
  const generateStableValues = (index: number) => {
    // Usar el título como semilla para generar valores consistentes
    const seed = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    
    // Función pseudo-aleatoria determinista basada en la semilla
    const random = (i: number) => {
      const x = Math.sin(seed + i * 1000) * 10000;
      return x - Math.floor(x);
    };
    
    const height = 20 + Math.floor(random(index) * 60);
    const opacity = 0.4 + random(index + 100) * 0.6;
    const isTall = random(index + 200) > 0.7;
    const isShort = random(index + 300) > 0.7 && !isTall;
    
    return { height, opacity, isTall, isShort };
  };

  // Generar líneas para la onda de sonido
  const renderSoundwave = () => {
    const elements = [];
    const lineCount = 20;
    
    for (let i = 0; i < lineCount; i++) {
      const { height, opacity, isTall, isShort } = generateStableValues(i);
      
      // Clase CSS basada en la altura
      const heightClass = isTall ? styles.soundwaveLineTall : 
                          isShort ? styles.soundwaveLineShort : '';
      
      // Clase de retraso para la animación
      const delayClass = `delay${i % 10}`;
      
      elements.push(
        <div 
          key={i} 
          className={`${styles.soundwaveLine} ${heightClass} ${styles[delayClass]}`}
          style={{
            height: `${height}%`,
            opacity,
            '--delay': `${i * 0.05}s`
          } as React.CSSProperties}
        />
      );
    }
    
    return elements;
  };

  return (
    <div className={`${styles.audioContainer} ${className}`}>
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
        {renderSoundwave()}
      </div>
    </div>
  );
};

export default AudioContainer;
