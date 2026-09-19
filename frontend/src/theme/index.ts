import { colors } from './colors';
import { spacing, dimensions } from './spacing';
import { typography } from './typography';
import { breakpoints, mediaQueries } from './breakpoints';

export const theme = {
  colors,
  spacing,
  dimensions,
  typography,
  breakpoints,
  mediaQueries,
} as const;

export type Theme = typeof theme;
export default theme;