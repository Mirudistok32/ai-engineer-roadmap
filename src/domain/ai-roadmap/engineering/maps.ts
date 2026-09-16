import type { CapabilityCell, Principle, ProgressAxis, RedFlag, Skill } from '../types';

export const engineeringSkills: readonly Skill[] = [
  {
    id: 'advanced-system-design',
    title: 'Advanced System Design',
    description: 'Scale, reliability, failure-first thinking.',
    level: 'advanced',
    domains: ['architecture'],
    topics: ['scalability', 'fault tolerance', 'bottlenecks'],
    missionId: 'eng-mission-design',
  },
  {
    id: 'ai-engineering-infra',
    title: 'AI Engineering Infrastructure',
    description: 'Model→workflow→autonomous loop as infrastructure.',
    level: 'advanced',
    domains: ['architecture'],
    prerequisites: ['advanced-system-design'],
    topics: ['agents', 'memory', 'tools', 'termination'],
    missionId: 'eng-mission-agents',
  },
  {
    id: 'automation-roi',
    title: 'Automation ROI',
    description: 'Frequency × time × reliability; protect attention.',
    level: 'advanced',
    domains: ['devops'],
    prerequisites: ['ai-engineering-infra'],
    topics: ['audit', 'self-healing', 'risk'],
    missionId: 'eng-mission-automate',
  },
  {
    id: 'product-engineering',
    title: 'Product Engineering',
    description: 'Problem discovery and product↔tech coupling.',
    level: 'advanced',
    domains: ['product', 'analysis'],
    topics: ['hypotheses', 'experiments', 'value'],
    missionId: 'eng-mission-product',
  },
  {
    id: 'engineering-leadership',
    title: 'Engineering Leadership',
    description: 'Planning, decisions, communication, delivery control.',
    level: 'advanced',
    domains: ['product', 'architecture'],
    prerequisites: ['product-engineering'],
    topics: ['trade-offs', 'briefs', 'milestones'],
    missionId: 'eng-mission-lead',
  },
  {
    id: 'engineering-os',
    title: 'Personal Engineering OS',
    description: 'Rules + skills + agents + hooks + MCP + automation.',
    level: 'advanced',
    domains: ['architecture'],
    prerequisites: ['automation-roi', 'engineering-leadership'],
    topics: ['workflows', 'verification', 'autonomy levels'],
    missionId: 'eng-capstone',
  },
] as const;

export const engineeringSkillStatusById: Readonly<Record<string, string>> = {
  'advanced-system-design': 'foundation',
  'ai-engineering-infra': 'in_progress',
  'automation-roi': 'available',
  'product-engineering': 'available',
  'engineering-leadership': 'locked',
  'engineering-os': 'locked',
};

export const engineeringPrinciples: readonly Principle[] = [
  { id: 'ep1', text: 'Understand the problem.' },
  { id: 'ep2', text: 'Design before implementation.' },
  { id: 'ep3', text: 'Keep systems understandable.' },
  { id: 'ep4', text: 'Prefer simplicity until complexity is justified.' },
  { id: 'ep5', text: 'Automate repetitive work.' },
  { id: 'ep6', text: 'Measure real behavior.' },
  { id: 'ep7', text: 'Build verification into the system.' },
  { id: 'ep8', text: 'Treat failure as a normal state.' },
  { id: 'ep9', text: 'Security is architecture.' },
  { id: 'ep10', text: 'Performance is measurable.' },
  { id: 'ep11', text: 'AI is leverage, not authority.' },
  { id: 'ep12', text: 'Context is an engineering resource.' },
  { id: 'ep13', text: 'Delegation requires boundaries.' },
  { id: 'ep14', text: 'Automation without verification is risk.' },
  { id: 'ep15', text: 'Human responsibility does not disappear with automation.' },
  { id: 'ep16', text: 'Protect human attention.' },
  { id: 'ep17', text: 'Optimize the whole system, not individual tasks.' },
  { id: 'ep18', text: 'Build systems that can evolve.' },
];

