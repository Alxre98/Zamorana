import React from "react";

interface AudioPlayerProps {
  src: string;
  className?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  src,
  className = "",
}) => {
  return (
    <div className={`audio-player ${className}`}>
      <audio src={src} controls className="w-full" />
    </div>
  );
};

export default AudioPlayer;
