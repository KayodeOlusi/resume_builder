import { FC } from "react";
// Components
import Footer from "../../components/footer";
import Hero from "../../components/landing/Hero";
import Offers from "../../components/landing/Offers";
import Explore from "../../components/landing/Explore";
import Register from "../../components/landing/Register";
import Companies from "../../components/landing/Companies";
import Testimonials from "../../components/landing/Testimonials";

const Landing: FC = () => {
  return (
    <div>
      <Hero />
      <Companies />
      <Explore />
      <Register />
      <Offers />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Landing;
