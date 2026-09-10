import React, { createContext, useContext, useState } from "react";

const ThemeMode = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeMode.Provider value={{ theme, setTheme }}>
      <div
        className="min-h-screen flex items-center justify-center text-xl"
        style={{
          backgroundColor: theme === "light" ? "beige" : "black",
          color: theme === "light" ? "blue" : "red",
        }}
      >
        {children}
      </div>
    </ThemeMode.Provider>
  );
};

// Creating Custom Hook for ThemeMode
export const useThemeMode = () => {
  const context = useContext(ThemeMode);
  return context;
};
