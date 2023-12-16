import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Hello from './hello.jsx'

let place = "Google"

function Sayhii() {
  return(
    <>
    HIII
    </>
  )
}

// let reactElement = {
//   type : 'a',
//   props : {
//       href : "https://google.com",
//       target : '_blank',
//   },
//   children : "Go to visite google"
// }

const anotherElement = (
  <a href='https://google.com' target='_blank'>Go to visite {place}</a>
)


const reactElement = React.createElement(
  'a',{
    href : 'https://google.com',
    target : '_blank'
  },
  `Go to visite `,
  place
  
)


ReactDOM.createRoot(document.getElementById('root')).render(
  // Sayhii()
  // <Sayhii />
  reactElement
  // anotherElement

)
