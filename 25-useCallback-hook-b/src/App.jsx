import React, { useCallback, useEffect, useRef } from "react";
// import { useMemo } from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const [text, setText] = useState("");

  let previousFunction = useRef(null);

  // Create a Dummy Expensive Operation
  const expensiveFunction = useCallback(() => {
    console.log("Running Expensive Calculation...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  }, [count]);

  useEffect(() => {
    if (previousFunction.current) {
      if (previousFunction.current === expensiveFunction) {
        console.log("Function is not re-created");
      } else {
        console.log("Function got re-created");
      }
    } else {
      previousFunction.current = expensiveFunction;
    }
  }, [expensiveFunction]);

  return (
    <div>
      <h1>Count is :- {count}</h1>

      <input
        type="text"
        placeholder="Enter any text here ..."
        id="numInput"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Expensive Calculation Result :- {expensiveFunction()}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default App;
