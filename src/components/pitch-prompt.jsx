import React, { useContext } from "react";
import { Reveal } from "./reveal";
import { fadeInVariant } from "../variants";
import ThemeContext from "../context/ThemeContext";
import { Link } from "react-router-dom";

export const PitchPrompt = () => {
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
          Elevator Pitch
        </h1>
      </Reveal>
      <Reveal variants={fadeInVariant}>
        <p className="lg:text-lg font-extralight">
          Click to see my personal elevator pitch
        </p>
      </Reveal>
      <Reveal>
        <Link to="/personal-elevator-pitch">
          <button
            className={`px-3 py-2 md:py-3 rounded-md min-w-[200px] ${
              lightTheme ? "bg-[#921267]" : "bg-[#00859d]"
            } text-white duration-300 shadow-md hover:opacity-75`}
          >
            View Pitch
          </button>
        </Link>
      </Reveal>
    </section>
  );
};
