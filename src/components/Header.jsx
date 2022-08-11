import React, { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const { lightTheme, setTheme } = useContext(ThemeContext);

  const [navOpen, setNavOpen] = useState(false);

  const handleNavOpen = () => {
    setNavOpen((open) => !open);
  };
  return (
    <header className="py-6">
      <nav className="w-[90%] max-w-[1240px] mx-auto md:flex justify-between items-center relative gap-16">
        <div>
          <h1 className="text-xl font-medium flex gap-1 w-fit items-center">
            Uzor <span className="font-light">Nwachukwu</span>
          </h1>
        </div>
        {/* <div
          className={`absolute  left-[5px] right-[20px] md:w-full ${
            lightTheme
              ? "bg-black text-white md:bg-transparent md:text-black"
              : "bg-[#00859d]"
          } md:bg-transparent md:static ${
            navOpen ? "opacity-100 top-[40px]" : "opacity-0 top-[-50vh]"
          } md:opacity-100 duration-500 ease-in md:flex justify-between items-center py-6 md:py-0 shadow-md md:shadow-none rounded-lg md:rounded-none md:mr-24 gap-60`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-6">
            <li>
              <a href="#" className="hover:text-[#63f2a9] duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#63f2a9] duration-300">
                Skills
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#63f2a9] duration-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#63f2a9] duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#63f2a9] duration-300">
                Contacts
              </a>
            </li>
          </ul>
          <ul className="flex items-center justify-center gap-6 md:w-full mt-4 md:mt-0">
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
        </div> */}
        <div className="absolute right-[10px] top-[50%] translate-y-[-50%] flex items-center gap-4">
          <button
            onClick={setTheme}
            className={`text-2xl ${
              lightTheme ? "text-black" : "text-white"
            } duration-300 ease-linear flex items-center`}
          >
            <ion-icon
              name={`${lightTheme ? "moon" : "sunny-outline"}`}
            ></ion-icon>
          </button>

          {/* <button
            onClick={handleNavOpen}
            className={`text-2xl ${
              navOpen ? "opacity-100" : "opacity-85"
            } ease-linear duration-300 md:hidden flex items-center`}
          >
            <ion-icon name={`${navOpen ? "close" : "menu"}`}></ion-icon>
          </button> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
