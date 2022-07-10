import { createContext } from "react";

const ThemeContext = createContext({ lightTheme: false, setTheme: () => {} });

export default ThemeContext;
