import { ComponentType } from "react";
import { motion } from "framer-motion";

const withMotionWrap = (Component: ComponentType) => () =>
  (
    <motion.div
      whileInView={{ opacity: [0, 0, 1], y: [100, 50, 0] }}
      transition={{ duration: 1 }}
    >
      <Component />
    </motion.div>
  );

export default withMotionWrap;
