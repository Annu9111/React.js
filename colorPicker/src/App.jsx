import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#ff4d6d");
  const copyColor=()=>{
    navigator.clipboard.writeText(color);
    alert("color copied")
  }
  

  return (
    <div className="app">
      <div className="color-card">
        <h1>Color Picker</h1>

        <div className="color-preview" style={{backgroundColor:color}}></div>

        <input type="color"
        value={color}
        onChange={(e)=>setColor(e.target.value)} />
        <div className="color-Info">
          <span>{color}</span>

          <button onClick={copyColor}>Copy</button>
        </div>
      </div>
    </div>
  );
}

export default App;
