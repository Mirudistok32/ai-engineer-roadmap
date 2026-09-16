import type { PhaseMeta } from './types';

/** Ordered product phases — all three live for the AI Engineer Roadmap atlas. */
export const PHASES: readonly PhaseMeta[] = [
  {
    id: 'foundation',
    number: 1,
    code: 'PHASE I',
    title: 'Foundation',
    subtitle: '0–6 months · see the whole system',
    duration: '6 months / ~26 weeks',
    status: 'live',
    href: '/phase/foundation',
  },
  {
    id: 'integration',
    number: 2,
    code: 'PHASE II',
    title: 'Integration',
    subtitle: '6–12 months · connect knowledge into one system',
    duration: '6 months',
    status: 'live',
    href: '/phase/integration',
  },
  {
    id: 'engineering',
    number: 3,
    code: 'PHASE III',
    title: 'Engineering',
    subtitle: '12–18 months +∞ · orchestrate and automate',
    duration: '6+ months',
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
