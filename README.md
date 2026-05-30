# otsosaarinen.com

Personal portfolio website.

![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React v1 + custom SVGs for brand icons |
| Font | Inter (body), Playfair Display (heading) |
| Hosting | Cloudflare |

## Development

```bash
npm install       # Install dependencies
npm run dev       # Start dev server at localhost:3000
npm run build     # Production build
npm run lint      # Run ESLint
```

## Folder structure

```
otsosaarinencom/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx          # Main page, assembles all sections
│   ├── globals.css       # Tailwind import, fade-in animation
│   └── icon.png          # Favicon
├── components/
│   ├── Hero.tsx          # Name, photo, summary, social links
│   ├── Experience.tsx    # Work history timeline
│   ├── Education.tsx     # Education timeline
│   ├── Projects.tsx      # Project list
│   ├── Skills.tsx        # Skill groups
│   ├── FadeIn.tsx        # Scroll-triggered fade-in wrapper
│   └── icons.tsx         # GitHub and LinkedIn SVG icons
├── public/
│   └── profile.jpg       # Profile photo
├── .github/
│   └── workflows/
│       └── ci.yaml       # CI: install, lint, build
├── next.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

## Content

All content lives in data arrays at the top of each component file. To update:

- **Experience** — edit the `jobs` array in `components/Experience.tsx`
- **Education** — edit directly in `components/Education.tsx`
- **Projects** — edit the `projects` array in `components/Projects.tsx`
- **Skills** — edit the `skillGroups` array in `components/Skills.tsx`
