import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  // By using this type of Variable, there is a problem in this it cannot able to persist their value on every Re-Rendering ----> So, To handle this problem we can create this Variable using useRef() Hook .
  // let val = 1;

  // First Use Case of useRef() :- Declaring Varible 'val' using 'useRef()' hook
  let val = useRef(0);

  // Second Use Case of useRef() [Also, it is Primary Use Case of Use Ref] :- To Access/Change the DOM Elements Directly

  // Step-1:- Create a Reference using useRef() [for 2nd Use Case of useRef() hook]
  let btnRef = useRef();

  const handleIncrement = () => {
    // For Updating Simple Variable
    // val = val + 1;
    // console.log(`Value of val is :- ${val}`);

    // For Updating Varaible created by using useRef() hook
    val.current = val.current + 1;
    console.log(`Value of val is :- ${val.current}`);

    setCount(count + 1);
  };


  // Change BackgroundColor and Text Color of Selected Increment Button Fuction 
  const changeBackgroundColor = () => {
    btnRef.current.style.backgroundColor = "red";
    btnRef.current.style.color = "white";
  };


  // To understand Re-Rendering Process of useState() hook
  useEffect(() => {
    console.log("Runs on Every Render");
  });

  return (
    <div>
      <h1>The Count is :- {count}</h1>
      <button
        // Step-2:- Link the Reference to an Element that can be Access useing 'ref={}' keyword
        ref={btnRef}
        onClick={handleIncrement}
      >
        Increment
      </button>

      <br />

      <button onClick={changeBackgroundColor}>
        Change Background Color of 1st Button
      </button>
    </div>
  );
};

export default App;
