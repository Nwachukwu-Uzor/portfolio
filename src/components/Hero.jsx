import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Hero = () => {
  const { lightTheme } = useContext(ThemeContext);
  return (
    <section className="min-h-50vh flex items-center">
      <div className="w-[90%] max-w-[1240px] mx-auto"></div>
    </section>
  );
};

export default Hero;
