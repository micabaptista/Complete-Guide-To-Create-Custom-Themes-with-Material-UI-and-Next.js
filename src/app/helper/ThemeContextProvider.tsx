import {ThemeProvider} from "@mui/material";
import {createContext} from "react";
import {createCustomTheme} from "../../../theme";
import {THEME, Theme} from "../../../theme/constants";
import {useLocalStorage} from "@/app/hooks/useLocalStorage";
import {useApplicationConfigs} from "@/app/hooks/useApplicationConfigs";

interface ApplicationConfigsContextInterface {
  theme: Theme;
}

export const defaultThemeContext: ApplicationConfigsContextInterface = {
  theme: THEME.LIGHT
};

export const ThemeContext = createContext(defaultThemeContext);


/**
 * I needed to create this ThemeContextProvider because <ThemeProvider needs a value that is on my context. For that reason
 * I needed to separate from _app.tsx. Since I'm using his provider there I could not use the consumer in the same component.
 *
 * This logic was found out here:
 * https://stackoverflow.com/questions/71516195/using-usecontext-to-set-dark-mode-for-all-pages-in-next-js-and-material-ui
 *
 */

export const ThemeContextProvider = (props: { children: JSX.Element }) => {

  const defaultConfig = {
    THEME: THEME.LIGHT
  }
  const {theme} = useApplicationConfigs();

  const darkTheme = createCustomTheme({
    theme: THEME.DARK,
  });

  const lightTheme = createCustomTheme({
    theme: THEME.LIGHT,
  });


  return (
    <ThemeContext.Provider value={{theme}}>
      <ThemeProvider theme={theme === THEME.LIGHT ? lightTheme : darkTheme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
