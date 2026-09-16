import { useState } from 'react';

import { integration, productGuide, system } from '@/domain/ai-roadmap';
import type { AtlasNavHandlers } from './AppChrome';
import { AtlasFrame } from './AppChrome';
import styles from './atlas.module.css';
import { MissionCard } from './MissionCard';

type SystemLabsViewProps = AtlasNavHandlers;

const TABS = [
  {
    id: 'missions',
    label: 'Миссии',
    hint: 'Сквозные задачи, которые связывают несколько дисциплин сразу.',
  },
  {
    id: 'failure',
    label: 'Сбои',
    hint: 'Система уже сломана. Разберись, что проверить и как не допустить снова.',
  },
  {
    id: 'gym',
    label: 'Архитектура',
    hint: 'Один и тот же продукт при 100, 10k и 1M пользователей — разные компромиссы.',
  },
  {
    id: 'tradeoffs',
    label: 'Компромиссы',
    hint: 'Нет правильного выбора вообще. Есть выбор под ограничения.',
  },
  {
    id: 'arena',
    label: 'Арена агентов',
    hint: 'Собери цепочку агентов и реши, где человек обязан остаться в контуре.',
  },
  {
    id: 'ai',
    label: 'Слой AI',
    hint: 'По доменам: чем AI помогает, что нельзя отдавать без проверки.',
  },
  {
    id: 'frontier',
    label: 'Неизвестное',
    hint: 'Как разбираться в новой теме, а не пытаться знать всё заранее.',
  },
] as const;

type TabId = (typeof TABS)[number]['id'];

