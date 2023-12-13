
import { useState } from 'react'
import './App.css'

function App() {
  const [bgcolor, setBgcolor] = useState('orange')

  return (
    <>
      <div className="w-screen h-screen duration-300"
      style={{ backgroundColor: bgcolor }}
      >
        <div className=" fixed bottom-12 inset-x-0 flex flex-wrap justify-center">
          
            <div className="w-fit h-fit px-3 py-2 rounded-2xl bg-white flex flex-wrap gap-x-1 ">
              <button className="w-fit h-fit px-3 py-2 rounded-full outline-none"
              style={{backgroundColor:"red"}}
              onClick={()=>setBgcolor('red')}>red</button>

              <button className="w-fit h-fit px-3 py-2 rounded-full outline-none"
              style={{backgroundColor:"yellow"}}
              onClick={()=>setBgcolor('yellow')}>yellow</button>

              <button className="w-fit h-fit px-3 py-2 rounded-full outline-none"
              style={{backgroundColor:"blue"}}
              onClick={()=>setBgcolor('blue')}>blue</button>
              
            </div>
        </div>
      </div>
    </>
  )
}

export default App
