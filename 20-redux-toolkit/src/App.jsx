import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./features/counterSlice";

const App = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.value);

  const [num, setNum] = useState(0);

  return (
    <div>
      <h1>{count}</h1>

      {/* Increment Button */}
      <button
        onClick={() => {
          dispatch(increment(0));
        }}
      >
        Increment
      </button>

      {/* Decrement Button */}
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>

      {/* Input Button To Select Amount*/}
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />

      {/* Increment Button To Increase By Input's Amount*/}
      <button
        onClick={() => {
          dispatch(incrementByAmount(Number(num)));
        }}
      >
        Increment By Amount
      </button>
    </div>
  );
};

export default App;
