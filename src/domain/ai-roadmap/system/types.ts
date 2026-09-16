export type LoopStage = {
  readonly id: string;
  readonly label: string;
  readonly engineer: string;
  readonly knowledge: readonly string[];
  readonly aiTools: readonly string[];
  readonly humanMustVerify: readonly string[];
  readonly typicalMistakes: readonly string[];
  readonly mission: string;
};

export type ResponsibilityLevel =
  'understand' | 'use' | 'build' | 'verify' | 'design' | 'optimize' | 'automate' | 'orchestrate';

export type DomainResponsibility = {
  readonly domain: string;
  readonly foundation: readonly ResponsibilityLevel[];
  readonly integration: readonly ResponsibilityLevel[];
  readonly engineering: readonly ResponsibilityLevel[];
};

export type CrossMission = {
  readonly id: string;
  readonly title: string;
  readonly objective: string;
  readonly chain: readonly string[];
  readonly lesson: string;
};

export type GymScenario = {
  readonly id: string;
  readonly users: string;
  readonly constraints: readonly string[];
  readonly reconsider: readonly string[];
  readonly advantages: readonly string[];
  readonly risks: readonly string[];
  readonly complexity: string;
  readonly cost: string;
};

export type TradeOff = {
  readonly id: string;
  readonly title: string;
  readonly optionA: string;
  readonly optionB: string;
  readonly axes: readonly {
    readonly name: string;
    readonly a: number;
    readonly b: number;
  }[];
  readonly note: string;
};

export type DecisionRecord = {
  readonly id: string;
  readonly problem: string;
  readonly options: readonly string[];
  readonly decision: string;
  readonly why: string;
  readonly tradeOffs: string;
  readonly result: string;
};

export type AiDomainLayer = {
  readonly domain: string;
  readonly howAiHelps: readonly string[];
  readonly whatAiCanExecute: readonly string[];
  readonly humanMustVerify: readonly string[];
  readonly aiShouldNotDecide: readonly string[];
  readonly canAutomate: readonly string[];
};

export type MapLayer = {
  readonly id: string;
  readonly label: string;
};

export type SpineStage = {
  readonly phase: 'foundation' | 'integration' | 'engineering';
  readonly title: string;
  readonly steps: readonly string[];
};
