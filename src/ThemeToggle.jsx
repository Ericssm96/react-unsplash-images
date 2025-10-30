import { useGlobalContext } from "./context"

export const ThemeToggle = () => {

  const {greeting} = useGlobalContext();

  return (
    <div>{greeting}</div>
  )
}