import { motion } from "framer-motion";

const DownloadSvg = () => {
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
      xmlns="http://www.w3.org/2000/svg"
      className="h-32 w-32 lg:h-3/5 lg:w-3/5 xl:w-fit xl:h-fit"
    >
      <motion.circle
        variants={svg_variant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 2.5 }}
        cx="75"
        cy="75"
        r="75"
        fill="#1E90FF"
        fillOpacity="0.2"
      />
      <motion.path
        d="M84.7376 73.8825C84.3126 73.035 83.4476 72.5 82.5002 72.5H77.5001V47.5C77.5001 46.12 76.3826 45 75.0002 45C73.6177 45 72.5002 46.12 72.5002 47.5V72.4999H67.5002C66.5527 72.4999 65.6876 73.0349 65.2627 73.8824C64.8427 74.7299 64.9327 75.7424 65.5002 76.4999L73.0002 86.4998C73.0327 86.5424 73.0827 86.5574 73.1178 86.5973C73.2828 86.7923 73.4778 86.9423 73.6953 87.0798C73.7853 87.1348 73.8552 87.2073 73.9527 87.2523C74.2728 87.4023 74.6227 87.4998 75.0003 87.4998C75.3779 87.4998 75.7278 87.4023 76.0503 87.2523C76.1453 87.2073 76.2177 87.1348 76.3053 87.0798C76.5228 86.9423 76.7178 86.7923 76.8828 86.5973C76.9152 86.5574 76.9677 86.5424 77.0003 86.4998L84.5003 76.4999C85.0702 75.7425 85.1602 74.73 84.7376 73.8825Z"
        fill="#1E90FF"
        variants={path_variant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 1.9 }}
      />
      <motion.path
        d="M102.5 82.5C101.118 82.5 100 83.62 100 85V92.5C100 96.6349 96.635 100 92.5001 100H57.5C53.3651 100 50 96.6349 50 92.5V85C50 83.62 48.8825 82.5 47.5001 82.5C46.1175 82.5 45 83.62 45 85V92.5C45 99.3925 50.6075 105 57.5 105H92.5001C99.3925 105 105 99.3925 105 92.5V85C105 83.62 103.882 82.5 102.5 82.5Z"
        fill="#1E90FF"
        variants={path_variant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 1.9 }}
      />
    </motion.svg>
  );
};

export default DownloadSvg;
