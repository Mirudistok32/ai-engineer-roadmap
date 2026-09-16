# AI Engineer Roadmap

Standalone React + TypeScript atlas (Vite). No Next.js.

Agent tooling: shared `../agent-base/` + local `.cursor/rules/vite-spa.mdc`.
See `AGENTS.md`.

## Scripts

```bash
npm run dev      # local
npm run check    # typecheck + oxlint
npm run build    # static files → dist/
npm run preview  # preview dist
```

## GitHub Pages

```bash
VITE_BASE=/your-repo-name/ npm run build
```

Publish the `dist/` folder. For project pages set `VITE_BASE` to `/<repo>/`.

## Routes

- `/` — THE MAP
- `/phase/foundation` · `/phase/integration` · `/phase/engineering`
- `/loop` — Engineering Loop
- `/labs` — System Labs

Visual language: light blueprint atlas (grid paper, teal/ink) with graphical
roadmaps on THE MAP and an interactive Engineering Loop ring.
