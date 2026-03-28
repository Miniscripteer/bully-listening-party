'use client';

import { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

export default function BullyListeningParty() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [showRoblox, setShowRoblox] = useState(false);

  // Fake album timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prev => (prev >= 3600 ? 0 : prev + 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      setTimeout(() => setShowRoblox(true), 700);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative flex items-center justify-center">
      {/* Subtle background stars */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff12_0.8px,transparent_1px)] bg-[length:50px_50px]" />

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* Top Star */}
        <div className="mb-8">
          <div className="inline-block text-[140px] leading-none text-white/90 drop-shadow-2xl">★</div>
        </div>

        {/* Main Title */}
        <div className="mb-6">
          <div className="text-[92px] md:text-[110px] font-black tracking-[-4px] leading-none mb-2">
            BULLY
          </div>
          <div className="text-5xl md:text-6xl font-bold tracking-[4px] text-white/80">
            LISTENING PARTY
          </div>
        </div>

        {/* Event Info - Your requested text */}
        <div className="mb-16">
          <div className="text-2xl md:text-3xl font-medium tracking-wide text-white/90">
            BULLY LISTENING PARTY
          </div>
          <div className="text-xl md:text-2xl text-white/70 mt-2 tracking-widest">
            7:00 PM CDT &nbsp;•&nbsp; 8:00 PM EST
          </div>
          <div className="mt-4 text-lg text-white/60">
            BULLY by YE and KANYE WEST
          </div>
        </div>

        {/* Big Play Button */}
        <button
          onClick={togglePlay}
          className="group relative mx-auto mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-full blur-3xl scale-125 group-hover:scale-150 transition-all duration-500" />
          
          <div className="relative w-[180px] h-[180px] border-4 border-white/90 rounded-full flex items-center justify-center hover:border-white transition-all hover:scale-105 active:scale-95">
            {isPlaying ? (
              <Pause className="w-28 h-28 text-white" />
            ) : (
              <Play className="w-28 h-28 text-white ml-5" />
            )}
          </div>
        </button>

        {/* Now Playing */}
        <div className="mb-12">
          <div className="uppercase text-xs tracking-[4px] text-white/50 mb-3">NOW PLAYING</div>
          <div className="text-3xl font-semibold tracking-wide">BULLY — YE</div>
        </div>

        {/* Progress Bar */}
        <div className="max-w-md mx-auto mb-16">
          <div className="h-px bg-white/20 mb-3" />
          <div className="h-0.5 bg-white w-full relative">
            <div 
              className="absolute top-0 left-0 h-full bg-white transition-all duration-1000"
              style={{ width: `${(currentTime / 3600) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-xs font-mono text-white/50 mt-2 tracking-widest">
            <div>{formatTime(currentTime)}</div>
            <div>60:00</div>
          </div>
        </div>

        {/* Join Roblox Button */}
        <a
          href="https://www.roblox.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-16 py-7 bg-white text-black font-bold text-2xl rounded-full hover:bg-white/90 active:scale-95 transition-all tracking-wide"
        >
          JOIN ON ROBLOX
        </a>

        <div className="mt-16 text-white/40 text-sm tracking-widest">
          OFFICIAL LISTENING PARTY EXPERIENCE
        </div>
      </div>

      {/* Bottom Star */}
      <div className="absolute bottom-10 text-[100px] text-white/10 pointer-events-none">★</div>

      {/* Roblox Modal */}
      {showRoblox && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="text-8xl mb-8">🎮</div>
            <div className="text-4xl font-bold mb-3">Entering the Experience...</div>
            <div className="text-xl text-white/70">BULLY Listening Party on Roblox</div>
            
            <button 
              onClick={() => setShowRoblox(false)}
              className="mt-12 text-sm text-white/60 hover:text-white underline"
            >
              Close preview
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
