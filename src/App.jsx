import React, { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Header, Footer, Projects, Hero, About } from "./components/index";
import ThemeContext from "./context/ThemeContext";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
      once: true,
    });
  }, []);

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
