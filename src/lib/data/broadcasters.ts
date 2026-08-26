export interface CountryBroadcastSummary {
  countryName: string;
  countryCode: string;
  flag: string;
  footballChannels: {
    competition: string;
    tvChannels: string[];
    digitalOtt: string[];
    priceModel: 'Free' | 'Subscription' | 'Freemium';
    url: string;
  }[];
  cricketChannels: {
    competition: string;
    tvChannels: string[];
    digitalOtt: string[];
    priceModel: 'Free' | 'Subscription' | 'Freemium';
    url: string;
  }[];
}

export const COUNTRY_BROADCAST_GUIDE: Record<string, CountryBroadcastSummary> = {
  'Pakistan': {
    countryName: 'Pakistan',
    countryCode: 'PK',
    flag: '🇵🇰',
    footballChannels: [
      {
        competition: 'Premier League (EPL)',
        tvChannels: ['A Sports HD', 'Sony Ten 1 HD (Select)', 'Star Sports (Select Satellite)'],
        digitalOtt: ['Tapmad (Exclusive Live Stream)', 'Sony LIV (Select)'],
        priceModel: 'Subscription',
        url: 'https://www.tapmad.com'
      },
      {
        competition: 'UEFA Champions League (UCL)',
        tvChannels: ['A Sports HD', 'Sony Sports Ten 2 HD'],
        digitalOtt: ['Tapmad (Live HD Stream)', 'Sony LIV'],
        priceModel: 'Subscription',
        url: 'https://www.tapmad.com'
      },
      {
        competition: 'La Liga',
        tvChannels: ['Galaxy Sports HD', 'beIN Sports MENA (Dish)'],
        digitalOtt: ['Tapmad Sports', 'FanCode / GXR World (Browser)'],
        priceModel: 'Subscription',
        url: 'https://www.tapmad.com'
      },
      {
        competition: 'Bundesliga',
        tvChannels: ['Sony Sports Ten 5 HD', 'A Sports HD'],
        digitalOtt: ['Sony LIV App', 'Tapmad Sports'],
        priceModel: 'Subscription',
        url: 'https://www.sonyliv.com'
      },
      {
        competition: 'MLS (Major League Soccer)',
        tvChannels: ['No Linear TV in Pakistan'],
        digitalOtt: ['Apple TV (MLS Season Pass - Worldwide)'],
        priceModel: 'Subscription',
        url: 'https://tv.apple.com/channel/tvs.sbd.7000'
      }
    ],
    cricketChannels: [
      {
        competition: 'Pakistan International Matches (Home & Away)',
        tvChannels: ['A Sports HD', 'Ten Sports Pakistan HD', 'PTV Sports HD'],
        digitalOtt: ['Tapmad (HD Stream)', 'Tamasha (Mobile/Web Stream)', 'Myco App'],
        priceModel: 'Freemium',
        url: 'https://tamashaweb.com'
      },
      {
        competition: 'Pakistan Super League (PSL 10)',
        tvChannels: ['A Sports HD', 'Ten Sports HD', 'PTV Sports HD'],
        digitalOtt: ['Tapmad Live', 'Tamasha App (Free/HD)', 'Myco Stream'],
        priceModel: 'Freemium',
        url: 'https://tamashaweb.com'
      },
      {
        competition: 'Indian Premier League (IPL)',
        tvChannels: ['A Sports HD (Select)', 'Ten Sports HD'],
        digitalOtt: ['Tapmad Sports', 'YuppTV'],
        priceModel: 'Subscription',
        url: 'https://www.tapmad.com'
      },
      {
        competition: 'ICC Tournaments & Bilateral Series',
        tvChannels: ['PTV Sports HD', 'A Sports HD', 'Ten Sports HD'],
        digitalOtt: ['Tamasha App', 'Tapmad App'],
        priceModel: 'Freemium',
        url: 'https://tamashaweb.com'
      }
    ]
  },
  'United Kingdom': {
    countryName: 'United Kingdom',
    countryCode: 'GB',
    flag: '🇬🇧',
    footballChannels: [
      {
        competition: 'Premier League',
        tvChannels: ['Sky Sports Main Event', 'Sky Sports Premier League', 'TNT Sports'],
        digitalOtt: ['NOW TV', 'discovery+', 'Amazon Prime Video (Select)'],
        priceModel: 'Subscription',
        url: 'https://www.skysports.com'
      },
      {
        competition: 'Champions League',
        tvChannels: ['TNT Sports 1', 'TNT Sports Ultimate 4K'],
        digitalOtt: ['discovery+ App', 'Amazon Prime (Tuesday pick)'],
        priceModel: 'Subscription',
        url: 'https://www.tntsports.co.uk'
      },
      {
        competition: 'La Liga',
        tvChannels: ['Premier Sports 1', 'LaLigaTV', 'ITV 4 (Select Free)'],
        digitalOtt: ['Premier Player', 'ITVX'],
        priceModel: 'Freemium',
        url: 'https://www.premiersports.com'
      },
      {
        competition: 'MLS',
        tvChannels: ['Apple TV App'],
        digitalOtt: ['Apple TV (MLS Season Pass)'],
        priceModel: 'Subscription',
        url: 'https://tv.apple.com'
      }
    ],
    cricketChannels: [
      {
        competition: 'England Internationals, The Hundred, Blast & PSL',
        tvChannels: ['Sky Sports Cricket', 'Sky Sports Main Event', 'BBC (Select Hundred)'],
        digitalOtt: ['NOW TV', 'BBC iPlayer', 'Sky Go'],
        priceModel: 'Freemium',
        url: 'https://www.skysports.com/cricket'
      }
    ]
  },
  'United States': {
    countryName: 'United States',
    countryCode: 'US',
    flag: '🇺🇸',
    footballChannels: [
      {
        competition: 'Premier League',
        tvChannels: ['NBC', 'USA Network', 'Telemundo'],
        digitalOtt: ['Peacock Premium'],
        priceModel: 'Subscription',
        url: 'https://www.peacocktv.com'
      },
      {
        competition: 'Champions League',
        tvChannels: ['CBS Sports Network', 'Univision / TUDN'],
        digitalOtt: ['Paramount+ (All Matches Live)'],
        priceModel: 'Subscription',
        url: 'https://www.paramountplus.com'
      },
      {
        competition: 'La Liga & Bundesliga',
        tvChannels: ['ESPN Deportes', 'ABC (Select)'],
        digitalOtt: ['ESPN+ (All Matches Live)'],
        priceModel: 'Subscription',
        url: 'https://plus.espn.com'
      },
      {
        competition: 'MLS',
        tvChannels: ['Fox Sports 1 (Select)'],
        digitalOtt: ['Apple TV (MLS Season Pass)'],
        priceModel: 'Subscription',
        url: 'https://tv.apple.com'
      }
    ],
    cricketChannels: [
      {
        competition: 'IPL, PSL, ICC World Cups & Bilaterals',
        tvChannels: ['Willow TV HD'],
        digitalOtt: ['Willow by Cricbuzz', 'Sling TV Willow', 'ESPN+ (Select)'],
        priceModel: 'Subscription',
        url: 'https://www.willow.tv'
      }
    ]
  },
  'India': {
    countryName: 'India',
    countryCode: 'IN',
    flag: '🇮🇳',
    footballChannels: [
      {
        competition: 'Premier League',
        tvChannels: ['Star Sports Select 1 HD', 'Star Sports 3'],
        digitalOtt: ['Disney+ Hotstar'],
        priceModel: 'Subscription',
        url: 'https://www.hotstar.com'
      },
      {
        competition: 'Champions League & Bundesliga',
        tvChannels: ['Sony Sports Ten 2 HD', 'Sony Sports Ten 5 HD'],
        digitalOtt: ['Sony LIV App'],
        priceModel: 'Subscription',
        url: 'https://www.sonyliv.com'
      },
      {
        competition: 'La Liga',
        tvChannels: ['Sports18 1 HD'],
        digitalOtt: ['JioCinema (Free Live Stream)', 'GXR World'],
        priceModel: 'Free',
        url: 'https://www.jiocinema.com'
      },
      {
        competition: 'MLS',
        tvChannels: ['Apple TV App'],
        digitalOtt: ['Apple TV (MLS Season Pass)'],
        priceModel: 'Subscription',
        url: 'https://tv.apple.com'
      }
    ],
    cricketChannels: [
      {
        competition: 'IPL (Indian Premier League)',
        tvChannels: ['Star Sports 1 HD / Hindi / Regional'],
        digitalOtt: ['JioCinema (Free 4K Multi-cam Stream)'],
        priceModel: 'Free',
        url: 'https://www.jiocinema.com'
      },
      {
        competition: 'ICC Tournaments & India Bilaterals',
        tvChannels: ['Star Sports Network / Sports18'],
        digitalOtt: ['Disney+ Hotstar / JioCinema'],
        priceModel: 'Freemium',
        url: 'https://www.hotstar.com'
      }
    ]
  },
  'UAE / Middle East': {
    countryName: 'UAE / Middle East',
    countryCode: 'AE',
    flag: '🇦🇪',
    footballChannels: [
      {
        competition: 'Premier League, UCL, La Liga, Bundesliga',
        tvChannels: ['beIN Sports 1 Premium', 'beIN Sports HD 1-7'],
        digitalOtt: ['TOD Streaming App', 'beIN CONNECT'],
        priceModel: 'Subscription',
        url: 'https://www.tod.tv'
      },
      {
        competition: 'MLS',
        tvChannels: ['Apple TV'],
        digitalOtt: ['Apple TV (MLS Season Pass)'],
        priceModel: 'Subscription',
        url: 'https://tv.apple.com'
      }
    ],
    cricketChannels: [
      {
        competition: 'IPL, PSL & ICC Tournaments',
        tvChannels: ['eLife CricLife 1, 2, 3 HD'],
        digitalOtt: ['STARZPLAY Cricket', 'Cricbuzz App', 'TOD App'],
        priceModel: 'Subscription',
        url: 'https://starzplay.com'
      }
    ]
  }
};
