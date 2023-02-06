import { Dispatch, SetStateAction } from "react";
import { createContext,useState } from "react";

interface PropsType {
   children ?: React.ReactNode
}
export const DarkModeContext = createContext({
   dark : false,
   handleToggle: () => {}
})
// context 초기 값을 설정해줘야 함.

// 칠드런 타입 넘기고 안에서 조작
export const DarkModeProvider:React.FC<PropsType> = ({children}) => {
   const [dark, setDark] = useState<boolean>(false);
   const handleToggle = ():void => setDark((dark:boolean) => !dark);

   return (
   <DarkModeContext.Provider value={{dark, handleToggle}}>
      {children}
   </DarkModeContext.Provider>
   )
}

