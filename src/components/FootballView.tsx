'use client';

import React, { useState } from 'react';
import { Match, FootballLeagueId } from '@/lib/types';
import { FOOTBALL_LEAGUES } from '@/lib/data/footballData';
import { FixtureCard } from './FixtureCard';
import { Search, Filter } from 'lucide-react';

interface FootballViewProps {
  fixtures: Match[];
  selectedTimezone: string;
  selectedCountry: string;
  format24h: boolean;
  onSetReminder: (match: Match) => void;
  onAskAi: (match: Match) => void;
}

export const FootballView: React.FC<FootballViewProps> = ({
  fixtures,
  selectedTimezone,
  selectedCountry,
  format24h,
  onSetReminder,
  onAskAi,
}) => {
  const [selectedLeague, setSelectedLeague] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredFixtures = fixtures.filter(m => {
    if (m.sport !== 'football') return false;
    const matchLeague = selectedLeague === 'all' || m.competitionId === selectedLeague;
    const matchQuery = searchQuery === '' || 
      m.homeTeam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.awayTeam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.competitionName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.venue.toLowerCase().includes(searchQuery.toLowerCase());
    return matchLeague && matchQuery;
  });

  return (
    <div className="space-y-6">
      
      {/* Controls: League Filter Tabs + Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl glass-panel">
        
        {/* League Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {FOOTBALL_LEAGUES.map(league => (
            <button
              key={league.id}
              onClick={() => setSelectedLeague(league.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                selectedLeague === league.id
                  ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25 scale-[1.02]'
                  : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              <span>{league.icon}</span>
              <span>{league.name}</span>
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search football teams, leagues..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
          />
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3 pointer-events-none" />
        </div>

      </div>

      {/* Fixture Grid */}
      {filteredFixtures.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800">
          <p className="text-sm font-bold text-slate-300">No football matches found matching your filters</p>
          <p className="text-xs text-slate-500 mt-1">Try selecting another league or clearing your search term.</p>
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
