import type { PhaseMeta } from './types';

/** Ordered product phases — all three live for the AI Engineer Roadmap atlas. */
export const PHASES: readonly PhaseMeta[] = [
  {
    id: 'foundation',
    number: 1,
    code: 'PHASE I',
    title: 'Фундамент',
    subtitle: 'Месяцы 1–6 · собери MVP от идеи до деплоя',
    duration: '6 месяцев / ~26 недель',
    status: 'live',
    href: '/phase/foundation',
  },
  {
    id: 'integration',
    number: 2,
    code: 'PHASE II',
    title: 'Интеграция',
    subtitle: 'Месяцы 7–12 · собери production-систему',
    duration: '6 месяцев',
    status: 'live',
    href: '/phase/integration',
  },
  {
    id: 'engineering',
    number: 3,
    code: 'PHASE III',
    title: 'Инженерия',
    subtitle: 'Месяцы 13–18 · проектируй, оркестрируй, автоматизируй',
    duration: '6+ месяцев',
    status: 'live',
    href: '/phase/engineering',
  },
] as const;

export function getPhase(id: string): PhaseMeta | undefined {
  return PHASES.find((phase) => phase.id === id);
}

export function isPhaseId(value: string): value is PhaseMeta['id'] {
  return PHASES.some((phase) => phase.id === value);
}
