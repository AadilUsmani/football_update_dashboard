import { Match, Team } from '../types';

export const CRICKET_CATEGORIES = [
  { id: 'all', name: 'All Cricket', icon: '🏏', badge: 'All' },
  { id: 't20i', name: 'T20 International', icon: '🟢', badge: 'T20I', color: '#16a34a' },
  { id: 'test', name: 'Test Matches', icon: '🔴', badge: 'TEST', color: '#dc2626' },
  { id: 'odi', name: 'One Day International', icon: '🔵', badge: 'ODI', color: '#2563eb' },
  { id: 'psl', name: 'PSL (Pakistan Super League)', icon: '🇵🇰', badge: 'PSL', color: '#059669' },
  { id: 'ipl', name: 'IPL (Indian Premier League)', icon: '🇮🇳', badge: 'IPL', color: '#0284c7' },
  { id: 'hundred', name: 'The Hundred', icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', badge: '100', color: '#7c3aed' },
  { id: 'bbl', name: 'Big Bash League', icon: '🇦🇺', badge: 'BBL', color: '#ea580c' },
];

export const CRICKET_TEAMS: Team[] = [
  // International National Teams with high-reliability Flag CDN
  { 
    id: 'pakistan', 
    name: 'Pakistan', 
    shortName: 'PAK', 
    crest: 'https://flagcdn.com/w160/pk.png', 
    sport: 'cricket', 
    leagueOrCountry: 'International (PCB)', 
    recentForm: ['W', 'W', 'L', 'W', 'W'] 
  },
  { 
    id: 'england', 
    name: 'England', 
    shortName: 'ENG', 
    crest: 'https://flagcdn.com/w160/gb-eng.png', 
    sport: 'cricket', 
    leagueOrCountry: 'International (ECB)', 
    recentForm: ['W', 'W', 'W', 'L', 'W'] 
  },
  { 
    id: 'india', 
    name: 'India', 
    shortName: 'IND', 
    crest: 'https://flagcdn.com/w160/in.png', 
    sport: 'cricket', 
    leagueOrCountry: 'International (BCCI)', 
    recentForm: ['W', 'W', 'W', 'W', 'L'] 
  },
  { 
    id: 'australia', 
    name: 'Australia', 
    shortName: 'AUS', 
    crest: 'https://flagcdn.com/w160/au.png', 
    sport: 'cricket', 
    leagueOrCountry: 'International (CA)', 
    recentForm: ['W', 'L', 'W', 'W', 'W'] 
  },
  { 
    id: 'srilanka', 
    name: 'Sri Lanka', 
    shortName: 'SL', 
    crest: 'https://flagcdn.com/w160/lk.png', 
    sport: 'cricket', 
    leagueOrCountry: 'International (SLC)', 
    recentForm: ['L', 'L', 'W', 'L', 'L'] 
  },
  { 
    id: 'bangladesh', 
    name: 'Bangladesh', 
    shortName: 'BAN', 
    crest: 'https://flagcdn.com/w160/bd.png', 
    sport: 'cricket', 
    leagueOrCountry: 'International (BCB)', 
    recentForm: ['W', 'L', 'L', 'W', 'L'] 
  },
  { 
    id: 'southafrica', 
    name: 'South Africa', 
    shortName: 'SA', 
    crest: 'https://flagcdn.com/w160/za.png', 
    sport: 'cricket', 
    leagueOrCountry: 'International (CSA)', 
    recentForm: ['W', 'W', 'D', 'W', 'L'] 
  },
  { 
    id: 'newzealand', 
    name: 'New Zealand', 
    shortName: 'NZ', 
    crest: 'https://flagcdn.com/w160/nz.png', 
    sport: 'cricket', 
    leagueOrCountry: 'International (NZC)', 
    recentForm: ['W', 'L', 'W', 'W', 'L'] 
  },

  // PSL (Pakistan Super League)
  { 
    id: 'lahore_qalandars', 
    name: 'Lahore Qalandars', 
    shortName: 'LQ', 
    crest: '', 
    sport: 'cricket', 
    leagueOrCountry: 'Pakistan Super League', 
    recentForm: ['W', 'W', 'L', 'W', 'W'] 
  },
  { 
    id: 'karachi_kings', 
    name: 'Karachi Kings', 
    shortName: 'KK', 
    crest: '', 
    sport: 'cricket', 
    leagueOrCountry: 'Pakistan Super League', 
    recentForm: ['L', 'W', 'W', 'L', 'W'] 
  },
  { 
    id: 'islamabad_united', 
    name: 'Islamabad United', 
    shortName: 'IU', 
    crest: '', 
    sport: 'cricket', 
    leagueOrCountry: 'Pakistan Super League', 
    recentForm: ['W', 'W', 'W', 'L', 'W'] 
  },
  { 
    id: 'multan_sultans', 
    name: 'Multan Sultans', 
    shortName: 'MS', 
    crest: '', 
    sport: 'cricket', 
    leagueOrCountry: 'Pakistan Super League', 
    recentForm: ['W', 'L', 'W', 'W', 'W'] 
  },

  // IPL
  { 
    id: 'csk', 
    name: 'Chennai Super Kings', 
    shortName: 'CSK', 
    crest: '', 
    sport: 'cricket', 
    leagueOrCountry: 'Indian Premier League', 
    recentForm: ['W', 'W', 'L', 'W', 'W'] 
  },
  { 
    id: 'mi', 
    name: 'Mumbai Indians', 
    shortName: 'MI', 
    crest: '', 
    sport: 'cricket', 
    leagueOrCountry: 'Indian Premier League', 
    recentForm: ['W', 'L', 'W', 'W', 'L'] 
  },
];

const now = new Date();
const addDays = (d: number, hourUtc: number = 10, minuteUtc: number = 30) => {
  const date = new Date(now.getTime() + d * 24 * 60 * 60 * 1000);
  date.setUTCHours(hourUtc, minuteUtc, 0, 0);
  return date.toISOString();
};

export const CRICKET_FIXTURES: Match[] = [
  // 1. Pakistan vs Bangladesh - 2nd Test at Rawalpindi - 10:00 AM PKT (5:00 AM UTC)
  {
    id: 'ck-test-pak-ban',
    sport: 'cricket',
    competitionId: 'test',
    competitionName: 'ICC World Test Championship Series',
    competitionLogo: '🔴',
    formatOrStage: '2nd Test Match (Day 1)',
    homeTeam: CRICKET_TEAMS.find(t => t.id === 'pakistan')!,
    awayTeam: CRICKET_TEAMS.find(t => t.id === 'bangladesh')!,
    utcKickoff: addDays(1, 5, 0), // 5:00 AM UTC = 10:00 AM PKT
    venue: 'Rawalpindi Cricket Stadium',
    city: 'Rawalpindi, Pakistan',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['A Sports HD (Official Host Broadcaster)', 'Ten Sports Pakistan HD', 'PTV Sports HD', 'Tapmad (Live HD Stream)', 'Tamasha App (Free/HD)'],
      'United Kingdom': ['Sky Sports Cricket', 'Sky Sports Main Event'],
      'United States': ['Willow TV HD', 'Sling TV'],
      'India': ['FanCode Live Stream', 'Sony Sports Network'],
      'UAE / Middle East': ['eLife CricLife 2 HD', 'STARZPLAY Sports']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://tamashaweb.com',
      'United Kingdom': 'https://www.skysports.com/cricket',
      'United States': 'https://www.willow.tv'
    },
    headToHeadSummary: 'Crucial ICC World Test Championship fixture in Rawalpindi with true bounce and seam movement on day 1.',
    keyPlayers: ['Shan Masood (C)', 'Babar Azam', 'Shaheen Shah Afridi', 'Najmul Hossain Shanto (C)', 'Shakib Al Hasan'],
    aiMatchInsight: '10:00 AM PKT kickoff. Pakistan looks to dominate with pace attack in Rawalpindi.'
  },

  // 2. England vs Sri Lanka - 2nd Test at Lord's (London) - 3:00 PM PKT (10:00 AM UTC / 11:00 AM BST)
  {
    id: 'ck-test-eng-sl',
    sport: 'cricket',
    competitionId: 'test',
    competitionName: 'Sri Lanka Tour of England',
    competitionLogo: '🔴',
    formatOrStage: '2nd Test Match (Day 1)',
    homeTeam: CRICKET_TEAMS.find(t => t.id === 'england')!,
    awayTeam: CRICKET_TEAMS.find(t => t.id === 'srilanka')!,
    utcKickoff: addDays(2, 10, 0), // 10:00 AM UTC = 3:00 PM PKT (11:00 AM London)
    venue: "Lord's Cricket Ground",
    city: 'London, England',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['A Sports HD', 'Ten Sports HD', 'Tapmad Live Stream'],
      'United Kingdom': ['Sky Sports Cricket', 'Sky Sports Main Event', 'BBC Radio 5 Live'],
      'United States': ['Willow TV HD'],
      'India': ['Sony Sports Ten 1 HD', 'Sony LIV'],
      'Sri Lanka': ['SLRC / Channel Eye', 'ThePapare']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://www.tapmad.com/sports',
      'United Kingdom': 'https://www.skysports.com/cricket'
    },
    headToHeadSummary: 'Historic Lord’s encounter. England holds a commanding record in home summer Tests.',
    keyPlayers: ['Ollie Pope (C)', 'Joe Root', 'Harry Brook', 'Dhananjaya de Silva (C)', 'Kamindu Mendis'],
    aiMatchInsight: '3:00 PM PKT afternoon start in Pakistan. Joe Root aims for milestone hundreds on the Lord’s honours board.'
  },

  // 3. England vs Australia - 1st T20I at Southampton - 10:30 PM PKT (5:30 PM UTC / 6:30 PM BST)
  {
    id: 'ck-t20i-eng-aus',
    sport: 'cricket',
    competitionId: 't20i',
    competitionName: 'Australia Tour of England',
    competitionLogo: '🟢',
    formatOrStage: '1st T20 International (Night)',
    homeTeam: CRICKET_TEAMS.find(t => t.id === 'england')!,
    awayTeam: CRICKET_TEAMS.find(t => t.id === 'australia')!,
    utcKickoff: addDays(3, 17, 30), // 5:30 PM UTC = 10:30 PM PKT (6:30 PM UK)
    venue: 'Utilita Bowl',
    city: 'Southampton, England',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['A Sports HD', 'Ten Sports Pakistan', 'Tapmad (Live HD OTT)', 'Tamasha App'],
      'United Kingdom': ['Sky Sports Cricket', 'Sky Sports Main Event'],
      'Australia': ['Fox Cricket 501', 'Kayo Sports Live Stream'],
      'United States': ['Willow TV HD'],
      'India': ['Sony Sports Ten 5 HD', 'Sony LIV Stream']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://tamashaweb.com',
      'United Kingdom': 'https://www.skysports.com/cricket',
      'Australia': 'https://kayosports.com.au'
    },
    headToHeadSummary: 'Fierce Ashes rivals clash in high-octane T20 cricket in England.',
    keyPlayers: ['Jos Buttler (C)', 'Phil Salt', 'Jofra Archer', 'Mitchell Marsh (C)', 'Travis Head', 'Adam Zampa'],
    aiMatchInsight: '10:30 PM PKT prime-time night match. Archer vs Travis Head with the new white ball.'
  },

  // 4. India vs Bangladesh - 1st Test at Chennai - 9:00 AM PKT (4:00 AM UTC / 9:30 AM IST)
  {
    id: 'ck-test-ind-ban',
    sport: 'cricket',
    competitionId: 'test',
    competitionName: 'Bangladesh Tour of India',
    competitionLogo: '🔴',
    formatOrStage: '1st Test Match (Day 1)',
    homeTeam: CRICKET_TEAMS.find(t => t.id === 'india')!,
    awayTeam: CRICKET_TEAMS.find(t => t.id === 'bangladesh')!,
    utcKickoff: addDays(5, 4, 0), // 4:00 AM UTC = 9:00 AM PKT
    venue: 'MA Chidambaram Stadium (Chepauk)',
    city: 'Chennai, India',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['Ten Sports Pakistan HD', 'Tapmad Sports'],
      'India': ['Sports18 1 HD (English)', 'Colors Cineplex (Hindi)', 'JioCinema (Free 4K Stream)'],
      'United Kingdom': ['TNT Sports 1'],
      'United States': ['Willow TV HD']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://www.tapmad.com/sports',
      'India': 'https://www.jiocinema.com/sports'
    },
    headToHeadSummary: 'Spin-friendly Chepauk conditions test batters against Ashwin and Jadeja.',
    keyPlayers: ['Rohit Sharma (C)', 'Virat Kohli', 'Ravichandran Ashwin', 'Jasprit Bumrah', 'Shakib Al Hasan'],
    aiMatchInsight: '9:00 AM PKT morning kickoff in Pakistan.'
  },

  // 5. Pakistan Tour of Australia - 1st ODI at MCG - 8:30 AM PKT (3:30 AM UTC / 2:30 PM AEDT)
  {
    id: 'ck-odi-pak-aus',
    sport: 'cricket',
    competitionId: 'odi',
    competitionName: 'Pakistan Tour of Australia',
    competitionLogo: '🔵',
    formatOrStage: '1st One Day International (D/N)',
    homeTeam: CRICKET_TEAMS.find(t => t.id === 'australia')!,
    awayTeam: CRICKET_TEAMS.find(t => t.id === 'pakistan')!,
    utcKickoff: addDays(8, 3, 30), // 3:30 AM UTC = 8:30 AM PKT
    venue: 'Melbourne Cricket Ground (MCG)',
    city: 'Melbourne, Australia',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['A Sports HD', 'Ten Sports HD', 'PTV Sports HD', 'Tapmad (Live HD)', 'Tamasha App'],
      'Australia': ['Channel 7 (Free)', 'Fox Cricket', 'Kayo Sports'],
      'United Kingdom': ['TNT Sports 1'],
      'United States': ['Willow TV']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://tamashaweb.com',
      'Australia': 'https://kayosports.com.au'
    },
    headToHeadSummary: 'Pace and bounce at the massive MCG venue. Shaheen and Naseem lead the Pakistan attack.',
    keyPlayers: ['Mohammad Rizwan (C)', 'Babar Azam', 'Shaheen Shah Afridi', 'Pat Cummins (C)', 'Mitchell Starc'],
    aiMatchInsight: '8:30 AM PKT morning match in Pakistan.'
  },

  // 6. PSL 10 Marquee Preview: Lahore Qalandars vs Karachi Kings
  {
    id: 'ck-psl-derby',
    sport: 'cricket',
    competitionId: 'psl',
    competitionName: 'PSL 10 (Pakistan Super League)',
    competitionLogo: '🇵🇰',
    formatOrStage: 'Upcoming PSL 10 Season Marquee Derby',
    homeTeam: CRICKET_TEAMS.find(t => t.id === 'lahore_qalandars')!,
    awayTeam: CRICKET_TEAMS.find(t => t.id === 'karachi_kings')!,
    utcKickoff: addDays(12, 14, 30), // 2:30 PM UTC = 7:30 PM PKT
    venue: 'Gaddafi Stadium',
    city: 'Lahore, Pakistan',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['A Sports HD (Host Broadcaster)', 'Ten Sports HD', 'PTV Sports HD', 'Tapmad OTT', 'Tamasha App (Free/HD)'],
      'United Kingdom': ['Sky Sports Cricket'],
      'United States': ['Willow TV HD']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://tamashaweb.com'
    },
    headToHeadSummary: 'The undisputed El Clásico of Pakistan franchise cricket.',
    keyPlayers: ['Shaheen Shah Afridi (C)', 'Fakhar Zaman', 'Haris Rauf', 'Shan Masood (C)', 'Shoaib Malik'],
    aiMatchInsight: '7:30 PM PKT official PSL night slot.'
  }
];
