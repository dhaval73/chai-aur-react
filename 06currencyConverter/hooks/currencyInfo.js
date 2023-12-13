import { useEffect } from "react"
import { useState } from "react"


const useCurrencyInfo = (curr = "inr")=>{
    const [data,setData]=useState({})
    const [currency , setCurrency]=useState(curr)

    useEffect(()=>{
        console.log("run");
        try {
            fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res)=>res.json())
            .then((res)=>setData(res[currency]))
            
        } catch (e) {
            console.log("Api call error");
        }
    },[currency])
    return [data,(c)=>setCurrency(c)]
}

export default useCurrencyInfo