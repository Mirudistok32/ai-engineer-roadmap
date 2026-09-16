# Agent notes

Shared base (architecture, adaptive UI, React, skills): sibling folder
`../agent-base/` — single source of truth for reusable agent guidance.

This app overrides:

- Vite + React Router SPA (see `.cursor/rules/vite-spa.mdc`)
- No Next.js, no Fizkulture hub / timer / audio product rules
- Lint via `oxlint`; no Stylelint unless added later

Commands: `.cursor/commands/check.md`. UI audit skill: `adapt-responsive-ui`.
