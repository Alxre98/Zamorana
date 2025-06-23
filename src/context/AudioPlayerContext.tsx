'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AudioPlayerContextType {
  activePlayer: string | null;
  setActivePlayer: (id: string | null) => void;
  playAudio: (id: string) => void;
  pauseAudio: () => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(undefined);

export const AudioPlayerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activePlayer, setActivePlayer] = useState<string | null>(null);
  
  const playAudio = (id: string) => {
    console.log('Playing audio:', id);
    setActivePlayer(id);
  };
  
  const pauseAudio = () => {
    console.log('Pausing audio');
    setActivePlayer(null);
  };

  const value = {
    activePlayer,
    setActivePlayer,
    playAudio,
    pauseAudio
  };

  return (
    <AudioPlayerContext.Provider value={value}>
      {children}
    </AudioPlayerContext.Provider>
  );
};

export const useAudioPlayer = () => {
  const context = useContext(AudioPlayerContext);
  if (context === undefined) {
    throw new Error('useAudioPlayer must be used within an AudioPlayerProvider');
  }
  return context;
};
