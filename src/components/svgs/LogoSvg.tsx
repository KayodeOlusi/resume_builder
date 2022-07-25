import { motion } from "framer-motion";

const LogoSvg = () => {
  const svg_variant = {
    hidden: {
      rotate: -100,
    },
    visible: {
      rotate: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const variant = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.svg
      width="32"
      height="30"
      viewBox="0 0 32 30"
      fill="none"
      variants={svg_variant}
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 md:w-8 md:h-8"
    >
      <motion.path
        variants={variant}
        d="M31.1215 11.2517C30.7459 10.1004 29.7207 9.3565 28.5097 9.3565H20.7001L18.2408 1.88808C17.8628 0.740004 16.8397 0 15.6322 0C15.6283 0 15.6243 -3.35395e-08 15.6205 6.10179e-05C14.408 0.00482303 13.3853 0.753985 13.0152 1.90865L10.6276 9.3565H2.75299C1.53892 9.3565 0.512891 10.1029 0.139134 11.258C-0.234684 12.4131 0.159586 13.6191 1.14361 14.3304L7.515 18.9357L5.06257 26.3834C4.68301 27.5361 5.07069 28.7438 6.05019 29.4602C6.54215 29.82 7.10681 30 7.67184 30C8.23175 29.9999 8.79195 29.8231 9.28146 29.4693L15.6639 24.8561L21.9705 29.4615C22.9489 30.1761 24.216 30.1795 25.1985 29.4705C26.1809 28.7615 26.5767 27.5579 26.2069 26.4041L23.8126 18.9357L30.1299 14.3225C31.1079 13.6083 31.4972 12.403 31.1215 11.2517Z"
        fill="#1E90FF"
      />
    </motion.svg>
  );
};

export default LogoSvg;
