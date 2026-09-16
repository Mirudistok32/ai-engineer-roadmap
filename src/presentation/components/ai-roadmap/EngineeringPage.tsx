import { engineering, productGuide } from '@/domain/ai-roadmap';
import type { AtlasNavHandlers } from './AppChrome';
import { AtlasFrame } from './AppChrome';
import styles from './atlas.module.css';
import { MissionCard } from './MissionCard';
import { collectMonthMissions } from './collectMonthMissions';
import { MonthPlan } from './MonthPlan';
import { Reveal } from './Reveal';
import { useActiveSection } from './useActiveSection';

type EngineeringPageProps = AtlasNavHandlers;

const NAV_IDS = engineering.navSections.map((s) => s.id);

export function EngineeringPage({
  onOpenMap,
  onOpenPhase,
  onOpenLoop,
  onOpenLabs,
}: EngineeringPageProps) {
  const active = useActiveSection(NAV_IDS);
  const overview = engineering.engineeringOverview;
  const guide = productGuide.phases.engineering;
  const nav = { onOpenMap, onOpenPhase, onOpenLoop, onOpenLabs };

  function scrollTo(id: string) {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <AtlasFrame current="engineering" nav={nav}>
      <div className={styles.shell}>
        <nav className={styles.nav} aria-label="Разделы этапа 3">
          {engineering.navSections.map((section) => (
            <button
              key={section.id}
              type="button"
              className={`${styles.navLink} ${active === section.id ? styles.navLinkActive : ''}`}
              aria-current={active === section.id ? 'true' : undefined}
              onClick={() => scrollTo(section.id)}
            >
              {section.label}
            </button>
          ))}
        </nav>

        <div className={styles.main}>
          <div className={styles.navMobile} aria-label="Разделы этапа 3">
            {engineering.navSections.map((section) => (
              <button
                key={section.id}
                type="button"
                className={`${styles.navLink} ${active === section.id ? styles.navLinkActive : ''}`}
                onClick={() => scrollTo(section.id)}
              >
                {section.label}
              </button>
            ))}
          </div>

          <header id="hero" className={styles.section}>
            <Reveal>
              <p className={styles.kicker}>{guide.eyebrow}</p>
              <h1 className={styles.display}>{guide.title}</h1>
              <p className={styles.lead}>{guide.thisPhase}</p>
              <p className={styles.sublead}>{guide.forWhom}</p>
              <p className={styles.callout}>
                <strong>Сейчас сделай это. </strong>
                {guide.startWith}
              </p>
              <div className={styles.ctaRow}>
                <button
                  type="button"
                  className={styles.button}
                  onClick={() => scrollTo('months')}
                >
                  К плану по месяцам
                </button>
              </div>
            </Reveal>
          </header>

          <section
            id="months"
            className={styles.section}
            aria-labelledby="months-title"
          >
            <Reveal>
              <h2 id="months-title" className={styles.sectionTitle}>
                План на месяцы 13–18
              </h2>
              <p className={styles.sectionLead}>
                Открой текущий месяц и сделай задание. Ниже — рамка: думай от
                масштаба и сбоев, не от модного стека.
              </p>
              <div className={styles.month}>
                {engineering.engineeringMonths.map((month, index) => (
                  <MonthPlan
                    key={month.id}
                    month={month}
                    displayNumber={month.number + 12}
                    missions={collectMonthMissions(
                      month,
                      engineering.engineeringMissionById,
                    )}
                    defaultOpen={index === 0}
                  />
                ))}
              </div>
              <div
                className={styles.splitStack}
                style={{ marginTop: '1.25rem' }}
              >
                <div className={styles.panel}>
                  <p className={styles.kicker}>Мышление масштаба</p>
                  <div className={styles.chain}>
                    {engineering.scaleSteps.map((step) => (
                      <div key={step} className={styles.chainStep}>
                        {step}
                      </div>
                    ))}
                  </div>
                  <ul
                    className={styles.topicList}
                    style={{ marginTop: '0.75rem' }}
                  >
                    {engineering.scaleChanges.map((item) => (
                      <li key={item} className={styles.topic}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.panel}>
                  <p className={styles.kicker}>Сначала сбои</p>
                  <div className={styles.journey}>
                    {engineering.failureModes.map((mode) => (
                      <span key={mode} className={styles.chip}>
                        {mode}
                      </span>
                    ))}
                  </div>
                  <div
                    className={styles.chain}
                    style={{ marginTop: '0.75rem' }}
                  >
                    {engineering.failureLoop.map((step) => (
                      <div key={step} className={styles.chainStep}>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          <section
            id="map"
            className={styles.section}
            aria-labelledby="map-title"
          >
            <Reveal>
              <h2 id="map-title" className={styles.sectionTitle}>
                Карта Engineering
              </h2>
              <p className={styles.sectionLead}>
                Человек задаёт intent. Оркестратор ведёт систему. Автоматизация
                усиливает возможности.
              </p>
              <div className={styles.centerEngineer}>
                Человек · инженерный intent
              </div>
              <div className={`${styles.panel} ${styles.panelGlow}`}>
                <div className={styles.chain}>
                  {overview.orchestratorFlow.map((step) => (
                    <div key={step} className={styles.chainStep}>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.journey} style={{ marginTop: '1.25rem' }}>
                {engineering.identityEvolution.map((step) => (
                  <span key={step} className={styles.chip}>
                    {step}
                  </span>
                ))}
              </div>
              <div className={styles.panel} style={{ marginTop: '1.25rem' }}>
                <p className={styles.kicker}>Итоговый workflow</p>
                <div className={styles.journey}>
                  {engineering.finalWorkflow.map((step) => (
                    <span key={step} className={styles.chip}>
                      {step}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className={styles.progressGrid}
                style={{ marginTop: '1.25rem' }}
              >
                {overview.progress.map((axis) => (
                  <ProgressBar
                    key={axis.id}
                    label={axis.label}
                    value={axis.coverage}
                  />
                ))}
              </div>
              <div className={styles.grid3} style={{ marginTop: '1.25rem' }}>
                <article className={styles.panel}>
                  <p className={styles.phaseTag}>ДУМАТЬ</p>
                  <ul className={styles.topicList}>
                    {engineering.finalEngineerMap.think.map((item) => (
                      <li key={item} className={styles.topic}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
                <article className={styles.panel}>
                  <p className={styles.phaseTag}>СТРОИТЬ</p>
                  <ul className={styles.topicList}>
                    {engineering.finalEngineerMap.build.map((item) => (
                      <li key={item} className={styles.topic}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
                <article className={styles.panel}>
                  <p className={styles.phaseTag}>ЭКСПЛУАТИРОВАТЬ</p>
                  <ul className={styles.topicList}>
                    {engineering.finalEngineerMap.operate.map((item) => (
                      <li key={item} className={styles.topic}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
              <div className={styles.panel} style={{ marginTop: '1rem' }}>
                <p className={`${styles.kicker} ${styles.ai}`}>
                  AI Engineering → Система → Эволюция
                </p>
                <div className={styles.journey}>
                  {[
                    ...engineering.finalEngineerMap.ai,
                    ...engineering.finalEngineerMap.beyond,
                  ].map((item) => (
                    <span key={item} className={styles.chip}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          <section
            id="ai"
            className={styles.section}
            aria-labelledby="ai-title"
          >
            <Reveal>
              <h2 id="ai-title" className={styles.sectionTitle}>
                AI-инженерия
              </h2>
              <div className={styles.splitStack}>
                <div className={styles.panel}>
                  <p className={styles.kicker}>AI-стек</p>
                  <div className={styles.chain}>
                    {engineering.aiStack.map((step) => (
                      <div key={step} className={styles.chainStep}>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.panel}>
                  <p className={styles.kicker}>Агент vs workflow</p>
                  <div className={styles.ladder}>
                    {engineering.agentVsWorkflow.map((step) => (
                      <div key={step} className={styles.ladderStep}>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className={`${styles.panel} ${styles.panelGlow}`}
                style={{ marginTop: '1.25rem' }}
              >
                <p className={styles.kicker}>Модель человеческого контроля</p>
                <p className={styles.sectionLead}>
                  Чем сильнее AI, тем выше требования к человеческому пониманию.
                </p>
                <div className={styles.centerEngineer}>HUMAN</div>
                <div className={styles.journey}>
                  {engineering.humanControlModel.map((item) => (
                    <span key={item} className={styles.chip}>
                      {item}
                    </span>
                  ))}
                </div>
                <p
                  className={styles.nodeShort}
                  style={{ marginTop: '0.85rem' }}
                >
                  AI EXECUTION ████████████████████ — под человеческим
                  суждением.
                </p>
              </div>
              <div
                className={styles.splitStack}
                style={{ marginTop: '1.25rem' }}
              >
                <div className={styles.panel}>
                  <p className={styles.kicker}>Архитектура верификации</p>
                  <div className={styles.chain}>
                    {engineering.verificationArchitecture.map((step) => (
                      <div key={step} className={styles.chainStep}>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.panel}>
                  <p className={styles.kicker}>
                    Оценка качества AI · демо workflow
                  </p>
                  <div className={styles.progressGrid}>
                    {overview.aiQuality.map((axis) => (
                      <ProgressBar
                        key={axis.id}
                        label={axis.label}
                        value={axis.coverage}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div
                className={styles.splitStack}
                style={{ marginTop: '1.25rem' }}
              >
                <div className={styles.panel}>
                  <p className={styles.kicker}>Полная стоимость системы</p>
                  <div className={styles.chain}>
                    {engineering.systemCost.map((step) => (
                      <div key={step} className={styles.chainStep}>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.panel}>
                  <p className={styles.kicker}>AI-рычаг</p>
                  <div className={styles.chain}>
                    {engineering.aiLeverageLoop.map((step) => (
                      <div key={step} className={styles.chainStep}>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.panel} style={{ marginTop: '1.25rem' }}>
                <p className={styles.kicker}>Внимание — узкое место</p>
                <div className={styles.chain}>
                  {engineering.attentionTrap.map((step) => (
                    <div key={step} className={styles.chainStep}>
                      {step}
                    </div>
                  ))}
                </div>
                <div
                  className={styles.progressGrid}
                  style={{ marginTop: '1rem' }}
                >
                  {overview.attentionLoad.map((axis) => (
                    <ProgressBar
                      key={axis.id}
                      label={axis.label}
                      value={axis.coverage}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          <section
            id="os"
            className={styles.section}
            aria-labelledby="os-title"
          >
            <Reveal>
              <h2 id="os-title" className={styles.sectionTitle}>
                Личная Engineering OS
              </h2>
              <p className={styles.sectionLead}>
                Rules + Skills + Agents + Commands + Hooks + MCP + Docs +
                Automation — организованная среда, а не хаос промптов.
              </p>
              <div className={styles.centerEngineer}>
                {engineering.engineeringOsMap.center}
              </div>
              <div className={styles.journey}>
                {engineering.engineeringOsMap.pillars.map((pillar) => (
                  <span key={pillar} className={styles.chip}>
                    {pillar}
                  </span>
                ))}
              </div>
              <ul className={styles.topicList} style={{ marginTop: '1rem' }}>
                {engineering.engineeringOs.map((item) => (
                  <li key={item} className={styles.topic}>
                    {item}
                  </li>
                ))}
              </ul>
              <div
                className={styles.themeGrid}
                style={{ marginTop: '1.25rem' }}
              >
                {engineering.engineeringSkills.map((skill) => (
                  <article key={skill.id} className={styles.panel}>
                    <h3 className={styles.nodeTitle}>{skill.title}</h3>
                    <p className={styles.nodeShort}>{skill.description}</p>
                    <span className={styles.skillStatus}>
                      {formatSkillStatus(
                        engineering.engineeringSkillStatusById[skill.id] ??
                          'available',
                      )}{' '}
                      · {skill.level}
                    </span>
                  </article>
                ))}
              </div>
            </Reveal>
          </section>

          <section
            id="capstone"
            className={styles.section}
            aria-labelledby="capstone-title"
          >
            <Reveal>
              <h2 id="capstone-title" className={styles.sectionTitle}>
                Capstone · реальный продукт
              </h2>
              <p className={styles.sectionLead}>
                Самостоятельно выбрать проблему. Не tutorial project. Цикл не
                заканчивается на deploy.
              </p>
              <div className={styles.themeGrid}>
                {engineering.capstoneRequirements.map((block) => (
                  <article key={block.area} className={styles.panel}>
                    <h3 className={styles.nodeTitle}>{block.area}</h3>
                    <ul className={styles.topicList}>
                      {block.items.map((item) => (
                        <li key={item} className={styles.topic}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              <div className={styles.panel} style={{ marginTop: '1.25rem' }}>
                <p className={styles.kicker}>Цикл разработки</p>
                <div className={styles.journey}>
                  {engineering.capstoneLoop.map((step) => (
                    <span key={step} className={styles.chip}>
                      {step}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.panel} style={{ marginTop: '1.25rem' }}>
                <p className={styles.kicker}>
                  Предлагаемая AI-команда — реши, кто нужен
                </p>
                <div className={styles.journey}>
                  {engineering.proposedAgents.map((agent) => (
                    <span key={agent} className={styles.chip}>
                      {agent}
                    </span>
                  ))}
                </div>
              </div>
              {engineering.engineeringMissionById['eng-capstone'] ? (
                <div style={{ marginTop: '1.25rem' }}>
                  <MissionCard
                    mission={engineering.engineeringMissionById['eng-capstone']}
                  />
                </div>
              ) : null}
              {engineering.engineeringMissionById['eng-final-boss'] ? (
                <div style={{ marginTop: '1.25rem' }}>
                  <MissionCard
                    mission={
                      engineering.engineeringMissionById['eng-final-boss']
                    }
                  />
                </div>
              ) : null}
              <div className={styles.panel} style={{ marginTop: '1.25rem' }}>
                <p className={styles.kicker}>Пайплайн Final Boss</p>
                <div className={styles.chain}>
                  {engineering.finalBossFlow.map((step) => (
                    <div key={step} className={styles.chainStep}>
                      {step}
                    </div>
                  ))}
                </div>
                <div
                  className={styles.journey}
                  style={{ marginTop: '0.85rem' }}
                >
                  {engineering.humanControl.map((step) => (
                    <span key={step} className={styles.chip}>
                      Человек · {step}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          <section
            id="autonomy"
            className={styles.section}
            aria-labelledby="autonomy-title"
          >
            <Reveal>
              <h2 id="autonomy-title" className={styles.sectionTitle}>
                Автономия и зрелость
              </h2>
              <div className={styles.ladder}>
                {engineering.autonomyLevels.map((item) => (
                  <div
                    key={item.level}
                    className={`${styles.ladderStep} ${item.level < 5 ? '' : styles.ladderStepDim}`}
                  >
                    УРОВЕНЬ {item.level} · {item.title}
                    {item.level >= 5
                      ? ' · цель Phase III (с учётом риска)'
                      : ''}
                  </div>
                ))}
              </div>
              <div className={styles.panel} style={{ marginTop: '1.25rem' }}>
                <p className={styles.kicker}>Инженерная зрелость</p>
                <div className={styles.chain}>
                  {[...engineering.maturityLadder].reverse().map((step) => (
                    <div key={step} className={styles.chainStep}>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.ladder} style={{ marginTop: '1.25rem' }}>
                {engineering.engineeringPrinciples.map((principle) => (
                  <div key={principle.id} className={styles.ladderStep}>
                    {principle.text}
                  </div>
                ))}
              </div>
              <div className={styles.panel} style={{ marginTop: '1.25rem' }}>
                <p className={styles.kicker}>Красные флаги</p>
                <div className={styles.flags}>
                  {engineering.engineeringRedFlags.map((flag) => (
                    <span key={flag.id} className={styles.flag}>
                      {flag.text}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          <section
            id="frontier"
            className={styles.section}
            aria-labelledby="frontier-title"
          >
            <Reveal>
              <h2 id="frontier-title" className={styles.sectionTitle}>
                Граница знаний
              </h2>
              <p className={styles.sectionLead}>
                Roadmap заканчивается. Engineering — нет. Технология постоянно
                меняется.
              </p>
              <div className={styles.progressGrid}>
                {engineering.knowledgeFrontier.map((axis) => (
                  <ProgressBar
                    key={axis.id}
                    label={axis.label}
                    value={axis.coverage}
                  />
                ))}
              </div>
              <div
                className={styles.splitStack}
                style={{ marginTop: '1.25rem' }}
              >
                <div className={styles.panel}>
                  <p className={styles.kicker}>Как продолжать</p>
                  <div className={styles.chain}>
                    {engineering.continueMethod.map((step) => (
                      <div key={step} className={styles.chainStep}>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.panel}>
                  <p className={styles.kicker}>LEARN / USE / WATCH / IGNORE</p>
                  <div className={styles.journey}>
                    {engineering.learnDecisions.map((d) => (
                      <span key={d} className={styles.chip}>
                        {d}
                      </span>
                    ))}
                  </div>
                  <ul
                    className={styles.topicList}
                    style={{ marginTop: '0.75rem' }}
                  >
                    {engineering.learnFramework.map((f) => (
                      <li key={f} className={styles.topic}>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className={styles.themeGrid}
                style={{ marginTop: '1.25rem' }}
              >
                {Object.entries(engineering.techRadar).map(([ring, items]) => (
                  <article key={ring} className={styles.panel}>
                    <h3 className={styles.nodeTitle}>{ring}</h3>
                    <ul className={styles.topicList}>
                      {items.map((item) => (
                        <li key={item} className={styles.topic}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </Reveal>
          </section>

          <section
            id="matrix"
            className={styles.section}
            aria-labelledby="matrix-title"
          >
            <Reveal>
              <h2 id="matrix-title" className={styles.sectionTitle}>
                Матрица способностей
              </h2>
              <p className={styles.sectionLead}>
                Главный визуальный итог трёх фаз.
              </p>
              <div className={styles.scrollX}>
                <table className={styles.matrix}>
                  <thead>
                    <tr>
                      <th scope="col">Способность</th>
                      <th scope="col">Foundation</th>
                      <th scope="col">Integration</th>
                      <th scope="col">Engineering</th>
                    </tr>
                  </thead>
                  <tbody>
                    {engineering.capabilityMatrix.map((row) => (
                      <tr key={row.capability}>
                        <td>{row.capability}</td>
                        <td>{row.foundation}</td>
                        <td>{row.integration}</td>
                        <td>{row.engineering}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className={styles.panel} style={{ marginTop: '1.25rem' }}>
                <p className={styles.kicker}>Итоговый цикл AI engineering</p>
                <div className={styles.chain}>
                  {engineering.finalAiLoop.map((step) => (
                    <div key={step} className={styles.chainStep}>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.grid2} style={{ marginTop: '1.25rem' }}>
                {engineering.storyArc.map((item) => (
                  <article key={item.phase} className={styles.panel}>
                    <p className={styles.kicker}>{item.phase}</p>
                    <p className={styles.quote}>{item.quote}</p>
                  </article>
                ))}
              </div>
            </Reveal>
          </section>

          <section
            id="finale"
            className={styles.section}
            aria-labelledby="finale-title"
          >
            <Reveal>
              <p className={styles.kicker}>∞ Непрерывная инженерия</p>
              <h2
                id="finale-title"
                className={styles.display}
                style={{ fontSize: 'clamp(2.2rem, 7vw, 4rem)' }}
              >
                {overview.finale.title}
              </h2>
              <p className={styles.lead}>{overview.finale.subtitle}</p>
              <p className={styles.sublead}>{overview.finale.body}</p>
              <div className={styles.chain} style={{ marginTop: '1.5rem' }}>
                {overview.finale.evolution.map((step) => (
                  <div key={step} className={styles.chainStep}>
                    {step}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '2.5rem' }}>
                {overview.finale.slogans.map((line) => (
                  <p
                    key={line}
                    className={styles.quote}
                    style={{ marginBottom: '0.75rem' }}
                  >
                    {line}
                  </p>
                ))}
              </div>
              <div className={styles.journey} style={{ marginTop: '1.5rem' }}>
                {overview.finale.sequence.map((step) => (
                  <span key={step} className={styles.chip}>
                    {step}
                  </span>
                ))}
              </div>
              <div className={styles.ctaRow}>
                <button
                  type="button"
                  className={styles.buttonGhost}
                  onClick={onOpenMap}
                >
                  К обзору плана
                </button>
              </div>
            </Reveal>
          </section>
        </div>
      </div>
    </AtlasFrame>
  );
}

function formatSkillStatus(status: string): string {
  if (status === 'available') return 'доступно';
  if (status === 'locked') return 'закрыто';
  return status;
}

function ProgressBar({ label, value }: { label: string; value: number }) {
  return (
    <div className={styles.progressRow}>
      <div className={styles.progressMeta}>
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div
        className={styles.barTrack}
        role="meter"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
      >
        <div className={styles.barFill} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
