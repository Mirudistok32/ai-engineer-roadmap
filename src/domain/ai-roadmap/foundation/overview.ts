import type { FoundationOverview } from '../types';

export const foundationOverview: FoundationOverview = {
  title: 'FOUNDATION',
  subtitle: 'Build the foundations of an AI-Augmented Engineer.',
  lead: '6 месяцев, чтобы выйти за пределы узкой специализации и понять полный жизненный цикл создания цифрового продукта.',
  stats: [
    { label: 'WEEKS', value: '26' },
    { label: 'H / WEEK', value: '10' },
    { label: 'CORE PROJECT', value: '1' },
    { label: 'DOMAINS', value: '11+' },
    { label: 'AI', value: 'DAY ONE' },
  ],
  journey: ['THINK', 'DESIGN', 'BUILD', 'TEST', 'OPERATE', 'ANALYZE', 'AUTOMATE'],
  progress: [
    { id: 'foundation', label: 'Foundation', coverage: 100 },
    { id: 'knowledge', label: 'Knowledge', coverage: 72 },
    { id: 'practice', label: 'Practice', coverage: 55 },
    { id: 'project', label: 'Project', coverage: 28 },
  ],
  philosophy: {
    quote:
      'First learn to see the whole system. Then learn to control it. Then learn to automate it.',
    sequence: ['SEE', 'UNDERSTAND', 'BUILD', 'VERIFY', 'MEASURE', 'AUTOMATE'],
  },
  transition: {
    title: 'NEXT: INTEGRATION',
    body: 'Foundation дал тебе карту территории. Следующий этап — научиться соединять эти знания в единую инженерную систему.',
    steps: ['KNOWLEDGE', 'INTEGRATION', 'SYSTEM THINKING', 'AI ORCHESTRATION'],
    cta: 'ENTER PHASE II',
  },
  finalState: {
    title: 'YOU ARE NO LONGER JUST A FRONTEND DEVELOPER',
    from: 'Frontend Specialist',
    to: [
      'Product Thinking',
      'Architecture',
      'Backend',
      'Database',
      'API',
      'QA',
      'DevOps',
      'Security',
      'Performance',
      'Analytics',
      'AI Agents',
    ],
    note: 'Ты расширил границы своей инженерной ответственности — не став отдельным специалистом в каждой роли.',
  },
};
