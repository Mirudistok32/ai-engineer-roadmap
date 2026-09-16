#!/usr/bin/env node
/**
 * Shared afterFileEdit formatter.
 * Copy into a project as `.cursor/hooks/format.mjs`.
 * Runs only tools that exist in that project's node_modules/.bin.
 */
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";

async function main() {
  let payload = "";
  for await (const chunk of process.stdin) payload += chunk;

  let filePath = "";
  try {
    const data = JSON.parse(payload || "{}");
    filePath = data.file_path || data.filePath || data.path || "";
  } catch {
    process.exit(0);
  }
  if (!filePath) process.exit(0);

  const root = process.cwd();
  const bin = (name) => join(root, "node_modules", ".bin", name);

  const run = (cmd, args) => {
    if (!existsSync(cmd)) return;
    spawnSync(cmd, args, { stdio: "ignore", cwd: root });
  };

  if (/\.css$/.test(filePath)) {
    run(bin("stylelint"), ["--fix", filePath]);
  }
  if (/\.(ts|tsx|js|jsx|mjs|cjs|json|css|md)$/.test(filePath)) {
    run(bin("prettier"), ["--write", "--ignore-unknown", filePath]);
  }
  if (/\.(ts|tsx|js|jsx|mjs|cjs)$/.test(filePath)) {
    if (existsSync(bin("oxlint"))) {
      run(bin("oxlint"), ["--fix", filePath]);
    } else {
      run(bin("eslint"), ["--fix", filePath]);
    }
  }

  process.exit(0);
}

main().catch(() => process.exit(0));
