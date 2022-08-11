import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

import resume from "../assets/resume.pdf";

const Hero = () => {
  const { lightTheme } = useContext(ThemeContext);
  return (
    <section className="min-h-[70vh] flex items-center py-10">
      <div className="w-[90%] max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        <div>
          <p
            className={`w-fit px-3 py-2 ${
              lightTheme ? "bg-[#921267]" : "bg-[#00859d]"
            } rounded-md text-white duration-300`}
          >
            Full-Stack Web Developer
          </p>
          <h1 className="text-2xl md:text-3xl my-10 font-normal">
            Hello 👏🏼 I am Uzor Nwachukwu
          </h1>
          <p>
            A fullstack software developer 💻 with experience working with HTML,
            CSS, JavaScript, React/Redux, TailwindCSS, NodeJS/Express,
            MongoDB/Mongoose, SQL, C#, Asp.Net, and MVC architecture.
          </p>
          <div className="my-5 flex items-center justify-between md:justify-start gap-5">
            <button
              className={`px-3 py-2 rounded-md ${
                lightTheme ? "bg-[#00859d]" : "bg-[#921267]"
              } text-white duration-300 shadow-md hover:opacity-75`}
            >
              <a href={resume} download>
                Download Resume
              </a>
            </button>
            <a
              href="https://api.whatsapp.com/send?phone=2348064879196"
              className={`py-2 border-b-2  flex items-center gap-1  ${
                lightTheme
                  ? "border-b-[#192363] text-[#192363] visited:text-[#192363] visited:border-b-[#192363]"
                  : "border-b-[#00859d] text-[#00859d] visited:text-[#00859d] visited:border-b-[#00859d]"
              } duration-300 hover:opacity-75 bg-transparent`}
              target="_blank"
            >
              Let's Chat
              <span className="flex items-center font-bold text-lg">
                <ion-icon name="logo-whatsapp"></ion-icon>
              </span>
            </a>
          </div>
        </div>
        <div className="px-4 py-5">
          <div
            className={`${
              lightTheme ? "bg-[#d6ebef]" : "bg-[#28292d]"
            }  mx-auto h-[250px] w-[250px] md:h-[300px] md:w-[300px] lg:h-[350px] lg:w-[400px] rounded-full relative duration-300 animate-rotate-slow`}
          >
            <div
              className={`text-5xl absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] h-[80px] w-[80px] flex items-center justify-center ${
                lightTheme ? "bg-black text-white" : "bg-white text-black"
              } rounded-full shadow-xl`}
            >
              <div className="flex items-center justify-center">
                <ion-icon name="logo-react"></ion-icon>
              </div>
            </div>
            <div
              className={`text-5xl absolute top-[50%] left-0 translate-x-[-50%] translate-y-[-50%] h-[80px] w-[80px] flex items-center justify-center ${
                lightTheme ? "bg-black text-white" : "bg-white text-black"
              } rounded-full shadow-xl`}
            >
              <div className="flex items-center justify-center">
                <ion-icon name="logo-nodejs"></ion-icon>
              </div>
            </div>
            <div
              className={`text-5xl absolute top-[50%] right-0 translate-x-[50%] translate-y-[-50%] h-[80px] w-[80px] flex items-center justify-center ${
                lightTheme ? "bg-black text-white" : "bg-white text-black"
              } rounded-full shadow-xl`}
            >
              <div className="flex items-center justify-center">
                <ion-icon name="logo-sass"></ion-icon>
              </div>
            </div>
            <div
              className={`text-5xl absolute bottom-0 right-[50%] translate-x-[50%] translate-y-[50%] h-[80px] w-[80px] flex items-center justify-center ${
                lightTheme ? "bg-black text-white" : "bg-white text-black"
              } rounded-full shadow-xl`}
            >
              <div className="flex items-center justify-center">
                <ion-icon name="logo-html5"></ion-icon>
              </div>
            </div>
            <div
              className={`text-3xl absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] h-[80px] w-[80px] flex items-center justify-center ${
                lightTheme ? "bg-black text-white" : "bg-white text-black"
              } rounded-full shadow-xl`}
            >
              <div className="flex items-center justify-center">C#</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
