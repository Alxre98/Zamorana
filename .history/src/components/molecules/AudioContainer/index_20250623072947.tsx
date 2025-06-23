"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./AudioContainer.module.css";

interface AudioContainerProps {
  title: string;
  description: string;
  timeOfDay: string;
  location: string;
  date: string;
  className?: string;
}

export const AudioContainer: React.FC<AudioContainerProps> = ({
  title,
  description,
  timeOfDay,
  location,
  date,
  className = "",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);
  
  // Simulación de progreso de reproducción
  useEffect(() => {
    if (isPlaying) {
      progressInterval.current = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
      }, 100);
    } else if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Generar líneas aleatorias para la onda de sonido
  const renderSoundwave = () => {
    const lines = [];
    const lineCount = 50;
    
    for (let i = 0; i < lineCount; i++) {
      const height = 10 + Math.random() * 30; // Altura aleatoria
      const opacity = 0.3 + Math.random() * 0.7; // Opacidad aleatoria
      
      lines.push(
        <div 
          key={i}
          className={styles.soundwaveLine}
          style={{
            height: `${height}px`,
            opacity: opacity.toString(),
          }}
        />
      );
    }
    
    return lines;
  };

  return (
    <div className={`${styles.audioContainer} ${className}`}>
      {/* Encabezado con título y metadatos */}
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.metadata}>
          <span className={styles.timeOfDay}>{timeOfDay}</span>
          <span className={styles.separator}>•</span>
          <span className={styles.location}>{location}</span>
          <span className={styles.separator}>•</span>
          <span className={styles.date}>{date}</span>
        </div>
      </div>
      
      {/* Descripción */}
      <p className={styles.description}>{description}</p>
      
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
              <span className={styles.playTriangle}></span>
            )}
          </div>
        </button>
        
        {/* Barra de progreso */}
        <div className={styles.progressContainer}>
          <div 
            className={styles.progressBar}
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Tiempo */}
        <div className={styles.time}>
          {Math.floor(progress / 100 * 180)}s
        </div>
      </div>
      
      {/* Onda de sonido */}
      <div className={styles.soundwave}>
        {renderSoundwave()}
      </div>
      
      {/* Elementos decorativos de rayas */}
      <div className={styles.decorativeLine}></div>
      <div className={styles.decorativeScribble}></div>
    </div>
  );
};

export default AudioContainer;
