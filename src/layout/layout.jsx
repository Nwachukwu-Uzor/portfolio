import { useContext } from "react";

import { Outlet } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import { Footer, Header } from "../components";

export const Layout = () => {
  const { lightTheme } = useContext(ThemeContext);

  return (
    <main
      className={`${
        lightTheme ? "bg-[#faf9f6] text-black" : "bg-[#2d2e32] text-white"
      } min-h-screen duration-300 ease-linear flex flex-col`}
    >
      <Header />
      <section className="flex-auto h-min-[35vh]">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};
