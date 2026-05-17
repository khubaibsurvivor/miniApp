import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserContextProvider from './assets/context/contextprovider'
import Login from './assets/component/login'
import Profile from './assets/component/Profile'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <UserContextProvider>
     <Login />  
     <Profile/>
    </UserContextProvider>
    
   
   </> 
  )
}

export default App
