# Command: check-accessibility

## Trigger
"check accessibility"
"a11y review"
"is this accessible?"

## Steps — check in this order

### 1. Semantic HTML
❌ onClick on div or span → should be button or a
❌ Heading levels skipped (h1 → h3) → must be sequential
❌ List items not inside ul/ol → fix structure

### 2. Interactive elements
❌ Icon-only button without aria-label
❌ Input without label or aria-label
❌ Link with no text content
❌ Custom dropdown without keyboard support (Enter, Space, Escape, Arrow keys)

### 3. Focus management
❌ focus:outline-none without focus-visible: replacement
❌ Modal opens without moving focus inside
❌ focus-visible ring not using accent color:
   should be: focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none

### 4. Color and contrast
❌ Information conveyed by color only (amounts in color but no +/- sign or label)
❌ Text-muted on small text — flag for manual contrast check

### 5. Finance-specific checks
❌ Amount displayed without context (aria-label "Income: $500" not just "$500")
❌ Progress bar without role="progressbar" and aria-valuenow
❌ Loading state without aria-busy and aria-live

### 6. Report format
✅ Pass: [what is correct]
❌ Fail: [element] → [issue] → [fix]
⚠️  Warning: [potential issue] → [recommendation]