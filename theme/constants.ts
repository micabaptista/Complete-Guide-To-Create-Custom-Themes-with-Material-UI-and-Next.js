export enum THEME {
  'LIGHT' = 'light',
  'DARK' = 'dark',
}

export type Theme = THEME.DARK | THEME.LIGHT

export interface ThemeConfig {
  theme?: string;
}
