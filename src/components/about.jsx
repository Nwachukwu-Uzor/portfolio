import { useContext } from "react";
import picture from "../assets/picture.jpg";
import ThemeContext from "../context/ThemeContext";
import { Reveal } from "./reveal";
import { fadeInVariant } from "../variants";

export const About = () => {
  const { lightTheme } = useContext(ThemeContext);

  return (
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
          Bio
        </h1>
      </Reveal>
      <Reveal
        variants={fadeInVariant}
        className="flex items-center justify-center mx-auto"
      >
        <p
          className={`text-center my-3 font-extralight duration-300 w-fit mx-auto`}
        >
          About me
        </p>
      </Reveal>
      <div className="w-[90%] max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-5">
        <Reveal width="100%">
          <img
            src={picture}
            alt="uzor nwachukwu"
            className="h-[150px] w-[150px] md:h-[350px] md:w-[350px] object-cover rounded-full mx-auto md:mx-0"
          />
        </Reveal>
        <Reveal>
          <p className="leading-loose text-sm lg:text-base font-extralight">
            Uzor Nwachukwu is a Frontend Developer at Providus Bank PLC, one of
            Nigeria’s fastest growing commercial banks. He is passionate about
            building responsive, scalable, testable and maintainable software
            tools and solutions and hopes to become a senior software engineer
            and a thought leader in the software engineering in the financial
            sector in the next 5 years. <br />
            Prior to joining Providus Bank, Uzor was a software engineering
            fellow at The Bulb Africa, one of Nigeria largest talent incubators
            and was awarded as the 3rd best fellow in his cohort.
            <br /> He also holds a bachelor’s degree in mechanical engineering
            from the Federal University of Petroleum resources finishing in the
            top 15% of his class.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
