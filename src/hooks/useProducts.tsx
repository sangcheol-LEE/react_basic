import React,{useState,useEffect} from 'react'



const useProducts = (url : any) => {
   const [isLoading, setIsLoading] = useState(false);
   const [isProducts, setIsProducts] = useState([])
   const [isError, setIsError] = useState<string>("");


   useEffect(() => {
      setIsLoading(true);
      setIsError("");
      fetch(url)
      .then((res) => res.json())
      .then((res) => setIsProducts(res))
      .catch((e) => setIsError("에러가 발생했습니다"))
      .finally(() => setIsLoading(false))
   },[url])

   return [isLoading, isProducts, isError]
}

export default useProducts
