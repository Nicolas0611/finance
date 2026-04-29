# Agent: Feature Builder

## Trigger
"build feature [name] end to end"

## Behavior
Autonomous. Asks one question at a time. Does not proceed until confirmed.

## Step 0 — Declare context (always first, always visible)
Before doing anything else, output this block:

---
**Context loaded:**
- rules: architecture.md, typescript.md, components.md, data-fetching.md, styling.md, responsive.md, finance.md
- skills: mapper.md, tanstack.md, tokens.md, tailwind.md, accessibility.md, solid.md, clean-code.md
- commands: create-feature.md, create-service.md, use-tokens.md, make-responsive.md, check-accessibility.md, review.md
- agents: component-builder.md (will be invoked if components are needed)
- component convention: export default, own folder, barrel index.ts
---

## Step 1 — Understand
Ask one at a time, wait for each answer:
1. What does this feature do in the finance app? (one sentence)
2. What does the API response look like? (field names and types)
3. CRUD or read-only?
4. Does this feature need UI components? If yes — list view, form, detail, or all three?

## Step 2 — Plan
Output a full plan before writing any code:

**Service layer**
- DTO fields
- Domain model fields
- Computed/derived fields (go in mapper)
- Endpoints needed

**Hook layer**
- Queries needed
- Mutations needed
- Sub-hooks needed

**Component layer** (if applicable)
- Component name and type (list / form / card / detail)
- Props each component receives
- Variants to handle
- Responsive behavior

**Files to be created** (full path list)

Ask: "Does this plan look right? Should I proceed?"

## Step 3 — Generate service layer
Follow @commands/create-service.md exactly:
1. types/dto.ts
2. types/models.ts
3. mappers/[name]Mapper.ts
4. services/[name]Service.ts
5. Update src/api/endpoints.ts

After each file, one sentence explaining what it does.

## Step 4 — Generate hook layer
Follow @commands/create-feature.md hook steps:
1. hooks/queryKeys.ts
2. hooks/use[Name]Queries.ts
3. hooks/use[Name]Mutations.ts
4. hooks/use[Name].ts (orchestrator)
5. hooks/index.ts (barrel)

After each file, one sentence explaining what it does.

## Step 5 — Generate components (invoke component-builder)
If components are needed, run the full @agents/component-builder.md
flow for each component identified in the plan.

For each component:

  ### Step 5a — Declare component context
  ---
  **Building component: [Name]**
  - rules loaded: components.md, styling.md, responsive.md
  - skills loaded: tokens.md, tailwind.md, accessibility.md
  - convention: export default, own folder [Name]/[Name].tsx
  ---

  ### Step 5b — Generate component files in order
  1. [Name]/[Name].styles.ts
     - All classes use design tokens from tokens.css
     - Conditional classes use cn()
     - No raw Tailwind colors or arbitrary values
     - Responsive classes — mobile first

  2. [Name]/[Name].tsx
     - export default [Name]
     - Semantic HTML
     - No logic, no formatting, no data fetching
     - Props interface explicitly defined
     - Imports styles as: import { [name]Styles as cls } from './[Name].styles'

  3. Update components/index.ts barrel:
     export { default as [Name] } from './[Name]/[Name]'

  ### Step 5c — Run checks on each component automatically
  - @commands/use-tokens.md — no raw values
  - @commands/make-responsive.md — mobile first, all breakpoints
  - @commands/check-accessibility.md — semantic HTML, ARIA, focus

## Step 6 — Review everything
Run @commands/review.md on every generated file across all layers.
Fix all violations automatically.
Show a summary of what was fixed.

## Step 7 — Summary output

**Files created:**
src/features/[name]/
  types/dto.ts
  types/models.ts
  mappers/[name]Mapper.ts
  services/[name]Service.ts
  hooks/queryKeys.ts
  hooks/use[Name]Queries.ts
  hooks/use[Name]Mutations.ts
  hooks/use[Name].ts
  hooks/index.ts
  components/[Name]List/[Name]List.tsx        (if generated)
  components/[Name]List/[Name]List.styles.ts  (if generated)
  components/[Name]Form/[Name]Form.tsx        (if generated)
  components/[Name]Form/[Name]Form.styles.ts  (if generated)
  components/index.ts                          (updated)

src/api/endpoints.ts  (updated)

**Usage example:**
import { [Name]List, [Name]Form } from '@/features/[name]/components'
import { use[Name] } from '@/features/[name]/hooks'

**Next steps:**
- Add route to src/router/index.tsx
- Add ROUTES constant to src/router/routes.ts
- Add to navigation if needed