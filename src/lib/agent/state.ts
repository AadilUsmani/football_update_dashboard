import { Annotation } from '@langchain/langgraph';
import { Match, SportType } from '../types';

export interface AgentMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface TraceStep {
  node: string;
  description: string;
  timestamp: string;
  outputSummary?: string;
}

export const AgentStateAnnotation = Annotation.Root({
  query: Annotation<string>({
    reducer: (x, y) => y ?? x,
    default: () => '',
  }),
  messages: Annotation<AgentMessage[]>({
    reducer: (x, y) => (y ? [...x, ...y] : x),
    default: () => [],
  }),
  sport: Annotation<SportType | 'both'>({
    reducer: (x, y) => y ?? x,
    default: () => 'both',
  }),
  intent: Annotation<'next_fixture' | 'where_to_watch' | 'favorite_team_lookup' | 'tactical_preview' | 'schedule_overview' | 'general'>({
    reducer: (x, y) => y ?? x,
    default: () => 'general',
  }),
  entities: Annotation<{
    team?: string;
    competition?: string;
    country?: string;
    timezone?: string;
  }>({
    reducer: (x, y) => ({ ...x, ...y }),
    default: () => ({ country: 'Pakistan', timezone: 'Asia/Karachi' }),
  }),
  matchedMatches: Annotation<Match[]>({
    reducer: (x, y) => y ?? x,
    default: () => [],
  }),
  broadcastSummary: Annotation<string>({
    reducer: (x, y) => y ?? x,
    default: () => '',
  }),
  finalAnswer: Annotation<string>({
    reducer: (x, y) => y ?? x,
    default: () => '',
  }),
  traceSteps: Annotation<TraceStep[]>({
    reducer: (x, y) => (y ? [...x, ...y] : x),
    default: () => [],
  }),
});

export type AgentGraphStateType = typeof AgentStateAnnotation.State;
