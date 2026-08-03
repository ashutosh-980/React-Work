import React, { useRef, useState } from "react";

const App = () => {
  const [timer, setTimer] = useState(0);

  // Created the Reference
  let timerRef = useRef(null);

  // Start Timer Function
  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  // Stop Timer Function
  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  // Reset Timer Function
  const resetTimer = () => {
    stopTimer();
    setTimer(0);
  };

  return (
    <div>
      <h1>Stopwatch: {timer} seconds</h1>
      <br />
      <div id="btnContainer">
        <button onClick={startTimer}>Start</button>
        <br />
        <button onClick={stopTimer}>Stop</button>
        <br />
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default App;
