Run the quality gate for this Vite app and fix failures.

1. `npm run check` (typecheck + lint) — or separately:
   - `npx tsc -b --pretty false`
   - `npm run lint` (oxlint)
2. `npm run build` — production `dist/` must succeed.

Do not apply Next.js, ESLint-flat, Stylelint, or Fizkulture hub steps.
If something fails, fix the cause; do not silence rules.
