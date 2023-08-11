import { Helmet } from "react-helmet";
import { About, Hero, PitchPrompt, ViewPortfolio } from "../components";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Uzor Nwachukwu | Home</title>
      </Helmet>
      <section>
        <Hero />
        <About />
        <ViewPortfolio />
        <PitchPrompt />
      </section>
    </>
  );
};

export default Home;
