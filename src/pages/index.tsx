import {Button} from "@mui/material";
import {useApplicationConfigs} from "@/app/hooks/useApplicationConfigs";
import {THEME} from "../../theme/constants";

export default function Home() {

  const {changeTheme,} = useApplicationConfigs()

  return (
    <article>
      <Button onClick={changeTheme}>Click here</Button>
    </article>
  )
}
