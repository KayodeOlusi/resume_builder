import { FC } from "react";
import { motion } from "framer-motion";
import TemplateSvg from "../svgs/TemplateSvg";
import EditSvg from "../svgs/EditSvg";
import DownloadSvg from "../svgs/DownloadSvg";

const Visuals: FC = () => {
  const text_variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <div
      className="mt-14 mb-16 grid grid-rows-3 grid-flow-col gap-12
     lg:grid-cols-5 lg:grid-rows-1 lg:grid-flow-row lg:gap-4 lg:mb-0"
    >
      <div className="text-center flex flex-col space-y-4 items-center">
        <TemplateSvg />
        <motion.h6
          variants={text_variant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="font-semibold text-herotext text-xl"
        >
          Step 1
        </motion.h6>
        <motion.p
          variants={text_variant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold text-hero px-12 sm:px-16 md:px-0"
        >
          Select your preferred template
        </motion.p>
      </div>
      <hr className="bg-alium h-2 hidden mt-16 lg:inline-block lg:w-44 xl:w-56 xl:mt-20" />
      <div className="text-center flex flex-col space-y-4 items-center">
        <EditSvg />
        <motion.h6
          variants={text_variant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 1.5 }}
          className="font-semibold text-herotext text-xl"
        >
          Step 2
        </motion.h6>
        <motion.p
          variants={text_variant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 1.5 }}
          className="text-sm font-semibold text-hero px-14 sm:px-16 md:px-0"
        >
          Fill using your details.
        </motion.p>
      </div>
      <hr className="bg-alium h-2 hidden mt-16 lg:inline-block lg:w-44 xl:w-56 xl:mt-20" />
      <div className="text-center flex flex-col space-y-4 items-center">
        <DownloadSvg />
        <motion.h6
          variants={text_variant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 2.5 }}
          className="font-semibold text-herotext text-xl"
        >
          Step 3
        </motion.h6>
        <motion.p
          variants={text_variant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 2.5 }}
          className="text-sm font-semibold text-hero px-12 sm:px-16 md:px-0"
        >
          Download and stun your employers.
        </motion.p>
      </div>
    </div>
  );
};

export default Visuals;
