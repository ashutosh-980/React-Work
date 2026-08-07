import React, { useContext } from "react";
import { ThemeContext } from "../App";

const ChildC = () => {
  // Step-4:- Consume the Value/Data
  const { theme, setTheme } = useContext(ThemeContext);

  // Fuction To Toggle Theme Button
  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div>
      <button onClick={handleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default ChildC;
