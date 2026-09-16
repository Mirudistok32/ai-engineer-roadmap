import { useId, useState } from 'react';

import { productGuide, system } from '@/domain/ai-roadmap';
import type { AtlasNavHandlers } from './AppChrome';
import { AtlasFrame } from './AppChrome';
import styles from './atlas.module.css';

type EngineeringLoopViewProps = AtlasNavHandlers;

const SEG_COLORS = [
  '#38d9c0',
  '#7c9cff',
  '#5eb8ff',
  '#38d9c0',
  '#7c9cff',
  '#a78bfa',
  '#38d9c0',
  '#f0b429',
];

export function EngineeringLoopView({
  onOpenMap,
  onOpenPhase,
  onOpenLoop,
  onOpenLabs,
}: EngineeringLoopViewProps) {
  const [active, setActive] = useState(
    system.engineeringLoop[0]?.id ?? 'problem',
  );
  const stage =
    system.engineeringLoop.find((s) => s.id === active) ??
    system.engineeringLoop[0];
  const titleId = useId();
  const nav = { onOpenMap, onOpenPhase, onOpenLoop, onOpenLabs };
  const tool = productGuide.tools.loop;

  return (
    <AtlasFrame current="loop" nav={nav}>
      <div className={styles.shell} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.main}>
          <header className={styles.hero}>
            <p className={styles.kicker}>Тренажёр · не замена плана</p>
            <h1 className={styles.brand}>{tool.title}</h1>
            <p className={styles.lead}>{tool.why}</p>
            <p className={styles.callout}>
              <strong>Как пользоваться. </strong>
              {tool.how}
            </p>
          </header>

          <div className={styles.loopScene}>
            <div>
              <LoopRing
                activeId={active}
                onSelect={setActive}
                labelledBy={titleId}
              />
              <div
                className={styles.loopStageList}
                role="listbox"
                aria-label="Этапы цикла"
              >
                {system.engineeringLoop.map((stage) => (
                  <button
                    key={stage.id}
                    type="button"
                    role="option"
                    aria-selected={stage.id === active}
                    className={`${styles.loopStageChip} ${
                      stage.id === active ? styles.loopStageChipActive : ''
                    }`}
                    onClick={() => setActive(stage.id)}
                  >
                    {stage.label}
                  </button>
                ))}
              </div>
            </div>

            {stage ? (
              <article
                className={`${styles.graphicBlock} ${styles.hudTicks}`}
                aria-live="polite"
                aria-labelledby={titleId}
              >
                <p className={styles.kicker}>Активный этап</p>
                <h2 id={titleId} className={styles.sectionTitle}>
                  {stage.label}
                </h2>
                <p className={styles.sectionLead}>{stage.engineer}</p>
                <LoopBlock title="Что понимать" items={stage.knowledge} />
                <LoopBlock title="Что может сделать AI" items={stage.aiTools} />
                <LoopBlock
                  title="Что проверяешь сам"
                  items={stage.humanMustVerify}
                />
                <LoopBlock
                  title="Типичные ошибки"
                  items={stage.typicalMistakes}
                />
                <p className={styles.nodeShort} style={{ marginTop: '1rem' }}>
                  <strong className={styles.mono}>Практика · </strong>
                  {stage.mission}
                </p>
              </article>
            ) : null}
          </div>

          <div className={styles.ctaRow}>
            <button
              type="button"
              className={styles.button}
              onClick={onOpenLabs}
            >
              Открыть лаборатории
            </button>
            <button
              type="button"
              className={styles.buttonGhost}
              onClick={onOpenMap}
            >
              К обзору плана
            </button>
          </div>
        </div>
      </div>
    </AtlasFrame>
  );
}

function LoopRing({
  activeId,
  onSelect,
  labelledBy,
}: {
  activeId: string;
  onSelect: (id: string) => void;
  labelledBy: string;
}) {
  const stages = system.engineeringLoop;
  const n = stages.length;
  const cx = 160;
  const cy = 160;
  const r = 112;
  const gap = 3;
  const sweep = 360 / n - gap;

  return (
    <div className={styles.loopSvgWrap}>
      <svg
        className={styles.loopSvg}
        viewBox="0 0 320 320"
        role="img"
        aria-labelledby={labelledBy}
      >
        <title>Этапы инженерного цикла</title>
        {stages.map((stage, i) => {
          const start = -90 + i * (360 / n) + gap / 2;
          const mid = start + sweep / 2;
          const labelPos = polar(cx, cy, r + 28, mid);
          const active = stage.id === activeId;
          return (
            <g key={stage.id}>
              <path
                d={arcPath(cx, cy, r, start, start + sweep)}
                className={`${styles.loopSeg} ${active ? styles.loopSegActive : ''}`}
                stroke={SEG_COLORS[i % SEG_COLORS.length]}
                tabIndex={0}
                role="button"
                aria-pressed={active}
                aria-label={stage.label}
                onClick={() => onSelect(stage.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelect(stage.id);
                  }
                }}
              />
              <text
                x={labelPos.x}
                y={labelPos.y}
                className={`${styles.loopLabel} ${active ? styles.loopLabelActive : ''}`}
              >
                {shortLabel(stage.label)}
              </text>
            </g>
          );
        })}
        <circle className={styles.loopHub} cx={cx} cy={cy} r={48} />
        <text className={styles.loopHubText} x={cx} y={cy - 4}>
          ИНЖЕНЕР
        </text>
        <text className={styles.loopHubText} x={cx} y={cy + 14}>
          + AI
        </text>
      </svg>
    </div>
  );
}

function LoopBlock({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div style={{ marginTop: '0.85rem' }}>
      <p
        className={styles.mono}
        style={{ fontSize: '0.72rem', letterSpacing: '0.08em' }}
      >
        {title}
      </p>
      <ul className={styles.topicList}>
        {items.map((item) => (
          <li key={item} className={styles.topic}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function shortLabel(label: string): string {
  const clean = label.replace(/[^A-Za-zА-Яа-яЁё]/g, ' ').trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return label.slice(0, 8).toUpperCase();
  if (parts.length === 1) return parts[0]!.slice(0, 8).toUpperCase();
  return parts
    .slice(0, 2)
    .map((p) => p.slice(0, 4))
    .join(' ')
    .toUpperCase();
}

function arcPath(
  cx: number,
  cy: number,
  r: number,
  startDeg: number,
  endDeg: number,
): string {
  const start = polar(cx, cy, r, endDeg);
  const end = polar(cx, cy, r, startDeg);
  const large = endDeg - startDeg <= 180 ? 0 : 1;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${large} 0 ${end.x} ${end.y}`;
}

function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}
