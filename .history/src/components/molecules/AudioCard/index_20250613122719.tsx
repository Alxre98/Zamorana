"use client";

import React, { useState, useRef, useEffect } from "react";
import Icon from "../../atoms/Icon";
import styles from "./AudioCard.module.css";
// Importación dinámica para wavesurfer
import type { WaveSurfer as WaveSurferType } from "wavesurfer.js";
let WaveSurfer: typeof WaveSurferType | null = null;

if (typeof window !== "undefined") {
  import("wavesurfer.js").then((module) => {
    WaveSurfer = module.WaveSurfer;
  });
}

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
  const [showAdvancedView, setShowAdvancedView] = useState(false);
  const [audioDuration, setAudioDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurferType | null>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  // Inicializar WaveSurfer
  useEffect(() => {
    if (typeof window === "undefined" || !WaveSurfer) return;

    if (waveformRef.current && !wavesurfer.current) {
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#10B981",
        progressColor: "#059669",
        cursorColor: "#065F46",
        barWidth: 2,
        barRadius: 3,
        cursorWidth: 2,
        height: 60,
        barGap: 2,
        responsive: true,
        normalize: true,
        partialRender: true,
      });

      wavesurfer.current.load(audioSrc);

      wavesurfer.current.on("ready", () => {
        if (wavesurfer.current) {
          setAudioDuration(wavesurfer.current.getDuration());
        }
      });

      wavesurfer.current.on("audioprocess", () => {
        if (wavesurfer.current) {
          const current = wavesurfer.current.getCurrentTime();
          setCurrentTime(current);
          const progress = (current / wavesurfer.current.getDuration()) * 100;
          setProgress(progress);
        }
      });

      wavesurfer.current.on("seek", (progress: number) => {
        setProgress(progress * 100);
      });
    }

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    };
  }, [audioSrc]);

  // Función para formatear el tiempo (MM:SS)
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const togglePlay = () => {
    if (wavesurfer.current) {
      wavesurfer.current.playPause();
      setIsPlaying(!isPlaying);
    } else if (audioRef.current) {
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
    }
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
        setCurrentTime(currentTime);

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

  const toggleAdvancedView = () => {
    setShowAdvancedView(!showAdvancedView);
  };

  return (
    <div
      className={`group flex flex-col h-full bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 ${className}`}
    >
      {/* Audio Preview */}
      <div className="relative">
        {showAdvancedView ? (
          <div className="h-32 bg-gradient-to-r from-green-50 to-emerald-50 p-4">
            <div ref={waveformRef} className="w-full h-full" />
            <div className="flex justify-between text-xs text-gray-500 mt-1 px-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(audioDuration)}</span>
            </div>
          </div>
        ) : (
          <div className="h-24 bg-gradient-to-r from-green-50 to-emerald-50 flex items-center justify-center">
            <div className="w-full px-6 py-4 flex items-end space-x-1 h-16">
              {[2, 4, 6, 8, 10, 12, 10, 8, 6, 4, 2].map((height, i) => (
                <div
                  key={i}
                  className={`flex-1 bg-green-200 rounded-t-sm transition-all duration-300 group-hover:bg-green-400 ${
                    isPlaying ? "animate-pulse" : ""
                  }`}
                  style={{
                    height: `${height}px`,
                    animationDelay: `${i * 0.05}s`,
                    animationDuration: "0.5s",
                    animationIterationCount: "infinite",
                    animationDirection: "alternate",
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Play button overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button
            onClick={togglePlay}
            className={`w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-green-600 hover:bg-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all transform ${
              isPlaying ? "bg-white/90" : "bg-white/80"
            }`}
            aria-label={isPlaying ? "Pausar" : "Reproducir"}
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
      <div className="flex flex-col flex-1 p-5">
        <div className="flex-1 min-h-0">
          <div className="mb-3">
            <h3 className="text-lg font-bold text-gray-900 truncate mb-2">
              {title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-auto pt-4">
          <ProgressBar
            progress={progress}
            className={`${styles.progressBarContainer} mb-1`}
          />
          <div className="flex justify-between text-xs text-gray-500 px-1">
            <span>{formatTime(progress)}</span>
            <span>{duration}</span>
          </div>
        </div>

        {/* Audio info and actions */}
        <div className="flex items-center justify-between pt-3 mt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 whitespace-nowrap">
              <Icon name="MusicNote" className="w-3 h-3 mr-1" />
              {bpm} BPM
            </span>
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 whitespace-nowrap">
              <Icon name="Key" className="w-3 h-3 mr-1" />
              {keyScale}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <button
              className="p-2 text-gray-500 hover:text-green-600 rounded-full hover:bg-green-50 transition-colors"
              aria-label="Descargar"
              title="Descargar"
            >
              <Icon name="Download" className="w-4 h-4" />
            </button>
            <button
              className="p-2 text-gray-500 hover:text-green-600 rounded-full hover:bg-green-50 transition-colors"
              onClick={toggleAdvancedView}
              aria-label={showAdvancedView ? "Vista simple" : "Vista avanzada"}
              title={showAdvancedView ? "Vista simple" : "Vista avanzada"}
            >
              <Icon
                name={showAdvancedView ? "Close" : "DotsVertical"}
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Audio element */}
      <audio
        ref={audioRef}
        src={audioSrc}
        onEnded={() => {
          setIsPlaying(false);
          setProgress(0);
        }}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        className="hidden"
      />
    </div>
  );
};
