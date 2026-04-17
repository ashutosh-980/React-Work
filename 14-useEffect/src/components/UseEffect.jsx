import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [num, setNum] = useState(0);

  const [num2, setNum2] = useState(1000);

  // Case-1 :- Without []   NOT USED
  // useEffect(() => {
  //   return console.log("Runs on every render")
  // });

  // Case-2 :- With []        :- It still run without throwing any error
  // useEffect(() => {
  //   return console.log("Runs only once");
  // }, []);

  // Case-3 :- With [val]
  useEffect(() => {
    return console.log("Runs when First Number Changes");
  }, [num]);

  useEffect(() => {
    return console.log("Runs when Second Number Changes");
  }, [num2]);

  return (
    <>
      <h1>Number is {num}</h1>
      <h1>Second Number is {num2}</h1>
      <button onClick={() => setNum(num + 1)}>Increment</button>
      <button onClick={() => setNum2(num2 - 1)}>Decrement</button>
    </>
  );
};

export default UseEffect;
