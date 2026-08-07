import React, { createContext, useState } from "react";
import ChildA from "./components/ChildA";

// Step-1 :- Create Context
const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      {/* Step-2:- Wrap All Child inside a Provider [Who wants to be Consumer (To Consume Data) ] 
          And, Step-3:- Pass the Value to a Provider 
      */}
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div
          id="container"
          style={{ backgroundColor: theme === "light" ? "beige" : "black" }}
        >
          <ChildA />
        </div>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
export { ThemeContext };
