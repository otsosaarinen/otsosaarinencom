# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Next.js)
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint via next lint
```

There are no tests in this project.

## Architecture

This is a single-page personal portfolio website built with Next.js 15 App Router, TypeScript, and Tailwind CSS v4. All content is static — no API routes, no dynamic data fetching.

**Stack:**
- Next.js 15, React 19, TypeScript
- Tailwind CSS v4 (configured via `@tailwindcss/postcss`, no `tailwind.config.js`)
- Lucide React v1 for icons
- Inter font via `next/font/google`

**Project structure:**
- `app/layout.tsx` — root layout with metadata and font
- `app/page.tsx` — main page, assembles all section components
- `app/globals.css` — Tailwind import and global `animate-fade-in` keyframe
- `components/Hero.tsx` — profile photo, name, summary, social links
- `components/Experience.tsx` — work history (data array, no external deps)
- `components/Education.tsx` — education entries (data array)
- `components/Skills.tsx` — skill groups with pill tags
- `components/Projects.tsx` — project cards with tech tags and GitHub links
- `components/FadeIn.tsx` — scroll-triggered fade-in wrapper (`"use client"`)
- `open-next.config.ts` — OpenNext Cloudflare adapter config
- `wrangler.jsonc` — Cloudflare Workers deployment config
- `public/` — static assets (profile photo, favicon, `_headers` for cache rules)

**Design:**
- White background, Inter font, no dark mode
- Section labels: `text-xs font-semibold uppercase tracking-widest text-gray-400`
- Tags: `rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600`
- Project cards: `rounded-lg border border-gray-100 p-4`
- All components are React Server Components (no `"use client"` needed)

**Adding content:** Edit the data arrays at the top of each component file — they're typed with interfaces so TypeScript will catch mistakes. `FadeIn` is the only client component; all others are React Server Components.
