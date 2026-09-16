import type {
  AiDomainLayer,
  CrossMission,
  DecisionRecord,
  DomainResponsibility,
  GymScenario,
  MapLayer,
  SpineStage,
  TradeOff,
} from "./types";

export const responsibilityProgression: readonly DomainResponsibility[] = [
  {
    domain: "Backend",
    foundation: ["understand", "use"],
    integration: ["build", "verify"],
    engineering: ["design", "optimize", "automate"],
  },
  {
    domain: "Frontend",
    foundation: ["build", "verify"],
    integration: ["design", "optimize"],
    engineering: ["design", "orchestrate"],
  },
  {
    domain: "AI",
    foundation: ["use"],
    integration: ["orchestrate"],
    engineering: ["design", "automate", "orchestrate"],
  },
  {
    domain: "Database",
    foundation: ["understand", "use"],
    integration: ["build", "optimize"],
    engineering: ["design", "automate"],
  },
  {
    domain: "Architecture",
    foundation: ["understand"],
    integration: ["design", "verify"],
    engineering: ["design", "optimize", "orchestrate"],
  },
  {
    domain: "Security",
    foundation: ["understand", "use"],
    integration: ["verify", "build"],
    engineering: ["design", "automate"],
  },
];

export const crossMissions: readonly CrossMission[] = [
  {
    id: "add-subscription",
    title: "ADD SUBSCRIPTION",
    objective: "Одна feature request связывает почти все дисциплины.",
    chain: [
      "PRODUCT",
      "UX",
      "DATABASE",
      "BACKEND",
      "API",
      "FRONTEND",
      "SECURITY",
      "PAYMENT",
      "TESTING",
      "ANALYTICS",
      "MONITORING",
    ],
    lesson: "Реальная задача почти никогда не принадлежит одной технологии.",
  },
  {
    id: "add-team-invite",
    title: "ADD TEAM INVITE",
    objective: "Authz + email + UX empty states + audit log.",
    chain: [
      "PRODUCT",
      "UX",
      "AUTH",
      "BACKEND",
      "FRONTEND",
      "SECURITY",
      "TESTING",
      "OBSERVABILITY",
    ],
    lesson: "Permissions и edge cases важнее «кнопки Invite».",
  },
  {
    id: "cut-p95-latency",
    title: "CUT P95 LATENCY",
    objective: "Performance как cross-cutting mission.",
    chain: [
      "MEASURE",
      "FRONTEND",
      "API",
      "DATABASE",
      "CACHE",
      "INFRA",
      "VERIFY",
      "MONITOR",
    ],
    lesson: "Never optimize blindly — сначала bottleneck.",
  },
];

export const architectureGym: readonly GymScenario[] = [
  {
    id: "gym-100",
    users: "100 users",
    constraints: ["Small team", "Fast delivery", "Low budget"],
    reconsider: ["Simple monolith OK", "Managed DB", "Basic monitoring"],
    advantages: ["Speed", "Low complexity", "Easy reasoning"],
    risks: ["Later rewrite pressure", "Weak failure practice"],
    complexity: "Low",
    cost: "Low",
  },
  {
    id: "gym-10k",
    users: "10 000 users",
    constraints: ["Growth", "Need caching", "CI/CD required"],
    reconsider: ["Caching", "Read replicas?", "Queues for email/jobs", "CDN"],
    advantages: ["Still understandable", "Targeted scale"],
    risks: ["Premature microservices", "Cache invalidation bugs"],
    complexity: "Medium",
    cost: "Medium",
  },
  {
    id: "gym-1m",
    users: "1 000 000 users",
    constraints: ["Availability", "Cost control", "Multi-region pressure"],
    reconsider: [
      "Load balancing",
      "Consistency trade-offs",
      "Queues/events",
      "Observability maturity",
      "Security blast radius",
    ],
    advantages: ["Handles load", "Clear failure domains"],
    risks: ["High complexity", "Ops cost", "Harder local reasoning"],
    complexity: "High",
    cost: "High",
  },
];

