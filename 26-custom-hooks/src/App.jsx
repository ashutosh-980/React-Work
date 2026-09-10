import React from "react";
import ChildA from "./components/ChildA";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <ChildA />
    </ThemeProvider>
  );
};

export default App;
