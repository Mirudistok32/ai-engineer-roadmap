import {
  type PhaseId,
  PHASES,
  productGuide,
  system,
} from '@/domain/ai-roadmap';

import { AtlasFrame, type AtlasNavHandlers } from './AppChrome';
import styles from './atlas.module.css';
import { HowToUse } from './HowToUse';

type RoadmapHomeViewProps = AtlasNavHandlers;

const PHASE_GUIDE = {
  foundation: productGuide.phases.foundation,
  integration: productGuide.phases.integration,
  engineering: productGuide.phases.engineering,
} as const;

export function RoadmapHomeView({
  onOpenMap,
  onOpenPhase,
  onOpenLoop,
  onOpenLabs,
}: RoadmapHomeViewProps) {
  const nav = { onOpenMap, onOpenPhase, onOpenLoop, onOpenLabs };

  return (
    <AtlasFrame current="map" nav={nav}>
      <div className={styles.shell} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.main}>
          <header className={styles.hero}>
            <p className={styles.kicker}>{productGuide.kicker}</p>
            <h1 className={styles.brand}>{productGuide.headline}</h1>
            <p className={styles.lead}>{productGuide.what}</p>
            <p className={styles.callout}>
              <strong>С чего начать. </strong>
              Открой Этап 1 и возьми месяц 1. Остальное — справочник и
              тренажёры.
            </p>
            <div className={styles.ctaRow}>
              <button
                type="button"
                className={styles.button}
                onClick={() => onOpenPhase('foundation')}
              >
                Начать с 1-го месяца
              </button>
              <button
                type="button"
                className={styles.buttonGhost}
                onClick={() =>
                  document
                    .getElementById('phases')
                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              >
                Смотреть три этапа
              </button>
            </div>
            <p className={styles.sublead}>{productGuide.who}</p>
            <HowToUse steps={productGuide.steps} />
          </header>

          <section
            id="phases"
            className={styles.section}
            aria-labelledby="phases-title"
          >
            <p className={styles.kicker}>Главный путь</p>
            <h2 id="phases-title" className={styles.sectionTitle}>
              Три этапа · один продукт
            </h2>
            <p className={styles.sectionLead}>{productGuide.spine.body}</p>
            <div className={styles.phasePath}>
              {PHASES.map((phase, index) => {
                const guide = PHASE_GUIDE[phase.id];
                return (
                  <article
                    key={phase.id}
                    className={`${styles.phaseCard} ${
                      index === 0 ? styles.phaseCardStart : ''
                    }`}
                  >
                    <p className={styles.phaseCardEyebrow}>{guide.eyebrow}</p>
                    <h3 className={styles.nodeTitle}>{guide.title}</h3>
                    <p className={styles.phaseCardBody}>{guide.forWhom}</p>
                    <p className={styles.phaseCardBody}>{guide.thisPhase}</p>
                    <p className={styles.phaseCardHint}>{guide.startWith}</p>
                    <div className={styles.ctaRow}>
                      <button
                        type="button"
                        className={
                          index === 0 ? styles.button : styles.buttonGhost
                        }
                        onClick={() => onOpenPhase(phase.id)}
                      >
                        {index === 0
                          ? 'Начать этап 1'
                          : `Открыть этап ${index + 1}`}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className={styles.section} aria-labelledby="practice-title">
            <p className={styles.kicker}>Тренажёры</p>
            <h2 id="practice-title" className={styles.sectionTitle}>
              Когда уже есть план месяца
            </h2>
            <p className={styles.sectionLead}>
              Сюда заходи после того, как открыл текущий месяц. Это не отдельные
              курсы.
            </p>
            <div className={styles.splitStack}>
              <article className={styles.phaseCard}>
                <h3 className={styles.nodeTitle}>
                  {productGuide.tools.loop.title}
                </h3>
                <p className={styles.phaseCardBody}>
                  {productGuide.tools.loop.why}
                </p>
                <p className={styles.phaseCardHint}>
                  {productGuide.tools.loop.how}
                </p>
                <div className={styles.ctaRow}>
                  <button
                    type="button"
                    className={styles.buttonGhost}
                    onClick={onOpenLoop}
                  >
                    Открыть цикл
                  </button>
                </div>
              </article>
              <article className={styles.phaseCard}>
                <h3 className={styles.nodeTitle}>
                  {productGuide.tools.labs.title}
                </h3>
                <p className={styles.phaseCardBody}>
                  {productGuide.tools.labs.why}
                </p>
                <p className={styles.phaseCardHint}>
                  {productGuide.tools.labs.how}
                </p>
                <div className={styles.ctaRow}>
                  <button
                    type="button"
                    className={styles.buttonGhost}
                    onClick={onOpenLabs}
                  >
                    Открыть лаборатории
                  </button>
                </div>
              </article>
            </div>
          </section>

          <details className={styles.refBlock}>
            <summary>Справочник карты — можно не читать сразу</summary>
            <p className={styles.refLead}>
              Дисциплины, эволюция продукта и что учить надолго. Это контекст,
              не список дел на сегодня.
            </p>
            <p className={styles.kicker}>Дисциплины на всём пути</p>
            <div className={styles.journey}>
              {system.mapLayers.map((layer) => (
                <span key={layer.id} className={styles.chip}>
                  {layer.label}
                </span>
              ))}
            </div>
            <p className={styles.kicker} style={{ marginTop: '1.5rem' }}>
              Как растёт один продукт
            </p>
            <div className={styles.spineFlow}>
              {system.spineProject.map((stage) => (
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
                      onClick={() => onOpenPhase(stage.phase as PhaseId)}
                    >
                      К этапу
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.compareViz} style={{ marginTop: '1.5rem' }}>
              <div className={styles.compareCol}>
                <h3 className={styles.compareTitle}>Учить надолго</h3>
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
                <h3 className={styles.compareTitle}>Меняется часто</h3>
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
                  Инструменты меняются. Принципы живут дольше — с них и начинай.
                </p>
              </div>
            </div>
          </details>
        </div>
      </div>
    </AtlasFrame>
  );
}
