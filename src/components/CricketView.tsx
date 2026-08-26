'use client';

import React, { useState } from 'react';
import { Match } from '@/lib/types';
import { CRICKET_CATEGORIES } from '@/lib/data/cricketData';
import { FixtureCard } from './FixtureCard';
import { Search } from 'lucide-react';

interface CricketViewProps {
  fixtures: Match[];
  selectedTimezone: string;
  selectedCountry: string;
  format24h: boolean;
  onSetReminder: (match: Match) => void;
  onAskAi: (match: Match) => void;
}

export const CricketView: React.FC<CricketViewProps> = ({
  fixtures,
  selectedTimezone,
  selectedCountry,
  format24h,
  onSetReminder,
  onAskAi,
}) => {
  const [selectedFormat, setSelectedFormat] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredFixtures = fixtures.filter(m => {
    if (m.sport !== 'cricket') return false;
    const matchFormat = selectedFormat === 'all' || m.competitionId === selectedFormat;
    const matchQuery = searchQuery === '' || 
      m.homeTeam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.awayTeam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.competitionName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.venue.toLowerCase().includes(searchQuery.toLowerCase());
    return matchFormat && matchQuery;
  });

  return (
    <div className="space-y-6">
      
      {/* Controls: Cricket Category Filter Tabs + Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl glass-panel">
        
        {/* Format & League Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {CRICKET_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedFormat(cat.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                selectedFormat === cat.id
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-[1.02]'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search cricket teams, series..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
          />
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3 pointer-events-none" />
        </div>

      </div>

      {/* Fixture Grid */}
      {filteredFixtures.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800">
          <p className="text-sm font-bold text-slate-300">No cricket fixtures found matching your selection</p>
          <p className="text-xs text-slate-500 mt-1">Try switching categories (Test, ODI, T20I, PSL, IPL) or clearing your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredFixtures.map(match => (
            <FixtureCard
              key={match.id}
              match={match}
              selectedTimezone={selectedTimezone}
              selectedCountry={selectedCountry}
              format24h={format24h}
              onSetReminder={onSetReminder}
              onAskAi={onAskAi}
            />
          ))}
        </div>
      )}

    </div>
  );
};