export function SystemLabsView({
  onOpenMap,
  onOpenPhase,
  onOpenLoop,
  onOpenLabs,
}: SystemLabsViewProps) {
  const [tab, setTab] = useState<TabId>('missions');
  const [gymId, setGymId] = useState(system.architectureGym[0]?.id ?? '');
  const [tradeId, setTradeId] = useState(system.tradeOffs[0]?.id ?? '');
  const [arena, setArena] = useState<readonly string[]>(() => [
    ...system.agentArenaDefault,
  ]);
  const [failId, setFailId] = useState(
    integration.failureScenarios[0]?.id ?? '',
  );

  const gym =
    system.architectureGym.find((g) => g.id === gymId) ??
    system.architectureGym[0];
  const trade =
    system.tradeOffs.find((t) => t.id === tradeId) ?? system.tradeOffs[0];
  const failure =
    integration.failureScenarios.find((f) => f.id === failId) ??
    integration.failureScenarios[0];
  const nav = { onOpenMap, onOpenPhase, onOpenLoop, onOpenLabs };
  const tool = productGuide.tools.labs;

  function removeAgent(name: string) {
    setArena((prev) => prev.filter((item) => item !== name));
  }

  function resetArena() {
    setArena([...system.agentArenaDefault]);
  }

  return (
    <AtlasFrame current="labs" nav={nav}>
      <div className={styles.shell} style={{ gridTemplateColumns: '1fr' }}>
        <div className={styles.main}>
          <p className={styles.kicker}>Тренажёр · не замена плана</p>
          <h1 className={styles.display}>{tool.title}</h1>
          <p className={styles.lead}>{tool.why}</p>
          <p className={styles.callout}>
            <strong>Как пользоваться. </strong>
            {tool.how}
          </p>

          <div
            className={styles.depthTabs}
            role="tablist"
            aria-label="Лаборатории"
          >
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
          <p className={styles.sectionLead}>
            {TABS.find((item) => item.id === tab)?.hint}
          </p>

          {tab === 'missions' ? (
            <section aria-label="Миссии">
              <h2 className={styles.sectionTitle}>Междисциплинарные миссии</h2>
              <div className={styles.themeGrid}>
                {system.crossMissions.map((mission) => (
                  <article key={mission.id} className={styles.panel}>
                    <h3 className={styles.nodeTitle}>{mission.title}</h3>
                    <p className={styles.nodeShort}>{mission.objective}</p>
                    <div
                      className={styles.chain}
                      style={{ marginTop: '0.75rem' }}
                    >
                      {mission.chain.map((step) => (
                        <div key={step} className={styles.chainStep}>
                          {step}
                        </div>
                      ))}
                    </div>
                    <p
                      className={styles.nodeShort}
                      style={{ marginTop: '0.75rem' }}
                    >
                      {mission.lesson}
                    </p>
                  </article>
                ))}
              </div>
              <div className={styles.panel} style={{ marginTop: '1.25rem' }}>
                <p className={styles.kicker}>
                  Уровни ответственности · не чекбоксы
                </p>
                <div className={styles.scrollX}>
                  <table className={styles.matrix}>
                    <thead>
                      <tr>
                        <th scope="col">Домен</th>
                        <th scope="col">Фундамент</th>
                        <th scope="col">Интеграция</th>
                        <th scope="col">Инженерия</th>
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
                  <MissionCard
                    mission={integration.integrationMissionById['int-capstone']}
                  />
                </div>
              ) : null}
            </section>
          ) : null}

          {tab === 'failure' ? (
            <section aria-label="Лаборатория сбоев">
              <h2 className={styles.sectionTitle}>Лаборатория сбоев</h2>
              <p className={styles.sectionLead}>
                Система уже сломана. Найди первопричину. AI может симулировать —
                инженер проектирует detect → prevent.
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
                  <div
                    className={styles.chain}
                    style={{ marginTop: '0.75rem' }}
                  >
                    {failure.questions.map((q) => (
                      <div key={q} className={styles.chainStep}>
                        {q}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
              <div className={styles.panel} style={{ marginTop: '1rem' }}>
                <p className={styles.kicker}>Доп. сценарии 2.0</p>
                <div className={styles.journey}>
                  {[
                    'медленный запрос к БД',
                    'утечка памяти',
                    'race condition',
                    'XSS',
                    'некорректный AI-сгенерированный код',
                    'агент изменил несвязанный код',
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
            <section aria-label="Архитектурный зал">
              <h2 className={styles.sectionTitle}>Архитектурный зал</h2>
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
                  <LoopList title="Ограничения" items={gym.constraints} />
                  <LoopList title="Пересмотреть" items={gym.reconsider} />
                  <LoopList title="Преимущества" items={gym.advantages} />
                  <LoopList title="Риски" items={gym.risks} />
                  <p className={styles.skillStatus}>
                    Сложность · {gym.complexity} · Стоимость · {gym.cost}
                  </p>
                </article>
              ) : null}
            </section>
          ) : null}

          {tab === 'tradeoffs' ? (
            <section aria-label="Движок компромиссов">
              <h2 className={styles.sectionTitle}>Движок компромиссов</h2>
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
                  <div
                    className={styles.progressGrid}
                    style={{ marginTop: '1rem' }}
                  >
                    {trade.axes.map((axis) => (
                      <div key={axis.name}>
                        <p
                          className={styles.mono}
                          style={{ fontSize: '0.72rem' }}
                        >
                          {axis.name}
                        </p>
                        <p className={styles.nodeShort}>
                          {trade.optionA}: {axis.a}% · {trade.optionB}: {axis.b}
                          %
                        </p>
                        <div className={styles.barTrack} aria-hidden>
                          <div
                            className={styles.barFill}
                            style={{ width: `${axis.a}%` }}
                          />
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
                <p className={styles.kicker}>Пример журнала решений</p>
                {system.sampleDecisions.map((decision) => (
                  <article key={decision.id} style={{ marginBottom: '1rem' }}>
                    <h3 className={styles.nodeTitle}>Решение #{decision.id}</h3>
                    <p className={styles.nodeShort}>
                      Проблема: {decision.problem}
                    </p>
                    <ul className={styles.topicList}>
                      {decision.options.map((opt) => (
                        <li key={opt} className={styles.topic}>
                          {opt}
                        </li>
                      ))}
                    </ul>
                    <p className={styles.nodeShort}>
                      Решение: {decision.decision}
                    </p>
                    <p className={styles.nodeShort}>Почему: {decision.why}</p>
                    <p className={styles.nodeShort}>
                      Компромиссы: {decision.tradeOffs}
                    </p>
                    <p className={styles.nodeShort}>
                      Результат: {decision.result}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {tab === 'arena' ? (
            <section aria-label="Арена агентов">
              <h2 className={styles.sectionTitle}>Арена агентов</h2>
              <p className={styles.sectionLead}>
                Построй AI workflow. Реши сколько агентов нужно, где human gate,
                какие permissions.
              </p>
              <div className={styles.chain}>
                {arena.map((step) => (
                  <div key={step} className={styles.chainStep}>
                    <span>{step}</span>
                    {step !== 'ЧЕЛОВЕК' &&
                    step !== 'ОДОБРЕНИЕ ЧЕЛОВЕКА' &&
                    step !== 'ДЕПЛОЙ' ? (
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
                        Убрать
                      </button>
                    ) : null}
                  </div>
                ))}
              </div>
              <div className={styles.ctaRow}>
                <button
                  type="button"
                  className={styles.buttonGhost}
                  onClick={resetArena}
                >
                  Сбросить workflow
                </button>
              </div>
              <div
                className={styles.splitStack}
                style={{ marginTop: '1.25rem' }}
              >
                <div className={styles.panel}>
                  <p className={styles.kicker}>Автономия по риску</p>
                  <ul className={styles.detailList}>
                    {system.riskAutonomy.map((row) => (
                      <li key={row.task}>
                        <strong>{row.task}</strong> — {row.autonomy}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.panel}>
                  <p className={styles.kicker}>Оценки агентов</p>
                  <ul className={styles.topicList}>
                    {system.agentEvals.map((item) => (
                      <li key={item} className={styles.topic}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className={styles.kicker} style={{ marginTop: '1rem' }}>
                    Наблюдаемость AI
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
            <section aria-label="Слой AI">
              <h2 className={styles.sectionTitle}>AI-слой по доменам</h2>
              <div className={styles.themeGrid}>
                {system.aiDomainLayers.map((layer) => (
                  <article key={layer.domain} className={styles.panel}>
                    <h3 className={styles.nodeTitle}>{layer.domain}</h3>
                    <LoopList
                      title="Как помогает AI"
                      items={layer.howAiHelps}
                    />
                    <LoopList
                      title="AI может выполнить"
                      items={layer.whatAiCanExecute}
                    />
                    <LoopList
                      title="Человек должен проверить"
                      items={layer.humanMustVerify}
                    />
                    <LoopList
                      title="AI не должен решать"
                      items={layer.aiShouldNotDecide}
                    />
                    <LoopList
                      title="Можно автоматизировать"
                      items={layer.canAutomate}
                    />
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {tab === 'frontier' ? (
            <section aria-label="Зона неизвестного">
              <h2 className={styles.sectionTitle}>Зона неизвестного</h2>
              <p className={styles.sectionLead}>
                Сильный инженер не знает всё. Он умеет быстро разобраться в
                неизвестном.
              </p>
              <div className={styles.progressGrid}>
                {system.unknownZone.map((axis) => (
                  <div key={axis.id} className={styles.progressRow}>
                    <div className={styles.progressMeta}>
                      <span>{axis.label}</span>
                      <span>{axis.coverage}%</span>
                    </div>
                    <div className={styles.barTrack}>
                      <div
                        className={styles.barFill}
                        style={{ width: `${axis.coverage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.panel} style={{ marginTop: '1.25rem' }}>
                <p className={styles.kicker}>Цикл обучения</p>
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
                  Открыть этап 3
                </button>
              </div>
            </section>
          ) : null}

          <div className={styles.ctaRow}>
            <button
              type="button"
              className={styles.buttonGhost}
              onClick={onOpenLoop}
            >
              Открыть цикл
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

function LoopList({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div style={{ marginTop: '0.65rem' }}>
      <p
        className={styles.mono}
        style={{ fontSize: '0.68rem', letterSpacing: '0.08em' }}
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
