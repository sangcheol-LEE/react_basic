import React,{useState}from 'react'
import "../App.css"
import {CounterFunc} from "../types/User";

const Counter:React.FC<CounterFunc> = ({total,setTotal}) => {
   const [count, setCount] = useState<number>(0)

   const handleCount= () => {
      setTotal(prev => prev + 1)
      setCount((count) => count + 1)
   }
   return (
      <div className="counter">
         <span className="number">{count}<span className="total">/{total}</span></span>
         <button onClick={handleCount} className="button">Add +</button>
      </div>
   )
}

export default Counter
