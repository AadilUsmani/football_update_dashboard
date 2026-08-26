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

const baseNow = new Date();
const setSchedule = (daysAhead: number, utcHour: number, utcMinute: number) => {
  const d = new Date(baseNow.getTime() + daysAhead * 24 * 60 * 60 * 1000);
  d.setUTCHours(utcHour, utcMinute, 0, 0);
  return d.toISOString();
};

export const FOOTBALL_FIXTURES: Match[] = [
  // 1. EPL: Arsenal vs Manchester City (Super Sunday) - 8:30 PM PKT (3:30 PM UTC / 4:30 PM BST)
  {
    id: 'fb-epl-ars-mci',
    sport: 'football',
    competitionId: 'epl',
    competitionName: 'Premier League',
    competitionLogo: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    formatOrStage: 'Matchweek 5 (Super Sunday)',
    homeTeam: FOOTBALL_TEAMS.find(t => t.id === 'arsenal')!,
    awayTeam: FOOTBALL_TEAMS.find(t => t.id === 'mancity')!,
    utcKickoff: setSchedule(1, 15, 30), // 3:30 PM UTC = 8:30 PM PKT
    venue: 'Emirates Stadium',
    city: 'London, England',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['Tapmad (Exclusive Live HD Stream)', 'A Sports HD (Satellite/Cable)', 'Sony LIV (Select matches)'],
      'United Kingdom': ['Sky Sports Main Event', 'Sky Sports Premier League', 'NOW TV'],
      'United States': ['NBC Sports', 'Peacock Premium', 'Telemundo Deportes'],
      'India': ['Star Sports Select HD 1', 'Disney+ Hotstar Live'],
      'UAE / Middle East': ['beIN Sports 1 Premium English & Arabic', 'TOD App Stream'],
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
    headToHeadSummary: 'Arsenal won the last meeting at the Emirates 1-0; City had won previous 8 meetings.',
    keyPlayers: ['Bukayo Saka', 'Martin Ødegaard', 'Erling Haaland', 'Kevin De Bruyne', 'Declan Rice'],
    aiMatchInsight: '8:30 PM PKT kickoff at the Emirates. Arsenal’s defensive resilience led by Saliba and Gabriel faces Haaland’s electric scoring rate in the title decider.'
  },

  // 2. La Liga: Real Madrid vs FC Barcelona (El Clásico) - 12:00 AM Midnight PKT (7:00 PM UTC / 9:00 PM CEST)
  {
    id: 'fb-laliga-rma-fcb',
    sport: 'football',
    competitionId: 'laliga',
    competitionName: 'La Liga',
    competitionLogo: '🇪🇸',
    formatOrStage: 'Jornada 11 (El Clásico)',
    homeTeam: FOOTBALL_TEAMS.find(t => t.id === 'realmadrid')!,
    awayTeam: FOOTBALL_TEAMS.find(t => t.id === 'barcelona')!,
    utcKickoff: setSchedule(2, 19, 0), // 7:00 PM UTC = 12:00 AM Midnight PKT
    venue: 'Santiago Bernabéu',
    city: 'Madrid, Spain',
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
    headToHeadSummary: 'Real Madrid won both league Clásicos last season. Bernabéu fixtures have averaged 3.6 goals over the last 5 meetings.',
    keyPlayers: ['Vinícius Júnior', 'Kylian Mbappé', 'Jude Bellingham', 'Lamine Yamal', 'Robert Lewandowski', 'Raphinha'],
    aiMatchInsight: '12:00 AM Midnight PKT start. Mbappé and Vinícius test Hansi Flick’s aggressive high-defensive line in the biggest club football match on earth.'
  },

  // 3. UCL: Bayern Munich vs Real Madrid - 12:00 AM PKT (7:00 PM UTC / 9:00 PM CET)
  {
    id: 'fb-ucl-bay-rma',
    sport: 'football',
    competitionId: 'ucl',
    competitionName: 'UEFA Champions League',
    competitionLogo: '🏆',
    formatOrStage: 'League Phase Blockbuster',
    homeTeam: FOOTBALL_TEAMS.find(t => t.id === 'bayern')!,
    awayTeam: FOOTBALL_TEAMS.find(t => t.id === 'realmadrid')!,
    utcKickoff: setSchedule(4, 19, 0), // 7:00 PM UTC = 12:00 AM Midnight PKT
    venue: 'Allianz Arena',
    city: 'Munich, Germany',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['Tapmad (Exclusive Live Stream)', 'A Sports HD (Select UCL)', 'Sony LIV HD'],
      'United Kingdom': ['TNT Sports 1', 'discovery+ App', 'Amazon Prime Video (Tuesday Pick)'],
      'United States': ['Paramount+ (All Matches Live)', 'CBS Sports Network', 'Univision / TUDN'],
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
    headToHeadSummary: 'European Royalty: 28 historical Champions League meetings. Real Madrid advanced in the thrilling 2024 semi-final.',
    keyPlayers: ['Harry Kane', 'Jamal Musiala', 'Michael Olise', 'Jude Bellingham', 'Vinícius Júnior', 'Thibaut Courtois'],
    aiMatchInsight: '12:00 AM PKT in Munich. Kane and Musiala look to break Real Madrid’s unbeaten European knockout pedigree under the Allianz Arena floodlights.'
  },

  // 4. MLS: Inter Miami vs LA Galaxy - 4:30 AM PKT (11:30 PM UTC / 7:30 PM ET)
  {
    id: 'fb-mls-mia-lag',
    sport: 'football',
    competitionId: 'mls',
    competitionName: 'MLS (Major League Soccer)',
    competitionLogo: '🇺🇸',
    formatOrStage: 'Eastern vs Western Conference Clash',
    homeTeam: FOOTBALL_TEAMS.find(t => t.id === 'intermiami')!,
    awayTeam: FOOTBALL_TEAMS.find(t => t.id === 'lagalaxy')!,
    utcKickoff: setSchedule(2, 23, 30), // 11:30 PM UTC = 4:30 AM Next Morning PKT
    venue: 'Chase Stadium',
    city: 'Fort Lauderdale, Florida, USA',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['Apple TV (MLS Season Pass - Worldwide Live & Replay)', 'Apple TV App'],
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
    headToHeadSummary: 'Messi scored a dramatic stoppage-time equalizer in their previous regular season encounter.',
    keyPlayers: ['Lionel Messi', 'Luis Suárez', 'Sergio Busquets', 'Jordi Alba', 'Riqui Puig', 'Gabriel Pec'],
    aiMatchInsight: '4:30 AM PKT early morning kickoff. Messi and Suárez lead Miami’s record-setting attack against Puig and the high-pressing Galaxy.'
  },

  // 5. Bundesliga: Bayer Leverkusen vs Borussia Dortmund - 9:30 PM PKT (4:30 PM UTC / 6:30 PM CEST)
  {
    id: 'fb-bnd-b04-bvb',
    sport: 'football',
    competitionId: 'bundesliga',
    competitionName: 'Bundesliga',
    competitionLogo: '🇩🇪',
    formatOrStage: 'Top 4 Bundesliga Clash',
    homeTeam: FOOTBALL_TEAMS.find(t => t.id === 'leverkusen')!,
    awayTeam: FOOTBALL_TEAMS.find(t => t.id === 'dortmund')!,
    utcKickoff: setSchedule(3, 16, 30), // 4:30 PM UTC = 9:30 PM PKT
    venue: 'BayArena',
    city: 'Leverkusen, Germany',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['Sony LIV (Live HD Stream)', 'Tapmad Sports', 'A Sports HD'],
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
    headToHeadSummary: 'High-octane German fixture averaging 4.1 goals per match in recent meetings.',
    keyPlayers: ['Florian Wirtz', 'Granit Xhaka', 'Jeremie Frimpong', 'Julian Brandt', 'Serhou Guirassy', 'Karim Adeyemi'],
    aiMatchInsight: '9:30 PM PKT kickoff at BayArena. Xabi Alonso’s champions take on Nuri Şahin’s high-speed Dortmund transitions.'
  },

  // 6. EPL: Liverpool vs Chelsea - 9:30 PM PKT (4:30 PM UTC / 5:30 PM BST)
  {
    id: 'fb-epl-liv-che',
    sport: 'football',
    competitionId: 'epl',
    competitionName: 'Premier League',
    competitionLogo: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    formatOrStage: 'Matchweek 8 (Anfield Super Sunday)',
    homeTeam: FOOTBALL_TEAMS.find(t => t.id === 'liverpool')!,
    awayTeam: FOOTBALL_TEAMS.find(t => t.id === 'chelsea')!,
    utcKickoff: setSchedule(5, 16, 30), // 4:30 PM UTC = 9:30 PM PKT
    venue: 'Anfield',
    city: 'Liverpool, England',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['Tapmad (Live HD Stream)', 'A Sports HD', 'Sony LIV (Select)'],
      'United Kingdom': ['Sky Sports Main Event', 'Sky Sports Premier League'],
      'United States': ['Peacock Premium', 'USA Network'],
      'India': ['Star Sports Select HD 1', 'Disney+ Hotstar Live'],
      'UAE / Middle East': ['beIN Sports English 1', 'TOD App']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://www.tapmad.com/sports',
      'India': 'https://www.hotstar.com/sports'
    },
    headToHeadSummary: 'Legendary Premier League rivalry with dramatic recent cup finals and league battles.',
    keyPlayers: ['Mohamed Salah', 'Virgil van Dijk', 'Trent Alexander-Arnold', 'Cole Palmer', 'Enzo Fernández', 'Nicolas Jackson'],
    aiMatchInsight: '9:30 PM PKT kickoff at Anfield. Arne Slot’s table-topping Liverpool face Maresca’s resurgent Chelsea driven by Cole Palmer.'
  }
];
