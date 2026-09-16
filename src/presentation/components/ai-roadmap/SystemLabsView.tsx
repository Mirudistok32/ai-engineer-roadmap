
import { useState } from 'react';

import { integration, system } from '@/domain/ai-roadmap';

import styles from './atlas.module.css';
import { MissionCard } from './MissionCard';

type SystemLabsViewProps = {
  readonly onBack: () => void;
  readonly onOpenLoop: () => void;
  readonly onOpenPhase: (id: 'foundation' | 'integration' | 'engineering') => void;
};

const TABS = [
  { id: 'missions', label: 'Missions' },
  { id: 'failure', label: 'Failure Lab' },
  { id: 'gym', label: 'Arch Gym' },
  { id: 'tradeoffs', label: 'Trade-offs' },
  { id: 'arena', label: 'Agent Arena' },
  { id: 'ai', label: 'AI Layer' },
  { id: 'frontier', label: 'Unknown' },
] as const;

type TabId = (typeof TABS)[number]['id'];

export function SystemLabsView({ onBack, onOpenLoop, onOpenPhase }: SystemLabsViewProps) {
  const [tab, setTab] = useState<TabId>('missions');
  const [gymId, setGymId] = useState(system.architectureGym[0]?.id ?? '');
  const [tradeId, setTradeId] = useState(system.tradeOffs[0]?.id ?? '');
  const [arena, setArena] = useState<readonly string[]>(() => [...system.agentArenaDefault]);
  const [failId, setFailId] = useState(integration.failureScenarios[0]?.id ?? '');

  const gym = system.architectureGym.find((g) => g.id === gymId) ?? system.architectureGym[0];
  const trade = system.tradeOffs.find((t) => t.id === tradeId) ?? system.tradeOffs[0];
  const failure =
    integration.failureScenarios.find((f) => f.id === failId) ?? integration.failureScenarios[0];

  function removeAgent(name: string) {
    setArena((prev) => prev.filter((item) => item !== name));
  }

  function resetArena() {
    setArena([...system.agentArenaDefault]);
  }

  return (
    <div className={styles.atlas} data-product="ai-roadmap" data-screen="labs">
      <div className={styles.shell} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.main}>
          <button type="button" className={styles.backLink} onClick={onBack}>
            ← THE MAP
          </button>
          <p className={styles.kicker}>Screens 06–10 · System Labs</p>
          <h1 className={styles.display} style={{ fontSize: 'clamp(2.2rem, 7vw, 4rem)' }}>
            Practice the system
          </h1>
          <p className={styles.lead}>
            Missions · Failure Lab · Architecture Gym · Trade-off Engine · Agent Arena. Не курс —
            инженерные испытания.
          </p>

          <div className={styles.depthTabs} role="tablist" aria-label="Labs">
            {TABS.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={tab === item.id}
                className={`${styles.depthTab} ${tab === item.id ? styles.depthTabActive : ''}`}
                onClick={() => setTab(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {tab === 'missions' ? (
            <section aria-label="Missions">
              <h2 className={styles.sectionTitle}>Cross-disciplinary missions</h2>
              <div className={styles.themeGrid}>
                {system.crossMissions.map((mission) => (
                  <article key={mission.id} className={styles.panel}>
                    <h3 className={styles.nodeTitle}>{mission.title}</h3>
                    <p className={styles.nodeShort}>{mission.objective}</p>
                    <div className={styles.chain} style={{ marginTop: '0.75rem' }}>
                      {mission.chain.map((step) => (
                        <div key={step} className={styles.chainStep}>
                          {step}
                        </div>
                      ))}
                    </div>
                    <p className={styles.nodeShort} style={{ marginTop: '0.75rem' }}>
                      {mission.lesson}
                    </p>
                  </article>
                ))}
              </div>
              <div className={styles.panel} style={{ marginTop: '1.25rem' }}>
                <p className={styles.kicker}>Responsibility levels · not checkboxes</p>
                <div className={styles.scrollX}>
                  <table className={styles.matrix}>
                    <thead>
                      <tr>
                        <th scope="col">Domain</th>
                        <th scope="col">Foundation</th>
                        <th scope="col">Integration</th>
                        <th scope="col">Engineering</th>
                      </tr>
                    </thead>
                    <tbody>
                      {system.responsibilityProgression.map((row) => (
                        <tr key={row.domain}>
                          <td>{row.domain}</td>
                          <td>{row.foundation.join(' / ')}</td>
                          <td>{row.integration.join(' / ')}</td>
                          <td>{row.engineering.join(' / ')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {integration.integrationMissionById['int-capstone'] ? (
                <div style={{ marginTop: '1.25rem' }}>
                  <MissionCard mission={integration.integrationMissionById['int-capstone']} />
                </div>
              ) : null}
            </section>
          ) : null}

          {tab === 'failure' ? (
            <section aria-label="Failure Lab">
              <h2 className={styles.sectionTitle}>Failure Lab</h2>
              <p className={styles.sectionLead}>
                Система уже сломана. Найди root cause. AI может симулировать — инженер проектирует
                detect → prevent.
              </p>
              <div className={styles.themeGrid}>
                {integration.failureScenarios.map((scenario) => (
                  <button
                    key={scenario.id}
                    type="button"
                    className={`${styles.nodeButton} ${failId === scenario.id ? styles.nodeButtonActive : ''}`}
                    onClick={() => setFailId(scenario.id)}
                  >
                    <h3 className={styles.nodeTitle}>{scenario.title}</h3>
                  </button>
                ))}
              </div>
              {failure ? (
                <div
                  className={`${styles.panel} ${styles.panelGlow}`}
                  style={{ marginTop: '1rem' }}
                >
                  <h3 className={styles.nodeTitle}>{failure.title}</h3>
                  <div className={styles.chain} style={{ marginTop: '0.75rem' }}>
                    {failure.questions.map((q) => (
                      <div key={q} className={styles.chainStep}>
                        {q}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
              <div className={styles.panel} style={{ marginTop: '1rem' }}>
                <p className={styles.kicker}>Extra 2.0 scenarios</p>
                <div className={styles.journey}>
                  {[
                    'slow database query',
                    'memory leak',
                    'race condition',
                    'XSS',
                    'incorrect AI-generated code',
                    'agent changed unrelated code',
                  ].map((item) => (
                    <span key={item} className={styles.chip}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          {tab === 'gym' ? (
            <section aria-label="Architecture Gym">
              <h2 className={styles.sectionTitle}>Architecture Gym</h2>
              <p className={styles.sectionLead}>
                Нет единственного правильного ответа — только trade-offs.
              </p>
              <div className={styles.depthTabs}>
                {system.architectureGym.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`${styles.depthTab} ${gymId === item.id ? styles.depthTabActive : ''}`}
                    onClick={() => setGymId(item.id)}
                  >
                    {item.users}
                  </button>
                ))}
              </div>
              {gym ? (
                <article className={`${styles.panel} ${styles.panelGlow}`}>
                  <h3 className={styles.nodeTitle}>{gym.users}</h3>
                  <LoopList title="Constraints" items={gym.constraints} />
                  <LoopList title="Reconsider" items={gym.reconsider} />
                  <LoopList title="Advantages" items={gym.advantages} />
                  <LoopList title="Risks" items={gym.risks} />
                  <p className={styles.skillStatus}>
                    Complexity · {gym.complexity} · Cost · {gym.cost}
                  </p>
                </article>
              ) : null}
            </section>
          ) : null}

          {tab === 'tradeoffs' ? (
            <section aria-label="Trade-off Engine">
              <h2 className={styles.sectionTitle}>Trade-off Engine</h2>
              <p className={styles.sectionLead}>
                Приложение не говорит «это правильно» — учит принимать решения.
              </p>
              <div className={styles.depthTabs}>
                {system.tradeOffs.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`${styles.depthTab} ${tradeId === item.id ? styles.depthTabActive : ''}`}
                    onClick={() => setTradeId(item.id)}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
              {trade ? (
                <article className={`${styles.panel} ${styles.panelGlow}`}>
                  <h3 className={styles.nodeTitle}>
                    {trade.optionA} vs {trade.optionB}
                  </h3>
                  <div className={styles.progressGrid} style={{ marginTop: '1rem' }}>
                    {trade.axes.map((axis) => (
                      <div key={axis.name}>
                        <p className={styles.mono} style={{ fontSize: '0.72rem' }}>
                          {axis.name}
                        </p>
                        <p className={styles.nodeShort}>
                          {trade.optionA}: {axis.a}% · {trade.optionB}: {axis.b}%
                        </p>
                        <div className={styles.barTrack} aria-hidden>
                          <div className={styles.barFill} style={{ width: `${axis.a}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className={styles.nodeShort} style={{ marginTop: '1rem' }}>
                    {trade.note}
                  </p>
                </article>
              ) : null}
              <div className={styles.panel} style={{ marginTop: '1.25rem' }}>
                <p className={styles.kicker}>Sample decision log</p>
                {system.sampleDecisions.map((decision) => (
                  <article key={decision.id} style={{ marginBottom: '1rem' }}>
                    <h3 className={styles.nodeTitle}>Decision #{decision.id}</h3>
                    <p className={styles.nodeShort}>Problem: {decision.problem}</p>
                    <ul className={styles.topicList}>
                      {decision.options.map((opt) => (
                        <li key={opt} className={styles.topic}>
                          {opt}
                        </li>
                      ))}
                    </ul>
                    <p className={styles.nodeShort}>Decision: {decision.decision}</p>
                    <p className={styles.nodeShort}>Why: {decision.why}</p>
                    <p className={styles.nodeShort}>Trade-offs: {decision.tradeOffs}</p>
                    <p className={styles.nodeShort}>Result: {decision.result}</p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {tab === 'arena' ? (
            <section aria-label="Agent Arena">
              <h2 className={styles.sectionTitle}>Agent Arena</h2>
              <p className={styles.sectionLead}>
                Построй AI workflow. Реши сколько агентов нужно, где human gate, какие permissions.
              </p>
              <div className={styles.chain}>
                {arena.map((step) => (
                  <div key={step} className={styles.chainStep}>
                    <span>{step}</span>
                    {step !== 'HUMAN' && step !== 'HUMAN APPROVAL' && step !== 'DEPLOYMENT' ? (
                      <button
                        type="button"
                        className={styles.buttonGhost}
                        style={{
                          marginLeft: '0.75rem',
                          minHeight: '36px',
                          padding: '0.35rem 0.6rem',
                        }}
                        onClick={() => removeAgent(step)}
                      >
                        Remove
                      </button>
                    ) : null}
                  </div>
                ))}
              </div>
              <div className={styles.ctaRow}>
                <button type="button" className={styles.buttonGhost} onClick={resetArena}>
                  Reset workflow
                </button>
              </div>
              <div className={styles.splitStack} style={{ marginTop: '1.25rem' }}>
                <div className={styles.panel}>
                  <p className={styles.kicker}>Risk-gated autonomy</p>
                  <ul className={styles.detailList}>
                    {system.riskAutonomy.map((row) => (
                      <li key={row.task}>
                        <strong>{row.task}</strong> — {row.autonomy}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.panel}>
                  <p className={styles.kicker}>Agent evals</p>
                  <ul className={styles.topicList}>
                    {system.agentEvals.map((item) => (
                      <li key={item} className={styles.topic}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className={styles.kicker} style={{ marginTop: '1rem' }}>
                    AI observability
                  </p>
                  <div className={styles.chain}>
                    {system.aiObservability.map((step) => (
                      <div key={step} className={styles.chainStep}>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ) : null}

          {tab === 'ai' ? (
            <section aria-label="AI Layer">
              <h2 className={styles.sectionTitle}>AI layer across domains</h2>
              <div className={styles.themeGrid}>
                {system.aiDomainLayers.map((layer) => (
                  <article key={layer.domain} className={styles.panel}>
                    <h3 className={styles.nodeTitle}>{layer.domain}</h3>
                    <LoopList title="How AI helps" items={layer.howAiHelps} />
                    <LoopList title="AI can execute" items={layer.whatAiCanExecute} />
                    <LoopList title="Human must verify" items={layer.humanMustVerify} />
                    <LoopList title="AI should not decide" items={layer.aiShouldNotDecide} />
                    <LoopList title="Can automate" items={layer.canAutomate} />
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {tab === 'frontier' ? (
            <section aria-label="Unknown Zone">
              <h2 className={styles.sectionTitle}>Unknown Zone</h2>
              <p className={styles.sectionLead}>
                Сильный инженер не знает всё. Он умеет быстро разобраться в неизвестном.
              </p>
              <div className={styles.progressGrid}>
                {system.unknownZone.map((axis) => (
                  <div key={axis.id} className={styles.progressRow}>
                    <div className={styles.progressMeta}>
                      <span>{axis.label}</span>
                      <span>{axis.coverage}%</span>
                    </div>
                    <div className={styles.barTrack}>
                      <div className={styles.barFill} style={{ width: `${axis.coverage}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.panel} style={{ marginTop: '1.25rem' }}>
                <p className={styles.kicker}>Learning loop</p>
                <div className={styles.chain}>
                  {system.learningLoop.map((step) => (
                    <div key={step} className={styles.chainStep}>
                      {step}
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.ctaRow}>
                <button
                  type="button"
                  className={styles.button}
                  onClick={() => onOpenPhase('engineering')}
                >
                  Open Phase III
                </button>
              </div>
            </section>
          ) : null}

          <div className={styles.ctaRow}>
            <button type="button" className={styles.buttonGhost} onClick={onOpenLoop}>
              Engineering Loop
            </button>
            <button type="button" className={styles.buttonGhost} onClick={onBack}>
              Back to map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoopList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div style={{ marginTop: '0.65rem' }}>
      <p className={styles.mono} style={{ fontSize: '0.68rem', letterSpacing: '0.08em' }}>
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
