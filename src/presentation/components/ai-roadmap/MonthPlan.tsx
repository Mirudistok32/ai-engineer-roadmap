import type { Mission, Month } from '@/domain/ai-roadmap';

import styles from './atlas.module.css';
import { MissionCard } from './MissionCard';

type MonthPlanProps = {
  readonly month: Month;
  readonly displayNumber: number;
  readonly missions: readonly Mission[];
  readonly defaultOpen?: boolean;
};

export function MonthPlan({
  month,
  displayNumber,
  missions,
  defaultOpen = false,
}: MonthPlanProps) {
  return (
    <article className={styles.monthPlan}>
      <header className={styles.monthHead}>
        <span className={styles.monthNum}>Месяц {displayNumber}</span>
        <h3 className={styles.nodeTitle}>{month.title}</h3>
      </header>
      <p className={styles.monthGoal}>
        <span className={styles.monthGoalLabel}>Цель месяца. </span>
        {month.goal}
      </p>
      <p className={styles.nodeShort}>
        <strong className={styles.mono}>К концу месяца · </strong>
        {month.output}
      </p>

      <details className={styles.fold}>
        <summary className={styles.foldSummary}>
          Темы месяца — шпаргалка
        </summary>
        <div className={styles.themeGrid}>
          {month.themes.map((theme) => (
            <div key={theme.title}>
              <h4 className={styles.nodeTitle}>{theme.title}</h4>
              <ul className={styles.topicList}>
                {theme.topics.map((topic) => (
                  <li key={topic} className={styles.topic}>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </details>

      {missions.map((mission, index) => (
        <details
          key={mission.id}
          className={styles.fold}
          open={defaultOpen && index === 0}
        >
          <summary className={styles.foldSummary}>
            Задание · {mission.title}
          </summary>
          <MissionCard mission={mission} />
        </details>
      ))}
    </article>
  );
}
