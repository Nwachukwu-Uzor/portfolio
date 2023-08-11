import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

const CustomNavLink = ({ path, title }) => {
  const { lightTheme } = useContext(ThemeContext);
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `${
          lightTheme
            ? `${
                isActive
                  ? "text-[#00859d] lg:text-[#921267] font-bold"
                  : "text-black"
              }`
            : `${
                isActive
                  ? "text-[#921267] lg:text-[#00859d] font-bold"
                  : "text-white"
              }`
        } hover:opacity-60 duration-150 whitespace-nowrap`
      }
    >
      {title}
    </NavLink>
  );
};

export const Header = () => {
  const { lightTheme, setTheme } = useContext(ThemeContext);

  const [navOpen, setNavOpen] = useState(false);

  const handleNavOpen = () => {
    setNavOpen((open) => !open);
  };
  return (
    <header className="py-6">
      <nav className="w-[90%] max-w-[1240px] mx-auto md:flex justify-between items-center relative gap-16">
        <NavLink to="/">
          <img
            src="/assets/images/logo.png"
            alt="Uzor Nwachukwu"
            className="h-8 w-8 lg:h-10 lg:w-12 hover:opacity-60 hover:scale-[1.05] duration-200"
          />
        </NavLink>
        <div
          className={`absolute  left-[5px] right-[20px] md:w-full ${
            lightTheme
              ? "bg-black text-white md:bg-transparent md:text-black"
              : "bg-[#00859d]"
          } md:bg-transparent md:static ${
            navOpen ? "opacity-100 top-[40px]" : "opacity-0 top-[-50vh]"
          } md:opacity-100 duration-500 ease-in md:flex justify-between items-center py-6 md:py-0 shadow-md md:shadow-none rounded-lg md:rounded-none md:mr-24 gap-60`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-6">
            <CustomNavLink path="/" title="Home" />
            <CustomNavLink
              path="/personal-elevator-pitch"
              title="Elevator Pitch"
            />
            <CustomNavLink path="/portfolio" title="Portfolio" />
          </ul>
          <ul className="flex items-center justify-center gap-6 md:w-full mt-4 md:mt-0">
            <li>
              <a
                href="https://github.com/Nwachukwu-Uzor"
                className="text-2xl flex items-center gap-1 hover:text-[#63f2a9] duration-300"
                target="_blank"
                rel="noreferrer"
              >
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/uzor-nwachukwu-3467711a8"
                target="_blank"
                rel="noreferrer"
                className="text-2xl flex items-center gap-1 hover:text-[#63f2a9] duration-300"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/nwachukwu_uzor?t=lhl7kEOVZJp61XexA0CzCA&s=09"
                rel="noreferrer"
                target="_blank"
                className="text-2xl flex items-center gap-1 hover:text-[#63f2a9] duration-300"
              >
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
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

          <button
            onClick={handleNavOpen}
            className={`text-2xl ${
              navOpen ? "opacity-100" : "opacity-85"
            } ease-linear duration-300 md:hidden flex items-center`}
          >
            <ion-icon name={`${navOpen ? "close" : "menu"}`}></ion-icon>
          </button>
        </div>
      </nav>
    </header>
  );
};
