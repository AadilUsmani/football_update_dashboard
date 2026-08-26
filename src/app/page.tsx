'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { SportSelector } from '@/components/SportSelector';
import { FavoriteTeamsBar } from '@/components/FavoriteTeamsBar';
import { FootballView } from '@/components/FootballView';
import { CricketView } from '@/components/CricketView';
import { FixtureCard } from '@/components/FixtureCard';
import { BroadcastGuideModal } from '@/components/BroadcastGuideModal';
import { ReminderModal } from '@/components/ReminderModal';
import { FavoritesModal } from '@/components/FavoritesModal';
import { AgentChatDrawer } from '@/components/AgentChatDrawer';

import { FOOTBALL_FIXTURES, FOOTBALL_TEAMS } from '@/lib/data/footballData';
import { CRICKET_FIXTURES, CRICKET_TEAMS } from '@/lib/data/cricketData';
import { Match, SportType, Team } from '@/lib/types';
import { Sparkles, Bot, Code2, Globe } from 'lucide-react';

export default function SportsDashboard() {
  // App state
  const [activeSport, setActiveSport] = useState<SportType | 'all'>('football');
  const [selectedTimezone, setSelectedTimezone] = useState<string>('Asia/Karachi'); // PKT Default
  const [selectedCountry, setSelectedCountry] = useState<string>('Pakistan'); // Pakistan Default
  const [format24h, setFormat24h] = useState<boolean>(false);

  // Favorite teams (defaults include top requested clubs/countries)
  const [favoriteTeamIds, setFavoriteTeamIds] = useState<string[]>([
    'realmadrid',
    'arsenal',
    'pakistan',
    'intermiami'
  ]);

  // Modal states
  const [isBroadcastGuideOpen, setIsBroadcastGuideOpen] = useState(false);
  const [isFavoritesModalOpen, setIsFavoritesModalOpen] = useState(false);
  const [isReminderModalOpen, setIsReminderModalOpen] = useState(false);
  const [selectedMatchForReminder, setSelectedMatchForReminder] = useState<Match | null>(null);
  const [isAgentDrawerOpen, setIsAgentDrawerOpen] = useState(false);
  const [agentInitialQuery, setAgentInitialQuery] = useState('');

  // Local storage persistence
  useEffect(() => {
    try {
      const savedFavs = localStorage.getItem('sports_favorite_teams');
      if (savedFavs) setFavoriteTeamIds(JSON.parse(savedFavs));

      const savedTz = localStorage.getItem('sports_selected_timezone');
      if (savedTz) setSelectedTimezone(savedTz);

      const savedCountry = localStorage.getItem('sports_selected_country');
      if (savedCountry) setSelectedCountry(savedCountry);
    } catch {
      // ignore
    }
  }, []);

  const handleTimezoneChange = (tz: string) => {
    setSelectedTimezone(tz);
    try { localStorage.setItem('sports_selected_timezone', tz); } catch {}
  };

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    try { localStorage.setItem('sports_selected_country', country); } catch {}
  };

  const handleToggleFavorite = (teamId: string) => {
    setFavoriteTeamIds(prev => {
      const updated = prev.includes(teamId) ? prev.filter(id => id !== teamId) : [...prev, teamId];
      try { localStorage.setItem('sports_favorite_teams', JSON.stringify(updated)); } catch {}
      return updated;
    });
  };

  const handleOpenReminder = (match: Match) => {
    setSelectedMatchForReminder(match);
    setIsReminderModalOpen(true);
  };

  const handleAskAiForMatch = (match: Match) => {
    setAgentInitialQuery(`Give me a tactical breakdown, kickoff time in PKT, and where to watch ${match.homeTeam.name} vs ${match.awayTeam.name} in ${selectedCountry}`);
    setIsAgentDrawerOpen(true);
  };

  const allTeams: Team[] = [...FOOTBALL_TEAMS, ...CRICKET_TEAMS];
  const allMatches: Match[] = [...FOOTBALL_FIXTURES, ...CRICKET_FIXTURES];

  return (
    <div className="min-h-screen flex flex-col justify-between">
      
      {/* Navigation Header */}
      <Header
        selectedTimezone={selectedTimezone}
        onTimezoneChange={handleTimezoneChange}
        selectedCountry={selectedCountry}
        onCountryChange={handleCountryChange}
        format24h={format24h}
        onFormat24hToggle={() => setFormat24h(!format24h)}
        onOpenBroadcastGuide={() => setIsBroadcastGuideOpen(true)}
        onOpenAgentDrawer={() => {
          setAgentInitialQuery('');
          setIsAgentDrawerOpen(true);
        }}
        onOpenFavoritesModal={() => setIsFavoritesModalOpen(true)}
        favoritesCount={favoriteTeamIds.length}
      />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 w-full flex-1 pb-32">
        
        {/* Sport Switcher Tabs */}
        <SportSelector
          activeSport={activeSport}
          onSelectSport={setActiveSport}
          footballMatchesCount={FOOTBALL_FIXTURES.length}
          cricketMatchesCount={CRICKET_FIXTURES.length}
        />

        {/* Favorite Teams Priority Bar */}
        <FavoriteTeamsBar
          favoriteTeamIds={favoriteTeamIds}
          allTeams={allTeams}
          allMatches={allMatches}
          selectedTimezone={selectedTimezone}
          selectedCountry={selectedCountry}
          format24h={format24h}
          onOpenManageModal={() => setIsFavoritesModalOpen(true)}
          onSetReminder={handleOpenReminder}
          onAskAi={handleAskAiForMatch}
        />

        {/* Fixtures Section Title */}
        <div className="flex items-center justify-between gap-2 mb-4 px-1">
          <div className="flex items-center gap-2">
            <span className="text-lg">
              {activeSport === 'football' ? '⚽' : activeSport === 'cricket' ? '🏏' : '🌟'}
            </span>
            <h2 className="text-base sm:text-lg font-black text-white">
              {activeSport === 'football' 
                ? 'Premier League, La Liga, UCL, Bundesliga & MLS' 
                : activeSport === 'cricket' 
                  ? 'International Tests, T20Is, ODIs & Franchise Leagues' 
                  : 'All Upcoming Global Fixtures'}
            </h2>
          </div>
          <span className="text-[11px] text-emerald-400 font-bold hidden md:inline">
            All times in {selectedTimezone === 'Asia/Karachi' ? 'Pakistan Standard Time (PKT)' : selectedTimezone}
          </span>
        </div>

        {/* View Switcher */}
        {activeSport === 'football' && (
          <FootballView
            fixtures={FOOTBALL_FIXTURES}
            selectedTimezone={selectedTimezone}
            selectedCountry={selectedCountry}
            format24h={format24h}
            onSetReminder={handleOpenReminder}
            onAskAi={handleAskAiForMatch}
          />
        )}

        {activeSport === 'cricket' && (
          <CricketView
            fixtures={CRICKET_FIXTURES}
            selectedTimezone={selectedTimezone}
            selectedCountry={selectedCountry}
            format24h={format24h}
            onSetReminder={handleOpenReminder}
            onAskAi={handleAskAiForMatch}
          />
        )}

        {activeSport === 'all' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {allMatches.map(match => (
              <FixtureCard
                key={match.id}
                match={match}
                selectedTimezone={selectedTimezone}
                selectedCountry={selectedCountry}
                format24h={format24h}
                onSetReminder={handleOpenReminder}
                onAskAi={handleAskAiForMatch}
              />
            ))}
          </div>
        )}

      </main>

      {/* Floating LangGraph AI Agent Button */}
      <div className="fixed bottom-5 right-4 sm:right-6 z-40">
        <button
          onClick={() => {
            setAgentInitialQuery('');
            setIsAgentDrawerOpen(true);
          }}
          className="flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs sm:text-sm shadow-2xl shadow-emerald-500/40 hover:scale-105 transition-all"
        >
          <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950" />
          <span>AI Scout</span>
          <Sparkles className="w-3.5 h-3.5 text-slate-900" />
        </button>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-md py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>⚽🏏 Built for </span>
            <strong className="text-white font-bold">Adil Usmani</strong>
            <a
              href="https://github.com/AadilUsmani"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:underline font-semibold"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>@AadilUsmani</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span>LangGraph Agent</span>
            <span>•</span>
            <span>Default: Pakistan Standard Time (PKT UTC+5)</span>
          </div>
        </div>
      </footer>

      {/* Modals & Drawers */}
      <BroadcastGuideModal
        isOpen={isBroadcastGuideOpen}
        onClose={() => setIsBroadcastGuideOpen(false)}
        initialCountry={selectedCountry}
      />

      <FavoritesModal
        isOpen={isFavoritesModalOpen}
        onClose={() => setIsFavoritesModalOpen(false)}
        favoriteTeamIds={favoriteTeamIds}
        onToggleFavorite={handleToggleFavorite}
      />

      <ReminderModal
        isOpen={isReminderModalOpen}
        onClose={() => setIsReminderModalOpen(false)}
        match={selectedMatchForReminder}
        selectedTimezone={selectedTimezone}
        selectedCountry={selectedCountry}
        format24h={format24h}
      />

      <AgentChatDrawer
        isOpen={isAgentDrawerOpen}
        onClose={() => setIsAgentDrawerOpen(false)}
        selectedTimezone={selectedTimezone}
        selectedCountry={selectedCountry}
        initialQuery={agentInitialQuery}
      />

    </div>
  );
}
