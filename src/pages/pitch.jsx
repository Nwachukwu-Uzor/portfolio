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
            <p className="leading-10 text-sm lg:text-base font-extralight text-justify">
              Hello, My name is Uzor Nwachukwu, and I am a Software Engineer at
              Providus Bank, one of Nigeria’s fastest-growing commercial banks.
              <br />
              I bring a unique blend of skills and experiences to the table.
              With a solid engineering foundation from my studies in mechanical
              engineering at the undergraduate level, coupled with a thriving
              career in software engineering, I possess a diverse skill set that
              revolves around problem-solving and analytical thinking.
              <br /> My top three skills include exceptional problem-solving
              abilities, strong analytical acumen, and a passion for continuous
              learning. What sets me apart is my ability to bridge the gap
              between engineering principles and cutting-edge software
              solutions, making me an invaluable asset in various industries.{" "}
              <br /> As your potential employee, I am committed to contributing
              significant value to your organization. By leveraging my
              interdisciplinary expertise, I can streamline processes, optimize
              operations, and devise innovative solutions that will not only
              make your jobs easier but also enhance overall efficiency and
              productivity. <br /> Now, I kindly ask for your support and
              consideration. If you or your company are seeking a dynamic and
              versatile Software Engineer who can make a meaningful impact, I
              would love the opportunity to discuss how my skills align with
              your needs. My diverse background, problem-solving prowess, and
              passion for innovation make me the ideal candidate to drive
              positive change and deliver exceptional results. Thank you for
              your time and attention.
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
