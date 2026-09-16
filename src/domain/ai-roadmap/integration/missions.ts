import type { Mission } from '../types';

export const integrationMissions: readonly Mission[] = [
  {
    id: 'int-mission-01',
    code: 'MISSION 01',
    title: 'Спроектировать продукт',
    kind: 'mission',
    month: 7,
    objective:
      'Из product idea получить Requirements + UX + Architecture + Data Model + API.',
    understand: ['Границы', 'Trade-offs', 'Поток данных', 'Обработка сбоев'],
    build: [
      'Requirements',
      'UX-эскиз',
      'Диаграмма архитектуры',
      'Модель данных',
      'Контур API',
    ],
    aiCanHelp: [
      'Предложить 3 архитектуры',
      'Черновик requirements',
      'Оспорить допущения',
    ],
    mustVerify: [
      'Инженер выбирает архитектуру',
      'Trade-offs записаны',
      'Out-of-scope ясен',
    ],
    doneWhen: ['Пакет готов к build', 'Варианты AI сравнены тобой'],
  },
  {
    id: 'int-mission-02',
    code: 'MISSION 02',
    title: 'Собрать full stack',
    kind: 'mission',
    month: 8,
    objective:
      'Next.js + Backend + PostgreSQL + REST + GraphQL как связанная система.',
    understand: [
      'Границы сервисов',
      'Контракты',
      'Миграции',
      'Триггеры cache/async',
    ],
    build: [
      'Модульный backend',
      'Схема + индексы',
      'Демо REST + GraphQL',
      'Устойчивые состояния frontend',
    ],
    aiCanHelp: [
      'Scaffold сервисов',
      'Черновик миграций',
      'Генерация contract tests',
    ],
    mustVerify: [
      'Каждый слой объясним',
      'Authz не магия',
      'Нет secrets в repo',
    ],
    doneWhen: ['Vertical slice работает end-to-end'],
  },
  {
    id: 'int-mission-03',
    code: 'MISSION 03',
    title: 'Система качества',
    kind: 'mission',
    month: 10,
    objective:
      'Unit + Integration + E2E + static checks + security как executable quality.',
    understand: ['Пирамида', 'Покрытие по риску', 'Quality gates'],
    build: [
      'План тестов',
      'Автоматизированный suite',
      'Lint/type/contract checks',
      'Путь security scan',
    ],
    aiCanHelp: [
      'Сгенерировать план тестов',
      'Черновик тестов',
      'Свести падения в quality report',
    ],
    mustVerify: ['Gates блокируют bad merge', 'Report читаем человеком'],
    doneWhen: ['CI падает на красном качестве', 'Есть human-readable report'],
  },
  {
    id: 'int-mission-04',
    code: 'MISSION 04',
    title: 'Productionize',
    kind: 'boss',
    month: 11,
    objective: 'Docker + CI/CD + deploy + monitoring + alerts.',
    understand: ['Окружения', 'Smoke-тесты', 'Логи/метрики/трейсы', 'Rollback'],
    build: [
      'Pipeline',
      'Задеплоенное окружение',
      'Эскиз dashboards/alerts',
      'Заготовка runbook',
    ],
    aiCanHelp: ['Черновик CI', 'Пороги алертов', 'Чеклист инцидента'],
    mustVerify: [
      'Путь Detect существует',
      'Secrets изолированы',
      'Smoke после deploy',
    ],
    doneWhen: ['Prod-like URL + видимый сигнал сбоя'],
  },
  {
    id: 'int-mission-05',
    code: 'MISSION 05',
    title: 'Автоматизировать повторяющиеся workflows',
    kind: 'mission',
    month: 12,
    objective:
      'Найти минимум 5 repetitive workflows и сдвинуть их вниз по automation ladder.',
    understand: ['Что можно скриптовать / отдать AI / самопроверять'],
    build: [
      'Карта автоматизации',
      '≥5 автоматизированных workflows',
      'Заметки по обработке сбоев',
    ],
    aiCanHelp: [
      'Инвентаризация повторяющейся работы',
      'Черновики скриптов/агентов',
      'Предложить verification',
    ],
    mustVerify: [
      'У автоматизации есть путь сбоя',
      'Человек по-прежнему владеет approval где нужно',
    ],
    doneWhen: ['5 workflows автоматизированы с заметками по verification'],
  },
  {
    id: 'int-capstone',
    code: 'CAPSTONE',
    title: 'Продукт v2 + multi-agent workflow',
    kind: 'final',
    month: 12,
    objective:
      'Превратить Foundation product в production-like system и собрать AI engineering workflow с handoffs.',
    understand: [
      'Garbage in → garbage out',
      'Контракты агентов',
      'Context engineering',
      'Verification 2.0',
    ],
    build: [
      'Пакет requirements для Product v2',
      'Full stack production slice',
      'Качество + DevOps + observability',
      'Multi-agent pipeline с human review',
    ],
    aiCanHelp: [
      'Исследование',
      'Агенты продукта/архитектуры',
      'Агенты реализации',
      'Агенты QA/security/devops',
      'Документация',
    ],
    mustVerify: [
      'Агенты не ломают систему друг другу',
      'Human approval gates',
      'Матрица ответственности явна',
    ],
    doneWhen: [
      'Система выкатывается',
      'Workflow задокументирован',
      'Готов к оркестрации Phase III',
    ],
  },
] as const;

export const integrationMissionById = Object.fromEntries(
  integrationMissions.map((mission) => [mission.id, mission]),
) as Readonly<Record<string, Mission>>;
