import type {
  DependencyChain,
  LifecycleStep,
  Principle,
  RedFlag,
} from '../types';

export const foundationPrinciples: readonly Principle[] = [
  { id: 'p1', text: 'Пойми, прежде чем автоматизировать.' },
  { id: 'p2', text: 'Измерь, прежде чем оптимизировать.' },
  { id: 'p3', text: 'Спроектируй, прежде чем кодить.' },
  { id: 'p4', text: 'Проверяй вывод AI.' },
  { id: 'p5', text: 'Предпочитай простые системы.' },
  { id: 'p6', text: 'Делай сбои видимыми.' },
  { id: 'p7', text: 'Безопасность — не запоздалая мысль.' },
  { id: 'p8', text: 'Тестирование — это инженерия, а не бюрократия.' },
  { id: 'p9', text: 'Автоматизация накапливается.' },
  { id: 'p10', text: 'AI — это рычаг, а не власть.' },
];

export const foundationRedFlags: readonly RedFlag[] = [
  { id: 'r1', text: 'Нет валидации' },
  { id: 'r2', text: 'У меня работает' },
  { id: 'r3', text: 'Нет тестов' },
  { id: 'r4', text: 'AI сгенерировал' },
  { id: 'r5', text: 'Никто не знает почему' },
  { id: 'r6', text: 'Всё зависит от всего' },
  { id: 'r7', text: 'Нет мониторинга' },
  { id: 'r8', text: 'Секреты в репозитории' },
  { id: 'r9', text: 'Оптимизация без измерений' },
];

export const dependencyChains: readonly DependencyChain[] = [
  {
    id: 'http-chain',
    title: 'От HTTP к распределённому мышлению',
    steps: [
      'HTTP',
      'API',
      'Backend',
      'Архитектура приложений',
      'Распределённое мышление',
    ],
  },
  {
    id: 'db-chain',
    title: 'От таблиц к производительности',
    steps: [
      'Основы баз данных',
      'Проектирование схемы',
      'Индексы',
      'Запросы',
      'Производительность',
    ],
  },
  {
    id: 'ux-chain',
    title: 'От UX к архитектуре',
    steps: ['UX', 'User Flow', 'Требования', 'Продукт', 'Архитектура'],
  },
];

export const lifecycleSteps: readonly LifecycleStep[] = [
  { id: 'idea', label: 'ИДЕЯ', aiCue: 'AI-ИССЛЕДОВАНИЕ' },
  { id: 'problem', label: 'ПРОБЛЕМА', aiCue: 'AI-ИССЛЕДОВАНИЕ' },
  { id: 'requirements', label: 'ТРЕБОВАНИЯ', aiCue: 'AI-ПЛАНИРОВАНИЕ' },
  { id: 'ux', label: 'UX/UI', aiCue: 'AI-ПЛАНИРОВАНИЕ' },
  { id: 'architecture', label: 'АРХИТЕКТУРА', aiCue: 'AI-ПЛАНИРОВАНИЕ' },
  { id: 'frontend', label: 'FRONTEND', aiCue: 'AI-КОД' },
  { id: 'backend', label: 'BACKEND', aiCue: 'AI-КОД' },
  { id: 'database', label: 'БАЗА ДАННЫХ', aiCue: 'AI-КОД' },
  { id: 'api', label: 'API', aiCue: 'AI-КОД' },
  { id: 'test', label: 'ТЕСТ', aiCue: 'AI-ТЕСТИРОВАНИЕ' },
  { id: 'security', label: 'БЕЗОПАСНОСТЬ', aiCue: 'AI-АНАЛИЗ' },
  { id: 'performance', label: 'ПРОИЗВОДИТЕЛЬНОСТЬ', aiCue: 'AI-АНАЛИЗ' },
  { id: 'deploy', label: 'ДЕПЛОЙ', aiCue: 'AI-ДОКУМЕНТАЦИЯ' },
  { id: 'monitor', label: 'МОНИТОРИНГ', aiCue: 'AI-АНАЛИЗ' },
  { id: 'analytics', label: 'АНАЛИТИКА', aiCue: 'AI-АНАЛИЗ' },
  { id: 'improve', label: 'УЛУЧШЕНИЕ', aiCue: 'AI-ОТЛАДКА' },
];

export const navSections = [
  { id: 'hero', label: 'Старт' },
  { id: 'months', label: 'План по месяцам' },
  { id: 'stats', label: 'Обзор этапа' },
  { id: 'project', label: 'Проект' },
  { id: 'map', label: 'Домены' },
  { id: 'lifecycle', label: 'Цикл работы' },
  { id: 'skills', label: 'Навыки' },
  { id: 'deps', label: 'Порядок тем' },
  { id: 'ai', label: 'Роль AI' },
  { id: 'principles', label: 'Принципы' },
  { id: 'transition', label: 'Дальше' },
] as const;
