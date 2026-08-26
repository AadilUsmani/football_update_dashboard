import { Match, Team } from '../types';

export const CRICKET_CATEGORIES = [
  { id: 'all', name: 'All Cricket', icon: '🏏', badge: 'All' },
  { id: 't20i', name: 'T20 International', icon: '🟢', badge: 'T20I', color: '#16a34a' },
  { id: 'odi', name: 'One Day International', icon: '🔵', badge: 'ODI', color: '#2563eb' },
  { id: 'test', name: 'Test Matches', icon: '🔴', badge: 'TEST', color: '#dc2626' },
  { id: 'psl', name: 'PSL 10 (Pakistan Super League)', icon: '🇵🇰', badge: 'PSL', color: '#059669' },
  { id: 'ipl', name: 'IPL (Indian Premier League)', icon: '🇮🇳', badge: 'IPL', color: '#0284c7' },
  { id: 'bbl', name: 'Big Bash League (BBL)', icon: '🇦🇺', badge: 'BBL', color: '#ea580c' },
  { id: 'hundred', name: 'The Hundred', icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', badge: '100', color: '#7c3aed' },
  { id: 'blast', name: 'Vitality T20 Blast', icon: '⚡', badge: 'Blast', color: '#e11d48' },
];

export const CRICKET_TEAMS: Team[] = [
  // International National Teams
  { 
    id: 'pakistan', 
    name: 'Pakistan', 
    shortName: 'PAK', 
    crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Pakistan_Cricket_Board_logo.svg/300px-Pakistan_Cricket_Board_logo.svg.png', 
    sport: 'cricket', 
    leagueOrCountry: 'International (PCB)', 
    recentForm: ['W', 'W', 'L', 'W', 'W'] 
  },
  { 
    id: 'india', 
    name: 'India', 
    shortName: 'IND', 
    crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Board_of_Control_for_Cricket_in_India_logo.svg/300px-Board_of_Control_for_Cricket_in_India_logo.svg.png', 
    sport: 'cricket', 
    leagueOrCountry: 'International (BCCI)', 
    recentForm: ['W', 'W', 'W', 'W', 'L'] 
  },
  { 
    id: 'australia', 
    name: 'Australia', 
    shortName: 'AUS', 
    crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Cricket_Australia_logo.svg/300px-Cricket_Australia_logo.svg.png', 
    sport: 'cricket', 
    leagueOrCountry: 'International (CA)', 
    recentForm: ['W', 'L', 'W', 'W', 'W'] 
  },
  { 
    id: 'england', 
    name: 'England', 
    shortName: 'ENG', 
    crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/England_and_Wales_Cricket_Board_logo.svg/300px-England_and_Wales_Cricket_Board_logo.svg.png', 
    sport: 'cricket', 
    leagueOrCountry: 'International (ECB)', 
    recentForm: ['L', 'W', 'L', 'W', 'W'] 
  },
  { 
    id: 'southafrica', 
    name: 'South Africa', 
    shortName: 'SA', 
    crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Cricket_South_Africa_logo.svg/300px-Cricket_South_Africa_logo.svg.png', 
    sport: 'cricket', 
    leagueOrCountry: 'International (CSA)', 
    recentForm: ['W', 'W', 'D', 'W', 'L'] 
  },
  { 
    id: 'newzealand', 
    name: 'New Zealand', 
    shortName: 'NZ', 
    crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/New_Zealand_Cricket_logo.svg/300px-New_Zealand_Cricket_logo.svg.png', 
    sport: 'cricket', 
    leagueOrCountry: 'International (NZC)', 
    recentForm: ['W', 'L', 'W', 'W', 'L'] 
  },
  { 
    id: 'bangladesh', 
    name: 'Bangladesh', 
    shortName: 'BAN', 
    crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Bangladesh_Cricket_Board_logo.svg/300px-Bangladesh_Cricket_Board_logo.svg.png', 
    sport: 'cricket', 
    leagueOrCountry: 'International (BCB)', 
    recentForm: ['L', 'L', 'W', 'L', 'W'] 
  },

  // PSL (Pakistan Super League)
  { 
    id: 'lahore_qalandars', 
    name: 'Lahore Qalandars', 
    shortName: 'LQ', 
    crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Lahore_Qalandars_logo.svg/300px-Lahore_Qalandars_logo.svg.png', 
    sport: 'cricket', 
    leagueOrCountry: 'Pakistan Super League', 
    recentForm: ['W', 'W', 'L', 'W', 'W'] 
  },
  { 
    id: 'karachi_kings', 
    name: 'Karachi Kings', 
    shortName: 'KK', 
    crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Karachi_Kings_logo.svg/300px-Karachi_Kings_logo.svg.png', 
    sport: 'cricket', 
    leagueOrCountry: 'Pakistan Super League', 
    recentForm: ['L', 'W', 'W', 'L', 'W'] 
  },
  { 
    id: 'islamabad_united', 
    name: 'Islamabad United', 
    shortName: 'IU', 
    crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Islamabad_United_logo.svg/300px-Islamabad_United_logo.svg.png', 
    sport: 'cricket', 
    leagueOrCountry: 'Pakistan Super League', 
    recentForm: ['W', 'W', 'W', 'L', 'W'] 
  },
  { 
    id: 'multan_sultans', 
    name: 'Multan Sultans', 
    shortName: 'MS', 
    crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/Multan_Sultans_logo.svg/300px-Multan_Sultans_logo.svg.png', 
    sport: 'cricket', 
    leagueOrCountry: 'Pakistan Super League', 
    recentForm: ['W', 'L', 'W', 'W', 'W'] 
  },
  { 
    id: 'peshawar_zalmi', 
    name: 'Peshawar Zalmi', 
    shortName: 'PZ', 
    crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Peshawar_Zalmi_logo.svg/300px-Peshawar_Zalmi_logo.svg.png', 
    sport: 'cricket', 
    leagueOrCountry: 'Pakistan Super League', 
    recentForm: ['W', 'L', 'W', 'L', 'W'] 
  },
  { 
    id: 'quetta_gladiators', 
    name: 'Quetta Gladiators', 
    shortName: 'QG', 
    crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Quetta_Gladiators_logo.svg/300px-Quetta_Gladiators_logo.svg.png', 
    sport: 'cricket', 
    leagueOrCountry: 'Pakistan Super League', 
    recentForm: ['L', 'W', 'L', 'W', 'D'] 
  },

  // IPL (Indian Premier League)
  { 
    id: 'csk', 
    name: 'Chennai Super Kings', 
    shortName: 'CSK', 
    crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/300px-Chennai_Super_Kings_Logo.svg.png', 
    sport: 'cricket', 
    leagueOrCountry: 'Indian Premier League', 
    recentForm: ['W', 'W', 'L', 'W', 'W'] 
  },
  { 
    id: 'mi', 
    name: 'Mumbai Indians', 
    shortName: 'MI', 
    crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/300px-Mumbai_Indians_Logo.svg.png', 
    sport: 'cricket', 
    leagueOrCountry: 'Indian Premier League', 
    recentForm: ['W', 'L', 'W', 'W', 'L'] 
  },
  { 
    id: 'rcb', 
    name: 'Royal Challengers Bengaluru', 
    shortName: 'RCB', 
    crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/300px-Royal_Challengers_Bangalore_2020.svg.png', 
    sport: 'cricket', 
    leagueOrCountry: 'Indian Premier League', 
    recentForm: ['W', 'W', 'W', 'L', 'W'] 
  },
  { 
    id: 'kkr', 
    name: 'Kolkata Knight Riders', 
    shortName: 'KKR', 
    crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/300px-Kolkata_Knight_Riders_Logo.svg.png', 
    sport: 'cricket', 
    leagueOrCountry: 'Indian Premier League', 
    recentForm: ['W', 'W', 'W', 'W', 'L'] 
  },

  // BBL (Big Bash League)
  { 
    id: 'melbourne_stars', 
    name: 'Melbourne Stars', 
    shortName: 'MS', 
    crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Melbourne_Stars_logo.svg/300px-Melbourne_Stars_logo.svg.png', 
    sport: 'cricket', 
    leagueOrCountry: 'Big Bash League', 
    recentForm: ['W', 'L', 'W', 'L', 'W'] 
  },
  { 
    id: 'sydney_sixers', 
    name: 'Sydney Sixers', 
    shortName: 'SS', 
    crest: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Sydney_Sixers_logo.svg/300px-Sydney_Sixers_logo.svg.png', 
    sport: 'cricket', 
    leagueOrCountry: 'Big Bash League', 
    recentForm: ['W', 'W', 'W', 'L', 'W'] 
  },
];

// Reference date helper for scheduling realistic upcoming matches
const baseNow = new Date();
const setSchedule = (daysAhead: number, utcHour: number, utcMinute: number) => {
  const d = new Date(baseNow.getTime() + daysAhead * 24 * 60 * 60 * 1000);
  d.setUTCHours(utcHour, utcMinute, 0, 0);
  return d.toISOString();
};

export const CRICKET_FIXTURES: Match[] = [
  // 1. Pakistan vs England - 1st Test Match (Multan) - Session starts 10:00 AM PKT (5:00 AM UTC)
  {
    id: 'ck-test-pak-eng-01',
    sport: 'cricket',
    competitionId: 'test',
    competitionName: 'England Tour of Pakistan 2024-25',
    competitionLogo: '🔴',
    formatOrStage: '1st Test Match (Day 1)',
    homeTeam: CRICKET_TEAMS.find(t => t.id === 'pakistan')!,
    awayTeam: CRICKET_TEAMS.find(t => t.id === 'england')!,
    utcKickoff: setSchedule(1, 5, 0), // 5:00 AM UTC = 10:00 AM PKT (Standard Test Match Time)
    venue: 'Multan Cricket Stadium',
    city: 'Multan, Pakistan',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['A Sports HD (Linear TV)', 'Ten Sports Pakistan HD', 'PTV Sports HD', 'Tapmad (Official OTT Stream)', 'Tamasha App (Free/HD)'],
      'United Kingdom': ['Sky Sports Cricket', 'Sky Sports Main Event', 'BBC Radio 5 Live Sports Extra'],
      'United States': ['Willow TV HD', 'Sling TV Willow Cricket'],
      'India': ['FanCode Live Stream', 'Sony Sports Ten 5 HD'],
      'UAE / Middle East': ['eLife CricLife 2 HD', 'STARZPLAY Sports Arabia'],
      'Australia': ['Fox Cricket 501', 'Kayo Sports Live Stream']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://tamashaweb.com',
      'United Kingdom': 'https://www.skysports.com/cricket',
      'United States': 'https://www.willow.tv',
      'India': 'https://www.fancode.com'
    },
    headToHeadSummary: 'Historic Test rivalry. Multan surface offers traditional spin and dry bounce in subcontinental conditions.',
    keyPlayers: ['Shan Masood (C)', 'Babar Azam', 'Shaheen Shah Afridi', 'Ben Stokes (C)', 'Joe Root', 'Harry Brook'],
    aiMatchInsight: '10:00 AM PKT start in Multan. England’s Bazball aggression meets Pakistan’s reverse swing and spin attack in a crucial World Test Championship clash.'
  },

  // 2. Australia vs Pakistan - 1st ODI (MCG Melbourne) - 8:30 AM PKT (3:30 AM UTC)
  {
    id: 'ck-odi-aus-pak-01',
    sport: 'cricket',
    competitionId: 'odi',
    competitionName: 'Pakistan Tour of Australia',
    competitionLogo: '🔵',
    formatOrStage: '1st One Day International (D/N)',
    homeTeam: CRICKET_TEAMS.find(t => t.id === 'australia')!,
    awayTeam: CRICKET_TEAMS.find(t => t.id === 'pakistan')!,
    utcKickoff: setSchedule(3, 3, 30), // 3:30 AM UTC = 8:30 AM PKT (Australian Day/Night Time)
    venue: 'Melbourne Cricket Ground (MCG)',
    city: 'Melbourne, Australia',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['A Sports HD', 'Ten Sports HD', 'Tapmad (HD Stream)', 'Tamasha (Mobile Stream)'],
      'Australia': ['Fox Cricket', 'Channel 7 (Free-to-Air)', 'Kayo Sports'],
      'United Kingdom': ['TNT Sports 1', 'discovery+ Cricket'],
      'United States': ['Willow TV HD', 'ESPN+'],
      'India': ['Star Sports 1 HD', 'Disney+ Hotstar Live']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://www.tapmad.com/sports',
      'Australia': 'https://kayosports.com.au',
      'United States': 'https://www.willow.tv'
    },
    headToHeadSummary: 'MCG pace and carry will challenge top-order batters in the opening 50-over encounter.',
    keyPlayers: ['Mohammad Rizwan (C)', 'Babar Azam', 'Naseem Shah', 'Pat Cummins (C)', 'Mitchell Starc', 'Glenn Maxwell'],
    aiMatchInsight: '8:30 AM PKT kickoff at the iconic MCG. Shaheen Afridi with the new white kookaburra ball testing Travis Head and Steve Smith.'
  },

  // 3. Australia vs Pakistan - 2nd T20I (SCG Sydney) - 1:00 PM PKT (8:00 AM UTC)
  {
    id: 'ck-t20i-aus-pak-02',
    sport: 'cricket',
    competitionId: 't20i',
    competitionName: 'Pakistan Tour of Australia',
    competitionLogo: '🟢',
    formatOrStage: '2nd T20 International (Night)',
    homeTeam: CRICKET_TEAMS.find(t => t.id === 'australia')!,
    awayTeam: CRICKET_TEAMS.find(t => t.id === 'pakistan')!,
    utcKickoff: setSchedule(5, 8, 0), // 8:00 AM UTC = 1:00 PM PKT (Night match in Sydney)
    venue: 'Sydney Cricket Ground (SCG)',
    city: 'Sydney, Australia',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['A Sports HD', 'Ten Sports Pakistan HD', 'Tapmad Sports', 'Tamasha App (Free/HD)'],
      'Australia': ['Fox Cricket', 'Kayo Sports Live'],
      'United Kingdom': ['TNT Sports 2'],
      'United States': ['Willow TV HD'],
      'India': ['Star Sports Network', 'Disney+ Hotstar']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://tamashaweb.com',
      'United States': 'https://www.willow.tv'
    },
    headToHeadSummary: 'Fast-paced T20 clash under Sydney floodlights with spin playing a crucial role through middle overs.',
    keyPlayers: ['Babar Azam', 'Haris Rauf', 'Saim Ayub', 'Josh Inglis (C)', 'Marcus Stoinis', 'Adam Zampa'],
    aiMatchInsight: '1:00 PM PKT prime-time afternoon viewing in Pakistan. High-scoring dimensions at SCG.'
  },

  // 4. Australia vs India - 1st Test (Border-Gavaskar Trophy - Perth) - 7:20 AM PKT (2:20 AM UTC)
  {
    id: 'ck-test-ind-aus-01',
    sport: 'cricket',
    competitionId: 'test',
    competitionName: 'Border-Gavaskar Trophy (5 Tests)',
    competitionLogo: '🔴',
    formatOrStage: '1st Test Match (Day 1)',
    homeTeam: CRICKET_TEAMS.find(t => t.id === 'australia')!,
    awayTeam: CRICKET_TEAMS.find(t => t.id === 'india')!,
    utcKickoff: setSchedule(7, 2, 20), // 2:20 AM UTC = 7:20 AM PKT (10:20 AM Perth Local)
    venue: 'Optus Stadium',
    city: 'Perth, Australia',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['Ten Sports Pakistan HD', 'Tapmad Live Stream', 'A Sports HD'],
      'India': ['Star Sports 1 HD (English)', 'Star Sports 1 Hindi HD', 'Disney+ Hotstar (4K Stream)'],
      'Australia': ['Channel 7', 'Fox Cricket 501', 'Kayo Sports Live'],
      'United Kingdom': ['TNT Sports 1', 'discovery+ Cricket Pass'],
      'United States': ['Willow TV', 'ESPN+']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://www.tapmad.com/sports',
      'India': 'https://www.hotstar.com/sports/cricket',
      'United States': 'https://www.willow.tv'
    },
    headToHeadSummary: 'The marquee 5-match Test series in world cricket. Optus Stadium in Perth provides fierce bounce and extreme pace.',
    keyPlayers: ['Rohit Sharma (C)', 'Virat Kohli', 'Jasprit Bumrah', 'Pat Cummins (C)', 'Steve Smith', 'Mitchell Starc'],
    aiMatchInsight: '7:20 AM PKT start. Fastest pitch in Australia tests India’s top order against Cummins, Starc, and Hazlewood.'
  },

  // 5. PSL 10: Lahore Qalandars vs Karachi Kings (The Ultimate Derby) - 7:30 PM PKT (2:30 PM UTC)
  {
    id: 'ck-psl-10-lq-kk',
    sport: 'cricket',
    competitionId: 'psl',
    competitionName: 'Pakistan Super League (PSL 10)',
    competitionLogo: '🇵🇰',
    formatOrStage: 'League Stage (Rivalry Night)',
    homeTeam: CRICKET_TEAMS.find(t => t.id === 'lahore_qalandars')!,
    awayTeam: CRICKET_TEAMS.find(t => t.id === 'karachi_kings')!,
    utcKickoff: setSchedule(2, 14, 30), // 2:30 PM UTC = 7:30 PM PKT (Official PSL Night Time)
    venue: 'Gaddafi Stadium',
    city: 'Lahore, Pakistan',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['A Sports HD (Official Host)', 'Ten Sports HD', 'PTV Sports HD', 'Tapmad (Official OTT Stream)', 'Tamasha App (Free/HD)', 'Myco App'],
      'United Kingdom': ['Sky Sports Cricket', 'Sky Sports Main Event'],
      'United States': ['Willow TV HD', 'Sling TV Willow'],
      'India': ['Sony Sports Ten 5 HD', 'FanCode Stream'],
      'UAE / Middle East': ['eLife CricLife 1 HD', 'STARZPLAY Sports']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://tamashaweb.com',
      'United Kingdom': 'https://www.skysports.com/cricket',
      'United States': 'https://www.willow.tv'
    },
    headToHeadSummary: 'The undisputed El Clásico of PSL. Packed 27,000 capacity crowd at Gaddafi Stadium.',
    keyPlayers: ['Shaheen Shah Afridi (C)', 'Fakhar Zaman', 'Haris Rauf', 'Shan Masood (C)', 'Shoaib Malik', 'Hasan Ali'],
    aiMatchInsight: '7:30 PM PKT prime-time fixture. Shaheen’s 145kph opening burst against Shan Masood in an electric Lahore atmosphere.'
  },

  // 6. PSL 10: Islamabad United vs Multan Sultans - 7:30 PM PKT (2:30 PM UTC)
  {
    id: 'ck-psl-10-iu-ms',
    sport: 'cricket',
    competitionId: 'psl',
    competitionName: 'Pakistan Super League (PSL 10)',
    competitionLogo: '🇵🇰',
    formatOrStage: 'League Stage (Top-of-Table Clash)',
    homeTeam: CRICKET_TEAMS.find(t => t.id === 'islamabad_united')!,
    awayTeam: CRICKET_TEAMS.find(t => t.id === 'multan_sultans')!,
    utcKickoff: setSchedule(4, 14, 30), // 2:30 PM UTC = 7:30 PM PKT
    venue: 'Rawalpindi Cricket Stadium',
    city: 'Rawalpindi, Pakistan',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['A Sports HD', 'Ten Sports HD', 'PTV Sports HD', 'Tapmad Live', 'Tamasha App'],
      'United Kingdom': ['Sky Sports Cricket'],
      'United States': ['Willow TV']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://tamashaweb.com'
    },
    headToHeadSummary: 'Defending champions Islamabad United face consistent finalist Multan Sultans at the high-scoring Pindi ground.',
    keyPlayers: ['Shadab Khan (C)', 'Naseem Shah', 'Alex Hales', 'Mohammad Rizwan (C)', 'Usman Khan', 'Usama Mir'],
    aiMatchInsight: '7:30 PM PKT kickoff. Short boundaries and true bounce in Rawalpindi guarantee boundary-heavy fireworks.'
  },

  // 7. IPL: Chennai Super Kings vs Mumbai Indians (IPL El Clásico) - 7:00 PM PKT (2:00 PM UTC)
  {
    id: 'ck-ipl-csk-mi',
    sport: 'cricket',
    competitionId: 'ipl',
    competitionName: 'Indian Premier League (IPL)',
    competitionLogo: '🇮🇳',
    formatOrStage: 'Match 14 (Night Game)',
    homeTeam: CRICKET_TEAMS.find(t => t.id === 'csk')!,
    awayTeam: CRICKET_TEAMS.find(t => t.id === 'mi')!,
    utcKickoff: setSchedule(6, 14, 0), // 2:00 PM UTC = 7:00 PM PKT (7:30 PM IST)
    venue: 'MA Chidambaram Stadium (Chepauk)',
    city: 'Chennai, India',
    status: 'scheduled',
    broadcastsByCountry: {
      'Pakistan': ['Tapmad Sports (Live Stream Feed)', 'A Sports HD (Select)', 'Ten Sports'],
      'India': ['Star Sports 1 HD (Linear TV)', 'JioCinema (Free 4K Multi-angle Stream)'],
      'United Kingdom': ['Sky Sports Cricket', 'Sky Sports Main Event', 'DAZN UK'],
      'United States': ['Willow TV', 'Cricbuzz Stream'],
      'UAE / Middle East': ['Cricbuzz App', 'TOD Streaming', 'STARZPLAY']
    },
    watchUrlsByCountry: {
      'Pakistan': 'https://www.tapmad.com/sports',
      'India': 'https://www.jiocinema.com/sports/cricket',
      'United Kingdom': 'https://www.skysports.com'
    },
    headToHeadSummary: '5-time IPL Champions CSK vs 5-time IPL Champions MI in the most watched T20 franchise game globally.',
    keyPlayers: ['MS Dhoni', 'Ruturaj Gaikwad (C)', 'Ravindra Jadeja', 'Rohit Sharma', 'Hardik Pandya (C)', 'Jasprit Bumrah'],
    aiMatchInsight: '7:00 PM PKT. Chepauk’s spinning track sets up Jadeja and Dhoni against Bumrah and Mumbai’s power hitters.'
  }
];
