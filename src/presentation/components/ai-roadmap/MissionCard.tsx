
import type { Mission } from '@/domain/ai-roadmap';

import styles from './atlas.module.css';

type MissionCardProps = {
  readonly mission: Mission;
};

export function MissionCard({ mission }: MissionCardProps) {
  const boss = mission.kind === 'boss' || mission.kind === 'final';
  return (
    <article className={`${styles.mission} ${boss ? styles.missionBoss : ''}`}>
      <p className={styles.missionCode}>{mission.code}</p>
      <h4 className={styles.nodeTitle}>{mission.title}</h4>
      <p className={styles.nodeShort}>{mission.objective}</p>
      <MissionBlock label="You should understand" items={mission.understand} />
      <MissionBlock label="You should build" items={mission.build} />
      <MissionBlock label="AI can help with" items={mission.aiCanHelp} />
      <MissionBlock label="You must verify" items={mission.mustVerify} />
      <MissionBlock label="Done when" items={mission.doneWhen} />
    </article>
  );
}

function MissionBlock({ label, items }: { label: string; items: readonly string[] }) {
  return (
    <div style={{ marginTop: '0.75rem' }}>
      <strong className={styles.mono} style={{ fontSize: '0.72rem', letterSpacing: '0.08em' }}>
        {label}
      </strong>
      <ul className={styles.checklist}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
