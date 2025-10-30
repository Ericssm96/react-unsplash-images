import { useState, useEffect, createContext, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {
  const greeting = "hello world";

  return (
    <AppContext.Provider value={{greeting}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}