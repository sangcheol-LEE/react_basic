import React,{useState} from 'react'
import Products from './components/Products';


const AppProducts:React.FC = () => {
   const [showProduct, setShowProduct] = useState<boolean>(true)
   return (
      <div>
         {showProduct && <Products />}
         <button onClick={() => setShowProduct((show) => !show)}>Toggle</button>
      </div>
   )
}

export default AppProducts
