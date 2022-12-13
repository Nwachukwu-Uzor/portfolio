import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

import devhire from "../assets/dev-hire.png";
import tipcalculator from "../assets/tip-calculator-js.png";
import urlshortener from "../assets/url-shortener.jpg";

const Projects = () => {
  const { lightTheme } = useContext(ThemeContext);

  return (
    <section className={`py-10`} id="projects">
      <h1
        className={`text-center text-2xl md:text-3xl py-2 px-10 font-bold border-b-4 ${
          lightTheme ? "border-b-[#005269]" : "border-b-[#921267]"
        } duration-300 w-fit mx-auto`}
        data-aos="fade"
      >
        Projects
      </h1>
      <div className="py-5">
        <div className="w-[90%] max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-4">
          <img
            src={devhire}
            alt="DevHire"
            className="rounded-3xl"
            data-aos="fade-right"
          />
          <div data-aos="fade-left">
            <h2 className="text-xl md:text-2xl font-medium">Dev Hire</h2>
            <p className="leading-loose">
              A web application that allows freelancers to register and get
              jobs. It contains a landing page That displays a list of
              freelancers showing: their avatar, banner images, asking prices
              and display name. <br /> A user can add a developer to his
              favorites by clicking the like button and can view all favorite
              freelancer on a favorites page.
              <br /> The page also has a currency converter that allows a user
              convert the developers asking price to a list of other currencies
            </p>
            <div className="my-4">
              <p>
                <strong>Tools: </strong>ReactJs, Redux Toolkit, React Router,
                axios and SASS.
              </p>
            </div>
            <div className="flex gap-3">
              <span>
                <a
                  href="https://github.com/Nwachukwu-Uzor/dev-hire"
                  target="_blank"
                  className={`flex items-center gap-1 text-md font-normal ${
                    lightTheme
                      ? "text-[#005269] visited:text-[#005269]"
                      : "text-[#921267]  visited:text-[#921267]"
                  } hover:opacity-75 text-xl`}
                >
                  <ion-icon name="logo-github"></ion-icon> Github
                </a>
              </span>
              <span>
                <a
                  href="https://dev-hire-ui.netlify.app/"
                  target="_blank"
                  className={`flex items-center gap-1 text-md font-normal ${
                    lightTheme
                      ? "text-[#005269] visited:text-[#005269]"
                      : "text-[#921267]  visited:text-[#921267]"
                  } hover:opacity-75 text-xl`}
                >
                  <ion-icon name="eye"></ion-icon> Live
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="w-[90%] max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-4">
          <img
            src={tipcalculator}
            alt="DevHire"
            className="rounded-3xl"
            data-aos="fade-right"
          />
          <div data-aos="fade-left">
            <h2 className="text-xl md:text-2xl font-medium">Tip Calculator</h2>
            <p className="leading-loose">
              A web application that calculates the tips a person or group of
              person pays based on their bills, tip percentage and number of
              person splitting the bill. <br /> The project is based on design
              and specification of a frontend mentors challenge.
            </p>
            <div className="my-4">
              <p>
                <strong>Tools: </strong>HTML, CSS and Javascript.
              </p>
            </div>
            <div className="flex gap-3">
              <span>
                <a
                  href="https://github.com/Nwachukwu-Uzor/tip-calculator"
                  target="_blank"
                  className={`flex items-center gap-1 text-md font-normal ${
                    lightTheme
                      ? "text-[#005269] visited:text-[#005269]"
                      : "text-[#921267]  visited:text-[#921267]"
                  } hover:opacity-75 text-xl`}
                >
                  <ion-icon name="logo-github"></ion-icon> Github
                </a>
              </span>
              <span>
                <a
                  href="https://tip-calculator-uzor.netlify.app/"
                  target="_blank"
                  className={`flex items-center gap-1 text-md font-normal ${
                    lightTheme
                      ? "text-[#005269] visited:text-[#005269]"
                      : "text-[#921267]  visited:text-[#921267]"
                  } hover:opacity-75 text-xl`}
                >
                  <ion-icon name="eye"></ion-icon> Live
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="w-[90%] max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-4">
          <img
            src={urlshortener}
            alt="DevHire"
            className="rounded-3xl"
            data-aos="fade-right"
          />
          <div data-aos="fade-left">
            <h2 className="text-xl md:text-2xl font-medium">Url Shortener</h2>
            <p className="leading-loose">
              A web application that can be used to shorten any url in a matter
              of seconds
              <br />
              The project uses the{" "}
              <a
                href="https://app.shrtco.de/"
                target="_blank"
                className={`${
                  lightTheme
                    ? "text-[#005269] visited:text-[#005269] border-b-[#005269]"
                    : "text-[#921267]  visited:text-[#921267] border-b-[#921267]"
                } hover:opacity-75 text-xl inline-block py-0.5 border-b text-normal mx-0.5`}
              >
                shrtcode API
              </a>{" "}
              to shorten the links.
              <br /> The project is based on design and specification of a
              frontend mentors challenge.
            </p>
            <div className="my-4">
              <p>
                <strong>Tools: </strong>ReactJs, Redux Toolkit, React Router,
                axios and Tailwind
              </p>
            </div>
            <div className="flex gap-3">
              <span>
                <a
                  href="https://github.com/Nwachukwu-Uzor/url-shortener"
                  target="_blank"
                  className={`flex items-center gap-1 text-md font-normal ${
                    lightTheme
                      ? "text-[#005269] visited:text-[#005269]"
                      : "text-[#921267]  visited:text-[#921267]"
                  } hover:opacity-75 text-xl`}
                >
                  <ion-icon name="logo-github"></ion-icon> Github
                </a>
              </span>
              <span>
                <a
                  href="https://url-shortener-ten-rosy.vercel.app/"
                  target="_blank"
                  className={`flex items-center gap-1 text-md font-normal ${
                    lightTheme
                      ? "text-[#005269] visited:text-[#005269]"
                      : "text-[#921267]  visited:text-[#921267]"
                  } hover:opacity-75 text-xl`}
                >
                  <ion-icon name="eye"></ion-icon> Live
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
