import { useState, type CSSProperties } from 'react';

import { type PhaseId, PHASES, system } from '@/domain/ai-roadmap';

import styles from './atlas.module.css';

type RoadmapHomeViewProps = {
  readonly onOpenPhase: (id: PhaseId) => void;
  readonly onOpenLoop: () => void;
  readonly onOpenLabs: () => void;
};

const PHASE_ACCENT = [
  styles.phaseLaneAccent1,
  styles.phaseLaneAccent2,
  styles.phaseLaneAccent3,
] as const;

const MONTH_FILL = [
  styles.monthTickFill1,
  styles.monthTickFill2,
  styles.monthTickFill3,
] as const;

const HERO_FLOW = [
  { label: 'Specialist', tone: 'muted' },
  { label: 'Foundation', tone: 'accent' },
  { label: 'Integration', tone: 'accent' },
  { label: 'Engineering', tone: 'violet' },
  { label: 'Unknown ↺', tone: 'muted' },
] as const;

export function RoadmapHomeView({
  onOpenPhase,
  onOpenLoop,
  onOpenLabs,
}: RoadmapHomeViewProps) {
  const [layers, setLayers] = useState<ReadonlySet<string>>(
    () => new Set(system.mapLayers.map((l) => l.id)),
  );

  function toggleLayer(id: string) {
    setLayers((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className={styles.atlas} data-product="ai-roadmap" data-screen="map">
      <div className={styles.shell} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.main}>
          <header className={styles.hero}>
            <p className={styles.kicker}>
              <b>01</b> · Interactive
              map
            </p>
            <h1 className={styles.brand}>AI Engineer Roadmap</h1>
            <p className={styles.lead}>
              Capability, not checklist — научиться решать инженерные задачи
              целиком. AI is leverage, not authority.
            </p>

            <div className={styles.heroFlow} aria-hidden>
              {HERO_FLOW.map((node, i) => (
                <span key={node.label} style={{ display: 'contents' }}>
                  <span
                    className={`${styles.heroFlowNode} ${
                      node.tone === 'accent'
                        ? styles.heroFlowNodeAccent
                        : node.tone === 'violet'
                          ? styles.heroFlowNodeViolet
                          : ''
                    }`}
                  >
                    {node.label}
                  </span>
                  {i < HERO_FLOW.length - 1 ? (
                    <span className={styles.heroFlowArrow} />
                  ) : null}
                </span>
              ))}
            </div>

            <div className={styles.ctaRow}>
              <button
                type="button"
                className={styles.button}
                onClick={() => onOpenPhase('foundation')}
              >
                Enter Phase I
              </button>
              <button
                type="button"
                className={styles.buttonGhost}
                onClick={onOpenLoop}
              >
                Open loop
              </button>
            </div>
          </header>

          <section
            className={`${styles.graphicBlock} ${styles.graphicBlockElev} ${styles.hudTicks}`}
            style={{ '--atlas-glow': 'var(--atlas-accent)' } as CSSProperties}
            aria-labelledby="spine-map"
          >
            <div className={styles.graphicHead}>
              <div>
                <p className={styles.kicker}>
                  <b>02</b> · Master
                  spine
                </p>
                <h2 id="spine-map" className={styles.sectionTitle}>
                  Career path as a map
                </h2>
              </div>
            </div>
            <div className={styles.spineTrack} role="list">
              {system.masterSpine.map((step, index) => (
                <div key={step} className={styles.spineNode} role="listitem">
                  <span className={styles.spineDot} aria-hidden />
                  <span className={styles.spineIndex}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={styles.spineLabel}>{step}</span>
                </div>
              ))}
            </div>
            <div className={styles.takeaway}>
              <span className={styles.takeawayTag}>KEY TAKEAWAY</span>
              <p>
                От specialist к оркестрации — и снова в unknown. Горизонтальная
                ось: Engineering Core forever.
              </p>
            </div>
          </section>

          <section
            className={`${styles.graphicBlock} ${styles.hudTicks}`}
            style={{ '--atlas-phase': 'var(--atlas-phase-2)' } as CSSProperties}
            aria-labelledby="phase-roadmap"
          >
            <div className={styles.graphicHead}>
              <div>
                <p className={styles.kicker}>
                  <b>03</b> · 18-month
                  roadmap
                </p>
                <h2 id="phase-roadmap" className={styles.sectionTitle}>
                  Three lanes · one trajectory
                </h2>
              </div>
            </div>
            <div
              className={styles.pipeFlow}
              style={{ marginBottom: '1.25rem' }}
            >
              <span className={`${styles.fnode} ${styles.fnodeAccent}`}>
                Phase I · 01–06
              </span>
              <span className={styles.pipeArr} aria-hidden />
              <span className={`${styles.fnode} ${styles.fnodeAccent}`}>
                Phase II · 07–12
              </span>
              <span className={styles.pipeArr} aria-hidden />
              <span className={`${styles.fnode} ${styles.fnodeViolet}`}>
                Phase III · 13–18
              </span>
              <span className={styles.pipeArr} aria-hidden />
              <span className={`${styles.fnode} ${styles.fnodeMuted}`}>
                Loop forever
              </span>
            </div>
            <div className={styles.phaseRoad}>
              {PHASES.map((phase, i) => (
                <article
                  key={phase.id}
                  className={`${styles.phaseLane} ${PHASE_ACCENT[i] ?? ''}`}
                >
                  {i < PHASES.length - 1 ? (
                    <span className={styles.connector} aria-hidden />
                  ) : null}
                  <div className={styles.phaseLaneHead}>
                    <span className={styles.phaseLaneCode}>{phase.code}</span>
                    <h3 className={styles.phaseLaneTitle}>{phase.title}</h3>
                    <p className={styles.nodeShort}>{phase.subtitle}</p>
                  </div>
                  <div
                    className={styles.monthRail}
                    aria-label={`${phase.title} months`}
                  >
                    {Array.from({ length: 6 }, (_, m) => (
                      <span
                        key={m}
                        className={`${styles.monthTick} ${MONTH_FILL[i] ?? ''}`}
                      >
                        {i * 6 + m + 1}
                      </span>
                    ))}
                  </div>
                  <div className={`${styles.ctaRow} ${styles.phaseEnter}`}>
                    <button
                      type="button"
                      className={styles.button}
                      onClick={() => onOpenPhase(phase.id)}
                    >
                      Enter {phase.code}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <div className={styles.splitStack}>
            <article
              className={`${styles.graphicBlock} ${styles.hudTicks}`}
              style={
                {
                  '--atlas-phase': 'var(--atlas-accent)',
                } as CSSProperties
              }
            >
              <p className={styles.kicker}>
                <b>04</b> · Loop
              </p>
              <h2 className={styles.nodeTitle}>Engineering Loop</h2>
              <p className={styles.nodeShort}>
                PROBLEM → … → AUTOMATE ↺ — кольцо с ролями engineer / AI /
                verify.
              </p>
              <LoopMiniPreview />
              <div className={styles.ctaRow}>
                <button
                  type="button"
                  className={styles.button}
                  onClick={onOpenLoop}
                >
                  Open loop
                </button>
              </div>
            </article>
            <article
              className={`${styles.graphicBlock} ${styles.hudTicks}`}
              style={
                {
                  '--atlas-phase': 'var(--atlas-violet)',
                } as CSSProperties
              }
            >
              <p className={styles.kicker}>
                <b>05</b> · Labs
              </p>
              <h2 className={styles.nodeTitle}>System Labs</h2>
              <p className={styles.nodeShort}>
                Failure Lab · Architecture Gym · Trade-off Engine · Agent Arena
                · Spine Project.
              </p>
              <div className={styles.pipeFlow} style={{ marginTop: '0.75rem' }}>
                {['Failure', 'Gym', 'Trade-off', 'Arena'].map((lab, i) => (
                  <span key={lab} style={{ display: 'contents' }}>
                    {i > 0 ? (
                      <span className={styles.pipeArr} aria-hidden />
                    ) : null}
                    <span className={styles.fnode}>{lab}</span>
                  </span>
                ))}
              </div>
              <div className={styles.ctaRow}>
                <button
                  type="button"
                  className={styles.button}
                  onClick={onOpenLabs}
                >
                  Enter labs
                </button>
              </div>
            </article>
          </div>

          <section
            className={`${styles.graphicBlock} ${styles.graphicBlockElev} ${styles.hudTicks}`}
            style={{ '--atlas-glow': 'var(--atlas-violet)' } as CSSProperties}
            aria-labelledby="layers-title"
          >
            <div className={styles.graphicHead}>
              <div>
                <p className={styles.kicker}>
                  <b>06</b> · Layers
                </p>
                <h2 id="layers-title" className={styles.sectionTitle}>
                  Discipline map
                </h2>
              </div>
            </div>
            <p className={styles.sectionLead}>
              Включай и выключай слои — карта показывает активные дисциплины.
            </p>
            <div
              className={styles.layerMap}
              role="group"
              aria-label="Map layers"
            >
              {system.mapLayers.map((layer) => {
                const on = layers.has(layer.id);
                return (
                  <button
                    key={layer.id}
                    type="button"
                    className={`${styles.layerTile} ${on ? styles.layerTileOn : styles.layerTileOff}`}
                    aria-pressed={on}
                    onClick={() => toggleLayer(layer.id)}
                  >
                    <span className={styles.layerTileLabel}>{layer.label}</span>
                    {on ? (
                      <span className={styles.layerTileBar} aria-hidden />
                    ) : (
                      <span />
                    )}
                  </button>
                );
              })}
            </div>
          </section>

          <section
            className={`${styles.graphicBlock} ${styles.hudTicks}`}
            aria-labelledby="spine-title"
          >
            <div className={styles.graphicHead}>
              <div>
                <p className={styles.kicker}>
                  <b>07</b> · Spine
                  project
                </p>
                <h2 id="spine-title" className={styles.sectionTitle}>
                  One product · three evolutions
                </h2>
              </div>
            </div>
            <p className={styles.sectionLead}>
              Один продукт проходит все 18 месяцев — от MVP к production к
              Engineering OS.
            </p>
            <div className={styles.spineFlow}>
              {system.spineProject.map((stage, i) => (
                <div key={stage.phase} className={styles.spineColumn}>
                  <p className={styles.spineColumnTitle}>{stage.title}</p>
                  <div className={styles.spineSteps}>
                    {stage.steps.map((step) => (
                      <div key={step} className={styles.spineStep}>
                        {step}
                      </div>
                    ))}
                  </div>
                  <div className={styles.ctaRow}>
                    <button
                      type="button"
                      className={styles.buttonGhost}
                      onClick={() => onOpenPhase(stage.phase)}
                    >
                      Open phase {i + 1}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            className={`${styles.graphicBlock} ${styles.hudTicks}`}
            aria-labelledby="durable"
          >
            <div className={styles.graphicHead}>
              <div>
                <p className={styles.kicker}>
                  <b>08</b> · Signal vs
                  noise
                </p>
                <h2 id="durable" className={styles.sectionTitle}>
                  Durable concepts vs volatile tools
                </h2>
              </div>
            </div>
            <div className={styles.compareViz}>
              <div className={styles.compareCol}>
                <h3 className={styles.compareTitle}>Durable</h3>
                <div className={styles.compareBars}>
                  {system.durableConcepts.map((item, i) => (
                    <div key={item} className={styles.compareBar}>
                      <span className={styles.compareBarLabel}>{item}</span>
                      <div className={styles.compareBarTrack}>
                        <div
                          className={styles.compareBarFillDurable}
                          style={{ width: `${92 - i * 4}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.compareCol}>
                <h3 className={styles.compareTitle}>Volatile</h3>
                <div className={styles.compareBars}>
                  {system.volatileTools.map((item, i) => (
                    <div key={item} className={styles.compareBar}>
                      <span className={styles.compareBarLabel}>{item}</span>
                      <div className={styles.compareBarTrack}>
                        <div
                          className={styles.compareBarFillVolatile}
                          style={{ width: `${48 - i * 5}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className={styles.note}>
                  Инструменты меняются. Принципы живут дольше.
                </p>
              </div>
            </div>
          </section>

          <section className={`${styles.graphicBlock} ${styles.hudTicks}`}>
            <p className={styles.kicker}>Engineering Core · forever</p>
            <div className={styles.pipeFlow}>
              {system.engineeringCore.map((item, i) => (
                <span key={item} style={{ display: 'contents' }}>
                  {i > 0 ? (
                    <span className={styles.pipeArr} aria-hidden />
                  ) : null}
                  <span
                    className={`${styles.fnode} ${i === 0 ? styles.fnodeAccent : ''}`}
                  >
                    {item}
                  </span>
                </span>
              ))}
            </div>
          </section>

          <section
            className={`${styles.graphicBlock} ${styles.graphicBlockElev} ${styles.hudTicks}`}
            aria-labelledby="end-model"
          >
            <div className={styles.graphicHead}>
              <div>
                <p className={styles.kicker}>
                  <b>09</b> · End model
                </p>
                <h2 id="end-model" className={styles.sectionTitle}>
                  Learning cycle
                </h2>
              </div>
            </div>
            <div className={styles.endModelPath}>
              {system.endModel.map((step, i) => (
                <span key={step} style={{ display: 'contents' }}>
                  <span className={styles.endModelNode}>{step}</span>
                  {i < system.endModel.length - 1 ? (
                    <span className={styles.endModelArrow} aria-hidden>
                      →
                    </span>
                  ) : null}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function LoopMiniPreview() {
  const colors = [
    '#38d9c0',
    '#7c9cff',
    '#5eb8ff',
    '#38d9c0',
    '#7c9cff',
    '#a78bfa',
    '#38d9c0',
    '#f0b429',
  ];
  const n = system.engineeringLoop.length || 8;
  const r = 42;
  const cx = 60;
  const cy = 60;
  const stroke = 10;
  const gap = 2.5;
  const sweep = 360 / n - gap;

  return (
    <svg
      className={styles.loopSvg}
      viewBox="0 0 120 120"
      aria-hidden
      style={{ width: '9rem', height: '9rem', marginTop: '0.75rem' }}
    >
      {system.engineeringLoop.map((stage, i) => {
        const start = -90 + i * (360 / n) + gap / 2;
        return (
          <path
            key={stage.id}
            d={arcPath(cx, cy, r, start, start + sweep)}
            fill="none"
            stroke={colors[i % colors.length]}
            strokeWidth={stroke}
            opacity={0.9}
          />
        );
      })}
      <circle cx={cx} cy={cy} r={18} fill="#10151d" stroke="#2c3a4d" />
      <text
        x={cx}
        y={cy + 3}
        textAnchor="middle"
        fontSize="7"
        fontFamily="IBM Plex Mono, monospace"
        fill="#38d9c0"
        letterSpacing="0.06em"
      >
        LOOP
      </text>
    </svg>
  );
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
