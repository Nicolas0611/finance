# Finance Personal App

## What this app does
Personal finance tracker — transactions, accounts, budgets, goals, analytics.

## Stack
React 18 + TypeScript strict + TanStack Query v5 + Axios
+ Zustand + React Router v6 + React Hook Form + Zod + Tailwind CSS

## Design system
Figma file: https://www.figma.com/design/bc6YxCLhzVxQabHkfb7Vjy/personal-finance-app
Tokens live in: src/styles/tokens.css
ALWAYS use design tokens — never hardcode colors, spacing, or typography values.

## Rules (read before ANY code)
- @rules/architecture.md
- @rules/typescript.md
- @rules/components.md
- @rules/data-fetching.md
- @rules/styling.md
- @rules/responsive.md
- @rules/create-feature.md
- @rules/review.md

## Skills (how to implement things)
- @skills/mapper.md
- @skills/tanstack.md
- @skills/tailwind.md
- @skills/tokens.md
- @skills/forms.md
- @skills/accesibility.md
- @skills/clean-code.md
- @skills/@figma.md


## Commands (shortcuts)
- @commands/create-feature.md
- @commands/create-component.md
- @commands/create-service.md
- @commands/use-tokens.md
- @commands/make-responsive.md
- @commands/review.md
- @commands/check-accesibility.md

## Agents
- @agents/feature-builder.md
- @agents/component-builder.md
- @agents/designer-review.md

## Finance vocabulary
transaction · account · category · budget · period · goal · balance

## Hard rules — never break
1. Always use design tokens from src/styles/theme.ts — never raw values
2. Every layout must be responsive — mobile first
3. DTOs never appear in components
4. Server state → TanStack Query only
5. No formatting in JSX — mappers handle it
6. No raw strings for routes or endpoints
7. Tailwind classes → styles object in .styles.ts file
8. never use `any`