export const engineeringRedFlags: readonly RedFlag[] = [
  { id: 'er1', text: 'Autonomy without risk gates' },
  { id: 'er2', text: 'Agents for every job title' },
  { id: 'er3', text: 'Self-healing without tests' },
  { id: 'er4', text: 'Building features without a problem' },
  { id: 'er5', text: 'Ignoring total system cost' },
  { id: 'er6', text: 'Optimizing tasks, not attention' },
  { id: 'er7', text: 'Auto-accept on high-risk paths' },
  { id: 'er8', text: 'No frontier learning method' },
];

export const autonomyLevels = [
  { level: 0, title: 'Manual' },
  { level: 1, title: 'AI Assisted' },
  { level: 2, title: 'AI Directed' },
  { level: 3, title: 'Agent Execution' },
  { level: 4, title: 'Multi-Agent Workflow' },
  { level: 5, title: 'Self-Checking Automation' },
  { level: 6, title: 'Autonomous Engineering System' },
] as const;

export const maturityLadder = [
  'SPECIALIST',
  'FOUNDATION',
  'INTEGRATION',
  'SYSTEM THINKING',
  'AUTOMATION',
  'ORCHESTRATION',
  'AUTONOMY',
] as const;

export const identityEvolution = [
  'SPECIALIST',
  'GENERALIST',
  'AI-AUGMENTED ENGINEER',
  'ENGINEERING ORCHESTRATOR',
  'SYSTEM BUILDER',
  'CONTINUOUS EVOLUTION',
] as const;

export const finalWorkflow = [
  'IDEA',
  'RESEARCH',
  'PROBLEM',
  'PRODUCT',
  'SYSTEM DESIGN',
  'ARCHITECTURE',
  'AI ENGINEERING',
  'IMPLEMENTATION',
  'VERIFICATION',
  'DEPLOYMENT',
  'OBSERVABILITY',
  'ANALYTICS',
  'ITERATION',
  'AUTOMATION',
  'AUTONOMOUS WORKFLOW',
] as const;

export const aiStack = [
  'MODEL',
  'PROMPT',
  'CONTEXT',
  'TOOLS',
  'MEMORY',
  'AGENT',
  'WORKFLOW',
  'MULTI-AGENT SYSTEM',
  'AUTONOMOUS LOOP',
] as const;

export const agentVsWorkflow = [
  'SCRIPT',
  'WORKFLOW',
  'AGENT',
  'MULTI-AGENT',
  'AUTONOMOUS SYSTEM',
] as const;

export const failureModes = [
  'SERVICE DOWN',
  'DATABASE DOWN',
  'API TIMEOUT',
  'NETWORK FAILURE',
  'BAD DEPLOYMENT',
  'TRAFFIC SPIKE',
  'INVALID DATA',
  'SECURITY INCIDENT',
] as const;

export const failureLoop = ['DETECT', 'CONTAIN', 'RECOVER', 'ANALYZE', 'PREVENT'] as const;

export const scaleSteps = ['10 USERS', '1 000 USERS', '100 000 USERS', '1 000 000 USERS'] as const;

export const scaleChanges = [
  'Database',
  'Caching',
  'Infrastructure',
  'Architecture',
  'Observability',
  'Cost',
  'Security',
  'Failure Modes',
] as const;

export const engineeringOs = [
  'Rules',
  'Skills',
  'Agents',
  'Commands',
  'Hooks',
  'MCP',
  'Documentation',
  'Automation',
] as const;

export const engineeringOsMap = {
  center: 'ENGINEERING OS',
  pillars: ['RULES', 'SKILLS', 'TOOLS', 'AGENTS', 'COMMANDS', 'MCP', 'WORKFLOWS', 'HOOKS', 'DATA'],
} as const;

export const verificationArchitecture = [
  'AI OUTPUT',
  'TYPE CHECK',
  'LINT',
  'UNIT TEST',
  'INTEGRATION TEST',
  'E2E',
  'SECURITY',
  'PERFORMANCE',
  'ARCHITECTURE RULES',
  'HUMAN APPROVAL',
] as const;

export const systemCost = [
  'BUILD COST',
  'RUNTIME COST',
  'AI COST',
  'MAINTENANCE COST',
  'HUMAN TIME',
  '= TOTAL SYSTEM COST',
] as const;

