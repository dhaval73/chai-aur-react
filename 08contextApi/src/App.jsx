import './App.css'
import Login from './components/login/Login'
import Profile from './components/profile/profile'
import UserContextProvider from './context/UserContextProvider'
function App() {

  return (
    <UserContextProvider>
      <div className="">
        <Login/>
        <Profile/>
      </div>
    </UserContextProvider>
  )
}

export default App
