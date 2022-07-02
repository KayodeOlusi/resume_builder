import { FC } from "react";
import Navbar from "../../components/navbar";
import Companies from "../../components/signup/Companies";
import Hero from "../../components/signup/Hero";

const Landing: FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
    </div>
  );
};

export default Landing;
