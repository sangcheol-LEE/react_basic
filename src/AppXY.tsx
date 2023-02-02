import React,{useState} from 'react'
import { PointerEvent } from 'react';
import AppMentor from './AppMentor';
import "./AppXY.css";
import { Dots } from './types/Pointer';
const AppXY = () => {
   // const [mV, setMv] = useState<number[]>([])
   // const [x, setX] = useState<number>(0);
   // const [y, setY] = useState<number>(0);
   const [position, setPosition] = useState<Dots>({
      x : 0,
      y : 0
   })

   console.log(position)
   return (
      <div className="container" onPointerMove={(e  :PointerEvent<HTMLDivElement>):void => {
         // setX(Math.floor(e.clientX))
         // setY(Math.floor(e.clientY))
         // setMv([e.clientX, e.clientY])
         setPosition({
            ...position,
            x : e.clientX,
            y : e.clientY
         })
      }}>
         <div className="pointer"
            // style={{transform: `translate(${x}px, ${y}px)`}}
            style={{transform: `translate(${position.x}px, ${position.y}px)`}}
         ></div>

         <AppMentor />
      </div>
   )
}

export default AppXY
