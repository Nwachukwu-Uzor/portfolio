import React, { useContext } from "react";
import picture from "../assets/picture.jpg";
import ThemeContext from "../context/ThemeContext";

const About = () => {
  const { lightTheme } = useContext(ThemeContext);

  return (
    <section className={`py-10`} id="about">
      <h1
        className={`text-center text-2xl md:text-3xl py-2 px-10 font-bold border-b-4 ${
          lightTheme ? "border-b-[#005269]" : "border-b-[#921267]"
        } duration-300 w-fit mx-auto`}
        data-aos="fade"
      >
        About Me
      </h1>
      <div className="w-[90%] max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-5">
        <img
          src={picture}
          alt="uzor nwachukwu"
          className="h-[150px] w-[150px] md:h-[350px] md:w-[350px] object-cover rounded-full mx-auto md:mx-0"
          data-aos="fade-right"
        />
        <p className="leading-loose text-md md:text-lg" data-aos="fade-left">
          Full-stack software developer with experience working with HTML, CSS,
          JavaScript, React/Redux, Materia-Ul, NodeJS/Express, MongoDB/Mongoose,
          SQL, C#, Asp.Net, and MVC architecture. My ultimate career goal is to
          become a world-class engineer capable of delivering highly optimized
          software solutions to complex business problems by consistently
          applying and developing my technical and soft skills, while
          relentlessly refining and improving my approach to problem-solving and
          decision making. I am always up for a challenge as I am a firm
          believer that growth can only happen outside my comfort zone.
        </p>
      </div>
    </section>
  );
};

export default About;
