export const foundationProject = {
  title: 'FOUNDATION PROJECT',
  subtitle: 'Небольшой production-like продукт, решающий реальную проблему — не CRUD ради CRUD.',
  requirements: [
    {
      area: 'Product',
      items: ['problem', 'target user', 'value proposition', 'requirements', 'scope', 'MVP'],
    },
    {
      area: 'UX',
      items: [
        'user flows',
        'information architecture',
        'responsive UI',
        'accessibility basics',
        'empty/loading/error states',
      ],
    },
    {
      area: 'Frontend',
      items: [
        'Next.js',
        'TypeScript',
        'reusable components',
        'state management',
        'data fetching',
        'performance',
      ],
    },
    {
      area: 'Backend',
      items: ['API', 'business logic', 'validation', 'authentication'],
    },
    {
      area: 'Database',
      items: ['PostgreSQL', 'schema', 'relations', 'indexes', 'migrations'],
    },
    {
      area: 'API',
      items: ['REST', 'GraphQL', 'аргументированный выбор подходов'],
    },
    {
      area: 'QA',
      items: ['unit', 'integration', 'E2E', 'manual exploratory'],
    },
    {
      area: 'Security',
      items: ['базовый security review'],
    },
    {
      area: 'DevOps',
      items: ['Git', 'CI', 'build', 'deploy', 'env vars', 'production-like env'],
    },
    {
      area: 'Monitoring',
      items: ['errors', 'logs', 'basic performance metrics'],
    },
    {
      area: 'Analytics',
      items: [
        'Users',
        'Activation',
        'Retention',
        'Feature usage',
        'Conversion',
        'Errors',
        'Performance',
      ],
    },
  ],
  aiCollaboration: [
    { actor: 'Human', action: 'Define Problem' },
    { actor: 'AI', action: 'Research' },
    { actor: 'Human', action: 'Validate Research' },
    { actor: 'AI', action: 'Draft Requirements' },
    { actor: 'Human', action: 'Approve' },
    { actor: 'AI', action: 'Architecture Options' },
    { actor: 'Human', action: 'Choose Architecture' },
    { actor: 'AI', action: 'Implementation' },
    { actor: 'Human', action: 'Review' },
    { actor: 'AI', action: 'Tests' },
    { actor: 'Human', action: 'Verify' },
    { actor: 'AI', action: 'Debug' },
    { actor: 'AI', action: 'Documentation' },
    { actor: 'Human', action: 'Final Acceptance' },
  ],
} as const;

export const verificationLoop = [
  'GENERATE',
  'UNDERSTAND',
  'VERIFY',
  'TEST',
  'MEASURE',
  'ACCEPT',
] as const;

export const automationLadder = [
  'MANUAL WORK',
  'REUSABLE SCRIPT',
  'AUTOMATION',
  'AI ASSISTANT',
  'AI AGENT',
  'MULTI-AGENT WORKFLOW',
  'AUTONOMOUS SYSTEM',
] as const;

export const aiLevels = [
  {
    level: 1,
    title: 'AI as Tutor',
    uses: [
      'объяснения',
      'обучение',
      'сравнение технологий',
      'поиск ошибок',
      'примеры',
      'вопросы',
      'исследование',
    ],
  },
  {
    level: 2,
    title: 'AI as Coding Assistant',
    uses: ['код', 'компоненты', 'рефакторинг', 'тесты', 'объяснение кода'],
  },
  {
    level: 3,
    title: 'AI as Agent',
    uses: ['Task', 'Context', 'Constraints', 'Expected Result → цепочка операций'],
  },
  {
    level: 4,
    title: 'Agent Supervision',
    uses: ['Define', 'Delegate', 'Review', 'Verify', 'Correct', 'Approve'],
  },
] as const;

export const engineerWorkflow = [
  'IDEA',
  'PROBLEM',
  'DECOMPOSITION',
  'REQUIREMENTS',
  'ARCHITECTURE',
  'IMPLEMENTATION',
  'TESTING',
  'DEPLOYMENT',
  'MONITORING',
  'ANALYSIS',
  'IMPROVEMENT',
] as const;

export const aiWorkflowLayer = [
  'AI RESEARCH',
  'AI PLANNING',
  'AI CODING',
  'AI TESTING',
  'AI DEBUGGING',
  'AI DOCUMENTATION',
  'AI ANALYSIS',
] as const;

export const evolutionModels = [
  {
    id: 'specialist',
    title: 'Specialist',
    steps: ['Receives task', 'Solves assigned area', 'Hands off'],
  },
  {
    id: 'engineer',
    title: 'Engineer',
    steps: [
      'Understands problem',
      'Defines system',
      'Coordinates disciplines',
      'Builds',
      'Tests',
      'Deploys',
      'Measures',
      'Improves',
    ],
  },
  {
    id: 'ai-augmented',
    title: 'AI-Augmented Engineer',
    steps: ['Understands', 'Delegates', 'Supervises', 'Verifies', 'Automates', 'Optimizes'],
  },
] as const;

export const securityFlow = [
  'INPUT',
  'TRUST?',
  'VALIDATE',
  'SANITIZE',
  'AUTHORIZE',
  'EXECUTE',
] as const;

export const qaPyramid = ['E2E', 'Integration', 'Unit'] as const;

export const observabilityLoop = [
  'Logs',
  'Metrics',
  'Errors',
  'Tracing',
  'Understand',
  'Improve',
] as const;

export const stackLayers = [
  'USER EXPERIENCE',
  'UX/UI',
  'NEXT.JS / REACT',
  'HTTP / API',
  'BACKEND',
  'POSTGRESQL',
  'CACHE',
  'INFRASTRUCTURE',
  'DEPLOYMENT',
  'MONITORING',
  'ANALYTICS',
] as const;

export const aiStackLayer = [
  'Research',
  'Planning',
  'Coding',
  'Testing',
  'Debugging',
  'Documentation',
  'Analysis',
  'Automation',
] as const;

export const technologyMap = {
  Frontend: [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Accessibility',
    'Performance',
    'Testing',
  ],
  Backend: ['HTTP', 'Node.js', 'REST', 'GraphQL', 'Authentication', 'Validation', 'Caching'],
  Database: ['SQL', 'PostgreSQL', 'Data modelling', 'Indexes', 'Transactions', 'Migrations'],
  DevOps: ['Git', 'Docker', 'CI/CD', 'Cloud', 'AWS', 'Deployment', 'Monitoring'],
} as const;
