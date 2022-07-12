import { FC } from "react";
// Components
import Navbar from "../../components/navbar";
import Companies from "../../components/landing/Companies";
import Explore from "../../components/landing/Explore";
import Hero from "../../components/landing/Hero";
import Register from "../../components/landing/Register";
import Offers from "../../components/landing/Offers";
import Testimonials from "../../components/landing/Testimonials";

const Landing: FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Explore />
      <Register />
      <Offers />
      <Testimonials />
    </div>
  );
};

export default Landing;
