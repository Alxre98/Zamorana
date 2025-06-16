"use client";

import { useState, useRef, useEffect } from "react";

interface AudioPlayerProps {
  src: string;
  title: string;
  description: string;
  timeOfDay: "Mañana" | "Mediodía" | "Tarde";
  location: string;
  date: string;
}

export default function AudioPlayer({
  src,
  title,
  description,
  timeOfDay,
  location,
  date,
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const animationRef = useRef<number | null>(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      cancelAnimationFrame(animationRef.current!);
    } else {
      audioRef.current?.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
    setIsPlaying(!isPlaying);
  };

  const whilePlaying = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration || 1;
      setProgress((currentTime / duration) * 100);
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  };

  // Cleanup animation frame on unmount and when dependencies change
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration || 1;
      setProgress((currentTime / duration) * 100);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const currentTime = (progress / 100) * duration;

  // Función para obtener el ícono y color según el momento del día
  const getTimeOfDayIcon = () => {
    switch(timeOfDay) {
      case 'Mañana':
        return { 
          icon: (
            <path d="M12 2v1m0 18v1m9-10h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          ),
          bgColor: 'bg-yellow-50',
          textColor: 'text-yellow-600',
          borderColor: 'border-yellow-100'
        };
      case 'Mediodía':
        return { 
          icon: (
            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          ),
          bgColor: 'bg-orange-50',
          textColor: 'text-orange-600',
          borderColor: 'border-orange-100'
        };
      case 'Tarde':
      default:
        return { 
          icon: (
            <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          ),
          bgColor: 'bg-blue-50',
          textColor: 'text-blue-600',
          borderColor: 'border-blue-100'
        };
    }
  };

  const timeOfDayData = getTimeOfDayIcon();

  return (
    <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col group border border-gray-100 hover:border-green-100 transition-all duration-300">
      {/* Imagen de fondo botánica sutil */}
      <div className="h-2 bg-gradient-to-r from-green-50 to-emerald-50"></div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start mb-4">
          <div className={`p-1.5 rounded-md ${timeOfDayData.bgColor} ${timeOfDayData.borderColor} border`}>
            <svg 
              className={`w-4 h-4 ${timeOfDayData.textColor}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              strokeWidth="2"
              xmlns="http://www.w3.org/2000/svg"
            >
              {timeOfDayData.icon}
            </svg>
          </div>
          <div className="ml-3 flex-1">
            <h3 className="text-lg font-light text-gray-800 leading-tight tracking-wide">{title}</h3>
            <div className="flex items-center mt-1 text-xs text-gray-400">
              <span className="flex items-center">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {location}
              </span>
              <span className="mx-2">•</span>
              <span>{date}</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-500 text-sm mb-5 flex-1 leading-relaxed">{description}</p>
        
        <div className="mt-auto">
          <div className="flex items-center">
            <button
              onClick={togglePlayPause}
              className={`w-9 h-9 rounded-full ${
                isPlaying 
                  ? 'bg-red-50 text-red-500 hover:bg-red-100' 
                  : 'bg-green-50 text-green-600 hover:bg-green-100'
              } flex items-center justify-center focus:outline-none transition-all duration-200`}
              aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
            >
              {isPlaying ? (
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              )}
            </button>

            <div className="flex-1 ml-3">
              <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r from-green-300 to-emerald-400 transition-all duration-300`}
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1.5">
                <span className="font-light">{formatTime(currentTime)}</span>
                <span className="font-light">{formatTime(duration)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />
    </div>
  );
}
