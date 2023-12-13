// import  { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'

const Github = ()=> {
    // const [data,setData]=useState({})
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/dhaval73`)
    //     .then((res)=> res.json())
    //     .then(data=> setData(data))
    //     console.log("read");
    // },[setData])
 const data = useLoaderData()
  return (<>
  <div className="flex flex-row">
    <div className='m-3 p-3 text-center text-3xl text-gray-700 '>
      <img src={data.avatar_url} alt="profile" width={300} />
    </div>
    <div className='m-3 p-3 text-center text-3xl text-gray-700'>Github followers : {data.followers} </div>
  </div>
    
  </>
  )
}
export default Github ;





