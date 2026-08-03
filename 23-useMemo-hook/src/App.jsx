import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const [input, setInput] = useState(0);

  // Create a Dummy Expensive Operation
  const expensiveFunction = (num) => {
    console.log("Inside Expensive Task");

    for (let i = 0; i <= 100000000; i++) {}

    return num * 2;
  };

  let doubleValue = useMemo(() => expensiveFunction(input), [input]);

  return (
    <div>
      <h1>Count is :- {count}</h1>

      <input
        type="number"
        placeholder="Enter any number here ..."
        id="numInput"
        value={input}
        onChange={(val) => setInput(val.target.value)}
      />

      <div id="btnContainer">
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

      <div>
        <h1>Double Value is :- {doubleValue}</h1>
      </div>
    </div>
  );
};

export default App;
