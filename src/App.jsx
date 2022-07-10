import React, { useContext } from "react";
import Header from "./components/Header";
import ThemeContext from "./context/ThemeContext";

const App = () => {
  const { lightTheme } = useContext(ThemeContext);

  console.log(lightTheme);
  return (
    <div
      className={`${
        lightTheme ? "bg-white text-black" : "bg-[#2d2e32] text-white"
      } min-h-screen duration-300 ease-linear`}
    >
      <Header />
    </div>
  );
};

export default App;
