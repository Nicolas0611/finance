# Skill: Design Tokens

## Where tokens live
src/styles/tokens.css — inside @theme {} block.
Tailwind v4 reads this file and exposes every token as a utility class automatically.

## Token reference

### Backgrounds
bg-canvas        → page background       #f8f4f0
bg-surface       → cards, panels         #ffffff
bg-sidebar       → navigation            #201f24
bg-overlay       → modals, drawers       #201f24
bg-accent        → primary CTA           #277c78
bg-success       → positive feedback     #277c78
bg-error         → negative feedback     #c94736
bg-warning       → caution              #cab361
bg-info          → informational         #3f82b2

### Text
text-foreground  → headings, labels      #201f24
text-secondary   → body copy             #696868
text-muted       → placeholders          #b3b3b3
text-inverse     → text on dark bg       #ffffff
text-on-beige    → captions on beige     #98908b
text-accent      → links, interactive    #277c78
text-success     → income, positive      #277c78
text-error       → expense, negative     #c94736
text-warning     → warning state         #cab361
text-info        → info state            #3f82b2

### Borders
border-border        → default divider   #f2f2f2
border-border-strong → emphasis          #b3b3b3
border-accent        → focus / active    #277c78
border-error         → error state       #c94736

### Typography presets
text-preset-1  → 56px / 32px mobile  — hero headings
text-preset-2  → 40px / 20px mobile  — page titles
text-preset-3  → 32px / 16px mobile  — section headings
text-preset-4  → 24px / 14px mobile  — sub-headings
text-preset-5  → 18px / 12px mobile  — large body / amounts
text-preset-6  → 16px / 16px mobile  — default body

### Border radius
rounded-sm   → 4px
rounded-md   → 8px
rounded-lg   → 10px
rounded-xl   → 16px
rounded-full → 9999px

### Category colors (badges, charts)
bg-category-green · bg-category-army-green · bg-category-turquoise
bg-category-cyan  · bg-category-blue       · bg-category-navy
bg-category-navy-grey · bg-category-purple · bg-category-pink
bg-category-magenta   · bg-category-red    · bg-category-orange
bg-category-brown     · bg-category-gold   · bg-category-yellow

## Usage pattern
// Component.styles.ts
import { cn } from '@/utils/cn'

export const cardStyles = {
  root: cn(
    'bg-surface border border-border rounded-xl',
    'p-4 flex flex-col gap-3'
  ),
  amount: (isExpense: boolean) => cn(
    'text-preset-5 font-bold',
    isExpense ? 'text-error' : 'text-success'
  ),
}

## Rule
If a token doesn't exist yet for a new Figma value:
1. Add it to tokens.css inside @theme {}
2. Name it semantically — never by hex or position
3. Use the new class everywhere — one