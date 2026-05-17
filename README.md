# Macros + Miles

A standalone Astro + Tailwind run+nutrition log site. Live at [macrosmiles.dcrader.dev](https://macrosmiles.dcrader.dev).

## Stack
- Astro 6
- Tailwind CSS 4 (Vite plugin)
- TypeScript
- Vercel (hosting)

## Pages
- `/` — Home with data-viz hero, latest log preview, weekly stats
- `/log/[slug]` — Log entry detail with route render, splits, macros vs target, meals
- `/plan` — Weekly training plan + meal templates
- `/about` — Philosophy, stack, accessibility statement

## Develop
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy
Vercel auto-builds from `main`. Subdomain `macrosmiles.dcrader.dev`.

## Accessibility
WCAG 2.2 AA target. Statement at `/about#accessibility`. Reports to `accessibility@macrosmiles.dcrader.dev`.

## Data
Mock data lives in `src/data/logs.ts` and `src/data/plan.ts`. The shape is realistic; the numbers are illustrative.
