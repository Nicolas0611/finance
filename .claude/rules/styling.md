# Styling Rules

## Token rule — the most important rule
NEVER use raw Tailwind color classes or arbitrary values.
ALWAYS use the design tokens from src/styles/tokens.css.
Tokens are defined inside @theme {} — they become Tailwind utilities automatically.

## How tokens map to utilities
--color-canvas       → bg-canvas, text-canvas, border-canvas
--color-foreground   → text-foreground
--color-surface      → bg-surface
--color-accent       → bg-accent, text-accent, border-accent
--color-error        → bg-error, text-error, border-error
--text-preset-1      → text-preset-1
--radius-xl          → rounded-xl

## Wrong — never do this
<p className="text-gray-900 text-[14px] bg-white rounded-[8px]">
<p className="text-green-600 font-bold">+$500.00</p>
<div className="bg-[#f8f4f0]">
<h1 className="text-4xl font-bold">

## Right — always do this
<p className="text-foreground text-preset-6 bg-surface rounded-md">
<p className="text-success font-bold">+$500.00</p>
<div className="bg-canvas">
<h1 className="text-preset-2 font-bold">

## Class extraction rule
- 1–2 classes inline → acceptable
- 3+ classes on one element → extract to .styles.ts immediately
- Conditional classes → always use cn() — never template literals

## File convention
Every component with 3+ classes anywhere needs a sibling styles file:
  TransactionCard.tsx
  TransactionCard.styles.ts

Import the styles file aliased as `cls`:
  import { transactionCardStyles as cls } from './TransactionCard.styles'

## Finance semantic color rules
| Situation              | Token class          |
|------------------------|----------------------|
| Income / positive      | text-success         |
| Expense / negative     | text-error           |
| Warning state          | text-warning         |
| Info / neutral accent  | text-info            |
| Primary CTA button     | bg-accent            |
| Page background        | bg-canvas            |
| Card / panel           | bg-surface           |
| Sidebar / nav          | bg-sidebar           |
| Primary text           | text-foreground      |
| Secondary text         | text-secondary       |
| Placeholder / hint     | text-muted           |
| Text on dark bg        | text-inverse         |
| Default border         | border-border        |
| Strong border          | border-border-strong |

## Typography rule
Always use text presets — never raw font-size or text-* size classes:
| Token           | Desktop | Mobile | Use for              |
|-----------------|---------|--------|----------------------|
| text-preset-1   | 56px    | 32px   | Hero headings        |
| text-preset-2   | 40px    | 20px   | Page titles          |
| text-preset-3   | 32px    | 16px   | Section headings     |
| text-preset-4   | 24px    | 14px   | Sub-headings         |
| text-preset-5   | 18px    | 12px   | Large body / amounts |
| text-preset-6   | 16px    | 16px   | Default body text    |

Mobile scale is applied automatically via tokens.css media query.
Never override type scale manually in components.

## Category colors
For budget and transaction category badges and chart segments:
bg-category-green · bg-category-army-green · bg-category-turquoise
bg-category-cyan  · bg-category-blue       · bg-category-navy
bg-category-navy-grey · bg-category-purple · bg-category-pink
bg-category-magenta   · bg-category-red    · bg-category-orange
bg-category-brown     · bg-category-gold   · bg-category-yellow

Never hardcode category colors — always reference by token class.