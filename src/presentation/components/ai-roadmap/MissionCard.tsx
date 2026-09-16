import type { Mission } from '@/domain/ai-roadmap';

import styles from './atlas.module.css';

type MissionCardProps = {
  readonly mission: Mission;
};

export function MissionCard({ mission }: MissionCardProps) {
  const boss = mission.kind === 'boss' || mission.kind === 'final';
  return (
    <article className={`${styles.mission} ${boss ? styles.missionBoss : ''}`}>
      <p className={styles.missionCode}>{formatMissionKind(mission)}</p>
      <h4 className={styles.nodeTitle}>{mission.title}</h4>
      <p className={styles.nodeShort}>{mission.objective}</p>
      <MissionBlock label="Нужно понять" items={mission.understand} />
      <MissionBlock label="Нужно сделать" items={mission.build} />
      <MissionBlock label="AI может помочь" items={mission.aiCanHelp} />
      <MissionBlock label="Проверяешь сам" items={mission.mustVerify} />
      <MissionBlock label="Готово, когда" items={mission.doneWhen} />
    </article>
  );
}

function formatMissionKind(mission: Mission): string {
  if (mission.kind === 'boss') return 'Контрольная';
  if (mission.kind === 'final') return 'Итог этапа';
  return 'Задание';
}

function MissionBlock({
  label,
  items,
}: {
  label: string;
  items: readonly string[];
}) {
  return (
    <div className={styles.missionBlock}>
      <strong className={styles.missionBlockLabel}>{label}</strong>
      <ul className={styles.checklist}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
