import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Footer = () => {
  const { lightTheme } = useContext(ThemeContext);
  return (
    <footer
      className={`py-20 ${
        lightTheme ? "bg-[#005269]" : "bg-[black]"
      } text-white`}
    >
      <div className="w-[90%] max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 py-4">
        <div className="md:col-span-2">
          <h2 className={`mb-3 text-xl md:text-3xl font-medium`}>About Me</h2>
          <p>
            I am a fullstack software developer with experience working with
            HTML, CSS, JavaScript, React/Redux, Materia-Ul, NodeJS/Express,
            MongoDB/Mongoose, SQL, C#, Asp.Net, and MVC architecture.
          </p>
          <ul className="flex items-center  gap-6 md:w-full mt-2 md:mt-4">
            <li>
              <a
                href="https://github.com/Nwachukwu-Uzor"
                className="text-2xl flex items-center gap-1 hover:text-[#63f2a9] duration-300"
                target="_blank"
              >
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/uzor-nwachukwu-3467711a8"
                target="_blank"
                className="text-2xl flex items-center gap-1 hover:text-[#63f2a9] duration-300"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/nwachukwu_uzor?t=lhl7kEOVZJp61XexA0CzCA&s=09"
                target="_blank"
                className="text-2xl flex items-center gap-1 hover:text-[#63f2a9] duration-300"
              >
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-md flex items-center gap-1 hover:text-[#63f2a9] duration-300">
            <ion-icon name="location"></ion-icon> Lagos, Nigeria
          </div>
          <div className="text-md flex items-center gap-1 hover:text-[#63f2a9] duration-300 my-3">
            <ion-icon name="call"></ion-icon> +2348064879196
          </div>
          <div className="text-md flex items-center gap-1 hover:text-[#63f2a9] duration-300">
            <ion-icon name="mail-unread"></ion-icon> uzor1997@gmail.com
          </div>
        </div>
        <div>
          <p>&copy; Uzor Nwachukwu {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