export const aiLeverageLoop = [
  'Task',
  'Human Time',
  'AI Time',
  'Review Time',
  'Failure Rate',
  'Value Generated',
] as const;

export const attentionTrap = [
  'TOO MANY TASKS',
  'CONTEXT SWITCHING',
  'LOSS OF FOCUS',
  'LOWER QUALITY',
  'MORE REWORK',
] as const;

export const continueMethod = [
  'What problem does it solve?',
  'What existed before?',
  'What changes?',
  'What are the trade-offs?',
  'Can I build with it?',
  'Can I automate it?',
  'Can I replace it?',
  'Is it worth learning deeply?',
] as const;

export const techRadar = {
  CORE: ['TypeScript', 'React', 'HTTP', 'SQL'],
  CURRENT: ['AI Agents', 'Agentic Workflows'],
  EXPERIMENTAL: ['New model architectures'],
  EMERGING: ['Future agent platforms'],
  DEPRECATED: ['Ad-hoc prompt piles'],
  UNKNOWN: ['Whatever comes next'],
} as const;

export const learnFramework = [
  'Relevance',
  'Learning Cost',
  'Business Value',
  'Technical Value',
  'Longevity',
  'Integration Cost',
] as const;

export const learnDecisions = ['LEARN', 'USE', 'WATCH', 'IGNORE'] as const;

export const knowledgeFrontier = [
  { id: 'known', label: 'KNOWN', coverage: 72 },
  { id: 'unknown', label: 'UNKNOWN', coverage: 40 },
  { id: 'emerging', label: 'EMERGING', coverage: 25 },
  { id: 'frontier', label: 'FRONTIER', coverage: 12 },
] as const satisfies readonly ProgressAxis[];

export const capstoneRequirements = [
  {
    area: 'Product',
    items: ['problem', 'research', 'users', 'value', 'MVP', 'roadmap', 'metrics'],
  },
  {
    area: 'UX/UI',
    items: ['flows', 'IA', 'design system', 'a11y', 'responsive', 'usability'],
  },
  {
    area: 'Architecture',
    items: ['system design', 'boundaries', 'data flow', 'API', 'failure modes', 'trade-offs'],
  },
  { area: 'Frontend', items: ['deep specialization', 'production architecture'] },
  { area: 'Backend', items: ['production-like implementation'] },
  { area: 'Database', items: ['production-like data model'] },
  { area: 'API', items: ['REST + GraphQL where justified'] },
  { area: 'QA', items: ['automated + exploratory'] },
  { area: 'Security', items: ['app + infra + AI security'] },
  { area: 'Performance', items: ['measurement + optimization'] },
  { area: 'DevOps', items: ['CI/CD', 'environments', 'deployment'] },
  { area: 'Observability', items: ['logs', 'metrics', 'errors', 'tracing'] },
  { area: 'Analytics', items: ['product + technical metrics'] },
  { area: 'AI', items: ['multi-agent workflow'] },
  { area: 'Automation', items: ['max reduce manual work'] },
] as const;

export const capstoneLoop = [
  'DISCOVER',
  'DEFINE',
  'DESIGN',
  'ARCHITECT',
  'BUILD',
  'TEST',
  'SECURE',
  'DEPLOY',
  'OBSERVE',
  'MEASURE',
  'LEARN',
  'IMPROVE',
  'AUTOMATE',
] as const;

export const proposedAgents = [
  'Research Agent',
  'Product Agent',
  'Architecture Agent',
  'Frontend Agent',
  'Backend Agent',
  'QA Agent',
  'Security Agent',
  'DevOps Agent',
  'Analytics Agent',
  'Documentation Agent',
] as const;

export const finalBossFlow = [
  'Feature Request',
  'Product Analysis',
  'Technical Specification',
  'Architecture Proposal',
  'Implementation',
  'Tests',
  'Security',
  'PR',
  'CI',
  'Deployment',
  'Monitoring',
] as const;

export const humanControl = ['Define', 'Review', 'Approve', 'Decide'] as const;

export const humanControlModel = [
  'INTENT',
  'CONTEXT',
  'CONSTRAINTS',
  'JUDGEMENT',
  'RESPONSIBILITY',
] as const;

