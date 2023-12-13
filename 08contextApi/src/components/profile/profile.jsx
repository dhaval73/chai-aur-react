import  { useContext} from 'react'
import UserContext from '../../context/userContext'

function Profile() {
const {user} = useContext(UserContext)
console.log(user);
    if(!user) return <>please Login </>

    return <> user Name {user.username}</>
}

export default Profile