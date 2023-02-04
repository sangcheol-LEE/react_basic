import { createContext,useState } from "react";

interface ContextType {
   children : React.ReactNode
}


export const DarkModeContext = createContext<null>(null);

export const DarkModeProvider:React.FC<ContextType> = ({children}) => {
   const [darkMode, setDarkMode] = useState<boolean>(false);
   const toggleDarkMode = () => setDarkMode((mode) => !mode);
   return (
      <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
         {children}
      </DarkModeContext.Provider>
   )
}