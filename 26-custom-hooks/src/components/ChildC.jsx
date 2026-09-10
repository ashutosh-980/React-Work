import React from "react";
import { useThemeMode } from "../context/ThemeContext";

const ChildC = () => {
  const { theme, setTheme } = useThemeMode();

  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="border-2 px-3 py-2 bg-white flex items-center justify-center rounded-xl border-blue-900"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default ChildC;
