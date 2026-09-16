import type {
  AiDomainLayer,
  CrossMission,
  DecisionRecord,
  DomainResponsibility,
  GymScenario,
  MapLayer,
  SpineStage,
  TradeOff,
} from './types';

export const responsibilityProgression: readonly DomainResponsibility[] = [
  {
    domain: 'Backend',
    foundation: ['understand', 'use'],
    integration: ['build', 'verify'],
    engineering: ['design', 'optimize', 'automate'],
  },
  {
    domain: 'Frontend',
    foundation: ['build', 'verify'],
    integration: ['design', 'optimize'],
    engineering: ['design', 'orchestrate'],
  },
  {
    domain: 'AI',
    foundation: ['use'],
    integration: ['orchestrate'],
    engineering: ['design', 'automate', 'orchestrate'],
  },
  {
    domain: 'База данных',
    foundation: ['understand', 'use'],
    integration: ['build', 'optimize'],
    engineering: ['design', 'automate'],
  },
  {
    domain: 'Architecture',
    foundation: ['understand'],
    integration: ['design', 'verify'],
    engineering: ['design', 'optimize', 'orchestrate'],
  },
  {
    domain: 'Безопасность',
    foundation: ['understand', 'use'],
    integration: ['verify', 'build'],
    engineering: ['design', 'automate'],
  },
];

export const crossMissions: readonly CrossMission[] = [
  {
    id: 'add-subscription',
    title: 'ДОБАВИТЬ ПОДПИСКУ',
    objective: 'Одна feature request связывает почти все дисциплины.',
    chain: [
      'PRODUCT',
      'UX',
      'DATABASE',
      'BACKEND',
      'API',
      'FRONTEND',
      'SECURITY',
      'PAYMENT',
      'TESTING',
      'ANALYTICS',
      'MONITORING',
    ],
    lesson: 'Реальная задача почти никогда не принадлежит одной технологии.',
  },
  {
    id: 'add-team-invite',
    title: 'ДОБАВИТЬ ПРИГЛАШЕНИЕ В КОМАНДУ',
    objective: 'Authz + email + UX empty states + audit log.',
    chain: [
      'PRODUCT',
      'UX',
      'AUTH',
      'BACKEND',
      'FRONTEND',
      'SECURITY',
      'TESTING',
      'НАБЛЮДАЕМОСТЬ',
    ],
    lesson: 'Permissions и edge cases важнее «кнопки Invite».',
  },
  {
    id: 'cut-p95-latency',
    title: 'СНИЗИТЬ P95 LATENCY',
    objective: 'Performance как cross-cutting mission.',
    chain: [
      'MEASURE',
      'FRONTEND',
      'API',
      'DATABASE',
      'CACHE',
      'INFRA',
      'VERIFY',
      'MONITOR',
    ],
    lesson: 'Никогда не оптимизируй вслепую — сначала bottleneck.',
  },
];

export const architectureGym: readonly GymScenario[] = [
  {
    id: 'gym-100',
    users: '100 пользователей',
    constraints: ['Маленькая команда', 'Быстрая поставка', 'Низкий бюджет'],
    reconsider: ['Простой monolith OK', 'Managed DB', 'Базовый monitoring'],
    advantages: ['Скорость', 'Низкая сложность', 'Легко рассуждать'],
    risks: ['Давление на rewrite позже', 'Слабая практика отказов'],
    complexity: 'Низкая',
    cost: 'Низкая',
  },
  {
    id: 'gym-10k',
    users: '10 000 пользователей',
    constraints: ['Рост', 'Нужен caching', 'CI/CD обязателен'],
    reconsider: ['Caching', 'Read replicas?', 'Очереди для email/jobs', 'CDN'],
    advantages: ['Всё ещё понятно', 'Целевой scale'],
    risks: ['Преждевременные microservices', 'Баги инвалидации cache'],
    complexity: 'Средняя',
    cost: 'Средняя',
  },
  {
    id: 'gym-1m',
    users: '1 000 000 пользователей',
    constraints: ['Доступность', 'Контроль стоимости', 'Давление multi-region'],
    reconsider: [
      'Load balancing',
      'Trade-offs консистентности',
      'Очереди/события',
      'Зрелость observability',
      'Security blast radius',
    ],
    advantages: ['Держит нагрузку', 'Чёткие failure domains'],
    risks: [
      'Высокая сложность',
      'Ops-стоимость',
      'Сложнее локально рассуждать',
    ],
    complexity: 'Высокая',
    cost: 'Высокая',
  },
];

