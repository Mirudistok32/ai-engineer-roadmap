import type { FailureScenario, Principle, RedFlag, ResponsibilityRow, Skill } from '../types';

export const integrationSkills: readonly Skill[] = [
  {
    id: 'system-thinking',
    title: 'System Thinking',
    description: 'Boundaries, modules, interfaces, failure domains.',
    level: 'intermediate',
    domains: ['architecture'],
    topics: ['boundaries', 'dependencies', 'failure domains'],
    missionId: 'int-mission-01',
  },
  {
    id: 'architecture-tradeoffs',
    title: 'Architecture Trade-offs',
    description: 'Engineering is trade-offs — не «правильно вообще».',
    level: 'intermediate',
    domains: ['architecture'],
    prerequisites: ['system-thinking'],
    topics: ['simple vs flexible', 'scale', 'cost to operate'],
  },
  {
    id: 'production-backend',
    title: 'Production Backend',
    description: 'Modular services, validation, observability.',
    level: 'advanced',
    domains: ['backend', 'database'],
    prerequisites: ['architecture-tradeoffs'],
    topics: ['repositories', 'DTO', 'error strategy', 'async'],
    missionId: 'int-mission-02',
  },
  {
    id: 'frontend-systems',
    title: 'Frontend Systems',
    description: 'App architecture + design system + UX metrics.',
    level: 'advanced',
    domains: ['frontend', 'ux-ui'],
    prerequisites: ['system-thinking'],
    topics: ['state boundaries', 'tokens', 'CWV'],
  },
  {
    id: 'quality-engineering',
    title: 'Quality Engineering',
    description: 'Quality as executable pipeline across lifecycle.',
    level: 'intermediate',
    domains: ['qa'],
    prerequisites: ['production-backend', 'frontend-systems'],
    topics: ['gates', 'contracts', 'AI QA agent'],
    missionId: 'int-mission-03',
  },
  {
    id: 'observability',
    title: 'Observability',
    description: 'Logs, metrics, traces + incident loop.',
    level: 'intermediate',
    domains: ['devops'],
    prerequisites: ['quality-engineering'],
    topics: ['triad', 'alerts', 'Detect→Prevent'],
    missionId: 'int-mission-04',
  },
  {
    id: 'security-engineering',
    title: 'Security Engineering',
    description: 'Identity, app, infra, and AI security boundaries.',
    level: 'intermediate',
    domains: ['security'],
    prerequisites: ['observability'],
    topics: ['IAM', 'prompt injection', 'agent boundaries'],
  },
  {
    id: 'performance-engineering',
    title: 'Performance Engineering',
    description: 'SLA → measure → bottleneck → optimize → regression check.',
    level: 'intermediate',
    domains: ['performance'],
    prerequisites: ['production-backend', 'frontend-systems'],
    topics: ['latency', 'throughput', 'regression'],
  },
  {
    id: 'automation-engineering',
    title: 'Automation Engineering',
    description: 'Move repetitive work down the automation ladder.',
    level: 'advanced',
    domains: ['devops'],
    prerequisites: ['quality-engineering'],
    topics: ['script', 'agent pipeline', 'self-checking'],
    missionId: 'int-mission-05',
  },
  {
    id: 'ai-orchestration',
    title: 'AI Orchestration',
    description: 'Contracts, handoffs, context, verification 2.0.',
    level: 'advanced',
    domains: ['architecture'],
    prerequisites: ['automation-engineering', 'security-engineering'],
    topics: ['agent team', 'context engineering', 'human approval'],
    missionId: 'int-capstone',
    aiApplications: ['Multi-agent workflows', 'Quality reports', 'Deploy automation'],
  },
] as const;

export const integrationSkillStatusById: Readonly<Record<string, string>> = {
  'system-thinking': 'foundation',
  'architecture-tradeoffs': 'in_progress',
  'production-backend': 'available',
  'frontend-systems': 'available',
  'quality-engineering': 'locked',
  observability: 'locked',
  'security-engineering': 'locked',
  'performance-engineering': 'locked',
  'automation-engineering': 'locked',
  'ai-orchestration': 'locked',
};

export const integrationPrinciples: readonly Principle[] = [
  { id: 'ip1', text: 'Design systems, not isolated features.' },
  { id: 'ip2', text: 'Think in boundaries.' },
  { id: 'ip3', text: 'Every dependency has a cost.' },
  { id: 'ip4', text: 'Every abstraction needs a reason.' },
  { id: 'ip5', text: 'Measure before optimizing.' },
  { id: 'ip6', text: 'Automate repetitive work.' },
  { id: 'ip7', text: 'Make quality executable.' },
  { id: 'ip8', text: 'Make failures observable.' },
  { id: 'ip9', text: 'Give AI context, not vague instructions.' },
  { id: 'ip10', text: 'Delegate execution, keep responsibility.' },
  { id: 'ip11', text: 'Prefer reversible decisions when possible.' },
];

