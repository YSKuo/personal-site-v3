export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const MEDIA_QUERY_XS = `@media screen and (min-width: ${breakpoints.xs}px)`;
export const MEDIA_QUERY_SM = `@media screen and (min-width: ${breakpoints.sm}px)`;
export const MEDIA_QUERY_MD = `@media screen and (min-width: ${breakpoints.md}px)`;
export const MEDIA_QUERY_LG = `@media screen and (min-width: ${breakpoints.lg}px)`;
export const MEDIA_QUERY_XL = `@media screen and (min-width: ${breakpoints.xl}px)`;

export function mediaQueryBreakpoint(size) {
  switch (size.toLowerCase()) {
    case "xs":
      return MEDIA_QUERY_XS;
    case "sm":
      return MEDIA_QUERY_SM;
    case "md":
      return MEDIA_QUERY_MD;
    case "lg":
      return MEDIA_QUERY_LG;
    case "xl":
      return MEDIA_QUERY_XL;
    default:
      return MEDIA_QUERY_XS;
  }
}
