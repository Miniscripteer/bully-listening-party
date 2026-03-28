'use client';

import { useState, useEffect } from 'react';
import { Play, Pause, Users, Clock } from 'lucide-react';

export default function BullyListeningParty() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [attendees, setAttendees] = useState(1247);
  const [showRoblox, setShowRoblox] = useState(false);

  // Fake live attendee counter
  useEffect(() => {
    const interval = setInterval(() => {
      setAttendees(prev => prev + Math.floor(Math.random() * 4) + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Fake progress timer
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
      setTimeout(() => setShowRoblox(true), 600);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] bg-[length:40px_40px]" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        {/* Top Star */}
        <div className="mb-6">
          <div className="text-[110px] leading-none text-white/90">★</div>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <div className="text-7xl md:text-8xl font-black tracking-tighter mb-2">
            BULLY
          </div>
          <div className="text-4xl md:text-5xl font-bold text-white/70 tracking-[6px]">
            LISTENING PARTY
          </div>
          <div className="mt-6 text-2xl text-white/60">by YE • KANYE WEST</div>
        </div>

        {/* Roblox Box */}
        <div className="bg-white/5 border border-white/20 rounded-3xl p-10 mb-12 text-center max-w-md w-full backdrop-blur-md">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
            <span className="uppercase tracking-[4px] text-sm font-medium">ROBLOX EXPERIENCE</span>
          </div>

          <div className="text-6xl font-bold mb-3 tracking-tight">ROBLOX</div>
          <div className="text-4xl text-white/80 mb-8">7:00 PM CDT</div>

          <div className="flex justify-center gap-10 text-sm uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              LIVE
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              {attendees.toLocaleString()} LISTENING
            </div>
          </div>
        </div>

        {/* Big Play Button */}
        <button
          onClick={togglePlay}
          className="group relative mb-12"
        >
          <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl scale-110 group-hover:scale-125 transition-all" />
          <div className="relative w-44 h-44 border-[6px] border-white rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all">
            {isPlaying ? (
              <Pause className="w-24 h-24" />
            ) : (
              <Play className="w-24 h-24 ml-4" />
            )}
          </div>
        </button>

        {/* Now Playing */}
        <div className="text-center mb-10">
          <div className="uppercase tracking-[3px] text-xs text-white/50 mb-2">NOW PLAYING IN THE ROBLOX EXPERIENCE</div>
          <div className="text-3xl font-medium">BULLY — YE</div>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-md mb-12">
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white transition-all duration-1000"
              style={{ width: `${Math.min((currentTime / 3600) * 100, 100)}%` }}
            />
          </div>
          <div className="flex justify-between text-xs font-mono text-white/50 mt-2">
            <div>{formatTime(currentTime)}</div>
            <div>60:00</div>
          </div>
        </div>

        {/* Join Button */}
        <a
          href="https://www.roblox.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-14 py-6 bg-white hover:bg-white/90 text-black font-bold text-xl rounded-full transition-all flex items-center gap-3 group"
        >
          JOIN ON ROBLOX
          <span className="group-hover:rotate-45 transition-transform">→</span>
        </a>

        <div className="mt-12 text-white/40 text-sm">
          BULLY Listening Party • 7:00 PM CDT
        </div>
      </div>

      {/* Bottom Star */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[90px] text-white/70 pointer-events-none">
        ★
      </div>

      {/* Roblox Modal */}
      {showRoblox && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">
          <div className="text-center px-6">
            <div className="text-7xl mb-6">🎮</div>
            <div className="text-4xl font-bold mb-4">Entering Roblox...</div>
            <div className="text-xl text-white/70 mb-8">Joining the BULLY Listening Party</div>
            <button 
              onClick={() => setShowRoblox(false)}
              className="text-white/60 hover:text-white underline"
            >
              Close preview
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
