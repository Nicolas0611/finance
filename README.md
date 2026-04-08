# Finance

A personal finance tracker built with React, TypeScript, and Tailwind CSS v4.
For full architecture decisions, read [`rules/ARCHITECTURE.md`](rules/ARCHITECTURE.md).

---

## 1. Stack

| Concern | Technology |
|---|---|
| UI | React 19 + TypeScript (strict mode) |
| Data fetching / server state | TanStack Query v5 |
| HTTP client | Axios (configured instance) |
| Client state | Zustand (UI state only) |
| Routing | React Router v7 |
| Forms | React Hook Form + Zod |
| Styling | Tailwind CSS v4 (CSS-first config, no `tailwind.config.ts`) |
| Font | Public Sans (Google Fonts) |

---

## 2. Getting Started

```bash
npm install
cp .env.example .env          # set VITE_API_BASE_URL
npm run dev
```

---

## 3. Design System

All design tokens are sourced from Figma and live in two files:

| File | Purpose |
|---|---|
| `src/styles/tokens.css` | Single source of truth — `@theme` definitions for Tailwind v4 |
| `src/types/tokens.ts` | TypeScript helpers for programmatic use (charts, inline styles) |

### Token layers

Tokens are organized in three layers. Always prefer the layer closest to the bottom.

```
┌─────────────────────────────────────────────────┐
│  3. Semantic    canvas, surface, foreground…    │  ← use in components
├─────────────────────────────────────────────────┤
│  2. Category    category-green, category-red…   │  ← use for tags/charts
├─────────────────────────────────────────────────┤
│  1. Primitive   grey-900, beige-100, white…     │  ← never use directly
└─────────────────────────────────────────────────┘
```

### Color tokens

#### Primitives (reference only)

| Token | Value | Usage |
|---|---|---|
| `grey-900` | `#201f24` | — |
| `grey-500` | `#696868` | — |
| `grey-300` | `#b3b3b3` | — |
| `grey-100` | `#f2f2f2` | — |
| `beige-500` | `#98908b` | — |
| `beige-100` | `#f8f4f0` | — |
| `white` | `#ffffff` | — |

#### Semantic (use these in components)

| Token | Value | Tailwind class examples |
|---|---|---|
| `canvas` | `#f8f4f0` | `bg-canvas` |
| `surface` | `#ffffff` | `bg-surface` |
| `sidebar` | `#201f24` | `bg-sidebar` |
| `overlay` | `#201f24` | `bg-overlay` |
| `foreground` | `#201f24` | `text-foreground` |
| `secondary` | `#696868` | `text-secondary` |
| `muted` | `#b3b3b3` | `text-muted` |
| `inverse` | `#ffffff` | `text-inverse` |
| `border` | `#f2f2f2` | `border-border` |
| `border-strong` | `#b3b3b3` | `border-border-strong` |
| `accent` | `#277c78` | `bg-accent`, `text-accent` |
| `success` | `#277c78` | `text-success` |
| `error` | `#c94736` | `text-error` |
| `warning` | `#cab361` | `text-warning` |
| `info` | `#3f82b2` | `text-info` |

#### Category colors (budget tags, chart segments)

| Token | Value |
|---|---|
| `category-green` | `#277c78` |
| `category-army-green` | `#7f9161` |
| `category-turquoise` | `#597c7c` |
| `category-cyan` | `#82c9d7` |
| `category-blue` | `#3f82b2` |
| `category-navy` | `#626070` |
| `category-navy-grey` | `#97a0ac` |
| `category-purple` | `#826cb0` |
| `category-pink` | `#af81ba` |
| `category-magenta` | `#934f6f` |
| `category-red` | `#c94736` |
| `category-orange` | `#be6c49` |
| `category-brown` | `#93674f` |
| `category-gold` | `#cab361` |
| `category-yellow` | `#f2cdac` |

### Typography

Font: **Public Sans**. Six-step scale — desktop values shown; mobile overrides apply below `768px`.

| Token | Desktop | Mobile | Tailwind class |
|---|---|---|---|
| `preset-1` | 56px / 1.2 | 32px / 1.2 | `text-preset-1` |
| `preset-2` | 40px / 1.2 | 20px / 1.5 | `text-preset-2` |
| `preset-3` | 32px / 1.2 | 16px / 1.5 | `text-preset-3` |
| `preset-4` | 24px / 1.2 | 14px / 1.5 | `text-preset-4` |
| `preset-5` | 18px / 1.5 | 12px / 1.5 | `text-preset-5` |
| `preset-6` | 16px / 1.5 | — | `text-preset-6` |

---

## 4. Using Tokens — Three Patterns

### Pattern 1 — Tailwind utility classes (default)

Tailwind v4 generates utilities automatically from every `--color-{name}` and `--text-{name}` variable in `@theme`. Use these in JSX/TSX.

```tsx
// Backgrounds
<div className="bg-canvas" />
<div className="bg-surface rounded-lg" />
<nav className="bg-sidebar" />

// Text
<h1 className="text-preset-2 font-bold text-foreground" />
<p  className="text-preset-6 text-secondary" />
<span className="text-muted" />

// Interactive
<button className="bg-accent text-inverse hover:bg-accent-hover" />

// Borders
<div className="border border-border" />

// Category tags
<span className="bg-category-green text-inverse rounded-full px-2 py-0.5" />
<span className="bg-category-magenta text-inverse rounded-full px-2 py-0.5" />

// Feedback
<p className="text-error" />
<p className="text-success" />
```

Every color token works with any color-accepting utility: `ring-accent`, `fill-category-blue`, `shadow-border`, etc.

### Pattern 2 — CSS variable in `style` prop (runtime / dynamic values)

Use when the class name is not known at compile time — e.g., user-selected categories, chart colors driven by data.

```tsx
import { categoryColorVar, categoryColorHex } from '@/types/tokens';

// CSS variable reference — preferred for DOM elements
<div style={{ backgroundColor: categoryColorVar(category.colorKey) }} />

// Raw hex — required for canvas, SVG, and chart library datasets
const chartData = {
  datasets: categories.map(c => ({
    backgroundColor: categoryColorHex(c.colorKey),
    label: c.name,
  })),
};
```

### Pattern 3 — Arbitrary value with `var()` (escape hatch)

Use for CSS properties that have no Tailwind utility equivalent (complex gradients, custom shadows, etc.).

```tsx
<div className="bg-[var(--color-canvas)]" />
<div className="shadow-[0_2px_8px_var(--color-border-strong)]" />
<div className="bg-[linear-gradient(to_right,var(--color-accent),var(--color-info))]" />
```

### Decision rule

| Situation | Pattern |
|---|---|
| Styling any JSX element | Tailwind class (`bg-surface`, `text-foreground`) |
| Color not expressible as a single class | `bg-[var(--color-accent)]` |
| Chart library / canvas API needs a hex string | `categoryColorHex('green')` |
| Inline style on a DOM element | `categoryColorVar('green')` |

---

## 5. Hard Rules — Never Break These

- Never use a primitive token (`grey-900`, `beige-100`) directly in a component — use a semantic token
- Never hardcode a hex color in JSX or a CSS file — every color must trace back to a token
- Never add a new color outside of `src/styles/tokens.css`
- Never store design tokens in Zustand or component state

---

## 6. Architecture

See [`rules/ARCHITECTURE.md`](rules/ARCHITECTURE.md) for the full guide covering:
- Folder structure and feature conventions
- API client and endpoint constants
- Three-layer type system (DTO → Mapper → Model)
- Service layer, TanStack Query hooks, mutation lifecycle
- Component rules, design patterns, error handling
