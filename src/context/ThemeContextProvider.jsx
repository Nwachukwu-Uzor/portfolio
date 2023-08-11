import React, { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeContextProvider = ({ children }) => {
  const [lightTheme, setLightTheme] = useState(false);

  const handleThemeChange = () => {
    setLightTheme((light) => !light);
  };

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setLightTheme(false);
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      setLightTheme(true);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ lightTheme, setTheme: handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
