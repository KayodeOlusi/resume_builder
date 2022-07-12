import { FC } from "react";
// Components
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Hero from "../../components/landing/Hero";
import Offers from "../../components/landing/Offers";
import Companies from "../../components/landing/Companies";
import Explore from "../../components/landing/Explore";
import Register from "../../components/landing/Register";
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
      <Footer />
    </div>
  );
};

export default Landing;
