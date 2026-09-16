
import { useId, useState } from 'react';

import type { Domain } from '@/domain/ai-roadmap';

import styles from './atlas.module.css';

const DEPTHS = [
  { id: 'summary', label: 'L1 Summary' },
  { id: 'detail', label: 'L2 Detail' },
  { id: 'know', label: 'L3 Know' },
  { id: 'able', label: 'L4 Able' },
  { id: 'ai', label: 'L6 AI' },
] as const;

type DomainCardProps = {
  readonly domain: Domain;
  readonly selected: boolean;
  readonly onSelect: () => void;
};

export function DomainCard({ domain, selected, onSelect }: DomainCardProps) {
  const panelId = useId();
  const [depth, setDepth] = useState<(typeof DEPTHS)[number]['id']>('summary');

  return (
    <article>
      <button
        type="button"
        className={`${styles.nodeButton} ${selected ? styles.nodeButtonActive : ''}`}
        aria-expanded={selected}
        aria-controls={panelId}
        onClick={onSelect}
      >
        <h3 className={styles.nodeTitle}>{domain.title}</h3>
        <p className={styles.nodeShort}>{domain.short}</p>
      </button>
      {selected ? (
        <div id={panelId} className={styles.panel} style={{ marginTop: '0.65rem' }}>
          <p className={styles.kicker}>{domain.pillar}</p>
          <p className={styles.sectionLead} style={{ marginBottom: '0.75rem' }}>
            {domain.why}
          </p>
          <div className={styles.depthTabs} role="tablist" aria-label={`${domain.title} depth`}>
            {DEPTHS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={depth === tab.id}
                className={`${styles.depthTab} ${depth === tab.id ? styles.depthTabActive : ''}`}
                onClick={() => setDepth(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <DepthBody domain={domain} depth={depth} />
          <p className={styles.nodeShort} style={{ marginTop: '0.85rem' }}>
            <strong className={styles.mono}>AI leverage · </strong>
            {domain.aiLeverage}
          </p>
          <p className={styles.nodeShort}>
            <strong className={styles.mono}>Outcome · </strong>
            {domain.outcome}
          </p>
          <p className={styles.kicker} style={{ marginTop: '1rem' }}>
            What good looks like
          </p>
          <ul className={styles.topicList}>
            {domain.whatGoodLooksLike.map((item) => (
              <li key={item} className={styles.topic}>
                {item}
              </li>
            ))}
          </ul>
          <ul className={styles.topicList} aria-label="Topics">
            {domain.topics.map((topic) => (
              <li key={topic} className={styles.topic}>
                {topic}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}

function DepthBody({ domain, depth }: { domain: Domain; depth: (typeof DEPTHS)[number]['id'] }) {
  if (depth === 'summary') return <p className={styles.sectionLead}>{domain.depth.summary}</p>;
  if (depth === 'detail') return <p className={styles.sectionLead}>{domain.depth.detail}</p>;
  const items =
    depth === 'know' ? domain.depth.know : depth === 'able' ? domain.depth.able : domain.depth.ai;
  return (
    <ul className={styles.detailList}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
