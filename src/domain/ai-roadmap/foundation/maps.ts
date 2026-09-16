import type { DependencyChain, LifecycleStep, Principle, RedFlag } from '../types';

export const foundationPrinciples: readonly Principle[] = [
  { id: 'p1', text: 'Understand before automating.' },
  { id: 'p2', text: 'Measure before optimizing.' },
  { id: 'p3', text: 'Design before coding.' },
  { id: 'p4', text: 'Verify AI output.' },
  { id: 'p5', text: 'Prefer simple systems.' },
  { id: 'p6', text: 'Make failures visible.' },
  { id: 'p7', text: 'Security is not an afterthought.' },
  { id: 'p8', text: 'Testing is engineering, not bureaucracy.' },
  { id: 'p9', text: 'Automation compounds.' },
  { id: 'p10', text: 'AI is leverage, not authority.' },
];

export const foundationRedFlags: readonly RedFlag[] = [
  { id: 'r1', text: 'No validation' },
  { id: 'r2', text: 'Works on my machine' },
  { id: 'r3', text: 'No tests' },
  { id: 'r4', text: 'AI generated it' },
  { id: 'r5', text: 'Nobody knows why' },
  { id: 'r6', text: 'Everything depends on everything' },
  { id: 'r7', text: 'No monitoring' },
  { id: 'r8', text: 'Secrets in repository' },
  { id: 'r9', text: 'Optimize without measuring' },
];

export const dependencyChains: readonly DependencyChain[] = [
  {
    id: 'http-chain',
    title: 'From HTTP to distributed thinking',
    steps: ['HTTP', 'API', 'Backend', 'Application Architecture', 'Distributed Thinking'],
  },
  {
    id: 'db-chain',
    title: 'From tables to performance',
    steps: ['Database Fundamentals', 'Schema Design', 'Indexes', 'Queries', 'Performance'],
  },
  {
    id: 'ux-chain',
    title: 'From UX to architecture',
    steps: ['UX', 'User Flow', 'Requirements', 'Product', 'Architecture'],
  },
];

export const lifecycleSteps: readonly LifecycleStep[] = [
  { id: 'idea', label: 'IDEA', aiCue: 'AI RESEARCH' },
  { id: 'problem', label: 'PROBLEM', aiCue: 'AI RESEARCH' },
  { id: 'requirements', label: 'REQUIREMENTS', aiCue: 'AI PLANNING' },
  { id: 'ux', label: 'UX/UI', aiCue: 'AI PLANNING' },
  { id: 'architecture', label: 'ARCHITECTURE', aiCue: 'AI PLANNING' },
  { id: 'frontend', label: 'FRONTEND', aiCue: 'AI CODING' },
  { id: 'backend', label: 'BACKEND', aiCue: 'AI CODING' },
  { id: 'database', label: 'DATABASE', aiCue: 'AI CODING' },
  { id: 'api', label: 'API', aiCue: 'AI CODING' },
  { id: 'test', label: 'TEST', aiCue: 'AI TESTING' },
  { id: 'security', label: 'SECURITY', aiCue: 'AI ANALYSIS' },
  { id: 'performance', label: 'PERFORMANCE', aiCue: 'AI ANALYSIS' },
  { id: 'deploy', label: 'DEPLOY', aiCue: 'AI DOCUMENTATION' },
  { id: 'monitor', label: 'MONITOR', aiCue: 'AI ANALYSIS' },
  { id: 'analytics', label: 'ANALYTICS', aiCue: 'AI ANALYSIS' },
  { id: 'improve', label: 'IMPROVE', aiCue: 'AI DEBUGGING' },
];

export const navSections = [
  { id: 'hero', label: '01 Hero' },
  { id: 'stats', label: '02 Stats' },
  { id: 'map', label: '03 Map' },
  { id: 'lifecycle', label: '04 Lifecycle' },
  { id: 'skills', label: '05 Skills' },
  { id: 'deps', label: '06 Deps' },
  { id: 'months', label: '07 Months' },
  { id: 'ai', label: '08 AI' },
  { id: 'project', label: '09 Project' },
  { id: 'principles', label: '10 Principles' },
  { id: 'transition', label: '11 Next' },
] as const;
