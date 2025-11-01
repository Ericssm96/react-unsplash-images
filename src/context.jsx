import { useState, useEffect, createContext, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    const scopedIsDarkTheme = !isDarkTheme;
    setIsDarkTheme(scopedIsDarkTheme);
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", scopedIsDarkTheme);
  }

  return (
    <AppContext.Provider value={{isDarkTheme, toggleDarkTheme}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}