export const tradeOffs: readonly TradeOff[] = [
  {
    id: "rest-graphql",
    title: "REST vs GraphQL",
    optionA: "REST",
    optionB: "GraphQL",
    axes: [
      { name: "COMPLEXITY", a: 35, b: 70 },
      { name: "COST", a: 40, b: 65 },
      { name: "SPEED", a: 75, b: 55 },
      { name: "SCALABILITY", a: 70, b: 75 },
      { name: "RELIABILITY", a: 70, b: 65 },
      { name: "MAINTENANCE", a: 60, b: 55 },
      { name: "RISK", a: 40, b: 60 },
    ],
    note: "Нет единственного правильного выбора — зависит от clients и team.",
  },
  {
    id: "sql-nosql",
    title: "SQL vs NoSQL",
    optionA: "SQL",
    optionB: "NoSQL",
    axes: [
      { name: "COMPLEXITY", a: 45, b: 55 },
      { name: "COST", a: 50, b: 55 },
      { name: "SPEED", a: 60, b: 70 },
      { name: "SCALABILITY", a: 65, b: 80 },
      { name: "RELIABILITY", a: 80, b: 60 },
      { name: "MAINTENANCE", a: 70, b: 50 },
      { name: "RISK", a: 35, b: 55 },
    ],
    note: "Integrity vs flexibility — зафиксируй access patterns сначала.",
  },
  {
    id: "mono-micro",
    title: "Monolith vs Microservices",
    optionA: "Monolith",
    optionB: "Microservices",
    axes: [
      { name: "COMPLEXITY", a: 30, b: 85 },
      { name: "COST", a: 35, b: 80 },
      { name: "SPEED", a: 80, b: 45 },
      { name: "SCALABILITY", a: 55, b: 90 },
      { name: "RELIABILITY", a: 60, b: 70 },
      { name: "MAINTENANCE", a: 55, b: 40 },
      { name: "RISK", a: 40, b: 75 },
    ],
    note: "Микросервисы — за организационную и failure-domain цену.",
  },
  {
    id: "sync-async",
    title: "Sync vs Async",
    optionA: "Sync",
    optionB: "Async",
    axes: [
      { name: "COMPLEXITY", a: 30, b: 75 },
      { name: "COST", a: 40, b: 65 },
      { name: "SPEED", a: 70, b: 60 },
      { name: "SCALABILITY", a: 50, b: 85 },
      { name: "RELIABILITY", a: 55, b: 70 },
      { name: "MAINTENANCE", a: 70, b: 45 },
      { name: "RISK", a: 35, b: 60 },
    ],
    note: "Async нужен, когда sync latency/coupling уже болит.",
  },
  {
    id: "single-multi-agent",
    title: "Single Agent vs Multi-Agent",
    optionA: "Single Agent",
    optionB: "Multi-Agent",
    axes: [
      { name: "COMPLEXITY", a: 35, b: 80 },
      { name: "COST", a: 40, b: 75 },
      { name: "SPEED", a: 65, b: 55 },
      { name: "SCALABILITY", a: 50, b: 75 },
      { name: "RELIABILITY", a: 55, b: 50 },
      { name: "MAINTENANCE", a: 65, b: 40 },
      { name: "RISK", a: 40, b: 70 },
    ],
    note: "Специализация агентов оправдана только с contracts и verification.",
  },
];

export const sampleDecisions: readonly DecisionRecord[] = [
  {
    id: "014",
    problem: "Как организовать API?",
    options: ["REST", "GraphQL", "tRPC"],
    decision: "REST for public API + GraphQL for complex product UI reads",
    why: "Public clients need stable resources; UI needs flexible queries.",
    tradeOffs: "Two styles to maintain; clearer boundaries per client type.",
    result: "Documented contracts; no forced one-size-fits-all.",
  },
  {
    id: "021",
    problem: "Когда вводить queues?",
    options: ["Stay sync", "Background jobs", "Full event bus"],
    decision: "Background jobs for email/webhooks only",
    why: "Pain is latency on side-effects, not domain decoupling yet.",
    tradeOffs: "Less elegant than events; much less complexity.",
    result: "P95 improved; architecture stayed teachable.",
  },
];

export const aiDomainLayers: readonly AiDomainLayer[] = [
  {
    domain: "Database",
    howAiHelps: [
      "Draft SQL",
      "Propose schema",
      "Explain plans",
      "Draft migrations",
    ],
    whatAiCanExecute: [
      "Generate queries",
      "Suggest indexes",
      "Write migration files",
    ],
    humanMustVerify: [
      "Correctness",
      "Integrity",
      "Performance",
      "Migration risks",
    ],
    aiShouldNotDecide: [
      "Irreversible data deletion",
      "Prod migration without approval",
    ],
    canAutomate: ["Schema lint", "Migration dry-run checks"],
  },
  {
    domain: "Frontend",
    howAiHelps: ["Components", "A11y review", "Perf hypotheses", "Tests"],
    whatAiCanExecute: ["Scaffold UI", "Refactor", "Generate stories/tests"],
    humanMustVerify: ["UX intent", "States", "A11y", "Bundle impact"],
    aiShouldNotDecide: [
      "Product copy that changes meaning",
      "Removing critical flows",
    ],
    canAutomate: ["Lint", "Visual regression", "Bundle budgets"],
  },
  {
    domain: "Security",
    howAiHelps: ["Threat checklists", "Explain vulns", "Review diffs"],
    whatAiCanExecute: ["Scan suggestions", "Draft policy text"],
    humanMustVerify: ["Authz model", "Secrets", "High-risk changes"],
    aiShouldNotDecide: [
      "Production access grants",
      "Skip human on auth changes",
    ],
    canAutomate: ["Dependency scanning", "Secret detection"],
  },
  {
    domain: "DevOps",
    howAiHelps: ["CI drafts", "Incident checklists", "Dockerfile review"],
    whatAiCanExecute: ["Pipeline YAML", "Runbook stubs"],
    humanMustVerify: ["Secrets isolation", "Rollback", "Blast radius"],
    aiShouldNotDecide: ["Prod promote without smoke", "Infra destroy"],
    canAutomate: ["Smoke tests", "Health checks"],
  },
];

