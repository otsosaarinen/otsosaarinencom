# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite)
npm run build     # Type-check with tsc, then build with Vite
npm run lint      # Run ESLint
npm run preview   # Preview the production build locally
```

There are no tests in this project.

## Architecture

This is a single-page personal portfolio website — a React + TypeScript + Vite app with no routing. All content lives in `src/App.tsx`.

**Stack:**
- React 19, TypeScript, Vite
- Tailwind CSS v4 (configured via `@tailwindcss/vite` plugin, no `tailwind.config.js`)
- shadcn/ui components (style: `new-york`, base color: `neutral`)
- Lucide React for icons
- Radix UI primitives under shadcn components

**Key structural points:**
- `src/App.tsx` — the entire page: profile, experience, education, skills, projects sections
- `src/components/ui/` — shadcn/ui components. `item.tsx` is a custom component (not from shadcn registry) used for list-style content rows
- `src/components/theme-provider.tsx` + `src/components/mode-toggle.tsx` — dark/light/system theme toggle stored in `localStorage` under key `vite-ui-theme`
- `src/index.css` — Tailwind imports, CSS custom properties for theming (oklch color values), custom keyframe animations (`loading-block`, `show-content`)
- Path alias `@` maps to `src/`

**Page load sequence:** A loading spinner (`Item` with `Spinner`) is shown for 2s via CSS animation, then hidden; the main content fades in at 2.1s. Both are controlled by `useState`/`useEffect` in `App`.

**Adding shadcn components:** Use `npx shadcn@latest add <component>` — config is in `components.json`.
