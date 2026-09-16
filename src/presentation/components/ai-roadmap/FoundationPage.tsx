
import { useMemo, useState } from 'react';

import { type Domain, type DomainPillar,foundation } from '@/domain/ai-roadmap';

import styles from './atlas.module.css';
import { DomainCard } from './DomainCard';
import { MissionCard } from './MissionCard';
import { Reveal } from './Reveal';
import { useActiveSection } from './useActiveSection';

type FoundationPageProps = {
  readonly onBack: () => void;
  readonly onEnterPhaseII?: () => void;
  readonly phaseIIReady?: boolean;
};

const NAV_IDS = foundation.navSections.map((s) => s.id);

export function FoundationPage({
  onBack,
  onEnterPhaseII,
  phaseIIReady = false,
}: FoundationPageProps) {
  const active = useActiveSection(NAV_IDS);
  const [selectedDomain, setSelectedDomain] = useState<string | null>('frontend');
  const overview = foundation.foundationOverview;

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
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className={styles.atlas} data-product="ai-roadmap">
      <div className={styles.shell}>
        <nav className={styles.nav} aria-label="Foundation sections">
          <button type="button" className={styles.backLink} onClick={onBack}>
            ← Roadmap hub
          </button>
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
          <div className={styles.navMobile} aria-label="Foundation sections">
            <button type="button" className={styles.navLink} onClick={onBack}>
              ← Hub
            </button>
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
              <p className={styles.kicker}>Phase I · AI Engineer Roadmap</p>
              <h1 className={styles.display}>{overview.title}</h1>
              <p className={styles.lead}>{overview.subtitle}</p>
              <p className={styles.sublead}>{overview.lead}</p>
              <div className={styles.stats} style={{ marginTop: '1.75rem' }}>
                {overview.stats.map((stat) => (
                  <div key={stat.label} className={styles.stat}>
                    <span className={styles.statValue}>{stat.value}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </header>

          <section id="stats" className={styles.section} aria-labelledby="stats-title">
            <Reveal>
              <h2 id="stats-title" className={styles.sectionTitle}>
                Visual dashboard
              </h2>
              <p className={styles.sectionLead}>
                Compact Phase I panel — roadmap coverage, not a personal grade.
              </p>
              <div className={`${styles.panel} ${styles.panelGlow}`}>
                <p className={styles.kicker}>Engineering journey</p>
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
                        aria-label={`${axis.label} roadmap coverage`}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={axis.coverage}
                      >
                        <div className={styles.barFill} style={{ width: `${axis.coverage}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          <section id="map" className={styles.section} aria-labelledby="map-title">
            <Reveal>
              <h2 id="map-title" className={styles.sectionTitle}>
                Engineer map
              </h2>
              <p className={styles.sectionLead}>
                Deep Frontend + Broad Engineering Competence + AI Agent Orchestration. Click a
                domain for progressive depth.
              </p>
              <div className={styles.centerEngineer}>Engineer</div>
              <div className={styles.grid3}>
                <PillarColumn
                  title="Think"
                  className={styles.think}
                  domains={byPillar.think}
                  selectedDomain={selectedDomain}
                  onSelect={setSelectedDomain}
                />
                <PillarColumn
                  title="Build"
                  className={styles.build}
                  domains={byPillar.build}
                  selectedDomain={selectedDomain}
                  onSelect={setSelectedDomain}
                />
                <PillarColumn
                  title="Operate"
                  className={styles.operate}
                  domains={byPillar.operate}
                  selectedDomain={selectedDomain}
                  onSelect={setSelectedDomain}
                />
              </div>
              <div className={styles.panel} style={{ marginTop: '1rem' }}>
                <p className={`${styles.kicker} ${styles.ai}`}>AI layer across every domain</p>
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

          <section id="lifecycle" className={styles.section} aria-labelledby="lifecycle-title">
            <Reveal>
              <h2 id="lifecycle-title" className={styles.sectionTitle}>
                Engineering lifecycle
              </h2>
              <p className={styles.sectionLead}>
                IDEA → IMPROVE with an AI cue on every hop. Trust, but verify.
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
              <div className={styles.splitStack} style={{ marginTop: '1.25rem' }}>
                <div className={styles.panel}>
                  <p className={styles.kicker}>QA pyramid</p>
                  <div className={styles.ladder}>
                    {foundation.qaPyramid.map((level) => (
                      <div key={level} className={styles.ladderStep}>
                        {level}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.panel}>
                  <p className={styles.kicker}>Observability loop</p>
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

          <section id="skills" className={styles.section} aria-labelledby="skills-title">
            <Reveal>
              <h2 id="skills-title" className={styles.sectionTitle}>
                Skill tree
              </h2>
              <p className={styles.sectionLead}>
                Statuses illustrate roadmap availability — not a user profile score.
              </p>
              <div className={styles.themeGrid}>
                {foundation.foundationSkills.map((skill) => (
                  <article key={skill.id} className={styles.panel}>
                    <h3 className={styles.nodeTitle}>{skill.title}</h3>
                    <p className={styles.nodeShort}>{skill.description}</p>
                    <span className={styles.skillStatus}>
                      {foundation.skillStatusById[skill.id] ?? 'available'} · {skill.level}
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

          <section id="deps" className={styles.section} aria-labelledby="deps-title">
            <Reveal>
              <h2 id="deps-title" className={styles.sectionTitle}>
                Dependency graph
              </h2>
              <p className={styles.sectionLead}>Why you study this now — visible prerequisites.</p>
              <div className={styles.grid3}>
                {foundation.dependencyChains.map((chain) => (
                  <article key={chain.id} className={styles.panel}>
                    <h3 className={styles.nodeTitle}>{chain.title}</h3>
                    <div className={styles.chain} style={{ marginTop: '0.75rem' }}>
                      {chain.steps.map((step) => (
                        <div key={step} className={styles.chainStep}>
                          {step}
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
              <div className={styles.splitStack} style={{ marginTop: '1.25rem' }}>
                <div className={styles.panel}>
                  <p className={styles.kicker}>Engineering stack</p>
                  <div className={styles.chain}>
                    {foundation.stackLayers.map((layer) => (
                      <div key={layer} className={styles.chainStep}>
                        {layer}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.panel}>
                  <p className={`${styles.kicker} ${styles.ai}`}>AI stack layer</p>
                  <div className={styles.chain}>
                    {foundation.aiStackLayer.map((layer) => (
                      <div key={layer} className={styles.chainStep}>
                        {layer}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.themeGrid} style={{ marginTop: '1.25rem' }}>
                {Object.entries(foundation.technologyMap).map(([group, techs]) => (
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
                ))}
              </div>
            </Reveal>
          </section>

          <section id="months" className={styles.section} aria-labelledby="months-title">
            <Reveal>
              <h2 id="months-title" className={styles.sectionTitle}>
                Six-month roadmap
              </h2>
              <p className={styles.sectionLead}>
                Каждый месяц — инженерная цель, не просто «Month N».
              </p>
              <div className={styles.month}>
                {foundation.foundationMonths.map((month) => (
                  <article key={month.id} className={styles.panel}>
                    <div className={styles.monthHead}>
                      <span className={styles.monthNum}>MONTH {month.number}</span>
                      <h3 className={styles.nodeTitle}>{month.title}</h3>
                    </div>
                    <p className={styles.sectionLead}>{month.goal}</p>
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
                    <p className={styles.nodeShort} style={{ marginTop: '0.85rem' }}>
                      <strong className={styles.mono}>Output · </strong>
                      {month.output}
                    </p>
                    <div className={styles.themeGrid} style={{ marginTop: '1rem' }}>
                      {month.missionIds.map((id) => {
                        const mission = foundation.missionById[id];
                        return mission ? <MissionCard key={id} mission={mission} /> : null;
                      })}
                      {month.bossMissionId
                        ? (() => {
                            const boss = foundation.missionById[month.bossMissionId];
                            return boss ? <MissionCard key={boss.id} mission={boss} /> : null;
                          })()
                        : null}
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          </section>

          <section id="ai" className={styles.section} aria-labelledby="ai-title">
            <Reveal>
              <h2 id="ai-title" className={styles.sectionTitle}>
                AI competence & verification
              </h2>
              <p className={styles.sectionLead}>
                AI replaces more manual execution — never engineering understanding.
              </p>
              <div className={styles.grid2}>
                <div className={styles.panel}>
                  <p className={styles.kicker}>AI levels in Phase I</p>
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
                  <p className={styles.kicker}>Trust but verify</p>
                  <div className={styles.chain}>
                    {foundation.verificationLoop.map((step) => (
                      <div key={step} className={styles.chainStep}>
                        {step}
                      </div>
                    ))}
                  </div>
                  <p className={styles.nodeShort} style={{ marginTop: '0.85rem' }}>
                    Understand обязателен. «AI написал код» ≠ задача выполнена.
                  </p>
                </div>
              </div>
              <div className={styles.splitStack} style={{ marginTop: '1.25rem' }}>
                <div className={styles.panel}>
                  <p className={styles.kicker}>Engineer workflow</p>
                  <div className={styles.journey}>
                    {foundation.engineerWorkflow.map((step) => (
                      <span key={step} className={styles.chip}>
                        {step}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.panel}>
                  <p className={`${styles.kicker} ${styles.ai}`}>AI layer</p>
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
                <p className={styles.kicker}>Automation ladder</p>
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
                    <div className={styles.chain} style={{ marginTop: '0.75rem' }}>
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
                <p className={styles.kicker}>Think like an attacker</p>
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

          <section id="project" className={styles.section} aria-labelledby="project-title">
            <Reveal>
              <h2 id="project-title" className={styles.sectionTitle}>
                {foundation.foundationProject.title}
              </h2>
              <p className={styles.sectionLead}>{foundation.foundationProject.subtitle}</p>
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
                <p className={styles.kicker}>Human ↔ AI collaboration</p>
                <div className={styles.flow}>
                  {foundation.foundationProject.aiCollaboration.map((row) => (
                    <div key={`${row.actor}-${row.action}`} className={styles.flowRow}>
                      <div className={row.actor === 'AI' ? styles.flowAi : styles.flowStep}>
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

          <section id="principles" className={styles.section} aria-labelledby="principles-title">
            <Reveal>
              <h2 id="principles-title" className={styles.sectionTitle}>
                Foundation principles
              </h2>
              <div className={styles.ladder}>
                {foundation.foundationPrinciples.map((principle) => (
                  <div key={principle.id} className={styles.ladderStep}>
                    {principle.text}
                  </div>
                ))}
              </div>
              <div className={styles.panel} style={{ marginTop: '1.25rem' }}>
                <p className={styles.kicker}>Engineering red flags</p>
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
                <p className={styles.kicker}>Final Phase I state</p>
                <h3 className={styles.sectionTitle}>{overview.finalState.title}</h3>
                <p className={styles.sectionLead}>{overview.finalState.note}</p>
                <p className={styles.mono}>FROM · {overview.finalState.from}</p>
                <div className={styles.journey} style={{ marginTop: '0.75rem' }}>
                  {overview.finalState.to.map((item) => (
                    <span key={item} className={styles.chip}>
                      + {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          <section id="transition" className={styles.section} aria-labelledby="transition-title">
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
                <button type="button" className={styles.buttonGhost} onClick={onBack}>
                  Back to phases
                </button>
              </div>
              <blockquote className={styles.quote} style={{ marginTop: '2.5rem' }}>
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
    </div>
  );
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
          onSelect={() => onSelect(selectedDomain === domain.id ? null : domain.id)}
        />
      ))}
    </div>
  );
}
