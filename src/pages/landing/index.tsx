import { FC } from "react";
import Navbar from "../../components/navbar";
import Companies from "../../components/landing/Companies";
import Explore from "../../components/landing/Explore";
import Hero from "../../components/landing/Hero";
import Register from "../../components/landing/Register";

const Landing: FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Explore />
      <Register />
    </div>
  );
};

export default Landing;