export const integrationRedFlags: readonly RedFlag[] = [
  { id: 'ir1', text: 'Too much abstraction' },
  { id: 'ir2', text: 'No ownership' },
  { id: 'ir3', text: 'No observability' },
  { id: 'ir4', text: 'No rollback' },
  { id: 'ir5', text: 'No quality gates' },
  { id: 'ir6', text: 'Agents without boundaries' },
  { id: 'ir7', text: 'Huge prompts without context' },
  { id: 'ir8', text: 'AI output without verification' },
  { id: 'ir9', text: 'Automation without failure handling' },
  { id: 'ir10', text: 'Metrics without decisions' },
  { id: 'ir11', text: 'Architecture driven by fashion' },
];

export const responsibilityMatrix: readonly ResponsibilityRow[] = [
  { area: 'Problem definition', human: 'Primary', ai: 'Assist' },
  { area: 'Product decisions', human: 'Primary', ai: 'Research' },
  { area: 'Architecture', human: 'Primary', ai: 'Propose' },
  { area: 'Coding', human: 'Review', ai: 'Primary execution' },
  { area: 'Testing', human: 'Verify', ai: 'Generate + execute' },
  { area: 'Security', human: 'Approve', ai: 'Scan / suggest' },
  { area: 'Deployment', human: 'Approve', ai: 'Automate' },
  { area: 'Monitoring', human: 'Interpret', ai: 'Detect' },
  { area: 'Analytics', human: 'Decide', ai: 'Analyze' },
  { area: 'Documentation', human: 'Verify', ai: 'Generate' },
];

export const failureScenarios: readonly FailureScenario[] = [
  {
    id: 'db-down',
    title: 'Database unavailable',
    questions: [
      'What breaks?',
      'How is failure detected?',
      'What does user see?',
      'How does system recover?',
      'How do we prevent recurrence?',
    ],
  },
  {
    id: 'api-timeout',
    title: 'API timeout',
    questions: ['What breaks?', 'How detected?', 'User impact?', 'Recovery?', 'Prevention?'],
  },
  {
    id: 'bad-deploy',
    title: 'Invalid deployment',
    questions: ['What breaks?', 'How detected?', 'User impact?', 'Rollback?', 'Prevention?'],
  },
  {
    id: 'token-expired',
    title: 'Expired token',
    questions: ['What breaks?', 'How detected?', 'User impact?', 'Recovery?', 'Prevention?'],
  },
  {
    id: 'migration-fail',
    title: 'Database migration failure',
    questions: ['What breaks?', 'How detected?', 'User impact?', 'Recovery?', 'Prevention?'],
  },
  {
    id: 'fe-build',
    title: 'Broken frontend build',
    questions: ['What breaks?', 'How detected?', 'User impact?', 'Recovery?', 'Prevention?'],
  },
  {
    id: 'ext-down',
    title: 'External service unavailable',
    questions: ['What breaks?', 'How detected?', 'User impact?', 'Recovery?', 'Prevention?'],
  },
  {
    id: 'cache-fail',
    title: 'Cache failure',
    questions: ['What breaks?', 'How detected?', 'User impact?', 'Recovery?', 'Prevention?'],
  },
  {
    id: 'traffic-spike',
    title: 'Traffic spike',
    questions: ['What breaks?', 'How detected?', 'User impact?', 'Mitigation?', 'Prevention?'],
  },
];

export const automationLadderV2 = [
  'MANUAL',
  'SCRIPT',
  'AUTOMATION',
  'AI ASSISTANT',
  'AI AGENT',
  'AGENT PIPELINE',
  'SELF-CHECKING AUTOMATION',
] as const;

export const automationDecision = [
  'Manual Task',
  'Can be Scripted?',
  'Can be Automated?',
  'Can AI Perform It?',
  'Can AI Verify It?',
  'Can Workflow Run Automatically?',
] as const;

export const engineerLoopV2 = [
  'Human',
  'Plan',
  'Delegate',
  'Agent',
  'Agent Output',
  'Verification',
  'Integration',
  'Measurement',
  'Improvement',
] as const;

