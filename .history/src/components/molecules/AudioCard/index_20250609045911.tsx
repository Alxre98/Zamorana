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
      className={`group bg-white rounded-xl border border-gray-100 hover:border-green-100 transition-all duration-200 hover:shadow-lg overflow-hidden ${className}`}
    >
      {/* Audio Preview */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
          aria-hidden="true"
        />
        <div className="relative z-10 p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                {title}
              </h3>
              <p className="text-sm text-gray-500 truncate">{description}</p>
            </div>
            <button
              onClick={togglePlay}
              className="ml-3 flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-green-600 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all"
              aria-label={isPlaying ? "Pausar" : "Reproducir"}
            >
              {isPlaying ? (
                <Icon name="Pause" className="w-5 h-5" />
              ) : (
                <Icon name="Play" className="w-5 h-5 ml-0.5" />
              )}
            </button>
          </div>

          {/* Progress bar */}
          <ProgressBar
            progress={progress}
            className={styles.progressBarContainer}
          />

          {/* Audio info */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Icon name="Clock" className="w-3.5 h-3.5 mr-1" />
                {duration}
              </span>
              <span className="flex items-center">
                <Icon name="MusicNote" className="w-3.5 h-3.5 mr-1" />
                {bpm} BPM
              </span>
              <span className="hidden sm:inline-flex items-center">
                <Icon name="Key" className="w-3.5 h-3.5 mr-1" />
                {keyScale}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="p-1 text-gray-400 hover:text-green-600 rounded-full hover:bg-green-50 transition-colors"
                aria-label="Añadir a favoritos"
                title="Añadir a favoritos"
              >
                <Icon name="Heart" className="w-4 h-4" />
              </button>
              <button
                className="p-1 text-gray-400 hover:text-green-600 rounded-full hover:bg-green-50 transition-colors"
                aria-label="Descargar"
                title="Descargar"
              >
                <Icon name="Download" className="w-4 h-4" />
              </button>
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
