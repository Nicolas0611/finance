# Responsive Layout Rules

## Breakpoints
Mobile:  < 640px    → base classes (no prefix) — always write these first
Tablet:  640–1023px → sm: and md:
Desktop: 1024px+    → lg: and xl:

## Mobile-first rule — non-negotiable
ALWAYS write mobile styles first then override upward.

## Wrong
<div className="grid grid-cols-3 sm:grid-cols-1">

## Right
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

## Finance layout patterns
These are the standard responsive behaviors for this app:

| Layout            | Mobile          | Tablet          | Desktop              |
|-------------------|-----------------|-----------------|----------------------|
| Dashboard         | single column   | 2 columns       | sidebar + main       |
| Transaction list  | stacked cards   | stacked cards   | table rows           |
| Budget cards      | 1 column        | 2 columns       | 3 columns            |
| Goal cards        | 1 column        | 2 columns       | 3 columns            |
| Forms             | full width      | full width      | max-w-lg centered    |
| Navigation        | bottom bar      | bottom bar      | left sidebar         |

## Touch targets
All interactive elements must be minimum 44×44px on mobile.
Use min-h-11 min-w-11 (44px) for all buttons and tappable elements.

## Responsive classes go in the .styles.ts file — never inline
// Wrong
<div className="w-full sm:w-1/2 lg:w-1/3 p-3 sm:p-4 lg:p-6 text-sm lg:text-base">

// Right — in the .styles.ts file
card: 'w-full sm:w-1/2 lg:w-1/3 p-3 sm:p-4 lg:p-6 text-preset-6'

## Never use fixed pixel widths for layout
Wrong: w-[380px] h-[200px]
Right: w-full max-w-sm h-auto

## Spacing scale
Use Tailwind spacing consistently — match Figma spacing:
- gap-2 (8px)  → tight spacing between related elements
- gap-4 (16px) → default spacing
- gap-6 (24px) → section spacing
- gap-8 (32px) → large section spacing