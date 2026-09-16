/** Product id — stable key for extract / catalog. */
export const AI_ROADMAP_PRODUCT_ID = 'ai-roadmap' as const;

export type PhaseId = 'foundation' | 'integration' | 'engineering';

export type SkillLevel = 'foundation' | 'intermediate' | 'advanced';

export type SkillStatus = 'locked' | 'available' | 'in_progress' | 'foundation' | 'completed';

export type DomainPillar = 'think' | 'build' | 'operate' | 'ai';

export type DepthLevel = 'visual' | 'summary' | 'detail' | 'know' | 'able' | 'mission' | 'ai';

export type PhaseMeta = {
  readonly id: PhaseId;
  readonly number: 1 | 2 | 3;
  readonly code: string;
  readonly title: string;
  readonly subtitle: string;
  readonly duration: string;
  readonly status: 'live' | 'soon';
  readonly href: string;
};

export type Domain = {
  readonly id: string;
  readonly pillar: DomainPillar;
  readonly title: string;
  readonly short: string;
  readonly why: string;
  readonly aiLeverage: string;
  readonly outcome: string;
  readonly topics: readonly string[];
  readonly technologies?: readonly string[];
  readonly whatGoodLooksLike: readonly string[];
  readonly depth: {
    readonly summary: string;
    readonly detail: string;
    readonly know: readonly string[];
    readonly able: readonly string[];
    readonly ai: readonly string[];
  };
};

export type Skill = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly level: SkillLevel;
  readonly domains: readonly string[];
  readonly prerequisites?: readonly string[];
  readonly topics: readonly string[];
  readonly technologies?: readonly string[];
  readonly aiApplications?: readonly string[];
  readonly missionId?: string;
};

export type Mission = {
  readonly id: string;
  readonly code: string;
  readonly title: string;
  readonly kind: 'mission' | 'boss' | 'final';
  readonly month?: number;
  readonly objective: string;
  readonly understand: readonly string[];
  readonly build: readonly string[];
  readonly aiCanHelp: readonly string[];
  readonly mustVerify: readonly string[];
  readonly doneWhen: readonly string[];
};

export type Month = {
  readonly id: string;
  readonly number: 1 | 2 | 3 | 4 | 5 | 6;
  readonly title: string;
  readonly goal: string;
  readonly themes: readonly {
    readonly title: string;
    readonly topics: readonly string[];
  }[];
  readonly output: string;
  readonly missionIds: readonly string[];
  readonly bossMissionId?: string;
};

export type DependencyChain = {
  readonly id: string;
  readonly title: string;
  readonly steps: readonly string[];
};

export type LifecycleStep = {
  readonly id: string;
  readonly label: string;
  readonly aiCue?: string;
};

export type Principle = {
  readonly id: string;
  readonly text: string;
};

export type RedFlag = {
  readonly id: string;
  readonly text: string;
};

export type ProgressAxis = {
  readonly id: string;
  readonly label: string;
  /** Roadmap coverage hint 0–100 — not a personal score. */
  readonly coverage: number;
};

export type FoundationOverview = {
  readonly title: string;
  readonly subtitle: string;
  readonly lead: string;
  readonly stats: readonly { readonly label: string; readonly value: string }[];
  readonly journey: readonly string[];
  readonly progress: readonly ProgressAxis[];
  readonly philosophy: {
    readonly quote: string;
    readonly sequence: readonly string[];
  };
  readonly transition: {
    readonly title: string;
    readonly body: string;
    readonly steps: readonly string[];
    readonly cta: string;
  };
  readonly finalState: {
    readonly title: string;
    readonly from: string;
    readonly to: readonly string[];
    readonly note: string;
  };
};

export type AgentContract = {
  readonly id: string;
  readonly role: string;
  readonly goal: string;
  readonly input: string;
  readonly context: string;
  readonly constraints: readonly string[];
  readonly tools: readonly string[];
  readonly output: string;
  readonly qualityCriteria: readonly string[];
  readonly failureConditions: readonly string[];
};

export type ResponsibilityRow = {
  readonly area: string;
  readonly human: string;
  readonly ai: string;
};

export type FailureScenario = {
  readonly id: string;
  readonly title: string;
  readonly questions: readonly string[];
};

export type IntegrationOverview = {
  readonly title: string;
  readonly subtitle: string;
  readonly lead: string;
  readonly stats: readonly { readonly label: string; readonly value: string }[];
  readonly integrationFlow: readonly string[];
  readonly progress: readonly ProgressAxis[];
  readonly leverage: readonly ProgressAxis[];
  readonly philosophy: {
    readonly lines: readonly string[];
    readonly sequence: readonly string[];
  };
  readonly transition: {
    readonly title: string;
    readonly body: string;
    readonly steps: readonly string[];
    readonly cta: string;
  };
  readonly finalState: {
    readonly title: string;
    readonly deep: string;
    readonly broad: readonly string[];
    readonly ai: readonly string[];
    readonly note: string;
  };
};

export type CapabilityCell = {
  readonly capability: string;
  readonly foundation: string;
  readonly integration: string;
  readonly engineering: string;
};

export type EngineeringOverview = {
  readonly title: string;
  readonly subtitle: string;
  readonly lead: string;
  readonly stats: readonly { readonly label: string; readonly value: string }[];
  readonly orchestratorFlow: readonly string[];
  readonly progress: readonly ProgressAxis[];
  readonly attentionLoad: readonly ProgressAxis[];
  readonly aiQuality: readonly ProgressAxis[];
  readonly philosophy: {
    readonly lines: readonly string[];
    readonly sequence: readonly string[];
  };
  readonly finale: {
    readonly title: string;
    readonly subtitle: string;
    readonly body: string;
    readonly evolution: readonly string[];
    readonly slogans: readonly string[];
    readonly sequence: readonly string[];
  };
};
