import type { Mission } from '../types';

export const engineeringMissions: readonly Mission[] = [
  {
    id: 'eng-mission-design',
    code: 'MISSION 13',
    title: 'Проектировать под сбои и масштаб',
    kind: 'mission',
    month: 13,
    objective:
      'Спроектировать систему с явными failure modes и scale breakpoints.',
    understand: ['Trade-offs на 10 / 1K / 100K / 1M', 'DETECT→PREVENT'],
    build: ['Диаграмма системы', 'Playbook сбоев', 'Заметки по bottlenecks'],
    aiCanHelp: [
      'Предложить топологии',
      'Проверить допущения нагрузкой',
      'Черновик сценариев сбоев',
    ],
    mustVerify: [
      'Trade-offs явны',
      'Путь восстановления есть',
      'Стоимость учтена',
    ],
    doneWhen: ['Пакет design review готов'],
  },
  {
    id: 'eng-mission-agents',
    code: 'MISSION 14',
    title: 'Спроектировать архитектуру агентов',
    kind: 'mission',
    month: 14,
    objective:
      'Спроектировать agent stack: roles, tools, permissions, termination.',
    understand: [
      'Агент vs workflow vs автономность',
      'Когда специализация вредит',
    ],
    build: ['Карта агентов', 'Модель прав', 'Цикл валидации'],
    aiCanHelp: ['Черновик контрактов', 'Симуляция handoffs'],
    mustVerify: ['Границы ясны', 'Нет лишних агентов'],
    doneWhen: ['ADR архитектуры агентов утверждён тобой'],
  },
  {
    id: 'eng-mission-automate',
    code: 'MISSION 15',
    title: 'Аудит автоматизации + ROI',
    kind: 'mission',
    month: 15,
    objective:
      'Найти repetitive work и оценить VALUE = Frequency × Time Saved × Reliability.',
    understand: ['Риск self-healing', 'Что должно остаться за человеком'],
    build: [
      'Список аудита',
      'Ранжирование ROI',
      '≥3 автоматизации с путём verify',
    ],
    aiCanHelp: ['Инвентаризация задач', 'Черновики скриптов/агентов'],
    mustVerify: ['Обработка сбоев', 'Экономия внимания измерена'],
    doneWhen: ['Бэклог автоматизации приоритизирован'],
  },
  {
    id: 'eng-mission-product',
    code: 'MISSION 16',
    title: 'Найти проблему до сборки',
    kind: 'mission',
    month: 16,
    objective: 'Доказать: IDEA ≠ PROBLEM, FEATURE ≠ VALUE.',
    understand: ['Гипотезы', 'Валидация', 'Связка продукт↔инженерия'],
    build: ['Бриф проблемы', 'План эксперимента', 'Метрики успеха'],
    aiCanHelp: ['Исследование', 'Скан конкурентов', 'Черновик гипотез'],
    mustVerify: ['Корневая проблема названа', 'Есть критерии отказа'],
    doneWhen: ['Решение строить / не строить основано на свидетельствах'],
  },
  {
    id: 'eng-mission-lead',
    code: 'MISSION 17',
    title: 'Провести инженерное решение',
    kind: 'mission',
    month: 17,
    objective: 'QUESTION→CONTEXT→OPTIONS→TRADE-OFFS→DECISION→CONSEQUENCES.',
    understand: ['Scope', 'Риск', 'Коммуникация со стейкхолдерами'],
    build: ['Запись решения', 'Бриф для AI', 'План поставки'],
    aiCanHelp: ['Матрица вариантов', 'Черновик документов', 'Адвокат дьявола'],
    mustVerify: ['Ты можешь просто защитить решение'],
    doneWhen: ['ADR + план приняты тобой как владельцем'],
  },
  {
    id: 'eng-capstone',
    code: 'CAPSTONE',
    title: 'Собрать настоящий продукт',
    kind: 'final',
    month: 18,
    objective:
      'Самостоятельно выбрать проблему и создать настоящий продукт — не tutorial project.',
    understand: [
      'Полный lifecycle',
      'Проектирование multi-agent org',
      'Внимание как дефицитный ресурс',
    ],
    build: [
      'Продукт + UX + архитектура',
      'Глубокий frontend + production backend/data/API',
      'QA/security/performance/devops/observability/analytics',
      'Multi-agent workflow + автоматизация',
    ],
    aiCanHelp: [
      'Вся команда агентов по контрактам',
      'Документация',
      'Циклы verification',
    ],
    mustVerify: [
      'Какие агенты нужны (и какие нет)',
      'Намерение/контекст/суждение человека остаются',
      'Цикл повторяется после deploy',
    ],
    doneWhen: [
      'Продукт жив',
      'Engineering OS задокументирована',
      'Цикл Learn→Improve→Automate работает',
    ],
  },
  {
    id: 'eng-final-boss',
    code: 'FINAL BOSS',
    title: 'Построить свою инженерную систему',
    kind: 'boss',
    month: 18,
    objective:
      'Система берёт feature request и проходит большую часть пути сама — human Define/Review/Approve/Decide.',
    understand: ['Автономия с risk gates', 'Архитектура verification'],
    build: [
      'Фича → анализ → spec → архитектура → impl → тесты → security → PR → CI → deploy → monitor',
    ],
    aiCanHelp: ['Агенты pipeline', 'Quality gates', 'Сводки мониторинга'],
    mustVerify: [
      'Критические действия требуют контроля человека',
      'Самопроверка до auto-accept',
    ],
    doneWhen: ['Демо прохождения feature request через систему'],
  },
] as const;

export const engineeringMissionById = Object.fromEntries(
  engineeringMissions.map((mission) => [mission.id, mission]),
) as Readonly<Record<string, Mission>>;