export const tradeOffs: readonly TradeOff[] = [
  {
    id: 'rest-graphql',
    title: 'REST vs GraphQL',
    optionA: 'REST',
    optionB: 'GraphQL',
    axes: [
      { name: 'СЛОЖНОСТЬ', a: 35, b: 70 },
      { name: 'СТОИМОСТЬ', a: 40, b: 65 },
      { name: 'СКОРОСТЬ', a: 75, b: 55 },
      { name: 'МАСШТАБИРУЕМОСТЬ', a: 70, b: 75 },
      { name: 'НАДЁЖНОСТЬ', a: 70, b: 65 },
      { name: 'СОПРОВОЖДЕНИЕ', a: 60, b: 55 },
      { name: 'РИСК', a: 40, b: 60 },
    ],
    note: 'Нет единственного правильного выбора — зависит от clients и team.',
  },
  {
    id: 'sql-nosql',
    title: 'SQL vs NoSQL',
    optionA: 'SQL',
    optionB: 'NoSQL',
    axes: [
      { name: 'СЛОЖНОСТЬ', a: 45, b: 55 },
      { name: 'СТОИМОСТЬ', a: 50, b: 55 },
      { name: 'СКОРОСТЬ', a: 60, b: 70 },
      { name: 'МАСШТАБИРУЕМОСТЬ', a: 65, b: 80 },
      { name: 'НАДЁЖНОСТЬ', a: 80, b: 60 },
      { name: 'СОПРОВОЖДЕНИЕ', a: 70, b: 50 },
      { name: 'РИСК', a: 35, b: 55 },
    ],
    note: 'Integrity vs flexibility — зафиксируй access patterns сначала.',
  },
  {
    id: 'mono-micro',
    title: 'Monolith vs Microservices',
    optionA: 'Monolith',
    optionB: 'Microservices',
    axes: [
      { name: 'СЛОЖНОСТЬ', a: 30, b: 85 },
      { name: 'СТОИМОСТЬ', a: 35, b: 80 },
      { name: 'СКОРОСТЬ', a: 80, b: 45 },
      { name: 'МАСШТАБИРУЕМОСТЬ', a: 55, b: 90 },
      { name: 'НАДЁЖНОСТЬ', a: 60, b: 70 },
      { name: 'СОПРОВОЖДЕНИЕ', a: 55, b: 40 },
      { name: 'РИСК', a: 40, b: 75 },
    ],
    note: 'Микросервисы — за организационную и failure-domain цену.',
  },
  {
    id: 'sync-async',
    title: 'Sync vs Async',
    optionA: 'Sync',
    optionB: 'Async',
    axes: [
      { name: 'СЛОЖНОСТЬ', a: 30, b: 75 },
      { name: 'СТОИМОСТЬ', a: 40, b: 65 },
      { name: 'СКОРОСТЬ', a: 70, b: 60 },
      { name: 'МАСШТАБИРУЕМОСТЬ', a: 50, b: 85 },
      { name: 'НАДЁЖНОСТЬ', a: 55, b: 70 },
      { name: 'СОПРОВОЖДЕНИЕ', a: 70, b: 45 },
      { name: 'РИСК', a: 35, b: 60 },
    ],
    note: 'Async нужен, когда sync latency/coupling уже болит.',
  },
  {
    id: 'single-multi-agent',
    title: 'Single Agent vs Multi-Agent',
    optionA: 'Single Agent',
    optionB: 'Multi-Agent',
    axes: [
      { name: 'СЛОЖНОСТЬ', a: 35, b: 80 },
      { name: 'СТОИМОСТЬ', a: 40, b: 75 },
      { name: 'СКОРОСТЬ', a: 65, b: 55 },
      { name: 'МАСШТАБИРУЕМОСТЬ', a: 50, b: 75 },
      { name: 'НАДЁЖНОСТЬ', a: 55, b: 50 },
      { name: 'СОПРОВОЖДЕНИЕ', a: 65, b: 40 },
      { name: 'РИСК', a: 40, b: 70 },
    ],
    note: 'Специализация агентов оправдана только с contracts и verification.',
  },
];

