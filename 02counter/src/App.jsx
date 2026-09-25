import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)
  // let counter = 5;

  const addValue =()=>{
    // console.log(counter);
    // counter = counter+1;
    setCounter(counter+1); 
  }

  const decValue=()=>{
    if(counter >0){
    setCounter(counter-1);
    }
  }  


  return (
    <>
      <h1> React First Project </h1> 
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decValue}>Decrease Value</button>
      <p>footer {counter}</p>

    </>
  )
}

export default App
