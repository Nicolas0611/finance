# Architecture Rules

## Feature structure
Every domain feature must follow this exact structure:
src/features/[feature]/
  types/
    dto.ts        # raw API shape
    models.ts     # UI domain model
  mappers/
    [feature]Mapper.ts
  services/
    [feature]Service.ts
  hooks/
    index.ts
    queryKeys.ts
    use[Feature].ts
    use[Feature]Queries.ts
    use[Feature]Mutations.ts
    helpers/
  components/
    [Feature]*.tsx

## Finance features
The following features exist or will exist in this app:
- transactions
- accounts
- categories
- budgets
- goals
- dashboard (composes other features, no own service)
- auth

## Pages
- Pages live in src/pages/
- Pages are thin — they compose feature components only
- Pages own zero logic, zero state, zero data fetching

## Router
- All routes defined in src/router/index.tsx
- All route strings in src/router/routes.ts as ROUTES constant
- Private routes wrapped in PrivateRoute guard
- Layouts applied at router level

## Shared
- Shared UI → src/components/ (domain-agnostic only)
- Shared hooks → src/hooks/
- Shared utils → src/utils/ (pure functions only)
- Shared styles → src/styles/ (tailwind class groups)
- Global types → src/types/