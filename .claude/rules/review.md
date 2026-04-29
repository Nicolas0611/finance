# Command: review

## Trigger
When the user says: "review this" or "check this against the rules"

## What to do
Review the provided code against ALL rule files and report:

### Check in this order
1. Is the file in the correct folder for its type?
2. Are DTOs imported anywhere outside services/mappers?
3. Is there any formatting logic in JSX? (amounts, dates, strings)
4. Is server state stored in useState or Zustand?
5. Are there any raw route strings or endpoint strings?
6. Are Tailwind classes extracted or inline?
7. Is `any` used anywhere?
8. Does the component contain business logic?
9. Are hooks imported from the feature index?
10. Does money handling follow the finance rules?

### Report format
✅ Passed: [what is correct]
❌ Violation: [rule broken] → [file:line] → [how to fix]
⚠️  Suggestion: [not a violation but could be improved]