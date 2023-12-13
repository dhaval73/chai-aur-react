import { useParams } from "react-router-dom"


function User() {
  const {id} = useParams()

  return (
    <div className=' text-center text-3xl min-h-screen flex justify-center'>
    <div className=" bg-gray-100 w-screen h-fit m-4 p-4 ">
      User : {id ? id :""}
    </div>
    </div>
  )
}

export default User