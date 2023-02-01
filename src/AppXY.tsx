import React,{useState} from 'react'
import "./AppXY.css";

const AppXY:React.FC = () => {
   const [mV, setMv] = useState<number[]>([])
   document.addEventListener("mousemove", (e) => {
      setMv([e?.x, e?.y])
   })

   console.log(mV)
   return (
      <div className="container">
         <div className="pointer"></div>
      </div>
   )
}

export default AppXY
