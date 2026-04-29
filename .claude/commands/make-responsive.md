# Command: make-responsive

## Trigger
"make this responsive"
"add responsive layout"
"mobile version"

## Steps

### 1. Identify layout type
list / card grid / form / table / dashboard / navigation
Match to finance layout patterns in @rules/responsive.md.

### 2. Apply mobile-first
- Remove fixed pixel widths
- Write base (mobile) classes first
- Add sm: md: lg: overrides
- Ensure touch targets are min-h-11 min-w-11

### 3. Finance layout patterns
transaction list → cards on mobile / table on lg:
budget cards     → grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
dashboard        → flex-col lg:flex-row with sidebar
forms            → w-full lg:max-w-lg lg:mx-auto

### 4. Move all responsive classes to .styles.ts
Never leave long responsive strings inline in JSX.

### 5. Confirm breakpoints
Show output for: mobile / tablet / desktop