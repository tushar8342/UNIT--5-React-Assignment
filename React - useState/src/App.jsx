

import './App.css';

import {useState} from "react"

function App() {
  const [counter,setCounter] = useState(0)

  const hendelChange = (value)=>{

    if(value === "mult"){
      setCounter(counter*2)
      return;
    }
    if(value === -1 && counter === 0){
      return;
    }
    setCounter( counter + value)
  }
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <div id='btn'>
        <button onClick={()=>hendelChange(1)}>Add By 1</button>

        <button onClick={()=>hendelChange(-1)}>Sub by 1</button>
        
        <button onClick={()=>hendelChange("mult")}>Double</button>
      </div>
    </div>
  );
}
export default App;
