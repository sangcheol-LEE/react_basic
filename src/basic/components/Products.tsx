import React,{useState,useEffect,useCallback} from 'react'
import productData from "../../data/products.json"
import saleProduct from "../../data/sale_products.json";
import { ProductType } from '../../types/User';




const Products= () => {
   // const [count, setCount] = useState<number>(0);
   const [isLoading, setIsLoading] = useState<string>("Loading")
   const [products, setProducts] = useState<ProductType[]>([])
   const [checked, setChecked] = useState<boolean>(false);


   // const getDatas = useCallback(():void => {
   //    const product = checked ? saleProduct : productData
   //    setProducts(product)
   // },[checked])

   const fetchUserData = () => {
      const response = fetch("./data/products.JSON")
      .then((res) => {
         return res.json()
      }).then((res) => {
         setIsLoading("Success")
         return setProducts(res)
      }).catch((e) => {
         console.log(e)
         setIsLoading("Error")
      })
      return response
   }

   console.log(products)
   const handleChange = () => {setChecked((prev) => !prev)}

   // useEffect(() => {
   //    getDatas()
   // },[getDatas])

   useEffect(() => {
      setIsLoading("Loading")
      fetchUserData()
   },[])

   console.log("check",checked)
   if(isLoading === "Loading") return <p>Loading...</p>
   if(isLoading === "Error") return <p>Error...</p>
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
