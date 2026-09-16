import type { AgentContract } from '../types';

export const agentTeam = [
  'Агент продукта',
  'Агент архитектуры',
  'Агент исследования',
  'Агент реализации',
  'Агент frontend',
  'Агент backend',
  'Агент QA',
  'Агент DevOps',
  'Агент мониторинга',
  'Агент безопасности',
  'Агент аналитики',
] as const;

export const agentHandoff = [
  'Агент продукта → Requirements',
  'Агент архитектуры → Архитектура',
  'Агенты Frontend / Backend → Реализация',
  'Агент QA → Отчёт о качестве',
  'Агент DevOps → Деплой',
  'Человек → Review / Approve',
] as const;

export const agentContracts: readonly AgentContract[] = [
  {
    id: 'product-agent',
    role: 'Агент продукта',
    goal: 'Превратить проблему пользователя в проверяемые requirements.',
    input: 'Проблема пользователя, ограничения, гипотезы',
    context: 'Продуктовые документы, персоны, глоссарий метрик',
    constraints: ['Без раздувания scope', 'Сначала MVP', 'Измеримые outcomes'],
    tools: ['Исследование', 'Черновики', 'Скан конкурентов'],
    output: 'Пакет requirements + acceptance criteria',
    qualityCriteria: [
      'Проверяемые критерии',
      'Явный out-of-scope',
      'Именованный пользователь',
    ],
    failureConditions: ['Размытые цели', 'Нет метрик', 'Скрытые допущения'],
  },
  {
    id: 'architect-agent',
    role: 'Агент архитектуры',
    goal: 'Предложить 2–3 архитектуры с trade-offs.',
    input: 'Requirements + ограничения + намёки на масштаб',
    context: 'Карта текущей системы, ADR, соглашения',
    constraints: ['Предпочитать обратимые решения', 'Называть домены отказов'],
    tools: ['Диаграммы', 'Матрица вариантов'],
    output: 'Варианты архитектуры + рекомендуемый default',
    qualityCriteria: [
      'Trade-offs явны',
      'Границы ясны',
      'Observability запланирована',
    ],
    failureConditions: [
      'Дизайн по моде',
      'Нет альтернатив',
      'Всё связано со всем',
    ],
  },
  {
    id: 'qa-agent',
    role: 'Агент QA',
    goal: 'Собрать quality report по изменению.',
    input: 'Diff + зоны риска + acceptance criteria',
    context: 'Карта тестов, известные flaky-зоны, security checklist',
    constraints: ['По риску, а не по объёму'],
    tools: ['Генерация тестов', 'Запуск suite', 'Статические проверки'],
    output: 'Quality report с пробелами и остаточным риском',
    qualityCriteria: ['Шаги воспроизведения', 'Severity', 'Что не тестировали'],
    failureConditions: [
      'Зелёный CI с тихими пробелами',
      'Нет human-readable summary',
    ],
  },
  {
    id: 'devops-agent',
    role: 'Агент DevOps',
    goal: 'Доставить изменение с smoke и rollback path.',
    input: 'Артефакт сборки + карта окружений + release notes',
    context: 'Pipeline, политика секретов, runbooks',
    constraints: ['Нет секретов в логах', 'Smoke после deploy'],
    tools: ['CI', 'Deploy', 'Health checks'],
    output: 'Запись о деплое + результат smoke',
    qualityCriteria: ['Обратимо', 'Наблюдаемо', 'Задокументировано'],
    failureConditions: ['Деплой без smoke', 'Неизвестный rollback'],
  },
] as const;

export const contextEngineeringModel = [
  'PROMPT',
  'КОНТЕКСТ',
  'ИНСТРУМЕНТЫ',
  'ПАМЯТЬ',
  'ПРАВИЛА',
  '→ ПРОИЗВОДИТЕЛЬНОСТЬ АГЕНТА',
] as const;

export const contextTopics = [
  'контекст задачи',
  'контекст кодовой базы',
  'правила репозитория',
  'документация проекта',
  'документы архитектуры',
  'соглашения',
  'примеры',
  'ограничения',
  'acceptance criteria',
] as const;

export const verificationV2 = [
  'Вывод агента',
  'Статические проверки',
  'Автотесты',
  'Ревью архитектуры',
  'Ревью безопасности',
  'Проверка производительности',
  'Утверждение человеком',
] as const;

export const multiAgentCapstoneFlow = [
  'ИДЕЯ ПОЛЬЗОВАТЕЛЯ',
  'АГЕНТ ИССЛЕДОВАНИЯ',
  'АГЕНТ ПРОДУКТА',
  'АГЕНТ АРХИТЕКТУРЫ',
  'АГЕНТЫ РЕАЛИЗАЦИИ',
  'АГЕНТ QA',
  'АГЕНТ БЕЗОПАСНОСТИ',
  'АГЕНТ DEVOPS',
  'АГЕНТ АНАЛИТИКИ',
  'РЕВЬЮ ЧЕЛОВЕКА',
] as const;
