import { FC } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Visuals from "../../components/steps/Visuals";

const Steps: FC = () => {
  const navigate = useNavigate();

  const header_variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const para_variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1,
      },
    },
  };

  return (
    <div className="mt-20 px-8 lg:px-0">
      <motion.h1
        className="text-center text-alium font-semibold text-2xl lg:text-4xl"
        initial="hidden"
        animate="visible"
        variants={header_variants}
      >
        Let us get you your dream job in 3 steps.
      </motion.h1>
      <motion.p
        className="text-center text-herotext font-semibold text-base mt-5"
        initial="hidden"
        animate="visible"
        variants={para_variants}
      >
        It is as easy as 1, 2, yes, you get the point. Shall we?
      </motion.p>
      <Visuals />
      <div className="text-center md:mt-8 lg:mt-20">
        <button
          className="bg-herobtn rounded-sm text-white px-6 py-4 mb-6 text-xs
         md:mb-0 md:px-5 xl:px-10 xl:py-6"
          onClick={() => navigate("/page/templates")}
        >
          Build My Resume
        </button>
      </div>
    </div>
  );
};

export default Steps;
