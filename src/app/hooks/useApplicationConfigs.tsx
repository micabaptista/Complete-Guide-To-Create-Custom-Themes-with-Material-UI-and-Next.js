import {createContext, useCallback, useContext} from "react";
import {useRouter} from "next/router";
import {useLocalStorage} from "@/app/hooks/useLocalStorage";
import {THEME, Theme} from "../../../theme/constants";

interface AuthenticationProviderProps {
  children: JSX.Element;
}

interface ApplicationConfigsContextInterface {
  changeTheme: () => void;
  theme: Theme;
}

export const defaultApplicationConfigsContext: ApplicationConfigsContextInterface = {
  theme: THEME.LIGHT,
  changeTheme: () => void 0,
};

export const ApplicationConfigsContext = createContext(defaultApplicationConfigsContext);

const useApplicationConfigs = () => useContext(ApplicationConfigsContext);

const ApplicationConfigs = ({children}: AuthenticationProviderProps) => {

  const defaultConfig = {
    theme: THEME.LIGHT
  };

  const [config, setConfig] = useLocalStorage("config", defaultConfig);

  const changeTheme = useCallback(() => {
    if (config.theme === THEME.LIGHT) {
      setConfig({...config, theme: THEME.DARK})
    } else {
      setConfig({...config, theme: THEME.LIGHT})
    }
  }, [config, setConfig])


  return (
    <ApplicationConfigsContext.Provider
      value={{
        theme: config.theme,
        changeTheme,
      }}
    >
      {children}
    </ApplicationConfigsContext.Provider>
  );
};

export {ApplicationConfigs, useApplicationConfigs};
