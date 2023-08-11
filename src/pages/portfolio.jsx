import { Helmet } from "react-helmet";
import { Projects } from "../components";

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Uzor Nwachukwu | Portfolio</title>
      </Helmet>
      <section>
        <Projects />
      </section>
    </>
  );
};

export default Portfolio;
