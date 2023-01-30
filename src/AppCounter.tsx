import React,{useState} from 'react'
import Counter from './components/Counter'
import "./App.css";

const AppCounter:React.FC = () => {
   const [total, setTotal] = useState(0)
   const prev:string = total >= 10 ? "🔥": "❄️";
   return (
      <div className="box">
         <div className="title">{`total Count ${total}${prev}`}</div>
         <Counter setTotal={setTotal} />
         <Counter setTotal={setTotal}/>
      </div>
   )
}

export default AppCounter
