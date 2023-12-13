import { useCallback, useState,useEffect, useRef } from "react"



function App() {

const [password , setPassword]= useState("")
const [length ,setLength]=useState(8)
const [numberAllowed,setNumberAllowed]=useState(false)
const [charAllowed , setCharAllowed]=useState(false)


const generatePassword = useCallback(()=>{
  let pass =""
  let char
  let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str+="12345678900";
  if(charAllowed) str+="`~!@#$%^&*()_+[]{},./<>?;':\"|\\"

  for (let i = 0; i < length; i++) {
    char=Math.floor(Math.random()* str.length + 1)
    pass+=str.charAt(char)
  }
  setPassword(pass)


},[numberAllowed,charAllowed,length])

useEffect(() => {
  generatePassword()
}, [generatePassword])

const passRef = useRef(null)
const copyBtn = useRef(null)

const copyPasswordOnClipBoard = ()=>{
  window.navigator.clipboard.writeText(password)
  passRef.current.select()

  // passRef.current.setSelectionRange(0,8)
  copyBtn.current.innerHTML="copied!"
  setTimeout(() => {
    passRef.current.setSelectionRange(0,0)
    copyBtn.current.innerHTML="copy"
  }, 1500);
}



  return (
    <>
      <div className=" min-h-screen w-screen bg-black flex justify-center j p-11 gap-2">
        <div className="h-fit w-full max-w-3xl p-5 flex flex-col bg-gray-700 rounded-md min-w">

          <div className=" text-orange-700 text-3xl font-bold capitalize hover:text-orange-600 duration-300 mb-4"> password generator </div>

          <div className="h-fit w-full flex  rounded-md overflow-hidden mb-4">
            <input type="text"
              className="outline-none bg-white text-orange-700 w-full placeholder-orange-700 text-lg px-3"
              placeholder="Password"
              value={password}
              ref={passRef}
              readOnly
            />
            <button
              className=" outline-none border-none  rounded-none bg-orange-700 hover:bg-orange-600  h-fit"
              onClick={copyPasswordOnClipBoard}
              ref={copyBtn}
            >Copy</button>
          </div>
          <div className="h-fit w-full flex  rounded-md overflow-hidden mb-4">
            <input type="range" 
            min={6}
            max={50}
            value={length}
            onChange={(e)=>{setLength(e.target.value)}}
            className=" cursor-pointer mx-4"
            />
            <label htmlFor="" className="mx-4">Length {length}</label>

            <input type="checkbox" 
            id="numberAllowed"
             className="mx-1"
             checked={numberAllowed}
             onClick={()=>{
              setNumberAllowed(prev => !prev)
            }}
              />
            <label htmlFor="numberAllowed" className="mr-4" >Number</label>

            <input type="checkbox" 
            id="charAllowed" 
            className="mx-1"
            checked={charAllowed}
            onChange={()=>{
              setCharAllowed(prev => !prev)
            }}
             />
            <label htmlFor="charAllowed" >Character </label>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
