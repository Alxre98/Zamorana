"use client";

import React, { useState, useRef, useEffect } from "react";
import Icon from "../../atoms/Icon";
import styles from "./AudioCard.module.css";

interface ProgressBarProps {
  progress: number;
  className?: string;
}

// Create a type that includes the specific ARIA attributes we need
type AriaProgressBarProps = {
  "aria-valuenow": number;
  "aria-valuemin": number;
  "aria-valuemax": number;
  "aria-label": string;
  "aria-atomic": "true";
  role: "progressbar";
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  className = "",
}) => {
  // Ensure progress is between 0 and 100 and round to nearest integer
  const roundedProgress = Math.min(Math.max(Math.round(progress), 0), 100);

  // Generate the width class name (e.g., 'progressWidth50' for 50%)
  const widthClass = `progressWidth${roundedProgress}`;

  // Create ARIA props with proper typing
  const ariaProps: AriaProgressBarProps = {
    "aria-valuenow": roundedProgress,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-label": `Progreso de reproducción: ${roundedProgress}%`,
    "aria-atomic": "true",
    role: "progressbar",
  };

  return (
    <div
      className={`${styles.progressBarContainer} ${className}`}
      {...ariaProps}
    >
      <div className={`${styles.progressBarFilled} ${styles[widthClass]}`} />
    </div>
  );
};

interface AudioCardProps {
  title: string;
  description: string;
  audioSrc: string;
  duration?: string;
  bpm?: number;
  keyScale?: string;
  className?: string;
}

export const AudioCard: React.FC<AudioCardProps> = ({
  title,
  description,
  audioSrc,
  duration = "2:45",
  bpm = 120,
  keyScale = "C Minor",
  className = "",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  // Función para formatear el tiempo (MM:SS)
  const formatTime = (progress: number) => {
    const totalSeconds = Math.round((progress / 100) * (60 * 2.45)); // Aproximación basada en duración por defecto
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    } else {
      audioRef.current.play().catch(console.error);
      startProgressTimer();
    }

    setIsPlaying(!isPlaying);
  };

  const startProgressTimer = () => {
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }

    progressInterval.current = setInterval(() => {
      if (audioRef.current) {
        const { currentTime, duration } = audioRef.current;
        const newProgress = (currentTime / duration) * 100 || 0;
        setProgress(newProgress);

        if (currentTime >= duration) {
          setIsPlaying(false);
          setProgress(0);
          if (progressInterval.current) {
            clearInterval(progressInterval.current);
          }
        }
      }
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, []);

  // Hidden audio element
  const audioElement = (
    <audio
      ref={audioRef}
      src={audioSrc}
      onEnded={() => {
        setIsPlaying(false);
        setProgress(0);
        if (progressInterval.current) {
          clearInterval(progressInterval.current);
        }
      }}
      className="hidden"
    />
  );

  return (
    <div
      className={`group bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 ${className}`}
    >
      {/* Audio Preview */}
      <div className="relative">
        {/* Waveform visualizer - placeholder */}
        <div className="h-24 bg-gradient-to-r from-green-50 to-emerald-50 flex items-center justify-center">
          <div className="w-full px-6 py-4 flex items-end space-x-1 h-16">
            {[2, 4, 6, 8, 10, 12, 10, 8, 6, 4, 2].map((height, i) => (
              <div 
                key={i}
                className={`flex-1 bg-green-200 rounded-t-sm transition-all duration-300 group-hover:bg-green-400 ${
                  isPlaying ? 'animate-pulse' : ''
                }`}
                style={{
                  height: `${height}px`,
                  animationDelay: `${i * 0.05}s`,
                  animationDuration: '0.5s',
                  animationIterationCount: 'infinite',
                  animationDirection: 'alternate'
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Play button overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button
            onClick={togglePlay}
            className={`w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-green-600 hover:bg-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all transform ${
              isPlaying ? 'bg-white/90' : 'bg-white/80'
            }`}
            aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
          >
            {isPlaying ? (
              <Icon name="Pause" className="w-6 h-6" />
            ) : (
              <Icon name="Play" className="w-6 h-6 ml-0.5" />
            )}
          </button>
        </div>
      </div>

      {/* Card content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-gray-900 truncate mb-1">
              {title}
            </h3>
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {description}
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-4
        ">
          <ProgressBar
            progress={progress}
            className={`${styles.progressBarContainer} mb  -2`}
          />
          <div className="flex justify-between text-xs text-gray-500 px-1">
            <span>{formatTime(progress)}</span>
            <span>{duration}</span>
          </div>
        </div>

        {/* Audio info and actions */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
              <Icon name="MusicNote" className="w-3 h-3 mr-1" />
              {bpm} BPM
            </span>
            <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
              <Icon name="Key" className="w-3 h-3 mr-1" />
              {keyScale}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              className="p-2 text-gray-500 hover:text-green-600 rounded-full hover:bg-green-50 transition-colors"
              aria-label="Añadir a favoritos"
              title="Añadir a favoritos"
            >
              <Icon name="Heart" className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-gray-500 hover:text-green-600 rounded-full hover:bg-green-50 transition-colors"
              aria-label="Descargar"
              title="Descargar"
            >
              <Icon name="Download" className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-gray-500 hover:text-green-600 rounded-full hover:bg-green-50 transition-colors"
              aria-label="Más opciones"
              title="Más opciones"
            >
              <Icon name="DotsVertical" className="w-5 h-5" />
            </button>
          </div>
              <button
                className="p-1 text-gray-400 hover:text-green-600 rounded-full hover:bg-green-50 transition-colors"
                aria-label="Más opciones"
                title="Más opciones"
                aria-haspopup="true"
              >
                <Icon name="DotsHorizontal" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Audio element */}
      {audioElement}
    </div>
  );
};
