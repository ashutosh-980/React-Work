import React, { useCallback, useState } from "react";
import ChildComponent from "./components/ChildComponent";

const App = () => {
  const [count, setCount] = useState(0);


  // Used useCallBack() hook to handled un-necessary re-rendered of ChildComponent.jsx file .
  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount+1);
  }, []);

  return (
    <div>
      <div>
        <h1>Count is :- {count}</h1>
      </div>
      <div id="btnContainer">
        <div>
          <button onClick={handleIncrement}>Increment</button>
        </div>
        <br />
        <div>
          <ChildComponent btnName="Click Me" handleClick={handleIncrement} />
        </div>
      </div>
    </div>
  );
};

export default App;
