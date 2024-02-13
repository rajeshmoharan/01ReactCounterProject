import "./App.css";
import { useState } from "react";

function App() {
  
  let [counter,setCounter] = useState(0);

  // function for addvalue
  const addvalue = () => {
      if(counter>=0 && counter < 20){
        counter = counter + 1;
        setCounter (counter)
      }
  }

  // function for remove value
  const removeValue = () => {
    if (counter > 0){
      setCounter(counter-1);
    }
  }
  
  return (
    <>
      <h1>Welcome Counter App </h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addvalue}>Add+1</button>
      <button onClick={removeValue}>Dec-1</button>
    </>
  );
}

export default App;
