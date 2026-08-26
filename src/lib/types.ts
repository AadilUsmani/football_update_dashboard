export type SportType = 'football' | 'cricket';

export type FootballLeagueId = 'epl' | 'mls' | 'laliga' | 'bundesliga' | 'ucl';

export type CricketFormatId = 'test' | 'odi' | 't20i' | 'psl' | 'ipl' | 'bbl' | 'hundred' | 'blast';

export interface Team {
  id: string;
  name: string;
  shortName: string;
  crest: string;
  sport: SportType;
  leagueOrCountry: string;
  recentForm?: ('W' | 'D' | 'L')[];
}

export interface Match {
  id: string;
  sport: SportType;
  competitionId: FootballLeagueId | CricketFormatId;
  competitionName: string;
  competitionLogo?: string;
  seriesOrTourName?: string;
  formatOrStage: string;
  scheduleContext?: 'live_now' | 'current_series' | 'upcoming_tour' | 'future_window';
  dateLabel?: string;
  homeTeam: Team;
  awayTeam: Team;
  utcKickoff: string;
  venue: string;
  city: string;
  status: 'scheduled' | 'live' | 'finished';
  liveScore?: {
    home: string | number;
    away: string | number;
    detail?: string;
  };
  broadcastsByCountry: Record<string, string[]>;
  watchUrlsByCountry?: Record<string, string>;
  headToHeadSummary?: string;
  keyPlayers?: string[];
  aiMatchInsight?: string;
}

export interface TimezoneOption {
  code: string;
  label: string;
  iana: string;
  offset: string;
}

export interface CountryOption {
  code: string;
  name: string;
  flag: string;
}

export interface AgentGraphState {
  messages: Array<{ role: 'user' | 'assistant'; content: string }>;
  query: string;
  sport?: SportType | 'both';
  intent?: 'next_fixture' | 'where_to_watch' | 'favorite_team_lookup' | 'tactical_preview' | 'schedule_overview' | 'general';
  entities?: {
    team?: string;
    competition?: string;
    country?: string;
    timezone?: string;
  };
  matchedMatches?: Match[];
  broadcastSummary?: string;
  finalAnswer?: string;
  traceSteps: Array<{
    node: string;
    description: string;
    timestamp: string;
  }>;
}
