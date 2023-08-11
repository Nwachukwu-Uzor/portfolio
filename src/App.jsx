import React, { useContext, useEffect } from "react";

import { Header, Footer, Projects, Hero, About } from "./components/index";
import ThemeContext from "./context/ThemeContext";

const App = () => {
  const { lightTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        lightTheme ? "bg-[#faf9f6] text-black" : "bg-[#2d2e32] text-white"
      } min-h-screen duration-300 ease-linear`}
    >
      <Header />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
