import { useMemo, useState } from 'react';

import {
  type Domain,
  type DomainPillar,
  foundation,
  productGuide,
} from '@/domain/ai-roadmap';
import type { AtlasNavHandlers } from './AppChrome';
import { AtlasFrame } from './AppChrome';
import styles from './atlas.module.css';
import { DomainCard } from './DomainCard';
import { MissionCard } from './MissionCard';
import { collectMonthMissions } from './collectMonthMissions';
import { MonthPlan } from './MonthPlan';
import { Reveal } from './Reveal';
import { useActiveSection } from './useActiveSection';

type FoundationPageProps = AtlasNavHandlers & {
  readonly onEnterPhaseII?: () => void;
  readonly phaseIIReady?: boolean;
};

const NAV_IDS = foundation.navSections.map((s) => s.id);

export function FoundationPage({
  onOpenMap,
  onOpenPhase,
  onOpenLoop,
  onOpenLabs,
  onEnterPhaseII,
  phaseIIReady = false,
}: FoundationPageProps) {
  const active = useActiveSection(NAV_IDS);
  const [selectedDomain, setSelectedDomain] = useState<string | null>(
    'frontend',
  );
  const overview = foundation.foundationOverview;
  const guide = productGuide.phases.foundation;
  const nav = { onOpenMap, onOpenPhase, onOpenLoop, onOpenLabs };

  const byPillar = useMemo(() => {
    const groups: Record<DomainPillar, Domain[]> = {
      think: [],
      build: [],
      operate: [],
      ai: [],
    };
    for (const domain of foundation.foundationDomains) {
      groups[domain.pillar].push(domain);
    }
    return groups;
  }, []);

  function scrollTo(id: string) {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <AtlasFrame current="foundation" nav={nav}>
      <div className={styles.shell}>
        <nav className={styles.nav} aria-label="Разделы этапа 1">
          {foundation.navSections.map((section) => (
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
          <div className={styles.navMobile} aria-label="Разделы этапа 1">
            {foundation.navSections.map((section) => (
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
                {guide.startWith} Темы ниже — справочник. План — в месяцах.
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
                План на 6 месяцев
              </h2>
              <p className={styles.sectionLead}>
                Это твой основной экран этапа. Открой текущий месяц, прочитай
                цель, сделай задание. Темы внутри — шпаргалка.
              </p>
              <div className={styles.month}>
                {foundation.foundationMonths.map((month, index) => (
                  <MonthPlan
                    key={month.id}
                    month={month}
                    displayNumber={month.number}
                    missions={collectMonthMissions(
                      month,
                      foundation.missionById,
                    )}
                    defaultOpen={index === 0}
                  />
                ))}
              </div>
            </Reveal>
          </section>

          <section
            id="stats"
            className={styles.section}
            aria-labelledby="stats-title"
          >
            <Reveal>
              <h2 id="stats-title" className={styles.sectionTitle}>
                Что покрывает этап
              </h2>
              <p className={styles.sectionLead}>
                Это покрытие программы, не твоя оценка. Личный прогресс — только
                сделанные задания.
              </p>
              <div className={`${styles.panel} ${styles.panelGlow}`}>
                <p className={styles.kicker}>Инженерный путь</p>
                <div className={styles.journey}>
                  {overview.journey.map((step, index) => (
                    <span key={step} className={styles.chip}>
                      {String(index + 1).padStart(2, '0')} {step}
                    </span>
                  ))}
                </div>
                <div className={styles.progressGrid}>
                  {overview.progress.map((axis) => (
                    <div key={axis.id} className={styles.progressRow}>
                      <div className={styles.progressMeta}>
                        <span>{axis.label}</span>
                        <span>{axis.coverage}%</span>
                      </div>
                      <div
                        className={styles.barTrack}
                        role="meter"
                        aria-label={`${axis.label}: покрытие роадмапа`}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={axis.coverage}
                      >
                        <div
                          className={styles.barFill}
                          style={{ width: `${axis.coverage}%` }}
                        />
                      </div>
                    </div>
                  ))}
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
                Карта инженера
              </h2>
              <p className={styles.sectionLead}>
                Карта ролей, которые ты затронешь. Нажми домен, если нужно
                понять глубину. Это справочник, не список дел на месяц.
              </p>
              <div className={styles.centerEngineer}>Инженер</div>
              <div className={styles.grid3}>
                <PillarColumn
                  title="Думать"
                  className={styles.think}
                  domains={byPillar.think}
                  selectedDomain={selectedDomain}
                  onSelect={setSelectedDomain}
                />
                <PillarColumn
                  title="Строить"
                  className={styles.build}
                  domains={byPillar.build}
                  selectedDomain={selectedDomain}
                  onSelect={setSelectedDomain}
                />
                <PillarColumn
                  title="Эксплуатировать"
                  className={styles.operate}
                  domains={byPillar.operate}
                  selectedDomain={selectedDomain}
                  onSelect={setSelectedDomain}
                />
              </div>
              <div className={styles.panel} style={{ marginTop: '1rem' }}>
                <p className={`${styles.kicker} ${styles.ai}`}>
                  AI-слой в каждом домене
                </p>
                <div className={styles.journey}>
                  {[
                    'PRODUCT + AI',
                    'UX + AI',
                    'ARCHITECTURE + AI',
                    'FRONTEND + AI',
                    'BACKEND + AI',
                    'DATABASE + AI',
                    'QA + AI',
                    'DEVOPS + AI',
                    'SECURITY + AI',
                    'AUTOMATION + AI',
                  ].map((label) => (
                    <span key={label} className={styles.chip}>
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          <section
            id="lifecycle"
            className={styles.section}
            aria-labelledby="lifecycle-title"
          >
            <Reveal>
              <h2 id="lifecycle-title" className={styles.sectionTitle}>
                Инженерный жизненный цикл
              </h2>
              <p className={styles.sectionLead}>
                IDEA → IMPROVE с AI-подсказкой на каждом шаге. Доверяй, но
                проверяй.
              </p>
              <div className={styles.flow}>
                {foundation.lifecycleSteps.map((step, index) => (
                  <div key={step.id} className={styles.flowRow}>
                    <div className={styles.flowStep}>{step.label}</div>
                    <div className={styles.flowArrow} aria-hidden>
                      {index < foundation.lifecycleSteps.length - 1 ? '↓' : '·'}
                    </div>
                    <div className={styles.flowAi}>{step.aiCue ?? 'AI'}</div>
                  </div>
                ))}
              </div>
              <div
                className={styles.splitStack}
                style={{ marginTop: '1.25rem' }}
              >
                <div className={styles.panel}>
                  <p className={styles.kicker}>Пирамида QA</p>
                  <div className={styles.ladder}>
                    {foundation.qaPyramid.map((level) => (
                      <div key={level} className={styles.ladderStep}>
                        {level}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.panel}>
                  <p className={styles.kicker}>Цикл observability</p>
                  <div className={styles.chain}>
                    {foundation.observabilityLoop.map((step) => (
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
            id="skills"
            className={styles.section}
            aria-labelledby="skills-title"
          >
            <Reveal>
              <h2 id="skills-title" className={styles.sectionTitle}>
                Дерево навыков
              </h2>
              <p className={styles.sectionLead}>
                Статусы показывают доступность в роадмапе — не оценку профиля.
              </p>
              <div className={styles.themeGrid}>
                {foundation.foundationSkills.map((skill) => (
                  <article key={skill.id} className={styles.panel}>
                    <h3 className={styles.nodeTitle}>{skill.title}</h3>
                    <p className={styles.nodeShort}>{skill.description}</p>
                    <span className={styles.skillStatus}>
                      {formatSkillStatus(
                        foundation.skillStatusById[skill.id] ?? 'available',
                      )}{' '}
                      · {skill.level}
                    </span>
                    <ul className={styles.topicList}>
                      {skill.topics.map((topic) => (
                        <li key={topic} className={styles.topic}>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </Reveal>
          </section>

          <section
            id="deps"
            className={styles.section}
            aria-labelledby="deps-title"
          >
            <Reveal>
              <h2 id="deps-title" className={styles.sectionTitle}>
                Граф зависимостей
              </h2>
              <p className={styles.sectionLead}>
                Почему учишь это сейчас — видимые предпосылки.
              </p>
              <div className={styles.grid3}>
                {foundation.dependencyChains.map((chain) => (
                  <article key={chain.id} className={styles.panel}>
                    <h3 className={styles.nodeTitle}>{chain.title}</h3>
                    <div
                      className={styles.chain}
                      style={{ marginTop: '0.75rem' }}
                    >
                      {chain.steps.map((step) => (
                        <div key={step} className={styles.chainStep}>
                          {step}
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
              <div
                className={styles.splitStack}
                style={{ marginTop: '1.25rem' }}
              >
                <div className={styles.panel}>
                  <p className={styles.kicker}>Инженерный стек</p>
                  <div className={styles.chain}>
                    {foundation.stackLayers.map((layer) => (
                      <div key={layer} className={styles.chainStep}>
                        {layer}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.panel}>
                  <p className={`${styles.kicker} ${styles.ai}`}>
                    Слой AI-стека
                  </p>
                  <div className={styles.chain}>
                    {foundation.aiStackLayer.map((layer) => (
                      <div key={layer} className={styles.chainStep}>
                        {layer}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className={styles.themeGrid}
                style={{ marginTop: '1.25rem' }}
              >
                {Object.entries(foundation.technologyMap).map(
                  ([group, techs]) => (
                    <article key={group} className={styles.panel}>
                      <h3 className={styles.nodeTitle}>{group}</h3>
                      <ul className={styles.topicList}>
                        {techs.map((tech) => (
                          <li key={tech} className={styles.topic}>
                            {tech}
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
            id="ai"
            className={styles.section}
            aria-labelledby="ai-title"
          >
            <Reveal>
              <h2 id="ai-title" className={styles.sectionTitle}>
                AI-компетенция и верификация
              </h2>
              <p className={styles.sectionLead}>
                AI заменяет всё больше ручного исполнения — никогда не понимание
                инженерии.
              </p>
              <div className={styles.grid2}>
                <div className={styles.panel}>
                  <p className={styles.kicker}>Уровни AI в Phase I</p>
                  <div className={styles.ladder}>
                    {foundation.aiLevels.map((level) => (
                      <div key={level.level} className={styles.ladderStep}>
                        L{level.level} · {level.title}
                        <ul className={styles.topicList}>
                          {level.uses.map((use) => (
                            <li key={use} className={styles.topic}>
                              {use}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.panel}>
                  <p className={styles.kicker}>Доверяй, но проверяй</p>
                  <div className={styles.chain}>
                    {foundation.verificationLoop.map((step) => (
                      <div key={step} className={styles.chainStep}>
                        {step}
                      </div>
                    ))}
                  </div>
                  <p
                    className={styles.nodeShort}
                    style={{ marginTop: '0.85rem' }}
                  >
                    Understand обязателен. «AI написал код» ≠ задача выполнена.
                  </p>
                </div>
              </div>
              <div
                className={styles.splitStack}
                style={{ marginTop: '1.25rem' }}
              >
                <div className={styles.panel}>
                  <p className={styles.kicker}>Рабочий процесс инженера</p>
                  <div className={styles.journey}>
                    {foundation.engineerWorkflow.map((step) => (
                      <span key={step} className={styles.chip}>
                        {step}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.panel}>
                  <p className={`${styles.kicker} ${styles.ai}`}>Слой AI</p>
                  <div className={styles.journey}>
                    {foundation.aiWorkflowLayer.map((step) => (
                      <span key={step} className={styles.chip}>
                        {step}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.panel} style={{ marginTop: '1.25rem' }}>
                <p className={styles.kicker}>Лестница автоматизации</p>
                <div className={styles.ladder}>
                  {foundation.automationLadder.map((step, index) => (
                    <div
                      key={step}
                      className={`${styles.ladderStep} ${index > 3 ? styles.ladderStepDim : ''}`}
                    >
                      {step}
                      {index > 3 ? ' · Phase II/III' : ''}
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.grid3} style={{ marginTop: '1.25rem' }}>
                {foundation.evolutionModels.map((model) => (
                  <article key={model.id} className={styles.panel}>
                    <h3 className={styles.nodeTitle}>{model.title}</h3>
                    <div
                      className={styles.chain}
                      style={{ marginTop: '0.75rem' }}
                    >
                      {model.steps.map((step) => (
                        <div key={step} className={styles.chainStep}>
                          {step}
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
              <div className={styles.panel} style={{ marginTop: '1.25rem' }}>
                <p className={styles.kicker}>Думай как атакующий</p>
                <div className={styles.journey}>
                  {foundation.securityFlow.map((step) => (
                    <span key={step} className={styles.chip}>
                      {step}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          <section
            id="project"
            className={styles.section}
            aria-labelledby="project-title"
          >
            <Reveal>
              <h2 id="project-title" className={styles.sectionTitle}>
                {foundation.foundationProject.title}
              </h2>
              <p className={styles.sectionLead}>
                {foundation.foundationProject.subtitle}
              </p>
              <div className={styles.themeGrid}>
                {foundation.foundationProject.requirements.map((block) => (
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
                <p className={styles.kicker}>Сотрудничество человек ↔ AI</p>
                <div className={styles.flow}>
                  {foundation.foundationProject.aiCollaboration.map((row) => (
                    <div
                      key={`${row.actor}-${row.action}`}
                      className={styles.flowRow}
                    >
                      <div
                        className={
                          row.actor === 'AI' ? styles.flowAi : styles.flowStep
                        }
                      >
                        {row.actor}
                      </div>
                      <div className={styles.flowArrow} aria-hidden>
                        →
                      </div>
                      <div className={styles.flowStep}>{row.action}</div>
                    </div>
                  ))}
                </div>
              </div>
              {foundation.missionById['boss-final'] ? (
                <div style={{ marginTop: '1.25rem' }}>
                  <MissionCard mission={foundation.missionById['boss-final']} />
                </div>
              ) : null}
            </Reveal>
          </section>

          <section
            id="principles"
            className={styles.section}
            aria-labelledby="principles-title"
          >
            <Reveal>
              <h2 id="principles-title" className={styles.sectionTitle}>
                Принципы Foundation
              </h2>
              <div className={styles.ladder}>
                {foundation.foundationPrinciples.map((principle) => (
                  <div key={principle.id} className={styles.ladderStep}>
                    {principle.text}
                  </div>
                ))}
              </div>
              <div className={styles.panel} style={{ marginTop: '1.25rem' }}>
                <p className={styles.kicker}>Красные флаги инженерии</p>
                <div className={styles.flags}>
                  {foundation.foundationRedFlags.map((flag) => (
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
                <p className={styles.kicker}>Итоговое состояние Phase I</p>
                <h3 className={styles.sectionTitle}>
                  {overview.finalState.title}
                </h3>
                <p className={styles.sectionLead}>{overview.finalState.note}</p>
                <p className={styles.mono}>ОТ · {overview.finalState.from}</p>
                <div
                  className={styles.journey}
                  style={{ marginTop: '0.75rem' }}
                >
                  {overview.finalState.to.map((item) => (
                    <span key={item} className={styles.chip}>
                      + {item}
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
                  className={`${styles.button} ${phaseIIReady ? '' : styles.buttonDisabled}`}
                  disabled={!phaseIIReady}
                  onClick={onEnterPhaseII}
                  aria-disabled={!phaseIIReady}
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
              <blockquote
                className={styles.quote}
                style={{ marginTop: '2.5rem' }}
              >
                {overview.philosophy.quote}
              </blockquote>
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

function PillarColumn({
  title,
  className,
  domains,
  selectedDomain,
  onSelect,
}: {
  title: string;
  className: string;
  domains: readonly Domain[];
  selectedDomain: string | null;
  onSelect: (id: string | null) => void;
}) {
  return (
    <div className={styles.pillar}>
      <h3 className={`${styles.pillarHead} ${className}`}>{title}</h3>
      {domains.map((domain) => (
        <DomainCard
          key={domain.id}
          domain={domain}
          selected={selectedDomain === domain.id}
          onSelect={() =>
            onSelect(selectedDomain === domain.id ? null : domain.id)
          }
        />
      ))}
    </div>
  );
}