export const sampleDecisions: readonly DecisionRecord[] = [
  {
    id: '014',
    problem: 'Как организовать API?',
    options: ['REST', 'GraphQL', 'tRPC'],
    decision: 'REST для публичного API + GraphQL для сложных product UI reads',
    why: 'Публичным клиентам нужны стабильные ресурсы; UI — гибкие запросы.',
    tradeOffs: 'Два стиля сопровождать; чётче границы по типу клиента.',
    result: 'Задокументированные контракты; без forced one-size-fits-all.',
  },
  {
    id: '021',
    problem: 'Когда вводить queues?',
    options: ['Остаться sync', 'Фоновые jobs', 'Полный event bus'],
    decision: 'Фоновые jobs только для email/webhooks',
    why: 'Боль — latency на side-effects, а не domain decoupling пока.',
    tradeOffs: 'Менее элегантно, чем events; намного меньше сложности.',
    result: 'P95 улучшился; архитектура осталась обучаемой.',
  },
];

export const aiDomainLayers: readonly AiDomainLayer[] = [
  {
    domain: 'База данных',
    howAiHelps: [
      'Черновик SQL',
      'Предложить schema',
      'Объяснить plans',
      'Черновик migrations',
    ],
    whatAiCanExecute: [
      'Генерировать queries',
      'Предлагать indexes',
      'Писать migration files',
    ],
    humanMustVerify: [
      'Корректность',
      'Целостность',
      'Производительность',
      'Риски migrations',
    ],
    aiShouldNotDecide: [
      'Необратимое удаление данных',
      'Prod migration без approval',
    ],
    canAutomate: ['Schema lint', 'Dry-run проверки migrations'],
  },
  {
    domain: 'Frontend',
    howAiHelps: ['Компоненты', 'A11y review', 'Гипотезы perf', 'Тесты'],
    whatAiCanExecute: ['Scaffold UI', 'Рефакторинг', 'Генерация stories/tests'],
    humanMustVerify: ['UX intent', 'Состояния', 'A11y', 'Влияние на bundle'],
    aiShouldNotDecide: [
      'Product copy, меняющий смысл',
      'Удаление критичных потоков',
    ],
    canAutomate: ['Lint', 'Visual regression', 'Bundle budgets'],
  },
  {
    domain: 'Безопасность',
    howAiHelps: ['Threat-чек-листы', 'Объяснение vulns', 'Review diffs'],
    whatAiCanExecute: ['Предложения по сканированию', 'Черновик policy-текста'],
    humanMustVerify: ['Модель Authz', 'Secrets', 'Высокорисковые изменения'],
    aiShouldNotDecide: [
      'Выдача production access',
      'Пропуск человека на auth-изменениях',
    ],
    canAutomate: ['Сканирование зависимостей', 'Обнаружение secrets'],
  },
  {
    domain: 'DevOps',
    howAiHelps: ['Черновики CI', 'Чек-листы инцидентов', 'Review Dockerfile'],
    whatAiCanExecute: ['Pipeline YAML', 'Заготовки runbook'],
    humanMustVerify: ['Изоляция secrets', 'Rollback', 'Blast radius'],
    aiShouldNotDecide: ['Prod promote без smoke', 'Уничтожение infra'],
    canAutomate: ['Smoke-тесты', 'Health checks'],
  },
];

export const mapLayers: readonly MapLayer[] = [
  { id: 'product', label: 'ПРОДУКТ' },
  { id: 'ux', label: 'UX/UI' },
  { id: 'frontend', label: 'FRONTEND' },
  { id: 'backend', label: 'BACKEND' },
  { id: 'database', label: 'DATABASE' },
  { id: 'devops', label: 'DEVOPS' },
  { id: 'security', label: 'БЕЗОПАСНОСТЬ' },
  { id: 'quality', label: 'КАЧЕСТВО' },
  { id: 'performance', label: 'ПРОИЗВОДИТЕЛЬНОСТЬ' },
  { id: 'observability', label: 'НАБЛЮДАЕМОСТЬ' },
  { id: 'ai', label: 'AI' },
  { id: 'automation', label: 'АВТОМАТИЗАЦИЯ' },
];

