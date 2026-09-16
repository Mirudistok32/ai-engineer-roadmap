import type { Month } from '../types';

/** Months 7–12 of the overall roadmap (Phase II). */
export const integrationMonths: readonly Month[] = [
  {
    id: 'month-7',
    number: 1,
    title: 'System Thinking',
    goal: 'Видеть систему: boundaries, modules, interfaces, failure domains — не «ещё одну технологию».',
    themes: [
      {
        title: 'System Boundaries',
        topics: [
          'modules',
          'services',
          'responsibilities',
          'interfaces',
          'dependencies',
          'external systems',
          'failure boundaries',
        ],
      },
      {
        title: 'Architectural Trade-offs',
        topics: ['scale', 'budget', 'reliability', 'speed', 'maintainability', 'complexity'],
      },
      {
        title: 'Decision craft',
        topics: ['SIMPLE vs FLEXIBLE', 'SCALABLE vs FAST TO BUILD', 'CHEAP TO OPERATE'],
      },
    ],
    output: 'Спроектировать архитектуру SaaS: AI предлагает 3 варианта — инженер выбирает.',
    missionIds: ['int-mission-01'],
  },
  {
    id: 'month-8',
    number: 2,
    title: 'Production Backend + Data',
    goal: 'Backend и данные как часть production-системы, не учебный CRUD.',
    themes: [
      {
        title: 'Backend Architecture',
        topics: [
          'modular backend',
          'service boundaries',
          'domain logic',
          'repositories',
          'DTO',
          'validation',
          'error strategy',
          'logging',
          'observability',
        ],
      },
      {
        title: 'Database Engineering',
        topics: [
          'query planning',
          'indexes',
          'transactions',
          'isolation',
          'locks',
          'migrations',
          'constraints',
          'integrity',
        ],
      },
      {
        title: 'Performance + Cache + Async',
        topics: [
          'slow request triage',
          'client/server/distributed cache',
          'invalidation',
          'TTL',
          'queues',
          'workers',
          'idempotency',
        ],
      },
    ],
    output: 'Объяснить, когда sync уже мало и где живёт bottleneck.',
    missionIds: ['int-mission-02'],
  },
  {
    id: 'month-9',
    number: 3,
    title: 'Production Frontend + UX System',
    goal: 'Самый глубокий frontend-блок первой половины roadmap — architecture + design system + UX metrics.',
    themes: [
      {
        title: 'Frontend Architecture',
        topics: [
          'state boundaries',
          'server/client',
          'fetching',
          'caching',
          'errors',
          'loading',
          'optimistic updates',
          'forms',
        ],
      },
      {
        title: 'Design System Engineering',
        topics: ['tokens', 'primitives', 'components', 'patterns', 'pages', 'a11y', 'variants'],
      },
      {
        title: 'UX + Performance',
        topics: [
          'user goal → metric',
          'hydration',
          'bundle',
          'code splitting',
          'CWV',
          'images/fonts',
        ],
      },
    ],
    output: 'Связать UX-решение с user goal и измеримым feedback.',
    missionIds: ['int-mission-02'],
  },
  {
    id: 'month-10',
    number: 4,
    title: 'Quality Engineering',
    goal: 'Качество встроено в lifecycle — не финальная фаза «потом протестируем».',
    themes: [
      {
        title: 'Quality Pipeline',
        topics: [
          'requirements',
          'design review',
          'unit',
          'integration',
          'E2E',
          'security',
          'performance',
          'monitoring',
        ],
      },
      {
        title: 'Modern quality stack',
        topics: [
          'tests',
          'static analysis',
          'lint',
          'types',
          'contracts',
          'security scanning',
          'monitoring',
        ],
      },
      {
        title: 'AI QA Agent',
        topics: ['test plan', 'generate tests', 'run', 'inspect failures', 'quality report'],
      },
    ],
    output: 'Получать quality report, а не только stack trace.',
    missionIds: ['int-mission-03'],
  },
  {
    id: 'month-11',
    number: 5,
    title: 'DevOps + Cloud + Observability',
    goal: 'Deployment как система: pipeline, infra map, logs/metrics/traces, incident loop.',
    themes: [
      {
        title: 'CI/CD',
        topics: [
          'lint',
          'typecheck',
          'unit',
          'integration',
          'build',
          'security check',
          'deploy',
          'smoke',
        ],
      },
      {
        title: 'Infrastructure',
        topics: [
          'compute',
          'storage',
          'networking',
          'DNS',
          'CDN',
          'secrets',
          'IAM',
          'environments',
        ],
      },
      {
        title: 'Observability + Incidents',
        topics: ['logs', 'metrics', 'traces', 'alerts', 'Detect→Prevent'],
      },
    ],
    output: 'Productionize: Docker, CI/CD, monitoring, alerts.',
    missionIds: ['int-mission-04'],
  },
  {
    id: 'month-12',
    number: 6,
    title: 'Product System + AI Orchestration',
    goal: 'Product + Engineering + AI: метрики, agent team, automation, Product v2.',
    themes: [
      {
        title: 'Product Engineering Loop',
        topics: [
          'problem',
          'hypothesis',
          'MVP',
          'implementation',
          'measurement',
          'learning',
          'iteration',
        ],
      },
      {
        title: 'Product Metrics',
        topics: ['north star', 'activation', 'retention', 'conversion', 'funnel', 'cohorts'],
      },
      {
        title: 'Agent Orchestration',
        topics: ['contracts', 'handoffs', 'context engineering', 'verification 2.0', 'boundaries'],
      },
    ],
    output: 'Собрать надёжный multi-agent workflow без «агенты ломают друг другу систему».',
    missionIds: ['int-mission-05', 'int-capstone'],
  },
] as const;
