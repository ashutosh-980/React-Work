import React, { useState } from "react";

const App = () => {

  // Create useState to handle count
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="border-2 m-4 p-4 w-70 rounded-3xl bg-gray-600">

        {/* Counter */}
        <h1 className="text-9xl flex justify-center items-center font-bold w-60 h-60 border-2 border-none rounded-full bg-black text-white">
          {count}
        </h1>

        {/* Buttons to increase, decrease, +5 & -5 */}
        <div className="flex flex-start justify-between mt-2">
          <button
            onClick={() => setCount(count + 1)}   //Logic to increment
            className="w-12 h-12 border-2 border-none p-2 font-bold rounded-full bg-gray-700 cursor-pointer text-white text-2xl flex justify-center items-center"
          >
            +
          </button>
          <button
            onClick={() => setCount(count - 1)}  //Logic to decrement
            className="w-12 h-12 border-2 border-none p-2 font-bold rounded-full bg-gray-700 cursor-pointer text-white text-3xl flex justify-center items-center"
          >
            -
          </button>

          <button
            onClick={() => setCount(count + 5)}   //Logic to increment by 5
            className="w-12 h-12 border-2 border-none p-4 font-bold rounded-full bg-gray-700 cursor-pointer text-white text-3xl flex justify-center items-center"
          >
            +5
          </button>

          <button
            onClick={() => setCount(count - 5)}   ////Logic to decrement by 5
            className="w-12 h-12 border-2 border-none p-4 font-bold rounded-full bg-gray-700 cursor-pointer text-white text-3xl flex justify-center items-center"
          >
            -5
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
