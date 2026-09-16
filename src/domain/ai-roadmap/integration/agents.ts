import type { AgentContract } from '../types';

export const agentTeam = [
  'Product Agent',
  'Architect Agent',
  'Research Agent',
  'Implementation Agent',
  'Frontend Agent',
  'Backend Agent',
  'QA Agent',
  'DevOps Agent',
  'Monitoring Agent',
  'Security Agent',
  'Analytics Agent',
] as const;

export const agentHandoff = [
  'Product Agent → Requirements',
  'Architect Agent → Architecture',
  'Frontend / Backend Agents → Implementation',
  'QA Agent → Quality Report',
  'DevOps Agent → Deployment',
  'Human → Review / Approve',
] as const;

export const agentContracts: readonly AgentContract[] = [
  {
    id: 'product-agent',
    role: 'Product Agent',
    goal: 'Превратить проблему пользователя в проверяемые requirements.',
    input: 'User problem, constraints, hypotheses',
    context: 'Product docs, personas, metrics glossary',
    constraints: ['No scope explosion', 'MVP first', 'Measurable outcomes'],
    tools: ['Research', 'Drafting', 'Competitor scan'],
    output: 'Requirements pack + acceptance criteria',
    qualityCriteria: ['Testable criteria', 'Explicit out-of-scope', 'Named user'],
    failureConditions: ['Vague goals', 'No metrics', 'Hidden assumptions'],
  },
  {
    id: 'architect-agent',
    role: 'Architect Agent',
    goal: 'Предложить 2–3 архитектуры с trade-offs.',
    input: 'Requirements + constraints + scale hints',
    context: 'Existing system map, ADRs, conventions',
    constraints: ['Prefer reversible decisions', 'Name failure domains'],
    tools: ['Diagramming', 'Option matrix'],
    output: 'Architecture options + recommended default',
    qualityCriteria: ['Trade-offs explicit', 'Boundaries clear', 'Observability planned'],
    failureConditions: ['Fashion-driven design', 'No alternatives', 'Everything coupled'],
  },
  {
    id: 'qa-agent',
    role: 'QA Agent',
    goal: 'Собрать quality report по изменению.',
    input: 'Diff + risk areas + acceptance criteria',
    context: 'Test map, known flaky zones, security checklist',
    constraints: ['Risk-based, not volume-based'],
    tools: ['Generate tests', 'Run suite', 'Static checks'],
    output: 'Quality report with gaps and residual risk',
    qualityCriteria: ['Repro steps', 'Severity', 'What was not tested'],
    failureConditions: ['Green CI with silent gaps', 'No human-readable summary'],
  },
  {
    id: 'devops-agent',
    role: 'DevOps Agent',
    goal: 'Доставить изменение с smoke и rollback path.',
    input: 'Build artifact + env map + release notes',
    context: 'Pipeline, secrets policy, runbooks',
    constraints: ['No secrets in logs', 'Smoke after deploy'],
    tools: ['CI', 'Deploy', 'Health checks'],
    output: 'Deploy record + smoke result',
    qualityCriteria: ['Reversible', 'Observable', 'Documented'],
    failureConditions: ['Deploy without smoke', 'Unknown rollback'],
  },
] as const;

export const contextEngineeringModel = [
  'PROMPT',
  'CONTEXT',
  'TOOLS',
  'MEMORY',
  'RULES',
  '→ AGENT PERFORMANCE',
] as const;

export const contextTopics = [
  'task context',
  'codebase context',
  'repository rules',
  'project documentation',
  'architecture documents',
  'conventions',
  'examples',
  'constraints',
  'acceptance criteria',
] as const;

export const verificationV2 = [
  'Agent Output',
  'Static Checks',
  'Automated Tests',
  'Architecture Review',
  'Security Review',
  'Performance Check',
  'Human Approval',
] as const;

export const multiAgentCapstoneFlow = [
  'USER IDEA',
  'RESEARCH AGENT',
  'PRODUCT AGENT',
  'ARCHITECT AGENT',
  'IMPLEMENTATION AGENTS',
  'QA AGENT',
  'SECURITY AGENT',
  'DEVOPS AGENT',
  'ANALYTICS AGENT',
  'HUMAN REVIEW',
] as const;
