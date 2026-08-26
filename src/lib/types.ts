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

export interface BroadcastChannel {
  name: string;
  type: 'tv' | 'ott' | 'free';
  logo?: string;
  link?: string;
}

export interface Match {
  id: string;
  sport: SportType;
  competitionId: FootballLeagueId | CricketFormatId;
  competitionName: string;
  competitionLogo: string;
  formatOrStage: string;
  homeTeam: Team;
  awayTeam: Team;
  utcKickoff: string; // ISO 8601 UTC string
  venue: string;
  city: string;
  status: 'scheduled' | 'live' | 'finished';
  liveScore?: {
    home: string | number;
    away: string | number;
    detail?: string;
  };
  broadcastsByCountry: Record<string, string[]>; // e.g. "Pakistan": ["Tapmad (Live OTT)", "A Sports HD", "PTV Sports"]
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

export interface CalendarEventPayload {
  title: string;
  description: string;
  location: string;
  startTimeUtc: string;
  endTimeUtc: string;
}

export interface ReminderSubscription {
  matchId: string;
  email: string;
  timeBeforeMinutes: number;
  matchTitle: string;
  kickoffFormatted: string;
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
