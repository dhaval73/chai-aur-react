import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, RouterProvider, createBrowserRouter , createRoutesFromElements} from 'react-router-dom'
import Layout from './component/Layout/Layout.jsx'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import Contact from './component/Contect/Contect.jsx'
import User from './component/User/User.jsx'
import Github from './component/Github/Github.jsx'
import gitgubInfoLoader from './component/Github/gitgubInfoLoader.js'



// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       }
//       ,
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contect",
//         element:<Contact />
//       },
//       {
//         path:"user/:id",
//         element:<User />

//       },
//       {
//         path:"github",
//         element:<Github />,
//         loader:gitgubInfoLoader
//       }
//     ]
//   }
// ]);

const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contect' element={<Contact/>}/>
    <Route path='github' element={<Github/>} loader={gitgubInfoLoader} />
    <Route path='user/:id' element={<User/>}/>
  </Route>
))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
