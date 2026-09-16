export const foundationProject = {
  title: 'FOUNDATION PROJECT',
  subtitle:
    'Небольшой production-like продукт, решающий реальную проблему — не CRUD ради CRUD.',
  requirements: [
    {
      area: 'Продукт',
      items: [
        'проблема',
        'целевой пользователь',
        'value proposition',
        'требования',
        'scope',
        'MVP',
      ],
    },
    {
      area: 'UX',
      items: [
        'user flows',
        'информационная архитектура',
        'адаптивный UI',
        'основы accessibility',
        'состояния empty/loading/error',
      ],
    },
    {
      area: 'Frontend',
      items: [
        'Next.js',
        'TypeScript',
        'переиспользуемые компоненты',
        'управление state',
        'data fetching',
        'performance',
      ],
    },
    {
      area: 'Backend',
      items: ['API', 'бизнес-логика', 'validation', 'authentication'],
    },
    {
      area: 'База данных',
      items: ['PostgreSQL', 'schema', 'связи', 'индексы', 'миграции'],
    },
    {
      area: 'API',
      items: ['REST', 'GraphQL', 'аргументированный выбор подходов'],
    },
    {
      area: 'QA',
      items: ['unit', 'integration', 'E2E', 'ручной exploratory'],
    },
    {
      area: 'Безопасность',
      items: ['базовый security review'],
    },
    {
      area: 'DevOps',
      items: [
        'Git',
        'CI',
        'build',
        'deploy',
        'env vars',
        'production-like среда',
      ],
    },
    {
      area: 'Мониторинг',
      items: ['ошибки', 'логи', 'базовые метрики performance'],
    },
    {
      area: 'Аналитика',
      items: [
        'Пользователи',
        'Activation',
        'Retention',
        'Использование фич',
        'Conversion',
        'Ошибки',
        'Performance',
      ],
    },
  ],
  aiCollaboration: [
    { actor: 'Человек', action: 'Определить проблему' },
    { actor: 'AI', action: 'Исследование' },
    { actor: 'Человек', action: 'Проверить исследование' },
    { actor: 'AI', action: 'Черновик требований' },
    { actor: 'Человек', action: 'Утвердить' },
    { actor: 'AI', action: 'Варианты архитектуры' },
    { actor: 'Человек', action: 'Выбрать архитектуру' },
    { actor: 'AI', action: 'Реализация' },
    { actor: 'Человек', action: 'Ревью' },
    { actor: 'AI', action: 'Тесты' },
    { actor: 'Человек', action: 'Проверить' },
    { actor: 'AI', action: 'Отладка' },
    { actor: 'AI', action: 'Документация' },
    { actor: 'Человек', action: 'Финальная приёмка' },
  ],
} as const;

export const verificationLoop = [
  'СГЕНЕРИРОВАТЬ',
  'ПОНЯТЬ',
  'ПРОВЕРИТЬ',
  'ПРОТЕСТИРОВАТЬ',
  'ИЗМЕРИТЬ',
  'ПРИНЯТЬ',
] as const;

export const automationLadder = [
  'РУЧНАЯ РАБОТА',
  'ПЕРЕИСПОЛЬЗУЕМЫЙ СКРИПТ',
  'АВТОМАТИЗАЦИЯ',
  'AI-АССИСТЕНТ',
  'AI-АГЕНТ',
  'MULTI-AGENT WORKFLOW',
  'АВТОНОМНАЯ СИСТЕМА',
] as const;

export const aiLevels = [
  {
    level: 1,
    title: 'AI как наставник',
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
    title: 'AI как coding assistant',
    uses: ['код', 'компоненты', 'рефакторинг', 'тесты', 'объяснение кода'],
  },
  {
    level: 3,
    title: 'AI как агент',
    uses: [
      'Task',
      'Context',
      'Constraints',
      'Expected Result → цепочка операций',
    ],
  },
  {
    level: 4,
    title: 'Супервизия агента',
    uses: ['Define', 'Delegate', 'Review', 'Verify', 'Correct', 'Approve'],
  },
] as const;

export const engineerWorkflow = [
  'ИДЕЯ',
  'ПРОБЛЕМА',
  'ДЕКОМПОЗИЦИЯ',
  'ТРЕБОВАНИЯ',
  'АРХИТЕКТУРА',
  'РЕАЛИЗАЦИЯ',
  'ТЕСТИРОВАНИЕ',
  'ДЕПЛОЙ',
  'МОНИТОРИНГ',
  'АНАЛИЗ',
  'УЛУЧШЕНИЕ',
] as const;

export const aiWorkflowLayer = [
  'AI-ИССЛЕДОВАНИЕ',
  'AI-ПЛАНИРОВАНИЕ',
  'AI-КОД',
  'AI-ТЕСТЫ',
  'AI-ОТЛАДКА',
  'AI-ДОКУМЕНТАЦИЯ',
  'AI-АНАЛИЗ',
] as const;

export const evolutionModels = [
  {
    id: 'specialist',
    title: 'Специалист',
    steps: ['Получает задачу', 'Решает свою зону', 'Передаёт дальше'],
  },
  {
    id: 'engineer',
    title: 'Инженер',
    steps: [
      'Понимает проблему',
      'Определяет систему',
      'Координирует дисциплины',
      'Строит',
      'Тестирует',
      'Деплоит',
      'Измеряет',
      'Улучшает',
    ],
  },
  {
    id: 'ai-augmented',
    title: 'AI-Augmented Engineer',
    steps: [
      'Понимает',
      'Делегирует',
      'Супервизит',
      'Проверяет',
      'Автоматизирует',
      'Оптимизирует',
    ],
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
  'Логи',
  'Метрики',
  'Ошибки',
  'Tracing',
  'Понять',
  'Улучшить',
] as const;

export const stackLayers = [
  'ПОЛЬЗОВАТЕЛЬСКИЙ ОПЫТ',
  'UX/UI',
  'NEXT.JS / REACT',
  'HTTP / API',
  'BACKEND',
  'POSTGRESQL',
  'КЭШ',
  'ИНФРАСТРУКТУРА',
  'ДЕПЛОЙ',
  'МОНИТОРИНГ',
  'АНАЛИТИКА',
] as const;

export const aiStackLayer = [
  'Исследование',
  'Планирование',
  'Код',
  'Тестирование',
  'Отладка',
  'Документация',
  'Анализ',
  'Автоматизация',
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
    'Тестирование',
  ],
  Backend: [
    'HTTP',
    'Node.js',
    'REST',
    'GraphQL',
    'Authentication',
    'Validation',
    'Кэширование',
  ],
  'База данных': [
    'SQL',
    'PostgreSQL',
    'Моделирование данных',
    'Индексы',
    'Транзакции',
    'Миграции',
  ],
  DevOps: ['Git', 'Docker', 'CI/CD', 'Cloud', 'AWS', 'Деплой', 'Мониторинг'],
} as const;
