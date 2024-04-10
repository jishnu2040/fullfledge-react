import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [isPressed,setIsPressed] = useState(false)

  const addValue = () => {
    setCount(count + 1);
  };

  const removeValue = () => {
    setCount(count - 1)
  }

  const delayAddValue = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 8000);
  }

  const toggleState = () => {
    setIsPressed(!isPressed)
  }


  return (
    <div>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">React Course</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
      <button onClick={delayAddValue}>add value with delay</button>
      <h4>Button pressed: {isPressed ? "ON" : "OFF"}</h4>
      <button onClick={toggleState}>change</button>
    </div>
  );
}

export default App;
