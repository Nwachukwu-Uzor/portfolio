import React, { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeContextProvider = ({ children }) => {
  const [lightTheme, setLightTheme] = useState(false);

  const handleThemeChange = () => {
    setLightTheme((light) => !light);
  };

  return (
    <ThemeContext.Provider value={{ lightTheme, setTheme: handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
