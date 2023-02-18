import {THEME, ThemeConfig} from "./constants";
import {createTheme, Theme, ThemeOptions} from "@mui/material";
import merge from 'lodash/merge';


export const baseOptions: ThemeOptions = {
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
  }
}

const MAIN_COLOR_LIGHT_THEME = '#1A2036'
const SECONDARY_COLOR_LIGHT_THEME = '#f4f5f7'

const MAIN_COLOR_DARK_THEME = '#f4f5f7'
const SECONDARY_COLOR_DARK_THEME = '#1A2036'

export const themesOptions: Record<string, ThemeOptions> = {
  [THEME.LIGHT]: {
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: MAIN_COLOR_LIGHT_THEME,
            color: SECONDARY_COLOR_LIGHT_THEME
          }
        }
      }
    }
  },
  [THEME.DARK]: {
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: MAIN_COLOR_DARK_THEME,
            color: SECONDARY_COLOR_DARK_THEME
          },
        },
      }
    }
  }
}

export const createCustomTheme = (config: ThemeConfig = {}): Theme => {
  let themeOptions = themesOptions[config.theme || THEME.DARK];

  console.log(themeOptions)
  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    themeOptions = themesOptions[THEME.LIGHT];
  }
  return createTheme(
    merge({}, baseOptions, themeOptions,)
  );
};

