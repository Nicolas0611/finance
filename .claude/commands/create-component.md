# Command: create-component

## Trigger
"create component [name]"
"build component [name]"

## Steps

### 1. Ask one question if not clear
Which feature does this belong to?
Is it shared (src/components/) or feature-specific?

### 2. Plan — show before writing, wait for confirmation
- Component name and location
- Props interface
- Variants (if any)
- Needs .styles.ts? yes/no
- Responsive breakpoints to handle

### 3. Generate in order
1. Props interface (TypeScript)
2. [Name].styles.ts → using tokens from @skills/tokens.md
3. [Name].tsx → clean JSX, no inline styles, no logic

### 4. Apply automatically
- @commands/use-tokens.md on the styles file
- @commands/make-responsive.md on the layout
- @commands/check-accessibility.md on the component

### 5. Output
Component code + usage example