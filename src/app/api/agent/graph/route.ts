import { NextRequest, NextResponse } from 'next/server';
import { runSportsAgent } from '@/lib/agent/graph';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { query, country = 'Pakistan', timezone = 'Asia/Karachi' } = body;

    if (!query || typeof query !== 'string') {
      return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
    }

    const result = await runSportsAgent(query, country, timezone);

    return NextResponse.json({
      success: true,
      query: result.query,
      sport: result.sport,
      intent: result.intent,
      entities: result.entities,
      finalAnswer: result.finalAnswer,
      matchedMatches: result.matchedMatches,
      traceSteps: result.traceSteps,
    });
  } catch (err: any) {
    console.error('Agent Graph Execution Error:', err);
    return NextResponse.json(
      { success: false, error: err.message || 'Internal Agent Execution Error' },
      { status: 500 }
    );
  }
}
