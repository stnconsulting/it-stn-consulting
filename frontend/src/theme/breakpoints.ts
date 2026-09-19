export const breakpoints = {
  sm: '640px',   // Mobile large / Tablettes portrait
  md: '768px',   // Tablettes
  lg: '1024px',  // Laptops / Desktops
  xl: '1280px',  // Grands écrans
  '2xl': '1536px',
} as const;

export type Breakpoint = keyof typeof breakpoints;

// Helpers pour Media Queries CSS-in-JS ou styles dynamiques
export const mediaQueries = {
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  '2xl': `@media (min-width: ${breakpoints['2xl']})`,
} as const;