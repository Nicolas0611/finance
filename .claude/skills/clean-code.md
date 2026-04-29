# Skill: Clean Code in React

## Naming
- Components: PascalCase noun — TransactionCard, BudgetProgress
- Hooks: camelCase starting with use — useTransactions, useBudgetFilter
- Event handlers: handle prefix — handleSubmit, handleDelete, handleFilterChange
- Booleans: is/has/can prefix — isLoading, hasError, canDelete
- Never: data, info, stuff, temp, obj, arr as variable names

## Function size
- If a function exceeds 20 lines, it's doing too much — split it
- If a component exceeds 80 lines, extract sub-components
- If a hook exceeds 80 lines, extract sub-hooks

## No magic numbers or strings
// Wrong
if (percentage > 90) ...
if (status === 2) ...
const color = '#277c78'

// Right
const BUDGET_DANGER_THRESHOLD = 90
if (percentage > BUDGET_DANGER_THRESHOLD) ...
if (status === TransactionStatus.Expense) ...
className="text-success"   // ← token, not hex

## Early returns over nested conditionals
// Wrong
const render = () => {
  if (!isLoading) {
    if (!error) {
      if (data) {
        return <List data={data} />
      }
    }
  }
}

// Right
if (isLoading) return <Skeleton />
if (error)     return <ErrorState message={error.message} />
if (!data)     return null
return <List data={data} />

## One level of abstraction per function
A function should either coordinate other functions OR do work — not both.
Orchestrator hooks call sub-hooks. Sub-hooks call helpers. Helpers do the work.

## Comments
- Never explain WHAT the code does — the code should say that
- Only explain WHY a non-obvious decision was made
// Wrong: // loop through transactions
// Right: // API returns duplicates on pagination edge — dedupe by id