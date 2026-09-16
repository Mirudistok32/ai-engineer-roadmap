import type { Month } from '../types';

/** Months 7–12 of the overall roadmap (Phase II). */
export const integrationMonths: readonly Month[] = [
  {
    id: 'month-7',
    number: 1,
    title: 'Системное мышление',
    goal: 'Видеть систему: boundaries, modules, interfaces, failure domains — не «ещё одну технологию».',
    themes: [
      {
        title: 'Границы системы',
        topics: [
          'модули',
          'сервисы',
          'ответственности',
          'интерфейсы',
          'зависимости',
          'внешние системы',
          'границы отказов',
        ],
      },
      {
        title: 'Архитектурные компромиссы',
        topics: [
          'масштаб',
          'бюджет',
          'надёжность',
          'скорость',
          'сопровождаемость',
          'сложность',
        ],
      },
      {
        title: 'Мастерство решений',
        topics: [
          'ПРОСТОЕ vs ГИБКОЕ',
          'МАСШТАБИРУЕМОЕ vs БЫСТРО СОБРАТЬ',
          'ДЁШЕВО ЭКСПЛУАТИРОВАТЬ',
        ],
      },
    ],
    output:
      'Спроектировать архитектуру SaaS: AI предлагает 3 варианта — инженер выбирает.',
    missionIds: ['int-mission-01'],
  },
  {
    id: 'month-8',
    number: 2,
    title: 'Production Backend + данные',
    goal: 'Backend и данные как часть production-системы, не учебный CRUD.',
    themes: [
      {
        title: 'Архитектура backend',
        topics: [
          'модульный backend',
          'границы сервисов',
          'доменная логика',
          'repositories',
          'DTO',
          'валидация',
          'стратегия ошибок',
          'логирование',
          'observability',
        ],
      },
      {
        title: 'Инженерия баз данных',
        topics: [
          'планирование запросов',
          'индексы',
          'транзакции',
          'изоляция',
          'блокировки',
          'миграции',
          'ограничения',
          'целостность',
        ],
      },
      {
        title: 'Производительность + кэш + async',
        topics: [
          'разбор медленных запросов',
          'client/server/distributed cache',
          'invalidation',
          'TTL',
          'очереди',
          'workers',
          'идемпотентность',
        ],
      },
    ],
    output: 'Объяснить, когда sync уже мало и где живёт bottleneck.',
    missionIds: ['int-mission-02'],
  },
  {
    id: 'month-9',
    number: 3,
    title: 'Production Frontend + UX-система',
    goal: 'Самый глубокий frontend-блок первой половины roadmap — architecture + design system + UX metrics.',
    themes: [
      {
        title: 'Архитектура frontend',
        topics: [
          'границы состояния',
          'server/client',
          'fetching',
          'кэширование',
          'ошибки',
          'loading',
          'optimistic updates',
          'формы',
        ],
      },
      {
        title: 'Инженерия design system',
        topics: [
          'tokens',
          'примитивы',
          'компоненты',
          'паттерны',
          'страницы',
          'a11y',
          'варианты',
        ],
      },
      {
        title: 'UX + производительность',
        topics: [
          'цель пользователя → метрика',
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
    title: 'Инженерия качества',
    goal: 'Качество встроено в lifecycle — не финальная фаза «потом протестируем».',
    themes: [
      {
        title: 'Pipeline качества',
        topics: [
          'требования',
          'design review',
          'unit',
          'integration',
          'E2E',
          'безопасность',
          'производительность',
          'мониторинг',
        ],
      },
      {
        title: 'Современный стек качества',
        topics: [
          'тесты',
          'статический анализ',
          'lint',
          'типы',
          'контракты',
          'security scanning',
          'мониторинг',
        ],
      },
      {
        title: 'AI QA-агент',
        topics: [
          'план тестов',
          'генерация тестов',
          'запуск',
          'разбор падений',
          'отчёт о качестве',
        ],
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
        title: 'Инфраструктура',
        topics: [
          'compute',
          'storage',
          'networking',
          'DNS',
          'CDN',
          'секреты',
          'IAM',
          'окружения',
        ],
      },
      {
        title: 'Observability + инциденты',
        topics: ['логи', 'метрики', 'трейсы', 'алерты', 'Detect→Prevent'],
      },
    ],
    output: 'Productionize: Docker, CI/CD, monitoring, alerts.',
    missionIds: ['int-mission-04'],
  },
  {
    id: 'month-12',
    number: 6,
    title: 'Продуктовая система + оркестрация AI',
    goal: 'Product + Engineering + AI: метрики, agent team, automation, Product v2.',
    themes: [
      {
        title: 'Цикл Product Engineering',
        topics: [
          'проблема',
          'гипотеза',
          'MVP',
          'реализация',
          'измерение',
          'обучение',
          'итерация',
        ],
      },
      {
        title: 'Продуктовые метрики',
        topics: [
          'north star',
          'activation',
          'retention',
          'conversion',
          'воронка',
          'когорты',
        ],
      },
      {
        title: 'Оркестрация агентов',
        topics: [
          'контракты',
          'handoffs',
          'context engineering',
          'verification 2.0',
          'границы',
        ],
      },
    ],
    output:
      'Собрать надёжный multi-agent workflow без «агенты ломают друг другу систему».',
    missionIds: ['int-mission-05', 'int-capstone'],
  },
] as const;
