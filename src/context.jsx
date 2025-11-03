import { useState, useEffect, createContext, useContext } from "react";

const AppContext = createContext();

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches;

  console.log(prefersDarkMode)

  return prefersDarkMode;
}

export const AppProvider = ({children}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState("space");

  const toggleDarkTheme = () => {
    const scopedIsDarkTheme = !isDarkTheme;
    setIsDarkTheme(scopedIsDarkTheme);
  }

  useEffect(()=>{
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <AppContext.Provider value={{isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}