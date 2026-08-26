import { Match, Team } from '../types';

export const FOOTBALL_LEAGUES = [
  { id: 'all', name: 'All Competitions', icon: '⚽', badge: 'All' },
  { id: 'epl', name: 'Premier League', icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', badge: 'EPL', color: '#38003c' },
  { id: 'ucl', name: 'Champions League', icon: '🏆', badge: 'UCL', color: '#001438' },
  { id: 'laliga', name: 'La Liga', icon: '🇪🇸', badge: 'LaLiga', color: '#ee122b' },
  { id: 'bundesliga', name: 'Bundesliga', icon: '🇩🇪', badge: 'Bundesliga', color: '#d20515' },
  { id: 'mls', name: 'MLS (Major League Soccer)', icon: '🇺🇸', badge: 'MLS', color: '#002f6c' },
];

export const FOOTBALL_TEAMS: Team[] = [
  // EPL
  { id: 'arsenal', name: 'Arsenal', shortName: 'ARS', crest: 'https://crests.football-data.org/57.png', sport: 'football', leagueOrCountry: 'Premier League', recentForm: ['W', 'W', 'D', 'W', 'W'] },
  { id: 'mancity', name: 'Manchester City', shortName: 'MCI', crest: 'https://crests.football-data.org/65.png', sport: 'football', leagueOrCountry: 'Premier League', recentForm: ['W', 'W', 'W', 'L', 'W'] },
  { id: 'liverpool', name: 'Liverpool', shortName: 'LIV', crest: 'https://crests.football-data.org/64.png', sport: 'football', leagueOrCountry: 'Premier League', recentForm: ['W', 'W', 'W', 'W', 'D'] },
  { id: 'chelsea', name: 'Chelsea', shortName: 'CHE', crest: 'https://crests.football-data.org/61.png', sport: 'football', leagueOrCountry: 'Premier League', recentForm: ['W', 'D', 'W', 'W', 'L'] },
  { id: 'manunited', name: 'Manchester United', shortName: 'MUN', crest: 'https://crests.football-data.org/66.png', sport: 'football', leagueOrCountry: 'Premier League', recentForm: ['L', 'W', 'D', 'W', 'L'] },
  { id: 'tottenham', name: 'Tottenham Hotspur', shortName: 'TOT', crest: 'https://crests.football-data.org/73.png', sport: 'football', leagueOrCountry: 'Premier League', recentForm: ['W', 'L', 'W', 'D', 'W'] },
  { id: 'astonvilla', name: 'Aston Villa', shortName: 'AVL', crest: 'https://crests.football-data.org/58.png', sport: 'football', leagueOrCountry: 'Premier League', recentForm: ['W', 'W', 'L', 'W', 'D'] },
  { id: 'newcastle', name: 'Newcastle United', shortName: 'NEW', crest: 'https://crests.football-data.org/67.png', sport: 'football', leagueOrCountry: 'Premier League', recentForm: ['D', 'W', 'W', 'L', 'W'] },

  // La Liga
  { id: 'realmadrid', name: 'Real Madrid', shortName: 'RMA', crest: 'https://crests.football-data.org/86.png', sport: 'football', leagueOrCountry: 'La Liga', recentForm: ['W', 'W', 'W', 'W', 'W'] },
  { id: 'barcelona', name: 'FC Barcelona', shortName: 'FCB', crest: 'https://crests.football-data.org/81.png', sport: 'football', leagueOrCountry: 'La Liga', recentForm: ['W', 'W', 'W', 'L', 'W'] },
  { id: 'atletico', name: 'Atlético Madrid', shortName: 'ATM', crest: 'https://crests.football-data.org/78.png', sport: 'football', leagueOrCountry: 'La Liga', recentForm: ['W', 'D', 'W', 'W', 'D'] },
  { id: 'sociedad', name: 'Real Sociedad', shortName: 'RSO', crest: 'https://crests.football-data.org/92.png', sport: 'football', leagueOrCountry: 'La Liga', recentForm: ['L', 'W', 'D', 'W', 'D'] },
  { id: 'athletic', name: 'Athletic Club', shortName: 'ATH', crest: 'https://crests.football-data.org/77.png', sport: 'football', leagueOrCountry: 'La Liga', recentForm: ['W', 'D', 'W', 'W', 'L'] },

  // Bundesliga
  { id: 'bayern', name: 'Bayern München', shortName: 'BAY', crest: 'https://crests.football-data.org/5.png', sport: 'football', leagueOrCountry: 'Bundesliga', recentForm: ['W', 'W', 'W', 'W', 'D'] },
  { id: 'leverkusen', name: 'Bayer 04 Leverkusen', shortName: 'B04', crest: 'https://crests.football-data.org/3.png', sport: 'football', leagueOrCountry: 'Bundesliga', recentForm: ['W', 'W', 'D', 'W', 'W'] },
  { id: 'dortmund', name: 'Borussia Dortmund', shortName: 'BVB', crest: 'https://crests.football-data.org/4.png', sport: 'football', leagueOrCountry: 'Bundesliga', recentForm: ['W', 'L', 'W', 'D', 'W'] },
  { id: 'leipzig', name: 'RB Leipzig', shortName: 'RBL', crest: 'https://crests.football-data.org/721.png', sport: 'football', leagueOrCountry: 'Bundesliga', recentForm: ['W', 'W', 'L', 'W', 'D'] },

  // MLS
  { id: 'intermiami', name: 'Inter Miami CF', shortName: 'MIA', crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Inter_Miami_CF_logo.svg/300px-Inter_Miami_CF_logo.svg.png', sport: 'football', leagueOrCountry: 'MLS', recentForm: ['W', 'W', 'W', 'D', 'W'] },
  { id: 'lagalaxy', name: 'LA Galaxy', shortName: 'LAG', crest: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Los_Angeles_Galaxy_logo.svg/300px-Los_Angeles_Galaxy_logo.svg.png', sport: 'football', leagueOrCountry: 'MLS', recentForm: ['W', 'L', 'W', 'W', 'D'] },
  { id: 'lafc', name: 'Los Angeles FC', shortName: 'LAFC', crest: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Los_Angeles_Football_Club.svg/300px-Los_Angeles_Football_Club.svg.png', sport: 'football', leagueOrCountry: 'MLS', recentForm: ['W', 'W', 'D', 'L', 'W'] },
  { id: 'columbus', name: 'Columbus Crew', shortName: 'CLB', crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Columbus_Crew_logo_%282021%29.svg/300px-Columbus_Crew_logo_%282021%29.svg.png', sport: 'football', leagueOrCountry: 'MLS', recentForm: ['W', 'W', 'W', 'D', 'W'] },
];

const now = new Date();
const addHours = (h: number) => new Date(now.getTime() + h * 60 * 60 * 1000).toISOString();
const addDays = (d: number, hourUtc: number = 19, minuteUtc: number = 0) => {
  const date = new Date(now.getTime() + d * 24 * 60 * 60 * 1000);
  date.setUTCHours(hourUtc, minuteUtc, 0, 0);
  return date.toISOString();
};

export const FOOTBALL_FIXTURES: Match[] = [
  // 1. EPL: Arsenal vs Man City (Super Clash)
  {
    id: 'fb-epl-01',
    sport: 'football',
    competitionId: 'epl',
    competitionName: 'Premier League',
    competitionLogo: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    formatOrStage: 'Matchweek 28',
    homeTeam: FOOTBALL_TEAMS.find(t => t.id === 'arsenal')!,
    awayTeam: FOOTBALL_TEAMS.find(t => t.id === 'mancity')!,
    utcKickoff: addDays(1, 15, 30), // e.g. Tomorrow 3:30 PM UTC -> 8:30 PM PKT
    venue: 'Emirates Stadium',
    city: 'London',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['Tapmad (Live HD Stream)', 'A Sports HD (Cable/Satellite)', 'Sony LIV (Select matches)'],
      'United Kingdom': ['Sky Sports Main Event', 'Sky Sports Premier League', 'NOW TV'],
      'United States': ['NBC Sports', 'Peacock Premium', 'Telemundo Deportes'],
      'India': ['Star Sports Select HD 1', 'Disney+ Hotstar Live'],
      'UAE / Middle East': ['beIN Sports 1 Premium', 'TOD App Stream'],
      'Germany': ['Sky Sport Bundesliga', 'WOW Live Stream'],
      'Spain': ['DAZN LaLiga', 'Movistar Plus+'],
      'Canada': ['FuboTV Canada Live'],
      'Australia': ['Optus Sport 1']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://www.tapmad.com/sports',
      'United Kingdom': 'https://www.sky.com/sports/football',
      'United States': 'https://www.peacocktv.com/sports',
      'India': 'https://www.hotstar.com/sports/football'
    },
    headToHeadSummary: 'Arsenal won the last meeting at Emirates 1-0; City unbeaten in previous 8.',
    keyPlayers: ['Bukayo Saka', 'Erling Haaland', 'Martin Ødegaard', 'Kevin De Bruyne'],
    aiMatchInsight: 'Title decider clash. Arsenal’s solid defensive record faces Haaland’s electric scoring run in what promises to be a tactical masterclass.'
  },

  // 2. La Liga: Real Madrid vs Barcelona (El Clásico)
  {
    id: 'fb-laliga-01',
    sport: 'football',
    competitionId: 'laliga',
    competitionName: 'La Liga',
    competitionLogo: '🇪🇸',
    formatOrStage: 'Jornada 32',
    homeTeam: FOOTBALL_TEAMS.find(t => t.id === 'realmadrid')!,
    awayTeam: FOOTBALL_TEAMS.find(t => t.id === 'barcelona')!,
    utcKickoff: addDays(2, 19, 0), // In 2 days 7:00 PM UTC -> 12:00 AM Midnight PKT
    venue: 'Santiago Bernabéu',
    city: 'Madrid',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['Galaxy Sports HD', 'Tapmad Sports', 'beIN Sports MENA (Satellite)'],
      'United Kingdom': ['Premier Sports 1', 'LaLigaTV', 'ITV 4 (Select coverage)'],
      'United States': ['ESPN+', 'ESPN Deportes', 'ABC'],
      'India': ['Sports18 1 HD', 'JioCinema (Free Stream)', 'GXR World'],
      'UAE / Middle East': ['beIN Sports HD 1', 'TOD Streaming App'],
      'Germany': ['DAZN 1 Germany', 'DAZN App'],
      'Spain': ['Movistar LaLiga', 'DAZN LaLiga', 'Orange TV'],
      'Canada': ['TSN 3', 'RDS Info']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://www.tapmad.com/sports',
      'United States': 'https://plus.espn.com',
      'India': 'https://www.jiocinema.com/sports',
      'UAE / Middle East': 'https://www.tod.tv/en/sports'
    },
    headToHeadSummary: 'Real Madrid and Barcelona have shared dramatic encounters with high-scoring drama in recent Bernabéu fixtures.',
    keyPlayers: ['Vinícius Júnior', 'Kylian Mbappé', 'Lamine Yamal', 'Robert Lewandowski'],
    aiMatchInsight: 'El Clásico under the Bernabéu lights! Mbappé and Vinícius flank the attack against Hansi Flick’s aggressive high-press Barcelona.'
  },

  // 3. UCL: Bayern Munich vs Real Madrid (European Royalty)
  {
    id: 'fb-ucl-01',
    sport: 'football',
    competitionId: 'ucl',
    competitionName: 'Champions League',
    competitionLogo: '🏆',
    formatOrStage: 'Quarter-Final 1st Leg',
    homeTeam: FOOTBALL_TEAMS.find(t => t.id === 'bayern')!,
    awayTeam: FOOTBALL_TEAMS.find(t => t.id === 'realmadrid')!,
    utcKickoff: addDays(4, 19, 0), // In 4 days 7:00 PM UTC -> 12:00 AM PKT
    venue: 'Allianz Arena',
    city: 'Munich',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['Tapmad (Exclusive Live Stream)', 'A Sports HD (Select UCL)', 'Sony LIV HD'],
      'United Kingdom': ['TNT Sports 1', 'discovery+ App', 'Amazon Prime Video (Tuesday Pick)'],
      'United States': ['Paramount+', 'CBS Sports Network', 'Univision / TUDN'],
      'India': ['Sony Sports Ten 2 HD', 'Sony LIV Stream'],
      'UAE / Middle East': ['beIN Sports 1 Premium English & Arabic', 'TOD App'],
      'Germany': ['DAZN 1 Bar HD', 'Amazon Prime Video Germany'],
      'Spain': ['Movistar Liga de Campeones']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://www.tapmad.com',
      'United States': 'https://www.paramountplus.com/shows/uefa-champions-league/',
      'India': 'https://www.sonyliv.com/sports'
    },
    headToHeadSummary: 'The classic European Derby: 28 historical UCL meetings with fierce intensity.',
    keyPlayers: ['Harry Kane', 'Jamal Musiala', 'Jude Bellingham', 'Rodrygo'],
    aiMatchInsight: 'Kane leads the Bavarians in Munich against the reigning European champions in an epic clash of titans.'
  },

  // 4. MLS: Inter Miami vs LA Galaxy (Messi in Action)
  {
    id: 'fb-mls-01',
    sport: 'football',
    competitionId: 'mls',
    competitionName: 'MLS (Major League Soccer)',
    competitionLogo: '🇺🇸',
    formatOrStage: 'Regular Season - Eastern vs Western',
    homeTeam: FOOTBALL_TEAMS.find(t => t.id === 'intermiami')!,
    awayTeam: FOOTBALL_TEAMS.find(t => t.id === 'lagalaxy')!,
    utcKickoff: addDays(2, 23, 30), // In 2 days 11:30 PM UTC -> 4:30 AM Next Morning PKT
    venue: 'Chase Stadium',
    city: 'Fort Lauderdale',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['Apple TV (MLS Season Pass - Worldwide)', 'Apple TV App'],
      'United Kingdom': ['Apple TV (MLS Season Pass)'],
      'United States': ['Apple TV (MLS Season Pass)', 'Fox Sports 1 (Select TV)'],
      'India': ['Apple TV (MLS Season Pass)'],
      'UAE / Middle East': ['Apple TV (MLS Season Pass)'],
      'Germany': ['Apple TV (MLS Season Pass)'],
      'Spain': ['Apple TV (MLS Season Pass)'],
      'Canada': ['Apple TV (MLS Season Pass)', 'TSN 2']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://tv.apple.com/channel/tvs.sbd.7000',
      'United States': 'https://tv.apple.com/channel/tvs.sbd.7000',
      'United Kingdom': 'https://tv.apple.com/channel/tvs.sbd.7000'
    },
    headToHeadSummary: 'Last season ended in a thrilling 1-1 draw with a 92nd-minute Messi equalizer.',
    keyPlayers: ['Lionel Messi', 'Luis Suárez', 'Riqui Puig', 'Sergio Busquets'],
    aiMatchInsight: 'Messi and Suárez orchestrate Miami’s potent attack against Puig and the high-flying Galaxy offense.'
  },

  // 5. Bundesliga: Bayer Leverkusen vs Borussia Dortmund
  {
    id: 'fb-bnd-01',
    sport: 'football',
    competitionId: 'bundesliga',
    competitionName: 'Bundesliga',
    competitionLogo: '🇩🇪',
    formatOrStage: 'Spieltag 26',
    homeTeam: FOOTBALL_TEAMS.find(t => t.id === 'leverkusen')!,
    awayTeam: FOOTBALL_TEAMS.find(t => t.id === 'dortmund')!,
    utcKickoff: addDays(3, 16, 30), // In 3 days 4:30 PM UTC -> 9:30 PM PKT
    venue: 'BayArena',
    city: 'Leverkusen',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['Sony LIV (Live Stream)', 'Tapmad Sports', 'A Sports HD'],
      'United Kingdom': ['Sky Sports Football', 'Sky Sports App'],
      'United States': ['ESPN+', 'ESPN App'],
      'India': ['Sony Sports Ten 5 HD', 'Sony LIV'],
      'UAE / Middle East': ['beIN Sports HD 3', 'TOD App'],
      'Germany': ['Sky Sport Bundesliga 1 HD', 'WOW Live Stream']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://www.tapmad.com/sports',
      'India': 'https://www.sonyliv.com/sports',
      'United States': 'https://plus.espn.com'
    },
    headToHeadSummary: 'High scoring fixture averaging 3.8 goals per match over the last 6 encounters.',
    keyPlayers: ['Florian Wirtz', 'Granit Xhaka', 'Julian Brandt', 'Serhou Guirassy'],
    aiMatchInsight: 'Xabi Alonso’s fluid system tests Dortmund’s counter-attacking speed at BayArena.'
  },

  // 6. EPL: Liverpool vs Chelsea (Anfield Blockbuster)
  {
    id: 'fb-epl-02',
    sport: 'football',
    competitionId: 'epl',
    competitionName: 'Premier League',
    competitionLogo: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    formatOrStage: 'Matchweek 29',
    homeTeam: FOOTBALL_TEAMS.find(t => t.id === 'liverpool')!,
    awayTeam: FOOTBALL_TEAMS.find(t => t.id === 'chelsea')!,
    utcKickoff: addDays(5, 16, 30), // In 5 days 4:30 PM UTC -> 9:30 PM PKT
    venue: 'Anfield',
    city: 'Liverpool',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['Tapmad (Live HD)', 'A Sports HD', 'Sony LIV'],
      'United Kingdom': ['Sky Sports Main Event', 'Sky Sports Premier League'],
      'United States': ['Peacock', 'USA Network'],
      'India': ['Star Sports Select HD 1', 'Disney+ Hotstar'],
      'UAE / Middle East': ['beIN Sports English 1', 'TOD App']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://www.tapmad.com/sports',
      'India': 'https://www.hotstar.com/sports'
    },
    headToHeadSummary: 'A storied rivalry packed with cup finals and dramatic league encounters.',
    keyPlayers: ['Mohamed Salah', 'Virgil van Dijk', 'Cole Palmer', 'Enzo Fernández'],
    aiMatchInsight: 'Arne Slot’s relentless Reds host Enzo Maresca’s young, dynamic Chelsea squad.'
  }
];
