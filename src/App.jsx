import React, { useContext } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ThemeContext from "./context/ThemeContext";

const App = () => {
  const { lightTheme } = useContext(ThemeContext);

  console.log(lightTheme);
  return (
    <div
      className={`${
        lightTheme ? "bg-[#faf9f6] text-black" : "bg-[#2d2e32] text-white"
      } min-h-screen duration-300 ease-linear`}
    >
      <Header />
      <Hero />
    </div>
  );
};

export default App;
