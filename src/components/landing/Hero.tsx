import { FC } from "react";
import HeroSvg from "../svgs/HeroSvg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import withMotionWrap from "../../wrapper/MotionWrap";

const Hero: FC = () => {
  const navigate = useNavigate();

  const text_variants = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      data-testid="hero"
      className="flex flex-col-reverse mt-4 items-center overflow-y-hidden space-y-24
       md:space-y-0 md:flex-row md:justify-between md:mt-36"
    >
      <motion.div
        className="hero__text"
        variants={text_variants}
        initial="hidden"
        animate="visible"
      >
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
      </motion.div>
      <div className="hero__image">
        <HeroSvg />
      </div>
    </motion.div>
  );
};

export default withMotionWrap(Hero);
