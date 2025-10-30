import { useState, useEffect, createContext, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {
  const greeting = "hello world";

  return (
    <AppContext value={{greeting}}>
      {children}
    </AppContext>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}