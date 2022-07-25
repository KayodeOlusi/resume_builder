import { FC } from "react";
import { motion } from "framer-motion";
import { svgs } from "../../constants";
import { useNavigate } from "react-router-dom";

const Hero: FC = () => {
  const navigate = useNavigate();

  return (
    <div
      data-testid="hero"
      className="flex flex-col-reverse mt-4 items-center space-y-24
       md:space-y-0 md:flex-row md:justify-between md:mt-36"
    >
      <div className="hero__text">
        <h1
          className="text-xl text-center leading-6 text-herotext font-semibold
         md:text-3xl md:text-left md:leading-10 xl:text-4xl"
        >
          With Alium, standing <span className="text-alium">out</span> <br />{" "}
          becomes a habit.
        </h1>
        <div className="w-full md:w-[24.75rem] mt-4 md:text-left lg:w-[28.75rem]">
          <h4
            className="font-semibold text-center text-sm text-hero px-5
           md:px-0 md:text-lg md:text-left xl:text-2xl"
          >
            Build professional and eye catching resumes in just few minutes with
            our industry standard templates.
          </h4>
        </div>
        <div className="mt-14 text-center md:mt-4 md:text-left">
          <button
            className="bg-herobtn rounded-sm text-white px-6 py-4 mb-6 text-xs
            md:mb-0 md:px-5 xl:px-10 xl:py-6"
            onClick={() => navigate("/page")}
          >
            Build My Resume
          </button>
        </div>
      </div>
      <div className="hero__image">
        <img
          src={svgs.herofirst}
          alt=""
          className="w-64 h-64 md:w-full md:h-full"
        />
      </div>
    </div>
  );
};

export default Hero;
