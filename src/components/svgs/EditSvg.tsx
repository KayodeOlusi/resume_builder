import { motion } from "framer-motion";

const EditSvg = () => {
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
      width="150"
      height="150"
      viewBox="0 0 150 150"
      fill="none"
      variants={svg_variant}
      initial="hidden"
      animate="visible"
      className="h-32 w-32 lg:h-3/5 lg:w-3/5 xl:w-fit xl:h-fit"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        variants={svg_variant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 1.5 }}
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
        transition={{ duration: 0.5, delay: 1.2 }}
        d="M101.036 63.9594C99.7519 62.6746 97.7108 62.5938 96.3306 63.7185C96.131 63.8811 96.2856 63.7378 93.2466 66.7768L101.135 74.6655L103.97 71.8658C105.341 70.4951 105.341 68.2648 103.97 66.8939L101.036 63.9594Z"
        fill="#1E90FF"
      />
      <motion.path
        variants={path_variant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 1.2 }}
        d="M77.0695 83.1033L72.4291 93.0471C72.1166 93.7171 72.2564 94.5108 72.779 95.0334C73.3017 95.5562 74.0957 95.6959 74.7654 95.3834L84.7092 90.7429C85.1026 90.5592 83.9116 91.6739 98.6336 77.1357L90.7606 69.2626C76.164 83.8594 77.2568 82.7022 77.0695 83.1033Z"
        fill="#1E90FF"
      />
      <motion.path
        variants={path_variant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 1.2 }}
        d="M87.6708 92.9029C87.2402 93.3279 86.7441 93.673 86.196 93.9288L76.2521 98.5693C74.2968 99.4819 71.9079 99.1344 70.2934 97.5196C68.7312 95.9575 68.3092 93.5627 69.2434 91.5605L73.8839 81.6164C74.1445 81.058 74.4977 80.5539 74.9336 80.1179L89.8828 65.1687V50.2734C89.8828 47.3657 87.5171 45 84.6094 45H50.2734C47.3657 45 45 47.3657 45 50.2734V99.7266C45 102.634 47.3657 105 50.2734 105H84.6094C87.5171 105 89.8828 102.634 89.8828 99.7266V90.7182L87.6708 92.9029ZM54.3751 56.3672H80.6251C81.5959 56.3672 82.3829 57.1542 82.3829 58.125C82.3829 59.0958 81.5959 59.8828 80.6251 59.8828H54.3751C53.4043 59.8828 52.6173 59.0958 52.6173 58.125C52.6173 57.1542 53.4043 56.3672 54.3751 56.3672ZM54.3751 65.7422H75.0001C75.9709 65.7422 76.7579 66.5292 76.7579 67.5C76.7579 68.4708 75.9709 69.2578 75.0001 69.2578H54.3751C53.4043 69.2578 52.6173 68.4708 52.6173 67.5C52.6173 66.5292 53.4043 65.7422 54.3751 65.7422ZM52.6173 76.875C52.6173 75.9042 53.4043 75.1172 54.3751 75.1172H69.3751C70.3459 75.1172 71.1329 75.9042 71.1329 76.875C71.1329 77.8458 70.3459 78.6328 69.3751 78.6328H54.3751C53.4043 78.6328 52.6173 77.8458 52.6173 76.875Z"
        fill="#1E90FF"
      />
    </motion.svg>
  );
};

export default EditSvg;
