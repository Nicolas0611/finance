# Command: review

## Trigger
"review this"
"check this against the rules"
"audit this file"

## Steps — check every rule file

### Architecture (@rules/architecture.md)
❌ File in wrong folder for its type
❌ Feature missing a required layer (types/mappers/services/hooks)
❌ Component importing from internal hook path instead of barrel

### TypeScript (@rules/typescript.md)
❌ any used anywhere
❌ DTO imported in a component or hook
❌ Missing explicit prop interface
❌ Type assertion (as Type) used without justification

### Components (@rules/components.md)
❌ Data fetching inside a presentational component
❌ Formatting logic in JSX (amounts, dates, percentages)
❌ Business logic in a page component
❌ Array .find() .filter() for data logic in JSX

### Data fetching (@rules/data-fetching.md)
❌ Server data in useState or Zustand
❌ Raw fetch() used instead of apiClient
❌ Inline query key strings instead of queryKeys constants
❌ Missing staleTime on useQuery

### Styling (@rules/styling.md)
❌ Raw Tailwind color class (gray-900, green-600, etc.)
❌ Arbitrary CSS value ([14px], [#fff])
❌ 3+ classes inline in JSX instead of .styles.ts
❌ Raw font size class (text-sm, text-xl) instead of text-preset-*
❌ Template literal for conditional classes instead of cn()

### Responsive (@rules/responsive.md)
❌ Desktop styles written first (not mobile-first)
❌ Fixed pixel width for layout
❌ Interactive element smaller than min-h-11 on mobile

### Finance (@rules/finance.md)
❌ Float used for money instead of cents integer
❌ Currency formatting in JSX instead of mapper
❌ Budget status computed in component instead of mapper
❌ Transaction type as number instead of 'income' | 'expense'

### Accessibility (@skills/accessibility.md)
❌ onClick on non-interactive element
❌ Missing aria-label on icon-only button
❌ Missing focus-visible styles

### Clean code (@skills/clean-code.md)
❌ Magic number or string
❌ Nested conditionals instead of early returns
❌ Variable named data, info, temp, obj

### SOLID (@skills/solid.md)
❌ Component fetching AND rendering AND formatting
❌ Prop interface with 8+ props — should be split
❌ Hardcoded dependency instead of injected via props/hooks

## Report format
✅ Passed: [what is correct]
❌ Violation: [rule] → [file:line] → [how to fix]
⚠️  Suggestion: [improvement that isn't a violation]
Score: X/10 — [one line summary]