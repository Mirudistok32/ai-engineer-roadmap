import type { Mission, Month } from '@/domain/ai-roadmap';

export function collectMonthMissions(
  month: Month,
  byId: Readonly<Record<string, Mission | undefined>>,
): Mission[] {
  const list: Mission[] = [];
  for (const id of month.missionIds) {
    const mission = byId[id];
    if (mission) list.push(mission);
  }
  if (month.bossMissionId) {
    const boss = byId[month.bossMissionId];
    if (boss) list.push(boss);
  }
  return list;
}
