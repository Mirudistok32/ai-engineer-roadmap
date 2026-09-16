import type { Month } from '../types';

/** Months 13–18 of the overall roadmap (Phase III). */
export const engineeringMonths: readonly Month[] = [
  {
    id: 'month-13',
    number: 1,
    title: 'Продвинутое проектирование систем',
    goal: 'Проектировать целостную систему — не отдельное приложение.',
    themes: [
      {
        title: 'Проектирование систем',
        topics: [
          'масштабируемость',
          'доступность',
          'надёжность',
          'latency',
          'throughput',
          'consistency',
          'отказоустойчивость',
          'bottlenecks',
        ],
      },
      {
        title: 'Мышление масштабом',
        topics: [
          '10 → 1K → 100K → 1M пользователей',
          'что меняется на каждом шаге',
        ],
      },
      {
        title: 'Проектирование от сбоев',
        topics: ['DETECT', 'CONTAIN', 'RECOVER', 'ANALYZE', 'PREVENT'],
      },
    ],
    output: 'Архитектура с явными failure modes и scale trade-offs.',
    missionIds: ['eng-mission-design'],
  },
  {
    id: 'month-14',
    number: 2,
    title: 'AI-инженерия',
    goal: 'AI становится engineering infrastructure, не autocomplete.',
    themes: [
      {
        title: 'Стек AI-инженерии',
        topics: [
          'модель',
          'prompt',
          'контекст',
          'инструменты',
          'память',
          'агент',
          'workflow',
          'multi-agent',
          'автономный цикл',
        ],
      },
      {
        title: 'Архитектура агентов',
        topics: [
          'роли',
          'права',
          'планирование',
          'валидация',
          'retries',
          'завершение',
        ],
      },
      {
        title: 'Агент vs Workflow',
        topics: [
          'скрипт',
          'workflow',
          'агент',
          'multi-agent',
          'автономная система',
        ],
      },
    ],
    output:
      'Понять, когда специализация агентов оправдана, а когда — лишняя сложность.',
    missionIds: ['eng-mission-agents'],
  },
  {
    id: 'month-15',
    number: 3,
    title: 'Инженерная автоматизация',
    goal: 'Убрать человека из повторяющейся работы — освободить внимание для мышления.',
    themes: [
      {
        title: 'Аудит автоматизации',
        topics: [
          'что / как часто / время',
          'скриптовать?',
          'автоматизировать?',
          'AI?',
          'самопроверка?',
          'запускать без меня?',
        ],
      },
      {
        title: 'ROI автоматизации',
        topics: ['Частота × Сэкономленное время × Надёжность'],
      },
      {
        title: 'Концепция Self-Healing',
        topics: [
          'обнаружить',
          'диагностировать',
          'предложить fix',
          'протестировать',
          'задеплоить',
          'проверить',
        ],
      },
    ],
    output: 'Карта automation candidates с оценкой риска передачи цикла AI.',
    missionIds: ['eng-mission-automate'],
  },
  {
    id: 'month-16',
    number: 4,
    title: 'Продуктовая инженерия',
    goal: 'Понимать, какую систему вообще стоит строить.',
    themes: [
      {
        title: 'Поиск проблемы',
        topics: [
          'ИДЕЯ ≠ ПРОБЛЕМА',
          'ФИЧА ≠ ЦЕННОСТЬ',
          'ЗАПРОС ≠ КОРНЕВАЯ ПРОБЛЕМА',
        ],
      },
      {
        title: 'Цикл продуктовых решений',
        topics: [
          'наблюдение',
          'гипотеза',
          'эксперимент',
          'данные',
          'решение',
          'итерация',
        ],
      },
      {
        title: 'Продукт ↔ инженерия',
        topics: ['ПРОДУКТ ↔ UX ↔ ИНЖЕНЕРИЯ ↔ INFRA ↔ ДАННЫЕ'],
      },
    ],
    output: 'Гипотезы и метрики до большой реализации.',
    missionIds: ['eng-mission-product'],
  },
  {
    id: 'month-17',
    number: 5,
    title: 'Инженерное лидерство',
    goal: 'Управлять инженерной работой — не обязательно быть менеджером.',
    themes: [
      {
        title: 'Планирование',
        topics: ['scope', 'декомпозиция', 'оценка', 'риски', 'tech debt'],
      },
      {
        title: 'Принятие решений',
        topics: ['вопрос', 'контекст', 'варианты', 'trade-offs', 'последствия'],
      },
      {
        title: 'Коммуникация и контроль',
        topics: [
          'объяснять просто',
          'документы',
          'брифы для AI',
          'ревью',
          'ЦЕЛЬ→ПОСТАВКА',
        ],
      },
    ],
    output: 'Решение + ADR + понятное задание AI/команде.',
    missionIds: ['eng-mission-lead'],
  },
  {
    id: 'month-18',
    number: 6,
    title: 'Автономная инженерия',
    goal: 'Создать собственную AI-driven engineering system / Personal Engineering OS.',
    themes: [
      {
        title: 'Личная инженерная система',
        topics: [
          'цикл research→docs',
          'правила',
          'навыки',
          'агенты',
          'команды',
          'hooks',
          'MCP',
          'автоматизация',
        ],
      },
      {
        title: 'Архитектура проверки',
        topics: ['type→lint→tests→security→rules→human approval'],
      },
      {
        title: 'Уровни автономии',
        topics: ['L0 Вручную → L6 Автономно', 'автономия с risk gates'],
      },
    ],
    output: 'Engineering OS + capstone product + Final Boss workflow.',
    missionIds: ['eng-capstone', 'eng-final-boss'],
  },
] as const;
