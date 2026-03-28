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
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background subtle effects */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] bg-[length:70px_70px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Large Star */}
        <div className="mb-8">
          <span className="text-[170px] md:text-[220px] leading-none text-white/95 block">★</span>
        </div>

        {/* BULLY Title */}
        <h1 className="text-[110px] md:text-[160px] font-black tracking-[-7px] leading-none mb-2">
          BULLY
        </h1>

        {/* Listening Party */}
        <div className="text-[52px] md:text-[68px] font-bold tracking-[6px] text-white/90 mb-16">
          LISTENING PARTY
        </div>

        {/* Event Info - Your exact text, made prominent */}
        <div className="mb-20 space-y-6">
          <div className="text-[38px] md:text-[48px] font-medium tracking-widest text-white">
            BULLY LISTENING PARTY
          </div>
          <div className="text-[32px] md:text-[40px] text-white/80 tracking-[2px]">
            7:00 PM CDT • 8:00 PM EST
          </div>
          <div className="text-[26px] md:text-[32px] text-white/70">
            BULLY by YE and KANYE WEST
          </div>
        </div>

        {/* Join Button */}
        <a
          href="https://www.roblox.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white hover:bg-white/95 text-black font-bold text-[28px] px-20 py-8 rounded-full transition-all shadow-xl"
        >
          JOIN ON ROBLOX
        </a>
      </div>

      {/* Roblox Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <div className="text-center px-6">
            <div className="text-8xl mb-10">🎮</div>
            <div className="text-5xl font-bold mb-4">ENTERING ROBLOX...</div>
            <div className="text-2xl text-white/75">BULLY Listening Party</div>
            <button
              onClick={() => setShowModal(false)}
              className="mt-12 text-lg underline text-white/60 hover:text-white"
            >
              Close Preview
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