export const agentScale = [
  'ONE AGENT',
  'MULTIPLE AGENTS',
  'AGENT WORKFLOW',
  'AUTOMATED PIPELINE',
] as const;

export const controlPanel = [
  { label: 'Build', value: '✓' },
  { label: 'Tests', value: '✓' },
  { label: 'Security', value: '✓' },
  { label: 'Performance', value: '✓' },
  { label: 'Deployment', value: '✓' },
  { label: 'Monitoring', value: '✓' },
  { label: 'Analytics', value: '✓' },
  { label: 'AI Tasks', value: '12' },
  { label: 'Human Reviews', value: '4' },
  { label: 'Automations', value: '7' },
] as const;

export const complexityMap = {
  phaseI: ['Component', 'Component', 'Component'],
  phaseII: ['Component ↔ Component', 'Services', 'Data', 'Infrastructure', 'Observability'],
  phaseIII: ['Human', 'Agent System', 'Engineering Platform'],
} as const;

export const visualProgression = [
  { stage: 'Start', lines: ['YOU → AI'] },
  { stage: 'Mid', lines: ['YOU → AI → AI'] },
  {
    stage: 'End',
    lines: ['HUMAN as Engineering Orchestrator', 'AGENT mesh → SYSTEM'],
  },
] as const;

export const tradeOffAxes = [
  'SIMPLE',
  'FLEXIBLE',
  'SCALABLE',
  'FAST TO BUILD',
  'CHEAP TO OPERATE',
] as const;

export const designSystemLadder = [
  'Design Tokens',
  'Primitives',
  'Components',
  'Patterns',
  'Pages',
] as const;

export const qualityPipeline = [
  'REQUIREMENTS',
  'DESIGN REVIEW',
  'CODE',
  'UNIT TEST',
  'INTEGRATION TEST',
  'E2E',
  'SECURITY',
  'PERFORMANCE',
  'PRODUCTION',
  'MONITORING',
] as const;

export const securityLayers = {
  Identity: ['authentication', 'authorization', 'roles', 'permissions'],
  Application: ['validation', 'injection', 'XSS', 'CSRF', 'insecure dependencies'],
  Infrastructure: ['secrets', 'IAM', 'least privilege', 'environment isolation'],
  'AI Security': [
    'prompt injection',
    'tool permissions',
    'sensitive context',
    'untrusted input',
    'agent boundaries',
  ],
} as const;

export const adrTemplate = [
  'Context',
  'Decision',
  'Alternatives',
  'Trade-offs',
  'Consequences',
] as const;

export const docTypes = [
  'README',
  'architecture document',
  'API documentation',
  'ADR',
  'deployment documentation',
  'runbook',
  'troubleshooting guide',
] as const;

export const navSections = [
  { id: 'hero', label: '01 Hero' },
  { id: 'map', label: '02 Map' },
  { id: 'months', label: '03 Months' },
  { id: 'agents', label: '04 Agents' },
  { id: 'context', label: '05 Context' },
  { id: 'quality', label: '06 Quality' },
  { id: 'automation', label: '07 Auto' },
  { id: 'failure', label: '08 Fail Lab' },
  { id: 'capstone', label: '09 Capstone' },
  { id: 'panel', label: '10 Panel' },
  { id: 'transition', label: '11 Next' },
] as const;

export const productV2Requirements = [
  {
    area: 'Product',
    items: ['real user problem', 'clear scope', 'metrics', 'hypotheses'],
  },
  {
    area: 'UX',
    items: ['complete flows', 'design system', 'a11y', 'responsive'],
  },
  {
    area: 'Frontend',
    items: ['production architecture', 'performance', 'resilient states'],
  },
  {
    area: 'Backend',
    items: ['modular architecture', 'validation', 'authorization', 'background jobs'],
  },
  {
    area: 'Data',
    items: ['PostgreSQL', 'indexes', 'transactions', 'caching', 'migrations'],
  },
  {
    area: 'APIs',
    items: ['REST', 'GraphQL', 'API contracts'],
  },
  {
    area: 'Quality',
    items: ['unit', 'integration', 'E2E', 'security testing'],
  },
  {
    area: 'DevOps',
    items: ['Docker', 'CI/CD', 'environments', 'deployment'],
  },
  {
    area: 'Observability',
    items: ['logs', 'metrics', 'errors', 'alerts'],
  },
  {
    area: 'Analytics',
    items: ['product events', 'funnel', 'usage metrics'],
  },
  {
    area: 'AI',
    items: ['research', 'coding', 'QA', 'docs', 'debugging', 'agent workflows'],
  },
] as const;
