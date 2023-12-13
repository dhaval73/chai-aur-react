import { useState } from 'react';
import './App.css'

function App() {

  const [number , setNumber]=useState(0)
  const increaseNo = ()=>{
    // console.log(" no is "+number);
    if (number >= 20 ) return ;
    // setNumber(number+1)
    // setNumber(number+1)
    // setNumber(number+1)
    // setNumber(number+1)

    setNumber(prevCounter => prevCounter+1)
    setNumber(prevCounter => prevCounter+1)
    setNumber(prevCounter => prevCounter+1)
    setNumber(prevCounter => prevCounter+1)
  }

  let decreaseNo = ()=>{
    if (number <= 0) return ;
    setNumber(number-1)
  }
  return (
    <>
      <h1>Hello Bhai Log</h1>
      <h3>Apka number hai {number}</h3>
      <button onClick={increaseNo} >{number} ++</button>
      <br/>
      <button onClick={decreaseNo}>{number} --</button>

      
    </>
  )
}

export default App
