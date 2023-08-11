import React, { useContext } from "react";
import { CircleLoader } from "react-spinners";
import ThemeContext from "../context/ThemeContext";

export const Loader = () => {
  const { lightTheme } = useContext(ThemeContext);
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center">
      <CircleLoader color={lightTheme ? "#00859d" : "921267"} />
    </div>
  );
};
