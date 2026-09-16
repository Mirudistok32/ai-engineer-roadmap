import type { Month } from '../types';

/** Months 13–18 of the overall roadmap (Phase III). */
export const engineeringMonths: readonly Month[] = [
  {
    id: 'month-13',
    number: 1,
    title: 'Advanced System Design',
    goal: 'Проектировать целостную систему — не отдельное приложение.',
    themes: [
      {
        title: 'System Design',
        topics: [
          'scalability',
          'availability',
          'reliability',
          'latency',
          'throughput',
          'consistency',
          'fault tolerance',
          'bottlenecks',
        ],
      },
      {
        title: 'Scale Thinking',
        topics: ['10 → 1K → 100K → 1M users', 'what changes at each step'],
      },
      {
        title: 'Failure-First Design',
        topics: ['DETECT', 'CONTAIN', 'RECOVER', 'ANALYZE', 'PREVENT'],
      },
    ],
    output: 'Архитектура с явными failure modes и scale trade-offs.',
    missionIds: ['eng-mission-design'],
  },
  {
    id: 'month-14',
    number: 2,
    title: 'AI Engineering',
    goal: 'AI становится engineering infrastructure, не autocomplete.',
    themes: [
      {
        title: 'AI Engineering Stack',
        topics: [
          'model',
          'prompt',
          'context',
          'tools',
          'memory',
          'agent',
          'workflow',
          'multi-agent',
          'autonomous loop',
        ],
      },
      {
        title: 'Agent Architecture',
        topics: ['roles', 'permissions', 'planning', 'validation', 'retries', 'termination'],
      },
      {
        title: 'Agent vs Workflow',
        topics: ['script', 'workflow', 'agent', 'multi-agent', 'autonomous system'],
      },
    ],
    output: 'Понять, когда специализация агентов оправдана, а когда — лишняя сложность.',
    missionIds: ['eng-mission-agents'],
  },
  {
    id: 'month-15',
    number: 3,
    title: 'Engineering Automation',
    goal: 'Убрать человека из повторяющейся работы — освободить внимание для мышления.',
    themes: [
      {
        title: 'Automation Audit',
        topics: [
          'what / how often / time',
          'scripted?',
          'automated?',
          'AI?',
          'self-verify?',
          'run without me?',
        ],
      },
      {
        title: 'Automation ROI',
        topics: ['Frequency × Time Saved × Reliability'],
      },
      {
        title: 'Self-Healing Concept',
        topics: ['detect', 'diagnose', 'propose fix', 'test', 'deploy', 'verify'],
      },
    ],
    output: 'Карта automation candidates с оценкой риска передачи цикла AI.',
    missionIds: ['eng-mission-automate'],
  },
  {
    id: 'month-16',
    number: 4,
    title: 'Product Engineering',
    goal: 'Понимать, какую систему вообще стоит строить.',
    themes: [
      {
        title: 'Problem Discovery',
        topics: ['IDEA ≠ PROBLEM', 'FEATURE ≠ VALUE', 'REQUEST ≠ ROOT PROBLEM'],
      },
      {
        title: 'Product Decision Loop',
        topics: ['observation', 'hypothesis', 'experiment', 'data', 'decision', 'iteration'],
      },
      {
        title: 'Product ↔ Engineering',
        topics: ['PRODUCT ↔ UX ↔ ENGINEERING ↔ INFRA ↔ DATA'],
      },
    ],
    output: 'Гипотезы и метрики до большой реализации.',
    missionIds: ['eng-mission-product'],
  },
  {
    id: 'month-17',
    number: 5,
    title: 'Engineering Leadership',
    goal: 'Управлять инженерной работой — не обязательно быть менеджером.',
    themes: [
      {
        title: 'Planning',
        topics: ['scope', 'decomposition', 'estimation', 'risks', 'tech debt'],
      },
      {
        title: 'Decision Making',
        topics: ['question', 'context', 'options', 'trade-offs', 'consequences'],
      },
      {
        title: 'Communication & Control',
        topics: ['explain simply', 'docs', 'AI briefs', 'review', 'GOAL→DELIVERY'],
      },
    ],
    output: 'Решение + ADR + понятное задание AI/команде.',
    missionIds: ['eng-mission-lead'],
  },
  {
    id: 'month-18',
    number: 6,
    title: 'Autonomous Engineering',
    goal: 'Создать собственную AI-driven engineering system / Personal Engineering OS.',
    themes: [
      {
        title: 'Personal Engineering System',
        topics: [
          'research→docs loop',
          'rules',
          'skills',
          'agents',
          'commands',
          'hooks',
          'MCP',
          'automation',
        ],
      },
      {
        title: 'Verification Architecture',
        topics: ['type→lint→tests→security→rules→human approval'],
      },
      {
        title: 'Autonomy Levels',
        topics: ['L0 Manual → L6 Autonomous', 'risk-gated autonomy'],
      },
    ],
    output: 'Engineering OS + capstone product + Final Boss workflow.',
    missionIds: ['eng-capstone', 'eng-final-boss'],
  },
] as const;
