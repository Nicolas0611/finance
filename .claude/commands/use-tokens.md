# Command: use-tokens

## Trigger
"use tokens"
"replace hardcoded values with tokens"
"apply design tokens to this"

## Steps

### 1. Scan for violations
- Raw hex values: #201f24, #277c78, etc.
- Raw Tailwind color classes: gray-900, green-600, red-500, etc.
- Arbitrary values: text-[14px], p-[12px], bg-[#fff]
- Raw font size classes: text-sm, text-lg, text-2xl, etc.

### 2. Map to correct token
Use the full token map from @skills/tokens.md
When no token exists → add it to tokens.css first, then use it.

### 3. Show diff
BEFORE: className="text-gray-900 text-sm bg-white rounded-lg"
AFTER:  className="text-foreground text-preset-6 bg-surface rounded-lg"

### 4. Finance color check
green-* → text-success or bg-success (income context)
         → text-accent or bg-accent (CTA context)
red-*   → text-error or bg-error
amber-* → text-warning or bg-warning