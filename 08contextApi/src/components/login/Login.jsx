import { useContext, useState } from "react"
import UserContext from "../../context/userContext"

function Login() {
    const [username, setUsername] = useState("")
    const [pass, setPass] = useState("")
    const {setUser} = useContext(UserContext)
    const handelSubmit = (e)=>{
        e.preventDefault
        setUser({username,pass})
    }
  return (
    <div>
        <input type="text"  placeholder="User Name" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        {" "}
        <input type="text" placeholder="Pass" value={pass} onChange={(e)=> setPass(e.target.value)} />
        <button onClick={handelSubmit}>Submit</button>
    </div>
  )
}

export default Login