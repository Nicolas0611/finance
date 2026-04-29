# Command: create-feature

## Trigger
"create feature [name]"
"scaffold feature [name]"

## Steps — execute in this exact order

### 1. Clarify (ask only if not provided)
- What does this feature do in the finance app?
- What does the API response look like?
- What operations are needed? (read-only / full CRUD)

### 2. Generate files in order
1. src/features/[name]/types/dto.ts
2. src/features/[name]/types/models.ts
3. src/features/[name]/mappers/[name]Mapper.ts  → follow @skills/mapper.md
4. src/features/[name]/services/[name]Service.ts
5. src/features/[name]/hooks/queryKeys.ts
6. src/features/[name]/hooks/use[Name]Queries.ts  → follow @skills/tanstack.md
7. src/features/[name]/hooks/use[Name]Mutations.ts
8. src/features/[name]/hooks/use[Name].ts (orchestrator)
9. src/features/[name]/hooks/index.ts (barrel)

### 3. Ask before generating components
"Do you need a list component, a form, or both?"
Then generate accordingly following @skills/tailwind.md and @skills/tokens.md.

### 4. Run review automatically
After generation, run @commands/review.md on every file.
Fix violations before presenting output.

### 5. Output summary
- Files created (list)
- Next steps (add to router, add to nav)
- Any assumptions made