// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import Profile from './components/Login'
import UserContextProvider from './context/userContextProvider'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <h1>React with Context</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
