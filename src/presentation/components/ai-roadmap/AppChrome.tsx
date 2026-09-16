import type { ReactNode } from 'react';

import type { PhaseId } from '@/domain/ai-roadmap';

import styles from './atlas.module.css';

export type AtlasLocation =
  'map' | 'foundation' | 'integration' | 'engineering' | 'loop' | 'labs';

export type AtlasNavHandlers = {
  readonly onOpenMap: () => void;
  readonly onOpenPhase: (id: PhaseId) => void;
  readonly onOpenLoop: () => void;
  readonly onOpenLabs: () => void;
};

type AppChromeProps = AtlasNavHandlers & {
  readonly current: AtlasLocation;
};

const LINKS: readonly {
  id: AtlasLocation;
  label: string;
  ariaLabel: string;
}[] = [
  { id: 'map', label: 'Обзор', ariaLabel: 'Обзор и как начать' },
  { id: 'foundation', label: 'Этап 1', ariaLabel: 'Этап 1 · Фундамент' },
  { id: 'integration', label: 'Этап 2', ariaLabel: 'Этап 2 · Интеграция' },
  { id: 'engineering', label: 'Этап 3', ariaLabel: 'Этап 3 · Инженерия' },
  { id: 'loop', label: 'Цикл', ariaLabel: 'Цикл инженера' },
  { id: 'labs', label: 'Лабы', ariaLabel: 'Системные лаборатории' },
];

const HERE: Record<AtlasLocation, string> = {
  map: 'Обзор плана',
  foundation: 'Этап 1 · Фундамент',
  integration: 'Этап 2 · Интеграция',
  engineering: 'Этап 3 · Инженерия',
  loop: 'Цикл инженера',
  labs: 'Лаборатории',
};

export function AppChrome({
  current,
  onOpenMap,
  onOpenPhase,
  onOpenLoop,
  onOpenLabs,
}: AppChromeProps) {
  function go(id: AtlasLocation) {
    if (id === 'map') onOpenMap();
    else if (id === 'loop') onOpenLoop();
    else if (id === 'labs') onOpenLabs();
    else onOpenPhase(id);
  }

  return (
    <header className={styles.chrome}>
      <div className={styles.chromeInner}>
        <button
          type="button"
          className={styles.chromeBrand}
          onClick={onOpenMap}
        >
          AI Engineer
        </button>
        <p className={styles.chromeHere}>Сейчас: {HERE[current]}</p>
        <nav className={styles.chromeNav} aria-label="Разделы плана">
          {LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              className={`${styles.chromeLink} ${
                current === link.id ? styles.chromeLinkActive : ''
              }`}
              aria-label={link.ariaLabel}
              aria-current={current === link.id ? 'page' : undefined}
              onClick={() => go(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function AtlasFrame({
  current,
  nav,
  children,
}: {
  readonly current: AtlasLocation;
  readonly nav: AtlasNavHandlers;
  readonly children: ReactNode;
}) {
  return (
    <div className={styles.atlas} data-product="ai-roadmap">
      <AppChrome current={current} {...nav} />
      {children}
    </div>
  );
}