export const finalAiLoop = [
  'HUMAN INTENT',
  'PROBLEM',
  'SYSTEM',
  'AI ORCHESTRATION',
  'EXECUTION',
  'VERIFICATION',
  'DELIVERY',
  'MEASUREMENT',
  'LEARNING',
  'AUTOMATION',
  'SYSTEM IMPROVEMENT',
  '→ back to INTENT',
] as const;

export const finalEngineerMap = {
  think: ['Product', 'Analysis', 'UX', 'Strategy', 'Planning'],
  build: ['Frontend', 'Backend', 'API', 'Database', 'Architecture'],
  operate: ['QA', 'DevOps', 'Security', 'Performance', 'Observability'],
  ai: ['Agents', 'Tools', 'Automation'],
  beyond: ['ENGINEERING SYSTEM', 'CONTINUOUS EVOLUTION'],
} as const;

export const capabilityMatrix: readonly CapabilityCell[] = [
  {
    capability: 'Product',
    foundation: 'Understand',
    integration: 'Integrate',
    engineering: 'Create',
  },
  {
    capability: 'UX/UI',
    foundation: 'Understand',
    integration: 'Apply',
    engineering: 'Design systems',
  },
  {
    capability: 'Frontend',
    foundation: 'Build',
    integration: 'Architect',
    engineering: 'Deep specialization',
  },
  {
    capability: 'Backend',
    foundation: 'Build',
    integration: 'Production',
    engineering: 'Architect',
  },
  { capability: 'Database', foundation: 'Use', integration: 'Optimize', engineering: 'Design' },
  { capability: 'API', foundation: 'Implement', integration: 'Design', engineering: 'Architect' },
  {
    capability: 'QA',
    foundation: 'Test',
    integration: 'Quality system',
    engineering: 'Self-verifying',
  },
  {
    capability: 'DevOps',
    foundation: 'Deploy',
    integration: 'Productionize',
    engineering: 'Automate',
  },
  {
    capability: 'Security',
    foundation: 'Protect',
    integration: 'Integrate',
    engineering: 'Architect',
  },
  {
    capability: 'Performance',
    foundation: 'Measure',
    integration: 'Optimize',
    engineering: 'Engineer',
  },
  {
    capability: 'Analytics',
    foundation: 'Understand',
    integration: 'Apply',
    engineering: 'Drive decisions',
  },
  {
    capability: 'AI',
    foundation: 'Assist',
    integration: 'Orchestrate',
    engineering: 'Engineer systems',
  },
  {
    capability: 'Automation',
    foundation: 'Scripts',
    integration: 'Workflows',
    engineering: 'Autonomous systems',
  },
  {
    capability: 'Architecture',
    foundation: 'Understand',
    integration: 'Integrate',
    engineering: 'Design',
  },
  {
    capability: 'Project',
    foundation: 'Execute',
    integration: 'Coordinate',
    engineering: 'Lead engineering',
  },
];

export const storyArc = [
  { phase: 'PHASE I · FOUNDATION', quote: 'I SEE THE WHOLE SYSTEM.' },
  { phase: 'PHASE II · INTEGRATION', quote: 'I CAN CONNECT THE SYSTEM.' },
  {
    phase: 'PHASE III · ENGINEERING',
    quote: 'I CAN DESIGN, ORCHESTRATE AND AUTOMATE THE SYSTEM.',
  },
  { phase: '∞', quote: 'I CAN LEARN WHATEVER THE NEXT SYSTEM REQUIRES.' },
] as const;

export const navSections = [
  { id: 'hero', label: '01 Hero' },
  { id: 'map', label: '02 Map' },
  { id: 'months', label: '03 Months' },
  { id: 'ai', label: '04 AI Eng' },
  { id: 'os', label: '05 Eng OS' },
  { id: 'capstone', label: '06 Capstone' },
  { id: 'autonomy', label: '07 Autonomy' },
  { id: 'frontier', label: '08 Frontier' },
  { id: 'matrix', label: '09 Matrix' },
  { id: 'finale', label: '10 ∞' },
] as const;
