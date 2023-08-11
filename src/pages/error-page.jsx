import React, { useContext } from "react";
import { Reveal } from "../components";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import { fadeInVariant } from "../variants";

const ErrorPage = () => {
  const { lightTheme } = useContext(ThemeContext);

  return (
    <section className="w-[90%] max-w-[1240px] mx-auto flex min-h-screen flex-col items-center justify-center gap-1">
      <Reveal
        variants={fadeInVariant}
        className="flex items-center justify-center mx-auto"
      >
        <h1
          className={`text-center text-2xl md:text-3xl py-2 px-10 font-bold  duration-300 w-fit mx-auto`}
        >
          Page Not Found
        </h1>
      </Reveal>
      <Reveal variants={fadeInVariant}>
        <img src="/assets/images/404-animation.png" alt="Page Not Found" />
      </Reveal>
      <Reveal>
        <p className="lg:text-lg font-extralight mb-6">
          We could not find the page you requested for, please click the button
          below to return to the home page.
        </p>
      </Reveal>
      <Reveal>
        <Link to="/">
          <button
            className={`px-3 py-2 md:py-3 rounded-md min-w-[200px] ${
              lightTheme ? "bg-[#921267]" : "bg-[#00859d]"
            } text-white duration-300 shadow-md hover:opacity-75`}
          >
            Back to Home
          </button>
        </Link>
      </Reveal>
    </section>
  );
};

export default ErrorPage;
