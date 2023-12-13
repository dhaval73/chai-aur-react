import { useEffect, useState } from "react";
import { InputBox } from "./component";
import useCurrencyInfo from "../hooks/currencyInfo";


function App() {
    const [amount , setAmount]=useState(null)
    const [calculatedAmount , setCalculatedAmount]=useState(0)
    const [from ,setFrom]=useState("inr")
    const [to ,setTo]=useState("usd")
    // const [currencyInfo,setCurrencyInfo]=useState(useCurrencyInfo(from))
    const [currencyInfo,setCurrency]=useCurrencyInfo(from)
    const options = Object.keys(currencyInfo)


    const swap = ()=>{
        setFrom(to)
        setTo(from)
        setAmount(calculatedAmount)
        setCalculatedAmount(amount)
       }
    
    const convert = ()=>{
        console.log(currencyInfo[to]);
        console.log(to);
        setCalculatedAmount( amount * currencyInfo[to])
    }
   
    useEffect(()=>{
     setCurrency(from)
     console.log("changed");
     setCalculatedAmount(null)
    },[from,setCurrency])

  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
            backgroundImage:`url('https://images.pexels.com/photos/4004374/pexels-photo-4004374.jpeg?auto=compress&cs=tinysrgb&w=600')`
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              onAmountChange={(amount)=>setAmount(amount)}
                              selectedCurency={from}
                              onCurrencyChange={(currency)=>setFrom(currency)}
                              currencyOption={options}
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={calculatedAmount}
                              selectedCurency={to}
                              onCurrencyChange={(currency)=>setTo(currency)}
                              currencyOption={options}
                              amountDiseble
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" 
                      onClick={convert}
                      >
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default App
