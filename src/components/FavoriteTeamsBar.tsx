'use client';

import React from 'react';
import { Team, Match } from '@/lib/types';
import { formatFullKickoff, getRelativeCountdown } from '@/lib/timezone';
import { TeamLogo } from './TeamLogo';
import { Star, Plus, Calendar, Bell, Tv, Sparkles } from 'lucide-react';
import { generateGoogleCalendarUrl } from '@/lib/calendar';

interface FavoriteTeamsBarProps {
  favoriteTeamIds: string[];
  allTeams: Team[];
  allMatches: Match[];
  selectedTimezone: string;
  selectedCountry: string;
  format24h: boolean;
  onOpenManageModal: () => void;
  onSetReminder: (match: Match) => void;
  onAskAi: (match: Match) => void;
}

export const FavoriteTeamsBar: React.FC<FavoriteTeamsBarProps> = ({
  favoriteTeamIds,
  allTeams,
  allMatches,
  selectedTimezone,
  selectedCountry,
  format24h,
  onOpenManageModal,
  onSetReminder,
  onAskAi,
}) => {
  const favoriteCards = favoriteTeamIds.map(teamId => {
    const team = allTeams.find(t => t.id === teamId);
    if (!team) return null;

    const nextMatch = allMatches.find(m => 
      m.homeTeam.id === teamId || 
      m.awayTeam.id === teamId ||
      m.homeTeam.name.toLowerCase().includes(team.name.toLowerCase()) ||
      m.awayTeam.name.toLowerCase().includes(team.name.toLowerCase())
    );

    return { team, nextMatch };
  }).filter(Boolean);

  return (
    <section className="mb-6 p-4 sm:p-6 rounded-3xl glass-panel border border-amber-500/20 shadow-2xl relative">
      
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
            <Star className="w-4 h-4 fill-amber-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-black text-white">
                My Priority Teams
              </h2>
              <span className="text-[10px] px-2 py-0.2 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30">
                {favoriteTeamIds.length} Saved
              </span>
            </div>
            <p className="text-[11px] text-slate-400">
              Kickoff in PKT & broadcast channels for {selectedCountry}
            </p>
          </div>
        </div>

        <button
          onClick={onOpenManageModal}
          className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-md transition-all shrink-0"
        >
          <Plus className="w-3.5 h-3.5 stroke-[3]" />
          <span>Manage</span>
        </button>
      </div>

      {/* Empty State */}
      {favoriteCards.length === 0 ? (
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center flex flex-col items-center justify-center">
          <Star className="w-10 h-10 text-slate-600 mb-2 stroke-1" />
          <h3 className="text-sm font-bold text-slate-200">No Favorite Teams Selected</h3>
          <p className="text-xs text-slate-400 max-w-md mt-1 mb-3">
            Select your favorite teams (Real Madrid, Arsenal, Pakistan, Inter Miami) to track their upcoming matches automatically.
          </p>
          <button
            onClick={onOpenManageModal}
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-md transition-all"
          >
            ⭐ Choose Favorite Teams
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favoriteCards.map((item, idx) => {
            if (!item) return null;
            const { team, nextMatch } = item;

            if (!nextMatch) {
              return (
                <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <TeamLogo team={team} size="sm" />
                    <div>
                      <h4 className="text-xs font-bold text-white">{team.name}</h4>
                      <p className="text-[10px] text-slate-400">{team.leagueOrCountry}</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 px-2 py-0.5 rounded bg-slate-950">Off Season</span>
                </div>
              );
            }

            const countdown = getRelativeCountdown(nextMatch.utcKickoff);
            const formattedTime = formatFullKickoff(nextMatch.utcKickoff, selectedTimezone, format24h);
            const isHome = nextMatch.homeTeam.id === team.id || nextMatch.homeTeam.name.toLowerCase().includes(team.name.toLowerCase());
            const opponent = isHome ? nextMatch.awayTeam : nextMatch.homeTeam;
            const channels = nextMatch.broadcastsByCountry[selectedCountry] || nextMatch.broadcastsByCountry['Pakistan'] || ['Check local network'];

            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-900/90 border border-amber-500/25 hover:border-amber-500/50 transition-all duration-200 shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-slate-800">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span>{nextMatch.sport === 'football' ? '⚽' : '🏏'}</span>
                      <span className="text-[11px] font-black text-amber-300 uppercase tracking-wide truncate">
                        {team.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
                      {countdown.text}
                    </span>
                  </div>

                  {/* Matchup Visual */}
                  <div className="flex items-center justify-between gap-2 my-1.5">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <TeamLogo team={team} size="sm" />
                      <div className="min-w-0">
                        <div className="text-xs font-black text-white truncate">{team.name}</div>
                        <div className="text-[10px] text-slate-400 font-semibold">{isHome ? 'Home' : 'Away'}</div>
                      </div>
                    </div>

                    <div className="text-[10px] font-black text-slate-500 px-1 shrink-0">VS</div>

                    <div className="flex items-center gap-2 flex-1 justify-end text-right min-w-0">
                      <div className="min-w-0">
                        <div className="text-xs font-black text-white truncate">{opponent.name}</div>
                        <div className="text-[10px] text-slate-400 font-semibold">{isHome ? 'Away' : 'Home'}</div>
                      </div>
                      <TeamLogo team={opponent} size="sm" />
                    </div>
                  </div>

                  {/* Kickoff in PKT */}
                  <div className="my-2 p-2 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 font-semibold">⏰ Kickoff:</span>
                    <span className="text-emerald-400 font-black">{formattedTime}</span>
                  </div>

                  {/* Broadcast */}
                  <div className="my-1 text-[10px] text-slate-300">
                    <div className="flex items-center gap-1 text-cyan-300 font-bold mb-0.5">
                      <Tv className="w-3 h-3" />
                      <span>Watch in {selectedCountry}:</span>
                    </div>
                    <div className="text-slate-200 font-medium truncate">
                      📡 {channels[0]} {channels[1] ? `• ${channels[1]}` : ''}
                    </div>
                  </div>
                </div>

                {/* 3-Column Uniform Action Grid */}
                <div className="grid grid-cols-3 gap-1 pt-2.5 mt-1.5 border-t border-slate-800 text-[10px]">
                  <a
                    href={generateGoogleCalendarUrl(nextMatch, selectedCountry)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 py-1.5 px-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold transition-colors"
                  >
                    <Calendar className="w-3 h-3 text-emerald-400" />
                    <span>Calendar</span>
                  </a>

                  <button
                    onClick={() => onSetReminder(nextMatch)}
                    className="flex items-center justify-center gap-1 py-1.5 px-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold transition-colors"
                  >
                    <Bell className="w-3 h-3 text-amber-400" />
                    <span>Remind</span>
                  </button>

                  <button
                    onClick={() => onAskAi(nextMatch)}
                    className="flex items-center justify-center gap-1 py-1.5 px-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-black transition-colors"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>Scout</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      )}

    </section>
  );
};
