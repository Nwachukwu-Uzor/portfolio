import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export const SingleProject = ({
  displayImage,
  projectTitle,
  projectDescription,
  githubUrl,
  liveUrl,
  projectTools,
}) => {
  const { lightTheme } = useContext(ThemeContext);
  return (
    <div className="w-[90%] max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-4">
      <img
        src={displayImage}
        alt={projectTitle}
        className="rounded-3xl"
        data-aos="fade-right"
      />
      <div data-aos="fade-left">
        <h2 className="text-xl md:text-2xl font-medium">{projectTitle}</h2>
        <p className="leading-loose">{projectDescription}</p>
        <div className="my-4">
          <p>
            <strong>Tools: </strong>
            {projectTools}
          </p>
        </div>
        <div className="flex gap-3">
          <span>
            <a
              href={githubUrl}
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
              href={liveUrl}
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
  );
};
