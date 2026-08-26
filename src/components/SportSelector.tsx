'use client';

import React from 'react';
import { SportType } from '@/lib/types';
import { Trophy } from 'lucide-react';

interface SportSelectorProps {
  activeSport: SportType | 'all';
  onSelectSport: (sport: SportType | 'all') => void;
  footballMatchesCount: number;
  cricketMatchesCount: number;
}

export const SportSelector: React.FC<SportSelectorProps> = ({
  activeSport,
  onSelectSport,
  footballMatchesCount,
  cricketMatchesCount,
}) => {
  return (
    <div className="w-full max-w-xl mx-auto my-4 sm:my-6 px-1">
      <div className="p-1 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md flex items-center justify-between shadow-xl">
        
        {/* ⚽ Football Tab */}
        <button
          onClick={() => onSelectSport('football')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
            activeSport === 'football'
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <span className="text-base">⚽</span>
          <span>Football</span>
          <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
            activeSport === 'football' ? 'bg-emerald-950 text-emerald-200' : 'bg-slate-800 text-slate-400'
          }`}>
            {footballMatchesCount}
          </span>
        </button>

        {/* 🏏 Cricket Tab */}
        <button
          onClick={() => onSelectSport('cricket')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
            activeSport === 'cricket'
              ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <span className="text-base">🏏</span>
          <span>Cricket</span>
          <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
            activeSport === 'cricket' ? 'bg-cyan-950 text-cyan-200' : 'bg-slate-800 text-slate-400'
          }`}>
            {cricketMatchesCount}
          </span>
        </button>

        {/* ⚡ All Matches Tab */}
        <button
          onClick={() => onSelectSport('all')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
            activeSport === 'all'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <Trophy className="w-3.5 h-3.5" />
          <span>All</span>
          <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
            activeSport === 'all' ? 'bg-indigo-950 text-indigo-200' : 'bg-slate-800 text-slate-400'
          }`}>
            {footballMatchesCount + cricketMatchesCount}
          </span>
        </button>

      </div>
    </div>
  );
};
