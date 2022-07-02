import { FC } from "react";
// Components
import Navbar from "../../components/navbar";
import Companies from "../../components/landing/Companies";
import Explore from "../../components/landing/Explore";
import Hero from "../../components/landing/Hero";
import Register from "../../components/landing/Register";
import Offers from "../../components/landing/Offers";

const Landing: FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Explore />
      <Register />
      <Offers />
    </div>
  );
};

export default Landing;
