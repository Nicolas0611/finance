# Command: figma-sync

## Trigger
"sync from Figma"
"inspect [component] in Figma"
"get [component] from Figma"
"does this match Figma?"

## Steps

### 1. Connect to Figma MCP
Use the Figma MCP to fetch the component or frame by name.

### 2. Extract values
From the Figma node extract:
- Colors → map to tokens.css semantic tokens
- Typography → map to text-preset-* scale
- Spacing / padding / gap → map to Tailwind spacing scale
- Border radius → map to rounded-* token
- Component variants → map to conditional style functions
- Component hierarchy → map to React component tree

### 3. Cross-reference tokens
For every extracted color:
- Look it up in tokens.css
- If it matches a token → use the token class
- If it doesn't exist → add it to tokens.css with a semantic name first

### 4. Generate code
Following @skills/tokens.md and @skills/tailwind.md:
- [Name].styles.ts with all extracted values as tokens
- [Name].tsx matching the Figma component hierarchy

### 5. Verify alignment
Compare generated component against Figma:
- Spacing matches?
- Colors using correct tokens?
- Typography using text-preset-*?
- Variants covered?

### 6. Run checks
- @commands/use-tokens.md — no raw values
- @commands/check-accessibility.md — a11y passes
- @commands/review.md — all rules pass