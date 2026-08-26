'use client';

import React, { useState } from 'react';
import { Team } from '@/lib/types';
import { FOOTBALL_TEAMS } from '@/lib/data/footballData';
import { CRICKET_TEAMS } from '@/lib/data/cricketData';
import { X, Star, Check, Search } from 'lucide-react';

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  favoriteTeamIds: string[];
  onToggleFavorite: (teamId: string) => void;
}

export const FavoritesModal: React.FC<FavoritesModalProps> = ({
  isOpen,
  onClose,
  favoriteTeamIds,
  onToggleFavorite,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'football' | 'cricket'>('all');
  const [search, setSearch] = useState('');

  if (!isOpen) return null;

  const allTeams: Team[] = [...FOOTBALL_TEAMS, ...CRICKET_TEAMS];

  const filteredTeams = allTeams.filter(team => {
    const tabMatch = activeTab === 'all' || team.sport === activeTab;
    const searchMatch = search === '' || 
      team.name.toLowerCase().includes(search.toLowerCase()) ||
      team.leagueOrCountry.toLowerCase().includes(search.toLowerCase());
    return tabMatch && searchMatch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4 bg-slate-900/90">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Star className="w-6 h-6 fill-amber-400" />
            </div>
            <div>
              <h2 className="text-xl font-black text-white">Choose Your Favorite Teams</h2>
              <p className="text-xs text-slate-400 mt-0.5">
                We will prioritize their upcoming fixtures and broadcast timings on your dashboard
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filters */}
        <div className="p-4 bg-slate-950/60 border-b border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          
          {/* Sport Tabs */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`flex-1 sm:flex-none px-4 py-1.5 rounded-lg transition-colors ${
                activeTab === 'all' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Teams
            </button>
            <button
              onClick={() => setActiveTab('football')}
              className={`flex-1 sm:flex-none px-4 py-1.5 rounded-lg transition-colors ${
                activeTab === 'football' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              ⚽ Football
            </button>
            <button
              onClick={() => setActiveTab('cricket')}
              className={`flex-1 sm:flex-none px-4 py-1.5 rounded-lg transition-colors ${
                activeTab === 'cricket' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              🏏 Cricket
            </button>
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search club or nation..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
          </div>

        </div>

        {/* Teams Grid */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 flex-1">
          {filteredTeams.map(team => {
            const isFav = favoriteTeamIds.includes(team.id);

            return (
              <button
                key={team.id}
                onClick={() => onToggleFavorite(team.id)}
                className={`p-3 rounded-2xl border text-left flex items-center justify-between gap-3 transition-all ${
                  isFav
                    ? 'bg-amber-500/10 border-amber-500/40 text-white shadow-md'
                    : 'bg-slate-950/70 hover:bg-slate-800/70 border-slate-800 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 p-1.5 flex items-center justify-center border border-slate-800">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={team.crest} alt={team.name} className="max-w-full max-h-full object-contain" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{team.name}</h4>
                    <span className="text-[10px] text-slate-400">{team.leagueOrCountry}</span>
                  </div>
                </div>

                <div className={`w-6 h-6 rounded-full flex items-center justify-center border transition-colors ${
                  isFav
                    ? 'bg-amber-500 border-amber-400 text-slate-950'
                    : 'bg-slate-900 border-slate-700 text-transparent'
                }`}>
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            ⭐ <span className="font-bold text-amber-300">{favoriteTeamIds.length}</span> teams prioritized
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md transition-all"
          >
            Save & View Dashboard
          </button>
        </div>

      </div>
    </div>
  );
};
