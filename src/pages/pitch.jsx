import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { Reveal } from "../components/reveal";
import { fadeInVariant } from "../variants";
import { Helmet } from "react-helmet";

const Pitch = () => {
  const { lightTheme } = useContext(ThemeContext);

  return (
    <>
      <Helmet>
        <title>Uzor Nwachukwu | Elevator Pitch</title>
      </Helmet>
      <section className={`py-10`}>
        <Reveal
          variants={fadeInVariant}
          className="flex items-center justify-center mx-auto"
        >
          <h1
            className={`text-center text-2xl md:text-3xl py-2 px-10 font-bold border-b-4 ${
              lightTheme ? "border-b-[#005269]" : "border-b-[#921267]"
            } duration-300 w-fit mx-auto`}
          >
            Personal Elevator Pitch
          </h1>
        </Reveal>
        <div className="w-[90%] max-w-[1240px] mx-auto flex flex-col items-center justify-center gap-2 lg:gap-4 py-5">
          <Reveal>
            <p className="leading-10 text-sm lg:text-base font-extralight text-justify">
              Want to know more about me? Watch my elevator pitch below
              <span className="animate animate-bounce inline-block ml-2">⬇</span>
            </p>
          </Reveal>
          <Reveal width="100%">
            <div className="w-full max-w-[700px] mx-auto">
              <iframe
                className="w-full min-h-[50vh]"
                src="https://www.youtube.com/embed/qBfTDJ4UE8g"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Pitch;
