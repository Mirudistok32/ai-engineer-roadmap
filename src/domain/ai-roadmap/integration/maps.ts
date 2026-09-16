import type {
  FailureScenario,
  Principle,
  RedFlag,
  ResponsibilityRow,
  Skill,
} from '../types';

export const integrationSkills: readonly Skill[] = [
  {
    id: 'system-thinking',
    title: 'Системное мышление',
    description: 'Границы, модули, интерфейсы, домены отказов.',
    level: 'intermediate',
    domains: ['architecture'],
    topics: ['границы', 'зависимости', 'домены отказов'],
    missionId: 'int-mission-01',
  },
  {
    id: 'architecture-tradeoffs',
    title: 'Архитектурные компромиссы',
    description: 'Инженерия — это trade-offs, а не «правильно вообще».',
    level: 'intermediate',
    domains: ['architecture'],
    prerequisites: ['system-thinking'],
    topics: ['простое vs гибкое', 'масштаб', 'стоимость эксплуатации'],
  },
  {
    id: 'production-backend',
    title: 'Production Backend',
    description: 'Модульные сервисы, валидация, observability.',
    level: 'advanced',
    domains: ['backend', 'database'],
    prerequisites: ['architecture-tradeoffs'],
    topics: ['repositories', 'DTO', 'стратегия ошибок', 'async'],
    missionId: 'int-mission-02',
  },
  {
    id: 'frontend-systems',
    title: 'Frontend-системы',
    description: 'Архитектура приложения + design system + UX-метрики.',
    level: 'advanced',
    domains: ['frontend', 'ux-ui'],
    prerequisites: ['system-thinking'],
    topics: ['границы состояния', 'tokens', 'CWV'],
  },
  {
    id: 'quality-engineering',
    title: 'Инженерия качества',
    description: 'Качество как исполняемый pipeline на всём lifecycle.',
    level: 'intermediate',
    domains: ['qa'],
    prerequisites: ['production-backend', 'frontend-systems'],
    topics: ['gates', 'контракты', 'AI QA-агент'],
    missionId: 'int-mission-03',
  },
  {
    id: 'observability',
    title: 'Observability',
    description: 'Логи, метрики, трейсы + цикл инцидентов.',
    level: 'intermediate',
    domains: ['devops'],
    prerequisites: ['quality-engineering'],
    topics: ['триада', 'алерты', 'Detect→Prevent'],
    missionId: 'int-mission-04',
  },
  {
    id: 'security-engineering',
    title: 'Инженерия безопасности',
    description: 'Identity, app, infra и границы безопасности AI.',
    level: 'intermediate',
    domains: ['security'],
    prerequisites: ['observability'],
    topics: ['IAM', 'prompt injection', 'границы агентов'],
  },
  {
    id: 'performance-engineering',
    title: 'Инженерия производительности',
    description:
      'SLA → измерить → bottleneck → оптимизировать → проверка регрессий.',
    level: 'intermediate',
    domains: ['performance'],
    prerequisites: ['production-backend', 'frontend-systems'],
    topics: ['latency', 'throughput', 'регрессии'],
  },
  {
    id: 'automation-engineering',
    title: 'Инженерия автоматизации',
    description:
      'Сдвигать повторяющуюся работу вниз по лестнице автоматизации.',
    level: 'advanced',
    domains: ['devops'],
    prerequisites: ['quality-engineering'],
    topics: ['скрипт', 'pipeline агентов', 'самопроверка'],
    missionId: 'int-mission-05',
  },
  {
    id: 'ai-orchestration',
    title: 'Оркестрация AI',
    description: 'Контракты, handoffs, контекст, verification 2.0.',
    level: 'advanced',
    domains: ['architecture'],
    prerequisites: ['automation-engineering', 'security-engineering'],
    topics: ['команда агентов', 'context engineering', 'human approval'],
    missionId: 'int-capstone',
    aiApplications: [
      'Multi-agent workflows',
      'Отчёты о качестве',
      'Автоматизация деплоя',
    ],
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
  { id: 'ip1', text: 'Проектируй системы, а не изолированные фичи.' },
  { id: 'ip2', text: 'Мысли границами.' },
  { id: 'ip3', text: 'У каждой зависимости есть цена.' },
  { id: 'ip4', text: 'У каждой абстракции должна быть причина.' },
  { id: 'ip5', text: 'Измерь, прежде чем оптимизировать.' },
  { id: 'ip6', text: 'Автоматизируй повторяющуюся работу.' },
  { id: 'ip7', text: 'Сделай качество исполняемым.' },
  { id: 'ip8', text: 'Сделай сбои наблюдаемыми.' },
  { id: 'ip9', text: 'Давай AI контекст, а не размытые инструкции.' },
  { id: 'ip10', text: 'Делегируй исполнение, оставляй ответственность.' },
  { id: 'ip11', text: 'По возможности предпочитай обратимые решения.' },
];

export const integrationRedFlags: readonly RedFlag[] = [
  { id: 'ir1', text: 'Слишком много абстракций' },
  { id: 'ir2', text: 'Нет владельца' },
  { id: 'ir3', text: 'Нет observability' },
  { id: 'ir4', text: 'Нет rollback' },
  { id: 'ir5', text: 'Нет quality gates' },
  { id: 'ir6', text: 'Агенты без границ' },
  { id: 'ir7', text: 'Огромные промпты без контекста' },
  { id: 'ir8', text: 'Вывод AI без проверки' },
  { id: 'ir9', text: 'Автоматизация без обработки сбоев' },
  { id: 'ir10', text: 'Метрики без решений' },
  { id: 'ir11', text: 'Архитектура по моде' },
];

export const responsibilityMatrix: readonly ResponsibilityRow[] = [
  { area: 'Постановка проблемы', human: 'Основной', ai: 'Помощь' },
  { area: 'Продуктовые решения', human: 'Основной', ai: 'Исследование' },
  { area: 'Архитектура', human: 'Основной', ai: 'Предложения' },
  { area: 'Код', human: 'Ревью', ai: 'Основное исполнение' },
  { area: 'Тестирование', human: 'Проверка', ai: 'Генерация + запуск' },
  { area: 'Безопасность', human: 'Утверждение', ai: 'Скан / предложения' },
  { area: 'Деплой', human: 'Утверждение', ai: 'Автоматизация' },
  { area: 'Мониторинг', human: 'Интерпретация', ai: 'Детекция' },
  { area: 'Аналитика', human: 'Решения', ai: 'Анализ' },
  { area: 'Документация', human: 'Проверка', ai: 'Генерация' },
];

export const failureScenarios: readonly FailureScenario[] = [
  {
    id: 'db-down',
    title: 'База данных недоступна',
    questions: [
      'Что ломается?',
      'Как обнаруживается сбой?',
      'Что видит пользователь?',
      'Как система восстанавливается?',
      'Как предотвратить повтор?',
    ],
  },
  {
    id: 'api-timeout',
    title: 'Таймаут API',
    questions: [
      'Что ломается?',
      'Как обнаруживается?',
      'Влияние на пользователя?',
      'Восстановление?',
      'Предотвращение?',
    ],
  },
  {
    id: 'bad-deploy',
    title: 'Некорректный деплой',
    questions: [
      'Что ломается?',
      'Как обнаруживается?',
      'Влияние на пользователя?',
      'Rollback?',
      'Предотвращение?',
    ],
  },
  {
    id: 'token-expired',
    title: 'Истёкший токен',
    questions: [
      'Что ломается?',
      'Как обнаруживается?',
      'Влияние на пользователя?',
      'Восстановление?',
      'Предотвращение?',
    ],
  },
  {
    id: 'migration-fail',
    title: 'Сбой миграции базы данных',
    questions: [
      'Что ломается?',
      'Как обнаруживается?',
      'Влияние на пользователя?',
      'Восстановление?',
      'Предотвращение?',
    ],
  },
  {
    id: 'fe-build',
    title: 'Сломанный frontend-билд',
    questions: [
      'Что ломается?',
      'Как обнаруживается?',
      'Влияние на пользователя?',
      'Восстановление?',
      'Предотвращение?',
    ],
  },
  {
    id: 'ext-down',
    title: 'Внешний сервис недоступен',
    questions: [
      'Что ломается?',
      'Как обнаруживается?',
      'Влияние на пользователя?',
      'Восстановление?',
      'Предотвращение?',
    ],
  },
  {
    id: 'cache-fail',
    title: 'Сбой кэша',
    questions: [
      'Что ломается?',
      'Как обнаруживается?',
      'Влияние на пользователя?',
      'Восстановление?',
      'Предотвращение?',
    ],
  },
  {
    id: 'traffic-spike',
    title: 'Всплеск трафика',
    questions: [
      'Что ломается?',
      'Как обнаруживается?',
      'Влияние на пользователя?',
      'Смягчение?',
      'Предотвращение?',
    ],
  },
];

export const automationLadderV2 = [
  'ВРУЧНУЮ',
  'СКРИПТ',
  'АВТОМАТИЗАЦИЯ',
  'AI-АССИСТЕНТ',
  'AI-АГЕНТ',
  'PIPELINE АГЕНТОВ',
  'САМОПРОВЕРЯЕМАЯ АВТОМАТИЗАЦИЯ',
] as const;

export const automationDecision = [
  'Ручная задача',
  'Можно скриптовать?',
  'Можно автоматизировать?',
  'Может ли AI выполнить?',
  'Может ли AI проверить?',
  'Может ли workflow идти сам?',
] as const;

export const engineerLoopV2 = [
  'Человек',
  'План',
  'Делегирование',
  'Агент',
  'Вывод агента',
  'Проверка',
  'Интеграция',
  'Измерение',
  'Улучшение',
] as const;

export const agentScale = [
  'ОДИН АГЕНТ',
  'НЕСКОЛЬКО АГЕНТОВ',
  'WORKFLOW АГЕНТОВ',
  'АВТОМАТИЗИРОВАННЫЙ PIPELINE',
] as const;

export const controlPanel = [
  { label: 'Build', value: '✓' },
  { label: 'Тесты', value: '✓' },
  { label: 'Безопасность', value: '✓' },
  { label: 'Производительность', value: '✓' },
  { label: 'Деплой', value: '✓' },
  { label: 'Мониторинг', value: '✓' },
  { label: 'Аналитика', value: '✓' },
  { label: 'AI-задачи', value: '12' },
  { label: 'Ревью человека', value: '4' },
  { label: 'Автоматизации', value: '7' },
] as const;

export const complexityMap = {
  phaseI: ['Компонент', 'Компонент', 'Компонент'],
  phaseII: [
    'Компонент ↔ Компонент',
    'Сервисы',
    'Данные',
    'Инфраструктура',
    'Observability',
  ],
  phaseIII: ['Человек', 'Система агентов', 'Инженерная платформа'],
} as const;

export const visualProgression = [
  { stage: 'Старт', lines: ['ТЫ → AI'] },
  { stage: 'Середина', lines: ['ТЫ → AI → AI'] },
  {
    stage: 'Финиш',
    lines: ['ЧЕЛОВЕК как Engineering Orchestrator', 'СЕТЬ АГЕНТОВ → СИСТЕМА'],
  },
] as const;

export const tradeOffAxes = [
  'ПРОСТОЕ',
  'ГИБКОЕ',
  'МАСШТАБИРУЕМОЕ',
  'БЫСТРО СОБРАТЬ',
  'ДЁШЕВО ЭКСПЛУАТИРОВАТЬ',
] as const;

export const designSystemLadder = [
  'Design Tokens',
  'Примитивы',
  'Компоненты',
  'Паттерны',
  'Страницы',
] as const;

export const qualityPipeline = [
  'ТРЕБОВАНИЯ',
  'DESIGN REVIEW',
  'КОД',
  'UNIT TEST',
  'INTEGRATION TEST',
  'E2E',
  'БЕЗОПАСНОСТЬ',
  'ПРОИЗВОДИТЕЛЬНОСТЬ',
  'PRODUCTION',
  'МОНИТОРИНГ',
] as const;

export const securityLayers = {
  Идентичность: ['аутентификация', 'авторизация', 'роли', 'права'],
  Приложение: [
    'валидация',
    'injection',
    'XSS',
    'CSRF',
    'небезопасные зависимости',
  ],
  Инфраструктура: ['секреты', 'IAM', 'least privilege', 'изоляция окружений'],
  'Безопасность AI': [
    'prompt injection',
    'права инструментов',
    'чувствительный контекст',
    'недоверенный ввод',
    'границы агентов',
  ],
} as const;

export const adrTemplate = [
  'Контекст',
  'Решение',
  'Альтернативы',
  'Trade-offs',
  'Последствия',
] as const;

export const docTypes = [
  'README',
  'документ архитектуры',
  'документация API',
  'ADR',
  'документация деплоя',
  'runbook',
  'руководство по troubleshooting',
] as const;

export const navSections = [
  { id: 'hero', label: 'Старт' },
  { id: 'months', label: 'План по месяцам' },
  { id: 'capstone', label: 'Итоговый продукт' },
  { id: 'map', label: 'Как связано' },
  { id: 'agents', label: 'Агенты' },
  { id: 'context', label: 'Контекст' },
  { id: 'quality', label: 'Качество' },
  { id: 'automation', label: 'Автоматизация' },
  { id: 'failure', label: 'Сбои' },
  { id: 'panel', label: 'Ответственность' },
  { id: 'transition', label: 'Дальше' },
] as const;

export const productV2Requirements = [
  {
    area: 'Продукт',
    items: [
      'реальная проблема пользователя',
      'ясный scope',
      'метрики',
      'гипотезы',
    ],
  },
  {
    area: 'UX',
    items: ['полные flows', 'design system', 'a11y', 'responsive'],
  },
  {
    area: 'Frontend',
    items: [
      'production-архитектура',
      'производительность',
      'устойчивые состояния',
    ],
  },
  {
    area: 'Backend',
    items: [
      'модульная архитектура',
      'валидация',
      'авторизация',
      'фоновые задачи',
    ],
  },
  {
    area: 'Данные',
    items: ['PostgreSQL', 'индексы', 'транзакции', 'кэширование', 'миграции'],
  },
  {
    area: 'API',
    items: ['REST', 'GraphQL', 'контракты API'],
  },
  {
    area: 'Качество',
    items: ['unit', 'integration', 'E2E', 'security testing'],
  },
  {
    area: 'DevOps',
    items: ['Docker', 'CI/CD', 'окружения', 'деплой'],
  },
  {
    area: 'Observability',
    items: ['логи', 'метрики', 'ошибки', 'алерты'],
  },
  {
    area: 'Аналитика',
    items: ['продуктовые события', 'воронка', 'метрики использования'],
  },
  {
    area: 'AI',
    items: [
      'исследование',
      'код',
      'QA',
      'документация',
      'отладка',
      'workflows агентов',
    ],
  },
] as const;
