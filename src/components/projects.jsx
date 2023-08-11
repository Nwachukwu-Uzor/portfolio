import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { SingleProject } from "./singleProject";

import devhire from "../assets/dev-hire.png";
import tipcalculator from "../assets/tip-calculator-js.png";
import urlshortener from "../assets/url-shortener.jpg";
import englishDictionaryLight from "../assets/english-dictionary-light.png";
import englishDictionaryDark from "../assets/english-dictionary-dark.png";
import { Reveal } from "./reveal";
import { fadeInVariant } from "../variants";
import { TeamProjectVideo } from "./team-project-video";

export const Projects = () => {
  const { lightTheme } = useContext(ThemeContext);

  return (
    <section className={`py-10`} id="projects">
      <Reveal
        variants={fadeInVariant}
        className="flex items-center justify-center mx-auto"
      >
        <h1
          className={`text-center text-2xl md:text-3xl py-2 px-10 font-bold border-b-4 ${
            lightTheme ? "border-b-[#005269]" : "border-b-[#921267]"
          } duration-300 w-fit mx-auto`}
        >
          Portfolio
        </h1>
      </Reveal>
      <TeamProjectVideo />
      <div className="py-5">
        <SingleProject
          displayImage={devhire}
          projectTitle={`Dev Hire`}
          projectDescription={[
            "A web application that allows freelancers to register and get jobs. It contains a landing page That displays a list of freelancers showing: their avatar, banner images, asking prices and display name.",
            <br key="3" />,
            "A user can add a developer to his favorites by clicking the like button and can view all favorite freelancer on a favorites page.",
            <br key="4" />,
            "The page also has a currency converter that allows a user convert the developers asking price to a list of other currencies",
          ]}
          projectTools={`ReactJs, Redux Toolkit, React Router,
          axios and SASS.`}
          githubUrl={`https://github.com/Nwachukwu-Uzor/dev-hire`}
          liveUrl={`https://dev-hire-ui.netlify.app/`}
        />
        <SingleProject
          displayImage={
            lightTheme ? englishDictionaryDark : englishDictionaryLight
          }
          projectTitle={`English Dictionary`}
          projectDescription={[
            "A web based english dictionary built with the ",
            <a
              href="https://dictionaryapi.dev/"
              target="_blank"
              rel="noreferrer"
              key="6"
              className={`${
                lightTheme
                  ? "text-[#005269] visited:text-[#005269] border-b-[#005269]"
                  : "text-[#921267]  visited:text-[#921267] border-b-[#921267]"
              } hover:opacity-75 text-xl inline-block py-0.5 border-b text-normal mx-0.5`}
            >
              Free Dictionary API
            </a>,
            <br key="7" />,
            "A user input a word an immediately get a list of it's various meaning",
          ]}
          projectTools={`ReactJs, TailwindCSS, context API, axios`}
          githubUrl={`https://github.com/Nwachukwu-Uzor/english-dictionary-react`}
          liveUrl={`https://english-dictionary-react.vercel.app/`}
        />
        <SingleProject
          displayImage={tipcalculator}
          projectTitle={`Tip Calculator`}
          projectDescription={[
            "A web application that calculates the tips a person or group of person pays based on their bills, tip percentage and number of person and specification of a frontend mentors challenge.",
          ]}
          projectTools={`HTML, CSS and Javascript.`}
          githubUrl={`https://github.com/Nwachukwu-Uzor/tip-calculator`}
          liveUrl={`https://english-dictionary-react.vercel.app/`}
        />
        <SingleProject
          displayImage={urlshortener}
          projectTitle={`Url Shortener`}
          projectDescription={[
            "A web application that can be used to shorten any url in a matter of seconds",
            <br key="8" />,
            "The project uses the",
            <a
              href="https://app.shrtco.de/"
              target="_blank"
              rel="noreferrer"
              key="9"
              className={`${
                lightTheme
                  ? "text-[#005269] visited:text-[#005269] border-b-[#005269]"
                  : "text-[#921267]  visited:text-[#921267] border-b-[#921267]"
              } hover:opacity-75 text-xl inline-block py-0.5 border-b text-normal mx-0.5`}
            >
              shrtcode API
            </a>,
            " to shorten the links.",
            <br key="10" />,
            "The project is based on design and specification of a frontend mentors challenge.",
          ]}
          projectTools={`ReactJs,
          axios and Tailwind`}
          githubUrl={`https://github.com/Nwachukwu-Uzor/url-shortener`}
          liveUrl={`https://url-shortener-ten-rosy.vercel.app/`}
        />
      </div>
    </section>
  );
};
