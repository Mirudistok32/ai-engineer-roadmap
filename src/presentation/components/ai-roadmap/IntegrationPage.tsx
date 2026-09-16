import { useState } from 'react';

import { integration, productGuide } from '@/domain/ai-roadmap';
import type { AtlasNavHandlers } from './AppChrome';
import { AtlasFrame } from './AppChrome';
import styles from './atlas.module.css';
import { MissionCard } from './MissionCard';
import { collectMonthMissions } from './collectMonthMissions';
import { MonthPlan } from './MonthPlan';
import { Reveal } from './Reveal';
import { useActiveSection } from './useActiveSection';

type IntegrationPageProps = AtlasNavHandlers & {
  readonly onEnterPhaseIII?: () => void;
  readonly phaseIIIReady?: boolean;
};

const NAV_IDS = integration.navSections.map((s) => s.id);

export function IntegrationPage({
  onOpenMap,
  onOpenPhase,
  onOpenLoop,
  onOpenLabs,
  onEnterPhaseIII,
  phaseIIIReady = false,
}: IntegrationPageProps) {
  const active = useActiveSection(NAV_IDS);
  const [openContract, setOpenContract] = useState<string | null>(
    'product-agent',
  );
  const [openFailure, setOpenFailure] = useState<string | null>('db-down');
  const overview = integration.integrationOverview;
  const guide = productGuide.phases.integration;
  const nav = { onOpenMap, onOpenPhase, onOpenLoop, onOpenLabs };

  function scrollTo(id: string) {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <AtlasFrame current="integration" nav={nav}>
      <div className={styles.shell}>
        <nav className={styles.nav} aria-label="Разделы этапа 2">
          {integration.navSections.map((section) => (
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
          <div className={styles.navMobile} aria-label="Разделы этапа 2">
            {integration.navSections.map((section) => (
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
                План на месяцы 7–12
              </h2>
              <p className={styles.sectionLead}>
                Открой текущий месяц, прочитай цель, сделай задание. Компромиссы
                внизу — рамка мышления, не отдельный курс.
              </p>
              <div className={styles.month}>
                {integration.integrationMonths.map((month, index) => (
                  <MonthPlan
                    key={month.id}
                    month={month}
                    displayNumber={month.number + 6}
                    missions={collectMonthMissions(
                      month,
                      integration.integrationMissionById,
                    )}
                    defaultOpen={index === 0}
                  />
                ))}
              </div>
              <div
                className={styles.themeGrid}
                style={{ marginTop: '1.25rem' }}
              >
                {integration.integrationSkills.map((skill) => (
                  <article key={skill.id} className={styles.panel}>
                    <h3 className={styles.nodeTitle}>{skill.title}</h3>
                    <p className={styles.nodeShort}>{skill.description}</p>
                    <span className={styles.skillStatus}>
                      {formatSkillStatus(
                        integration.integrationSkillStatusById[skill.id] ??
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
            id="map"
            className={styles.section}
            aria-labelledby="map-title"
          >
            <Reveal>
              <h2 id="map-title" className={styles.sectionTitle}>
                Карта интеграции
              </h2>
              <p className={styles.sectionLead}>
                Не список технологий — поток, который соединяет дисциплины. Над
                всем — AI оркестрация.
              </p>
              <div className={`${styles.panel} ${styles.panelGlow}`}>
                <p className={`${styles.kicker} ${styles.ai}`}>
                  AI-ОРКЕСТРАЦИЯ
                </p>
                <div className={styles.chain}>
                  {overview.integrationFlow.map((step) => (
                    <div key={step} className={styles.chainStep}>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={styles.splitStack}
                style={{ marginTop: '1.25rem' }}
              >
                <div className={styles.panel}>
                  <p className={styles.kicker}>Инженер как оркестратор</p>
                  <div className={styles.chain}>
                    {integration.engineerLoopV2.map((step) => (
                      <div key={step} className={styles.chainStep}>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.panel}>
                  <p className={styles.kicker}>Масштаб агентов</p>
                  <div className={styles.ladder}>
                    {integration.agentScale.map((step, index) => (
                      <div key={step} className={styles.ladderStep}>
                        {index + 1}. {step}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.panel} style={{ marginTop: '1.25rem' }}>
                <p className={styles.kicker}>Покрытие роадмапа</p>
                <div className={styles.progressGrid}>
                  {overview.progress.map((axis) => (
                    <ProgressBar
                      key={axis.id}
                      label={axis.label}
                      value={axis.coverage}
                    />
                  ))}
                </div>
              </div>
              <div className={styles.grid3} style={{ marginTop: '1.25rem' }}>
                <article className={styles.panel}>
                  <p className={styles.phaseTag}>Phase I</p>
                  <div className={styles.chain}>
                    {integration.complexityMap.phaseI.map((item) => (
                      <div key={item} className={styles.chainStep}>
                        {item}
                      </div>
                    ))}
                  </div>
                </article>
                <article className={`${styles.panel} ${styles.panelGlow}`}>
                  <p className={styles.phaseTag}>Phase II · сейчас</p>
                  <div className={styles.chain}>
                    {integration.complexityMap.phaseII.map((item) => (
                      <div key={item} className={styles.chainStep}>
                        {item}
                      </div>
                    ))}
                  </div>
                </article>
                <article className={styles.panel}>
                  <p className={styles.phaseTag}>Phase III</p>
                  <div className={styles.chain}>
                    {integration.complexityMap.phaseIII.map((item) => (
                      <div key={item} className={styles.chainStep}>
                        {item}
                      </div>
                    ))}
                  </div>
                </article>
              </div>
            </Reveal>
          </section>

          <section
            id="agents"
            className={styles.section}
            aria-labelledby="agents-title"
          >
            <Reveal>
              <h2 id="agents-title" className={styles.sectionTitle}>
                AI-инженерная команда
              </h2>
              <p className={styles.sectionLead}>
                Человек-инженер оркестрирует агентов через контракты, границы и
                верификацию — не магическую автономию.
              </p>
              <div className={styles.centerEngineer}>Человек-инженер</div>
              <div className={styles.journey}>
                {integration.agentTeam.map((agent) => (
                  <span key={agent} className={styles.chip}>
                    {agent}
                  </span>
                ))}
              </div>
              <div className={styles.panel} style={{ marginTop: '1.25rem' }}>
                <p className={styles.kicker}>Цепочка передачи</p>
                <div className={styles.chain}>
                  {integration.agentHandoff.map((step) => (
                    <div key={step} className={styles.chainStep}>
                      {step}
                    </div>
                  ))}
                </div>
                <p
                  className={styles.nodeShort}
                  style={{ marginTop: '0.85rem' }}
                >
                  Мусор на входе → мусор на выходе. Качество контекста — это
                  инженерия.
                </p>
              </div>
              <div
                className={styles.agentGrid}
                style={{ marginTop: '1.25rem' }}
              >
                {integration.agentContracts.map((contract) => {
                  const open = openContract === contract.id;
                  return (
                    <article key={contract.id}>
                      <button
                        type="button"
                        className={`${styles.nodeButton} ${open ? styles.nodeButtonActive : ''}`}
                        aria-expanded={open}
                        onClick={() =>
                          setOpenContract(open ? null : contract.id)
                        }
                      >
                        <h3 className={styles.nodeTitle}>{contract.role}</h3>
                        <p className={styles.nodeShort}>{contract.goal}</p>
                      </button>
                      {open ? (
                        <div
                          className={styles.panel}
                          style={{ marginTop: '0.65rem' }}
                        >
                          <p className={styles.kicker}>Контракт агента</p>
                          <ContractLine label="ВХОД" value={contract.input} />
                          <ContractLine
                            label="КОНТЕКСТ"
                            value={contract.context}
                          />
                          <ContractLine label="ВЫХОД" value={contract.output} />
                          <p
                            className={styles.mono}
                            style={{
                              fontSize: '0.72rem',
                              marginTop: '0.75rem',
                            }}
                          >
                            ОГРАНИЧЕНИЯ
                          </p>
                          <ul className={styles.topicList}>
                            {contract.constraints.map((item) => (
                              <li key={item} className={styles.topic}>
                                {item}
                              </li>
                            ))}
                          </ul>
                          <p
                            className={styles.mono}
                            style={{
                              fontSize: '0.72rem',
                              marginTop: '0.75rem',
                            }}
                          >
                            КАЧЕСТВО
                          </p>
                          <ul className={styles.checklist}>
                            {contract.qualityCriteria.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                          <p
                            className={styles.mono}
                            style={{
                              fontSize: '0.72rem',
                              marginTop: '0.75rem',
                            }}
                          >
                            СБОИ
                          </p>
                          <ul className={styles.checklist}>
                            {contract.failureConditions.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </article>
                  );
                })}
              </div>
              <div className={styles.panel} style={{ marginTop: '1.25rem' }}>
                <p className={styles.kicker}>Визуальная прогрессия</p>
                <div className={styles.grid3}>
                  {integration.visualProgression.map((item) => (
                    <div key={item.stage}>
                      <h3 className={styles.nodeTitle}>{item.stage}</h3>
                      {item.lines.map((line) => (
                        <p key={line} className={styles.nodeShort}>
                          {line}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          <section
            id="context"
            className={styles.section}
            aria-labelledby="context-title"
          >
            <Reveal>
              <h2 id="context-title" className={styles.sectionTitle}>
                Инженерия контекста и верификация 2.0
              </h2>
              <div className={styles.splitStack}>
                <div className={styles.panel}>
                  <p className={styles.kicker}>Формула производительности</p>
                  <div className={styles.journey}>
                    {integration.contextEngineeringModel.map((part) => (
                      <span key={part} className={styles.chip}>
                        {part}
                      </span>
                    ))}
                  </div>
                  <ul
                    className={styles.topicList}
                    style={{ marginTop: '0.85rem' }}
                  >
                    {integration.contextTopics.map((topic) => (
                      <li key={topic} className={styles.topic}>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.panel}>
                  <p className={styles.kicker}>
                    Доверяй, но проверяй — системно
                  </p>
                  <div className={styles.chain}>
                    {integration.verificationV2.map((step) => (
                      <div key={step} className={styles.chainStep}>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className={styles.splitStack}
                style={{ marginTop: '1.25rem' }}
              >
                <div className={styles.panel}>
                  <p className={styles.kicker}>Шаблон ADR</p>
                  <div className={styles.chain}>
                    {integration.adrTemplate.map((step) => (
                      <div key={step} className={styles.chainStep}>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.panel}>
                  <p className={styles.kicker}>Набор документации</p>
                  <ul className={styles.topicList}>
                    {integration.docTypes.map((doc) => (
                      <li key={doc} className={styles.topic}>
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </section>

          <section
            id="quality"
            className={styles.section}
            aria-labelledby="quality-title"
          >
            <Reveal>
              <h2 id="quality-title" className={styles.sectionTitle}>
                Качество · безопасность · производительность
              </h2>
              <div className={styles.splitStack}>
                <div className={styles.panel}>
                  <p className={styles.kicker}>Конвейер качества</p>
                  <div className={styles.chain}>
                    {integration.qualityPipeline.map((step) => (
                      <div key={step} className={styles.chainStep}>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.panel}>
                  <p className={styles.kicker}>Лестница дизайн-системы</p>
                  <div className={styles.chain}>
                    {integration.designSystemLadder.map((step) => (
                      <div key={step} className={styles.chainStep}>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className={styles.themeGrid}
                style={{ marginTop: '1.25rem' }}
              >
                {Object.entries(integration.securityLayers).map(
                  ([layer, items]) => (
                    <article key={layer} className={styles.panel}>
                      <h3 className={styles.nodeTitle}>{layer}</h3>
                      <ul className={styles.topicList}>
                        {items.map((item) => (
                          <li key={item} className={styles.topic}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ),
                )}
              </div>
            </Reveal>
          </section>

          <section
            id="automation"
            className={styles.section}
            aria-labelledby="auto-title"
          >
            <Reveal>
              <h2 id="auto-title" className={styles.sectionTitle}>
                Автоматизация и рычаг
              </h2>
              <div className={styles.splitStack}>
                <div className={styles.panel}>
                  <p className={styles.kicker}>Лестница решений</p>
                  <div className={styles.chain}>
                    {integration.automationDecision.map((step) => (
                      <div key={step} className={styles.chainStep}>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.panel}>
                  <p className={styles.kicker}>Карта автоматизации</p>
                  <div className={styles.ladder}>
                    {integration.automationLadderV2.map((step, index) => (
                      <div
                        key={step}
                        className={`${styles.ladderStep} ${index > 4 ? styles.ladderStepDim : ''}`}
                      >
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.panel} style={{ marginTop: '1.25rem' }}>
                <p className={styles.kicker}>Панель рычага</p>
                <p className={styles.sectionLead}>
                  Не оценка личности — степень автоматизации процесса. Цель
                  Phase II: сдвигать работу вниз по шкале.
                </p>
                <div className={styles.progressGrid}>
                  {overview.leverage.map((axis) => (
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
            id="failure"
            className={styles.section}
            aria-labelledby="failure-title"
          >
            <Reveal>
              <h2 id="failure-title" className={styles.sectionTitle}>
                Сломай систему
              </h2>
              <p className={styles.sectionLead}>
                Failure lab: AI может симулировать incident — инженер
                проектирует detect → prevent.
              </p>
              <div className={styles.themeGrid}>
                {integration.failureScenarios.map((scenario) => {
                  const open = openFailure === scenario.id;
                  return (
                    <article key={scenario.id}>
                      <button
                        type="button"
                        className={`${styles.nodeButton} ${open ? styles.nodeButtonActive : ''}`}
                        aria-expanded={open}
                        onClick={() =>
                          setOpenFailure(open ? null : scenario.id)
                        }
                      >
                        <h3 className={styles.nodeTitle}>{scenario.title}</h3>
                      </button>
                      {open ? (
                        <div
                          className={styles.panel}
                          style={{ marginTop: '0.65rem' }}
                        >
                          <div className={styles.chain}>
                            {scenario.questions.map((q) => (
                              <div key={q} className={styles.chainStep}>
                                {q}
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </article>
                  );
                })}
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
                Product v2 · мультиагентный итог
              </h2>
              <p className={styles.sectionLead}>
                Foundation product → production-like system. Не «заставить
                агентов сделать», а надёжный процесс.
              </p>
              <div className={styles.themeGrid}>
                {integration.productV2Requirements.map((block) => (
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
                <p className={styles.kicker}>Мультиагентный workflow</p>
                <div className={styles.chain}>
                  {integration.multiAgentCapstoneFlow.map((step) => (
                    <div key={step} className={styles.chainStep}>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
              {integration.integrationMissionById['int-capstone'] ? (
                <div style={{ marginTop: '1.25rem' }}>
                  <MissionCard
                    mission={integration.integrationMissionById['int-capstone']}
                  />
                </div>
              ) : null}
            </Reveal>
          </section>

          <section
            id="panel"
            className={styles.section}
            aria-labelledby="panel-title"
          >
            <Reveal>
              <h2 id="panel-title" className={styles.sectionTitle}>
                Панель управления и ответственность
              </h2>
              <div className={`${styles.panel} ${styles.panelGlow}`}>
                <p className={styles.kicker}>
                  Здоровье системы · демо-инфографика
                </p>
                <div className={styles.stats}>
                  {integration.controlPanel.map((row) => (
                    <div key={row.label} className={styles.stat}>
                      <span className={styles.statValue}>{row.value}</span>
                      <span className={styles.statLabel}>{row.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.panel} style={{ marginTop: '1.25rem' }}>
                <p className={styles.kicker}>Ответственность человека vs AI</p>
                <p className={styles.sectionLead}>
                  Ответственность остаётся за человеком, даже когда исполнение
                  автоматизировано.
                </p>
                <div className={styles.scrollX}>
                  <table className={styles.matrix}>
                    <thead>
                      <tr>
                        <th scope="col">Область</th>
                        <th scope="col">Человек</th>
                        <th scope="col">AI</th>
                      </tr>
                    </thead>
                    <tbody>
                      {integration.responsibilityMatrix.map((row) => (
                        <tr key={row.area}>
                          <td>{row.area}</td>
                          <td>{row.human}</td>
                          <td>{row.ai}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className={styles.ladder} style={{ marginTop: '1.25rem' }}>
                {integration.integrationPrinciples.map((principle) => (
                  <div key={principle.id} className={styles.ladderStep}>
                    {principle.text}
                  </div>
                ))}
              </div>
              <div className={styles.panel} style={{ marginTop: '1.25rem' }}>
                <p className={styles.kicker}>Красные флаги Phase II</p>
                <div className={styles.flags}>
                  {integration.integrationRedFlags.map((flag) => (
                    <span key={flag.id} className={styles.flag}>
                      {flag.text}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className={`${styles.panel} ${styles.panelGlow}`}
                style={{ marginTop: '1.25rem' }}
              >
                <p className={styles.kicker}>Итоговое состояние Phase II</p>
                <h3 className={styles.sectionTitle}>
                  {overview.finalState.title}
                </h3>
                <p className={styles.sectionLead}>{overview.finalState.note}</p>
                <p className={styles.mono}>
                  ГЛУБОКО · {overview.finalState.deep}
                </p>
                <div
                  className={styles.journey}
                  style={{ marginTop: '0.75rem' }}
                >
                  {overview.finalState.broad.map((item) => (
                    <span key={item} className={styles.chip}>
                      {item}
                    </span>
                  ))}
                </div>
                <div
                  className={styles.journey}
                  style={{ marginTop: '0.75rem' }}
                >
                  {overview.finalState.ai.map((item) => (
                    <span key={item} className={styles.chip}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          <section
            id="transition"
            className={styles.section}
            aria-labelledby="transition-title"
          >
            <Reveal>
              <h2 id="transition-title" className={styles.sectionTitle}>
                {overview.transition.title}
              </h2>
              <p className={styles.sectionLead}>{overview.transition.body}</p>
              <div className={styles.chain}>
                {overview.transition.steps.map((step) => (
                  <div key={step} className={styles.chainStep}>
                    {step}
                  </div>
                ))}
              </div>
              <div className={styles.ctaRow}>
                <button
                  type="button"
                  className={`${styles.button} ${phaseIIIReady ? '' : styles.buttonDisabled}`}
                  disabled={!phaseIIIReady}
                  onClick={onEnterPhaseIII}
                  aria-disabled={!phaseIIIReady}
                >
                  {overview.transition.cta}
                </button>
                <button
                  type="button"
                  className={styles.buttonGhost}
                  onClick={onOpenMap}
                >
                  К обзору плана
                </button>
              </div>
              <div style={{ marginTop: '2.5rem' }}>
                {overview.philosophy.lines.map((line) => (
                  <p
                    key={line}
                    className={styles.quote}
                    style={{ marginBottom: '0.75rem' }}
                  >
                    {line}
                  </p>
                ))}
              </div>
              <div className={styles.journey} style={{ marginTop: '1rem' }}>
                {overview.philosophy.sequence.map((step) => (
                  <span key={step} className={styles.chip}>
                    {step}
                  </span>
                ))}
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

function ContractLine({ label, value }: { label: string; value: string }) {
  return (
    <p className={styles.nodeShort} style={{ marginTop: '0.45rem' }}>
      <strong className={styles.mono}>{label} · </strong>
      {value}
    </p>
  );
}
