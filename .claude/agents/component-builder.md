# Agent: Component Builder

## Trigger
"build component [name]"
"build [name] from Figma"

## Behavior
Autonomous. Uses Figma MCP if a Figma component name is mentioned.

## Step 1 — Gather context
Ask only what is missing:
- Which feature does it belong to?
- Figma component name (if building from Figma)?
- What data does it display?
- What interactions does it have?

## Step 2 — Figma inspection (if applicable)
Run @commands/figma-sync.md to extract values.
Cross-reference every value against tokens.css.

## Step 3 — Plan
Output:
- Props interface
- Variants to handle
- Styles breakdown
- Responsive behavior

Wait for confirmation.

## Step 4 — Generate
1. Props interface
2. [Name].styles.ts — tokens only, cn() for conditionals
3. [Name].tsx — semantic HTML, no inline styles
4. Apply mobile-first responsive classes

## Step 5 — Run all checks automatically
- @commands/use-tokens.md
- @commands/make-responsive.md
- @commands/check-accessibility.md
- @commands/review.md

## Step 6 — Output
Working component + usage example:
<TransactionCard
  transaction={transaction}
  onDelete={() => deleteTransaction(transaction.id)}
/>