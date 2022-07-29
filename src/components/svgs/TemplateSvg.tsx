import { FC } from "react";
import { motion } from "framer-motion";

const TemplateSvg: FC = () => {
  const svg_variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const path_variant = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.svg
      variants={svg_variant}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
      width="150"
      height="150"
      viewBox="0 0 150 150"
      fill="none"
      className="h-32 w-32 lg:h-3/5 lg:w-3/5 xl:w-fit xl:h-fit"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        variants={svg_variant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.5 }}
        cx="75"
        cy="75"
        r="75"
        fill="#1E90FF"
        fillOpacity="0.2"
      />
      <motion.path
        variants={path_variant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        d="M78.6094 80.1562H85.6406V94.3359H78.6094V80.1562Z"
        fill="#72BAFF"
      />
      <motion.path
        variants={path_variant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        d="M85.6406 55.5469H95.1575L85.6406 46.03V55.5469Z"
        fill="#72BAFF"
      />
      <motion.path
        variants={path_variant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        d="M64.5469 80.1562H68.0625V87.3047H64.5469V80.1562Z"
        fill="#72BAFF"
      />
      <motion.path
        variants={path_variant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        d="M64.5469 66.0938H85.6406V69.6094H64.5469V66.0938Z"
        fill="#72BAFF"
      />
      <motion.path
        variants={path_variant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
        d="M82.125 57.3047V45H55.7578C54.7733 45 54 45.7733 54 46.7578V103.242C54 104.226 54.7733 105 55.7578 105H94.4297C95.4142 105 96.1875 104.226 96.1875 103.242V59.0625H83.8828C82.8983 59.0625 82.125 58.2889 82.125 57.3047ZM69.8203 97.8516H62.7891C61.8046 97.8516 61.0312 97.078 61.0312 96.0938C61.0312 95.1093 61.8046 94.3359 62.7891 94.3359H69.8203C70.8048 94.3359 71.5781 95.1093 71.5781 96.0938C71.5781 97.078 70.8048 97.8516 69.8203 97.8516ZM71.5781 89.0625C71.5781 90.0468 70.8048 90.8203 69.8203 90.8203H62.7891C61.8046 90.8203 61.0312 90.0468 61.0312 89.0625V78.3984C61.0312 77.4139 61.8046 76.6406 62.7891 76.6406H69.8203C70.8048 76.6406 71.5781 77.4139 71.5781 78.3984V89.0625ZM89.1562 96.0938C89.1562 97.078 88.3829 97.8516 87.3984 97.8516H76.8516C75.8671 97.8516 75.0938 97.078 75.0938 96.0938V78.3984C75.0938 77.4139 75.8671 76.6406 76.8516 76.6406H87.3984C88.3829 76.6406 89.1562 77.4139 89.1562 78.3984V96.0938ZM89.1562 64.3359V71.3672C89.1562 72.3514 88.3829 73.125 87.3984 73.125H62.7891C61.8046 73.125 61.0312 72.3514 61.0312 71.3672V64.3359C61.0312 63.3514 61.8046 62.5781 62.7891 62.5781H87.3984C88.3829 62.5781 89.1562 63.3514 89.1562 64.3359Z"
        fill="#72BAFF"
      />
    </motion.svg>
  );
};

export default TemplateSvg;
