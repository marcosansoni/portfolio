export const Breakpoint = {
  SM: 600,
  LG: 960,
};

export const MediaQuerySelector = {
  SMALL: `@media only screen and (max-width : ${`${Breakpoint.SM}px`})`,
  MEDIUM: `@media only screen and (max-width : ${`${Breakpoint.LG}px`}) and (min-width: ${`${Breakpoint.SM + 1}px`})`,
  LARGE: `@media only screen and (min-width : ${`${Breakpoint.LG + 1}px`})`,
  SMALL_AND_MEDIUM: `@media only screen and (max-width : ${`${Breakpoint.LG}px`})`,
  MEDIUM_AND_LARGE: `@media only screen and (min-width : ${`${Breakpoint.SM + 1}px`})`,
};
