import { Match, Team } from '../types';

export const FOOTBALL_LEAGUES = [
  { id: 'all', name: 'All Competitions', icon: '⚽', badge: 'All' },
  { id: 'epl', name: 'Premier League', icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', badge: 'EPL', color: '#38003c' },
  { id: 'laliga', name: 'La Liga', icon: '🇪🇸', badge: 'LaLiga', color: '#ee122b' },
  { id: 'ucl', name: 'Champions League', icon: '🏆', badge: 'UCL', color: '#001438' },
  { id: 'bundesliga', name: 'Bundesliga', icon: '🇩🇪', badge: 'Bundesliga', color: '#d20515' },
  { id: 'mls', name: 'MLS (Major League Soccer)', icon: '🇺🇸', badge: 'MLS', color: '#002f6c' },
];

export const FOOTBALL_TEAMS: Team[] = [
  // EPL with reliable crest URLs
  { id: 'arsenal', name: 'Arsenal', shortName: 'ARS', crest: 'https://crests.football-data.org/57.png', sport: 'football', leagueOrCountry: 'Premier League', recentForm: ['W', 'W', 'W', 'D', 'W'] },
  { id: 'mancity', name: 'Manchester City', shortName: 'MCI', crest: 'https://crests.football-data.org/65.png', sport: 'football', leagueOrCountry: 'Premier League', recentForm: ['W', 'W', 'W', 'W', 'W'] },
  { id: 'liverpool', name: 'Liverpool', shortName: 'LIV', crest: 'https://crests.football-data.org/64.png', sport: 'football', leagueOrCountry: 'Premier League', recentForm: ['W', 'W', 'W', 'W', 'D'] },
  { id: 'manunited', name: 'Manchester United', shortName: 'MUN', crest: 'https://crests.football-data.org/66.png', sport: 'football', leagueOrCountry: 'Premier League', recentForm: ['W', 'L', 'W', 'D', 'L'] },
  { id: 'chelsea', name: 'Chelsea', shortName: 'CHE', crest: 'https://crests.football-data.org/61.png', sport: 'football', leagueOrCountry: 'Premier League', recentForm: ['L', 'W', 'D', 'W', 'W'] },
  { id: 'brighton', name: 'Brighton & Hove Albion', shortName: 'BHA', crest: 'https://crests.football-data.org/397.png', sport: 'football', leagueOrCountry: 'Premier League', recentForm: ['W', 'W', 'W', 'D', 'L'] },

  // La Liga
  { id: 'realmadrid', name: 'Real Madrid', shortName: 'RMA', crest: 'https://crests.football-data.org/86.png', sport: 'football', leagueOrCountry: 'La Liga', recentForm: ['W', 'D', 'W', 'W', 'W'] },
  { id: 'barcelona', name: 'FC Barcelona', shortName: 'FCB', crest: 'https://crests.football-data.org/81.png', sport: 'football', leagueOrCountry: 'La Liga', recentForm: ['W', 'W', 'W', 'W', 'W'] },
  { id: 'atletico', name: 'Atlético Madrid', shortName: 'ATM', crest: 'https://crests.football-data.org/78.png', sport: 'football', leagueOrCountry: 'La Liga', recentForm: ['D', 'W', 'D', 'W', 'W'] },
  { id: 'realbetis', name: 'Real Betis', shortName: 'BET', crest: 'https://crests.football-data.org/90.png', sport: 'football', leagueOrCountry: 'La Liga', recentForm: ['D', 'D', 'W', 'L', 'D'] },

  // Champions League & Bundesliga
  { id: 'bayern', name: 'Bayern München', shortName: 'BAY', crest: 'https://crests.football-data.org/5.png', sport: 'football', leagueOrCountry: 'Bundesliga', recentForm: ['W', 'W', 'W', 'W', 'D'] },
  { id: 'leverkusen', name: 'Bayer 04 Leverkusen', shortName: 'B04', crest: 'https://crests.football-data.org/3.png', sport: 'football', leagueOrCountry: 'Bundesliga', recentForm: ['W', 'W', 'W', 'D', 'W'] },
  { id: 'intermilan', name: 'Inter Milan', shortName: 'INT', crest: 'https://crests.football-data.org/108.png', sport: 'football', leagueOrCountry: 'Champions League', recentForm: ['D', 'W', 'W', 'W', 'W'] },

  // MLS
  { id: 'intermiami', name: 'Inter Miami CF', shortName: 'MIA', crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/Inter_Miami_CF_logo.svg/300px-Inter_Miami_CF_logo.svg.png', sport: 'football', leagueOrCountry: 'MLS', recentForm: ['W', 'W', 'W', 'D', 'W'] },
  { id: 'chicagofire', name: 'Chicago Fire', shortName: 'CHI', crest: '', sport: 'football', leagueOrCountry: 'MLS', recentForm: ['D', 'L', 'W', 'L', 'D'] },
];

const now = new Date();
const addDays = (d: number, hourUtc: number = 15, minuteUtc: number = 0) => {
  const date = new Date(now.getTime() + d * 24 * 60 * 60 * 1000);
  date.setUTCHours(hourUtc, minuteUtc, 0, 0);
  return date.toISOString();
};

export const FOOTBALL_FIXTURES: Match[] = [
  // 1. EPL: Manchester United vs Liverpool (Super Sunday at Old Trafford) - 8:00 PM PKT (3:00 PM UTC / 4:00 PM BST)
  {
    id: 'fb-epl-mun-liv',
    sport: 'football',
    competitionId: 'epl',
    competitionName: 'Premier League',
    competitionLogo: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    formatOrStage: 'Matchweek 3 (Super Sunday)',
    homeTeam: FOOTBALL_TEAMS.find(t => t.id === 'manunited')!,
    awayTeam: FOOTBALL_TEAMS.find(t => t.id === 'liverpool')!,
    utcKickoff: addDays(1, 15, 0), // 3:00 PM UTC = 8:00 PM PKT (4:00 PM BST)
    venue: 'Old Trafford',
    city: 'Manchester, England',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['Tapmad (Exclusive Live HD Stream)', 'A Sports HD (Satellite/Cable)', 'Sony LIV (Select)'],
      'United Kingdom': ['Sky Sports Main Event', 'Sky Sports Premier League', 'NOW TV'],
      'United States': ['Peacock Premium', 'USA Network', 'Telemundo'],
      'India': ['Star Sports Select HD 1', 'Disney+ Hotstar Live'],
      'UAE / Middle East': ['beIN Sports 1 Premium English & Arabic', 'TOD App Stream'],
      'Germany': ['Sky Sport Bundesliga', 'WOW Live Stream']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://www.tapmad.com/sports',
      'United Kingdom': 'https://www.sky.com/sports/football',
      'United States': 'https://www.peacocktv.com/sports',
      'India': 'https://www.hotstar.com/sports/football'
    },
    headToHeadSummary: 'The biggest fixture in English football. High intensity drama at Old Trafford.',
    keyPlayers: ['Bruno Fernandes (C)', 'Marcus Rashford', 'Mohamed Salah', 'Virgil van Dijk (C)', 'Luis Díaz'],
    aiMatchInsight: '8:00 PM PKT kickoff. Arne Slot takes Liverpool to Old Trafford in the biggest test of the early Premier League season.'
  },

  // 2. EPL: Arsenal vs Brighton - 4:30 PM PKT (11:30 AM UTC / 12:30 PM BST Lunchtime Kickoff)
  {
    id: 'fb-epl-ars-bha',
    sport: 'football',
    competitionId: 'epl',
    competitionName: 'Premier League',
    competitionLogo: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    formatOrStage: 'Matchweek 3 (Saturday Lunchtime)',
    homeTeam: FOOTBALL_TEAMS.find(t => t.id === 'arsenal')!,
    awayTeam: FOOTBALL_TEAMS.find(t => t.id === 'brighton')!,
    utcKickoff: addDays(2, 11, 30), // 11:30 AM UTC = 4:30 PM PKT (12:30 PM London)
    venue: 'Emirates Stadium',
    city: 'London, England',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['Tapmad (Live HD Stream)', 'A Sports HD'],
      'United Kingdom': ['TNT Sports 1', 'discovery+ App'],
      'United States': ['USA Network', 'Peacock'],
      'India': ['Star Sports Select 1 HD', 'Disney+ Hotstar']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://www.tapmad.com/sports',
      'United Kingdom': 'https://www.tntsports.co.uk'
    },
    headToHeadSummary: 'Both teams enter with unbeaten records in the opening rounds.',
    keyPlayers: ['Bukayo Saka', 'Martin Ødegaard (C)', 'Kai Havertz', 'Kaoru Mitoma', 'Danny Welbeck'],
    aiMatchInsight: '4:30 PM PKT Saturday kickoff at the Emirates.'
  },

  // 3. La Liga: Real Madrid vs Real Betis - 12:30 AM Midnight PKT (7:30 PM UTC / 9:30 PM CEST)
  {
    id: 'fb-laliga-rma-bet',
    sport: 'football',
    competitionId: 'laliga',
    competitionName: 'La Liga',
    competitionLogo: '🇪🇸',
    formatOrStage: 'Jornada 4 (Bernabéu Night Game)',
    homeTeam: FOOTBALL_TEAMS.find(t => t.id === 'realmadrid')!,
    awayTeam: FOOTBALL_TEAMS.find(t => t.id === 'realbetis')!,
    utcKickoff: addDays(2, 19, 30), // 7:30 PM UTC = 12:30 AM Midnight PKT
    venue: 'Santiago Bernabéu',
    city: 'Madrid, Spain',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['Galaxy Sports HD', 'Tapmad Sports', 'beIN Sports MENA (Satellite)'],
      'United Kingdom': ['Premier Sports 1', 'LaLigaTV', 'ITV 4'],
      'United States': ['ESPN+', 'ESPN Deportes'],
      'India': ['Sports18 1 HD', 'JioCinema (Free Stream)', 'GXR World'],
      'UAE / Middle East': ['beIN Sports HD 1', 'TOD Streaming']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://www.tapmad.com/sports',
      'United States': 'https://plus.espn.com',
      'India': 'https://www.jiocinema.com/sports'
    },
    headToHeadSummary: 'Real Betis has historically frustrated Madrid at the Bernabéu with low-scoring draws.',
    keyPlayers: ['Kylian Mbappé', 'Vinícius Júnior', 'Rodrygo', 'Isco', 'Nabil Fekir'],
    aiMatchInsight: '12:30 AM PKT start under the Bernabéu roof. Mbappé aims for his first La Liga home goals.'
  },

  // 4. UCL: Manchester City vs Inter Milan - 12:00 AM Midnight PKT (7:00 PM UTC / 8:00 PM BST)
  {
    id: 'fb-ucl-mci-int',
    sport: 'football',
    competitionId: 'ucl',
    competitionName: 'UEFA Champions League',
    competitionLogo: '🏆',
    formatOrStage: 'League Phase Matchday 1 (2023 Final Rematch)',
    homeTeam: FOOTBALL_TEAMS.find(t => t.id === 'mancity')!,
    awayTeam: FOOTBALL_TEAMS.find(t => t.id === 'intermilan')!,
    utcKickoff: addDays(4, 19, 0), // 7:00 PM UTC = 12:00 AM Midnight PKT
    venue: 'Etihad Stadium',
    city: 'Manchester, England',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['Tapmad (Exclusive Live Stream)', 'A Sports HD (Select UCL)', 'Sony LIV HD'],
      'United Kingdom': ['TNT Sports 1', 'discovery+ App'],
      'United States': ['Paramount+ (All Matches Live)', 'CBS Sports Network'],
      'India': ['Sony Sports Ten 2 HD', 'Sony LIV Stream'],
      'UAE / Middle East': ['beIN Sports 1 Premium', 'TOD App']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://www.tapmad.com',
      'United States': 'https://www.paramountplus.com'
    },
    headToHeadSummary: 'Rematch of the 2023 Champions League Istanbul Final where City won 1-0.',
    keyPlayers: ['Erling Haaland', 'Kevin De Bruyne', 'Rodri', 'Lautaro Martínez (C)', 'Nicolò Barella'],
    aiMatchInsight: '12:00 AM PKT marquee European night.'
  },

  // 5. MLS: Inter Miami vs Chicago Fire - 4:30 AM PKT (11:30 PM UTC / 7:30 PM ET)
  {
    id: 'fb-mls-mia-chi',
    sport: 'football',
    competitionId: 'mls',
    competitionName: 'MLS (Major League Soccer)',
    competitionLogo: '🇺🇸',
    formatOrStage: 'MLS Regular Season (Eastern Conference)',
    homeTeam: FOOTBALL_TEAMS.find(t => t.id === 'intermiami')!,
    awayTeam: FOOTBALL_TEAMS.find(t => t.id === 'chicagofire')!,
    utcKickoff: addDays(3, 23, 30), // 11:30 PM UTC = 4:30 AM PKT
    venue: 'Chase Stadium',
    city: 'Fort Lauderdale, Florida, USA',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['Apple TV (MLS Season Pass - Worldwide Live)', 'Apple TV App'],
      'United Kingdom': ['Apple TV (MLS Season Pass)'],
      'United States': ['Apple TV (MLS Season Pass)'],
      'India': ['Apple TV (MLS Season Pass)'],
      'UAE / Middle East': ['Apple TV (MLS Season Pass)']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://tv.apple.com/channel/tvs.sbd.7000',
      'United States': 'https://tv.apple.com/channel/tvs.sbd.7000'
    },
    headToHeadSummary: 'Miami leads the Eastern Conference supporters shield race with high-powered offense.',
    keyPlayers: ['Lionel Messi', 'Luis Suárez', 'Sergio Busquets', 'Jordi Alba'],
    aiMatchInsight: '4:30 AM PKT early morning kickoff.'
  }
];
