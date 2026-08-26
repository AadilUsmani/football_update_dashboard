'use client';

import React from 'react';
import { SportType } from '@/lib/types';
import { Sparkles, Trophy } from 'lucide-react';

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
    <div className="w-full max-w-2xl mx-auto my-6">
      <div className="p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md grid grid-cols-3 gap-1 shadow-xl">
        
        {/* ⚽ Football Tab */}
        <button
          onClick={() => onSelectSport('football')}
          className={`relative flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-200 ${
            activeSport === 'football'
              ? 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-lg shadow-emerald-600/30 scale-[1.02]'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <span className="text-lg">⚽</span>
          <span>Football</span>
          <span className={`text-[11px] px-1.5 py-0.5 rounded-full font-semibold ${
            activeSport === 'football' ? 'bg-emerald-950/50 text-emerald-200' : 'bg-slate-800 text-slate-400'
          }`}>
            {footballMatchesCount}
          </span>
        </button>

        {/* 🏏 Cricket Tab */}
        <button
          onClick={() => onSelectSport('cricket')}
          className={`relative flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-200 ${
            activeSport === 'cricket'
              ? 'bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-lg shadow-cyan-600/30 scale-[1.02]'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <span className="text-lg">🏏</span>
          <span>Cricket</span>
          <span className={`text-[11px] px-1.5 py-0.5 rounded-full font-semibold ${
            activeSport === 'cricket' ? 'bg-cyan-950/50 text-cyan-200' : 'bg-slate-800 text-slate-400'
          }`}>
            {cricketMatchesCount}
          </span>
        </button>

        {/* ⚡ All Matches Tab */}
        <button
          onClick={() => onSelectSport('all')}
          className={`relative flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-200 ${
            activeSport === 'all'
              ? 'bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-lg shadow-indigo-600/30 scale-[1.02]'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
          }`}
        >
          <Trophy className="w-4 h-4" />
          <span>All Matches</span>
          <span className={`text-[11px] px-1.5 py-0.5 rounded-full font-semibold ${
            activeSport === 'all' ? 'bg-indigo-950/50 text-indigo-200' : 'bg-slate-800 text-slate-400'
          }`}>
            {footballMatchesCount + cricketMatchesCount}
          </span>
        </button>

      </div>
    </div>
  );
};
