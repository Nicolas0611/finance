# Agent: Design Review

## Trigger
"design review"
"does this match the design system?"
"full audit"

## Behavior
Full automated review of a component or feature against ALL standards.
Use this before marking anything as done.

## Step 1 — Collect scope
Which component, feature, or file to review?

## Step 2 — Figma comparison
Run @commands/figma-sync.md to get the source of truth from Figma.
Compare the actual code against Figma values.

## Step 3 — Token audit
Run @commands/use-tokens.md.
Report every raw value found and what token it should be.

## Step 4 — Responsive audit
Run @commands/make-responsive.md.
Confirm all breakpoints covered: mobile / tablet / desktop.

## Step 5 — Accessibility audit
Run @commands/check-accessibility.md.
Semantic HTML + ARIA + contrast + focus + finance-specific patterns.

## Step 6 — Architecture audit
Run @commands/review.md.
All rules: architecture, TypeScript, components, data, styling, finance.


## Step 8 — Final report

### Design alignment
✅ / ❌ Colors match Figma via tokens
✅ / ❌ Typography matches Figma via presets
✅ / ❌ Spacing matches Figma

### Code quality
✅ / ❌ Architecture rules
✅ / ❌ TypeScript rules
✅ / ❌ SOLID principles
✅ / ❌ Clean code

### Accessibility
✅ / ❌ Semantic HTML
✅ / ❌ ARIA
✅ / ❌ Focus management
✅ / ❌ Color contrast

### Score
Design: X/10
Code:   X/10
A11y:   X/10
Overall: X/10

### Priority fixes (ordered by impact)
1. [most critical]
2. [next]
3. [next]