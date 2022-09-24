import { default as HomeIndex } from "../components/Home/Index";
import { gsap } from "gsap";
import { useEffect } from "react";

const Home: React.FC = () => {
  useEffect(() => {
    gsap.timeline().from("#home", {
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <>
      <HomeIndex id="home" />
    </>
  );
};

export default Home;
