# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Next.js (App Router) landing page for 泡泡爪宠物洗护, a pet grooming business. Single-page static site with a booking form that shows an inline confirmation (no backend). Chinese-language UI using `lucide-react` icons and custom CSS (no Tailwind).

## Commands

```bash
npm run dev       # Start dev server (defaults to localhost:3000)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # ESLint (Next.js core-web-vitals + typescript configs)
```

No test framework is configured yet.

## Architecture

- **`app/layout.tsx`** — Root layout with `<html lang="zh-CN">`, metadata (title/description), and globals.css import.
- **`app/page.tsx`** — Entire homepage. `"use client"` component with all sections: hero, services, care/features, pricing packages, process steps, and booking form. Data (services, stats, packages, steps) defined as static arrays above the component. Form submit is a no-op that sets a status message.
- **`app/globals.css`** — All styles via CSS custom properties (no Tailwind, no CSS modules). Responsive breakpoints at 920px and 640px.

## Paths

`@/*` maps to the project root via `tsconfig.json` paths. Import as `@/app/...`, `@/components/...`, etc.
