'use client';

import { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

export default function BullyListeningParty() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [showRoblox, setShowRoblox] = useState(false);

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
      setTimeout(() => setShowRoblox(true), 800);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center overflow-hidden relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff15_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-[length:60px_60px]" />

      <div className="relative z-10 text-center px-6 py-12 max-w-3xl mx-auto">
        {/* Top Star */}
        <div className="mb-10">
          <div className="text-[160px] leading-[0.8] text-white tracking-[-10px] drop-shadow-2xl">★</div>
        </div>

        {/* Main Title - Much bigger and bolder */}
        <div className="mb-8">
          <h1 className="text-[110px] md:text-[140px] font-black tracking-[-6px] leading-none text-white">
            BULLY
          </h1>
          <div className="text-[42px] md:text-[56px] font-bold tracking-[6px] text-white/90 -mt-4">
            LISTENING PARTY
          </div>
        </div>

        {/* Event Details - Your exact text, very prominent */}
        <div className="mb-20">
          <div className="text-3xl md:text-5xl font-medium tracking-widest text-white/95 mb-3">
            BULLY LISTENING PARTY
          </div>
          <div className="text-2xl md:text-3xl text-white/80 tracking-[3px]">
            7:00 PM CDT &nbsp;•&nbsp; 8:00 PM EST
          </div>
          <div className="mt-6 text-xl md:text-2xl text-white/70 font-light">
            BULLY by YE and KANYE WEST
          </div>
        </div>

        {/* Huge Play Button */}
        <button
          onClick={togglePlay}
          className="group relative mx-auto mb-20 block"
        >
          <div className="absolute -inset-8 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all" />
          
          <div className="relative w-56 h-56 border-[7px] border-white rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-300">
            {isPlaying ? (
              <Pause className="w-32 h-32" />
            ) : (
              <Play className="w-32 h-32 ml-6" />
            )}
          </div>
        </button>

        {/* Now Playing */}
        <div className="mb-16">
          <div className="text-sm uppercase tracking-[4px] text-white/60 mb-2">NOW PLAYING IN ROBLOX</div>
          <div className="text-4xl font-semibold tracking-wide">BULLY — YE</div>
        </div>

        {/* Progress */}
        <div className="max-w-lg mx-auto mb-20">
          <div className="h-px bg-white/30 mb-4" />
          <div className="relative h-1 bg-white/20 rounded">
            <div 
              className="absolute left-0 top-0 h-full bg-white rounded transition-all duration-1000"
              style={{ width: `${(currentTime / 3600) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-xs font-mono text-white/50 mt-3">
            <span>{formatTime(currentTime)}</span>
            <span>60:00</span>
          </div>
        </div>

        {/* Roblox Button */}
        <a
          href="https://www.roblox.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white hover:bg-white/95 text-black font-bold text-2xl px-20 py-7 rounded-full transition-all hover:shadow-2xl"
        >
          JOIN ON ROBLOX
        </a>

        <div className="mt-20 text-white/40 text-sm tracking-widest">
          OFFICIAL ROBLOX LISTENING PARTY EXPERIENCE
        </div>
      </div>

      {/* Bottom subtle star */}
      <div className="absolute bottom-12 text-[120px] text-white/5 pointer-events-none">★</div>

      {/* Roblox Modal */}
      {showRoblox && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center">
          <div className="text-center px-8">
            <div className="text-8xl mb-10">🎮</div>
            <div className="text-5xl font-black mb-4">ENTERING ROBLOX...</div>
            <div className="text-2xl text-white/80">BULLY Listening Party</div>
            <button 
              onClick={() => setShowRoblox(false)}
              className="mt-16 text-white/70 hover:text-white text-lg underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
