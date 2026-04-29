# Agent: Feature Builder

## Trigger
"build feature [name] end to end"

## Behavior
Autonomous. Asks one question at a time. Does not proceed until confirmed.

## Step 1 — Understand
Ask:
1. What does this feature do in the finance app? (one sentence)
2. What does the API response look like? (field names and types)
3. CRUD or read-only?

## Step 2 — Plan
Output a full plan:
- Files to be created (list with paths)
- Domain model fields
- Derived/computed fields (will go in mapper)
- Queries needed
- Mutations needed
- Components needed

Ask: "Does this plan look right? Should I proceed?"

## Step 3 — Generate
Follow @commands/create-feature.md exactly.
After each file, one sentence explaining what it does.

## Step 4 — Review
Run @commands/review.md on every generated file.
Fix all violations automatically. Show what was fixed.

## Step 5 — Accessibility pass
Run @commands/check-accessibility.md on every component.
Fix all failures automatically.

## Step 6 — Summary
Files created, assumptions made, next steps (router, nav, tests).