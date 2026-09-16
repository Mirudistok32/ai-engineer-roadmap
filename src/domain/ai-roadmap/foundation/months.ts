import type { Month } from '../types';

export const foundationMonths: readonly Month[] = [
  {
    id: 'month-1',
    number: 1,
    title: 'Engineering Mindset',
    goal: 'Перестать смотреть на разработку как на написание кода.',
    themes: [
      {
        title: 'Problem Solving',
        topics: [
          'формулировка проблемы',
          'decomposition',
          'constraints',
          'assumptions',
          'root cause',
        ],
      },
      {
        title: 'Product Thinking',
        topics: ['user', 'problem', 'value', 'requirements', 'MVP', 'trade-offs'],
      },
      {
        title: 'Technical Thinking',
        topics: ['systems', 'components', 'dependencies', 'interfaces', 'data flow'],
      },
      {
        title: 'AI',
        topics: [
          'prompting',
          'context',
          'verification',
          'hallucinations',
          'AI-assisted research',
          'AI-assisted learning',
        ],
      },
      {
        title: 'Git',
        topics: ['branches', 'commits', 'merge', 'pull requests', 'history', 'rollback'],
      },
    ],
    output: 'Взять абстрактную идею и превратить её в структурированную техническую задачу.',
    missionIds: ['mission-spec'],
    bossMissionId: 'boss-01',
  },
  {
    id: 'month-2',
    number: 2,
    title: 'Web & Application Foundation',
    goal: 'Понять, что происходит между браузером, сервером, сетью и приложением.',
    themes: [
      {
        title: 'HTTP',
        topics: [
          'request/response',
          'methods',
          'headers',
          'status codes',
          'cookies',
          'caching',
          'auth basics',
        ],
      },
      {
        title: 'Browser',
        topics: ['rendering', 'DOM', 'CSS', 'JS runtime', 'network', 'storage'],
      },
      {
        title: 'Networking',
        topics: ['DNS', 'TCP/IP basics', 'TLS', 'CDN', 'proxy'],
      },
      {
        title: 'Frontend (deep)',
        topics: [
          'JavaScript',
          'TypeScript',
          'React',
          'Next.js',
          'rendering models',
          'state',
          'data fetching',
          'performance',
        ],
      },
    ],
    output: 'Объяснить путь запроса от UI до сети и обратно — без магии фреймворка.',
    missionIds: ['mission-http-trace'],
  },
  {
    id: 'month-3',
    number: 3,
    title: 'Backend + API + Database',
    goal: 'Собрать рабочую вертикаль Client → API → Server → Database.',
    themes: [
      {
        title: 'Backend',
        topics: [
          'server',
          'runtime',
          'routes',
          'services',
          'validation',
          'errors',
          'authentication',
          'authorization',
        ],
      },
      {
        title: 'REST',
        topics: [
          'resource modelling',
          'endpoints',
          'pagination',
          'filtering',
          'sorting',
          'versioning',
        ],
      },
      {
        title: 'GraphQL',
        topics: ['schema', 'query', 'mutation', 'resolver', 'trade-offs'],
      },
      {
        title: 'PostgreSQL',
        topics: [
          'tables',
          'relations',
          'keys',
          'indexes',
          'joins',
          'transactions',
          'normalization',
          'migrations',
        ],
      },
      {
        title: 'Caching',
        topics: ['why cache', 'invalidation', 'client/server cache', 'Redis concept'],
      },
    ],
    output: 'Объяснить зачем существует каждый слой своей учебной системы.',
    missionIds: ['mission-rest-api'],
    bossMissionId: 'boss-02',
  },
  {
    id: 'month-4',
    number: 4,
    title: 'Architecture + UX/UI + QA',
    goal: 'Соединить техническую и пользовательскую стороны продукта.',
    themes: [
      {
        title: 'Architecture',
        topics: ['SoC', 'modularity', 'coupling', 'cohesion', 'boundaries', 'layers', 'trade-offs'],
      },
      {
        title: 'UX/UI',
        topics: [
          'user flow',
          'cognitive load',
          'hierarchy',
          'design systems',
          'accessibility',
          'states',
        ],
      },
      {
        title: 'QA',
        topics: ['test cases', 'edge cases', 'unit', 'integration', 'E2E', 'exploratory', 'mocks'],
      },
    ],
    output: 'Спроектировать границы системы и проверить её глазами QA.',
    missionIds: ['mission-architecture', 'mission-qa-matrix'],
    bossMissionId: 'boss-03',
  },
  {
    id: 'month-5',
    number: 5,
    title: 'DevOps + Security + Performance',
    goal: 'Доставить продукт безопасно и измеримо.',
    themes: [
      {
        title: 'DevOps',
        topics: ['Docker', 'CI/CD', 'environments', 'secrets', 'cloud map', 'monitoring'],
      },
      {
        title: 'Security',
        topics: [
          'auth',
          'sessions/tokens',
          'OWASP mindset',
          'XSS/CSRF/SQLi',
          'CORS',
          'dependency vulns',
        ],
      },
      {
        title: 'Performance',
        topics: ['CWV', 'bundle', 'caching', 'N+1', 'latency', 'measure loop'],
      },
    ],
    output: 'Задеплоить, проверить security basics и измерить узкие места.',
    missionIds: ['mission-deploy', 'mission-security-review'],
    bossMissionId: 'boss-05',
  },
  {
    id: 'month-6',
    number: 6,
    title: 'Full Product Engineering',
    goal: 'Пройти полный lifecycle одной небольшой продуктовой идеи.',
    themes: [
      {
        title: 'End-to-end product',
        topics: [
          'problem',
          'product',
          'requirements',
          'UX',
          'architecture',
          'frontend',
          'backend',
          'database',
          'API',
          'auth',
          'testing',
          'security',
          'performance',
          'deployment',
          'monitoring',
          'analytics',
        ],
      },
    ],
    output: 'Самостоятельно создать небольшой production-like продукт с AI как помощником.',
    missionIds: ['mission-foundation-project'],
    bossMissionId: 'boss-final',
  },
] as const;
