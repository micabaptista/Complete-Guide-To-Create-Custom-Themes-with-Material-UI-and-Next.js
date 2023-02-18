import type {AppProps} from 'next/app'
import {ThemeContextProvider} from "@/app/helper/ThemeContextProvider";
import {ApplicationConfigs} from "@/app/hooks/useApplicationConfigs";

function App({Component, pageProps}: AppProps) {

  return (
    <ApplicationConfigs>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </ApplicationConfigs>
  )
}

export default App
