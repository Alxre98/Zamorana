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
  const animationRef = useRef<number>();

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

  useEffect(() => {
    const audio = audioRef.current;

    const updateDuration = () => {
      if (audio) {
        setDuration(audio.duration);
      }
    };

    audio?.addEventListener("loadedmetadata", updateDuration);
    audio?.addEventListener("ended", () => {
      setIsPlaying(false);
      cancelAnimationFrame(animationRef.current!);
    });

    return () => {
      audio?.removeEventListener("loadedmetadata", updateDuration);
      audio?.removeEventListener("ended", () => {
        setIsPlaying(false);
        cancelAnimationFrame(animationRef.current!);
      });
      cancelAnimationFrame(animationRef.current!);
    };
  }, []);

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const timeOfDayColors = {
    Mañana: "bg-amber-50 text-amber-800",
    Mediodía: "bg-emerald-50 text-emerald-800",
    Tarde: "bg-blue-50 text-blue-800",
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            <p className="text-sm text-gray-500 mt-1">
              {location} • {date}
            </p>
          </div>
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${timeOfDayColors[timeOfDay]}`}
          >
            {timeOfDay}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4">{description}</p>

        <div className="flex items-center space-x-4">
          <button
            onClick={togglePlayPause}
            className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-200 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label={isPlaying ? "Pausar" : "Reproducir"}
          >
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>

          <div className="flex-1">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>{formatTime((progress / 100) * duration)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>
      </div>

      <audio ref={audioRef} src={src} preload="metadata" />
    </div>
  );
}
