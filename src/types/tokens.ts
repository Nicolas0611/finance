/**
 * TypeScript token definitions — mirrors src/styles/tokens.css
 * Use these for programmatic color access (charts, inline styles, JS logic).
 * For Tailwind utilities in JSX/TSX, use the class names directly.
 */

// ---------------------------------------------------------------------------
// Category colors
// Used for budget categories, transaction tags, and chart segments.
// ---------------------------------------------------------------------------

export const CATEGORY_COLORS = {
  green: '#277c78',
  'army-green': '#7f9161',
  turquoise: '#597c7c',
  cyan: '#82c9d7',
  blue: '#3f82b2',
  navy: '#626070',
  'navy-grey': '#97a0ac',
  purple: '#826cb0',
  pink: '#af81ba',
  magenta: '#934f6f',
  red: '#c94736',
  orange: '#be6c49',
  brown: '#93674f',
  gold: '#cab361',
  yellow: '#f2cdac',
} as const;

export type CategoryColorKey = keyof typeof CATEGORY_COLORS;

// ---------------------------------------------------------------------------
// Primitive palette (rarely needed directly — prefer semantic tokens below)
// ---------------------------------------------------------------------------

export const PALETTE = {
  grey: {
    900: '#201f24',
    500: '#696868',
    300: '#b3b3b3',
    100: '#f2f2f2',
  },
  beige: {
    500: '#98908b',
    100: '#f8f4f0',
  },
  white: '#ffffff',
} as const;

// ---------------------------------------------------------------------------
// Semantic color CSS variable names
// Use `var(--color-{name})` in inline styles when Tailwind classes aren't
// sufficient (e.g., dynamic chart colors derived at runtime).
// ---------------------------------------------------------------------------

export const COLOR_VARS = {
  // Backgrounds
  canvas: 'var(--color-canvas)',
  surface: 'var(--color-surface)',
  sidebar: 'var(--color-sidebar)',
  overlay: 'var(--color-overlay)',

  // Text
  foreground: 'var(--color-foreground)',
  secondary: 'var(--color-secondary)',
  muted: 'var(--color-muted)',
  inverse: 'var(--color-inverse)',
  onBeige: 'var(--color-on-beige)',

  // Borders
  border: 'var(--color-border)',
  borderStrong: 'var(--color-border-strong)',

  // Interactive
  accent: 'var(--color-accent)',
  accentHover: 'var(--color-accent-hover)',

  // Feedback
  success: 'var(--color-success)',
  error: 'var(--color-error)',
  warning: 'var(--color-warning)',
  info: 'var(--color-info)',
} as const;

/**
 * Returns the CSS variable string for a category color.
 * Use for inline styles in chart segments, tags, etc.
 *
 * @example
 * <div style={{ backgroundColor: categoryColorVar('green') }} />
 */
export const categoryColorVar = (key: CategoryColorKey): string =>
  `var(--color-category-${key})`;

/**
 * Returns the hex value for a category color.
 * Use when a raw hex string is required (e.g., canvas/SVG APIs).
 */
export const categoryColorHex = (key: CategoryColorKey): string =>
  CATEGORY_COLORS[key];
