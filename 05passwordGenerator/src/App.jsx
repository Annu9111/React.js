import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App() {
  const[length,setLength] = useState(8)
  const[numAllowed,setNumAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  //use ref hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(()=>{
     let pass = ""
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

     if(numAllowed) str +="123456789"
     if(charAllowed) str+="!@#$%^&*()?_{}[] ~"

     for(let i=1;i<=length ; i++){
      let char = Math.floor(Math.random()*str.length +1 )
      pass += str.charAt(char);
     }

     setPassword(pass)
      
  },[length,numAllowed,charAllowed,setPassword])

    const copyPassToClip = useCallback(()=>{
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)
    },[password])

  useEffect(()=>{
    // passwordGenerator();
  },[length,numAllowed,charAllowed,passwordGenerator])
  return (
    <>
    <h1 className='text-4xl text-center py-5 text-white'>Password Generator🌟</h1>

    <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-black-500 bg-gray-100'> 
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type=" "
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly 
        ref={passwordRef} />

        <button onClick={copyPassToClip}
        class="bg-blue-500 hover:bg-blue-600 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 active:bg-blue-700 ... rounded-full py-3 px-4">
        copy
      </button> 

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}} />
          <label>Length :{length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numAllowed}
          id='numberInput'
          onChange={()=>{setNumAllowed((prev)=>!prev);
          }} />
          <label>Add numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed}
          id='characterInput'
          onChange={()=>{setCharAllowed((prev)=>!prev);
          }} />
          <label>Add char</label>
        </div>


      </div>
    </div>
    </>
  )
}
export default App
