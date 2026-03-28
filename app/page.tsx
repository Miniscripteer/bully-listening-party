'use client';

import { useState } from 'react';
import { Play, Pause } from 'lucide-react';

export default function BullyListeningParty() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showRoblox, setShowRoblox] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      setTimeout(() => setShowRoblox(true), 600);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      <div className="text-center px-6 max-w-2xl mx-auto">
        
        {/* Big Star */}
        <div className="mb-12">
          <div className="text-[180px] leading-none text-white/90">★</div>
        </div>

        {/* Main Title */}
        <div className="mb-16">
          <h1 className="text-[120px] md:text-[150px] font-black tracking-[-6px] leading-none">
            BULLY
          </h1>
          <div className="text-[48px] md:text-[62px] font-bold tracking-[8px] text-white/90 -mt-6">
            LISTENING PARTY
          </div>
        </div>

        {/* Your exact text - made very prominent */}
        <div className="mb-20 space-y-4">
          <div className="text-4xl md:text-5xl font-medium tracking-wider">
            BULLY LISTENING PARTY
          </div>
          <div className="text-3xl md:text-4xl text-white/80 tracking-wide">
            7:00 PM CDT • 8:00 PM EST
          </div>
          <div className="text-2xl text-white/70">
            BULLY by YE and KANYE WEST
          </div>
        </div>

        {/* Clean Big Play Button */}
        <button
          onClick={togglePlay}
          className="group mx-auto mb-20"
        >
          <div className="relative w-64 h-64 border-8 border-white rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all">
            {isPlaying ? (
              <Pause className="w-36 h-36" />
            ) : (
              <Play className="w-36 h-36 ml-6" />
            )}
          </div>
        </button>

        {/* Roblox Button */}
        <a
          href="https://www.roblox.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black font-bold text-3xl px-20 py-8 rounded-full hover:bg-white/90 transition-all"
        >
          JOIN ON ROBLOX
        </a>

      </div>

      {/* Roblox Modal */}
      {showRoblox && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="text-8xl mb-8">🎮</div>
            <div className="text-5xl font-bold mb-6">Entering Roblox...</div>
            <div className="text-2xl text-white/70">BULLY Listening Party</div>
            <button 
              onClick={() => setShowRoblox(false)}
              className="mt-12 underline text-white/70 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
