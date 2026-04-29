# Skill: Accessibility (a11y)

## Why this matters as a design engineer
Accessibility IS design. If a screen reader user or keyboard user
can't use your component, the design is incomplete.

## Core rules

### Semantic HTML first
Use the right element for the job — never div for interactive things.
button  → clickable actions
a       → navigation / links
nav     → navigation regions
main    → primary content
section → grouped content with a heading
article → self-contained content (transaction card, budget card)
header / footer → landmark regions

### Interactive elements
- Every button must have visible text OR aria-label
- Every icon-only button needs aria-label:
  <button aria-label="Delete transaction">
    <TrashIcon />
  </button>
- Every form input needs a visible <label> or aria-label
- Never use onClick on a div — use button or a

### Focus management
- Never remove focus outline — style it instead:
  focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none
- After a modal opens, focus must move inside it
- After a modal closes, focus must return to the trigger

### Color contrast (WCAG AA minimum)
- text-foreground on bg-canvas → ✅ passes (dark on beige)
- text-secondary on bg-surface → ✅ passes
- text-muted on bg-surface     → ⚠️ check — may fail for small text
- text-inverse on bg-sidebar   → ✅ passes
- Never convey meaning by color alone — pair with icon or text

### ARIA
- aria-label → for elements without visible text
- aria-describedby → to link an input to its error message
- aria-live="polite" → for dynamic content updates (new transaction added)
- aria-expanded → for toggles and dropdowns
- aria-current="page" → for active nav items
- role="status" → for loading states

## Finance-specific a11y patterns

### Amount display
// Wrong — screen reader reads "500" with no context
<span className="text-success">500.00</span>

// Right — screen reader reads "Income: $500.00"
<span className="text-success" aria-label="Income: $500.00">
  +$500.00
</span>

### Progress bar (budget)
<div
  role="progressbar"
  aria-valuenow={budget.percentageUsed}
  aria-valuemin={0}
  aria-valuemax={100}
  aria-label={`${budget.categoryName}: ${budget.percentageUsed}% used`}
>
  <div style={{ width: `${budget.percentageUsed}%` }} />
</div>

### Loading state
<div aria-live="polite" aria-busy={isLoading}>
  {isLoading ? <Skeleton /> : <TransactionList />}
</div>