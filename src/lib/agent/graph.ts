import { StateGraph, END, START } from '@langchain/langgraph';
import { AgentStateAnnotation, AgentGraphStateType } from './state';
import {
  intentClassifierNode,
  fixtureRetrieverNode,
  broadcastResolverNode,
  timezoneNormalizerNode,
  insightSynthesizerNode,
} from './nodes';

export function createSportsAgentGraph() {
  const workflow = new StateGraph(AgentStateAnnotation)
    .addNode('IntentClassifier', intentClassifierNode)
    .addNode('FixtureRetriever', fixtureRetrieverNode)
    .addNode('BroadcastResolver', broadcastResolverNode)
    .addNode('TimezoneNormalizer', timezoneNormalizerNode)
    .addNode('InsightSynthesizer', insightSynthesizerNode)
    // Sequential graph pipeline
    .addEdge(START, 'IntentClassifier')
    .addEdge('IntentClassifier', 'FixtureRetriever')
    .addEdge('FixtureRetriever', 'BroadcastResolver')
    .addEdge('BroadcastResolver', 'TimezoneNormalizer')
    .addEdge('TimezoneNormalizer', 'InsightSynthesizer')
    .addEdge('InsightSynthesizer', END);

  return workflow.compile();
}

export const sportsAgentGraph = createSportsAgentGraph();

export async function runSportsAgent(
  query: string,
  country: string = 'Pakistan',
  timezone: string = 'Asia/Karachi'
): Promise<AgentGraphStateType> {
  const initialInput = {
    query,
    messages: [{ role: 'user' as const, content: query }],
    entities: { country, timezone },
    traceSteps: [],
  };

  const result = await sportsAgentGraph.invoke(initialInput);
  return result as AgentGraphStateType;
}
