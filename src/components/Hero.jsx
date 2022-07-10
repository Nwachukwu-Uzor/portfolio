import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Hero = () => {
  const { lightTheme } = useContext(ThemeContext);
  return (
    <section className="min-h-50vh flex items-center py-10">
      <div className="w-[90%] max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <p
            className={`w-fit px-3 py-2 ${
              lightTheme ? "bg-[#921267]" : "bg-[#00859d]"
            } rounded-md text-white duration-300`}
          >
            Full-Stack Web Developer
          </p>
          <h1 className="text-xl md:text-3xl my-10 font-normal">
            Hello 👏🏼 I am Uzor Nwachukwu
          </h1>
          <p>
            A fullstack software developer 💻 with experience working with HTML,
            CSS, JavaScript, React/Redux, Materia-Ul, NodeJS/Express,
            MongoDB/Mongoose, SQL, C#, Asp.Net, and MVC architecture.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
