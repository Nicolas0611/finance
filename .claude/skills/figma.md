# Skill: Working with Figma MCP

## What Figma MCP gives you
Direct access to your Figma file — components, tokens, frames, variants.
Use it to extract exact values instead of guessing from screenshots.

## How to use it in a prompt
"Using the Figma MCP, inspect the TransactionCard component
and generate the React component matching it exactly."

"Fetch the color tokens from the Finance Colors frame in Figma
and verify they match src/styles/tokens.css"

"Get the spacing and layout values from the Dashboard frame
and generate the responsive Tailwind classes for it."

## What to ask Figma MCP for
- Exact color hex values → verify against tokens.css
- Component dimensions, padding, gap values → translate to Tailwind spacing
- Typography — font size, weight, line height → map to text-preset-*
- Component variants → map to conditional style functions in .styles.ts
- Icon names → map to the icon library in use
- Component hierarchy → map to React component tree

## Figma → code translation rules
| Figma value          | Code equivalent              |
|----------------------|------------------------------|
| Fill #f8f4f0         | bg-canvas                    |
| Fill #277c78         | bg-accent or bg-success      |
| Fill #c94736         | bg-error                     |
| Text #201f24         | text-foreground              |
| Text #696868         | text-secondary               |
| Corner radius 8      | rounded-md                   |
| Corner radius 16     | rounded-xl                   |
| Font size 16 / 1.5   | text-preset-6                |
| Font size 18 / 1.5   | text-preset-5                |
| Auto layout gap 16   | gap-4                        |
| Padding 16           | p-4                          |
| Padding 24           | p-6                          |

## Verification step
After generating from Figma:
1. Compare every color against tokens.css — no raw hex in code
2. Compare every spacing value — use Tailwind scale, not arbitrary values
3. Compare every font size — use text-preset-*, not text-sm/lg/etc.
4. Run @commands/review.md on the output