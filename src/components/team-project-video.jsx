import { useContext } from "react";
import picture from "../assets/picture.jpg";
import ThemeContext from "../context/ThemeContext";
import { Reveal } from "./reveal";
import { fadeInVariant } from "../variants";

export const TeamProjectVideo = () => {
  const { lightTheme } = useContext(ThemeContext);
  return (
    <section>
      <div className="w-[90%] max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-5">
        <div>
          <Reveal variants={fadeInVariant} width="100%">
            <h1
              className={`text-center md:text-left text-2xl md:text-3xl py-2 font-bold duration-300`}
            >
              ALX Team Project
            </h1>
          </Reveal>
          <Reveal variants={fadeInVariant} width="100%">
            <h1
              className={`text-center md:text-left text-xl md:text-2xl py-2 font-bold duration-300`}
            >
              Educate -{" "}
              <i className="text-base font-light">
                Education for Capacity
              </i>
            </h1>
          </Reveal>
          <Reveal>
            <p className="leading-loose font-light">
              Educate is skill acquisition platform to offer interactive
              technical skill courses and can provide video tutorials, quizzes
              and virtual simulations to teach skills such as coding, graphic
              design, and many more to secondary school students.
            </p>
          </Reveal>
          <Reveal>
            <button
              className={`px-3 py-2 my-2 md:my-4 rounded-md ${
                lightTheme ? "bg-[#00859d]" : "bg-[#921267]"
              } text-white duration-300 shadow-md hover:opacity-75`}
            >
              <a href="/assets/pdf/educate-slide-deck.pdf" download>
                Download Slide Deck
              </a>
            </button>
          </Reveal>
        </div>
        <Reveal width="100%">
          <iframe
            className="w-full min-h-[50vh]"
            src="https://www.youtube.com/embed/XhoTnkuD1vQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Reveal>
      </div>
    </section>
  );
};
