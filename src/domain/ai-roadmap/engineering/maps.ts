import type {
  CapabilityCell,
  Principle,
  ProgressAxis,
  RedFlag,
  Skill,
} from '../types';

export const engineeringSkills: readonly Skill[] = [
  {
    id: 'advanced-system-design',
    title: 'Продвинутое проектирование систем',
    description: 'Масштаб, надёжность, мышление от сбоев.',
    level: 'advanced',
    domains: ['architecture'],
    topics: ['масштабируемость', 'отказоустойчивость', 'bottlenecks'],
    missionId: 'eng-mission-design',
  },
  {
    id: 'ai-engineering-infra',
    title: 'Инфраструктура AI-инженерии',
    description: 'Модель→workflow→автономный цикл как инфраструктура.',
    level: 'advanced',
    domains: ['architecture'],
    prerequisites: ['advanced-system-design'],
    topics: ['агенты', 'память', 'инструменты', 'завершение'],
    missionId: 'eng-mission-agents',
  },
  {
    id: 'automation-roi',
    title: 'ROI автоматизации',
    description: 'Частота × время × надёжность; береги внимание.',
    level: 'advanced',
    domains: ['devops'],
    prerequisites: ['ai-engineering-infra'],
    topics: ['аудит', 'self-healing', 'риск'],
    missionId: 'eng-mission-automate',
  },
  {
    id: 'product-engineering',
    title: 'Продуктовая инженерия',
    description: 'Поиск проблем и связка продукт↔технологии.',
    level: 'advanced',
    domains: ['product', 'analysis'],
    topics: ['гипотезы', 'эксперименты', 'ценность'],
    missionId: 'eng-mission-product',
  },
  {
    id: 'engineering-leadership',
    title: 'Инженерное лидерство',
    description: 'Планирование, решения, коммуникация, контроль поставки.',
    level: 'advanced',
    domains: ['product', 'architecture'],
    prerequisites: ['product-engineering'],
    topics: ['trade-offs', 'брифы', 'вехи'],
    missionId: 'eng-mission-lead',
  },
  {
    id: 'engineering-os',
    title: 'Личная Engineering OS',
    description: 'Правила + навыки + агенты + hooks + MCP + автоматизация.',
    level: 'advanced',
    domains: ['architecture'],
    prerequisites: ['automation-roi', 'engineering-leadership'],
    topics: ['workflows', 'verification', 'уровни автономии'],
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
  { id: 'ep1', text: 'Пойми проблему.' },
  { id: 'ep2', text: 'Спроектируй до реализации.' },
  { id: 'ep3', text: 'Держи системы понятными.' },
  { id: 'ep4', text: 'Предпочитай простоту, пока сложность не оправдана.' },
  { id: 'ep5', text: 'Автоматизируй повторяющуюся работу.' },
  { id: 'ep6', text: 'Измеряй реальное поведение.' },
  { id: 'ep7', text: 'Встраивай проверку в систему.' },
  { id: 'ep8', text: 'Считай сбой нормальным состоянием.' },
  { id: 'ep9', text: 'Безопасность — это архитектура.' },
  { id: 'ep10', text: 'Производительность измерима.' },
  { id: 'ep11', text: 'AI — рычаг, а не власть.' },
  { id: 'ep12', text: 'Контекст — инженерный ресурс.' },
  { id: 'ep13', text: 'Делегирование требует границ.' },
  { id: 'ep14', text: 'Автоматизация без проверки — это риск.' },
  {
    id: 'ep15',
    text: 'Ответственность человека не исчезает с автоматизацией.',
  },
  { id: 'ep16', text: 'Береги внимание человека.' },
  { id: 'ep17', text: 'Оптимизируй систему целиком, а не отдельные задачи.' },
  { id: 'ep18', text: 'Строй системы, которые могут эволюционировать.' },
];

export const engineeringRedFlags: readonly RedFlag[] = [
  { id: 'er1', text: 'Автономия без risk gates' },
  { id: 'er2', text: 'Агент на каждую должность' },
  { id: 'er3', text: 'Self-healing без тестов' },
  { id: 'er4', text: 'Фичи без проблемы' },
  { id: 'er5', text: 'Игнорирование полной стоимости системы' },
  { id: 'er6', text: 'Оптимизация задач, а не внимания' },
  { id: 'er7', text: 'Auto-accept на высокорисковых путях' },
  { id: 'er8', text: 'Нет метода обучения на frontier' },
];

export const autonomyLevels = [
  { level: 0, title: 'Вручную' },
  { level: 1, title: 'С помощью AI' },
  { level: 2, title: 'Под управлением AI' },
  { level: 3, title: 'Исполнение агентом' },
  { level: 4, title: 'Multi-agent workflow' },
  { level: 5, title: 'Самопроверяемая автоматизация' },
  { level: 6, title: 'Автономная инженерная система' },
] as const;

export const maturityLadder = [
  'СПЕЦИАЛИСТ',
  'ФУНДАМЕНТ',
  'ИНТЕГРАЦИЯ',
  'СИСТЕМНОЕ МЫШЛЕНИЕ',
  'АВТОМАТИЗАЦИЯ',
  'ОРКЕСТРАЦИЯ',
  'АВТОНОМИЯ',
] as const;

export const identityEvolution = [
  'СПЕЦИАЛИСТ',
  'ДЖЕНЕРАЛИСТ',
  'AI-AUGMENTED ENGINEER',
  'ENGINEERING ORCHESTRATOR',
  'СОЗДАТЕЛЬ СИСТЕМ',
  'НЕПРЕРЫВНАЯ ЭВОЛЮЦИЯ',
] as const;

export const finalWorkflow = [
  'ИДЕЯ',
  'ИССЛЕДОВАНИЕ',
  'ПРОБЛЕМА',
  'ПРОДУКТ',
  'ПРОЕКТИРОВАНИЕ СИСТЕМЫ',
  'АРХИТЕКТУРА',
  'AI-ИНЖЕНЕРИЯ',
  'РЕАЛИЗАЦИЯ',
  'ПРОВЕРКА',
  'ДЕПЛОЙ',
  'НАБЛЮДАЕМОСТЬ',
  'АНАЛИТИКА',
  'ИТЕРАЦИЯ',
  'АВТОМАТИЗАЦИЯ',
  'АВТОНОМНЫЙ WORKFLOW',
] as const;

export const aiStack = [
  'МОДЕЛЬ',
  'PROMPT',
  'КОНТЕКСТ',
  'ИНСТРУМЕНТЫ',
  'ПАМЯТЬ',
  'АГЕНТ',
  'WORKFLOW',
  'MULTI-AGENT СИСТЕМА',
  'АВТОНОМНЫЙ ЦИКЛ',
] as const;

export const agentVsWorkflow = [
  'СКРИПТ',
  'WORKFLOW',
  'АГЕНТ',
  'MULTI-AGENT',
  'АВТОНОМНАЯ СИСТЕМА',
] as const;

export const failureModes = [
  'СЕРВИС НЕДОСТУПЕН',
  'БАЗА ДАННЫХ НЕДОСТУПНА',
  'ТАЙМАУТ API',
  'СБОЙ СЕТИ',
  'ПЛОХОЙ ДЕПЛОЙ',
  'ВСПЛЕСК ТРАФИКА',
  'НЕВАЛИДНЫЕ ДАННЫЕ',
  'ИНЦИДЕНТ БЕЗОПАСНОСТИ',
] as const;

export const failureLoop = [
  'DETECT',
  'CONTAIN',
  'RECOVER',
  'ANALYZE',
  'PREVENT',
] as const;

export const scaleSteps = [
  '10 ПОЛЬЗОВАТЕЛЕЙ',
  '1 000 ПОЛЬЗОВАТЕЛЕЙ',
  '100 000 ПОЛЬЗОВАТЕЛЕЙ',
  '1 000 000 ПОЛЬЗОВАТЕЛЕЙ',
] as const;

export const scaleChanges = [
  'База данных',
  'Кэширование',
  'Инфраструктура',
  'Архитектура',
  'Observability',
  'Стоимость',
  'Безопасность',
  'Режимы отказов',
] as const;

export const engineeringOs = [
  'Правила',
  'Навыки',
  'Агенты',
  'Команды',
  'Hooks',
  'MCP',
  'Документация',
  'Автоматизация',
] as const;

export const engineeringOsMap = {
  center: 'ENGINEERING OS',
  pillars: [
    'ПРАВИЛА',
    'НАВЫКИ',
    'ИНСТРУМЕНТЫ',
    'АГЕНТЫ',
    'КОМАНДЫ',
    'MCP',
    'WORKFLOWS',
    'HOOKS',
    'ДАННЫЕ',
  ],
} as const;

export const verificationArchitecture = [
  'ВЫВОД AI',
  'TYPE CHECK',
  'LINT',
  'UNIT TEST',
  'INTEGRATION TEST',
  'E2E',
  'БЕЗОПАСНОСТЬ',
  'ПРОИЗВОДИТЕЛЬНОСТЬ',
  'ПРАВИЛА АРХИТЕКТУРЫ',
  'УТВЕРЖДЕНИЕ ЧЕЛОВЕКОМ',
] as const;

export const systemCost = [
  'СТОИМОСТЬ СБОРКИ',
  'СТОИМОСТЬ RUNTIME',
  'СТОИМОСТЬ AI',
  'СТОИМОСТЬ СОПРОВОЖДЕНИЯ',
  'ВРЕМЯ ЧЕЛОВЕКА',
  '= ПОЛНАЯ СТОИМОСТЬ СИСТЕМЫ',
] as const;

export const aiLeverageLoop = [
  'Задача',
  'Время человека',
  'Время AI',
  'Время ревью',
  'Частота сбоев',
  'Созданная ценность',
] as const;

export const attentionTrap = [
  'СЛИШКОМ МНОГО ЗАДАЧ',
  'ПЕРЕКЛЮЧЕНИЕ КОНТЕКСТА',
  'ПОТЕРЯ ФОКУСА',
  'НИЖЕ КАЧЕСТВО',
  'БОЛЬШЕ ПЕРЕДЕЛОК',
] as const;

export const continueMethod = [
  'Какую проблему это решает?',
  'Что было раньше?',
  'Что меняется?',
  'Какие trade-offs?',
  'Могу ли я на этом строить?',
  'Могу ли я это автоматизировать?',
  'Могу ли я это заменить?',
  'Стоит ли учить глубоко?',
] as const;

export const techRadar = {
  ЯДРО: ['TypeScript', 'React', 'HTTP', 'SQL'],
  СЕЙЧАС: ['AI-агенты', 'Agentic Workflows'],
  ЭКСПЕРИМЕНТ: ['Новые архитектуры моделей'],
  EMERGING: ['Будущие платформы агентов'],
  УСТАРЕЛО: ['Кучи ad-hoc промптов'],
  НЕИЗВЕСТНО: ['Что придёт дальше'],
} as const;

export const learnFramework = [
  'Релевантность',
  'Стоимость обучения',
  'Бизнес-ценность',
  'Техническая ценность',
  'Долговечность',
  'Стоимость интеграции',
] as const;

export const learnDecisions = [
  'УЧИТЬ',
  'ИСПОЛЬЗОВАТЬ',
  'СЛЕДИТЬ',
  'ИГНОРИРОВАТЬ',
] as const;

export const knowledgeFrontier = [
  { id: 'known', label: 'ИЗВЕСТНО', coverage: 72 },
  { id: 'unknown', label: 'НЕИЗВЕСТНО', coverage: 40 },
  { id: 'emerging', label: 'EMERGING', coverage: 25 },
  { id: 'frontier', label: 'FRONTIER', coverage: 12 },
] as const satisfies readonly ProgressAxis[];

export const capstoneRequirements = [
  {
    area: 'Продукт',
    items: [
      'проблема',
      'исследование',
      'пользователи',
      'ценность',
      'MVP',
      'roadmap',
      'метрики',
    ],
  },
  {
    area: 'UX/UI',
    items: ['flows', 'IA', 'design system', 'a11y', 'responsive', 'usability'],
  },
  {
    area: 'Архитектура',
    items: [
      'проектирование системы',
      'границы',
      'поток данных',
      'API',
      'режимы отказов',
      'trade-offs',
    ],
  },
  {
    area: 'Frontend',
    items: ['глубокая специализация', 'production-архитектура'],
  },
  { area: 'Backend', items: ['production-like реализация'] },
  { area: 'База данных', items: ['production-like модель данных'] },
  { area: 'API', items: ['REST + GraphQL где оправдано'] },
  { area: 'QA', items: ['автоматизированное + исследовательское'] },
  { area: 'Безопасность', items: ['app + infra + AI security'] },
  { area: 'Производительность', items: ['измерение + оптимизация'] },
  { area: 'DevOps', items: ['CI/CD', 'окружения', 'деплой'] },
  { area: 'Observability', items: ['логи', 'метрики', 'ошибки', 'tracing'] },
  { area: 'Аналитика', items: ['продуктовые + технические метрики'] },
  { area: 'AI', items: ['multi-agent workflow'] },
  { area: 'Автоматизация', items: ['максимально сократить ручную работу'] },
] as const;

export const capstoneLoop = [
  'ИССЛЕДОВАТЬ',
  'ОПРЕДЕЛИТЬ',
  'СПРОЕКТИРОВАТЬ',
  'АРХИТЕКТУРИРОВАТЬ',
  'СОБРАТЬ',
  'ТЕСТИРОВАТЬ',
  'ЗАЩИТИТЬ',
  'ЗАДЕПЛОИТЬ',
  'НАБЛЮДАТЬ',
  'ИЗМЕРИТЬ',
  'УЧИТЬСЯ',
  'УЛУЧШИТЬ',
  'АВТОМАТИЗИРОВАТЬ',
] as const;

export const proposedAgents = [
  'Агент исследования',
  'Агент продукта',
  'Агент архитектуры',
  'Агент frontend',
  'Агент backend',
  'Агент QA',
  'Агент безопасности',
  'Агент DevOps',
  'Агент аналитики',
  'Агент документации',
] as const;

export const finalBossFlow = [
  'Запрос фичи',
  'Продуктовый анализ',
  'Техническая спецификация',
  'Предложение архитектуры',
  'Реализация',
  'Тесты',
  'Безопасность',
  'PR',
  'CI',
  'Деплой',
  'Мониторинг',
] as const;

export const humanControl = [
  'Определить',
  'Ревью',
  'Утвердить',
  'Решить',
] as const;

export const humanControlModel = [
  'НАМЕРЕНИЕ',
  'КОНТЕКСТ',
  'ОГРАНИЧЕНИЯ',
  'СУЖДЕНИЕ',
  'ОТВЕТСТВЕННОСТЬ',
] as const;

export const finalAiLoop = [
  'НАМЕРЕНИЕ ЧЕЛОВЕКА',
  'ПРОБЛЕМА',
  'СИСТЕМА',
  'ОРКЕСТРАЦИЯ AI',
  'ИСПОЛНЕНИЕ',
  'ПРОВЕРКА',
  'ПОСТАВКА',
  'ИЗМЕРЕНИЕ',
  'ОБУЧЕНИЕ',
  'АВТОМАТИЗАЦИЯ',
  'УЛУЧШЕНИЕ СИСТЕМЫ',
  '→ снова к НАМЕРЕНИЮ',
] as const;

export const finalEngineerMap = {
  think: ['Продукт', 'Анализ', 'UX', 'Стратегия', 'Планирование'],
  build: ['Frontend', 'Backend', 'API', 'База данных', 'Архитектура'],
  operate: [
    'QA',
    'DevOps',
    'Безопасность',
    'Производительность',
    'Observability',
  ],
  ai: ['Агенты', 'Инструменты', 'Автоматизация'],
  beyond: ['ИНЖЕНЕРНАЯ СИСТЕМА', 'НЕПРЕРЫВНАЯ ЭВОЛЮЦИЯ'],
} as const;

export const capabilityMatrix: readonly CapabilityCell[] = [
  {
    capability: 'Продукт',
    foundation: 'Понимать',
    integration: 'Интегрировать',
    engineering: 'Создавать',
  },
  {
    capability: 'UX/UI',
    foundation: 'Понимать',
    integration: 'Применять',
    engineering: 'Проектировать системы',
  },
  {
    capability: 'Frontend',
    foundation: 'Строить',
    integration: 'Архитектурировать',
    engineering: 'Глубокая специализация',
  },
  {
    capability: 'Backend',
    foundation: 'Строить',
    integration: 'Production',
    engineering: 'Архитектурировать',
  },
  {
    capability: 'База данных',
    foundation: 'Использовать',
    integration: 'Оптимизировать',
    engineering: 'Проектировать',
  },
  {
    capability: 'API',
    foundation: 'Реализовывать',
    integration: 'Проектировать',
    engineering: 'Архитектурировать',
  },
  {
    capability: 'QA',
    foundation: 'Тестировать',
    integration: 'Система качества',
    engineering: 'Самопроверка',
  },
  {
    capability: 'DevOps',
    foundation: 'Деплоить',
    integration: 'Productionize',
    engineering: 'Автоматизировать',
  },
  {
    capability: 'Безопасность',
    foundation: 'Защищать',
    integration: 'Интегрировать',
    engineering: 'Архитектурировать',
  },
  {
    capability: 'Производительность',
    foundation: 'Измерять',
    integration: 'Оптимизировать',
    engineering: 'Инженерить',
  },
  {
    capability: 'Аналитика',
    foundation: 'Понимать',
    integration: 'Применять',
    engineering: 'Вести решения',
  },
  {
    capability: 'AI',
    foundation: 'Помогать',
    integration: 'Оркестрировать',
    engineering: 'Инженерить системы',
  },
  {
    capability: 'Автоматизация',
    foundation: 'Скрипты',
    integration: 'Workflows',
    engineering: 'Автономные системы',
  },
  {
    capability: 'Архитектура',
    foundation: 'Понимать',
    integration: 'Интегрировать',
    engineering: 'Проектировать',
  },
  {
    capability: 'Проект',
    foundation: 'Исполнять',
    integration: 'Координировать',
    engineering: 'Вести инженерию',
  },
];

export const storyArc = [
  { phase: 'PHASE I · ФУНДАМЕНТ', quote: 'Я ВИЖУ СИСТЕМУ ЦЕЛИКОМ.' },
  { phase: 'PHASE II · ИНТЕГРАЦИЯ', quote: 'Я УМЕЮ СОЕДИНЯТЬ СИСТЕМУ.' },
  {
    phase: 'PHASE III · ИНЖЕНЕРИЯ',
    quote: 'Я УМЕЮ ПРОЕКТИРОВАТЬ, ОРКЕСТРИРОВАТЬ И АВТОМАТИЗИРОВАТЬ СИСТЕМУ.',
  },
  { phase: '∞', quote: 'Я МОГУ ВЫУЧИТЬ ТО, ЧТО ПОТРЕБУЕТ СЛЕДУЮЩАЯ СИСТЕМА.' },
] as const;

export const navSections = [
  { id: 'hero', label: 'Старт' },
  { id: 'months', label: 'План по месяцам' },
  { id: 'capstone', label: 'Итоговый продукт' },
  { id: 'map', label: 'Карта роли' },
  { id: 'ai', label: 'AI-инженерия' },
  { id: 'os', label: 'Engineering OS' },
  { id: 'autonomy', label: 'Автономия' },
  { id: 'frontier', label: 'Что дальше' },
  { id: 'matrix', label: 'Итог трёх этапов' },
  { id: 'finale', label: 'Продолжение' },
] as const;
