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

## 编码规范

- 使用函数组件 + hooks，禁止 class 组件
- TypeScript 严格模式，不使用 any
- 提交：遵循 conventional commits 格式 (`feat:`, `fix:`, `refactor:`, `test:`, `docs:`)

## 测试策略

- 暂无测试框架，未来引入 Vitest + React Testing Library
- 核心逻辑必须有单元测试

## 架构约束

- 单页面应用，所有组件在 `app/page.tsx` 中
- 如需拆分组件，放到 `app/components/` 目录
- CSS 统一在 `app/globals.css`，使用 CSS 自定义属性

## 安全约束

- 表单输入必须校验
- 避免 XSS：不直接注入用户输入到 HTML
