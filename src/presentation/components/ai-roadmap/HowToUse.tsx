import type { GuideStep } from '@/domain/ai-roadmap';

import styles from './atlas.module.css';

type HowToUseProps = {
  readonly title?: string;
  readonly steps: readonly GuideStep[];
};

export function HowToUse({
  title = 'Как этим пользоваться',
  steps,
}: HowToUseProps) {
  return (
    <section className={styles.howTo} aria-labelledby="how-to-title">
      <h2 id="how-to-title" className={styles.howToTitle}>
        {title}
      </h2>
      <ol className={styles.howToList}>
        {steps.map((step) => (
          <li key={step.n} className={styles.howToStep}>
            <span className={styles.howToNum} aria-hidden>
              {String(step.n).padStart(2, '0')}
            </span>
            <div>
              <p className={styles.howToStepTitle}>{step.title}</p>
              <p className={styles.howToStepBody}>{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
