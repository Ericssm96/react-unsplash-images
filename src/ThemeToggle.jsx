import { useGlobalContext } from "./context";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export const ThemeToggle = () => {

  const {isDarkTheme, toggleDarkTheme} = useGlobalContext();

  return (
    <section className="toggle-container">
      <button className="dark-toggle">
        {isDarkTheme && 
        <BsFillMoonFill className="toggle-icon" /> || 
        <BsFillSunFill className="toggle-icon" />}
      </button>
    </section>
  )
}