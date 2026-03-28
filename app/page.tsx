'use client';

import { useState } from 'react';
import { Play, Pause } from 'lucide-react';

export default function BullyListeningParty() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      setTimeout(() => setShowModal(true), 500);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] bg-[length:80px_80px]" />

      <div className="relative z-10 text-center max-w-3xl">
        <div className="mb-10">
          <span className="text-[200px] md:text-[260px] leading-none block text-white/90">★</span>
        </div>

        <h1 className="text-[100px] md:text-[140px] font-black tracking-[-6px] leading-none mb-3">
          BULLY
        </h1>

        <div className="text-[48px] md:text-[64px] font-bold tracking-[8px] text-white/90 mb-16">
          LISTENING PARTY
        </div>

        <div className="mb-20 space-y-6 text-white">
          <div className="text-[42px] md:text-[52px] font-medium tracking-widest">
            BULLY LISTENING PARTY
          </div>
          <div className="text-[32px] md:text-[42px] tracking-wide text-white/80">
            7:00 PM CDT • 8:00 PM EST
          </div>
          <div className="text-[26px] md:text-[34px] text-white/70">
            BULLY by YE and KANYE WEST
          </div>
        </div>

        <button
          onClick={togglePlay}
          className="group mx-auto mb-20 block"
        >
          <div className="relative w-[280px] h-[280px] border-[10px] border-white rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-all">
            {isPlaying ? (
              <Pause className="w-40 h-40" />
            ) : (
              <Play className="w-40 h-40 ml-8" />
            )}
          </div>
        </button>

        <a
          href="https://www.roblox.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black font-bold text-3xl px-24 py-8 rounded-full hover:bg-white/90 transition-all"
        >
          JOIN ON ROBLOX
        </a>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="text-8xl mb-8">🎮</div>
            <div className="text-5xl font-bold mb-4">ENTERING ROBLOX...</div>
            <div className="text-2xl text-white/80">BULLY Listening Party</div>
            <button onClick={() => setShowModal(false)} className="mt-12 underline text-white/70 hover:text-white">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
