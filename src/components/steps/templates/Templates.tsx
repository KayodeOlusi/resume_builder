import { motion } from "framer-motion";
import ImageTemplates from "./ImageTemplates";

const Templates = () => {
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
        initial="hidden"
        animate="visible"
        variants={header_variants}
        className="text-center text-alium font-semibold text-2xl lg:text-4xl"
      >
        Choose your resume templates
      </motion.h1>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={para_variants}
        className="text-center text-herotext font-semibold text-base mt-5"
      >
        You can always change the template at any time to suit your needs.
      </motion.p>
      <ImageTemplates />
    </div>
  );
};

export default Templates;