export const spineProject: readonly SpineStage[] = [
  {
    phase: 'foundation',
    title: 'Spine · Фаза I MVP',
    steps: [
      'Идея',
      'UX',
      'MVP',
      'Frontend',
      'Backend',
      'DB',
      'API',
      'Тесты',
      'Деплой',
    ],
  },
  {
    phase: 'integration',
    title: 'Spine · Фаза II Production',
    steps: [
      'Архитектура',
      'Безопасность',
      'Производительность',
      'CI/CD',
      'Observability',
      'Аналитика',
      'Production',
    ],
  },
  {
    phase: 'engineering',
    title: 'Spine · Фаза III Система',
    steps: [
      'Масштаб',
      'AI',
      'Агенты',
      'Автоматизация',
      'Итерация продукта',
      'Engineering OS',
    ],
  },
];

export const durableConcepts = [
  'HTTP',
  'SQL',
  'Кэширование',
  'Архитектура',
  'Тестирование',
  'Безопасность',
  'Распределённые системы',
  'Observability',
] as const;

export const volatileTools = [
  'Next.js',
  'AWS service X',
  'Framework Y',
  'AI model Z',
  'Cursor',
  'MCP tool X',
] as const;

export const learningLoop = [
  'НОВАЯ ТЕХНОЛОГИЯ',
  'ЧИТАТЬ ДОКУМЕНТАЦИЮ',
  'СПРОСИТЬ AI',
  'МАЛЫЙ ПРОТОТИП',
  'СЛОМАТЬ',
  'СРАВНИТЬ',
  'РЕАЛЬНАЯ ФИЧА',
  'ПРОВЕРИТЬ',
  'ДОКУМЕНТИРОВАТЬ',
  'ИНТЕГРИРОВАТЬ',
] as const;

export const unknownZone = [
  { id: 'known', label: 'ИЗВЕСТНО', coverage: 70 },
  { id: 'learning', label: 'ИЗУЧАЮ', coverage: 55 },
  { id: 'unknown', label: 'НЕИЗВЕСТНО', coverage: 35 },
  { id: 'emerging', label: 'ЗАРОЖДАЕТСЯ', coverage: 20 },
  { id: 'future', label: 'БУДУЩЕЕ', coverage: 10 },
] as const;

export const riskAutonomy = [
  { task: 'Документация', autonomy: 'высокая автономия' },
  { task: 'Предложение кода', autonomy: 'средняя автономия' },
  {
    task: 'Миграция production database',
    autonomy: 'строгое одобрение человека',
  },
  { task: 'Изменения Auth/permission', autonomy: 'строгое одобрение человека' },
  { task: 'Рутинные рефакторы с тестами', autonomy: 'средняя автономия' },
] as const;

export const agentArenaDefault = [
  'ЧЕЛОВЕК',
  'PRODUCT-АГЕНТ',
  'АГЕНТ-АРХИТЕКТОР',
  'АГЕНТ-РЕАЛИЗАЦИИ',
  'QA-АГЕНТ',
  'АГЕНТ БЕЗОПАСНОСТИ',
  'АГЕНТ REVIEW',
  'ОДОБРЕНИЕ ЧЕЛОВЕКА',
  'ДЕПЛОЙ',
] as const;

export const agentEvals = [
  'тестовые сценарии',
  'golden tasks',
  'регрессионные тесты',
  'валидация tool-use',
  'валидация вывода',
  'кейсы отказов',
  'стоимость',
  'latency',
  'надёжность',
] as const;

export const aiObservability = [
  'АГЕНТ',
  'PROMPT',
  'КОНТЕКСТ',
  'ВЫЗОВ TOOL',
  'РЕЗУЛЬТАТ',
  'СЛЕДУЮЩИЙ ШАГ',
  'ФИНАЛЬНЫЙ ВЫВОД',
] as const;

export const labNav = [
  {
    id: 'loop',
    href: '/loop',
    label: 'Инженерный цикл',
    blurb: 'Интерактивный цикл',
  },
  {
    id: 'labs',
    href: '/labs',
    label: 'Системные лаборатории',
    blurb: 'Gym · Отказы · Trade-offs · Arena',
  },
] as const;
