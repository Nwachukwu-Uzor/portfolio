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
      <div className="w-[90%] max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-5">
        <Reveal>
          <p className="leading-10 text-sm lg:text-base font-extralight">
            Uzor Nwachukwu is a Frontend Developer at Providus Bank PLC, one of
            Nigeria’s fastest growing commercial banks. He is passionate about
            building responsive, scalable, testable and maintainable software
            tools and solutions and hopes to become a senior software engineer
            and a thought leader in the software engineering in the financial
            sector in the next 5 years. Prior to joining Providus Bank, Uzor was
            a software engineering fellow at The Bulb Africa, one of Nigeria
            largest talent incubators and was awarded as the 3rd best fellow in
            his cohort. He also holds a bachelor’s degree in mechanical
            engineering from the Federal University of Petroleum resources
            finishing in the top 15% of his class.
          </p>
        </Reveal>
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
    </>
  );
};

export default Pitch;
