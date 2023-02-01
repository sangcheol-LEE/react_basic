import React,{useState,useEffect,useCallback} from 'react'
import productData from "../../data/products.json"
import saleProduct from "../../data/sale_products.json";
import { ProductType } from '../../types/User';



const Products= () => {
   // const [count, setCount] = useState<number>(0);
   const [products, setProducts] = useState<ProductType[]>([])
   const [checked, setChecked] = useState<boolean>(false);


   const getDatas = useCallback(():void => {
      const product = checked ? saleProduct : productData
      setProducts(product)
   },[checked])

   const handleChange = () => {setChecked((prev) => !prev)}

   useEffect(() => {
      getDatas()
   },[getDatas])


   console.log("check",checked)
   return (
      <>
         <input type="checkbox" id="checkbox" checked={checked} onChange={handleChange}/>
         <label htmlFor="checkbox">Show only Hot sale</label>
         <ul>
            {products.map((item:ProductType) => (
               <li key={item.id}>
                  <article>
                     <h3>{item.name}</h3>
                     <p>{item.price}</p>
                  </article>
               </li>
            ))}
         </ul>
         {/* <button onClick={() => setCount((prev) => prev + 1)}>{count}</button> */}
      </>
   )
}

export default Products
