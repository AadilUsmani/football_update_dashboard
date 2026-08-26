import { NextRequest, NextResponse } from 'next/server';
import { FOOTBALL_FIXTURES } from '@/lib/data/footballData';
import { CRICKET_FIXTURES } from '@/lib/data/cricketData';
import { fetchLiveFootballFixtures } from '@/lib/api/thesportsdb';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const sport = searchParams.get('sport') || 'all';

    let allFootball = [...FOOTBALL_FIXTURES];
    let allCricket = [...CRICKET_FIXTURES];

    // Optionally enrich with live EPL & La Liga fixtures from TheSportsDB
    try {
      const liveEpl = await fetchLiveFootballFixtures('epl');
      const liveLaLiga = await fetchLiveFootballFixtures('laliga');
      if (liveEpl.length > 0) {
        allFootball = [...liveEpl, ...allFootball.filter(f => f.competitionId !== 'epl')];
      }
      if (liveLaLiga.length > 0) {
        allFootball = [...liveLaLiga, ...allFootball.filter(f => f.competitionId !== 'laliga')];
      }
    } catch {
      // fallback to pre-verified dataset
    }

    if (sport === 'football') {
      return NextResponse.json({ success: true, count: allFootball.length, data: allFootball });
    }
    if (sport === 'cricket') {
      return NextResponse.json({ success: true, count: allCricket.length, data: allCricket });
    }

    const combined = [...allFootball, ...allCricket];
    return NextResponse.json({ success: true, count: combined.length, data: combined });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
