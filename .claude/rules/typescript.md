# Component Rules

## Types of components

### Presentational components
- Receive everything as props — no fetching, no business logic
- No direct TanStack Query calls
- No Zustand store access
- Pure rendering — JSX only reads props and calls callbacks

### Container / page components
- Pages are thin wrappers — they compose feature components
- A page may import one orchestrator hook maximum
- Zero formatting, zero business logic in pages

## Rules
- Never write more than 2 JSX lines without extracting to a sub-component
- Never format data in JSX — amounts, dates, percentages come pre-formatted from mapper
- Never do array .find() .filter() .map() for data logic in JSX — do it in the hook
- Never put conditional business logic in JSX — extract to a variable or helper
- Components under src/components/ must never import from any feature folder
- Always define prop interfaces explicitly — never inline type in function signature

## Prop interface pattern
// Wrong
const Card = ({ title, amount, isActive }: { title: string; amount: number; isActive: boolean }) =>

// Right
interface CardProps {
  title:    string
  amount:   number
  isActive: boolean
  onPress?: () => void
}
const Card = ({ title, amount, isActive, onPress }: CardProps) =>

## Imports
- Always import hooks from the feature barrel: @/features/transactions/hooks
- Never import from internal paths: @/features/transactions/hooks/useTransactionQueries