export const mapLayers: readonly MapLayer[] = [
  { id: "product", label: "PRODUCT" },
  { id: "ux", label: "UX/UI" },
  { id: "frontend", label: "FRONTEND" },
  { id: "backend", label: "BACKEND" },
  { id: "database", label: "DATABASE" },
  { id: "devops", label: "DEVOPS" },
  { id: "security", label: "SECURITY" },
  { id: "quality", label: "QUALITY" },
  { id: "performance", label: "PERFORMANCE" },
  { id: "observability", label: "OBSERVABILITY" },
  { id: "ai", label: "AI" },
  { id: "automation", label: "AUTOMATION" },
];

export const spineProject: readonly SpineStage[] = [
  {
    phase: "foundation",
    title: "Spine · Phase I MVP",
    steps: [
      "Idea",
      "UX",
      "MVP",
      "Frontend",
      "Backend",
      "DB",
      "API",
      "Tests",
      "Deploy",
    ],
  },
  {
    phase: "integration",
    title: "Spine · Phase II Production",
    steps: [
      "Architecture",
      "Security",
      "Performance",
      "CI/CD",
      "Observability",
      "Analytics",
      "Production",
    ],
  },
  {
    phase: "engineering",
    title: "Spine · Phase III System",
    steps: [
      "Scale",
      "AI",
      "Agents",
      "Automation",
      "Product iteration",
      "Engineering OS",
    ],
  },
];

export const durableConcepts = [
  "HTTP",
  "SQL",
  "Caching",
  "Architecture",
  "Testing",
  "Security",
  "Distributed Systems",
  "Observability",
] as const;

export const volatileTools = [
  "Next.js",
  "AWS service X",
  "Framework Y",
  "AI model Z",
  "Cursor",
  "MCP tool X",
] as const;

export const learningLoop = [
  "NEW TECHNOLOGY",
  "READ DOCUMENTATION",
  "ASK AI",
  "SMALL PROTOTYPE",
  "BREAK IT",
  "COMPARE",
  "REAL FEATURE",
  "VERIFY",
  "DOCUMENT",
  "INTEGRATE",
] as const;

export const unknownZone = [
  { id: "known", label: "KNOWN", coverage: 70 },
  { id: "learning", label: "LEARNING", coverage: 55 },
  { id: "unknown", label: "UNKNOWN", coverage: 35 },
  { id: "emerging", label: "EMERGING", coverage: 20 },
  { id: "future", label: "FUTURE", coverage: 10 },
] as const;

export const riskAutonomy = [
  { task: "Documentation", autonomy: "high autonomy" },
  { task: "Code suggestion", autonomy: "medium autonomy" },
  { task: "Production database migration", autonomy: "strict human approval" },
  { task: "Auth/permission changes", autonomy: "strict human approval" },
  { task: "Routine refactors with tests", autonomy: "medium autonomy" },
] as const;

export const agentArenaDefault = [
  "HUMAN",
  "PRODUCT AGENT",
  "ARCHITECT AGENT",
  "IMPLEMENTATION AGENT",
  "QA AGENT",
  "SECURITY AGENT",
  "REVIEW AGENT",
  "HUMAN APPROVAL",
  "DEPLOYMENT",
] as const;

export const agentEvals = [
  "test scenarios",
  "golden tasks",
  "regression tests",
  "tool-use validation",
  "output validation",
  "failure cases",
  "cost",
  "latency",
  "reliability",
] as const;

export const aiObservability = [
  "AGENT",
  "PROMPT",
  "CONTEXT",
  "TOOL CALL",
  "RESULT",
  "NEXT STEP",
  "FINAL OUTPUT",
] as const;

export const labNav = [
  {
    id: "loop",
    href: "/loop",
    label: "Engineering Loop",
    blurb: "Interactive cycle",
  },
  {
    id: "labs",
    href: "/labs",
    label: "System Labs",
    blurb: "Gym · Failure · Trade-offs · Arena",
  },
] as const;
