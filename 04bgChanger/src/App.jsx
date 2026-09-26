import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [color, Setcolor] = useState("olive");

  return (
    <>
      <div className='w-full  h-screen duration-200'
      style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center
        bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-xl
          bg-white px-7 py-4 rounded-xl'>
            <button onClick={()=>Setcolor("red")} 
             className=' outline-none px-4 py-1 rounded-full text-white'
            style={{backgroundColor:"red "}}>Red </button>

            <button onClick={()=>Setcolor("green")}
             className=' outline-none px-4 py-1 rounded-full text-white'
            style={{backgroundColor:"green "}}>Green </button>

            <button  onClick={()=>Setcolor("orange")}
            className=' outline-none px-4 py-1 rounded-full text-white'
            style={{backgroundColor:"orange "}}>Orange </button>

            <button onClick={()=>Setcolor("pink")}
             className=' outline-none px-4 py-1 rounded-full text-white'
            style={{backgroundColor:"pink"}}>Pink </button>

            <button onClick={()=> Setcolor("blue")}
            className=' outline-none px-4 py-1 rounded-full text-white'
            style={{backgroundColor:"blue"}}>Blue </button>

            <button onClick={()=>Setcolor("purple")}
            className=' outline-none px-4 py-1 rounded-full text-white'
            style={{backgroundColor:"purple "}}>Purple </button>
            
            <button onClick={()=>Setcolor("olive")}
            className=' outline-none px-4 py-1 rounded-full text-white'
            style={{backgroundColor:"olive"}}>Olive </button>
          </div>
        </div>
      </div>
     </> 
  )
}

export default App
