# Command: create-feature

## Trigger
When the user says: "create feature [name]" or "scaffold feature [name]"

## What to do
Generate the full feature scaffold in this exact order:

1. src/features/[name]/types/dto.ts
   - Ask user for the API fields if not provided
   - Use snake_case, integer flags, raw date strings

2. src/features/[name]/types/models.ts
   - Clean camelCase version of the DTO
   - Dates as Date objects, booleans as booleans
   - Add computed fields relevant to the domain

3. src/features/[name]/mappers/[name]Mapper.ts
   - mapDto() → Model
   - mapDtos() → Model[]
   - mapPayload() → DTO (for write operations)

4. src/features/[name]/services/[name]Service.ts
   - getAll, getById, create, update, delete
   - Each function calls the mapper before returning

5. src/features/[name]/hooks/queryKeys.ts
6. src/features/[name]/hooks/use[Name]Queries.ts
7. src/features/[name]/hooks/use[Name]Mutations.ts
8. src/features/[name]/hooks/use[Name].ts (orchestrator)
9. src/features/[name]/hooks/index.ts (barrel)

10. Ask if a component is needed, then generate:
    - [Name]List.tsx (presentational)
    - [Name]Form.tsx (presentational)

## After generating
Run the feature checklist from @rules/architecture.md