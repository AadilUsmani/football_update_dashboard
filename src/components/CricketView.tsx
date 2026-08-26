'use client';

import React, { useState } from 'react';
import { Match } from '@/lib/types';
import { CRICKET_CATEGORIES } from '@/lib/data/cricketData';
import { FixtureCard } from './FixtureCard';
import { Search, CalendarDays } from 'lucide-react';

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
      (m.seriesOrTourName && m.seriesOrTourName.toLowerCase().includes(searchQuery.toLowerCase())) ||
      m.venue.toLowerCase().includes(searchQuery.toLowerCase());
    return matchFormat && matchQuery;
  });

  // Group by Series / Tour
  const currentSeries = filteredFixtures.filter(m => m.scheduleContext === 'current_series');
  const upcomingTours = filteredFixtures.filter(m => m.scheduleContext === 'upcoming_tour');
  const franchiseWindows = filteredFixtures.filter(m => m.scheduleContext === 'future_window');

  return (
    <div className="space-y-6">
      
      {/* Controls: Cricket Category Filter Tabs + Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 p-3 sm:p-4 rounded-2xl glass-panel">
        
        {/* Format Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
          {CRICKET_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedFormat(cat.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black whitespace-nowrap transition-all ${
                selectedFormat === cat.id
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
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
            placeholder="Search teams, tour series, venues..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
          />
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2 pointer-events-none" />
        </div>

      </div>

      {/* Tour & Series Sections */}
      {filteredFixtures.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800">
          <p className="text-sm font-bold text-slate-300">No cricket matches found matching your filters</p>
          <p className="text-xs text-slate-500 mt-1">Try switching categories or clearing search.</p>
        </div>
      ) : (
        <div className="space-y-8">
          
          {/* 1. Active International Series */}
          {currentSeries.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-3.5 px-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <h3 className="text-sm sm:text-base font-black text-emerald-400 uppercase tracking-wider">
                  Active International Series (In Progress)
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {currentSeries.map(match => (
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
            </section>
          )}

          {/* 2. Upcoming Bilateral Tours on ICC Calendar */}
          {upcomingTours.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-3.5 px-1">
                <CalendarDays className="w-4 h-4 text-cyan-400" />
                <h3 className="text-sm sm:text-base font-black text-cyan-300 uppercase tracking-wider">
                  Upcoming International Tours (ICC Future Tours Calendar)
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {upcomingTours.map(match => (
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
            </section>
          )}

          {/* 3. Franchise Season Windows (PSL 10 & IPL) */}
          {franchiseWindows.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-3.5 px-1">
                <span className="text-base">🇵🇰</span>
                <h3 className="text-sm sm:text-base font-black text-amber-300 uppercase tracking-wider">
                  Franchise League Windows (PSL 10 Season Calendar)
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {franchiseWindows.map(match => (
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
            </section>
          )}

        </div>
      )}

    </div>
  );
};
