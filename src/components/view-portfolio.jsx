import { useContext } from "react";
import { Reveal } from "./reveal";
import { fadeInVariant } from "../variants";
import ThemeContext from "../context/ThemeContext";
import { Link } from "react-router-dom";

export const ViewPortfolio = () => {
  const { lightTheme } = useContext(ThemeContext);
  return (
    <section
      className={`py-10 flex flex-col gap-1 lg:gap-2 justify-center items-center h-[30vh] md:h-[40vh]`}
    >
      <Reveal
        variants={fadeInVariant}
        className="flex items-center justify-center mx-auto"
        width="full"
      >
        <h1
          className={`text-center text-2xl md:text-3xl py-2 px-10 font-bold 
          duration-300 w-fit mx-auto`}
        >
          Portfolio
        </h1>
      </Reveal>
      <Reveal variants={fadeInVariant}>
        <p className="lg:text-lg font-extralight">Want to see my best work?</p>
      </Reveal>
      <Reveal>
        <Link to="/portfolio">
          <button
            className={`px-3 py-2 md:py-3 rounded-md min-w-[200px] ${
              lightTheme ? "bg-[#00859d]" : "bg-[#921267]"
            } text-white duration-300 shadow-md hover:opacity-75`}
          >
            View Portfolio
          </button>
        </Link>
      </Reveal>
    </section>
  );
};
